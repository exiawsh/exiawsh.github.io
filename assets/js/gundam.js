/* ============================================================================
   GUNDAM HUD THEME  ::  runtime effects
   - GN particle / starfield background (canvas)
   - HUD viewport frame + live readout
   - System boot sequence overlay
   - Trans-Am mode toggle (easter egg)
   - Scroll reveal for sections & publication cards
   Self-contained, no dependencies. Respects prefers-reduced-motion.
   ========================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onReady(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  /* --------------------------------------------------------------------------
     1. GN PARTICLE BACKGROUND
     -------------------------------------------------------------------------- */
  function initBackground() {
    if (reduceMotion) return;
    var canvas = document.createElement("canvas");
    canvas.id = "gundam-bg";
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    var w, h, dpr, particles = [], stars = [];

    function accent() {
      // pull live accent colour so Trans-Am mode recolours particles
      var c = getComputedStyle(document.body).getPropertyValue("--g-gn").trim();
      return c || "#2ff3cf";
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(innerWidth * dpr);
      h = canvas.height = Math.floor(innerHeight * dpr);
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
      build();
    }

    function build() {
      var area = innerWidth * innerHeight;
      var pCount = Math.max(28, Math.min(70, Math.round(area / 22000)));
      var sCount = Math.max(40, Math.min(140, Math.round(area / 9000)));
      particles = [];
      stars = [];
      for (var i = 0; i < pCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25 * dpr,
          vy: (Math.random() - 0.5) * 0.25 * dpr - 0.12 * dpr,
          r: (Math.random() * 1.8 + 0.6) * dpr,
          a: Math.random() * 0.5 + 0.25
        });
      }
      for (var j = 0; j < sCount; j++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.1 * dpr + 0.2,
          tw: Math.random() * Math.PI * 2
        });
      }
    }

    function draw() {
      var ta = document.body.classList.contains("trans-am");
      if (ta) {
        // translucent wash -> GN particle afterimage streaks (Trans-Am)
        ctx.fillStyle = "rgba(9, 2, 5, 0.16)";
        ctx.fillRect(0, 0, w, h);
      } else {
        ctx.clearRect(0, 0, w, h);
      }
      var col = accent();
      var spd = ta ? 3.6 : 1;

      // stars
      for (var s = 0; s < stars.length; s++) {
        var st = stars[s];
        st.tw += 0.02;
        var tw = (Math.sin(st.tw) + 1) * 0.5;
        ctx.globalAlpha = 0.25 + tw * 0.5;
        ctx.fillStyle = "#9fb6e0";
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // GN particles + links
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx * spd; p.y += p.vy * spd;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

        ctx.globalAlpha = ta ? Math.min(1, p.a + 0.3) : p.a;
        ctx.fillStyle = col;
        ctx.shadowColor = col;
        ctx.shadowBlur = (ta ? 16 : 8) * dpr;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        for (var k = i + 1; k < particles.length; k++) {
          var q = particles[k];
          var dx = p.x - q.x, dy = p.y - q.y;
          var dist = dx * dx + dy * dy;
          var max = (130 * dpr) * (130 * dpr);
          if (dist < max) {
            ctx.globalAlpha = (1 - dist / max) * (ta ? 0.07 : 0.18);
            ctx.strokeStyle = col;
            ctx.lineWidth = 0.6 * dpr;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    requestAnimationFrame(draw);
  }

  /* --------------------------------------------------------------------------
     2. HUD FRAME + LIVE READOUT
     -------------------------------------------------------------------------- */
  function initHud() {
    var frame = document.createElement("div");
    frame.className = "hud-frame";
    ["tl", "tr", "bl", "br"].forEach(function (pos) {
      var c = document.createElement("div");
      c.className = "hud-corner " + pos;
      frame.appendChild(c);
    });
    document.body.appendChild(frame);
  }

  /* --------------------------------------------------------------------------
     3. BOOT SEQUENCE
     -------------------------------------------------------------------------- */
  function initBoot() {
    if (reduceMotion || sessionStorage.getItem("gundamBooted")) return;
    sessionStorage.setItem("gundamBooted", "1");

    var boot = document.createElement("div");
    boot.id = "gundam-boot";
    boot.innerHTML =
      '<div class="boot-ring"></div>' +
      '<div class="boot-title">MOBILE SUIT ONLINE</div>' +
      '<div class="boot-lines"></div>' +
      '<div class="boot-skip">[ CLICK / PRESS ANY KEY TO SKIP ]</div>';
    document.body.appendChild(boot);

    var lines = [
      "&gt; INITIALIZING PSYCO-FRAME ............ <span class='ok'>OK</span>",
      "&gt; GN DRIVE SPOOL-UP ................... <span class='ok'>OK</span>",
      "&gt; PHASE SHIFT ARMOR ................... <span class='ok'>ACTIVE</span>",
      "&gt; LINKING PILOT NEURAL INTERFACE ...... <span class='ok'>SYNCED</span>",
      "&gt; LOADING COMBAT RECORD (PUBLICATIONS)  <span class='ok'>OK</span>",
      "&gt; ALL SYSTEMS GREEN. LAUNCHING ........"
    ];
    var box = boot.querySelector(".boot-lines");
    var i = 0;
    var timer = setInterval(function () {
      if (i < lines.length) {
        box.innerHTML += lines[i] + "<br>";
        i++;
      } else {
        clearInterval(timer);
        close();
      }
    }, 230);

    var closed = false;
    function close() {
      if (closed) return;
      closed = true;
      clearInterval(timer);
      boot.classList.add("hide");
      setTimeout(function () { if (boot.parentNode) boot.parentNode.removeChild(boot); }, 700);
      document.removeEventListener("keydown", close);
      boot.removeEventListener("click", close);

      // Dramatic Trans-Am flare on first open, then settle back to normal mode
      // (Trans-Am is a temporary overdrive in canon).
      if (!reduceMotion && !document.body.classList.contains("trans-am")) {
        setTimeout(function () {
          setTransAm(true, { transient: true });
          if (initCockpit._refresh) initCockpit._refresh();
          setTimeout(function () {
            setTransAm(false, { transient: true });
            if (initCockpit._refresh) initCockpit._refresh();
          }, 4200);
        }, 600);
      }
    }
    document.addEventListener("keydown", close);
    boot.addEventListener("click", close);
    setTimeout(close, 3200);
  }

  /* --------------------------------------------------------------------------
     4. TRANS-AM  (dramatic activation burst + sustained red overdrive)
     -------------------------------------------------------------------------- */
  function transAmBurst() {
    if (reduceMotion) return;
    document.body.classList.add("ta-shake");
    setTimeout(function () { document.body.classList.remove("ta-shake"); }, 700);

    var fx = document.createElement("div");
    fx.id = "trans-am-fx";
    fx.innerHTML =
      '<div class="ta-flash"></div>' +
      '<div class="ta-ring"></div><div class="ta-ring r2"></div><div class="ta-ring r3"></div>' +
      '<div class="ta-text">TRANS-AM<span class="ta-sub">GN DRIVE &middot; OVERDRIVE</span></div>';
    document.body.appendChild(fx);
    setTimeout(function () { if (fx.parentNode) fx.parentNode.removeChild(fx); }, 2100);
  }

  function setTransAm(on, opts) {
    opts = opts || {};
    if (on) {
      document.body.classList.add("trans-am");
      if (!opts.silent) transAmBurst();
    } else {
      document.body.classList.remove("trans-am");
    }
    if (!opts.transient) {
      try { localStorage.setItem("gundamTransAm", on ? "1" : "0"); } catch (e) {}
    }
  }

  /* Cockpit dashboard / instrument console -------------------------------- */
  function initCockpit() {
    // sustained-red aura overlay
    var aura = document.createElement("div");
    aura.id = "trans-am-aura";
    document.body.appendChild(aura);

    var pit = document.createElement("div");
    pit.id = "cockpit";
    pit.innerHTML =
      '<div class="cp-reticle"><b></b><b class="v"></b></div>' +
      '<div class="cp-console">' +
        '<div class="cp-panel">' +
          '<div class="cp-gauge"><div class="ring"></div><div class="num">60%</div></div>' +
          '<div class="cp-label">GN OUTPUT</div>' +
        '</div>' +
        '<div class="cp-panel cp-hide-md">' +
          '<div class="cp-bars"><i></i><i></i><i></i><i></i><i></i></div>' +
          '<div class="cp-label">PARTICLE</div>' +
        '</div>' +
        '<div class="cp-panel cp-hide-lg">' +
          '<div class="cp-lamps">' +
            '<span class="cp-lamp on" style="--c:#59ff8d"></span>' +
            '<span class="cp-lamp on" style="--c:#ffcf3f"></span>' +
            '<span class="cp-lamp" style="--c:#ff3b46"></span>' +
          '</div>' +
          '<div class="cp-label">SYSTEMS</div>' +
        '</div>' +
        '<div class="cp-ticker cp-hide-sm"><span></span></div>' +
        '<div class="cp-transam">' +
          '<button type="button" aria-label="Activate Trans-Am">TRANS-AM</button>' +
          '<span class="st">SYSTEM: STANDBY</span>' +
        '</div>' +
        '<div class="cp-panel cp-hide-md">' +
          '<div class="cp-radar"><span class="blip b1"></span><span class="blip b2"></span></div>' +
        '</div>' +
        '<div class="cp-panel cp-hide-sm">' +
          '<div class="cp-label">SYS CLOCK</div>' +
          '<div class="cp-readout" data-clock>--:--:--</div>' +
          '<div class="cp-label" data-scroll>SCROLL 0%</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(pit);

    var lever = pit.querySelector(".cp-transam button");
    var status = pit.querySelector(".cp-transam .st");
    var gauge = pit.querySelector(".cp-gauge .ring");
    var gnum = pit.querySelector(".cp-gauge .num");
    var ticker = pit.querySelector(".cp-ticker span");
    var clock = pit.querySelector("[data-clock]");
    var scroll = pit.querySelector("[data-scroll]");

    var MSG_OK = "GN PARTICLE DRIVE NOMINAL  //  PSYCO-FRAME LINK STABLE  //  AMBAC ONLINE  //  WELCOME, PILOT  //  SELECT \"TRANS-AM\" TO ENGAGE OVERDRIVE  //  ";
    var MSG_TA = "!! WARNING: TRANS-AM ENGAGED  //  GN DRIVE OUTPUT 300%  //  PARTICLE DENSITY CRITICAL  //  AFTERIMAGE ACTIVE  //  COMBAT MODE  //  ";

    function refresh() {
      var on = document.body.classList.contains("trans-am");
      if (ticker) ticker.textContent = on ? MSG_TA : MSG_OK;
      if (status) status.textContent = on ? "SYSTEM: OVERDRIVE" : "SYSTEM: STANDBY";
      if (gauge && gnum) {
        var v = on ? 100 : 60;
        gauge.style.setProperty("--val", v);
        gnum.textContent = (on ? "300" : "60") + (on ? "%" : "%");
      }
    }

    lever.addEventListener("click", function () {
      setTransAm(!document.body.classList.contains("trans-am"));
      refresh();
    });

    function tick() {
      if (clock) clock.textContent = new Date().toTimeString().slice(0, 8);
      if (scroll) {
        var p = Math.round((window.scrollY / (document.body.scrollHeight - innerHeight || 1)) * 100);
        scroll.textContent = "SCROLL " + (isFinite(p) ? p : 0) + "%";
      }
    }
    setInterval(tick, 1000);
    window.addEventListener("scroll", tick, { passive: true });
    tick();

    // restore persisted sustained Trans-Am (no burst on silent restore)
    if (localStorage.getItem("gundamTransAm") === "1") {
      setTransAm(true, { silent: true });
    }
    refresh();

    // expose for boot auto-activation
    initCockpit._refresh = refresh;
  }

  /* --------------------------------------------------------------------------
     5b. MOBILE SUIT ARCHIVE -> lazy official YouTube embeds
     Only loads the iframe after the user clicks (privacy + performance).
     -------------------------------------------------------------------------- */
  function initMSArchive() {
    var cards = document.querySelectorAll(".ms-card[data-yt]");
    cards.forEach(function (card) {
      var media = card.querySelector(".ms-media");
      if (!media) return;

      // crisp maxres thumbnail with graceful fallback to hqdefault
      var thumb = media.querySelector(".ms-thumb");
      if (thumb) {
        thumb.addEventListener("error", function onErr() {
          var id = card.getAttribute("data-yt");
          if (id && thumb.src.indexOf("maxresdefault") !== -1) {
            thumb.src = "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg";
          } else {
            thumb.removeEventListener("error", onErr);
          }
        });
      }

      media.addEventListener("click", function deploy() {
        var id = card.getAttribute("data-yt");
        if (!id || media.querySelector("iframe")) return;
        var iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube-nocookie.com/embed/" + id +
          "?autoplay=1&rel=0&modestbranding=1";
        iframe.title = "Official Gundam video";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("loading", "lazy");
        // remove facade
        media.querySelectorAll(".ms-play, .ms-scan, .ms-corner, .ms-thumb").forEach(function (el) { el.remove(); });
        media.style.cursor = "default";
        media.appendChild(iframe);
        media.removeEventListener("click", deploy);
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. SCROLL REVEAL
     -------------------------------------------------------------------------- */
  function initReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    var targets = document.querySelectorAll(
      ".page__content h1, .paper-box, .page__content > ul, .page__content > p"
    );
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });

    targets.forEach(function (t) {
      t.classList.add("g-reveal");
      io.observe(t);
    });
  }

  onReady(function () {
    try { initBackground(); } catch (e) {}
    try { initHud(); } catch (e) {}
    try { initCockpit(); } catch (e) {}
    try { initMSArchive(); } catch (e) {}
    try { initReveal(); } catch (e) {}
    try { initBoot(); } catch (e) {}
  });
})();
