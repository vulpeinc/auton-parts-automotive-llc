/* Auton parts automotive LLC — site scripts */
(function () {
  "use strict";

  /* Mobile menu */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* Cookie consent */
  var KEY = "auton_cookie_consent";
  var banner = document.getElementById("cookie-banner");

  function getConsent() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try {
      window.localStorage.setItem(KEY, value);
      window.localStorage.setItem(KEY + "_date", new Date().toISOString());
    } catch (e) { /* storage unavailable: hide for this page view only */ }
  }
  function hideBanner() {
    if (!banner) return;
    banner.classList.remove("show");
    setTimeout(function () { banner.hidden = true; }, 400);
  }

  if (banner) {
    if (!getConsent()) {
      banner.hidden = false;
      requestAnimationFrame(function () { banner.classList.add("show"); });
    }
    var accept = banner.querySelector("[data-cookie='accept']");
    var reject = banner.querySelector("[data-cookie='reject']");
    if (accept) accept.addEventListener("click", function () { setConsent("accepted"); hideBanner(); });
    if (reject) reject.addEventListener("click", function () { setConsent("rejected"); hideBanner(); });
  }

  /* Current year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
