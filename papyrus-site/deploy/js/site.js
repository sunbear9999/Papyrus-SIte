/* Progressive enhancement only: responsive navigation, anchored-heading focus,
   and an accessible image dialog. All page content is already in the HTML. */
(function () {
  "use strict";
  const narrow = window.matchMedia("(max-width: 60rem)");
  let dialog;
  let opener;

  function syncNavigation() {
    const disclosure = document.querySelector(".nav-disclosure");
    if (disclosure) disclosure.open = !narrow.matches;
  }

  function focusHash(hash) {
    if (!hash || hash === "#") return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }

  function setupMediaCollections() {
    for (const collection of document.querySelectorAll("[data-media-collection]")) {
      const cards = [...collection.querySelectorAll("[data-media-kind]")];
      const filters = collection.querySelector("[data-media-filters]");
      const status = collection.querySelector("[data-media-status]");
      for (const button of collection.querySelectorAll("[data-video-fullscreen]")) {
        const video = button.closest("[data-media-kind]")?.querySelector("video");
        if (!video?.requestFullscreen && !video?.webkitEnterFullscreen) button.hidden = true;
      }
      if (!filters || !cards.length) continue;
      filters.hidden = false;
      const applyFilter = (filter) => {
        let visible = 0;
        for (const card of cards) {
          card.hidden = filter !== "all" && card.dataset.mediaKind !== filter;
          if (!card.hidden) visible += 1;
        }
        for (const button of filters.querySelectorAll("[data-media-filter]")) {
          button.setAttribute("aria-pressed", String(button.dataset.mediaFilter === filter));
        }
        if (status) status.textContent = `Showing ${visible} of ${cards.length} items`;
      };
      filters.addEventListener("click", (event) => {
        const button = event.target.closest("[data-media-filter]");
        if (button) applyFilter(button.dataset.mediaFilter);
      });
      applyFilter("all");
    }
  }

  function makeDialog() {
    const node = document.createElement("div");
    node.className = "lightbox";
    node.setAttribute("role", "dialog");
    node.setAttribute("aria-modal", "true");
    node.setAttribute("aria-labelledby", "lightbox-title");
    node.hidden = true;
    node.innerHTML = '<button type="button" class="lightbox__close" aria-label="Close enlarged image">&times;</button><figure class="lightbox__frame"><img class="lightbox__img" alt=""><figcaption id="lightbox-title" class="lightbox__caption"></figcaption></figure>';
    node.querySelector(".lightbox__close").addEventListener("click", closeDialog);
    node.addEventListener("click", (event) => { if (event.target === node) closeDialog(); });
    document.body.appendChild(node);
    return node;
  }

  function backgroundInert(on) {
    for (const child of document.body.children) {
      if (child === dialog) continue;
      if (on) child.setAttribute("inert", "");
      else child.removeAttribute("inert");
    }
  }

  function openDialog(link) {
    if (!dialog) dialog = makeDialog();
    const original = link.querySelector("img");
    const caption = link.closest("figure")?.querySelector("figcaption")?.textContent.trim() || original.alt || "Enlarged image";
    dialog.querySelector(".lightbox__img").src = link.href;
    dialog.querySelector(".lightbox__img").alt = original.alt;
    dialog.querySelector(".lightbox__caption").textContent = caption;
    opener = link;
    dialog.hidden = false;
    backgroundInert(true);
    document.body.classList.add("has-lightbox");
    dialog.querySelector(".lightbox__close").focus();
  }

  function closeDialog() {
    if (!dialog || dialog.hidden) return;
    backgroundInert(false);
    dialog.hidden = true;
    dialog.querySelector(".lightbox__img").removeAttribute("src");
    document.body.classList.remove("has-lightbox");
    if (opener && document.contains(opener)) opener.focus();
    opener = null;
  }

  document.addEventListener("click", (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (anchor) window.setTimeout(() => focusHash(anchor.getAttribute("href")), 0);
    if (narrow.matches && event.target.closest(".nav-list a, .toc-list a")) {
      const disclosure = event.target.closest(".nav-disclosure");
      if (disclosure) disclosure.open = false;
    }
    const media = event.target.closest("a.media-link");
    if (media && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      openDialog(media);
    }
    const fullscreen = event.target.closest("[data-video-fullscreen]");
    if (fullscreen) {
      const video = fullscreen.closest("[data-media-kind]")?.querySelector("video");
      if (video?.requestFullscreen) video.requestFullscreen().catch(() => {});
      else video?.webkitEnterFullscreen?.();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!dialog || dialog.hidden) return;
    if (event.key === "Escape") closeDialog();
    if (event.key === "Tab") {
      event.preventDefault();
      dialog.querySelector(".lightbox__close").focus();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    syncNavigation();
    setupMediaCollections();
    if (location.hash) focusHash(location.hash);
  });
  if (typeof narrow.addEventListener === "function") narrow.addEventListener("change", syncNavigation);
}());
