# Screenshot shot list

This folder is the only place images live. To replace a placeholder box on the
site with a real screenshot:

1. Take the screenshot described below.
2. Save it as a **PNG**, named **exactly** as listed (lower case, hyphens, `.png`).
3. Drop it into this folder.
4. Reload the page in the browser.

That is the whole procedure. **No code needs to be edited.** The site draws a
dashed placeholder box whenever a named file is missing, and the real image
takes its place — with the caption already written — as soon as the file
appears.

Notes:

- `.png` is the expected extension for every filename here. If you have a
  `.jpg`, either rename it to `.png` or change the matching `image:` line in
  `content.js` to your filename.
- Captions (the sentence printed underneath the picture) are editable in
  `content.js`, next to each `image:` line. So is the "should show" text.
- To remove a figure entirely, delete its `{ type: "figure", ... }` block from
  `content.js`.
- Wide screenshots read best. The figure column is wider than the text column,
  and images are scaled to its full width.

The list below is in the order the figures appear on the site.

---

## Overview — `index.html`

### 1. `overview-main-window.png`
**Section:** opening, after the introductory paragraphs
**Should show:** The full application window: document explorer on the left, a
PDF open in the centre viewer with a visible highlight, and the research dock
open on the right showing the Chat tab mid-answer with citation bubbles.

### 2. `overview-core-loop.png`
**Section:** The core loop
**Should show:** A composite or wide capture suggesting progression: a freshly
imported document list, the same documents with highlights and notes, and a
populated workspace canvas.

---

## Motivation — `why.html`

### 3. `why-deterministic-vs-llm.png`
**Section:** Deterministic-first: the model is a scalpel
**Should show:** A two-column comparison: the left column lists everything
produced deterministically at ingest (sentences, entities, citations, dates,
tables, classifications, summaries, relation seeds); the right shows the single,
small synthesis call the model receives. Can be a screenshot of the analysis
result card showing the model-call count, or an authored figure.

---

## Feature Catalogue — `features.html`

### 4. `features-document-explorer.png`
**Section:** Projects and sources
**Should show:** The source list of a project containing a PDF, a DOCX, an EPUB,
a CSV, an MP4 and an image, with format indicators and a right-click context
menu open.

### 5. `features-reading-mode.png`
**Section:** Reading and annotation
**Should show:** A document in reading mode: reflowed text at a comfortable
measure, the page-navigation control visible, and the display-settings panel
open showing typography controls.

### 6. `features-intelligence-dock.png`
**Section:** The intelligence layer
**Should show:** The Intelligence dock with its view tabs (Overview, Entities,
Timeline, Claims & Evidence, Graph, Citations, Artifacts, Runs) and the Entities
view showing canonical entities with mention counts and provenance detail for a
selected entity.

### 7. `features-search-tab.png`
**Section:** Retrieval and search
**Should show:** The Search tab showing a query and a list of citation cards
with source document, page number, highlighted passage and relevance score, plus
the external-source buttons and the AI query generator field.

### 8. `features-analysis-tab.png`
**Section:** Document analysis
**Should show:** The Analysis tab after a run: the mode picker, detail profile
selector, and the result card reporting claims, reasoning units, evidence,
branches, section coverage, validation status, cache status and the number of
model calls made.

### 9. `features-research-dock-chat.png`
**Section:** The research dock
**Should show:** The Chat tab with a multi-turn conversation, an answer
containing two or three inline citation bubbles showing document name, page and
quote, and the context-filter button visible.

### 10. `features-workspace.png`
**Section:** The knowledge workspace
**Should show:** The workspace canvas with 20 to 40 colour-coded nodes and typed
edges, the workspace selector at top, the filter controls visible, and one node
selected showing its properties panel.

### 11. `features-workspace-ai-tools.png`
**Section:** The knowledge workspace
**Should show:** The workspace with the AI tools context menu open (Find
Weakpoints, Colour Organise by Theme, Generate Outline, Declutter), ideally
alongside the weakpoints results dialog.

### 12. `features-blueprint-editor.png`
**Section:** Blueprints and workflows
**Should show:** The Blueprint Editor tab: the categorised step sidebar on the
left, a multi-node workflow on the canvas with connections, and the node
inspector open on the right showing model, prompt key, inputs and output key.

### 13. `features-prompt-trace.png`
**Section:** Prompts, tracing and the process monitor
**Should show:** The prompt trace viewer showing the exact rendered system
prompt, the retrieved context chunks, and the raw model response for one call.

