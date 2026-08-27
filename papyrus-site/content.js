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
    // license:    ``,
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
    // { page: "how-it-works", href: "how-it-works.html", label: `How It Works` },  <- page content is commented out below; re-enable both together
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
           Work is organized into **projects**, saved as \`.pdfproj\` files. A project
           holds its own document set, annotations, extracted knowledge, vector index,
           workspaces and settings, so two pieces of research never share state
           accidentally.`,

          `The app is designed to minimize the number of calls to a generative model. It will
           store and index everything it can *without* a language model, and calls
           a language model only for the small number of tasks that genuinely require
           judgment. All highlights, notes, and other artifacts generated from 
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
                        center viewer with a visible highlight, and the research dock open on the right
                        showing the Chat tab mid-answer with citation bubbles.` },

        // ---- Overview: the core loop ----
        { type: "heading", level: 2, text: `How it works` },

        { type: "prose", body: [
          `A brief overview of how the application is used. The steps below list 
           the general workflow for a project regardless of the material being studied. Steps two and three happen for every
           source; the rest are used as the work requires.`,
        ]},

        { type: "steps", items: [
          { title: `Import`,
            body: `Add sources to a project. Papyrus accepts many supported formats such as PDFs,
            DOCX, EPUBs, MP4s, MP3s, and CSVs. Regardless of the format, each source is processed the same
            (using an offline transcription engine for non-text based formats) and fully viewable and annotatable.`,
            image: "steps/1.png",
            alt: "The import dialog with several files visible",
            caption: "Adding Sources to a Project",
             },
          { title: `Automatic processing`,
            body: `As soon as a source is added it is read and taken apart, with no generative
            AI involved at all. Papyrus calls this **deterministic** processing: it is done by
            parsers and pattern rules that give the same answer every time, so nothing produced
            here can be invented. It pulls out citations, people, events and organizations, which
            is what lets the researcher find the same name recurring across sources of different
            kinds. This step also begins building the vector database the AI tools search later.`,
            image: "steps/2.png",
            alt: "The deterministic processing dialog in Papyrus",
            caption: "Dialog to select which deterministic processing options to use" },
          { title: `Review and annotate`,
            body: `All imported sources can be fully reviewed in-app, both by reading text
            sources, listening/watching multimedia content, and adding annotations. Annotations across
            sources are automatically accessible in the visual workspace, allowing the researcher to organize and connect notes` ,
            image: "steps/3.png",
            alt: "A PDF open in the viewer with a highlight visible and the workspace open",
            caption: "Reviewing and annotating a source with the workspace open" },
          { title: `Analyze`,
            body: `Analysis mode allows the researcher to select a pre-defined analysis template
            or create their own. It then builds an interactive visual diagram, every part of which
            links back to the source, using three kinds of work in combination: the automatic
            extraction described above, small purpose-built models that do one narrow job each,
            and a generative model for the few judgments that genuinely need one. 
            One pre-defined template is the argument map, which extracts claims, evidence, and reasoning from a selected source and
            builds it into a node map that provides a quick overview of the source's argument, with evidence nodes
            quoting the source verbatim and linking to those specific quotes` ,
            image: "steps/4.png",
            alt: "Anaylsis Mode open in Research Dock with a completed argument map visible",
            caption: "Analysis mode with an argument map built from a source" },
          { title: `Ask`,
            body: `Chat with the research assistant to get direct answers about the sources from a locally-running model.
            All answers provide citation bubbles that link the user to the exact information the LLM used when formulating an answer`,
            image: "steps/5.png",
            alt: "The chat interface with a response visible",
            caption: "Asking questions about the sources" },
          { title: `Automate`,
            body: `Create custom workflow blueprints using the visual editor. These workflows can be 
            run on any source in any project, and make it easy to automate research steps like extracting and 
            normalizing data from PDFs`,
            image: "steps/6.png",
            alt: "The blueprint editor with a workflow visible",
            caption: "Editing the Chat Agent Blueprint in the Workflow Editor" },
          { title: `Write`,
            body: `Use the in-app writing editor to synthesize notes, diagrams, and data into one complete
            writing piece. You can easily copy and paste quotes and their citations from the visual workspace 
            into your final document` ,
            image: "steps/7.png",
            alt: "The writing editor with a document open",
            caption: "Writing a document with the writing editor, with the visual workspace accesible on the side" },
        ]},

        
        // ---- Overview: what is distinctive ----
        { type: "heading", level: 2, text: `Distinctive features` },

        { type: "prose", body: [
          `Papyrus is designed to do more than just chunk sources into a vector database
          that is then fed into an LLM. It is designed to use a variety of deterministic and 
          machine learning tools in combination with generative AI to create a more holistic overview
          of a source while keeping all extracted information linked to the source, auditable, and keep
          the researcher involved in the process.
          The design is described in full on the Philosophy page.`,
        ]},

        { type: "list", ordered: false, items: [
          `**Everything runs on the machine it is installed on.** Parsing, optical
           character recognition, transcription, embedding, entity recognition,
           classification, reranking and inference are all local.
           [Local-first](why.html#local-first-and-private-by-default)`,

          `**Extraction happens before, and without, any model.** The ingestion pipeline
           makes zero generative model calls; the model is reserved for synthesis and
           judgment.
           [Deterministic-first](why.html#deterministic-first)`,

          `**Every stored fact carries a locator.** Page and character offsets, or row and
           column, or timestamp and speaker -- along with the extractor, its version, and
           a confidence.
           [Nothing unsourced](why.html#nothing-unsourced)`,

          `**Every prompt is editable and every call is traced.** There are no hidden
           prompts and no hidden model calls; Papyrus aims to eliminate the "black box"
           associated with most generative AI tools.
           [Transparency](why.html#transparency-and-user-control)`,

          `**One knowledge base and one retrieval path.** Chat, analysis, citations,
           workspace tools and plugins all call the same retrieval primitive rather than
           building their own.
           [One retrieval path](why.html#one-knowledge-base-one-retrieval-path)`,

          `**Anything the application does, a plugin can do.** Every extension point the
           core uses is exposed through a single controlled API. This allows the app to be
           expanded to meet research needs in a variety of fields.
           [Extensible by construction](why.html#extensible-by-construction)`,
        ]},

        // ---- Overview: subsystem orientation ----
        { type: "heading", level: 2, text: `The major subsystems` },

        { type: "prose", body: [
          `The table below gives a brief overview of the major subsystems. Each
           feature is described in detail on the [Features](features.html) page.`,
        ]},

        { type: "table",
          caption: `The major subsystems and where they live in the UI.`,
          columns: [`Subsystem`, `What it does`, `Where it lives in the UI`, `Images`],
          rows: [
            [`Source ingestion`,
             `Converts every source into a universal textual representation, extracts entities, and embeds sources into the vector database`,
             `Document explorer; process monitor`, {image: "table/1.mp4", alt: "A video showing the document explorer with a PDF open and the process monitor showing an in progress ingestion job", caption: "A video showing the full ingestion process"}],
            [`Artifact store`,
             `A single relational knowledge base of extracted entities`,
             `Intelligence dock; Notes dock`, {image: "table/2.png"
              , alt: "The Intelligence Dock with a list of extracted entities visible", caption: "The Intelligence Dock with a list of extracted entities visible"
             }],
            [`Retrieval`,
             `Pulls embedded document chunks from the vector database, reranks them, and provides the best chunks to the LLM for source-grounded outputs`,
             `Research Assistant; context filter dialog`, {image: "table/3.png", alt: "The Context Filter Dialog for Research Assistant Open", caption:"The context filter menu for research assistant, controlling what context the LLM is given"}],
            [`Document analysis`,
             `Structured extraction producing grounded argument maps, methodology trackers and entity networks`,
             `Analysis tab; Workspace canvas`, {image: "table/4.png", alt:"The Anaylsis Contract Editor Screen", caption: "The Anaylsis Contract Editor Screen, allowing the user to edit and create their own anaylsis modes"}],
            [`Research dock`,
             `Chat, search, analysis, brainstorm, the research agent, custom tools and the blueprint editor`,
             `A single dockable panel with seven tabs`, {image: "table/5.png", alt:"The Research Dock with the empty Brainstorm Tab Open", caption: "The Research Dock with the empty Brainstorm Tab Open"}],
            [`Knowledge workspace`,
             `A visual canvas of typed nodes and typed relations, with AI tools that operate on a selection`,
             `Workspace`, {image: "table/6.png", alt:"The Workspace with a small network of nodes and relations visible", caption: "The Workspace with a small network of nodes and relations visible"}],
            [`Workflow engine`,
             `Executes every AI feature as a blueprint of steps; allows building custom workflows and AI tools`,
             `Blueprint editor; custom tools; process monitor`, {image: "table/7.png", alt:"A list of available workflow steps", caption:"A list of some of the available workflow steps in the builder"}],
            [`Data management`,
             `Editable datasets, table extraction from PDF regions, charts, and real structured queries`,
             `Data dock`, {image: "table/8.png", alt: "The Data Dock with a table extracted from a pdf open", caption: "The Data Dock with a table extracted from a PDF open"}],
            [`Citations`,
             `Bibliography and in-text extraction, matching between the two, and automatic APA, MLA and Chicago formatting`,
             `Citation dock`, {image: "table/9.png", alt: "The Citation Dock with a list of citations synced from the Zotero Plugin", caption: "The Citation Dock with a list of citations synced from the Zotero Plugin"}],
            [`Prompts and tracing`,
             `Every prompt is a named, editable entry; every model call produces a trace record`,
             `Prompt editor; trace viewer; process monitor`, {image: "table/10.png", alt: "The Prompt Editor with a list of prompts visible, open to an anaylsis prompt", caption: "The Prompt Editor with a list of prompts visible"}],
            [`Plugins`,
             `Registry-based extension of every subsystem above, with separate network permission`,
             `Plugin manager; plugin-contributed docks`, {image: "table/11.png", alt: "The Plugin Manager with a list of installed plugins visible, and settings to enable and disable plugins, as well as revoke network access", caption: "The Plugin Manager with a list of Plugins Installed"}],
            [`Help`,
             `Authored topics, F1 context help, and interactive tutorials that point at real widgets`,
             `Help Center; overlay`, {image: "table/12.png", alt: "The Help Center with a list of help topics visible, open to the getting started menu", caption: "The Help Center with a list of help topics visible"}],
          ]},

        // ---- Overview: where to go next ----
        { type: "heading", level: 2, text: `The Rest of the Site` },

        { type: "prose", body: [
          `[Philosophy](why.html) sets out the problems the project is a response to and
           the design principles that follow from them. [Features](features.html) is the
           full feature catalog, grouped by subsystem.
           [Intelligence Layer](intelligence.html) explains how the intelligence
           system extracts entities and builds knowledge graphs. [Extensibility](extending.html)
           covers plugins and packs. [Status](status.html) is the honest account of what is
           finished and what is still in progress.`,
        ]},

      ],
    },

    /* =================================================================
       PAGE: Philosophy  (why.html)
       ================================================================= */

    why: {
      title: `Philosophy and Design Principles`,
      subtitle: `The problems the project responds to, and the rules that follow from them.`,
      sections: [

        { type: "prose", body: [
          `Papyrus began from dissatisfaction with current LLM and research tools.
          Most currently existing LLM tools are designed to replace human input entirely,
          and carry with them a host of ethical concerns relating to privacy, data ownership,
          transparency, and the environment. Papyrus is designed to act fully "human-in-the-loop" every
          step of the way; LLMs can help find and organize information, but will never write for you.
          LLMs are used only for tasks that require them, and deterministic and lighter machine learning
          algorithms are used where possible. All LLM responses are linked to the source material they were generated from, and the user is required to verify
          the output manually, ensuring no hallucinated information slips through. 
          Furthermore, Papyrus is designed to be fully local-first, with no cloud service required for any core feature, 
          allowing data security and alleviating environmental concerns associated with data centers. 
          All system prompts used by various LLM tools are viewable, and editable, ensuring full transparency
          of how the LLM came to its answers.`,
          `Papyrus also aims to be a universal research tool, combining features such as citation management,
          note taking, reading, data analysis, and writing into one application, rather than requiring the user to use multiple tools for different parts of the research process.`,
        ]},

        // ---- Why: the problem ----
        { type: "heading", level: 2, text: `The problem` },

        { type: "heading", level: 3, text: `Chatting with a document is shallow` },
        { type: "prose", body: [
          `In a standard doc-chatting program nothing persists between questions. Nothing is
           cross-referenced across documents. Asking the same question twice re-does the
           same work, at the same cost, with no guarantee of the same answer. After a
           month of use the tool understands the material no better than it did on the first
           day, because it never accumulated anything: there is no store of what was found,
           only a sequence of independent prompts.`,
          `A research tool should get more useful as material accrues in it. That requires
           a persistent knowledge base, and human interaction, not a retrieval trick.`,
        ]},

        { type: "heading", level: 3, text: `Language models are the wrong instrument for most of the work` },
        { type: "prose", body: [
          `Generative models are expensive, slow, non-deterministic and prone to
           hallucinations. Using one for a task that a parser, a named-entity recognizer, a
           regular expression or a graph algorithm already solves is a bad trade on multiple
           levels: cost, latency, reproducibility and correctness.`,
          `Sentence segmentation, citation matching and date normalization are solved
           problems with deterministic solutions. Spending a model call on them buys
           nothing and loses the guarantee that running the same input twice gives the
           same output.`,
        ]},

        { type: "heading", level: 3, text: `Sources aren't properly cited` },
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
           started. This makes it impossible for a researcher to fully trust whatever
           output the tool gives them. All tools in Papyrus are fully transparent by design,
           so a researcher can see exactly what the software did, and change it if they want to.`,
        ]},

        { type: "heading", level: 3, text: `Data lock-in and privacy` },
        { type: "prose", body: [
          `Sending an entire personal or institutional document library to a third-party
           app is not always legally, ethically or practically possible. Licensed
           material, unpublished work, interview transcripts and confidential records all
           carry constraints that a cloud-only design cannot satisfy. Papyrus is the complete opposite;
           a local-only design to ensure your work remains yours.`,
        ]},

        { type: "heading", level: 3, text: `Monolithic tools resist extension` },
        { type: "prose", body: [
          `Different fields require different capabilities. A lawyer may need precedent extraction,
           a historian may need archival collection support, and a scientist may need a particular citation workflow. 
           A tool that cannot be extended to meet these needs is not a universal research tool.`,
        ]},

        // ---- Why: principle 1 ----
        { type: "heading", level: 2, text: `Local-first and private by default` },

        { type: "prose", body: [
          `Every stage of the pipeline runs on the device. Parsing, optical character
           recognition, transcription, embedding, named-entity recognition, sentence
           classification, reranking, summarization and generative inference are all
           local. Local models are served by Ollama or llama.cpp; embeddings are written
           to a local ChromaDB store held beside the project file. No cloud service is
           required for any core feature.`,
          `While choosing this constraint rules out the largest available models and makes the
           application responsible for its own performance, in exchange, a project can
           contain material that could not otherwise be processed at all, results do not
           depend on a remote service continuing to exist, and there is no per-query cost
           to discourage exploratory work.`,
          `The one exception is explicit and narrow: a plugin may request
           network access as a permission separate from being enabled, and the hosts it
           may reach are declared and enforced. A plugin can be switched on and left
           network-blocked. See [Extensibility](extending.html) for details.`,
        ]},

        // ---- Why: principle 2 ----
        { type: "heading", level: 2, text: `Deterministic-first` },

        { type: "prose", body: [
          `Ingestion performs **zero generative model calls**.
           Sentence segmentation, entity extraction, sentence classification, citation
           matching, date normalization, and table extraction, are all performed deterministically or with small
           local encoder models.`,
          `*Deterministic* here means simply that the same input always produces the same
           output -- there is no randomness anywhere in the process. That one property buys
           several things at once. Re-running a stage costs nothing when the source has not
           changed, because the result is guaranteed to be identical. A reference written
           today still points at the same sentence tomorrow. The work is fast enough to do on
           import rather than on demand, which is why a source becomes searchable moments
           after it is added. And it can be audited, in a way a model call cannot: an
           extractor can be pointed at exactly the rule it followed.`,
          `The generative model is then reserved for the work that genuinely needs judgment:
           final synthesis, and a small set of corrections over an already-complete
           deterministic result. When it is called, it is run at a low temperature -- the
           setting that controls how much randomness the model is allowed -- and given a
           compact, deliberately budgeted amount of context, and its answer is cached. The
           [Intelligence Layer](intelligence.html) page describes exactly where the boundary
           sits.`,
        ]},

        { type: "prose", body: [
          `The split is worth setting out in full, because the claim only means something
           if it can be checked. Almost everything below happens once, when a source is
           added, and is then stored and reused. Only the last table needs a language
           model, and only when you ask for it.`,
        ]},

        { type: "table",
          caption: `Tier one -- no model of any kind. Ordinary code, following rules someone wrote.`,
          columns: [`What it produces`, `How it is done`, `When`],
          rows: [
            [`Text and structure`,
             `A parser for each format turns a PDF, Word file, EPUB, web page or plain text into one common stream of blocks`,
             `On import`],
            [`Numbered sentences`,
             `Every block is split into sentences, each keeping its character positions in the original file`,
             `On import`],
            [`A keyword index`,
             `SQLite's built-in full-text index, which is what makes exact names, codes and figures findable`,
             `On import`],
            [`Measurements, methods and glossary terms`,
             `Pattern rules and a per-project glossary, catching what a general-purpose tool will not know about`,
             `On import`],
            [`The same person across documents`,
             `Mentions that reduce to the same standard form are gathered together across every document in the project`,
             `On import`],
            [`One shared timeline`,
             `Dates written six different ways in six different sources are rewritten into a single standard form`,
             `On import`],
            [`Citations, paired up`,
             `Bibliography entries and in-text references are extracted separately, then matched to each other by a dedicated matcher`,
             `On import`],
            [`Tables as real data`,
             `Extracted as rows and columns you can sort, filter and total, rather than as a paragraph of numbers`,
             `On import, or from a page region on demand`],
            [`Summaries`,
             `TextRank, a graph algorithm that keeps the most central sentences of a section, so every sentence in the summary genuinely appears in the source`,
             `Deep processing`],
            [`A first pass at argument structure`,
             `Which sentences support, contradict or expand on which, worked out from linking words and from how close sentences sit in the document`,
             `Deep processing`],
            [`Answers to questions about numbers`,
             `Sums, averages and group-by questions run as real database queries over extracted tables`,
             `Per question`],
            [`The combined search ranking`,
             `Four separate searches merged by counting placements, rather than by comparing scores that are not comparable`,
             `Per question`],
            [`The context budget`,
             `The shortlist packed cheapest-first into the space the model is allowed: bare facts, then summaries, then full sentences`,
             `Per question`],
            [`A source's credibility score`,
             `A checklist of structural signals: the DOI against a bundled retracted-paper database, the journal against an offline list of predatory journals, and whether metadata and a reference list are present at all`,
             `After extraction`],
            [`Formatted references`,
             `APA, MLA and Chicago formatting, and the works-cited list built from them`,
             `On demand`],
          ]},

        { type: "table",
          caption: `Tier two -- small local models. Task-specific, modest in size, and none of them write text.`,
          columns: [`What it produces`, `How it is done`, `When`],
          rows: [
            [`People, organizations and places`,
             `spaCy, an open-source language-processing library, does a general pass and keeps the categories apart`,
             `On import`],
            [`Claim, evidence and reasoning labels`,
             `A small local classifier model, if one is installed. Without it, Papyrus falls back to reading the writer's linking words, which is less accurate but needs no download`,
             `On import`],
            [`Search by meaning`,
             `Sentences and summaries are turned into vectors and written to a local index, which is what finds passages that say the same thing in different words`,
             `On import`],
            [`A closer second look at search results`,
             `An optional reranker model re-orders the top of the combined list. It stays off unless the model is present`,
             `Per question`],
            [`Speech turned into text`,
             `faster-whisper transcribes audio and video offline, with timestamps accurate enough to jump to`,
             `On import`],
            [`Text out of scans and images`,
             `Tesseract reads the words and records where each one sits on the page, giving a scan the same provenance as a digital file`,
             `On import, or on demand`],
            [`Pages read aloud`,
             `A text-to-speech voice, installed separately`,
             `On demand`],
          ]},

        { type: "table",
          caption: `Tier three -- a language model is genuinely called. Only here, and only when asked.`,
          columns: [`What it produces`, `How it is done`, `When`],
          rows: [
            [`An answer in chat`,
             `Work out what to look for, retrieve it, pack it to fit, then ask -- with the instruction to cite the sentence identifiers it was given`,
             `Per question`],
            [`Corrections to an argument map`,
             `A small set of changes to a diagram already built without a model, checked before being accepted, with quotes fetched from the source record rather than taken from the reply`,
             `Per analysis run, cached`],
            [`The write-up of a section in an analysis`,
             `One step of the analysis workflow, over context that was assembled deterministically`,
             `Per analysis run, cached`],
            [`Brainstorming`,
             `Hypotheses, arguments and connections across the corpus, rather than factual question answering`,
             `On demand`],
            [`A model-written summary`,
             `Separate from the TextRank summaries above. Run deliberately, and labeled as model output`,
             `On demand`],
            [`The research agent's next move`,
             `Deciding what to do and which tool to use, one step at a time, with the session recorded`,
             `On demand`],
            [`Workspace tools`,
             `Find Weakpoints, Color Organize by Theme, Generate Outline and Declutter, each working on the nodes you selected`,
             `On demand`],
            [`A drafted workflow`,
             `The builder assistant turns a plain-English description into a blueprint you then edit by hand`,
             `On demand`],
          ]},

        // ---- Why: principle 3 ----
        { type: "heading", level: 2, text: `Nothing unsourced` },

        { type: "prose", body: [
          `Every stored fact is an *artifact*, and every artifact carries a locator: page
           and character offsets for a document, row and column for tabular data,
           timestamp and speaker for audio and video. Alongside the locator it records a
           \`created_by\` field, the name and version of the extractor that produced it, the
           model role and model name where one was involved, and a confidence score.`,
          `Because the locator is part of the record, any
           reference to it can be clicked to navigate there. This is the same mechanism behind
           citation bubbles in chat, result cards in search, nodes in the workspace,
           entries on the timeline and cells in the data dock -- all of them are artifacts
           with locators, so all of them jump.`,
          `The strongest form of this rule appears in document analysis. Quote text shown
           in an argument map is populated from the source artifact and is never
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
           No prompt is hardcoded anywhere in the application.`,
          `Every model call produces a trace record capturing the exact rendered
           prompt as sent, the retrieved context chunks, and the raw response. A trace
           button appears on every AI output, ensuring the user can always review what
           exact prompt was sent to the model for any given query`,
          `Every background job appears in the process monitor with its status and can be
           aborted. Every model assignment, capability filter, context setting and backend
           option is exposed in settings, with available models and blueprints read from
           registries at runtime rather than hardcoded. This way a user who
           wants to know what the software just did can find out completely, from the
           UI, without reading the sourcecode. The specific local model backend used
           as well as the exact weights themselves are also fully up to the user
           ensuring the best model can be used for a given task, and any model
           containing biases can be removed`,
           `To further combat the issue of bias in the internal weights of a model, Papyrus contains
           a built-in Bias Lab, that uses the [Libra Methodology](https://arxiv.org/abs/2502.01679) 
           to test and identify any internal biases a LLM may hold.`
        ]},

        // ---- Why: principle 5 ----
        { type: "heading", level: 2, text: `One knowledge base, one retrieval path` },

        { type: "prose", body: [
          `There is exactly one artifact store and exactly one retrieval backend. Chat,
           brainstorm, the analysis modes, entity discovery, citations, workspace tools
           and plugins all call the same \`retrieve(...)\`. No feature parses, embeds or
           prompts on its own.`,
          `The alternative -- a separate pipeline per feature -- fails in a predictable way. Each
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
          `Every function call the main application uses is exposed to plugins through one
           controlled API facade. Plugins can register blueprints, workflow step types, entity
           types, source formats, viewers, retrieval sources and providers, artifact
           producers, analysis modes and templates, docks, toolbar buttons, context-menu
           actions, shortcuts, themes, AI output widgets, database tables and
           import/export contributors.`,
          `The idea is that anything the main app can do, a plugin
           can do. Three example plugins have been made, one of which -- Zotero integration -- is implemented with no
           reference to Zotero anywhere in the main application. Deleting its directory
           removes the feature with no side effects.`,
          `Plugins can be added, removed, enabled and disabled at runtime.
          They can also be granted or denied permissions, ensuring plugins can only ever
          access what the user wants them to. The [Extensibility](extending.html) page describes the plugin system in detail.`,
        ]},


        // ---- Why: non-goals ----
        { type: "heading", level: 2, text: `Non-goals` },

        { type: "prose", body: [
          `In addition to the above stated goals, there are also several non-goals that guide the design and implementation of Papyrus.`,
        ]},

        { type: "definitions", items: [
          { term: `A cloud service`,
            body: `There is no server component, no account, no synchronization service and
                   no hosted processing. Everything works solely on the users device` },
          { term: `A replacement for a reference manager`,
            body: `Papyrus extracts, matches and formats citations for the material in a
                   project, and integrates with Zotero through a plugin. It is not trying to
                   become the place a researcher's whole library lives.` },
          { term: `A chat wrapper`,
            body: `Conversation is one tool among several, and it is built on the same
                   retrieval and workflow machinery as everything else. A version of Papyrus
                   with the chat tab removed would still do most of what it currently does.` },
          { term: `A general-purpose writing assistant`,
            body: `The writing dock exists to assemble material that is already in the
                   project such as notes, quotes, outlines, works-cited entries. It is not designed
                   to write for you` },
        ]},

      ],
    },

    /* =================================================================
       PAGE: FEATURES  (features.html)
       The longest page. One level-2 heading per subsystem, in the same
       order as the subsystem table on the Overview page.
       ================================================================= */

    features: {
      title: `Feature Catalog`,
      subtitle: `Every capability the application has, grouped by subsystem, with a brief description of how each one works.`,
      sections: [

        { type: "prose", body: [
          `This page is the complete catalog. The [intelligence layer](intelligence.html) and 
          [plugin architecture](extending.html) are further described on their respective pages.`,
        ]},

        /* ---- 1. Projects and sources ---- */
        { type: "heading", level: 2, text: `Projects and sources` },

        { type: "prose", body: [
          `A project is a \`.pdfproj\` file together with two related directories. The
           project database, an SQLite file, holds documents, annotations, notes, tags,
           citations, workspaces, graph nodes and edges, chat history, datasets and every
           intelligence artifact. Beside it sit \`<project>.pdfproj_chroma_db/\`, the local
           vector store, and \`<project>.pdfproj.assets/\`, which holds project-owned copies
           of imported media. Work is saved as it happens.`,
          `Plugins may declare their own project-scoped tables. Those tables are created
           when a project opens and are never dropped when a plugin is unloaded, so
           disabling a plugin cannot destroy data that was collected through it. A
           per-project processing policy controls how deeply each source is processed on import.`,
          `Papyrus is not solely a PDF reader. Every listed format supports
           the same core features: highlighting, notes, analysis, universal search and
           jump-to-source.`,
        ]},

        { type: "table",
          caption: `Document formats.`,
          columns: [`Format`, `Extensions`, `Notes`],
          rows: [
            [`PDF`, `.pdf`, `Full support: page rendering, text layer, highlighting, and OCR for scanned pages`],
            [`Word`, `.docx`, `Headings and tables recognized as document structure`],
            [`Legacy Word`, `.doc`, '--'],
            [`EPUB`, `.epub`, `Chapters and headings recognized`],
            [`Plain text`, `.txt`, `--`],
            [`Markdown`, `.md`, `Hash-prefixed headings recognized as structure`],
            [`HTML`, `.html, .htm`, `Headings and paragraphs recognized`],
            [`Rich text`, `.rtf`, `--`],
          ]},

        { type: "table",
          caption: `Data, media and image formats.`,
          columns: [`Category`, `Extensions`, `Notes`],
          rows: [
            [`Tabular data`, `.csv, .tsv, .xlsx`,
             `Opens as a read-only preview; can be edited in the data dock. For spreadsheets the active sheet is loaded`],
            [`Video`, `.mp4 .mov .mkv .webm .avi .m4v .wmv .flv .mpg .mpeg .3gp .ogv .ts`,
             `Transcribed in the background by an offline speech-to-text engine, producing searchable captions and timestamp-accurate jump-to-source. These transcriptions are embedded for the LLM to search`],
            [`Audio`, `.mp3 .wav .m4a .flac .ogg .aac .wma .opus`,
             `Same transcription path as video. Speaker turns are captured; named-speaker resolution is not yet implemented`],
            [`Images`, `.png .jpg .jpeg .tiff .bmp .webp`,
             `Automatically read with OCR, giving word-level highlighting and jump-to-source equivalent to a scanned PDF page`],
          ]},

        { type: "prose", body: [
          `Once imported, a parser registry converts every source into one normalized
           stream of document blocks, and the artifact service extracts entities from these blocks.
            All tools -- indexing, extraction,
           retrieval, analysis -- sees that one stream and does not know or care which
           format it comes from.`,
        ]},

        { type: "figure",
          image: "formats/1.png",
          alt: `The document explorer listing a project containing several different source formats.`,
          caption: `The document explorer with a mixed-format project.`,
          placeholder: `The source list of a project containing a PDF, a DOCX, an EPUB, a CSV, an MP4 and
                        an image, with format indicators and a right-click context menu open.` },

        /* ---- 2. Reading and annotation ---- */
        { type: "heading", level: 2, text: `Reading and annotation` },

        { type: "prose", body: [
          `The PDF viewer is built on PyMuPDF and renders pages in a lazy manner, so a
           slow page never blocks the interface. It provides zoom in, out and reset, an
           in-document search bar with match navigation, a page indicator, text selection
           and region selection. Tables in a pdf can also be automatically extracted into data dock for user
           viewing and editing, and charts can be extracted and saved as workspace nodes`,
          `Reading mode is a separate way to read documents, which provides a line at a time with 
          a highlighted word, moving at a user-set reading speed, allowing a user to read in a more focused manner.`,
        ]},

        { type: "definitions", items: [
          { term: `Highlighting`,
            body: `Any text, regardless of the format it comes from, can be highlighted in various colors.`, 
            image: "features/highlight.png", alt: "A PDF with multiple different color highlights on it", 
            caption: "Multi-color highlights on a PDF" },
          { term: `Annotation notes`,
            body: `Notes attached to a highlight.` , image: "features/annotations.png", 
            alt: "The Notes Dock Open to several highlights with notes", caption: "Notes dock with several highlights and notes open" },
          { term: `Universal jump-to-source`,
            body: `Clicking any citation bubble, note, search result, data cell or graph node
                   navigates to its exact origin: page and span for documents, timestamp for
                   audio and video, cell for tabular data, word box for text read from an
                   image.` , image: "features/source.mp4", alt:"A video showing the universal jump-to-source feature", 
                   caption: "Jumping to a source directly from the workspace"},
          { term: `Video player`,
            body: `Captions, a transcript panel, timestamp toggling, and a control to save a
                   note at the current timestamp.` , image: "features/video.png", alt: "A video with the transcript panel open", 
                   caption: "Video Player with locally generated transcript open"},
          { term: `Audio player and image viewer`,
            body: `The same annotation and jump-to-source behavior applied to media
                   sources.` },
          { term: `CSV preview viewer`,
            body: `A read-only view of a spreadsheet with a button to edit in Data Dock.` , image: "features/csv.png", alt: "A CSV file open in the CSV previewer", 
            caption: "CSV Previewer with a button to edit in Data Dock"},
          { term: `Document explorer`,
            body: `The project source list, with right-click actions for rename, remove, run
                   OCR, extract pages, evaluate source, and any action a plugin has
                   contributed.`, image: "features/doc.png", alt: "Document Explorer with right-click actions", caption: "Document Explorer with right-click actions" },
        ]},

        { type: "figure",
          image: "features/reading.mp4",
          alt: `A document in reflowable reading mode with the display settings panel open.`,
          caption: `Reflowable reading mode with display settings.`,
          placeholder: `A document in reading mode: reflowed text at a comfortable measure, the
                        page-navigation control visible, and the display-settings panel open showing
                        typography controls.` },

        /* ---- 3. Intelligence layer, summarized ---- */
        { type: "heading", level: 2, text: `The intelligence layer` },

        { type: "prose", body: [
          `The intelligence layer is the backbone of the application. In short: every source
           is read and taken apart on import rather than when a question is asked, and what
           that produces -- sentences, entities, dates, citations, tables, and which sentences
           are claims rather than evidence -- is stored in a database inside the project, with
           every entry remembering the exact place it came from. Almost none of that first
           pass involves a generative model. Every intelligent feature listed on this page
           reads from that one store through one shared search path.`,
          `It is described in full, mechanism by mechanism, on
           [its own page](intelligence.html).`,
        ]},

        { type: "figure",
          image: "features/graph.png",
          alt: `The Intelligence dock open to the graph view of a PDF.`,
          caption: `The Intelligence dock showing the graph view for a PDF.`,
          placeholder: `The Intelligence dock with its view tabs (Overview, Entities, Timeline, Claims &
                        Evidence, Graph, Citations, Artifacts, Runs) and the Entities view showing
                        canonical entities with mention counts and provenance detail for a selected
                        entity.` },

        /* ---- 4. Retrieval and search ---- */
        { type: "heading", level: 2, text: `Retrieval and search` },

        { type: "prose", body: [
          `A project can be searched a document at a time, across every source at once, or by
           meaning rather than by exact words -- so a search for *funding pressure* can return a
           passage that never uses either word. Searching by meaning is what the vector database
           built during import is for; the [Intelligence Layer](intelligence.html#finding-the-right-passage)
           page explains how it works and how it is combined with ordinary keyword search.`,
          `Before asking the AI anything, a context filter dialog lets the user choose exactly
           which documents, tags and sources it is allowed to look at. What comes back from the
           search is then put in order by a lightweight reranker, so that the most relevant
           passages are the ones the model actually receives.`,
        ]},

        { type: "definitions", items: [
          { term: `Local retrieval search`,
            body: `Uses semantic similarity to return citation cards carrying the source document, page, the matched
                   passage and a relevance score. Each card jumps to its span.` },
          { term: `External academic search shortcuts`,
            body: `Query shortcuts for JSTOR, Google Scholar, Reddit, news search and an
                   arbitrary custom URL, returning cards that open in the system browser.
                   This allows users to quickly access external academic resources to find additional sources` , image: "features/search.png", 
                   alt: "The Search Tab's manual search screen", caption: "The Search Tab's manual search screen" },
          { term: `Research Assistant query generator`,
            body: `Takes a stated research goal, formulates several targeted keywords, 
              and returns the results as cards with clickable links to search the keywords on academic sources. An optional mode also
                   scans the citations of retrieved papers to surface related works not yet
                   in the project. This makes finding sources for a given topic much easier, as the LLM can help formulate optimal boolean keyword searches`,
                  image: "features/terms.png", alt:"the search cards resulting from a query to the research assistant", caption: "Search terms with clickable keyword cards generated by the Research Assistant" },
        ]},

      

        /* ---- 5. Document analysis ---- */
        { type: "heading", level: 2, text: `Document analysis` },

        { type: "prose", body: [
          `The Analysis tab runs structured extraction over a document and produces a
           graph. Three templates ship with the application, and custom
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
            [`Relationship / Network Tracker`, `Biography, history, organizational and news analysis`,
             `People, organizations, affiliations, events`, `affiliated_with, opposes, collaborated_with, led_by`],
          ]},

        { type: "prose", body: [
          `Each template declares which node and relation types the model may create, ensuring a structured graph is generated for any template`,
          `The way this feature ensures trustworthy outputs is described in full
           under [grounded graphs](intelligence.html#grounded-graphs).  Results can be added onto the Workspace
           canvas as an editable graph.`,
        ]},

        

        /* ---- 6. The research dock ---- */
        { type: "heading", level: 2, text: `The research dock` },

        { type: "prose", body: [
          `A single dock that holds most AI-powered research tools in six different tabs.`,
        ]},

        { type: "definitions", items: [
          { term: `Chat`,
            body: `A conversational interface where answers stream token by
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
            body: `A brainstorm assistant to help generate hypotheses, arguments and connections between
                   material in the project, as well as help plan next steps in research.` },
          { term: `Custom Tools`,
            body: `A place to run custom user-created AI tools made in the visual workflow builder.` },
          { term: `Blueprint Editor`,
            body: `The visual workflow builder, described below.` },
        ]},

        { type: "figure",
          image: "features/citation.png",
          alt: `The Chat tab with an answer containing inline citation bubbles.`,
          caption: `Chat with inline citation bubbles.`,
          placeholder: `The Chat tab with a multi-turn conversation, an answer containing two or three
                        inline citation bubbles showing document name, page and quote, and the
                        context-filter button visible.` },

        /* ---- 7. The knowledge workspace ---- */
        { type: "heading", level: 2, text: `The knowledge workspace` },

        { type: "prose", body: [
          `The workspace is a visual canvas on which nodes are ideas, claims, entities,
           quotes or findings, and edges are typed relations between nodes. A project can hold several
           named workspaces, to keep related ideas together. Nodes carry a title, a type , a body, tags, and the source document and page
           they came from; double-clicking opens a full node editor. Edges carry a relation
           type -- supports, refutes or contradicts, part_of, derived_from, next_step, and
           any type registered in the ontology.`,
          `Authoring is manual as well as generated. Right-click adds a node, dragging
           from a node's port draws an edge, and edges are edited or deleted from their own
           context menu. The canvas supports zoom, pan, select-all, undo and redo,
           recenter, export, and an automatic decluttering to improve readability. Nodes can be filtered by 
           source or tag for a cleaner view, and node types contain unique properties. A claim node, for example
           , displays the number of supporting and refuting citations connected to it.`,
        ]},

        { type: "figure",
          image: "table/6.png",
          alt: `The workspace canvas populated by a basic diagram.`,
          caption: `The workspace canvas populated by a basic diagram..`,
          placeholder: `The workspace canvas with 20 to 40 color-coded nodes and typed edges, the
                        workspace selector at top, the filter controls visible, and one node selected
                        showing its properties panel.` },

        { type: "prose", body: [
          `Four prebuilt AI tools operate on the canvas, and plugins and user-built blueprints can add more.`,
        ]},

        { type: "definitions", items: [
          { term: `Find Weakpoints`,
            body: `Analyzes the structure of the selected nodes to determine areas of weakness in the research, and suggests additional information to look for.` },
          { term: `Find New Connections`,
            body: `Looks for similarities between existing nodes and proposes typed edges
                   between ones the researcher has not yet connected.` },
          { term: `Generate Outline`,
            body: `Turns a selection of nodes and the edges between them into a hierarchical
                   textual outline to help organize thoughts.` },
          { term: `Fill Graph`,
            body: `Analyzes the selected nodes and searches for possible evidence to fill gaps and strengthen claims.` },
          { term: `Declutter & Simplify`,
            body: `Merges semantically duplicate nodes, removes low-confidence edges,
                   shortens overlong titles, and re-lays out the result.` },
        ]},

        { type: "figure",
          image: "features/declutter.mp4",
          alt: `The Workspace declutter tool working on a graph.`,
          caption: `The Workspace Declutter tool cleaning up clustered nodes`,
          placeholder: `The workspace with the AI tools context menu open (Find Weakpoints, Color
                        Organize by Theme, Generate Outline, Declutter), ideally alongside the
                        weakpoints results dialog.` },

        /* ---- 8. Blueprints and workflows ---- */
        { type: "heading", level: 2, text: `Blueprints and workflows` },

        { type: "prose", body: [
          `Every AI feature in Papyrus, without exception, is a **blueprint** executed by a
           shared runner. Chat is a
           blueprint. Analysis modes are blueprints. Workspace tools are blueprints. A
           workflow a user assembles in the visual editor is the same kind of object as the
           ones that ship with the application, and runs through the same machinery.`,
          `A blueprint is a named list of steps with a description, such as RAG queries,
          LLM queries, python scripts, and document chunking. Each step has unique inputs and outputs, and the runner passes the output of one step to the next. 
          Step properties, such as allowed context for an LLM query, are set in the visual editor.`,
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
            [`Knowledge`, `Artifact write, evidence store, relate, ontology catalog, ontology upsert, graph validator, section subgraph merge, section synthesis and store, quote hydration, build deterministic quotes`],
            [`Analysis`, `Analysis contract, analysis compact, analysis finalize, analysis send to workspace`],
            [`Data`, `Query database, database write, structured query, source statistics, notes read`],
            [`Flow and I/O`, `Foreach, branch, user input, show item selector, await event, dispatch event, python script, select PDF region, workspace write`],
            [`Evaluation`, `Bias evaluation`],
          ]},

        { type: "prose", body: [
          `The Blueprint Editor is a node-graph canvas. Step types are dragged in from a
           categorized sidebar, nodes are connected, and the selected node is edited in an
           inspector. The blueprint's name, description, mount points and active contexts
           are set on the same canvas and saved into the project. The editor supports
           duplicate, delete, zoom to cursor, fit-to-view and several wiring modes. An AI
           builder assistant can draft a blueprint from a plain-English description of a
           workflow, which the user then edits by hand.`,
          `Output is configured by attaching an interface output node that describes a
           format and a target. Targets include a floating overlay, the custom tools tab,
           the chat area, the search tab, the Data Dock's workflow panel and the notes
           dock's workflow panel.`,
        ]},

        { type: "table",
          caption: `Output formats available to a blueprint step.`,
          columns: [`Output format`, `Behavior`],
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
          image: "steps/6.png",
          alt: `The visual blueprint editor with a multi-step workflow on the canvas.`,
          caption: `The visual blueprint editor open to the Chat Agent Blueprint.`,
          placeholder: `The Blueprint Editor tab: the categorized step sidebar on the left, a multi-node
                        workflow on the canvas with connections, and the node inspector open on the
                        right showing model, prompt key, inputs and output key.` },

        /* ---- 9. Prompts, tracing and the process monitor ---- */
        { type: "heading", level: 2, text: `Prompts, tracing and the process monitor` },

        { type: "prose", body: [
          `Every prompt in the system is a named key. Chat and query prompts, system
           prompts, JSON-schema enforcement text, structured-output preambles,
           post-processing instructions, citation and graph-building prompts and synthesis
           prompts are all registered entries in a prompt manager, referenced by key from
           the steps that use them. The
           Prompt Editor exposes every registered prompt for editing, so tone, format,
           schema instructions or behavior can be changed without touching code, and
           plugins can register their own prompts or override an existing one by key.`,
          `Every model call produces a trace record capturing the exact rendered
           prompt as sent, the retrieved context chunks, and the raw response. A trace
           button appears on every AI output. `,
        ]},

        { type: "figure",
          image: "features/trace.png",
          alt: `The prompt trace viewer showing the rendered prompt, retrieved context and raw response for one call.`,
          caption: `The prompt trace for a single AI response in Chat Tab.`,
          placeholder: `The prompt trace viewer showing the exact rendered system prompt, the retrieved
                        context chunks, and the raw model response for one call.` },

        { type: "prose", body: [
          `The process monitor lists every queued and running background job with its
           status and allows any of them to be aborted. Because any operation over roughly
           fifty milliseconds is offloaded to a background worker enqueued in a process
           registry, the monitor is a complete picture of what the application is doing at
           any moment.`,
        ]},

        { type: "figure",
          image: "features/process.png",
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
           and cancel controls.`,
          `The LLM Controls settings tab exposes every model selection, capability filter,
           context setting and backend option the system uses. Available models and
           blueprints are read from registries at runtime and never hardcoded.`,
           `This allows the user to retain full control over what models they run, how they run, and when they're used,
           while the one click installer ensures its easy to get the best models for each task.`
        ]},

        { type: "figure",
          image: "features/settings.png",
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
           citation graph service builds the citation network across the project from the
           result. This allows the user to easily see which citations a source relies on the most, 
           which sources are most cited, and what information is used from a given citation`,
          `The Citation Dock builds citations for sources present in the dock, allowing users 
          to easily manage and format their citations, as well as provide any missing information such
          as publication year.`,
          `The bundled Zotero plugin helps improve the citation dock by allowing the user to import
          citation data for a source from their Zotero library directly, ensuring accurate citations.`,
        ]},

        { type: "figure",
          image: "features/citations.png",
          alt: `An APA-style works-cited list generated from the Citation Dock.`,
          caption: `A works-cited list generated from the Citation Dock.`,
          placeholder: `The Citation Dock listing citation records with a style selector (APA / MLA /
                        Chicago), matching diagnostics, and a generated works-cited list.` },

        /* ---- 12. Source evaluation and bias tooling ---- */
        { type: "heading", level: 2, text: `Source evaluation and bias tooling` },

        { type: "prose", body: [
          `An offline source evaluator scores documents on structural and metadata signals
           through a scoring-metric registry: it checks the DOI against a bundled retracted paper database,
           looks for the presence of metadata, journal name, and references, and checks the journal against an
           offline list of predatory journals. The result is a heuristic evaluation score that can 
           allow the user to quickly recognize low-quality sources`
        ]},

        /* ---- 13. Data dock ---- */
        { type: "heading", level: 2, text: `Data dock` },

        { type: "prose", body: [
          `The Data Dock is the quantitative side of the application: it serves as a mini spreadsheet editor for reading data and building charts`,
        ]},

        { type: "definitions", items: [
          { term: `Loading and promotion`,
            body: `CSV, TSV and XLSX files load as editable datasets, or open as a read-only
                   preview until promoted with a single button.`, image: "features/promote.mp4", alt: "An Open CSV being promoted to an editable dataset",
                  caption: "Opening a CSV file for editing" },
          { term: `Extraction from PDFs`,
            body: `A region of a PDF page can be selected and extracted into structured, editable tabular data`, image: "features/extract.mp4", alt: "A PDF tables being extracted in Data Dock",
                   caption: "Extracting data from a PDF" },
          { term: `Grid editing`,
            body: `Copy, cut, paste, undo, redo, clear, and computed columns such as sum and
                   average.` },
          { term: `Charts`,
            body: `Chart generation directly from the grid.` },
          { term: `Jump to source`,
            body: `Any cell navigates back to the page and region it was extracted from.` },
          { term: `First-class project data`,
            body: `Datasets are visible to retrieval like any other source.` },
          { term: `Extension points`,
            body: `A data provider registry accepts new chart types, grid extractors, table
                   parsers, grid actions and file loaders from plugins.` },
        ]},

        

        /* ---- 14. Tags, notes, dictionary ---- */
        { type: "heading", level: 2, text: `Tags, notes and the dictionary` },

        { type: "definitions", items: [
          { term: `Tags`,
            body: `Can be applied to documents, highlights, notes and workspace nodes, managed in a
                   tag manager, usable as a filter everywhere, allowing similar information to be grouped.` ,
                    image: "features/tag.png", alt: "The Tag Manager Open with several tags", caption: "The tag manager with several tags"},
          { term: `Notes dock`,
            body: `Every note and every discovered entity in one filterable list, with
                   jump-to-source and a workflow panel for running blueprints against the
                   current selection. Entity discovery reads the canonical entity artifacts
                   produced at ingestion rather than re-extracting them.` },
          { term: `Scratchpad`,
            body: `An unstructured jotting surface for material that does not yet belong
                   anywhere.`, image: "features/scratch.png", alt: "The Scratchpad open with filler text", caption: "The Scratchpad for miscellaneous notes" },
          { term: `Dictionary dock`,
            body: `Save, look up and manage word definitions inside the project. Comes bundled with an English Dictionary, but allows
            uploading custom dictionaries, so words in any language or specific to any particular field can be quickly defined while reading a source` , 
            image: "features/dict.mp4", alt: "The Dictionary Dock being used to identify Hawaiian Words from an uploaded dictionary", caption: "The Dictionary Dock using a custom loaded dictionary to identify Hawaiian Words" },
        ]},

        /* ---- 15. Utility tools ---- */
        { type: "heading", level: 2, text: `Utility tools` },

        { type: "definitions", items: [
          { term: `OCR dock`,
            body: `Runs optical character recognition over scanned pages or whole documents
                   to make them searchable and analyzable.` },
          { term: `Text-to-speech dock`,
            body: `Converts selected pages to audio, with voice and speed selection and
                   installable voices.` },
          { term: `Slideshow maker`,
            body: `Assembles project material into a slide deck.` },
          { term: `Essay writer dock`,
            body: `A long-form writing surface inside the project, next to the material it
                   draws on.` },
          { term: `Keybinding registry`,
            body: `A single place to manage keyboard shortcuts, fully remappable in
                   settings, with plugin shortcuts held in their own scope. Covers
                   global, PDF viewer, video player, workspace, data dock, intelligence,
                   research, notes, citations, writing, dictionary, OCR and
                   text-to-speech.`, image: "features/shortcuts.png", alt: "The Keybinding Registry showing available shortcuts", caption: "The Keybinding Registry for managing keyboard shortcuts" },
          { term: `Theme manager`,
            body: `Themes with full create, read, update and delete support,
                   propagated to plugin widgets as well as core interface elements. Plugins
                   can contribute themes.` , image: "features/theme.png", alt: "Editing a custom theme", caption: "The Theme Manager editing a custom theme" },
          { term: `Dock and layout managers`,
            body: `Dockable panels with saved layouts and persistent splitters.` },
        ]},

        /* ---- 16. Help and tutorials ---- */
        { type: "heading", level: 2, text: `Help and tutorials` },

        { type: "prose", body: [
          `A help registry holds authored topics across Getting Started,
           Reading & Annotation, Chat & AI Research, Document Analysis, Workspace,
           Workflows & Blueprints, Organization, AI & Prompts, Tools, Data Dock and Help
           itself. The Help Center dialog browses them and searches their full text.`,
          `Shift+F1 enters a "what's
           this" mode in which clicking any element jumps straight to its help topic.`,
          `Interactive tutorials overlay the real
           interface, highlights real targets, advances on genuine user actions or a next
           button, and records progress. Every non-trivial control is expected to have a
           help topic, and plugins register their own topics and tutorials in their own
           namespace. Tutorials and a detailed help menu ensure the app remains easy to use`,
        ]},

        { type: "figure",
          image: "features/tutorial.png",
          alt: `The Help Center dialog, or the tutorial overlay highlighting a real interface element.`,
          caption: `An interactive tutorial`,
          placeholder: `The Help Center dialog with the topic list and a topic rendered, or the tutorial
                        overlay highlighting a real UI element with its instruction bubble.` },

      ],
    },

    /* =================================================================
       PAGE: HOW IT WORKS  (how-it-works.html)
       ================================================================= */

    /*"how-it-works": {
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
           application state, changing the model assigned to a role changes the behavior of
           every blueprint that depends on that role without any blueprint being edited.
           The full catalog of step types and output formats is on the
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
*/
    /* =================================================================
       PAGE: INTELLIGENCE LAYER  (intelligence.html)
       ================================================================= */

    intelligence: {
      title: `The Intelligence Layer`,
      subtitle: `How Papyrus reads a source, what it remembers, how it finds things again, and where the language model actually gets used.`,
      sections: [

        { type: "prose", body: [
          `Most AI research tools do their thinking at the moment you ask a question. They
           chop your documents into chunks of text, find the chunks that look closest to
           what you asked, and hand those to a language model. Nothing is kept between
           questions, so the tool never gets to know your material.`,

          `Papyrus works the other way round. The moment a source is added it is read and
           taken apart: sentences, people, organizations, places, dates, citations, tables,
           and which sentences are making a claim rather than backing one up. All of that
           goes into a small database stored inside the project, and every entry in it
           remembers the exact spot in the exact document it came from. That database, not
           the raw text, is what every intelligent feature in the application reads from
           afterwards.`,

          `Two things follow. The first is that the hard work happens once, on import, so
           asking a question later costs a search rather than a fresh reading of everything.
           The second matters more: almost none of that first pass uses a language model, so
           almost none of it can be invented. The model is brought in afterwards, for the
           few jobs that genuinely need judgment.`,
        ]},

        // ---- Ingestion ----
        { type: "heading", level: 2, text: `What happens when a source is added` },

        { type: "prose", body: [
          `Adding a source starts a queue of small jobs that run in the background, in order,
           because each one needs the one before it. You can watch them go past in the
           process monitor, and stop any of them. The whole sequence is listed below in the
           order it runs.`,
        ]},

        { type: "table",
          caption: `The stages of import, in order. The names in the left column are the ones that appear in the process monitor and in the diagram below.`,
          columns: [`Stage`, `What it actually does`],
          rows: [
            [`SOURCE_REGISTERED`, `The file is copied into the project and given an identifier.`],
            [`PARSED_BLOCKS`, `The file -- whatever its format -- is converted into one plain stream of text blocks, so nothing downstream has to care whether it started as a PDF, an EPUB or a video transcript.`],
            [`SECTIONS`, `Headings and chapters are recognized, and each block is split into numbered sentences.`],
            [`FULL_TEXT_INDEX`, `The text is added to a keyword index, which is the point at which the source becomes searchable.`],
            [`ENTITIES`, `People, organizations, places and domain terms are pulled out and matched up with the same names in other documents.`],
            [`DATES`, `Dates are found and rewritten into one standard form so they can share a timeline.`],
            [`CITATIONS`, `The bibliography and the in-text references are read separately, then matched to each other.`],
            [`TABLES`, `Tables are lifted out as real rows and columns rather than as text that happens to look like a table.`],
            [`CLAIMS`, `Each sentence is labeled as a claim, as evidence, or as reasoning.`],
            [`EMBEDDINGS`, `Sentences and summaries are turned into vectors, which is what makes search-by-meaning possible.`],
            [`Deep mode only`, `Extractive summaries, a first pass at which sentences support or contradict which, and figure handling.`],
          ]},

        { type: "diagram", id: "ingestion-pipeline",
          caption: `The stages of import. Nothing in this sequence calls a generative model.` },

        { type: "prose", body: [
          `Two properties of this sequence are worth pulling out, because a lot of the rest
           of the design depends on them.`,

          `**It does not repeat work.** Before a stage runs, Papyrus takes a fingerprint of
           the source's contents and of the settings involved, and compares it to the
           fingerprint from last time. If nothing has changed, the stage is skipped. Editing
           one document does not re-process the other forty, and re-running import on a
           project is close to free.`,

          `**No generative model is called anywhere in it.** This is the single most
           important fact about the intelligence layer. Everything described above is done by
           parsers, pattern rules, and small purpose-built models that give the same answer
           every time. So the contents of the store are fast to produce, cheap to redo,
           stable enough to link to, and -- unlike anything a language model writes -- not a
           guess.`,
        ]},

        { type: "prose", body: [
          `How much of the sequence runs is a per-project setting, since a scanned
           three-hundred-page archive and a six-page paper do not need the same treatment.`,
        ]},

        { type: "table",
          caption: `The four processing modes.`,
          columns: [`Mode`, `What runs`],
          rows: [
            [`Minimal`, `Parse, split into sentences, index. The quickest route to a source you can search and read.`],
            [`Balanced`, `Adds entities, dates, citations, tables, sentence labeling and embeddings. This is the default.`],
            [`Deep`, `Adds summaries, a first pass at argument structure, and figure handling.`],
            [`Manual`, `Nothing happens automatically; each stage is run by hand when wanted.`],
          ]},

        // ---- Extractors ----
        { type: "heading", level: 2, text: `What the first pass extracts, and how` },

        { type: "prose", body: [
          `Each item below is a separate, replaceable component, and a plugin can add its own
           alongside them. None of them is a language model.`,
        ]},

        { type: "definitions", items: [
          { term: `Splitting into sentences`,
            body: `Every block is split into numbered sentences, each with its character
                   positions in the original file. The sentence is the unit the rest of the
                   system points at: a citation bubble in chat, a node in a graph and a
                   search result are all, underneath, references to a particular sentence in
                   a particular document.` },
          { term: `Finding names and terms`,
            body: `Three layers stacked on top of each other. First **spaCy**, an
                   open-source language-processing library, does a general pass for people,
                   organizations, places and similar. It keeps those categories apart, so a
                   person called Ford and the Ford Motor Company are never merged into one
                   thing. Second, pattern rules and a per-project glossary catch what a
                   general-purpose tool will not know about -- measurements, method names,
                   dataset names, and any terms you have told the project to watch for.
                   Third, mentions that reduce to the same standard form are gathered
                   together across every document in the project, which is what lets the
                   application tell you that the same person appears in nine sources.` },
          { term: `Labeling sentences`,
            body: `Every sentence is tagged as a claim, as evidence or as reasoning, with a
                   confidence score and extra labels for definitions, methodology and quotes.
                   If you have installed the small local classifier model this is done by
                   that; if not, it falls back to reading the signal words a writer uses --
                   *therefore*, *because*, *we found that* -- which is less accurate but
                   costs nothing and needs no download.` },
          { term: `Summarizing`,
            body: `Summaries are made with **TextRank**, a graph algorithm that ranks the
                   sentences of a section by how central they are to it and keeps the best
                   few. The result is built out of sentences that genuinely appear in the
                   source. A model-written summary is also available, but it is a separate
                   thing you run deliberately, and it is labeled as model output.` },
          { term: `Connecting arguments`,
            body: `A first pass at which sentences support, contradict or expand on which,
                   worked out from linking words and from how near the sentences are to each
                   other in the document. It is rough, but it is a real starting structure
                   produced with no model involved.` },
          { term: `Citations`,
            body: `Bibliography entries and in-text references are extracted separately and
                   then paired up by a dedicated matcher, which is what allows a reference in
                   the body to resolve to a full entry.` },
          { term: `Dates`,
            body: `Found and rewritten into a single standard form, so dates written six
                   different ways in six different sources can share one timeline.` },
          { term: `Tables`,
            body: `Extracted as actual data you can sort, filter and total, rather than as a
                   picture of a table or a paragraph of numbers.` },
          { term: `Answering questions about numbers`,
            body: `Sums, averages and group-by questions over extracted tables are run as
                   real database queries. This is why the language model is never asked to do
                   arithmetic -- something it is famously unreliable at.` },
        ]},

        { type: "diagram", id: "scalpel",
          caption: `The split. Everything on the left is produced on import without a model; the model is only ever asked for what is on the right.` },

        // ---- Artifact store ----
        { type: "heading", level: 2, text: `Where it all gets stored` },

        { type: "prose", body: [
          `Everything the stages above produce is written into one SQLite database that
           lives beside the project file, as a long list of records. Papyrus calls each
           record an **artifact**, and the same shape of record is used for a sentence, an
           extracted person, a citation, a date, a table row, a transcript segment, a
           summary and a highlight alike.`,
          `Each record carries the same set of fields, and it is that consistency which
           makes the rest of the application possible:`,
        ]},

        { type: "list", ordered: false, items: [
          `**The text itself**, both exactly as it appears and in a tidied-up form used for
           matching.`,
          `**Where it came from** -- document, page and character positions for text, row and
           column for a spreadsheet, timestamp and speaker for audio and video. This is what
           every jump-to-source click in the application follows.`,
          `**Who produced it** -- which extractor, which version of it, and, if a model was
           involved anywhere, which model and in what role. This is how the interface knows
           to mark model-generated material as needing your review.`,
          `**A confidence score**, and a status showing whether you have checked it or
           corrected it.`,
        ]},

        { type: "prose", body: [
          `A second table records the links between artifacts: this sentence is inside that
           section, this mention refers to that person, this piece of evidence supports that
           claim, this document cites that one. Links carry their own confidence and their
           own record of where they came from, exactly as the artifacts do.`,

          `Two indexes sit alongside the database and are kept in step with it. One is a
           keyword index for exact-word searching. The other is a **ChromaDB** vector store,
           which holds the numerical representations that make search-by-meaning work. Both
           are keyed to the same record identifiers as the database, so a hit in one can be
           lined up against a hit in the other rather than competing with it.`,

          `Those identifiers are worked out from the source and the position rather than
           being handed out in sequence, which means re-processing a document produces the
           same identifiers as before. That is the unglamorous reason a citation you saved
           into a note last month still lands on the right sentence after the document has
           been re-imported.`,

          `The rest of the store is caches: what has already been processed and at which
           settings, previous analysis results, and previous retrieval results. They exist so
           that nothing is computed twice.`,
        ]},

        { type: "figure",
          image: "intelligence-artifact-browser.png",
          alt: `The raw Artifacts view with one artifact selected, showing its full provenance record.`,
          caption: `A single record with everything it knows about its own origin.`,
          placeholder: `The raw Artifacts view with one artifact selected, showing its type, exact text,
                        locator (page and offsets), extractor name and version, created_by, confidence
                        and model role.` },

        // ---- Retrieval ----
        { type: "heading", level: 2, text: `Finding the right passage` },

        { type: "prose", body: [
          `When you ask a question, something has to decide which parts of which documents
           the model is allowed to see. Every feature that needs this -- chat, search,
           analysis, the workspace tools, plugins -- calls the same piece of code, so an
           improvement to it improves all of them at once. It works in four steps.`,
        ]},

        { type: "steps", items: [
          { title: `Read the question`,
            body: `The question is inspected without a model: what kind of question is it,
                   and which names or terms does it mention? A question that is really
                   arithmetic -- how many, what is the average -- is sent to the table
                   queries instead of to text search, because that is a job for a database,
                   not a language model.` },
          { title: `Search four ways at once`,
            body: `**By meaning**, using the vector index, which finds passages that say the
                   same thing in different words. **By keyword**, which finds the exact terms
                   and is better than any model at names, codes and figures. **By entity**,
                   which recognizes a name in your question, looks up that person or
                   organization and pulls in everywhere they appear across the project. And
                   **by type**, which can insist on, say, evidence sentences rather than
                   claims.` },
          { title: `Combine the four lists`,
            body: `The four searches return four lists ranked in four incompatible ways, so
                   rather than try to compare their scores, Papyrus counts placements: a
                   passage that three searches ranked highly beats one that a single search
                   loved. If you have installed the optional reranker model, it takes a
                   closer second look at the top of the combined list and re-orders it.` },
          { title: `Fill the budget`,
            body: `There is only so much text a model can be given, so the shortlist is
                   packed into that space cheapest-first: bare facts, then document
                   summaries, then section summaries, then the full text of individual
                   sentences. Everything that goes in keeps its document and sentence
                   identifiers attached, which is what allows the answer that comes back to
                   be turned into clickable citations.` },
        ]},

        { type: "diagram", id: "retrieval-stages",
          caption: `The four steps. Combining on a shared record identifier is what lets the four searches reinforce one another instead of competing.` },

        { type: "prose", body: [
          `The result is cached, so asking the same question twice in an unchanged project
           does not redo the work. Before asking anything you can narrow what is searched --
           to particular documents, or tags, or sources a plugin has contributed -- from the
           context filter. Plugins can add search sources of their own, or replace the whole
           retrieval step, and can put their own on/off switch in the AI settings.`,
        ]},

        { type: "figure",
          image: "intelligence-retrieval-diagram.png",
          alt: `The retrieval context viewer showing what was retrieved and how it was assembled.`,
          caption: `The four steps as the application reports them.`,
          placeholder: `An authored figure or a screenshot of the retrieval-context viewer: plan -> four
                        parallel signals (vector, keyword, entity-anchored, structured) -> RRF fusion and
                        reranking -> tiered packed context under a token budget.` },

        // ---- Grounded graphs ----
        { type: "heading", level: 2, text: `Grounded graphs` },

        { type: "prose", body: [
          `Running an analysis on a document produces a diagram rather than an essay: claims,
           the evidence for them, and the reasoning joining the two. This is the one place
           where a language model contributes to something you are then meant to trust, so
           the rules around it are the strictest in the application. They are worth stating
           one at a time.`,
        ]},

        { type: "list", ordered: true, items: [
          `**A complete diagram is built first, with no model at all.** The sentence labels
           and argument links from import are enough to assemble a real, usable argument map
           on their own. If you stopped here you would still have something.`,

          `**The model is only asked for corrections to that diagram**, never for the diagram
           itself. It returns a small set of changes. Anything it does not mention is left
           exactly as extracted.`,

          `**Quotes are never taken from the model's reply.** When the model says a piece of
           evidence belongs to a claim, Papyrus goes and fetches the sentence text from the
           source record itself. A made-up quotation is not unlikely here; it is impossible,
           because there is no path by which model-written text can end up in a quote.`,

          `**The corrections are checked before they are accepted.** A reply that is too
           thin, refers to things that are not in the document, leaves parts of the diagram
           disconnected or is full of placeholder text is rejected. Papyrus tries once more
           with a targeted request, and if that fails too it gives you the model-free version
           rather than a damaged one.`,

          `**A thin source produces a thin diagram.** If a document is short or has little
           evidence in it, the result is labeled limited coverage and left small. It is
           never padded out with plausible-looking nodes to make it look better.`,
        ]},

        { type: "prose", body: [
          `Three detail levels -- Focused, Standard and Exhaustive -- set how much to aim
           for; Standard targets roughly twenty to forty claim and reasoning nodes plus their
           supporting quotes, where the source has the material to support that many. When a
           run finishes, the result card reports what was found, how much of the document was
           covered, whether the checks passed, whether the answer came from the cache -- and
           the number of model calls that were made, which is the figure that tells you how
           much of what you are looking at was generated rather than extracted.`,
          `Results are cached, and only the affected ones are thrown away when something
           changes: editing the document, an annotation, a prompt, the model or the detail
           level invalidates that result and leaves the rest alone.`,
        ]},

        { type: "figure",
          image: "intelligence-graph-view.png",
          alt: `The Graph view showing claim, evidence and reasoning nodes connected by typed edges.`,
          caption: `The argument graph for one paper.`,
          placeholder: `The Graph view of the Intelligence dock showing claim, evidence and reasoning nodes
                        connected by supports / attacks / elaborates edges, with a node selected showing
                        its exact quote and locator.` },

        // ---- Analysis modes ----
        { type: "heading", level: 2, text: `Analysis modes` },

        { type: "prose", body: [
          `Every analysis mode -- answering a question, tracking a claim, pulling out a
           structured summary -- is built from the same four moves in the same order: work
           out what to look for, retrieve it, pack it to fit, then ask the model, requiring it
           to cite the sentence identifiers it used. None of them is a bespoke piece of code
           with its own private pipeline, which is why they all behave consistently and why a
           plugin can register a mode that works exactly like a built-in one.`,
          `Any analysis result can be pushed onto the Workspace canvas as a graph you can
           edit, where the workspace tools -- finding weak points, grouping by theme, building
           an outline -- can be run over it.`,
        ]},

        // ---- Model roles ----
        { type: "heading", level: 2, text: `Which model does what` },

        { type: "prose", body: [
          `There is no single setting called "the model". Instead there are roles -- main
           answer, fast worker, embedding, reranking, vision, transcription, and repairing
           malformed output -- and you assign a model to each, with recommendations for
           different classes of hardware. Features ask for a role rather than for a named
           model, so pointing a role at something better upgrades every feature that uses it
           at once.`,
          `The small supporting models -- the spaCy language model, the reranker, the
           sentence classifier and the date parser -- install from a setup screen in one
           click. The download is verified, tested by actually running it once, and only then
           switched on, without restarting the application; each one can also be repaired,
           imported from a file, or removed. These deliberately run through ONNX Runtime
           rather than PyTorch, which keeps the install small and makes them run acceptably
           on a machine with no graphics card.`,
        ]},

        // ---- Intelligence dock ----
        { type: "heading", level: 2, text: `Seeing it: the Intelligence dock` },

        { type: "prose", body: [
          `An extraction pipeline you cannot look inside is just a black box with extra
           steps. The Intelligence dock is where the store is made browsable, with views for
           the overview, entities, the timeline, claims and evidence, the graph, citations,
           the raw records, and the history of every processing run.`,
          `Every entry shows where it came from -- source, page, which extractor, which model
           if any, and how confident it was -- and can be jumped to, confirmed, edited or
           deleted. A correction you make is stored as a high-confidence fact and is
           preferred from then on over the machine's version, everywhere in the application.
           Fixing something the extractor got wrong is therefore a permanent repair to the
           project rather than a note to yourself.`,
        ]},

        { type: "figure",
          image: "intelligence-timeline.png",
          alt: `The Timeline view showing normalized date mentions from several documents on a shared timeline.`,
          caption: `Dates from several documents on one timeline.`,
          placeholder: `The Timeline view showing date mentions from several documents placed on a shared
                        timeline, with a selected entry showing its source and span.` },

        // ---- Honest state ----
        { type: "heading", level: 2, text: `What is working, what is partial, what is missing` },

        { type: "prose", body: [
          `The intelligence layer is the most finished part of the application, but it is not
           finished. The [Status](status.html) page has the full account; the parts relevant
           to this page are below.`,
        ]},

        { type: "callout", tone: "status", title: `Working`, body: [
          `The whole import sequence, with its caching and its record of where everything came
           from. Recognizing the same person or organization across documents without
           confusing categories. The four-way search, the combining step and the packing step.
           Analysis modes that cite the sentences they used. Records that keep their history,
           can be reviewed and corrected, and can be re-processed in the background without
           losing anything. And the Intelligence dock itself.`,
        ]},

        { type: "callout", tone: "caution", title: `Partial`, body: [
          `Search-by-meaning works at the level of sentences, summaries and blocks; individual
           paragraphs are not indexed separately. The sentence classifier is a model you have
           to supply yourself, so the signal-word fallback is what runs by default, and the
           reranker installs but stays switched off unless its model is present. Analysis
           results currently appear in the chat panel rather than in the Analysis tab where
           they belong. The links found without a model are saved to the main store, but the
           ones the model proposes still end up only in the workspace, so the two live in
           different places. And evidence is still passed around as full quoted text where
           passing sentence identifiers would be considerably cheaper.`,
        ]},

        { type: "callout", tone: "note", title: `Not yet built`, body: [
          `The views that would draw on the whole project at once -- one timeline across every
           source, a browsable graph of entities with a page per person or organization, a map
           of where sources contradict each other, a citation graph, and side-by-side
           comparison of the same claim across documents -- do not exist yet. The data behind
           them does; the screens do not. Search that learns from which results you actually
           keep and cite is also unbuilt, as is moving the last few model features across onto
           the artifact store so that everything genuinely runs off one backbone.`,
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
          image: "table/11.png",
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
           posture is described here in full rather than summarized.`,
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
           organization are never conflated.`,
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
          `**Speaker diarization** for audio and video.`,
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
            [`Document parsing`, `python-docx, ebooklib, striprtf, lxml, BeautifulSoup`, `One parser per format, all normalized into the same block stream`],
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
