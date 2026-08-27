/* =====================================================================
   PAPYRUS SITE — SMALL HELPERS
   ---------------------------------------------------------------------
   Deliberately tiny. Three jobs only:

     1. Move keyboard focus properly when an in-page anchor is followed
        (the skip link and the table of contents).
     2. Collapse the section nav into a <details> disclosure on narrow
        screens, and keep it open on wide ones.
     3. Open an image full screen when it is clicked, so that small
        pictures — thumbnails in table cells especially — can be read.

   Active-nav marking is done in render.js. There is no other behavior
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


  /* --- 3. Image lightbox --------------------------------------------
     Clicking any image opens it full screen. This exists because a
     thumbnail in a table cell is too small to read.

     Escape or the close button dismisses it, the backdrop is clickable,
     and focus returns to the image that was clicked. Images are made
     keyboard-reachable so this is not a mouse-only feature.
     ------------------------------------------------------------------ */

  const ZOOMABLE = "img.img";
  let lightbox = null;    // built once, on first use
  let lastFocused = null;

  function buildLightbox() {
    const box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Enlarged image");
    box.hidden = true;

    box.innerHTML =
      '<button type="button" class="lightbox__close" ' +
      'aria-label="Close enlarged image">&times;</button>' +
      '<figure class="lightbox__frame">' +
      '<img class="lightbox__img" alt="">' +
      '<figcaption class="lightbox__caption"></figcaption>' +
      '</figure>';

    // The backdrop closes; the picture itself does not, so that clicking
    // around on it while reading cannot dismiss it by accident.
    box.addEventListener("click", (event) => {
      if (event.target === box) closeLightbox();
    });
    box.querySelector(".lightbox__close").addEventListener("click", closeLightbox);

    document.body.appendChild(box);
    return box;
  }

  // Prefer the figure's own caption; fall back to the alt text.
  function captionFor(img) {
    const fig = img.closest("figure");
    const cap = fig && fig.querySelector("figcaption");
    const text = cap ? cap.textContent.trim() : "";
    return text || img.alt || "";
  }

  // Stop the page behind the overlay from scrolling, without letting the
  // layout jump sideways as the scrollbar disappears.
  function lockScroll(on) {
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = on ? "hidden" : "";
    document.body.style.paddingRight = on && gap > 0 ? gap + "px" : "";
  }

  function openLightbox(img) {
    if (!lightbox) lightbox = buildLightbox();

    const full = lightbox.querySelector(".lightbox__img");
    const cap = lightbox.querySelector(".lightbox__caption");
    const text = captionFor(img);

    full.src = img.currentSrc || img.src;
    full.alt = img.alt || "";
    cap.textContent = text;
    cap.hidden = !text;

    lastFocused = img;
    lockScroll(true);
    lightbox.hidden = false;
    lightbox.querySelector(".lightbox__close").focus();
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    lightbox.querySelector(".lightbox__img").removeAttribute("src");
    lockScroll(false);
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
    lastFocused = null;
  }

  document.addEventListener("click", (event) => {
    const img = event.target.closest && event.target.closest(ZOOMABLE);
    if (img) openLightbox(img);
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox && !lightbox.hidden) {
      if (event.key === "Escape") { closeLightbox(); return; }
      // The close button is the only focusable thing inside, so Tab
      // simply stays on it rather than escaping to the page behind.
      if (event.key === "Tab") {
        event.preventDefault();
        lightbox.querySelector(".lightbox__close").focus();
      }
      return;
    }
    const img = event.target.closest && event.target.closest(ZOOMABLE);
    if (img && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openLightbox(img);
    }
  });

  // Make every image keyboard-reachable and say what activating it does.
  // render.js has already built the page by the time this runs.
  function markZoomable() {
    const imgs = document.querySelectorAll(ZOOMABLE);
    for (let i = 0; i < imgs.length; i++) {
      const img = imgs[i];
      if (img.dataset.zoomable) continue;
      img.dataset.zoomable = "true";
      img.setAttribute("role", "button");
      img.setAttribute("tabindex", "0");
      img.setAttribute("aria-label", img.alt ? "View larger: " + img.alt : "View larger image");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    syncNavDisclosure();
    markZoomable();
    // If the page was opened at a #fragment, land focus there too.
    if (window.location.hash) focusTarget(window.location.hash);
  });

  if (typeof NARROW.addEventListener === "function") {
    NARROW.addEventListener("change", syncNavDisclosure);
  }

})();