### 14. `features-process-monitor.png`
**Section:** Prompts, tracing and the process monitor
**Should show:** The process monitor listing several concurrent background jobs
(parsing, entity extraction, embedding) with status and abort controls.

### 15. `features-settings-llm-controls.png`
**Section:** Models and backends
**Should show:** Settings open on LLM Controls: model role assignments,
capability filters, context settings and backend options, with a model dropdown
expanded.

### 16. `features-citation-dock.png`
**Section:** Citations and bibliography
**Should show:** The Citation Dock listing citation records with a style selector
(APA / MLA / Chicago), matching diagnostics, and a generated works-cited list.

### 17. `features-data-dock.png`
**Section:** Data dock
**Should show:** The Data Dock with a grid of extracted tabular data, a chart
generated from it, and — if possible — the source PDF region selection visible
alongside.

### 18. `features-help-center.png`
**Section:** Help and tutorials
**Should show:** The Help Center dialog with the topic list and a topic
rendered, or the tutorial overlay highlighting a real UI element with its
instruction bubble.

---

## How It Works — `how-it-works.html`

### 19. `arch-request-lifecycle.png`
**Section:** The blueprint execution engine
**Should show:** Either a screenshot showing the same request visible in the
chat, the process monitor and the prompt trace at once, or an authored figure
tracing intent → event bus → workflow runner → step → model → UI router.

---

## The Intelligence Layer — `intelligence.html`

### 20. `intelligence-artifact-browser.png`
**Section:** The artifact store
**Should show:** The raw Artifacts view with one artifact selected, showing its
type, exact text, locator (page and offsets), extractor name and version,
`created_by`, confidence and model role.

### 21. `intelligence-retrieval-diagram.png`
**Section:** Retrieval
**Should show:** An authored figure or a screenshot of the retrieval-context
viewer: plan → four parallel signals (vector, keyword, entity-anchored,
structured) → RRF fusion and reranking → tiered packed context under a token
budget.

### 22. `intelligence-graph-view.png`
**Section:** Grounded graphs
**Should show:** The Graph view of the Intelligence dock showing claim, evidence
and reasoning nodes connected by supports / attacks / elaborates edges, with a
node selected showing its exact quote and locator.

### 23. `intelligence-timeline.png`
**Section:** Making it visible: the Intelligence dock
**Should show:** The Timeline view showing date mentions from several documents
placed on a shared timeline, with a selected entry showing its source and span.

---

## Extensibility — `extending.html`

### 24. `extending-plugin-manager.png`
**Section:** Isolation and permissions
**Should show:** The Plugin Manager dialog listing the bundled plugins with
enablement toggles, separate network-permission controls, versions and
contributed capabilities.

### 25. `extending-historical-archives.png`
**Section:** Three plugins as worked examples — Historical Archives
**Should show:** The Historical Archives dock: the search form with archive
selection and structured filters, the results table, and the preview pane
showing a scan thumbnail, OCR text, metadata and a rights statement.

### 26. `extending-pack-import-export.png`
**Section:** Packs
**Should show:** The Import / Export settings tab with the pack contents tree
(themes, blueprints, prompts, steps, analysis templates, shortcuts, layouts,
plugins) and per-item selection checkboxes.

### 27. `extending-web-companion.png`
**Section:** The local web companion
**Should show:** The Web App settings tab with the interface selector and
rotating pairing QR code, ideally beside a phone or narrow browser window
showing the paired read-only view.

---

## Status and Roadmap — `status.html`

### 28. `status-test-suite.png`
**Section:** Known limitations and open problems
**Should show:** A terminal showing the test runner output with the passing test
count — evidence of the maintained suite. This one is optional: if you would
rather not include it, delete its `figure` block from `content.js`.

---

## Figures drawn by the site itself

Five diagrams are hand-drawn in SVG inside `js/render.js` and need no image
file. They follow the light and dark colour themes automatically. Their captions
are editable in `content.js` like any other text.

| Diagram id | Page | Shows |
|---|---|---|
| `scalpel` | Intelligence Layer | Deterministic extraction on the left, the narrow model task on the right |
| `arch-layers` | How It Works | The three layers and the two channels between them |
| `blueprint-run` | How It Works | A blueprint run from intent to interface output |
| `ingestion-pipeline` | Intelligence Layer | The ingestion stages, including the deep-mode extras |
| `retrieval-stages` | Intelligence Layer | Plan → four signals → fusion → tiered packing |

If you would rather use a real screenshot in place of one of these, delete the
`{ type: "diagram", ... }` block in `content.js` and put a `figure` block there
instead, then add the new filename to this list.
