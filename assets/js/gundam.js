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
      ctx.clearRect(0, 0, w, h);
      var col = accent();

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
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

        ctx.globalAlpha = p.a;
        ctx.fillStyle = col;
        ctx.shadowColor = col;
        ctx.shadowBlur = 8 * dpr;
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
            ctx.globalAlpha = (1 - dist / max) * 0.18;
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

    var readout = document.createElement("div");
    readout.className = "hud-readout";
    document.body.appendChild(readout);

    function tick() {
      var now = new Date();
      var t = now.toTimeString().slice(0, 8);
      var sys = document.body.classList.contains("trans-am")
        ? "TRANS-AM // GN DRIVE OVERLOAD"
        : "PSYCO-FRAME // GN PARTICLES NOMINAL";
      readout.textContent = "SYS " + t + "  ::  " + sys + "  ::  SCROLL " +
        Math.round((window.scrollY / (document.body.scrollHeight - innerHeight || 1)) * 100) + "%";
    }
    setInterval(tick, 1000);
    window.addEventListener("scroll", tick, { passive: true });
    tick();
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

    function close() {
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
     4. TRANS-AM TOGGLE
     -------------------------------------------------------------------------- */
  function initTransAm() {
    var btn = document.createElement("button");
    btn.id = "trans-am-btn";
    btn.type = "button";
    btn.innerHTML = '<span class="dot"></span>TRANS-AM';
    document.body.appendChild(btn);

    if (localStorage.getItem("gundamTransAm") === "1") {
      document.body.classList.add("trans-am");
    }
    btn.addEventListener("click", function () {
      var on = document.body.classList.toggle("trans-am");
      localStorage.setItem("gundamTransAm", on ? "1" : "0");
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
    try { initTransAm(); } catch (e) {}
    try { initReveal(); } catch (e) {}
    try { initBoot(); } catch (e) {}
  });
})();
