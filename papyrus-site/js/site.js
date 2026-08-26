/* =====================================================================
   PAPYRUS SITE — SMALL HELPERS
   ---------------------------------------------------------------------
   Deliberately tiny. Two jobs only:

     1. Move keyboard focus properly when an in-page anchor is followed
        (the skip link and the table of contents).
     2. Collapse the section nav into a <details> disclosure on narrow
        screens, and keep it open on wide ones.

   Active-nav marking is done in render.js. There is no other behaviour
   on this site: no analytics, no scroll effects, no network requests.

   THE OWNER DOES NOT NEED TO EDIT THIS FILE.
   ===================================================================== */

(function () {
  "use strict";

  const NARROW = window.matchMedia("(max-width: 60rem)");

  /* --- 1. Focus management for in-page anchors ---------------------- */

  function focusTarget(hash) {
    if (!hash || hash === "#") return;
    const target = document.querySelector(hash);
    if (!target) return;
    // Headings are not focusable by default; make them focusable once so
    // screen readers and keyboard users land in the right place.
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    // Let the browser do the scrolling; just fix focus afterwards.
    window.setTimeout(() => focusTarget(link.getAttribute("href")), 0);
  });

  /* --- 2. Nav disclosure on narrow screens -------------------------- */

  function syncNavDisclosure() {
    const details = document.querySelector(".nav-disclosure");
    if (!details) return;
    details.open = !NARROW.matches;
  }

  // Close the nav again after a link is tapped on a narrow screen, so the
  // reader is not left staring at a menu.
  document.addEventListener("click", (event) => {
    if (!NARROW.matches) return;
    const link = event.target.closest(".nav-list a, .toc-list a");
    if (!link) return;
    const details = link.closest(".nav-disclosure");
    if (details) details.open = false;
  });

  document.addEventListener("DOMContentLoaded", () => {
    syncNavDisclosure();
    // If the page was opened at a #fragment, land focus there too.
    if (window.location.hash) focusTarget(window.location.hash);
  });

  if (typeof NARROW.addEventListener === "function") {
    NARROW.addEventListener("change", syncNavDisclosure);
  }

})();
