/* =====================================================================
   PAPYRUS SITE CONTENT
   ---------------------------------------------------------------------
   HOW TO EDIT THIS FILE

   Everything the website displays -- every heading, paragraph, bullet,
   table cell, caption and figure description -- is in this one file.
   You never need to open the HTML, the CSS or the JavaScript.

   1. CHANGING WORDING
      Find the text you want to change and edit what is between the
      backticks: `like this`. Apostrophes and quotation marks are safe to
      type. Save the file and reload the page in your browser.

   2. ADDING A PARAGRAPH
      Find a block that looks like this:

          { type: "prose", body: [
            `First paragraph.`,
            `Second paragraph.`,
          ]},

      Add another line inside the square brackets, wrapped in backticks
      and ending with a comma.

   3. ADDING A BULLET
      Same idea, in a block with "items" instead of "body".

   4. ADDING A FIGURE
      Copy an existing figure block and change the four fields:

          { type: "figure",
            image: "some-name.png",              <- file in images/
            alt: `Short description for screen readers.`,
            caption: `The sentence printed under the picture.`,
            placeholder: `What the screenshot should show.` },

      Until a file called images/some-name.png exists, the site prints a
      dashed placeholder box containing the filename and the "should
      show" text. Drop a correctly named .png into the images/ folder and
      reload -- the real screenshot appears with the caption already
      written. No code change is needed, ever.

      The filename must match exactly, including the .png extension. If
      your screenshot is a .jpg, rename it to .png or change the
      "image:" line here to match. See images/README.md for the full
      list of expected filenames and what each one should show.

   5. SMALL FORMATTING MARKS YOU CAN USE INSIDE ANY TEXT
        **bold text**            -> bold
        *italic text*            -> italic
        \`some_code\`              -> monospace code
        [label](why.html)        -> a link
        word -- word             -> word — word (a double hyphen with a
                                    space either side becomes an em dash)
      Nothing else is interpreted. Typing a < or a > is safe; it will
      simply appear as a < or a >.

   6. WHAT WILL BREAK THE FILE
      - Deleting a comma, a bracket { } or a square bracket [ ].
      - Deleting one of a pair of backticks. They always come in pairs.
      - Typing a plain backtick inside a piece of text. If you need one,
        write \` (a backslash then a backtick), as in the example above.
      If the site goes blank after an edit, open the browser's developer
      console (F12) -- it will name the line with the problem.

   7. ORDER
      This file reads top to bottom in the same order as the site:
      site details, navigation, the notice strip, the footer, then one
      page at a time, section by section. Comment banners mark each one.
   ===================================================================== */

