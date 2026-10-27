/* ============================================================================
   GUNDAM HUD THEME  ::  runtime effects
   - Minovsky particle background (canvas)
   - HUD viewport frame + live readout
   - System boot sequence overlay
   - NT-D (Destroy Mode) toggle
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
     1. MINOVSKY PARTICLE BACKGROUND
     -------------------------------------------------------------------------- */
  function initBackground() {
    if (reduceMotion) return;
    var canvas = document.createElement("canvas");
    canvas.id = "gundam-bg";
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    var w, h, dpr, particles = [];

    function accent() {
      // pull live accent colour so NT-D recolours particles
      var c = getComputedStyle(document.body).getPropertyValue("--g-gn").trim();
      return c || "#5E9A1E";
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
      var pCount = Math.max(18, Math.min(54, Math.round(area / 26000)));
      particles = [];
      for (var i = 0; i < pCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.22 * dpr,
          vy: (Math.random() - 0.5) * 0.22 * dpr - 0.10 * dpr,
          r: (Math.random() * 1.6 + 0.7) * dpr,
          a: Math.random() * 0.22 + 0.12
        });
      }
    }

    function draw() {
      var ta = document.body.classList.contains("ntd");
      ctx.clearRect(0, 0, w, h);
      var col = accent();
      var spd = ta ? 3.6 : 1;

      // particles + links
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx * spd; p.y += p.vy * spd;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

        ctx.globalAlpha = ta ? Math.min(1, p.a + 0.2) : p.a;
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        for (var k = i + 1; k < particles.length; k++) {
          var q = particles[k];
          var dx = p.x - q.x, dy = p.y - q.y;
          var dist = dx * dx + dy * dy;
          var max = (130 * dpr) * (130 * dpr);
          if (dist < max) {
            ctx.globalAlpha = (1 - dist / max) * (ta ? 0.16 : 0.07);
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
     1b. HERO -> lift the banner above the two-column #main (full width)
     -------------------------------------------------------------------------- */
  function initHero() {
    var hero = document.getElementById("hero");
    var main = document.getElementById("main");
    if (hero && main && main.parentNode && hero.parentNode !== main.parentNode) {
      main.parentNode.insertBefore(hero, main);
    }
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
      "&gt; INITIALIZING PSYCHO-FRAME ........... <span class='ok'>OK</span>",
      "&gt; MINOVSKY REACTOR IGNITION ........... <span class='ok'>OK</span>",
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
    }
    document.addEventListener("keydown", close);
    boot.addEventListener("click", close);
    setTimeout(close, 3200);
  }

  /* --------------------------------------------------------------------------
     4. NT-D  (activation burst + sustained red psycho-frame)
     -------------------------------------------------------------------------- */
  function ntdBurst() {
    if (reduceMotion) return;
    document.body.classList.add("ntd-shake");
    setTimeout(function () { document.body.classList.remove("ntd-shake"); }, 700);

    var fx = document.createElement("div");
    fx.id = "ntd-fx";
    fx.innerHTML =
      '<div class="ta-flash"></div><div class="ta-rays"></div>' +
      '<div class="ta-ring"></div><div class="ta-ring r2"></div><div class="ta-ring r3"></div>' +
      '<div class="ta-text">NT-D<span class="ta-sub">DESTROY MODE &middot; PSYCHO-FRAME RESONANCE</span></div>';
    document.body.appendChild(fx);
    setTimeout(function () { if (fx.parentNode) fx.parentNode.removeChild(fx); }, 2100);
  }

  function setNTD(on, opts) {
    opts = opts || {};
    if (on) {
      document.body.classList.add("ntd");
      if (!opts.silent) ntdBurst();
    } else {
      document.body.classList.remove("ntd");
    }
    if (!opts.transient) {
      try { localStorage.setItem("gundamNTD", on ? "1" : "0"); } catch (e) {}
    }
  }

  /* Cockpit dashboard / instrument console -------------------------------- */
  function initCockpit() {
    // sustained psycho-frame aura overlay
    var aura = document.createElement("div");
    aura.id = "ntd-aura";
    document.body.appendChild(aura);

    var pit = document.createElement("div");
    pit.id = "cockpit";
    pit.innerHTML =
      '<div class="cp-reticle"><b></b><b class="v"></b></div>' +
      '<div class="cp-console">' +
        '<div class="cp-panel">' +
          '<div class="cp-gauge"><div class="ring"></div><div class="num">60%</div></div>' +
          '<div class="cp-label">PSYCHO-FRAME</div>' +
        '</div>' +
        '<div class="cp-panel cp-hide-md">' +
          '<div class="cp-bars"><i></i><i></i><i></i><i></i><i></i></div>' +
          '<div class="cp-label">MINOVSKY</div>' +
        '</div>' +
        '<div class="cp-panel cp-hide-lg">' +
          '<div class="cp-lamps">' +
            '<span class="cp-lamp on" style="--c:#5E9A1E"></span>' +
            '<span class="cp-lamp on" style="--c:#C08A12"></span>' +
            '<span class="cp-lamp" style="--c:#C8323C"></span>' +
          '</div>' +
          '<div class="cp-label">SYSTEMS</div>' +
        '</div>' +
        '<div class="cp-ticker cp-hide-sm"><span></span></div>' +
        '<div class="cp-ntd">' +
          '<button type="button" aria-label="Activate NT-D">NT-D</button>' +
          '<span class="st">UNICORN MODE</span>' +
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

    var lever = pit.querySelector(".cp-ntd button");
    var status = pit.querySelector(".cp-ntd .st");
    var gauge = pit.querySelector(".cp-gauge .ring");
    var gnum = pit.querySelector(".cp-gauge .num");
    var ticker = pit.querySelector(".cp-ticker span");
    var clock = pit.querySelector("[data-clock]");
    var scroll = pit.querySelector("[data-scroll]");

    var MSG_OK = "MINOVSKY REACTOR NOMINAL  //  PSYCHO-FRAME LINK STABLE  //  AMBAC ONLINE  //  WELCOME, PILOT  //  SELECT \"NT-D\" TO RELEASE LA+ LIMITER  //  ";
    var MSG_TA = "!! NT-D ENGAGED  //  DESTROY MODE  //  PSYCHO-FRAME RESONANCE 100%  //  NEWTYPE DETECTED  //  LIMITER RELEASED  //  ";

    function refresh() {
      var on = document.body.classList.contains("ntd");
      if (ticker) ticker.textContent = on ? MSG_TA : MSG_OK;
      document.querySelectorAll("[data-ms-mode]").forEach(function (el) { el.textContent = on ? "DESTROY MODE" : "UNICORN MODE"; });
      document.querySelectorAll("[data-ms-status]").forEach(function (el) { el.innerHTML = on ? "NT-D &middot; ENGAGED" : "PSYCHO-FRAME &middot; STABLE"; });
      if (status) status.textContent = on ? "DESTROY MODE" : "UNICORN MODE";
      if (gauge && gnum) {
        var v = on ? 100 : 60;
        gauge.style.setProperty("--val", v);
        gnum.textContent = on ? "MAX" : "60%";
      }
    }

    lever.addEventListener("click", function () {
      setNTD(!document.body.classList.contains("ntd"));
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

    // restore persisted NT-D (no burst on silent restore)
    if (localStorage.getItem("gundamNTD") === "1") {
      setNTD(true, { silent: true });
    }
    refresh();

    // expose for boot auto-activation
    initCockpit._refresh = refresh;
  }

  /* --------------------------------------------------------------------------
     5b. HERO psycho-frame traces + monitor parallax, scan line on hangar figures
     -------------------------------------------------------------------------- */
  function initHeroFx() {
    var hero = document.getElementById("hero");
    if (!hero) return;

    // a bright pulse travelling along each psycho-frame trace
    hero.querySelectorAll(".hero__psy path:not(.thin)").forEach(function (p, i) {
      var run = p.cloneNode();
      run.setAttribute("class", "run");
      run.style.animationDelay = (i * 0.45) + "s";
      p.parentNode.appendChild(run);
    });

    if (reduceMotion || !window.matchMedia("(hover: hover)").matches) return;
    var imgs = hero.querySelectorAll(".ms__img img");
    hero.addEventListener("mousemove", function (e) {
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      imgs.forEach(function (img, k) {
        var d = k === 0 ? 1 : -1;
        img.style.setProperty("--px", (x * 18 * d).toFixed(1) + "px");
        img.style.setProperty("--py", (y * 12).toFixed(1) + "px");
      });
    });
    hero.addEventListener("mouseleave", function () {
      imgs.forEach(function (img) { img.style.setProperty("--px", "0px"); img.style.setProperty("--py", "0px"); });
    });
  }

  function initHangar() {
    document.querySelectorAll(".fw-media").forEach(function (m) {
      var s = document.createElement("span");
      s.className = "scan";
      m.appendChild(s);
    });
  }

  /* --------------------------------------------------------------------------
     5. SCROLL REVEAL
     -------------------------------------------------------------------------- */
  function initReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    var targets = document.querySelectorAll(
      ".pillar, .metric, .fw-card, .fm, .xp, .paper-box"
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
    try { initHero(); } catch (e) {}
    try { initBackground(); } catch (e) {}
    try { initHud(); } catch (e) {}
    try { initCockpit(); } catch (e) {}
    try { initHeroFx(); } catch (e) {}
    try { initHangar(); } catch (e) {}
    try { initReveal(); } catch (e) {}
    try { initBoot(); } catch (e) {}
  });
})();
