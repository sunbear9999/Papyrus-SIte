/* =====================================================================
   PAPYRUS SITE — RENDERER
   ---------------------------------------------------------------------
   This file turns the data in content.js into the page you see.

   THE OWNER DOES NOT NEED TO EDIT THIS FILE.
   All wording lives in content.js. All images live in images/.

   Developers: to add a new section type, add a `case` to renderSection()
   and document it in the table in website.md §5.
   ===================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------
     Small helpers
     --------------------------------------------------------------- */

  const el = (tag, className) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    return node;
  };

  // Escape first, always. Nothing typed into content.js can inject HTML.
  const escapeHtml = (str) =>
    String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  /* Inline markup subset, applied AFTER escaping:
       `code`   **bold**   *italic*   [label](url)
     Nothing else is supported by design. */
  function inline(str) {
    let out = escapeHtml(str);

    // Typographic convenience: a double hyphen surrounded by spaces, or
    // standing alone in a table cell, becomes an em dash. Typing "--" is
    // easier than finding the character on a keyboard.
    out = out.replace(/(^|\s)--(?=\s|$)/g, "$1—");

    // Links first, so their labels are not eaten by the emphasis rules.
    out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, label, url) => {
      const external = /^https?:\/\//i.test(url);
      const attrs = external ? ' target="_blank" rel="noopener"' : "";
      return `<a href="${url}"${attrs}>${label}</a>`;
    });

    out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");

    return out;
  }

  // Collapse the whitespace that indented template literals introduce.
  const tidy = (str) => String(str ?? "").replace(/\s*\n\s*/g, " ").trim();

  const setInline = (node, str) => { node.innerHTML = inline(tidy(str)); return node; };

  const slug = (text) =>
    tidy(text)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  /* ---------------------------------------------------------------
     Chrome: work-in-progress strip, masthead, nav, footer
     --------------------------------------------------------------- */

  function renderWip(site) {
    const mount = document.getElementById("wip-banner");
    if (!mount || !site.wip || site.wip.show === false) return;
    mount.className = "wip";
    const inner = el("div", "wip__inner");
    const label = el("span", "wip__label");
    label.textContent = tidy(site.wip.label || "Work in progress");
    const text = el("p", "wip__text");
    setInline(text, site.wip.text);
    inner.append(label, text);
    mount.appendChild(inner);
  }

  function renderHeader(site) {
    const mount = document.getElementById("site-header");
    if (!mount) return;
    mount.className = "site-header";
    const inner = el("div", "site-header__inner");

    const h = el("p", "site-header__title");
    const link = el("a");
    link.href = "index.html";
    link.textContent = tidy(site.meta.title);
    h.appendChild(link);
    inner.appendChild(h);

    if (site.meta.tagline) {
      const tag = el("p", "site-header__tagline");
      setInline(tag, site.meta.tagline);
      inner.appendChild(tag);
    }
    mount.appendChild(inner);
  }

  function renderNav(site, pageKey) {
    const mount = document.getElementById("site-nav");
    if (!mount) return;
    mount.className = "sidebar";

    // Both the section nav and the page's table of contents live inside one
    // <details>, so on a narrow screen the whole sidebar collapses behind a
    // single disclosure. On a wide screen the summary is hidden by CSS and
    // the disclosure is always open.
    const details = el("details", "nav-disclosure");
    details.open = true;
    const summary = el("summary");
    summary.textContent = tidy(site.meta.contentsLabel || "Contents");
    details.appendChild(summary);

    const heading = el("p", "nav-heading");
    heading.textContent = tidy(site.meta.navLabel || "Sections");
    details.appendChild(heading);

    const list = el("ul", "nav-list");
    (site.nav || []).forEach((item) => {
      const li = el("li");
      const a = el("a");
      a.href = item.href;
      a.textContent = tidy(item.label);
      if (item.page === pageKey) a.setAttribute("aria-current", "page");
      li.appendChild(a);
      list.appendChild(li);
    });
    details.appendChild(list);
    mount.appendChild(details);
  }

  function renderFooter(site) {
    const mount = document.getElementById("site-footer");
    if (!mount) return;
    mount.className = "site-footer";
    const inner = el("div", "site-footer__inner");
    [site.meta.footerNote, site.meta.footerNoteTwo, site.meta.copyright]
      .filter((line) => tidy(line))
      .forEach((line) => {
        const p = el("p");
        setInline(p, line);
        inner.appendChild(p);
      });
    mount.appendChild(inner);
  }

  /* ---------------------------------------------------------------
     Figures — the placeholder swap
     ---------------------------------------------------------------
     The <img> is inserted normally. If the file is not present in
     images/, the browser fires `error` and we replace the image with a
     described placeholder box. Dropping a correctly named file into
     images/ and reloading is all it takes to show the real screenshot.
     --------------------------------------------------------------- */

  function renderFigure(section, index) {
    const fig = el("figure", "fig");
    const src = "images/" + section.image;

    const img = el("img");
    img.alt = tidy(section.alt || "");
    img.decoding = "async";
    // Note: deliberately NOT loading="lazy". A lazy image that never enters
    // the viewport never attempts to load, so it never fires `error`, so the
    // placeholder below would never appear. Correct placeholders matter more
    // here than deferring a handful of local files.
    img.addEventListener("error", function onError() {
      const box = el("div", "fig-placeholder");
      box.setAttribute("role", "img");
      box.setAttribute("aria-label", "Screenshot placeholder: " + tidy(section.placeholder || section.alt || ""));

      const label = el("p", "fig-placeholder__label");
      label.textContent = "Screenshot placeholder";

      const file = el("p", "fig-placeholder__file");
      const code = el("code");
      code.textContent = src;
      file.appendChild(code);

      const desc = el("p", "fig-placeholder__desc");
      desc.textContent = "Should show: " + tidy(section.placeholder || "");

      box.append(label, file, desc);
      img.replaceWith(box);
    });
    img.src = src; // set last, so the error listener is already attached
    fig.appendChild(img);

    if (section.caption) {
      const cap = el("figcaption");
      const num = el("span", "fig__num");
      num.textContent = "Figure " + index + ". ";
      cap.appendChild(num);
      const rest = el("span");
      setInline(rest, section.caption);
      cap.appendChild(rest);
      fig.appendChild(cap);
    }
    return fig;
  }

  /* ---------------------------------------------------------------
     Section renderers
     --------------------------------------------------------------- */

  function renderSection(section, state) {
    switch (section.type) {

      case "heading": {
        const level = Math.min(4, Math.max(2, section.level || 2));
        const h = el("h" + level);
        h.id = slug(section.text);
        setInline(h, section.text);
        if (level === 2) state.toc.push({ id: h.id, text: tidy(section.text) });
        return h;
      }

      case "prose": {
        const frag = document.createDocumentFragment();
        (section.body || []).forEach((para) => {
          frag.appendChild(setInline(el("p"), para));
        });
        return frag;
      }

      case "list": {
        const list = el(section.ordered ? "ol" : "ul");
        (section.items || []).forEach((item) => {
          list.appendChild(setInline(el("li"), item));
        });
        return list;
      }

      case "steps": {
        const list = el("ol", "steps");
        (section.items || []).forEach((item) => {
          const li = el("li");
          const title = el("span", "steps__title");
          setInline(title, item.title);
          li.appendChild(title);
          const body = el("span");
          setInline(body, item.body);
          li.appendChild(body);
          list.appendChild(li);
        });
        return list;
      }

      case "definitions": {
        const dl = el("dl", "defs");
        (section.items || []).forEach((item) => {
          dl.appendChild(setInline(el("dt"), item.term));
          dl.appendChild(setInline(el("dd"), item.body));
        });
        return dl;
      }

      case "table": {
        const wrap = el("div", "table-wrap");
        const table = el("table");
        if (section.caption) setInline(table.appendChild(el("caption")), section.caption);

        const thead = el("thead");
        const headRow = el("tr");
        (section.columns || []).forEach((col) => {
          setInline(headRow.appendChild(el("th")), col);
        });
        thead.appendChild(headRow);
        table.appendChild(thead);

        const tbody = el("tbody");
        (section.rows || []).forEach((row) => {
          const tr = el("tr");
          row.forEach((cell) => setInline(tr.appendChild(el("td")), cell));
          tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        wrap.appendChild(table);
        return wrap;
      }

      case "figure":
        state.figureCount += 1;
        return renderFigure(section, state.figureCount);

      case "callout": {
        const tone = ["note", "caution", "status"].includes(section.tone) ? section.tone : "note";
        const box = el("div", "callout callout--" + tone);
        if (section.title) {
          setInline(box.appendChild(el("p", "callout__title")), section.title);
        }
        (section.body || []).forEach((para) => {
          box.appendChild(setInline(el("p"), para));
        });
        return box;
      }

      case "code": {
        const pre = el("pre");
        const code = el("code");
        if (section.language) code.setAttribute("data-language", section.language);
        code.textContent = String(section.body ?? "").replace(/^\n+|\n+$/g, "");
        pre.appendChild(code);
        return pre;
      }

      case "diagram": {
        const svg = DIAGRAMS[section.id];
        if (!svg) {
          console.warn('render.js: no diagram registered with id "' + section.id + '".');
          return null;
        }
        const wrap = el("div", "diagram");
        const frame = el("div", "diagram__frame");
        frame.innerHTML = svg; // authored below in this file, not from content.js
        wrap.appendChild(frame);
        if (section.caption) {
          setInline(wrap.appendChild(el("p", "diagram__caption")), section.caption);
        }
        return wrap;
      }

      case "cards": {
        const grid = el("div", "cards");
        (section.items || []).forEach((item) => {
          const card = el("div", "card");
          setInline(card.appendChild(el("p", "card__title")), item.title);
          setInline(card.appendChild(el("p", "card__body")), item.body);
          grid.appendChild(card);
        });
        return grid;
      }

      default:
        console.warn('render.js: unknown section type "' + section.type + '" — skipped.');
        return null;
    }
  }

  /* ---------------------------------------------------------------
     Table of contents (level-2 headings only)
     --------------------------------------------------------------- */

  function renderToc(entries, site) {
    if (entries.length < 3) return;
    const mount = document.querySelector(".nav-disclosure");
    if (!mount) return;

    const heading = el("p", "nav-heading");
    heading.textContent = tidy(site.meta.tocLabel || "On this page");
    const list = el("ul", "toc-list");
    entries.forEach((entry) => {
      const li = el("li");
      const a = el("a");
      a.href = "#" + entry.id;
      a.textContent = entry.text;
      li.appendChild(a);
      list.appendChild(li);
    });

    // Kept as a plain block rather than a nested <nav>: the surrounding
    // #site-nav landmark already covers these links.
    const block = el("div", "toc");
    block.append(heading, list);
    mount.appendChild(block);
  }

  /* ---------------------------------------------------------------
     Entry point
     --------------------------------------------------------------- */

  function build() {
    const site = window.SITE;
    const main = document.querySelector("main");
    if (!main) return;

    if (!site) {
      const err = el("p", "render-error");
      err.textContent = "content.js did not load, so this page has no text. Check that the file is present next to the HTML files.";
      main.appendChild(err);
      return;
    }

    const pageKey = main.dataset.page;
    renderWip(site);
    renderHeader(site);
    renderNav(site, pageKey);
    renderFooter(site);

    const page = site.pages ? site.pages[pageKey] : null;
    if (!page) {
      document.title = tidy(site.meta.title);
      const err = el("p", "render-error");
      err.textContent = 'Content for page "' + pageKey + '" not found in content.js.';
      main.appendChild(err);
      return;
    }

    document.title = tidy(page.title) + " — " + tidy(site.meta.title);

    const h1 = el("h1");
    setInline(h1, page.title);
    main.appendChild(h1);

    if (page.subtitle) {
      main.appendChild(setInline(el("p", "page-subtitle"), page.subtitle));
    }

    const body = el("div", "content");
    const state = { toc: [], figureCount: 0 };
    (page.sections || []).forEach((section) => {
      const node = renderSection(section, state);
      if (node) body.appendChild(node);
    });
    main.appendChild(body);

    renderToc(state.toc, site);
  }

  document.addEventListener("DOMContentLoaded", build);


  /* =================================================================
     DIAGRAM REGISTRY — developer-editable.
     The owner does not need to touch this.

     Hand-authored inline SVG only. Use the `d-` classes defined in
     css/style.css so the diagrams follow the light and dark palettes;
     never hardcode a colour. Captions come from content.js.
     ================================================================= */

  const ARROW_DEFS =
    '<defs><marker id="d-arrowhead" viewBox="0 0 8 8" refX="7" refY="4" ' +
    'markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
    '<path d="M0 0 L8 4 L0 8 z" class="d-arrow"/></marker></defs>';

  const DIAGRAMS = {

    /* Three-layer application architecture — how-it-works.html */
    "arch-layers":
      '<svg viewBox="0 0 640 300" role="img" aria-label="Three application layers: GUI, core, and plugins, communicating through AppContext and the event bus.">' +
      ARROW_DEFS +
      '<rect x="20" y="20" width="250" height="80" class="d-box-sunk"/>' +
      '<text x="34" y="44" class="d-label-hd">gui/ — PySide6 interface</text>' +
      '<text x="34" y="64" class="d-label-sm">Main window, docks, components, managers,</text>' +
      '<text x="34" y="80" class="d-label-sm">GUI registries, theme system</text>' +

      '<rect x="370" y="20" width="250" height="80" class="d-box-sunk"/>' +
      '<text x="384" y="44" class="d-label-hd">plugins/</text>' +
      '<text x="384" y="64" class="d-label-sm">Self-contained bundles using only</text>' +
      '<text x="384" y="80" class="d-label-sm">the public PapyrusAPI facade</text>' +

      '<rect x="20" y="140" width="600" height="40" class="d-box"/>' +
      '<text x="34" y="165" class="d-label-hd">AppContext facade  ·  event bus (typed payloads, ~21 domains)</text>' +

      '<rect x="20" y="220" width="600" height="60" class="d-box-sunk"/>' +
      '<text x="34" y="244" class="d-label-hd">core/ — headless backend (may never import the GUI)</text>' +
      '<text x="34" y="264" class="d-label-sm">Workflow engine · services · registries · intelligence · database · LLM backends · help system</text>' +

      '<line x1="145" y1="100" x2="145" y2="138" class="d-line" marker-end="url(#d-arrowhead)" marker-start="url(#d-arrowhead)"/>' +
      '<line x1="495" y1="100" x2="495" y2="138" class="d-line" marker-end="url(#d-arrowhead)" marker-start="url(#d-arrowhead)"/>' +
      '<line x1="320" y1="180" x2="320" y2="218" class="d-line" marker-end="url(#d-arrowhead)" marker-start="url(#d-arrowhead)"/>' +
      "</svg>",

    /* Deterministic ingestion pipeline — intelligence.html */
    "ingestion-pipeline":
      '<svg viewBox="0 0 640 268" role="img" aria-label="The ingestion pipeline: stages from source registration through embeddings, wrapping across three rows, with the deep-mode stages last.">' +
      ARROW_DEFS +
      '<text x="20" y="24" class="d-label-hd">No generative model call occurs at any stage below.</text>' +

      /* Row 1 */
      '<rect x="20" y="44" width="132" height="34" class="d-box-sunk"/><text x="32" y="66" class="d-label">SOURCE_REGISTERED</text>' +
      '<rect x="172" y="44" width="118" height="34" class="d-box-sunk"/><text x="184" y="66" class="d-label">PARSED_BLOCKS</text>' +
      '<rect x="310" y="44" width="96" height="34" class="d-box-sunk"/><text x="322" y="66" class="d-label">SECTIONS</text>' +
      '<rect x="426" y="44" width="130" height="34" class="d-box-sunk"/><text x="438" y="66" class="d-label">FULL_TEXT_INDEX</text>' +
      '<line x1="152" y1="61" x2="168" y2="61" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="290" y1="61" x2="306" y2="61" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="406" y1="61" x2="422" y2="61" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      /* wrap from the end of row 1 back to the start of row 2 */
      '<path d="M556 61 H600 V100 H10 V133 H16" class="d-line" marker-end="url(#d-arrowhead)"/>' +

      /* Row 2 */
      '<rect x="20" y="116" width="94" height="34" class="d-box-sunk"/><text x="32" y="138" class="d-label">ENTITIES</text>' +
      '<rect x="134" y="116" width="76" height="34" class="d-box-sunk"/><text x="146" y="138" class="d-label">DATES</text>' +
      '<rect x="230" y="116" width="104" height="34" class="d-box-sunk"/><text x="242" y="138" class="d-label">CITATIONS</text>' +
      '<rect x="354" y="116" width="84" height="34" class="d-box-sunk"/><text x="366" y="138" class="d-label">TABLES</text>' +
      '<rect x="458" y="116" width="82" height="34" class="d-box-sunk"/><text x="470" y="138" class="d-label">CLAIMS</text>' +
      '<line x1="114" y1="133" x2="130" y2="133" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="210" y1="133" x2="226" y2="133" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="334" y1="133" x2="350" y2="133" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="438" y1="133" x2="454" y2="133" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      /* wrap from the end of row 2 back to the start of row 3 */
      '<path d="M540 133 H600 V172 H10 V205 H16" class="d-line" marker-end="url(#d-arrowhead)"/>' +

      /* Row 3 */
      '<rect x="20" y="188" width="118" height="34" class="d-box-sunk"/><text x="32" y="210" class="d-label">EMBEDDINGS</text>' +
      '<line x1="138" y1="205" x2="170" y2="205" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<rect x="174" y="188" width="446" height="34" class="d-box"/>' +
      '<text x="186" y="210" class="d-label">Deep mode only: SUMMARIES · GRAPH_SEEDS · FIGURES</text>' +
      '<text x="20" y="248" class="d-label-sm">Each stage is skipped when its content hash and model identity already match the cache.</text>' +
      "</svg>",

    /* Four-stage retrieval — intelligence.html */
    "retrieval-stages":
      '<svg viewBox="0 0 640 322" role="img" aria-label="Retrieval in four stages: plan, four parallel signals, fusion and reranking, and tiered packing under a token budget.">' +
      ARROW_DEFS +

      /* 1. Plan */
      '<rect x="20" y="20" width="600" height="46" class="d-box"/>' +
      '<text x="32" y="40" class="d-label-hd">1. Plan</text>' +
      '<text x="110" y="40" class="d-label-sm">intent inference · query-entity extraction</text>' +
      '<text x="110" y="56" class="d-label-sm">numeric and aggregate questions are routed to the structured query executor</text>' +

      /* 2. Signals */
      '<text x="266" y="86" class="d-label-hd">2. Signals</text>' +
      '<rect x="20" y="96" width="140" height="46" class="d-box-sunk"/>' +
      '<text x="32" y="116" class="d-label">vector</text><text x="32" y="132" class="d-label-sm">local ChromaDB</text>' +
      '<rect x="176" y="96" width="140" height="46" class="d-box-sunk"/>' +
      '<text x="188" y="116" class="d-label">keyword</text><text x="188" y="132" class="d-label-sm">FTS5 BM25</text>' +
      '<rect x="332" y="96" width="140" height="46" class="d-box-sunk"/>' +
      '<text x="344" y="116" class="d-label">entity-anchored</text><text x="344" y="132" class="d-label-sm">canonical entities</text>' +
      '<rect x="488" y="96" width="132" height="46" class="d-box-sunk"/>' +
      '<text x="500" y="116" class="d-label">structured</text><text x="500" y="132" class="d-label-sm">type-boosted lookup</text>' +
      '<line x1="90" y1="66" x2="90" y2="92" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="246" y1="66" x2="246" y2="92" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="402" y1="66" x2="402" y2="92" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="554" y1="66" x2="554" y2="92" class="d-line" marker-end="url(#d-arrowhead)"/>' +

      /* 3. Fuse */
      '<rect x="20" y="180" width="600" height="46" class="d-box"/>' +
      '<text x="32" y="200" class="d-label-hd">3. Fuse</text>' +
      '<text x="110" y="200" class="d-label-sm">reciprocal rank fusion on the shared artifact ID</text>' +
      '<text x="110" y="216" class="d-label-sm">sentence-type boost · optional ONNX cross-encoder rerank of the head of the list</text>' +
      '<line x1="90" y1="142" x2="90" y2="176" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="246" y1="142" x2="246" y2="176" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="402" y1="142" x2="402" y2="176" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="554" y1="142" x2="554" y2="176" class="d-line" marker-end="url(#d-arrowhead)"/>' +

      /* 4. Pack */
      '<rect x="20" y="262" width="600" height="46" class="d-box"/>' +
      '<text x="32" y="282" class="d-label-hd">4. Pack</text>' +
      '<text x="110" y="282" class="d-label-sm">assembled under an explicit token budget, cheapest tier first:</text>' +
      '<text x="110" y="298" class="d-label-sm">facts → document summaries → section summaries → exact sentence text</text>' +
      '<line x1="320" y1="226" x2="320" y2="258" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      "</svg>",

    /* Where the model is and is not used — why.html */
    "scalpel":
      '<svg viewBox="0 0 640 250" role="img" aria-label="A comparison of work done deterministically at ingest against the narrow set of tasks given to a language model.">' +
      ARROW_DEFS +
      '<rect x="20" y="20" width="360" height="210" class="d-box-sunk"/>' +
      '<text x="34" y="44" class="d-label-hd">Deterministic — runs at ingest, no model</text>' +
      '<text x="34" y="70" class="d-label">Sentence segmentation with stable IDs</text>' +
      '<text x="34" y="90" class="d-label">Layered entity extraction and resolution</text>' +
      '<text x="34" y="110" class="d-label">Sentence classification (claim / evidence / reasoning)</text>' +
      '<text x="34" y="130" class="d-label">Bibliography and in-text citation matching</text>' +
      '<text x="34" y="150" class="d-label">Date normalisation onto a project timeline</text>' +
      '<text x="34" y="170" class="d-label">Table extraction as queryable data</text>' +
      '<text x="34" y="190" class="d-label">TextRank extractive summaries</text>' +
      '<text x="34" y="210" class="d-label">Argument-relation seeding from discourse markers</text>' +

      '<rect x="420" y="20" width="200" height="210" class="d-box"/>' +
      '<text x="434" y="44" class="d-label-hd">Language model</text>' +
      '<text x="434" y="70" class="d-label">Final synthesis</text>' +
      '<text x="434" y="90" class="d-label">Judgement calls</text>' +
      '<text x="434" y="110" class="d-label">A small patch over the</text>' +
      '<text x="434" y="126" class="d-label">deterministic baseline graph</text>' +
      '<text x="434" y="152" class="d-label-sm">Low temperature.</text>' +
      '<text x="434" y="168" class="d-label-sm">Compact context.</text>' +
      '<text x="434" y="184" class="d-label-sm">Always cached.</text>' +
      '<text x="434" y="200" class="d-label-sm">Always traced.</text>' +

      '<line x1="380" y1="125" x2="416" y2="125" class="d-line-accent" marker-end="url(#d-arrowhead)"/>' +
      "</svg>",

    /* Blueprint execution — how-it-works.html */
    "blueprint-run":
      '<svg viewBox="0 0 640 130" role="img" aria-label="Blueprint execution: an intent on the event bus creates a runner thread, which walks steps and routes output to the UI.">' +
      ARROW_DEFS +
      '<rect x="10" y="40" width="104" height="46" class="d-box-sunk"/><text x="22" y="62" class="d-label">Intent on</text><text x="22" y="78" class="d-label">event bus</text>' +
      '<rect x="140" y="40" width="104" height="46" class="d-box-sunk"/><text x="152" y="62" class="d-label">Runner</text><text x="152" y="78" class="d-label">thread</text>' +
      '<rect x="270" y="40" width="104" height="46" class="d-box-sunk"/><text x="282" y="62" class="d-label">Process</text><text x="282" y="78" class="d-label">registry</text>' +
      '<rect x="400" y="40" width="114" height="46" class="d-box-sunk"/><text x="412" y="62" class="d-label">Step classes</text><text x="412" y="78" class="d-label-sm">state in, state out</text>' +
      '<rect x="540" y="40" width="90" height="46" class="d-box-sunk"/><text x="552" y="62" class="d-label">UI router</text><text x="552" y="78" class="d-label-sm">to target</text>' +
      '<line x1="114" y1="63" x2="136" y2="63" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="244" y1="63" x2="266" y2="63" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="374" y1="63" x2="396" y2="63" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<line x1="514" y1="63" x2="536" y2="63" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<path d="M452 86 L452 108 L340 108 L340 86" class="d-line" marker-end="url(#d-arrowhead)"/>' +
      '<text x="360" y="124" class="d-label-sm">every step reports progress; every job can be aborted</text>' +
      "</svg>",
  };

})();