window.SITE = {

  /* ===================== SITE DETAILS ============================== */

  meta: {
    title: `Papyrus`,
    tagline: `A local-first research environment for document ingestion, reading, and analysis`,

    // Labels for the two lists in the left-hand column, and for the button
    // that reveals them on a narrow screen.
    navLabel: `Sections`,
    tocLabel: `On this page`,
    contentsLabel: `Contents`,

    // Footer lines. Leave a line empty to hide it.
    footerNote: `Papyrus is an in-development research project. This site documents its
                 design and its current state; it does not currently contain a download link.`,
    footerNoteTwo: `Written descriptions on this site describe the software as built.
                    Anything unfinished is marked as such where it is mentioned.`,
    copyright: `© 2026`,
    author:     `Jackson Cohrs`,

    // ---------------------------------------------------------------
    // OPTIONAL SLOTS -- deliberately left empty.
    // Uncomment a line and fill it in if you want it to appear, then
    // add it to the footer list above.
    //
    
    // institution:``,
    // contact:    ``,
    // licence:    ``,
    // repository: ``,   // no repository link is shown by default
    // ---------------------------------------------------------------
  },

  /* ===================== WORK-IN-PROGRESS STRIP ==================== */
  /* This strip appears at the top of every page. Set show to false to
     remove it everywhere (not recommended while the project is
     unfinished).                                                      */

  wip: {
    show: true,
    label: `Work in progress`,
    text: `Papyrus is a work in progress. It is not currently available to
           download, but intends to release as a free, open source project.
           This site records the design of the system and the current state of
           the work, including the parts that are incomplete.`,
  },

  /* ===================== NAVIGATION ================================ */
  /* The order here is the order of the links in the left column.      */

  nav: [
    { page: "overview",     href: "index.html",        label: `Overview` },
    { page: "why",          href: "why.html",          label: `Philosophy` },
    { page: "features",     href: "features.html",     label: `Features` },
    { page: "how-it-works", href: "how-it-works.html", label: `How It Works` },
    { page: "intelligence", href: "intelligence.html", label: `Intelligence Layer` },
    { page: "extending",    href: "extending.html",    label: `Extensibility` },
    { page: "status",       href: "status.html",       label: `Status & Roadmap` },
  ],

  pages: {

    /* =================================================================
       PAGE: OVERVIEW  (index.html)
       ================================================================= */

    overview: {
      title: `Overview`,
      subtitle: `What Papyrus is.`,
      sections: [

        // ---- Overview: what it is ----
        { type: "prose", body: [
          `Papyrus is a desktop research environment for working with collections of
           documents. It contains a multi-format source reader, a deterministic
           knowledge-extraction pipeline, a retrieval system, a user-built visual knowledge graph,
           an AI layer, and a programmable workflow engine
           inside a single application that runs entirely on the user's own machine.`,

          `It is built as a Python and Qt application, using PySide6 for the interface.
           Work is organised into **projects**, saved as \`.pdfproj\` files. A project
           holds its own document set, annotations, extracted knowledge, vector index,
           workspaces and settings, so two pieces of research never share state
           accidentally.`,

          `The app is designed to minimise the number of calls to a generative model. It will
           store and index everything it can *without* a language model, and calls
           a language model only for the small number of tasks that genuinely require
           judgement. All highlights, notes, and other artifacts generated from 
           language models are explicitly marked as such, and require manual human verification with
           a provided link to jump to the source the model used to generate the output. 
           The user can also export a log that shows precisely when LLM calls were used, what they were used for
           and whether they were verified by the researcher themselves. This design philosophy is further explained 
           on the 
           [Philosophy](why.html) page.`,

          `This site is intended as a project write-up rather than a product page. It describes what
           the software does, the philosophy behind it, and which parts of it are
           finished. The [Status](status.html) page states plainly what works, what is
           rough, and what does not exist yet.`,
        ]},

        { type: "figure",
          image: "overview-main-window.png",
          alt: `The Papyrus main window with a document open and the research dock docked at the right.`,
          caption: `The main window with a document open and the research dock at right.`,
          placeholder: `The full application window: document explorer on the left, a PDF open in the
                        centre viewer with a visible highlight, and the research dock open on the right
                        showing the Chat tab mid-answer with citation bubbles.` },

        // ---- Overview: the core loop ----
        { type: "heading", level: 2, text: `How it works` },

        { type: "prose", body: [
          `A brief overview of how the applications is used. The steps below list 
           the general workflow for a project regardless of the material being studied. Steps two and three happen for every
           source; the rest are used as the work requires.`,
        ]},

        { type: "steps", items: [
          { title: `Import`,
            body: `Add sources to a project. Papyrus accepts many supported formats such as PDFs,
            DOCX, EPUBs, MP4s, MP3s, and CSVs. Regardless of the format, each source is proccessed the same
            (using an offline transcription engine for non-text based formats) and fully viewable and annotatable.` },
          { title: `Determinstic Ingestion`,
            body: `Upon a source being added, it is processed determinstically without
            any generative AI calls. This allows the extraction of entities such as citations,
            people, events, and organizations, allowing the researcher to discover recurring entities across source type.
            This step also begins building the vector database the LLM tools can search` },
          { title: `Review and annotate`,
            body: `All imported sources can be fully reviewed in-app, both by reading text
            sources, listening/watching multimedia content, and adding annotations. Annotations across
            sources are automatically accesible in the visual workspace, allowing the researcher to organize and connect notes` },
          { title: `Analyse`,
            body: `Anaylsis mode allows the researcher to select a pre-defined anaylsis template
            or create their own. It then runs a combination of determnistic extraction, lower-level 
            machine learning calls, and generative LLM calls to build an interactive, linked-to-source visual diagram. 
            One pre-defined template is the argument map, which extracts claims, evidence, and reasoning from a selected source and
            builds it into a node map that provides a quick overview of the source's argument, with evidence nodes
            quoting the source verbatim and linking to those specific quotes` },
          { title: `Ask`,
            body: `Chat with the research assistant to get direct answers about the sources from a locally-running model.
            All answers provide citation bubbles that link the user to the exact information the LLM used when formulating an answer` },
          { title: `Automate`,
            body: `Capture any repeated procedure as a blueprint in the visual editor and
                   run it afterwards as a one-click custom tool.` },
          { title: `Write`,
            body: `Assemble notes, quotes, outlines and works-cited entries into the shape
                   the final piece of writing needs.` },
        ]},

        { type: "figure",
          image: "overview-core-loop.png",
          alt: `The same project shown at three stages of the core loop.`,
          caption: `The same project seen at three stages of the core loop.`,
          placeholder: `A composite or wide capture suggesting progression: a freshly imported document
                        list, the same documents with highlights and notes, and a populated workspace
                        canvas.` },

        // ---- Overview: what is distinctive ----
        { type: "heading", level: 2, text: `What is distinctive about it` },

        { type: "prose", body: [
          `Six architectural commitments separate Papyrus from the common pattern of
           chunking a document, embedding the chunks, and pasting the nearest ones into a
           prompt. Each is argued in full on the Motivation page.`,
        ]},

        { type: "list", ordered: false, items: [
          `**Everything runs on the machine it is installed on.** Parsing, optical
           character recognition, transcription, embedding, entity recognition,
           classification, reranking and inference are all local.
           [Local-first](why.html#local-first-and-private-by-default)`,

          `**Extraction happens before, and without, any model.** The ingestion pipeline
           makes zero generative model calls; the model is reserved for synthesis and
           judgement.
           [Deterministic-first](why.html#deterministic-first-the-model-is-a-scalpel)`,

          `**Every stored fact carries a locator.** Page and character offsets, or row and
           column, or timestamp and speaker -- along with the extractor, its version, and
           a confidence.
           [Nothing unsourced](why.html#nothing-unsourced-provenance-on-every-assertion)`,

          `**Every prompt is editable and every call is traced.** There are no hidden
           prompts and no hidden model calls; an untraceable call is treated as a defect.
           [Transparency](why.html#transparency-and-user-control)`,

          `**One knowledge base and one retrieval path.** Chat, analysis, citations,
           workspace tools and plugins all call the same retrieval primitive rather than
           building their own.
           [One retrieval path](why.html#one-knowledge-base-one-retrieval-path)`,

          `**Anything the application does, a plugin can do.** Every extension point the
           core uses is exposed through a single controlled API.
           [Extensible by construction](why.html#extensible-by-construction)`,
        ]},

        // ---- Overview: subsystem orientation ----
        { type: "heading", level: 2, text: `The major subsystems` },

        { type: "prose", body: [
          `The table below is an orientation map rather than a feature list. Each
           subsystem is described in detail on the [Features](features.html) page, and
           the three that carry the most architectural weight have pages of their own.`,
        ]},

        { type: "table",
          caption: `The major subsystems and where they surface in the interface.`,
          columns: [`Subsystem`, `What it does`, `Where it lives in the UI`],
          rows: [
            [`Source ingestion`,
             `Converts every supported format into one normalised block stream, then into provenance-tracked artifacts`,
             `Document explorer; process monitor`],
            [`Artifact store`,
             `A single relational knowledge base of extracted facts, with an edge table and a vector index keyed the same way`,
             `Intelligence dock`],
            [`Retrieval`,
             `One primitive: plan, four parallel signals, fusion and reranking, tiered context packing`,
             `Search tab; context filter dialog`],
            [`Document analysis`,
             `Structured extraction producing grounded argument maps, methodology trackers and entity networks`,
             `Analysis tab; Workspace canvas`],
            [`Research dock`,
             `Chat, search, analysis, brainstorm, the research agent, custom tools and the blueprint editor`,
             `A single dockable panel with seven tabs`],
            [`Knowledge workspace`,
             `A visual canvas of typed nodes and typed relations, with AI tools that operate on a selection`,
             `Workspace`],
            [`Workflow engine`,
             `Executes every AI feature as a blueprint of steps; no feature may call a model directly`,
             `Blueprint editor; custom tools; process monitor`],
            [`Data dock`,
             `Editable datasets, table extraction from PDF regions, charts, and real structured queries`,
             `Data dock`],
            [`Citations`,
             `Bibliography and in-text extraction, matching between the two, and APA, MLA and Chicago formatting`,
             `Citation dock`],
            [`Prompts and tracing`,
             `Every prompt is a named, editable entry; every model call produces a trace record`,
             `Prompt editor; trace viewer; process monitor`],
            [`Plugins`,
             `Registry-based extension of every subsystem above, with separate network permission`,
             `Plugin manager; plugin-contributed docks`],
            [`Help`,
             `Authored topics, F1 context help, and interactive tutorials that point at real widgets`,
             `Help Center; overlay`],
          ]},

        // ---- Overview: where to go next ----
        { type: "heading", level: 2, text: `Reading the rest of this site` },

        { type: "prose", body: [
          `[Motivation](why.html) sets out the problems the project is a response to and
           the design principles that follow from them. [Features](features.html) is the
           full catalogue, grouped by subsystem. [How It Works](how-it-works.html)
           describes the layered architecture, the event bus and the workflow engine.
           [Intelligence Layer](intelligence.html) is a deep treatment of extraction,
           retrieval and grounded graphs -- the part of the system everything else rests
           on. [Extensibility](extending.html) covers plugins, packs and the optional web
           companion. [Status](status.html) is the honest account of what is finished.`,
        ]},

      ],
    },

    /* =================================================================
       PAGE: MOTIVATION  (why.html)
       ================================================================= */

    why: {
      title: `Motivation and Design Principles`,
      subtitle: `The problems the project responds to, and the rules that follow from them.`,
      sections: [

        { type: "prose", body: [
          `Papyrus began from dissatisfaction with a specific and now very common class of
           tool: the document assistant that accepts a file, chunks it, embeds the chunks,
           retrieves a handful by similarity, and pastes them into a prompt. That pattern
           is easy to build and it demonstrates well. It also fails at most of what
           sustained research actually requires. This page sets out six specific
           complaints and the six design rules adopted in response. The rules are enforced
           in the codebase; they are not aspirations.`,
        ]},

        // ---- Why: the problem ----
        { type: "heading", level: 2, text: `The problem` },

        { type: "heading", level: 3, text: `Chatting with a document is shallow` },
        { type: "prose", body: [
          `In the standard pattern nothing persists between questions. Nothing is
           cross-referenced across documents. Asking the same question twice re-does the
           same work, at the same cost, with no guarantee of the same answer. After a
           month of use the tool understands the corpus no better than it did on the first
           day, because it never accumulated anything: there is no store of what was found,
           only a sequence of transient prompts.`,
          `A research tool should get more useful as material accrues in it. That requires
           a persistent knowledge base, not a retrieval trick.`,
        ]},

        { type: "heading", level: 3, text: `Language models are the wrong instrument for most of the work` },
        { type: "prose", body: [
          `Generative models are expensive, slow, non-deterministic and prone to
           confabulation. Using one for a task that a parser, a named-entity recogniser, a
           regular expression or a graph algorithm already solves is a bad trade on every
           axis at once: cost, latency, reproducibility and correctness.`,
          `Sentence segmentation, citation matching and date normalisation are solved
           problems with deterministic solutions. Spending a model call on them buys
           nothing and loses the guarantee that running the same input twice gives the
           same output.`,
        ]},

        { type: "heading", level: 3, text: `Provenance is usually decorative` },
        { type: "prose", body: [
          `Many tools present a source that turns out to be a paraphrase, a wrong page
           number, or a quotation that does not appear in the document at all. A citation
           that cannot be resolved to an exact span in an exact document is not usable in
           scholarly work; it is a claim about a claim.`,
          `The requirement is strict: every assertion the interface displays must resolve
           to the span it came from, and clicking it must navigate there.`,
        ]},

        { type: "heading", level: 3, text: `Research tooling is opaque` },
        { type: "prose", body: [
          `In most tools the user cannot see the prompt, cannot change it, cannot see what
           was retrieved, cannot see which model ran, and cannot stop a job once it has
           started. That is tolerable in a toy and unacceptable when the output is going
           to inform written work that carries someone's name.`,
        ]},

        { type: "heading", level: 3, text: `Data lock-in and privacy` },
        { type: "prose", body: [
          `Sending an entire personal or institutional document library to a third-party
           interface is not always legally, ethically or practically possible. Licensed
           material, unpublished work, interview transcripts and confidential records all
           carry constraints that a cloud-only design cannot satisfy.`,
        ]},

        { type: "heading", level: 3, text: `Monolithic tools resist extension` },
        { type: "prose", body: [
          `Adding a domain-specific capability -- case law, archival collections, a
           particular citation workflow -- usually means forking the tool or doing
           without. A research environment serves too many distinct disciplines for its
           author to anticipate them, so the extension surface has to be a first-class
           part of the design rather than a plugin folder bolted on afterwards.`,
        ]},

        // ---- Why: principle 1 ----
        { type: "heading", level: 2, text: `Local-first and private by default` },

        { type: "prose", body: [
          `Every stage of the pipeline runs on the device. Parsing, optical character
           recognition, transcription, embedding, named-entity recognition, sentence
           classification, reranking, summarisation and generative inference are all
           local. Local models are served by Ollama or llama.cpp; embeddings are written
           to a local ChromaDB store held beside the project file. No cloud service is
           required for any core feature.`,
          `This is a constraint accepted for its consequences rather than a marketing
           position. Choosing it rules out the largest available models and makes the
           application responsible for its own performance. In exchange, a project can
           contain material that could not otherwise be processed at all, results do not
           depend on a remote service continuing to exist, and there is no per-query cost
           to discourage exploratory work.`,
          `The one deliberate exception is explicit and narrow: a plugin may request
           network access as a permission separate from being enabled, and the hosts it
           may reach are declared and enforced. A plugin can be switched on and left
           network-blocked. See [Extensibility](extending.html) for the mechanism.`,
        ]},

        // ---- Why: principle 2 ----
        { type: "heading", level: 2, text: `Deterministic-first: the model is a scalpel` },

        { type: "prose", body: [
          `The shorthand used throughout the codebase is that the language model is a
           scalpel, not a hammer. Ingestion performs **zero generative model calls**.
           Sentence segmentation, entity extraction, sentence classification, citation
           matching, date normalisation, table extraction, extractive summarisation and
           argument-relation seeding are all performed deterministically or with small
           local encoder models.`,
          `What this buys is cumulative. Deterministic stages are idempotent, so
           re-running them is free when nothing has changed. Their output is stable, so
           an artifact identifier written today still points at the same sentence
           tomorrow. They are fast enough to run on import rather than on demand, which is
           what allows a source to be searchable within seconds of being added. And they
           are auditable in a way a model call is not: an extractor has a name and a
           version, and its behaviour can be reasoned about.`,
          `The generative model is then reserved for the work that actually needs
           judgement -- final synthesis, and a small structured patch over an
           already-complete deterministic baseline. When it is called it runs at low
           temperature, sees compact context assembled under an explicit token budget,
           and its result is cached. The
           [Intelligence Layer](intelligence.html) page describes exactly where the
           boundary sits.`,
        ]},

        { type: "figure",
          image: "why-deterministic-vs-llm.png",
          alt: `A comparison of the work done deterministically at ingest against the work given to the language model.`,
          caption: `What is extracted without a model, and what the model is actually asked to do.`,
          placeholder: `A two-column comparison: the left column lists everything produced
                        deterministically at ingest (sentences, entities, citations, dates, tables,
                        classifications, summaries, relation seeds); the right shows the single, small
                        synthesis call the model receives. Can be a screenshot of the analysis result
                        card showing the model-call count, or an authored figure.` },

        // ---- Why: principle 3 ----
        { type: "heading", level: 2, text: `Nothing unsourced: provenance on every assertion` },

        { type: "prose", body: [
          `Every stored fact is an *artifact*, and every artifact carries a locator: page
           and character offsets for a document, row and column for tabular data,
           timestamp and speaker for audio and video. Alongside the locator it records a
           \`created_by\` field, the name and version of the extractor that produced it, the
           model role and model name where one was involved, and a confidence.`,
          `Because the locator is part of the record rather than a rendering detail, any
           assertion the interface shows can be resolved back to the exact span it came
           from, and clicking it navigates there. This is the same mechanism behind
           citation bubbles in chat, result cards in search, nodes in the workspace,
           entries on the timeline and cells in the data dock -- all of them are artifacts
           with locators, so all of them jump.`,
          `The strongest form of this rule appears in document analysis. Quote text shown
           in an argument map is hydrated from the canonical source artifact and is never
           accepted from model output, which makes a fabricated quotation structurally
           impossible rather than merely unlikely.`,
        ]},

        // ---- Why: principle 4 ----
        { type: "heading", level: 2, text: `Transparency and user control` },

        { type: "prose", body: [
          `Every prompt the system sends is a named, user-editable entry in the prompt
           manager -- including system prompts, JSON-schema enforcement text,
           structured-output preambles and post-processing instructions. All of them
           appear in the Prompt Editor and can be rewritten without touching code.
           Hardcoding prompt text anywhere in the application is treated as a defect.`,
          `Every model invocation produces a trace record capturing the exact rendered
           prompt as sent, the retrieved context chunks, and the raw response. A trace
           button appears on every AI output. A call that produces no trace is a bug by
           definition.`,
          `Every background job appears in the process monitor with its status and can be
           aborted. Every model assignment, capability filter, context setting and backend
           option is exposed in settings, with available models and blueprints read from
           registries at runtime rather than hardcoded. The intent is that a user who
           wants to know what the software just did can find out completely, from the
           interface, without reading the source.`,
        ]},

        // ---- Why: principle 5 ----
        { type: "heading", level: 2, text: `One knowledge base, one retrieval path` },

        { type: "prose", body: [
          `There is exactly one artifact store and exactly one retrieval primitive. Chat,
           brainstorm, the analysis modes, entity discovery, citations, workspace tools
           and plugins all call the same \`retrieve(...)\`. No feature parses, embeds or
           prompts on its own.`,
          `The alternative -- a pipeline per feature -- fails in a predictable way. Each
           pipeline drifts, each caches separately, each has its own notion of what a
           chunk is, and an improvement to retrieval quality has to be implemented several
           times to be felt anywhere. Under a single path, a better reranker improves chat,
           analysis and plugin queries at once.`,
          `Adding a capability therefore means registering an extractor, a signal or a
           mode against the existing path. It never means building a parallel one.`,
        ]},

        // ---- Why: principle 6 ----
        { type: "heading", level: 2, text: `Extensible by construction` },

        { type: "prose", body: [
          `Every extension point the core uses is exposed to plugins through one
           controlled API facade. Plugins register blueprints, workflow step types, entity
           types, source formats, viewers, retrieval sources and providers, artifact
           producers, analysis modes and templates, docks, toolbar buttons, context-menu
           actions, shortcuts, themes, AI output widgets, database tables and
           import/export contributors.`,
          `The test applied to the design is simple: anything the core can do, a plugin
           can do. Three plugins ship with the application specifically as worked examples
           of that claim, one of which -- Zotero integration -- is implemented with no
           reference to Zotero anywhere in the main application. Deleting its directory
           removes the feature with no side effects.`,
          `Uniformity is what makes this affordable. Everything pluggable lives in a
           registry created once at startup and exposed through both the application
           context and the plugin API, and every registry that accepts plugin
           contributions supports removal by plugin identifier.`,
        ]},

        // ---- Why: separation of concerns, briefly ----
        { type: "heading", level: 2, text: `A structural rule underneath all of them` },

        { type: "prose", body: [
          `One further rule is architectural rather than philosophical, and it is what
           keeps the other six enforceable: the backend is headless and may never import
           the interface. All business logic, extraction, inference and database access
           live in \`core/\`. The PySide6 interface reaches them only through a typed
           application context, service calls and an event bus. Any operation that could
           take more than about fifty milliseconds runs off the interface thread.`,
          `The practical effect is that the same services can be driven by the desktop
           interface, by a blueprint, by a plugin or by the optional web companion without
           any of them being a special case. [How It Works](how-it-works.html) describes
           the layering in detail.`,
        ]},

        // ---- Why: non-goals ----
        { type: "heading", level: 2, text: `Non-goals` },

        { type: "prose", body: [
          `Stating what a project is not for is as useful as stating what it is for. None
           of the following are being attempted.`,
        ]},

        { type: "definitions", items: [
          { term: `A cloud service`,
            body: `There is no server component, no account, no synchronisation service and
                   no hosted processing. The optional web companion serves the project open
                   on the desktop to a browser on the same private network, and is off
                   unless deliberately started.` },
          { term: `A replacement for a reference manager`,
            body: `Papyrus extracts, matches and formats citations for the material in a
                   project, and integrates with Zotero through a plugin. It is not trying to
                   become the place a researcher's whole library lives.` },
          { term: `A chat wrapper`,
            body: `Conversation is one surface among several, and it is built on the same
                   retrieval and workflow machinery as everything else. A version of Papyrus
                   with the chat tab removed would still do most of what it does.` },
          { term: `A general-purpose writing assistant`,
            body: `The writing surfaces exist to assemble material that is already in the
                   project -- notes, quotes, outlines, works-cited entries -- rather than to
                   generate prose on a subject the project knows nothing about.` },
        ]},

      ],
    },

    /* =================================================================
       PAGE: FEATURES  (features.html)
       The longest page. One level-2 heading per subsystem, in the same
       order as the subsystem table on the Overview page.
       ================================================================= */

    features: {
      title: `Feature Catalogue`,
      subtitle: `Every capability the application has, grouped by subsystem, with an account of how each one works.`,
      sections: [

        { type: "prose", body: [
          `This page is the complete catalogue. Three subsystems carry enough
           architectural weight to have their own pages -- the
           [intelligence layer](intelligence.html), the
           [application architecture](how-it-works.html) and
           [extensibility](extending.html) -- and are summarised here rather than
           repeated. Anything incomplete is marked where it appears, and collected on the
           [Status](status.html) page.`,
        ]},

        /* ---- 1. Projects and sources ---- */
        { type: "heading", level: 2, text: `Projects and sources` },

        { type: "prose", body: [
          `A project is a \`.pdfproj\` file together with two sibling directories. The
           project database, an SQLite file, holds documents, annotations, notes, tags,
           citations, workspaces, graph nodes and edges, chat history, datasets and every
           intelligence artifact. Beside it sit \`<project>.pdfproj_chroma_db/\`, the local
           vector store, and \`<project>.pdfproj.assets/\`, which holds project-owned copies
           of imported media. Work is saved as it happens.`,
          `Plugins may declare their own project-scoped tables. Those tables are created
           when a project opens and are never dropped when a plugin is unloaded, so
           disabling a plugin cannot destroy data that was collected through it. A
           per-project processing policy controls how deeply each source is processed.`,
          `Papyrus is not a PDF reader with extras attached. Every listed format supports
           the same core features: highlighting, notes, analysis, universal search and
           jump-to-source. A source format registry maps each type to its extensions, MIME
           types, category, parser or data loader and availability; there are no hardcoded
           extension checks anywhere in the codebase, which is what allows a plugin to add
           a format with full feature parity.`,
        ]},

        { type: "table",
          caption: `Document formats.`,
          columns: [`Format`, `Extensions`, `Notes`],
          rows: [
            [`PDF`, `.pdf`, `Full support: page rendering, text layer, highlighting, and OCR for scanned pages`],
            [`Word`, `.docx`, `Headings and tables recognised as document structure`],
            [`Legacy Word`, `.doc`, `Requires LibreOffice on the system; shown as unavailable with an explanation if absent`],
            [`EPUB`, `.epub`, `Chapters and headings recognised`],
            [`Plain text`, `.txt`, `--`],
            [`Markdown`, `.md`, `Hash-prefixed headings recognised as structure`],
            [`HTML`, `.html, .htm`, `Headings and paragraphs recognised`],
            [`Rich text`, `.rtf`, `--`],
          ]},

        { type: "table",
          caption: `Data, media and image formats.`,
          columns: [`Category`, `Extensions`, `Notes`],
          rows: [
            [`Tabular data`, `.csv, .tsv, .xlsx`,
             `Opens as a read-only preview; one button promotes it to an editable Data Dock dataset. For spreadsheets the active sheet is loaded`],
            [`Video`, `.mp4 .mov .mkv .webm .avi .m4v .wmv .flv .mpg .mpeg .3gp .ogv .ts`,
             `Transcribed in the background by an offline speech-to-text engine, producing searchable captions and timestamp-accurate jump-to-source`],
            [`Audio`, `.mp3 .wav .m4a .flac .ogg .aac .wma .opus`,
             `Same transcription path as video. Speaker turns are captured; named-speaker resolution is not yet implemented`],
            [`Images`, `.png .jpg .jpeg .tiff .bmp .webp`,
             `Automatically read with OCR, giving word-level highlighting and jump-to-source equivalent to a scanned PDF page`],
          ]},

        { type: "prose", body: [
          `Under the surface, a parser registry converts every source into one normalised
           stream of document blocks, and the artifact service normalises those blocks into
           a single artifact segment stream. Everything downstream -- indexing, extraction,
           retrieval, analysis -- sees that one stream and does not know or care which
           format produced it.`,
        ]},

        { type: "figure",
          image: "features-document-explorer.png",
          alt: `The document explorer listing a project containing several different source formats.`,
          caption: `The document explorer with a mixed-format project.`,
          placeholder: `The source list of a project containing a PDF, a DOCX, an EPUB, a CSV, an MP4 and
                        an image, with format indicators and a right-click context menu open.` },

        /* ---- 2. Reading and annotation ---- */
        { type: "heading", level: 2, text: `Reading and annotation` },

        { type: "prose", body: [
          `The PDF viewer is built on PyMuPDF and renders pages in a worker process, so a
           slow page never blocks the interface. It provides zoom in, out and reset, an
           in-document search bar with match navigation, a page indicator, text selection
           and region selection -- the last of which is also how a table is lifted out of a
           page into the Data Dock.`,
          `Reading mode is a separate, reflowable view for long-form reading. It applies
           global display settings for typography, measure and spacing, paginates, and
           runs a text-cleaning pass that repairs the artifacts PDF layout leaves behind:
           hyphenation across line breaks, column bleed, and repeated header and footer
           noise. Non-PDF text documents open in a shared read-only reflowable viewer with
           zoom and fuzzy jump-to-source matching.`,
        ]},

        { type: "definitions", items: [
          { term: `Highlighting`,
            body: `A managed colour palette with a colour-organiser dialog, so a project can
                   keep a consistent meaning for each colour.` },
          { term: `Annotation notes`,
            body: `Notes attached either to a highlight or to an arbitrary passage.` },
          { term: `Universal jump-to-source`,
            body: `Clicking any citation bubble, note, search result, data cell or graph node
                   navigates to its exact origin: page and span for documents, timestamp for
                   audio and video, cell for tabular data, word box for text read from an
                   image.` },
          { term: `Video player`,
            body: `Captions, a transcript panel, timestamp toggling, and a control to save a
                   note at the current timestamp.` },
          { term: `Audio player and image viewer`,
            body: `The same annotation and jump-to-source behaviour applied to media
                   sources.` },
          { term: `CSV preview viewer`,
            body: `A read-only view of a spreadsheet with a single button that promotes the
                   file into an editable dataset.` },
          { term: `Document explorer`,
            body: `The project source list, with right-click actions for rename, remove, run
                   OCR, extract pages, evaluate source, and any action a plugin has
                   contributed.` },
        ]},

        { type: "figure",
          image: "features-reading-mode.png",
          alt: `A document in reflowable reading mode with the display settings panel open.`,
          caption: `Reflowable reading mode with display settings.`,
          placeholder: `A document in reading mode: reflowed text at a comfortable measure, the
                        page-navigation control visible, and the display-settings panel open showing
                        typography controls.` },

        /* ---- 3. Intelligence layer, summarised ---- */
        { type: "heading", level: 2, text: `The intelligence layer` },

        { type: "prose", body: [
          `The intelligence layer is the backbone of the application and is treated at
           length on [its own page](intelligence.html). In summary: when a source is added,
           a dependency-aware scheduler runs a sequence of background stages that parse it,
           segment it into sentences, index it for full-text search, and extract entities,
           dates, citations, tables and sentence classifications, before embedding the
           result. No generative model call occurs anywhere in that pipeline.`,
          `Everything extracted is an artifact in one relational knowledge base, with a
           companion edge table for relations and a vector index keyed by the same
           identifiers. Artifact identifiers are deterministic, so re-running a stage
           produces the same identifiers and nothing downstream breaks. Every stage
           compares a content hash and model identity against a cache table and skips if it
           is already current.`,
          `Four processing modes gate how much of that pipeline runs: Minimal parses,
           segments and indexes only; Balanced adds entities, dates, citations, tables,
           sentence classification and embeddings, and is the default; Deep adds extractive
           summaries, deterministic argument-relation seeding and figure handling; Manual
           runs nothing automatically and leaves every stage to be triggered by hand.`,
          `The Intelligence dock makes all of it visible and editable, with views for
           Overview, Entities, Timeline, Claims & Evidence, Graph, Citations, raw Artifacts
           and Runs. Every artifact shows where it came from -- source, page, extractor,
           model, confidence -- and can be jumped to, verified, edited or deleted. A user
           edit becomes a high-confidence fact that retrieval and generated views prefer
           over the machine extraction it replaced.`,
        ]},

        { type: "figure",
          image: "features-intelligence-dock.png",
          alt: `The Intelligence dock showing canonical entities and the provenance of a selected entity.`,
          caption: `The Intelligence dock browsing extracted artifacts.`,
          placeholder: `The Intelligence dock with its view tabs (Overview, Entities, Timeline, Claims &
                        Evidence, Graph, Citations, Artifacts, Runs) and the Entities view showing
                        canonical entities with mention counts and provenance detail for a selected
                        entity.` },

        /* ---- 4. Retrieval and search ---- */
        { type: "heading", level: 2, text: `Retrieval and search` },

        { type: "prose", body: [
          `One retrieval primitive serves the whole application. A query is first analysed
           deterministically for intent and query entities, and numeric or aggregate
           questions are routed to the structured query executor rather than to text
           retrieval, so the language model is never asked to do arithmetic. Four
           retrievers then run over the artifact store -- vector, keyword, entity-anchored
           and structured -- and their results are fused by reciprocal rank fusion on the
           shared artifact identifier, so a segment found by three signals outranks one
           found by a single signal. An optional local cross-encoder reranks the head of
           the list. Context is then packed under an explicit token budget, cheapest tier
           first. The [Intelligence Layer](intelligence.html) page describes each stage.`,
          `Retrieval is scoped by a typed source scope, so a query can be restricted to
           particular documents, tags or plugin-contributed sources. A context filter
           dialog exposes that directly: before asking a question, the user chooses exactly
           which documents, tags and sources the AI is allowed to search.`,
        ]},

        { type: "definitions", items: [
          { term: `Local retrieval search`,
            body: `Returns citation cards carrying the source document, page, the matched
                   passage and a relevance score. Each card jumps to its span.` },
          { term: `External academic search shortcuts`,
            body: `Query shortcuts for JSTOR, Google Scholar, Reddit, news search and an
                   arbitrary custom URL, returning cards that open in the system browser.
                   These are link constructions, not scraped results.` },
          { term: `AI query generator`,
            body: `Takes a stated research goal, formulates several targeted queries, runs
                   them, and returns the combined results as cards. An optional mode also
                   scans the citations of retrieved papers to surface related works not yet
                   in the project.` },
          { term: `Result caching`,
            body: `Fused and reranked candidates are cached against a query hash and a
                   project-state hash, so repeating a question does not repeat the work.` },
        ]},

        { type: "figure",
          image: "features-search-tab.png",
          alt: `The Search tab showing retrieval results as citation cards.`,
          caption: `Retrieval search results as citation cards.`,
          placeholder: `The Search tab showing a query and a list of citation cards with source document,
                        page number, highlighted passage and relevance score, plus the external-source
                        buttons and the AI query generator field.` },

        /* ---- 5. Document analysis ---- */
        { type: "heading", level: 2, text: `Document analysis` },

        { type: "prose", body: [
          `The Analysis tab runs structured extraction over a document and produces a
           graph rather than prose. Three templates ship with the application, and custom
           templates can be authored in the app and appear alongside them; plugins can
           contribute templates as well.`,
        ]},

        { type: "table",
          caption: `Built-in analysis templates.`,
          columns: [`Template`, `Best for`, `Extracts`, `Relations`],
          rows: [
            [`Argument Map`, `Papers, essays, opinion pieces, legal documents`,
             `Claims, reasoning pillars, evidence quotes`, `supports, refutes, part_of, derived_from`],
            [`Methodology Tracker`, `Empirical studies, technical reports`,
             `Method steps in order, findings, limitations`, `next_step, produces, supports, contradicts`],
            [`Relationship / Network Tracker`, `Biography, history, organisational and news analysis`,
             `People, organisations, affiliations, events`, `affiliated_with, opposes, collaborated_with, led_by`],
          ]},

        { type: "prose", body: [
          `Each template declares which node types the model may create, which relation
           types are permitted, per-chunk token limits, maximum entity counts, and the
           specific chunk-level and synthesis-level prompts it uses. Three detail profiles
           -- Focused, Standard and Exhaustive -- control target size; Standard aims at
           roughly twenty to forty proposition nodes plus exact-quote evidence when the
           source contains enough material to support them.`,
          `The grounding contract that makes the output trustworthy is described in full
           under [grounded graphs](intelligence.html#grounded-graphs). The short version:
           a complete deterministic baseline graph is built first, the model is asked only
           for a small patch over it, quotes are hydrated from the source artifact rather
           than accepted from model output, and a patch that is sparse, fabricated,
           disconnected or placeholder-filled is never published. Results are cached at
           scope level, and editing source text, an annotation, a prompt, a mode contract,
           a model or a detail profile invalidates only the affected result.`,
          `The result card reports claims, reasoning units, evidence, branches, section
           coverage, validation status, cache status, origin, and the actual number of
           language-model calls that were made. Results can be pushed onto the Workspace
           canvas as a live graph.`,
        ]},

        { type: "figure",
          image: "features-analysis-tab.png",
          alt: `The Analysis tab after a run, showing the result card and its quality report.`,
          caption: `An analysis result card with its quality report.`,
          placeholder: `The Analysis tab after a run: the mode picker, detail profile selector, and the
                        result card reporting claims, reasoning units, evidence, branches, section
                        coverage, validation status, cache status and the number of model calls made.` },

        /* ---- 6. The research dock ---- */
        { type: "heading", level: 2, text: `The research dock` },

        { type: "prose", body: [
          `A single dockable panel gathers seven tabs. They share the project, the
           retrieval path and the workflow engine; the separation between them is one of
           task rather than of machinery.`,
        ]},

        { type: "definitions", items: [
          { term: `Chat`,
            body: `Multi-turn conversation grounded in the project. Answers stream token by
                   token and render inline citation bubbles showing document, page and
                   quoted text, each of which jumps to the source. History persists in the
                   project. A context-filter button restricts which documents, tags and
                   sources are searched, and every response carries a button that opens its
                   prompt trace.` },
          { term: `Search`,
            body: `Local retrieval search, external academic search shortcuts and the AI
                   query generator, as described above.` },
          { term: `Analysis`,
            body: `Template and mode selection, detail profile, run control, and the grounded
                   result card.` },
          { term: `Brainstorm`,
            body: `Synthesis and ideation over the corpus rather than factual question
                   answering: generating hypotheses, arguments and connections between
                   material in the project.` },
          { term: `Research Agent`,
            body: `An autonomous multi-step agent. It plans, selects tools, executes
                   blueprint steps, records tool runs, keeps a working memory of recent
                   artifacts, checkpoints its state, and can be interrupted. Sessions
                   persist in the project.` },
          { term: `Custom Tools`,
            body: `Every saved blueprint whose mount points include this tab appears here as
                   a one-click tool with an input form generated from its declared inputs.` },
          { term: `Blueprint Editor`,
            body: `The visual workflow builder, described below.` },
        ]},

        { type: "figure",
          image: "features-research-dock-chat.png",
          alt: `The Chat tab with an answer containing inline citation bubbles.`,
          caption: `Chat with inline citation bubbles.`,
          placeholder: `The Chat tab with a multi-turn conversation, an answer containing two or three
                        inline citation bubbles showing document name, page and quote, and the
                        context-filter button visible.` },

        /* ---- 7. The knowledge workspace ---- */
        { type: "heading", level: 2, text: `The knowledge workspace` },

        { type: "prose", body: [
          `The workspace is a visual canvas on which nodes are ideas, claims, entities,
           quotes or findings, and edges are typed relations. A project can hold several
           named workspaces, switched from a selector. Nodes carry a title, a type that is
           colour-coded by the ontology, a body, tags, and the source document and page
           they came from; double-clicking opens a full node editor. Edges carry a relation
           type -- supports, refutes or contradicts, part_of, derived_from, next_step, and
           any type registered in the ontology.`,
          `Authoring is manual as well as generated. Right-click adds a node, dragging
           from a node's port draws an edge, and edges are edited or deleted from their own
           context menu. The canvas supports zoom, pan, select-all, undo and redo,
           recentre, export, and an automatic force-directed layout. Filters by source
           document and by tag hide nodes rather than deleting them. Source-evaluation
           scores appear as badges on source nodes.`,
        ]},

        { type: "figure",
          image: "features-workspace.png",
          alt: `The workspace canvas populated by an argument-map analysis.`,
          caption: `The knowledge workspace after an argument-map analysis.`,
          placeholder: `The workspace canvas with 20 to 40 colour-coded nodes and typed edges, the
                        workspace selector at top, the filter controls visible, and one node selected
                        showing its properties panel.` },

        { type: "prose", body: [
          `Four AI tools operate on the canvas. All four are entries in a tool registry, so
           a plugin can add its own alongside them and it will appear in the same
           context menu.`,
        ]},

        { type: "definitions", items: [
          { term: `Find Weakpoints`,
            body: `Flags claims that have no supporting evidence or citation edges, listing
                   each one with a reason and a suggestion of what evidence would resolve
                   it.` },
          { term: `Colour Organise by Theme`,
            body: `Clusters nodes semantically and recolours them by cluster, which is what
                   makes a theme running across several documents visible at a glance.` },
          { term: `Generate Outline`,
            body: `Turns a selection of nodes and the edges between them into a hierarchical
                   textual outline ordered by logical flow.` },
          { term: `Outline Workspace Graph`,
            body: `The same operation applied to the entire canvas rather than a selection.` },
          { term: `Declutter & Simplify`,
            body: `Merges semantically duplicate nodes, removes low-confidence edges,
                   shortens overlong titles, and re-lays out the result.` },
        ]},

        { type: "figure",
          image: "features-workspace-ai-tools.png",
          alt: `The workspace AI tools context menu open over the canvas.`,
          caption: `Workspace AI tools operating on the graph.`,
          placeholder: `The workspace with the AI tools context menu open (Find Weakpoints, Colour
                        Organise by Theme, Generate Outline, Declutter), ideally alongside the
                        weakpoints results dialog.` },

        /* ---- 8. Blueprints and workflows ---- */
        { type: "heading", level: 2, text: `Blueprints and workflows` },

        { type: "prose", body: [
          `Every AI feature in Papyrus, without exception, is a **blueprint** executed by a
           shared runner. This is an architectural rule rather than a convention: no
           service, dock or feature is permitted to call a model directly. Chat is a
           blueprint. Analysis modes are blueprints. Workspace tools are blueprints. A
           workflow a user assembles in the visual editor is the same kind of object as the
           ones that ship with the application, and runs through the same machinery.`,
          `A blueprint is a named list of steps with a description, mount points that
           decide where it appears in the interface, and active contexts. A step has an
           identifier, a step type, inputs resolved from a shared state dictionary, an
           output key, model options -- model, required capabilities, prompt key, system
           prompt, temperature, token limits, JSON mode, output schema -- interface options,
           any context to auto-inject, permissions, and optional true and false branches.
           Model selection uses a token resolved at runtime from application state rather
           than a hardcoded model name, and a step can declare required capabilities such
           as vision so that only capable models are offered.`,
          `Over forty step types are registered. Plugins register additional step types
           through the same protocol, and they appear in the visual editor automatically.`,
        ]},

        { type: "table",
          caption: `Built-in step types, by group.`,
          columns: [`Group`, `Steps`],
          rows: [
            [`Model`, `LLM query, LLM schema query for structured JSON output, extraction repair`],
            [`Retrieval`, `Build retrieval plan, artifact retrieve, pack artifact context, RAG search, rank blocks`],
            [`Extraction`, `Extract document blocks, entities, citations, dates, tables and PDF grids; section extract; detect patterns; document chunk; read document`],
            [`Knowledge`, `Artifact write, evidence store, relate, ontology catalogue, ontology upsert, graph validator, section subgraph merge, section synthesis and store, quote hydration, build deterministic quotes`],
            [`Analysis`, `Analysis contract, analysis compact, analysis finalise, analysis send to workspace`],
            [`Data`, `Query database, database write, structured query, source statistics, notes read`],
            [`Flow and I/O`, `Foreach, branch, user input, show item selector, await event, dispatch event, python script, select PDF region, workspace write`],
            [`Evaluation`, `Bias evaluation`],
          ]},

        { type: "prose", body: [
          `The Blueprint Editor is a node-graph canvas. Step types are dragged in from a
           categorised sidebar, nodes are connected, and the selected node is edited in an
           inspector. The blueprint's name, description, mount points and active contexts
           are set on the same canvas and saved into the project. The editor supports
           duplicate, delete, zoom to cursor, fit-to-view and several wiring modes. An AI
           builder assistant will draft a blueprint from a plain-English description of a
           workflow, which the user then edits by hand.`,
          `Output is configured by attaching an interface output node that describes a
           format and a target. Targets include a floating overlay, the custom tools tab,
           the chat area, the search tab, the Data Dock's workflow panel and the notes
           dock's workflow panel. Inline citation weaving can be enabled per step by
           pointing at the state key that holds the retrieval results.`,
        ]},

        { type: "table",
          caption: `Output formats available to a blueprint step.`,
          columns: [`Output format`, `Behaviour`],
          rows: [
            [`silent`, `No interface output; the result is stored in state only`],
            [`stream`, `Token-by-token text`],
            [`floating text`, `A formatted overlay`],
            [`chat with citations`, `Citation bubbles carrying document, page and quote`],
            [`search cards`, `Interactive result cards`],
            [`table`, `A sortable spreadsheet-style table`],
            [`card grid`, `A grid of visual cards`],
            [`workspace graph`, `Imports nodes and edges into the workspace`],
            [`item selector`, `A browse-and-jump results dialog`],
            [`bias card`, `A scored assessment card`],
          ]},

        { type: "figure",
          image: "features-blueprint-editor.png",
          alt: `The visual blueprint editor with a multi-step workflow on the canvas.`,
          caption: `The visual blueprint editor.`,
          placeholder: `The Blueprint Editor tab: the categorised step sidebar on the left, a multi-node
                        workflow on the canvas with connections, and the node inspector open on the
                        right showing model, prompt key, inputs and output key.` },

        /* ---- 9. Prompts, tracing and the process monitor ---- */
        { type: "heading", level: 2, text: `Prompts, tracing and the process monitor` },

        { type: "prose", body: [
          `Every prompt in the system is a named key. Chat and query prompts, system
           prompts, JSON-schema enforcement text, structured-output preambles,
           post-processing instructions, citation and graph-building prompts and synthesis
           prompts are all registered entries in a prompt manager, referenced by key from
           the steps that use them. Hardcoding prompt text is treated as a defect. The
           Prompt Editor exposes every registered prompt for editing, so tone, format,
           schema instructions or behaviour can be changed without touching code, and
           plugins can register their own prompts or override an existing one by key.`,
          `Every model invocation produces a trace record capturing the exact rendered
           prompt as sent, the retrieved context chunks, and the raw response. A trace
           button appears on every AI output. A call that produces no trace is, by
           definition, a bug.`,
        ]},

        { type: "figure",
          image: "features-prompt-trace.png",
          alt: `The prompt trace viewer showing the rendered prompt, retrieved context and raw response for one call.`,
          caption: `The prompt trace for a single AI response.`,
          placeholder: `The prompt trace viewer showing the exact rendered system prompt, the retrieved
                        context chunks, and the raw model response for one call.` },

        { type: "prose", body: [
          `The process monitor lists every queued and running background job with its
           status and allows any of them to be aborted. Because any operation over roughly
           fifty milliseconds is offloaded to a background worker enqueued in a process
           registry, the monitor is a complete picture of what the application is doing at
           any moment, rather than a partial one. Non-blocking status is reported through
           toast notifications.`,
        ]},

        { type: "figure",
          image: "features-process-monitor.png",
          alt: `The process monitor listing concurrent background jobs during ingestion.`,
          caption: `The process monitor during ingestion.`,
          placeholder: `The process monitor listing several concurrent background jobs (parsing, entity
                        extraction, embedding) with status and abort controls.` },

        /* ---- 10. Models and backends ---- */
        { type: "heading", level: 2, text: `Models and backends` },

        { type: "prose", body: [
          `Local inference runs through Ollama and llama.cpp, both registered in a backend
           registry so a further backend can be added without touching feature code.
           Rather than a single setting naming "the model", Papyrus assigns models to
           roles: main answer, fast worker, embedding, reranker, vision, transcription and
           extraction repair, each with hardware-tier recommendations. A small, fast model
           can therefore handle workhorse tasks while a larger one handles final synthesis.
           Capability filtering means a step that needs vision is only offered models that
           provide it.`,
          `Alongside the generative models sit several small optional models: an ONNX
           cross-encoder reranker, an ONNX sentence classifier, a spaCy English model for
           named-entity recognition and linguistics, and a date parser. An AI Setup screen
           installs them in one click, with background download, checksum, tokenizer and
           inference validation, atomic activation, hot reload, and repair, import, remove
           and cancel controls. All optional models are manifest-driven with pinned
           revisions and absolute user-data paths. The same screen manages backends and
           text-to-speech voices.`,
          `Notably, the stack avoids a PyTorch dependency entirely; all small-model
           inference runs through ONNX Runtime.`,
          `The LLM Controls settings tab exposes every model selection, capability filter,
           context setting and backend option the system uses. Available models and
           blueprints are read from registries at runtime and never hardcoded.`,
        ]},

        { type: "figure",
          image: "features-settings-llm-controls.png",
          alt: `The LLM Controls settings tab with model role assignments and capability filters.`,
          caption: `The LLM Controls settings tab.`,
          placeholder: `Settings open on LLM Controls: model role assignments, capability filters, context
                        settings and backend options, with a model dropdown expanded.` },

        /* ---- 11. Citations and bibliography ---- */
        { type: "heading", level: 2, text: `Citations and bibliography` },

        { type: "prose", body: [
          `Citation handling has two halves that are extracted separately and then joined.
           Bibliography extraction parses reference lists into structured entries; in-text
           citation extraction finds citation markers in the body; and a dedicated citation
           matcher links the two, so an in-text marker resolves to its full reference. A
           citation graph service builds the citation network across the corpus from the
           result.`,
          `The Citation Dock lists every citation record in the project. Formatting is
           available in APA, MLA and Chicago for both in-text citations and full entries,
           with one-click works-cited generation. Diagnostics in the dock report matching
           coverage and list unresolved references, which is more useful than a silent
           partial result.`,
          `The bundled Zotero plugin adds library browsing and a smart matching dialog that
           links Zotero metadata to project documents, connecting through the local API
           first where one is available.`,
        ]},

        { type: "figure",
          image: "features-citation-dock.png",
          alt: `The Citation Dock listing matched references with a style selector.`,
          caption: `The citation dock with matched references.`,
          placeholder: `The Citation Dock listing citation records with a style selector (APA / MLA /
                        Chicago), matching diagnostics, and a generated works-cited list.` },

        /* ---- 12. Source evaluation and bias tooling ---- */
        { type: "heading", level: 2, text: `Source evaluation and bias tooling` },

        { type: "prose", body: [
          `An offline source evaluator scores documents on structural and metadata signals
           through a pluggable scoring-metric registry: DOI and journal resolution,
           retraction checking, the presence of metadata, the presence of a reference list,
           and any further metric that has been registered. Nothing about the scoring
           involves a language model.`,
          `Evaluation is event-driven. It triggers after extraction completes, reads
           metadata from the citation record first and only falls back to scanning the PDF,
           and re-scores automatically when a citation record is updated. Background
           evaluations never interrupt with a dialog; a manually requested run may prompt
           for missing metadata. Each evaluation persists a score together with a ledger of
           the individual metric results, so the number is explainable rather than opaque,
           and workspace source nodes display it as a badge.`,
          `Separately, a bias evaluation step and detector dialog assess text against
           bundled bias reference datasets and render a scored assessment card.`,
        ]},

        /* ---- 13. Data dock ---- */
        { type: "heading", level: 2, text: `Data dock` },

        { type: "prose", body: [
          `The Data Dock is the quantitative side of the application: a spreadsheet-like
           surface where tabular material becomes real data rather than text that happens
           to contain numbers.`,
        ]},

        { type: "definitions", items: [
          { term: `Loading and promotion`,
            body: `CSV, TSV and XLSX files load as editable datasets, or open as a read-only
                   preview until promoted with a single button.` },
          { term: `Extraction from PDFs`,
            body: `A region of a PDF page can be selected and turned into a grid, with
                   mapping controls for headers and column types. This is how a table
                   printed in a paper becomes queryable data.` },
          { term: `Grid editing`,
            body: `Copy, cut, paste, undo, redo, clear, and computed columns such as sum and
                   average.` },
          { term: `Charts`,
            body: `Chart generation directly from the grid.` },
          { term: `Jump to source`,
            body: `Any cell navigates back to the page and region it was extracted from.` },
          { term: `Structured queries`,
            body: `Real aggregates, group-bys and filters executed over datasets. This is
                   where the retrieval planner routes numeric questions, which is why the
                   model is never asked to perform arithmetic.` },
          { term: `First-class project data`,
            body: `Datasets are visible to retrieval like any other source.` },
          { term: `Extension points`,
            body: `A data provider registry accepts new chart types, grid extractors, table
                   parsers, grid actions and file loaders from plugins.` },
        ]},

        { type: "figure",
          image: "features-data-dock.png",
          alt: `The Data Dock showing a table extracted from a PDF and a chart generated from it.`,
          caption: `A table extracted from a PDF into an editable dataset.`,
          placeholder: `The Data Dock with a grid of extracted tabular data, a chart generated from it,
                        and -- if possible -- the source PDF region selection visible alongside.` },

        /* ---- 14. Tags, notes, dictionary ---- */
        { type: "heading", level: 2, text: `Tags, notes and the dictionary` },

        { type: "definitions", items: [
          { term: `Tags`,
            body: `Applied to documents, highlights, notes and workspace nodes, managed in a
                   tag manager, usable as a filter everywhere, with a tag-relatives view for
                   related tags.` },
          { term: `Notes dock`,
            body: `Every note and every discovered entity in one filterable list, with
                   jump-to-source and a workflow panel for running blueprints against the
                   current selection. Entity discovery reads the canonical entity artifacts
                   produced at ingestion rather than re-extracting them.` },
          { term: `Quick note`,
            body: `Note capture from anywhere in the application.` },
          { term: `Scratchpad`,
            body: `An unstructured jotting surface for material that does not yet belong
                   anywhere.` },
          { term: `Dictionary dock`,
            body: `Save, look up and manage word definitions inside the project.` },
        ]},

        /* ---- 15. Utility tools ---- */
        { type: "heading", level: 2, text: `Utility tools` },

        { type: "definitions", items: [
          { term: `OCR dock`,
            body: `Runs optical character recognition over scanned pages or whole documents
                   to make them searchable and analysable.` },
          { term: `Text-to-speech dock`,
            body: `Converts selected pages to audio, with voice and speed selection and
                   installable voices.` },
          { term: `Slideshow maker`,
            body: `Assembles project material into a slide deck.` },
          { term: `Essay writer dock`,
            body: `A long-form writing surface inside the project, next to the material it
                   draws on.` },
          { term: `Command palette`,
            body: `Keyboard-driven access to every registered action.` },
          { term: `Keybinding registry`,
            body: `A single source of truth for every built-in shortcut, fully remappable in
                   settings, with plugin shortcuts held in their own scope. Scopes cover
                   global, PDF viewer, video player, workspace, data dock, intelligence,
                   research, notes, citations, writing, dictionary, OCR and
                   text-to-speech.` },
          { term: `Theme manager`,
            body: `Token-based themes with full create, read, update and delete support,
                   propagated to plugin widgets as well as core interface elements. Plugins
                   can contribute themes.` },
          { term: `Dock and layout managers`,
            body: `Dockable panels with saved layouts and persistent splitters.` },
          { term: `Focused dialogs`,
            body: `Extract pages, metadata request, entity editor, workspace review and
                   others, each reachable from the surface it belongs to.` },
        ]},

        /* ---- 16. Help and tutorials ---- */
        { type: "heading", level: 2, text: `Help and tutorials` },

        { type: "prose", body: [
          `A help registry holds several dozen authored topics across Getting Started,
           Reading & Annotation, Chat & AI Research, Document Analysis, Workspace,
           Workflows & Blueprints, Organisation, AI & Prompts, Tools, Data Dock and Help
           itself. The Help Center dialog browses them and searches their full text.`,
          `Two shortcuts connect the interface to that registry directly. Pressing F1 with
           a panel focused opens the topic for that control. Shift+F1 enters a "what's
           this" mode in which clicking any element jumps straight to its help topic.`,
          `Interactive tutorials are driven by a tutorial engine that overlays the real
           interface, highlights real targets, advances on genuine user actions or a next
           button, and records progress. Tutorials reference a registry of named interface
           targets rather than screen coordinates, so they keep pointing at the right
           widget when the layout changes. Every non-trivial control is expected to have a
           help topic, and plugins register their own topics and tutorials in their own
           namespace.`,
        ]},

        { type: "figure",
          image: "features-help-center.png",
          alt: `The Help Center dialog, or the tutorial overlay highlighting a real interface element.`,
          caption: `The Help Center and an in-app tutorial overlay.`,
          placeholder: `The Help Center dialog with the topic list and a topic rendered, or the tutorial
                        overlay highlighting a real UI element with its instruction bubble.` },

      ],
    },

    /* =================================================================
       PAGE: HOW IT WORKS  (how-it-works.html)
       ================================================================= */

    "how-it-works": {
      title: `How It Works`,
      subtitle: `The layered architecture, the event bus, the registries, and the workflow engine that executes every AI feature.`,
      sections: [

        { type: "prose", body: [
          `Papyrus is a Python application with a PySide6 interface, and its structure is
           conventional in outline: a headless backend, an interface layer, and plugins.
           What is worth explaining is the discipline imposed on the boundaries between
           them, because that discipline is what makes the design principles on the
           [Motivation](why.html) page enforceable rather than aspirational.`,
        ]},

        // ---- Three layers ----
        { type: "heading", level: 2, text: `Three layers` },

        { type: "prose", body: [
          `The rule that shapes everything else is that \`core/\` is headless and **may
           never import the GUI**. Business logic, extraction, inference and database
           access live there and know nothing about widgets. The interface reaches them
           only through a typed application context, service method calls and an event bus.
           Plugins use neither directly; they see only the public API facade.`,
        ]},

        { type: "diagram", id: "arch-layers",
          caption: `The three layers and the two channels they are permitted to communicate through.` },

        { type: "definitions", items: [
          { term: `core/`,
            body: `The headless backend. Contains the workflow engine, the event bus, data
                   models, the ontology, the plugin system, every registry, all services --
                   grouped by domain into ai, content, data, document, knowledge, project,
                   reference, workspace, extraction and intelligence -- the LLM backends,
                   the database layer and the help system.` },
          { term: `gui/`,
            body: `The PySide6 interface: the main window, base widget classes, reusable
                   components, docks, the dock, layout, dialog, keybinding and shortcut
                   managers, the GUI registries and the theme system. It reaches the backend
                   only through the application context, event-bus signals and service
                   calls.` },
          { term: `plugins/`,
            body: `Self-contained bundles that use only the public API. A plugin never
                   imports application internals, which is what allows the loader to remove
                   one cleanly.` },
        ]},

        // ---- Event bus ----
        { type: "heading", level: 2, text: `The event bus` },

        { type: "prose", body: [
          `Cross-layer communication is signal-based, across roughly twenty-one event
           domains -- document, project, workflow, workspace, ontology, intelligence,
           analysis, research agent, GUI and others -- each carrying typed payload objects
           rather than loose dictionaries.`,
          `The pattern is that a feature emits an intent and a service listens and acts. A
           direct cross-layer method call is treated as an anti-pattern. The cost is a
           layer of indirection when reading the code; the benefit is that any number of
           listeners can respond to the same intent without the emitter knowing they exist.
           That is what allows source evaluation to trigger itself after extraction
           finishes, the process monitor to display work it did not start, and a plugin to
           react to a project opening without the project service having been written with
           plugins in mind.`,
        ]},

        // ---- AppContext ----
        { type: "heading", level: 2, text: `AppContext` },

        { type: "prose", body: [
          `Every interface component is constructed with a single typed facade carrying the
           services and registries that component is allowed to use. No interface component
           constructs its own backend objects, and none of them reaches up through the main
           window to find something. Dependencies arrive by injection or not at all.`,
          `This is a small rule with a large effect on testability: a dock can be
           instantiated against a context holding test doubles, and the reverse dependency
           -- a service reaching into a widget -- is impossible by construction because the
           backend cannot import the interface in the first place.`,
        ]},

        // ---- Registries ----
        { type: "heading", level: 2, text: `Registries` },

        { type: "prose", body: [
          `Extensibility is uniform rather than ad hoc. Everything pluggable lives in a
           registry created once at startup and exposed through both the application
           context and the plugin API, and every registry that accepts plugin contributions
           supports removal by plugin identifier -- which is what makes unloading a plugin
           a complete operation rather than a partial one.`,
        ]},

        { type: "table",
          caption: `The registries and what each one governs.`,
          columns: [`Registry`, `Governs`],
          rows: [
            [`Blueprint registry`, `All AI workflows`],
            [`Blueprint node-type registry`, `Step types available in the visual editor`],
            [`Workspace AI tool registry`, `AI tools operating on selected workspace nodes`],
            [`Workspace node-type registry`, `Visual node types on the canvas`],
            [`Ontology registry`, `Entity and relation types`],
            [`Data provider registry`, `Chart types, grid extractors, table parsers, file loaders`],
            [`Source format registry`, `Ingestible source types and their parsers`],
            [`LLM backend registry`, `Inference backends`],
            [`AI widget registry`, `AI output formats: prompt, parser and renderer together`],
            [`Source scoring registry`, `Source-credibility metrics`],
            [`Deterministic extractor registry`, `Entity extractors used by discovery`],
            [`Pattern detector registry`, `Pattern detection steps`],
            [`Plugin extension registry`, `Everything plugins contribute to the interface`],
            [`Keybinding registry`, `Every built-in and plugin shortcut`],
            [`Action registry`, `Toolbar buttons, command palette entries, menu actions`],
            [`Context menu registry`, `Right-click items across surfaces`],
            [`Help registry`, `Help topics`],
            [`UI target registry`, `Named interface targets for help and tutorials`],
            [`Pack contributor registry`, `What can be exported to and imported from a pack`],
            [`Voice registry`, `Text-to-speech voices`],
          ]},

        // ---- Blueprint engine ----
        { type: "heading", level: 2, text: `The blueprint execution engine` },

        { type: "prose", body: [
          `No service, dock or feature may call a model directly. Every AI feature is a
           blueprint -- a named list of steps -- and every blueprint runs through the same
           runner. The consequence is that tracing, aborting, caching, model selection and
           output routing are implemented once and apply to everything, including
           workflows a user assembles and workflows a plugin registers.`,
        ]},

        { type: "diagram", id: "blueprint-run",
          caption: `A blueprint run, from the intent that starts it to the interface surface that receives its output.` },

        { type: "steps", items: [
          { title: `Intent`,
            body: `A "run blueprint" intent is emitted onto the event bus by whatever
                   surface the user acted on -- a chat box, a tool button, an analysis
                   panel, a plugin.` },
          { title: `Thread and enqueue`,
            body: `The runner service creates a runner thread and enqueues it in the process
                   registry, which is what makes the job visible and abortable in the process
                   monitor from the moment it exists.` },
          { title: `Walk the steps`,
            body: `The runner walks the steps in order, resolving each step's inputs from the
                   shared state dictionary and dispatching it to its registered step class.
                   FOREACH and BRANCH are handled natively as flow control.` },
          { title: `Collect and update`,
            body: `Each step returns a typed execution result. The runner writes it into state
                   under the step's output key and emits progress.` },
          { title: `Route the output`,
            body: `On completion an interface router delivers the result to the configured
                   target and format -- a floating overlay, the chat area, the search tab,
                   the custom tools tab, a dock's workflow panel, or nothing at all if the
                   step was configured silent.` },
        ]},

        { type: "prose", body: [
          `Because a step declares its model options and required capabilities rather than
           naming a model, and because the model itself is resolved at runtime from
           application state, changing the model assigned to a role changes the behaviour of
           every blueprint that depends on that role without any blueprint being edited.
           The full catalogue of step types and output formats is on the
           [Features](features.html#blueprints-and-workflows) page.`,
        ]},

        { type: "figure",
          image: "arch-request-lifecycle.png",
          alt: `One AI request traced from the intent that started it through to the interface.`,
          caption: `One AI request, end to end.`,
          placeholder: `Either a screenshot showing the same request visible in the chat, the process
                        monitor and the prompt trace at once, or an authored figure tracing intent ->
                        event bus -> workflow runner -> step -> model -> UI router.` },

        // ---- Threading ----
        { type: "heading", level: 2, text: `Threading and the process registry` },

        { type: "prose", body: [
          `Any operation that could take more than roughly fifty milliseconds is offloaded.
           Model calls, database queries, file input and output, graph algorithms and every
           ingestion stage run in background workers enqueued in a process registry. PDF
           page rendering goes further and runs in a separate worker process.`,
          `The registry is not only a scheduling mechanism. Because every unit of
           background work is enqueued there, the process monitor is a complete account of
           what the application is doing rather than a sampling of it, and abort is a
           uniform operation rather than something implemented per feature.`,
        ]},

        // ---- Data model ----
        { type: "heading", level: 2, text: `What a project stores` },

        { type: "prose", body: [
          `A project is a \`.pdfproj\` file plus two sibling directories, all of which can be
           moved together.`,
        ]},

        { type: "definitions", items: [
          { term: `The project database`,
            body: `An SQLite file holding documents, annotations, notes, tags, citations,
                   workspaces, graph nodes and edges, chat history, datasets and every
                   intelligence artifact. Full-text search is served by SQLite's FTS5
                   extension over a mirror of the artifact text.` },
          { term: `The vector store`,
            body: `\`<project>.pdfproj_chroma_db/\` -- a local ChromaDB store holding
                   artifact-keyed embeddings, so a semantic hit and a keyword hit for the
                   same segment fuse rather than competing.` },
          { term: `Project assets`,
            body: `\`<project>.pdfproj.assets/\` -- project-owned copies of imported media, so
                   a project does not silently depend on files elsewhere on the disk.` },
          { term: `Plugin-owned tables`,
            body: `Declared through the plugin API, created when a project opens, and never
                   dropped when a plugin is unloaded.` },
        ]},

        { type: "callout", tone: "note", title: `On idempotence`, body: [
          `A per-source, per-stage status table records a content hash, a settings hash, the
           prompt key and the model used for every stage that has run. A stage compares that
           record before doing any work and skips if it is current. This is what makes
           re-opening a project cheap, makes re-processing after an edit narrow, and makes
           the whole pipeline safe to run again at any time.`,
        ]},

        // ---- Testing ----
        { type: "heading", level: 2, text: `Testing` },

        { type: "prose", body: [
          `The project maintains a unit and integration test suite that mirrors the source
           tree. Its current state, along with the rest of the honest accounting, is on the
           [Status](status.html) page.`,
        ]},

      ],
    },

    /* =================================================================
       PAGE: INTELLIGENCE LAYER  (intelligence.html)
       ================================================================= */

    intelligence: {
      title: `The Intelligence Layer`,
      subtitle: `Extraction, storage, retrieval and grounded analysis -- the part of the system every other part rests on.`,
      sections: [

        { type: "callout", tone: "note", title: `The goal, in one sentence`, body: [
          `Papyrus reads a library the way an expert researcher would -- deterministically
           first, citing everything, spending the language model only where judgement is
           genuinely needed -- and turns it into a living, queryable, editable knowledge
           graph that powers every intelligent feature in the application.`,
        ]},

        { type: "prose", body: [
          `The working slogan is *ingest once, understand everything*. A source is
           processed when it arrives, not when it is queried, and what that processing
           produces is a structured store rather than a cache of text chunks. Every feature
           that appears intelligent -- chat, search, analysis, the workspace tools, entity
           discovery, the timeline -- reads from that one store through one retrieval path.`,
        ]},

        // ---- Artifact store ----
        { type: "heading", level: 2, text: `The artifact store` },

        { type: "prose", body: [
          `Everything extracted is an **artifact** in a relational knowledge base, with a
           companion edge table for relations and a vector index keyed by the same
           identifiers. Six tables carry the structure.`,
        ]},

        { type: "table",
          caption: `The tables of the artifact store.`,
          columns: [`Table`, `Role`],
          rows: [
            [`intelligence_artifacts`,
             `Every node: source, block, sentence, entity, entity mention, bibliography entry, in-text citation, date mention, table, table row, transcript segment, summary, annotation and chunk. Each carries exact text, normalised text, a normalised key, a locator, a section path, metadata, a confidence, a created_by field, an extractor name and version, a model role and name where applicable, an input hash and a status. Mirrored into an FTS5 index for keyword search.`],
            [`intelligence_artifact_edges`,
             `Every relation: contains and part_of, located_in, mention_of, mentioned_in, co_occurs_with, affiliated_with, cites, supports, attacks, elaborates, summarizes and annotates -- each with its own confidence and provenance.`],
            [`intelligence_artifact_embeddings`,
             `Per-artifact embedding status: the vector store reference, the model used, and the input hash it was computed from.`],
            [`intelligence_stage_status`,
             `The per-source, per-stage cache: status, content hash, settings hash, prompt key and model. This table is what makes the pipeline idempotent.`],
            [`intelligence_analysis_runs`,
             `Analysis output cached on mode, parameter hash and document hash.`],
            [`intelligence_retrieval_cache`,
             `Fused and reranked candidates cached on query hash and project-state hash.`],
          ]},

        { type: "prose", body: [
          `Two further tables hold per-source processing mode and job records. Alongside
           them sits the identity scheme that makes the whole store stable: artifact
           identifiers are deterministic, generated as a UUID5 over the source, the artifact
           type and the storage reference. Re-running a stage therefore produces the same
           identifiers, so a citation written into a note last month still resolves after
           the document has been re-processed.`,
          `A canonical entity is a project-level artifact with no source, keyed on its
           entity type and normalised key. That is the mechanism by which the same person or
           organisation is recognised across documents: individual mentions stay attached to
           their own sources and point at the canonical record.`,
        ]},

        { type: "figure",
          image: "intelligence-artifact-browser.png",
          alt: `The raw Artifacts view with one artifact selected, showing its full provenance record.`,
          caption: `An artifact with its full provenance record.`,
          placeholder: `The raw Artifacts view with one artifact selected, showing its type, exact text,
                        locator (page and offsets), extractor name and version, created_by, confidence
                        and model role.` },

        // ---- Ingestion ----
        { type: "heading", level: 2, text: `The ingestion pipeline` },

        { type: "prose", body: [
          `When a source is added, a scheduler enqueues a dependency-aware sequence of
           stages, each of which runs as a background worker and appears in the process
           monitor.`,
        ]},

        { type: "code", language: "text", body:
          `SOURCE_REGISTERED -> PARSED_BLOCKS -> SECTIONS (+ sentences) -> FULL_TEXT_INDEX
  -> ENTITIES -> DATES -> CITATIONS -> TABLES -> CLAIMS -> EMBEDDINGS
  -> [DEEP only: SUMMARIES, GRAPH_SEEDS, FIGURES]` },

        { type: "diagram", id: "ingestion-pipeline",
          caption: `The ingestion stages. Every stage is idempotent, and none of them calls a generative model.` },

        { type: "prose", body: [
          `Every stage compares a content hash and the identity of any model involved
           against the stage status table and skips if it is already current. **No
           generative model call occurs anywhere in this pipeline.** That is the single most
           consequential fact about the intelligence layer: extraction is fast, repeatable,
           free to re-run, and auditable, because nothing in it is a guess made by a
           generative model.`,
        ]},

        { type: "table",
          caption: `The four processing modes, which gate how much of the pipeline runs.`,
          columns: [`Mode`, `Behaviour`],
          rows: [
            [`Minimal`, `Parse, segment and index only -- the fastest path to a searchable source`],
            [`Balanced`, `Adds entities, dates, citations, tables, sentence classification and embeddings. The default`],
            [`Deep`, `Adds extractive summaries, deterministic argument-relation seeding and figure handling`],
            [`Manual`, `Nothing runs automatically; each stage is triggered explicitly`],
          ]},

        // ---- Extractors ----
        { type: "heading", level: 2, text: `The deterministic extractor stack` },

        { type: "prose", body: [
          `Each extractor is registered rather than hardcoded, and plugins add their own to
           the same stack with an explicit layer ordering.`,
        ]},

        { type: "definitions", items: [
          { term: `Sentence segmentation`,
            body: `Produces sentence artifacts with stable identifiers of the form
                   block-id:s-index, plus character offsets. The sentence is the unit
                   everything else in the system references.` },
          { term: `Entity extraction`,
            body: `A layered pipeline: a general spaCy named-entity layer that keeps all
                   labels distinct, so people and organisations are never conflated; a domain
                   pattern layer of metric regular expressions and a project glossary covering
                   methods, datasets, concepts and works; a resolution layer that clusters
                   mentions by normalised key across documents; and a relation layer that
                   emits mentioned_in, co_occurs_with and affiliated_with edges.` },
          { term: `Sentence classification`,
            body: `Tags every sentence as claim, evidence or reasoning, with auxiliary labels
                   for definition, methodology, citation-dense and quote, and a confidence. It
                   uses a local ONNX encoder when one is installed and falls back to
                   discourse-marker heuristics otherwise.` },
          { term: `Extractive summarisation`,
            body: `TextRank over a sentence graph, per section and per document. Abstractive
                   summarisation exists but is opt-in and is a separate, explicitly run
                   blueprint, because it involves a model and extractive summarisation does
                   not.` },
          { term: `Argument-relation seeding`,
            body: `Scores evidence-and-reasoning-to-claim pairs using discourse markers and
                   section co-location, writing supports, attacks and elaborates edges with no
                   model involvement at all.` },
          { term: `Citations`,
            body: `Bibliography entries and in-text citations are extracted separately and
                   then linked by a dedicated matcher.` },
          { term: `Dates`,
            body: `Extracted and normalised onto a project-wide timeline.` },
          { term: `Tables`,
            body: `Extracted as real queryable data rather than as text that looks like a
                   table.` },
          { term: `Structured querying`,
            body: `Executes genuine aggregates -- sums, group-bys, filters -- over tabular
                   datasets, which is why the language model is never asked to perform
                   arithmetic.` },
        ]},

        { type: "diagram", id: "scalpel",
          caption: `The division of labour: everything on the left is produced at ingest without a model; the model is asked only for what is on the right.` },

        // ---- Retrieval ----
        { type: "heading", level: 2, text: `Retrieval` },

        { type: "prose", body: [
          `There is one retrieval primitive, and it runs in four stages.`,
        ]},

        { type: "steps", items: [
          { title: `Plan`,
            body: `The query is analysed deterministically for intent and query entities.
                   Numeric or aggregate questions are routed to the structured query executor
                   instead of to text retrieval.` },
          { title: `Signals`,
            body: `Four retrievers run over the artifact store: vector, for semantic
                   similarity from the local ChromaDB index; keyword, for FTS5 BM25 over the
                   artifact full-text mirror; entity-anchored, which resolves query entities
                   to canonical entities and expands project-wide through their mentions and
                   edges; and structured, which performs type-boosted lookups with
                   sentence-type filtering.` },
          { title: `Fusion and reranking`,
            body: `Signals are fused by reciprocal rank fusion on the shared artifact
                   identifier, so a segment found by three signals outranks one found by a
                   single signal. A sentence-type preference boost is applied, and an optional
                   local ONNX cross-encoder reranks the head of the list, with a lexical
                   fallback when that model is not installed.` },
          { title: `Tiered packing`,
            body: `Context is assembled under an explicit token budget, cheapest tier first:
                   compact facts, then document summaries, then section summaries, then exact
                   sentence text. The result is emitted as a citation-ready block carrying
                   document, citation and artifact identifiers, so the answer built from it
                   can be attributed.` },
        ]},

        { type: "diagram", id: "retrieval-stages",
          caption: `The four retrieval stages. Fusing on a shared artifact identifier is what allows the four signals to reinforce one another.` },

        { type: "prose", body: [
          `Results are cached against a query hash and a project-state hash. Retrieval is
           scoped by a typed source scope, so a query can be limited to specific documents,
           tags or plugin-contributed sources, and a context filter dialog exposes that
           choice before a question is asked. Plugins can register additional retrieval
           sources and complete retrieval providers, and can contribute a user-visible
           toggle for their source in the AI settings.`,
        ]},

        { type: "figure",
          image: "intelligence-retrieval-diagram.png",
          alt: `The retrieval context viewer showing what was retrieved and how it was assembled.`,
          caption: `The four retrieval stages as the application reports them.`,
          placeholder: `An authored figure or a screenshot of the retrieval-context viewer: plan -> four
                        parallel signals (vector, keyword, entity-anchored, structured) -> RRF fusion and
                        reranking -> tiered packed context under a token budget.` },

        // ---- Grounded graphs ----
        { type: "heading", level: 2, text: `Grounded graphs` },

        { type: "prose", body: [
          `Document analysis produces a graph, not prose, and the contract that governs how
           that graph is built is the most important safeguard in the application. It is
           worth stating step by step.`,
        ]},

        { type: "list", ordered: true, items: [
          `Papyrus first reconstructs readable canonical sentences from the source's layout
           text, classifies grounded argument units, and builds a **complete deterministic
           baseline graph** with stable node identifiers. This graph is usable on its own.`,

          `The language model is then asked only for a **small patch over that baseline** --
           never for the whole graph. Nodes it does not mention remain exactly as extracted.`,

          `Quote text is **hydrated from the canonical source artifact** and is never
           accepted from model output. This is what makes a fabricated quotation
           structurally impossible rather than merely unlikely.`,

          `The patch is validated. A patch that is sparse, fabricated, disconnected or
           filled with placeholders is **never published**. Papyrus makes at most one
           targeted repair call; if that also fails, it returns the complete deterministic
           baseline rather than a degraded result.`,

          `Sources that are short or evidence-poor are marked **limited coverage** and are
           never padded with invented nodes. An honest small graph is preferred to a
           plausible large one.`,
        ]},

        { type: "prose", body: [
          `Three detail profiles -- Focused, Standard and Exhaustive -- control the target
           size of the result; Standard aims at roughly twenty to forty proposition nodes
           plus exact-quote evidence, when the source contains enough material to support
           them. The result card reports claims, reasoning units, evidence, branches,
           section coverage, validation status, cache status, origin, and the actual number
           of language-model calls made, which is the number that tells a user how much of
           what they are looking at was generated rather than extracted.`,
          `Results are cached at the scope level. Editing source text, an annotation, a
           prompt, a mode contract, a model or a detail profile invalidates only the
           affected result.`,
        ]},

        { type: "figure",
          image: "intelligence-graph-view.png",
          alt: `The Graph view showing claim, evidence and reasoning nodes connected by typed edges.`,
          caption: `The deterministic argument graph for one paper.`,
          placeholder: `The Graph view of the Intelligence dock showing claim, evidence and reasoning nodes
                        connected by supports / attacks / elaborates edges, with a node selected showing
                        its exact quote and locator.` },

        // ---- Analysis modes ----
        { type: "heading", level: 2, text: `Analysis modes` },

        { type: "prose", body: [
          `Analysis modes are registered blueprints rather than bespoke services. Question
           answering, claim tracking, schema extraction and summarisation each chain the
           same four operations: build a retrieval plan, retrieve artifacts, pack context,
           and query the model with instructions to cite segment identifiers. They are
           exposed to plugins through the intelligence API, so a plugin can register a mode
           that behaves exactly like a built-in one.`,
          `Analysis results can be pushed onto the Workspace canvas as a live graph, where
           the workspace AI tools -- weakpoint detection, thematic clustering, outlining --
           operate on them.`,
        ]},

        // ---- Model roles ----
        { type: "heading", level: 2, text: `Model roles and the pipeline-model installer` },

        { type: "prose", body: [
          `Rather than one setting naming "the model", models are assigned to roles: main
           answer, fast worker, embedding, reranker, vision, transcription and extraction
           repair, each with hardware-tier recommendations. A blueprint step names a role
           and a set of required capabilities, not a model, so changing what is assigned to
           a role changes every feature that depends on it at once.`,
          `The optional pipeline models -- the spaCy English model, an ONNX cross-encoder
           reranker, an ONNX sentence classifier and a date parser -- install from an AI
           Setup screen in one click, with background download, checksum, tokenizer and
           inference validation, atomic activation, hot reload, and repair, import, remove
           and cancel controls. All of them are manifest-driven with pinned revisions and
           absolute user-data paths. The stack deliberately avoids a PyTorch dependency;
           small-model inference runs through ONNX Runtime.`,
        ]},

        // ---- Intelligence dock ----
        { type: "heading", level: 2, text: `Making it visible: the Intelligence dock` },

        { type: "prose", body: [
          `An extraction pipeline the user cannot inspect is a black box wearing a
           different hat. The Intelligence dock exists so that the store is browsable,
           auditable and correctable, with views for Overview, Entities, Timeline, Claims &
           Evidence, Graph, Citations, raw Artifacts and Runs.`,
          `Every artifact shows where it came from -- source, page, extractor, model,
           confidence -- and can be jumped to, verified, edited or deleted. A user edit
           becomes a high-confidence fact, and retrieval and generated views prefer it over
           the machine extraction it replaced. Correcting the store is therefore a durable
           act rather than a note in the margin.`,
        ]},

        { type: "figure",
          image: "intelligence-timeline.png",
          alt: `The Timeline view showing normalised date mentions from several documents on a shared timeline.`,
          caption: `Normalised dates across the corpus.`,
          placeholder: `The Timeline view showing date mentions from several documents placed on a shared
                        timeline, with a selected entry showing its source and span.` },

        // ---- Honest state ----
        { type: "heading", level: 2, text: `What is working, what is partial, what is missing` },

        { type: "prose", body: [
          `The intelligence layer is the most complete part of the application, but it is
           not finished. The [Status](status.html) page gives the full account; the summary
           relevant here is as follows.`,
        ]},

        { type: "callout", tone: "status", title: `Working`, body: [
          `Deterministic ingestion end to end with idempotent caching and full provenance;
           cross-document entity resolution with typed entities; fused multi-signal
           retrieval with tiered packing and caching; artifact-keyed embeddings;
           blueprint-backed analysis modes that cite segment identifiers; revisioned,
           reviewable artifact storage with review state, stage-run history, evidence
           assertions, typed cursor queries, provenance and settings hashes and resumable
           backfill; and the Intelligence dock itself.`,
        ]},

        { type: "callout", tone: "caution", title: `Partial`, body: [
          `Embedding granularity stops at sentence, summary and block-chunk level;
           per-paragraph embeddings are not separate. The ONNX sentence classifier is
           bring-your-own, with the heuristic fallback active by default, and the reranker
           installs but stays off unless present. Analysis-mode output currently streams to
           the chat surface rather than into the Analysis tab as note bubbles. Deterministic
           relation seeding writes edges to the artifact store, but model-produced
           analysis-graph relations still land only in the workspace graph database.
           Analysis evidence still travels as verbatim quotes, where referencing sentence
           identifiers instead would materially cut token cost.`,
        ]},

        { type: "callout", tone: "note", title: `Not yet built`, body: [
          `The auto-generated cross-corpus views -- a unified timeline, an entity knowledge
           graph with per-entity dossiers, a contradiction map, a citation graph view and
           cross-document claim comparison -- do not exist. The underlying data does; the
           views do not. Feedback-driven retrieval that learns from which artifacts a user
           accepts and cites is also unbuilt, as is the migration of the remaining model
           features onto the artifact store as their single backbone.`,
        ]},

      ],
    },

    /* =================================================================
       PAGE: EXTENSIBILITY  (extending.html)
       ================================================================= */

    extending: {
      title: `Extensibility`,
      subtitle: `The plugin model, the public API, the three bundled plugins, portable packs, and the optional web companion.`,
      sections: [

        { type: "prose", body: [
          `A research environment serves too many distinct disciplines for its author to
           anticipate them. The design response was to make the extension surface a
           first-class part of the architecture rather than a folder bolted on afterwards,
           and to hold it to one test: anything the core can do, a plugin can do. This page
           describes the mechanism and the three plugins that ship as evidence that the
           test is met.`,
        ]},

        // ---- Plugin model ----
        { type: "heading", level: 2, text: `The plugin model` },

        { type: "prose", body: [
          `A plugin is a directory under \`plugins/\` exposing a \`Plugin\` class with an
           identifier, a name, a version, a dependency list and a flag declaring whether it
           requires internet access. It is loaded through a fixed lifecycle.`,
        ]},

        { type: "steps", items: [
          { title: `Discovery`,
            body: `Plugin directories are found and their declarations read.` },
          { title: `Topological sort`,
            body: `Plugins are ordered by their declared dependencies, so a plugin that
                   consumes another's service loads after it.` },
          { title: `on_load`,
            body: `The plugin registers everything it contributes -- blueprints, step types,
                   entity types, source formats, docks, shortcuts, themes, tables and the
                   rest.` },
          { title: `Dock creation`,
            body: `The main window spawns any docks the plugin contributed, using the dock
                   specifications it registered.` },
          { title: `on_project_open / on_project_close`,
            body: `The plugin is told when a project becomes available and when it goes away,
                   which is when its own project-scoped tables are created.` },
          { title: `Unload`,
            body: `An automatic cleanup pass disconnects every signal the plugin subscribed
                   to, kills its background workers, and removes its entries from every
                   registry. Cleanup is performed by the loader, not by the plugin, so a
                   badly written plugin cannot leave fragments behind.` },
        ]},

        // ---- Isolation ----
        { type: "heading", level: 2, text: `Isolation and permissions` },

        { type: "definitions", items: [
          { term: `No access to internals`,
            body: `Plugins never import application internals. They interact only with a
                   controlled API facade, which is what allows the loader to know exactly what
                   a plugin has touched.` },
          { term: `Network permission is separate from enablement`,
            body: `A plugin can be enabled and network-blocked at the same time. The hosts a
                   plugin may reach are declared and enforced rather than assumed.` },
          { term: `Plugin-owned tables survive unloading`,
            body: `Tables declared through the API are created when a project opens and are
                   never dropped when the plugin is unloaded, so switching a plugin off cannot
                   destroy the data collected through it.` },
          { term: `Removal by identifier`,
            body: `Every registry that accepts plugin contributions supports removal by plugin
                   identifier, so unloading is complete rather than partial.` },
        ]},

        { type: "figure",
          image: "extending-plugin-manager.png",
          alt: `The Plugin Manager dialog listing installed plugins with separate enablement and network controls.`,
          caption: `The plugin manager, with network permission separate from enablement.`,
          placeholder: `The Plugin Manager dialog listing the bundled plugins with enablement toggles,
                        separate network-permission controls, versions and contributed capabilities.` },

        // ---- API surface ----
        { type: "heading", level: 2, text: `The public API surface` },

        { type: "prose", body: [
          `The whole extension surface is one facade. A developer script scaffolds a new
           plugin against it.`,
        ]},

        { type: "table",
          caption: `The plugin API, by namespace and method.`,
          columns: [`Namespace or method`, `Purpose`],
          rows: [
            [`blueprints.register`, `Register an AI workflow blueprint`],
            [`workspace_tools.register`, `Add a workspace AI context-menu tool`],
            [`ontology.register_type`, `Register a custom entity type`],
            [`workflow_node_types.register`, `Add a step type to the visual workflow builder`],
            [`gui_extensions.*`, `Toolbar buttons, dock specifications, AI renderers, reading filters, source viewers, citation source handlers`],
            [`widgets.register`, `Register a full AI widget: prompt, parser and renderer together`],
            [`db.register_table / db.execute`, `Declare and query plugin-owned project tables`],
            [`tasks.run_background`, `Run a tracked background worker`],
            [`subscribe / emit`, `Event bus access, automatically disconnected on unload`],
            [`register_service / get_service / require_service`, `Publish and consume services between plugins`],
            [`register_rag_source`, `Contribute a custom retrieval backend`],
            [`source_formats.register`, `Register a new ingestible source format`],
            [`register_workflow_step`, `Register a custom execution step class`],
            [`register_shortcut`, `Add a keyboard shortcut under the plugin's own scope`],
            [`register_theme`, `Contribute a theme`],
            [`register_dock_action`, `Add a context-menu action to an existing dock`],
            [`register_pack_contributor`, `Add plugin data to pack import and export`],
            [`contribute_analysis_template`, `Add an analysis template`],
            [`contribute_rag_source_filter`, `Add a retrieval source toggle to the AI settings`],
            [`intelligence.*`, `retrieve, build_retrieval_plan, register_retrieval_provider, register_artifact_producer, register_artifact_type, register_edge_type, register_entity_extractor, register_analysis_mode, list_analysis_modes, run_analysis_mode, get_artifacts, get_related_artifacts`],
            [`config.get / config.set`, `Plugin-scoped persistent configuration`],
            [`notify`, `Toast notification`],
            [`on_project_open / on_project_close / on_text_selected`, `Lifecycle and interaction hooks`],
          ]},

        // ---- Bundled plugins ----
        { type: "heading", level: 2, text: `Three plugins as worked examples` },

        { type: "prose", body: [
          `Three plugins ship with the application. They are present as demonstrations of
           the extension model rather than as products, and each one exercises a different
           part of the API.`,
        ]},

        { type: "heading", level: 3, text: `Zotero Integration` },
        { type: "prose", body: [
          `Adds a Zotero library tab inside the research dock, a sync button on the citation
           dock that opens a smart matching dialog linking Zotero metadata to project
           documents, project-scoped right-click actions in the document explorer and the
           citation dock, and a Zotero-aware citation formatter. It connects through the
           local API first where one is available.`,
          `The architectural point is what is absent: no code in the main application
           references Zotero by name. Deleting the plugin directory removes the feature
           entirely, with no side effects anywhere else.`,
        ]},

        { type: "heading", level: 3, text: `Local Laws & Precedent Integration` },
        { type: "prose", body: [
          `Registers municipal-code and case-law retrieval sources that participate in
           ordinary retrieval queries alongside the project's own documents, contributes
           legal analysis templates to the Analysis tab, adds a court-case entity extractor
           and legal ontology types, provides its own dock and settings dialog, and
           maintains its own tag database.`,
          `It is the demonstration that a complete domain vertical -- new retrieval sources,
           new entity types, new templates, new interface surfaces -- can be built entirely
           on the public API without a single change to the core.`,
        ]},

        { type: "heading", level: 3, text: `Historical Archives` },
        { type: "prose", body: [
          `Searches public archival collections with no model involvement at all. Natural
           language or Boolean queries are translated into provider-native parameters across
           several archive providers, including IIIF manifests and the Library of Congress.
           The form shows only the fields the selected providers actually support, and
           offers exact-phrase, AND, OR and NOT controls together with saved searches.
           Results preview scan thumbnails, text read by OCR, metadata and rights
           statements, and a selected record can be imported into the project as an ordinary
           source with its citation and machine-readable provenance attached.`,
          `Its privacy posture is worth stating precisely, because it is the plugin that
           most obviously needs one. It sends only the explicit query and filters -- never
           project documents, notes, highlights or prompts. It has no analytics. It never
           invokes a language model. It requires its own network permission and is
           restricted to declared public HTTPS archive hosts.`,
        ]},

        { type: "figure",
          image: "extending-historical-archives.png",
          alt: `The Historical Archives dock with its search form, results table and preview pane.`,
          caption: `The Historical Archives plugin, which reaches the network but never a model.`,
          placeholder: `The Historical Archives dock: the search form with archive selection and structured
                        filters, the results table, and the preview pane showing a scan thumbnail, OCR
                        text, metadata and a rights statement.` },

        // ---- Packs ----
        { type: "heading", level: 2, text: `Packs` },

        { type: "prose", body: [
          `A pack is a ZIP archive with the extension \`.ppack\` that moves a configured
           Papyrus setup between machines, or shares one with a collaborator. The format
           exists because a configured environment -- themes, prompts, blueprints, step
           types, analysis templates, shortcuts, layouts and the plugins that depend on them
           -- is itself research infrastructure, and rebuilding it by hand on a second
           machine is both tedious and error-prone.`,
        ]},

        { type: "code", language: "text", body:
          `manifest.json
themes/            blueprints/        prompts/
steps/             analysis_templates/
shortcuts/         layouts/
plugins/<id>/      plugin_configs/<id>.json
plugin_data/<contributor_id>.json` },

        { type: "prose", body: [
          `Packs are built and installed from a settings tab with per-item selection and
           dependency resolution, so a blueprint can be exported together with the prompts
           and step types it depends on. Any subsystem can participate by implementing a
           pack-contributor protocol and registering it -- including plugins, which is how a
           plugin ships its own configuration and collected data inside a pack.`,
        ]},

        { type: "figure",
          image: "extending-pack-import-export.png",
          alt: `The import and export settings tab showing the contents of a pack being assembled.`,
          caption: `Building a portable pack.`,
          placeholder: `The Import / Export settings tab with the pack contents tree (themes, blueprints,
                        prompts, steps, analysis templates, shortcuts, layouts, plugins) and per-item
                        selection checkboxes.` },

        // ---- Web companion ----
        { type: "heading", level: 2, text: `The local web companion` },

        { type: "prose", body: [
          `An opt-in, never-automatic interface that serves the project currently open on
           the desktop to a browser on the same private network. It is a companion to the
           desktop application rather than a server product: there is no hosted component,
           and nothing runs unless it is started by hand from settings and bound to a chosen
           private interface.`,
          `Because it exposes a live application over a network socket, its security
           posture is described here in full rather than summarised.`,
        ]},

        { type: "definitions", items: [
          { term: `Pairing`,
            body: `By rotating QR code. The secret rides in the URL fragment, is exchanged
                   once for an HttpOnly session cookie, and therefore never appears in access
                   logs.` },
          { term: `Exclusive edit lease`,
            body: `The first paired browser to request editing holds the lease and places a
                   reversible guard over the desktop interface, so two surfaces can never edit
                   the same state at the same time.` },
          { term: `No direct access to services`,
            body: `Web handlers never touch SQLite or Qt services directly. They communicate
                   with live application state through a command dispatcher that keeps all such
                   work on the main thread.` },
          { term: `Opaque source identifiers`,
            body: `Documents are exposed to the client only as opaque identifiers; filesystem
                   paths are resolved solely inside the main-thread bridge.` },
          { term: `No external assets`,
            body: `Nothing is loaded from a content delivery network. The server sets a
                   same-origin content security policy, host and origin checks, CSRF
                   protection, pairing rate limits, body size limits and a no-referrer
                   policy.` },
          { term: `Web extensions are separate`,
            body: `They are opt-in manifests. Desktop plugin widgets are never executed in a
                   browser.` },
          { term: `Versioned surface`,
            body: `The REST surface is versioned, with a live event stream carrying domain
                   events to the client.` },
        ]},

        { type: "figure",
          image: "extending-web-companion.png",
          alt: `The web companion settings tab with the interface selector and pairing QR code.`,
          caption: `The optional local web companion, shown paired with a second device.`,
          placeholder: `The Web App settings tab with the interface selector and rotating pairing QR code,
                        ideally beside a phone or narrow browser window showing the paired read-only
                        view.` },

      ],
    },

    /* =================================================================
       PAGE: STATUS & ROADMAP  (status.html)
       ================================================================= */

    status: {
      title: `Status and Roadmap`,
      subtitle: `What is finished, what is rough, what does not exist yet, and what the application is built out of.`,
      sections: [

        { type: "prose", body: [
          `Papyrus is an unfinished research project under active development, worked on by
           one person. It is not available to obtain, and this site is not announcing a
           release. The lists below are the current state of the work rather than a plan for
           a launch, and they are deliberately specific: a project page that says which
           parts do not work is more useful, and more credible, than one that does not.`,
          `This page reflects a snapshot. Anything described elsewhere on the site as
           partial or unbuilt is collected here.`,
        ]},

        // ---- Working ----
        { type: "heading", level: 2, text: `Working` },

        { type: "list", ordered: false, items: [
          `Deterministic ingestion end to end -- sentences, entities and mentions,
           citations, dates, tables, sentence classification, extractive summaries and
           seeded argument relations -- with idempotent caching and full provenance.`,
          `Cross-document entity resolution with typed entities, so a person and an
           organisation are never conflated.`,
          `Fused multi-signal retrieval with reciprocal rank fusion, tiered context packing,
           optional cross-encoder reranking, and caching.`,
          `Artifact-keyed embeddings, so a semantic hit reinforces the structured and
           keyword hits for the same segment rather than competing with them.`,
          `Blueprint-backed analysis modes that cite segment identifiers and cache their
           runs.`,
          `Artifact persistence primitives and the deterministic relation step.`,
          `The model installer and the model role system, and entity discovery reading
           ingestion output rather than re-extracting it.`,
          `Revisioned, reviewable artifact storage with review state, stage-run history,
           evidence assertions, typed cursor queries, provenance and settings hashes, and
           resumable backfill.`,
          `The Intelligence dock: Overview, Entities, Timeline, Claims & Evidence, Graph,
           Citations, Artifacts and Runs.`,
          `The plugin API and its documentation.`,
        ]},

        // ---- Partial ----
        { type: "heading", level: 2, text: `Partial, with rough edges` },

        { type: "list", ordered: false, items: [
          `**Embedding granularity.** Sentence, summary and block-chunk levels are embedded;
           per-paragraph embeddings are not separate.`,
          `**The sentence classifier.** The ONNX classifier is bring-your-own; the
           discourse-marker heuristic fallback is active by default. The reranker installs
           but stays off unless the model is present.`,
          `**Analysis output routing.** Analysis-mode output streams to the chat surface
           rather than arriving in the Analysis tab as note bubbles.`,
          `**Argument-map dual persistence.** Deterministic relation seeding writes edges to
           the artifact store, but model-produced analysis-graph relations still land only in
           the workspace graph database, which means the two live in different places.`,
          `**Evidence transport.** Analysis evidence still travels as verbatim quotes.
           Referencing sentence identifiers instead would materially cut token cost.`,
          `**Speaker handling.** Speaker turns are captured in transcription, but
           named-speaker resolution is stubbed.`,
        ]},

        // ---- Not yet built ----
        { type: "heading", level: 2, text: `Not yet built` },

        { type: "list", ordered: false, items: [
          `**Auto-generated cross-corpus views** -- a unified timeline, an entity knowledge
           graph with per-entity dossiers, a contradiction map, a citation graph view, and
           cross-document claim comparison. The underlying data exists; the views do not.`,
          `**Feedback-driven retrieval** that learns from which artifacts a user accepts and
           cites.`,
          `**Full migration onto the artifact store.** Chat, brainstorm, the workspace tools
           and citations have not yet been moved fully onto the artifact store as their
           single backbone.`,
          `**Speaker diarisation** for audio and video.`,
        ]},

        // ---- Known limitations ----
        { type: "heading", level: 2, text: `Known limitations and open problems` },

        { type: "prose", body: [
          `The remaining work is largely calibration and platform validation rather than new
           architecture: expanding benchmark corpora, validating packaged builds on every
           supported operating system, and tuning extraction and retrieval thresholds
           against measured real-world corpora rather than against intuition.`,
          `Two structural limitations are worth naming directly. First, running everything
           locally rules out the largest available models, so synthesis quality is bounded by
           what the user's hardware can serve -- the deterministic layer is designed to
           compensate for that, but it does not eliminate it. Second, a legacy Word document
           requires LibreOffice to be present on the system; where it is absent the format is
           shown as unavailable with an explanation rather than failing quietly.`,
          `No performance figures, accuracy scores or benchmark results are published here.
           None have been measured to a standard that would justify publishing them.`,
        ]},

        { type: "figure",
          image: "status-test-suite.png",
          alt: `Terminal output from the project's test suite.`,
          caption: `The project's unit and integration test suite, which mirrors the source tree.`,
          placeholder: `A terminal showing the test runner output with the passing test count -- evidence
                        of the maintained suite. Optional: delete this figure block from content.js if
                        you would rather not include it.` },

        // ---- Colophon ----
        { type: "heading", level: 2, text: `Colophon: the technology stack` },

        { type: "prose", body: [
          `Each dependency below was chosen for a specific reason, and the set as a whole
           was chosen to keep the installed footprint modest.`,
        ]},

        { type: "table",
          caption: `The stack, with the rationale for each choice.`,
          columns: [`Area`, `Technology`, `Why`],
          rows: [
            [`Language and runtime`, `Python`, `The ecosystem where document parsing, linguistics and local inference libraries actually live`],
            [`Interface`, `PySide6 (Qt 6)`, `A mature native desktop toolkit with real docking, threading and painting, which a web shell would have to reimplement`],
            [`PDF rendering and text`, `PyMuPDF`, `Fast page rendering with an accessible text layer and coordinates, which is what makes exact-span provenance possible`],
            [`Vector store`, `ChromaDB, local and on disk`, `An embedded vector index that needs no server and sits beside the project file`],
            [`Relational storage`, `SQLite with FTS5`, `One file per project, and a keyword index in the same engine as the artifact store, so BM25 and structured lookups share a transaction`],
            [`Local inference`, `Ollama, llama.cpp`, `Two established local serving paths, registered behind a backend registry so a third can be added without touching feature code`],
            [`NER and linguistics`, `spaCy`, `Deterministic, versioned, fast enough to run at ingest, and label-preserving`],
            [`Small-model inference`, `ONNX Runtime`, `Runs the cross-encoder reranker and sentence classifier without pulling in a deep-learning framework`],
            [`Speech to text`, `faster-whisper`, `Offline transcription with timestamps accurate enough to jump to`],
            [`OCR`, `Tesseract via pytesseract`, `Offline text recognition with word-level boxes, which is what gives scanned pages the same provenance as digital ones`],
            [`Graph algorithms`, `NetworkX`, `TextRank, layout and graph analysis without a bespoke implementation`],
            [`Tabular data`, `pandas, openpyxl`, `Real dataframes behind the Data Dock, so structured queries are genuine aggregates`],
            [`Document parsing`, `python-docx, ebooklib, striprtf, lxml, BeautifulSoup`, `One parser per format, all normalised into the same block stream`],
            [`Reference management`, `pyzotero (plugin only)`, `Kept in the plugin, so the core has no reference-manager dependency`],
            [`Optional web companion`, `Starlette / Uvicorn ASGI`, `A small ASGI stack that stays dormant unless the companion is started`],
            [`Packaging`, `PyInstaller`, `Produces a self-contained desktop build`],
          ]},

        { type: "callout", tone: "note", title: `No PyTorch`, body: [
          `Worth stating explicitly: the stack has no PyTorch dependency. All small-model
           inference runs through ONNX Runtime, which keeps the installed footprint and the
           cold-start cost substantially lower than a typical local-AI stack.`,
        ]},

        // ---- Closing ----
        { type: "heading", level: 2, text: `A note on this site` },

        { type: "prose", body: [
          `The project is under active development, and this site is a snapshot of it
           rather than a record of a finished thing. Descriptions here follow the state of
           the codebase at the time of writing; where a section describes something as
           partial or unbuilt, that is the current situation and not a permanent one.`,
        ]},

      ],
    },

  },
};
