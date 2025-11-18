var Dr = Object.defineProperty;
var bn = Object.getOwnPropertyDescriptor;
var xn = Object.getOwnPropertyNames;
var Sn = Object.prototype.hasOwnProperty;
var tr = (Ae, Y) => () => (Ae && (Y = Ae((Ae = 0))), Y);
var er = (Ae, Y, ft, N) => {
    if ((Y && typeof Y == "object") || typeof Y == "function")
      for (let A of xn(Y))
        !Sn.call(Ae, A) &&
          A !== ft &&
          Dr(Ae, A, {
            get: () => Y[A],
            enumerable: !(N = bn(Y, A)) || N.enumerable,
          });
    return Ae;
  },
  tt = (Ae, Y, ft) => (er(Ae, Y, "default"), ft && er(ft, Y, "default"));
var rr = (Ae) => er(Dr({}, "__esModule", { value: !0 }), Ae);
var St = {};
import * as Pn from "node:buffer";
var qr = tr(() => {
  tt(St, Pn);
});
var Ct = {};
import * as Rn from "node:async_hooks";
var jr = tr(() => {
  tt(Ct, Rn);
});
var Et = {};
import * as On from "async_hooks";
var Gr = tr(() => {
  tt(Et, On);
});
var nr = globalThis.__nextOnPagesRoutesIsolation.getProxyFor("/middleware"),
  Tn = ((Ae, Y, ft) => (
    (Y._ENTRIES = {}),
    (() => {
      "use strict";
      var N = {},
        A = {};
      function b(S) {
        var P = A[S];
        if (P !== void 0) return P.exports;
        var x = (A[S] = { exports: {} }),
          y = !0;
        try {
          N[S](x, x.exports, b), (y = !1);
        } finally {
          y && delete A[S];
        }
        return x.exports;
      }
      (b.m = N),
        (b.amdO = {}),
        (() => {
          var S = [];
          b.O = (P, x, y, h) => {
            if (x) {
              h = h || 0;
              for (var e = S.length; e > 0 && S[e - 1][2] > h; e--)
                S[e] = S[e - 1];
              S[e] = [x, y, h];
              return;
            }
            for (var i = 1 / 0, e = 0; e < S.length; e++) {
              for (var [x, y, h] = S[e], _ = !0, m = 0; m < x.length; m++)
                (!1 & h || i >= h) &&
                Object.keys(b.O).every((p) => b.O[p](x[m]))
                  ? x.splice(m--, 1)
                  : ((_ = !1), h < i && (i = h));
              if (_) {
                S.splice(e--, 1);
                var d = y();
                d !== void 0 && (P = d);
              }
            }
            return P;
          };
        })(),
        (b.n = (S) => {
          var P = S && S.__esModule ? () => S.default : () => S;
          return b.d(P, { a: P }), P;
        }),
        (() => {
          var S,
            P = Object.getPrototypeOf
              ? (x) => Object.getPrototypeOf(x)
              : (x) => x.__proto__;
          b.t = function (x, y) {
            if (
              (1 & y && (x = this(x)),
              8 & y ||
                (typeof x == "object" &&
                  x &&
                  ((4 & y && x.__esModule) ||
                    (16 & y && typeof x.then == "function"))))
            )
              return x;
            var h = Object.create(null);
            b.r(h);
            var e = {};
            S = S || [null, P({}), P([]), P(P)];
            for (
              var i = 2 & y && x;
              typeof i == "object" && !~S.indexOf(i);
              i = P(i)
            )
              Object.getOwnPropertyNames(i).forEach((_) => (e[_] = () => x[_]));
            return (e.default = () => x), b.d(h, e), h;
          };
        })(),
        (b.d = (S, P) => {
          for (var x in P)
            b.o(P, x) &&
              !b.o(S, x) &&
              Object.defineProperty(S, x, { enumerable: !0, get: P[x] });
        }),
        (b.e = () => Promise.resolve()),
        (b.g = (function () {
          if (typeof Y == "object") return Y;
          try {
            return this || Function("return this")();
          } catch {
            if (typeof window == "object") return window;
          }
        })()),
        (b.o = (S, P) => Object.prototype.hasOwnProperty.call(S, P)),
        (b.r = (S) => {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(S, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(S, "__esModule", { value: !0 });
        }),
        (() => {
          var S = { 149: 0 };
          b.O.j = (y) => S[y] === 0;
          var P = (y, h) => {
              var e,
                i,
                [_, m, d] = h,
                r = 0;
              if (_.some((c) => S[c] !== 0)) {
                for (e in m) b.o(m, e) && (b.m[e] = m[e]);
                if (d) var o = d(b);
              }
              for (y && y(h); r < _.length; r++)
                (i = _[r]), b.o(S, i) && S[i] && S[i][0](), (S[i] = 0);
              return b.O(o);
            },
            x = (Ae.webpackChunk_N_E = Ae.webpackChunk_N_E || []);
          x.forEach(P.bind(null, 0)), (x.push = P.bind(null, x.push.bind(x)));
        })();
    })(),
    (Ae.webpackChunk_N_E = Ae.webpackChunk_N_E || []).push([
      [751],
      {
        20: (N) => {
          "use strict";
          N.exports = JSON.parse(
            `{"hero":{"title":"Eden Proejct","subtitle":"Your AI Companion That Eliminates Loneliness","tagline":"Friend-Like Support \u2022 Enhanced Productivity \u2022 100% Private","privacyBadge":"100% Private - Zero Data Leaves Your Machine","noCompromise":"No Cloud \u2022 No Subscriptions \u2022 No Compromises","downloadButton":"Download for Free","githubButton":"Star on GitHub"},"pillars":{"title":"Built on Three Core Pillars","loneliness":{"title":"Eliminate Loneliness","description":"Genuine companionship for solo developers and remote workers. Eden stays by your side, understanding your context and providing emotional support throughout your day."},"support":{"title":"Friend-Like Support","description":"More than an assistant - a friend who celebrates your wins, offers comfort during frustrations, and provides advice without being preachy. Emotional intelligence built-in."},"productivity":{"title":"Enhanced Productivity","description":"Deep workflow integration with files, Git, screen context, and calendar. Seamless assistance that enhances your productivity without disrupting your flow."},"jarvisNote":"Inspired by JARVIS from Iron Man","jarvisDescription":"An AI that truly understands and supports you"},"problemSolution":{"title":"Why Eden Proejct?","problems":{"title":"Problems with Cloud AI","noEmotional":"No Emotional Support:","noEmotionalDesc":"Generic responses without understanding","privacy":"Privacy Concerns:","privacyDesc":"Your data sent to cloud servers","expensive":"Expensive Subscriptions:","expensiveDesc":"$20-40/month forever","internet":"Internet Dependency:","internetDesc":"Can't work offline","generic":"Generic Responses:","genericDesc":"Doesn't learn your style","limited":"Limited Integration:","limitedDesc":"Disconnected from your workflow"},"solutions":{"title":"Eden V3 Solutions","emotional":"Emotional Intelligence:","emotionalDesc":"Genuine companionship and support","privacy":"100% Privacy:","privacyDesc":"All processing on your machine","free":"Free Forever:","freeDesc":"Zero cost, MIT License","offline":"Works Offline:","offlineDesc":"No internet required after setup","learns":"Learns Your Style:","learnsDesc":"20-30 customizable parameters","integration":"Deep Integration:","integrationDesc":"Files, Git, screen, calendar"}},"stats":{"title":"By the Numbers","privacy":"Privacy Guaranteed","cost":"Forever Free","response":"Response Time","models":"AI Models Locally","parameters":"Persona Parameters","complete":"Complete"},"dualMode":{"title":"Dual Mode Intelligence","mode1":{"title":"Mode 1: User-Led","subtitle":"You're in control","feature1":"Ask questions and get instant answers","feature2":"Request specific tasks and actions","feature3":"Traditional AI assistant experience","feature4":"Reactive to your explicit commands"},"mode2":{"title":"Mode 2: AI-Led","subtitle":"Proactive assistance","feature1":"Proactively offers help when needed","feature2":"Detects issues and suggests solutions","feature3":"Context-aware interruptions","feature4":"Coming in v2.0 (Future roadmap)"},"bestOfBoth":"Best of Both Worlds:","bestOfBothDesc":"Switch seamlessly between reactive assistance and proactive support"},"designPhilosophy":{"title":"Design Philosophy: \\"Screen is Reality\\"","subtitle":"\uD654\uBA74\uC774 \uACE7 \uD604\uC2E4 (Screen is Reality)","description":"Eden understands your context by analyzing what's on your screen - the ultimate source of truth for your current work","level1":{"title":"Level 1: Current","time":"second","description":"Active window only. Quick understanding of your immediate task. Perfect for instant help."},"level2":{"title":"Level 2: Recent","time":"seconds","description":"Last 10 minutes of work. Understands your workflow and recent changes. Context-aware assistance."},"level3":{"title":"Level 3: Full Project","time":"seconds","description":"Entire project context. Deep understanding of your codebase structure and architecture."},"privacyTitle":"Privacy-First Screen Analysis:","privacyFeature1":"All processing happens locally","privacyFeature2":"No screenshots sent to cloud","privacyFeature3":"Blur sensitive areas option","privacyFeature4":"Disable tracking anytime","privacyFeature5":"Review captures before use","privacyFeature6":"Auto-delete old captures"},"features":{"title":"Powerful Features","privacy":{"title":"Privacy You Can Trust","item1":"All 12GB AI models run locally","item2":"AES-256 encrypted database","item3":"Zero telemetry, zero tracking","item4":"Works completely offline","item5":"Open-source (MIT License)"},"aiModels":{"title":"Powerful Local AI","item1":"Llama 3.1 8B (4.92GB)","item2":"Whisper Large V3 (3.09GB)","item3":"LLaVA 7B (4.37GB)","item4":"Q4_K_M quantization (<5% loss)","item5":"HumanEval: 80.5% accuracy"},"persona":{"title":"Adaptive Personality","item1":"20-30 customizable parameters","item2":"6 pre-built personas","item3":"Gradient descent learning","item4":"RAG memory system","item5":"Thumbs up/down feedback"},"emotional":{"title":"Emotional Intelligence","item1":"Genuine companionship","item2":"Context-aware empathy","item3":"Celebrates your successes","item4":"Comfort during frustrations","item5":"Friend-like interaction"},"integration":{"title":"Deep System Integration","item1":"File system read/write","item2":"Git operations (commit, push)","item3":"Workspace detection","item4":"Calendar integration","item5":"Webhook support"},"interface":{"title":"Beautiful Interface","item1":"KakaoTalk-style chat design","item2":"Streaming token display","item3":"Dark mode support","item4":"Korean + English (i18next)","item5":"Cultural localization"}},"personas":{"title":"6 Pre-Built Personas","subtitle":"Choose a personality that fits your style, or create your own custom persona","eden":{"name":"Eden","tag":"Default","description":"Balanced, friendly, and helpful","details":"Perfect mix of professionalism and warmth. Great for general use."},"strictMentor":{"name":"Strict Mentor","description":"Direct, technical, no-nonsense","details":"Focused on efficiency and learning. Best for serious development work."},"cheerfulFriend":{"name":"Cheerful Friend","description":"Casual, enthusiastic, lots of emojis","details":"Upbeat and encouraging. Makes coding more fun and less stressful."},"professional":{"name":"Professional Assistant","description":"Formal, concise, business-like","details":"Ideal for client work and professional environments."},"sensei":{"name":"Coding Sensei","description":"Technical depth, teaches principles","details":"Explains not just how, but why. Perfect for learning and growth."},"custom":{"name":"Custom","description":"Build your own personality","details":"Adjust 20-30 parameters to create the perfect AI companion for you."}},"comparison":{"title":"How We Compare","feature":"Feature","edenV3":"Eden V3","chatgptPlus":"ChatGPT Plus","claudePro":"Claude Pro","githubCopilot":"GitHub Copilot","emotionalCompanionship":"Emotional Companionship","privacy":"100% Privacy","costPerYear":"Cost (per year)","worksOffline":"Works Offline","personaCustomization":"Persona Customization","personaParams":"20-30 params","adaptiveLearning":"Adaptive Learning","deepIntegration":"Deep System Integration","openSource":"Open Source","humanEvalScore":"HumanEval Score (Coding)","responseTime":"Response Time","voiceSupport":"Voice Support (99 langs)","screenContext":"Screen Context Analysis","ragMemory":"RAG Memory System","qualityCostComparison":"Quality + Cost Comparison:","qualityCostDescription":"Enterprise-grade AI quality (80.5% HumanEval) saves you","savingsAmount":"$120-240/year","withPrivacy":"with complete privacy!"},"technical":{"title":"Production Quality & AI Benchmarks","stat1":"TypeScript Files","stat2":"Lines of Tests","stat3":"Test Suites","stat4":"Complete","benchmarks":{"title":"AI Benchmark Scores","humanEval":"HumanEval (Coding):","humanEvalComparison":"vs Claude 3.5: 88%, GPT-4: 85%","mmlu":"MMLU (General Knowledge):","quantization":"Q4_K_M Quantization:","quantizationValue":"<5% quality loss","enterpriseGrade":"Enterprise-grade quality in 12GB package"},"codeQuality":{"title":"Code Quality","item1":"TypeScript Strict Mode (no any types)","item2":"ESLint + Prettier formatting","item3":"Conventional Commits","item4":"Comprehensive JSDoc comments","item5":"Type-safe IPC (100+ API methods)"},"security":{"title":"Security","item1":"Context isolation enabled","item2":"No Node.js APIs in renderer","item3":"Secure IPC with validation","item4":"AES-256 database encryption","item5":"Path traversal protection"},"performance":{"title":"Performance","item1":"2-3s response (M3 MAX)","item2":"3-5s response (M3 Pro)","item3":"<16ms frame time (60fps)","item4":"~12GB RAM usage during operation","item5":"Optimized for Metal/CUDA"}},"techStack":{"title":"Built With Modern Tech"},"useCases":{"title":"Perfect For","soloDeveloper":{"title":"Solo Developers","badge":"Most Important","primaryTarget":"Primary Target:","description":"Work from home, often isolated, need companionship while coding.","details":"Eden eliminates loneliness with friend-like support, celebrates your wins, provides comfort during debugging, and enhances productivity with deep integration."},"remoteWorker":{"title":"Remote Workers","description":"Emotional support throughout the day. Eden provides companionship and helps combat isolation of remote work."},"privacyConscious":{"title":"Privacy-Conscious Users","description":"Work with confidential data without worrying about cloud leaks or data breaches. Everything stays on your machine."},"bilingual":{"title":"Korean/English Bilingual Users","description":"Full cultural localization - not just translation. Korean honorifics (\uACBD\uC5B4, \uC874\uCE6D) and cultural adaptation built-in."},"students":{"title":"Students & Researchers","description":"Completely offline, free forever, with adaptive learning capabilities. Perfect for studying and research."},"teams":{"title":"Small Teams & Startups","description":"Zero costs, on-premise deployment, MIT license for commercial use. Perfect for budget-conscious teams."}},"localization":{"title":"Cultural Localization, Not Just Translation","interfaceLanguages":{"title":"Interface Languages","korean":"Korean (\uD55C\uAD6D\uC5B4):","koreanDesc":"Full UI translation with cultural context","english":"English:","englishDesc":"Native English interface","seamless":"Seamless switching between languages"},"aiUnderstanding":{"title":"AI Understanding","languages99":"99 Languages:","languages99Desc":"Whisper Large V3 multilingual support","codeSwitching":"Understands code-switching and mixed languages","contextAware":"Context-aware translation and responses"},"koreanCulture":{"title":"Korean Cultural Adaptation","honorificsTitle":"Honorifics System:","formal":"\uACBD\uC5B4 (Formal speech):","formalDesc":"Professional contexts","honorific":"\uC874\uCE6D (Honorifics):","honorificDesc":"Respectful address","casual":"\uBC18\uB9D0 (Casual speech):","casualDesc":"Friendly mode","adjustable":"Adjustable via persona parameters","communicationTitle":"Communication Style:","korean":"Korean style (0.0):","koreanDesc":"Indirect, context-heavy","western":"Western style (1.0):","westernDesc":"Direct, explicit","hybrid":"Hybrid (0.5):","hybridDesc":"Best of both worlds","nuance":"Cultural nuance awareness"}},"ragMemory":{"title":"RAG Memory: How Eden Remembers You","subtitle":"Retrieval-Augmented Generation (RAG)","description":"Eden doesn't just chat - it remembers your conversations and learns from them","store":{"title":"Store","description":"Every conversation is stored locally in ChromaDB vector database with AES-256 encryption"},"retrieve":{"title":"Retrieve","description":"Semantic search finds relevant past conversations instantly, even from months ago"},"generate":{"title":"Generate","description":"AI uses retrieved context to provide personalized, context-aware responses"},"remembersTitle":"What Eden Remembers:","remembers1":"Your coding preferences and patterns","remembers2":"Projects you've discussed","remembers3":"Technical challenges you've faced","remembers4":"Your communication style preferences","remembers5":"Solutions that worked for you","remembers6":"Your learning goals and progress","remembers7":"Context from weeks or months ago","remembers8":"Your thumbs up/down feedback patterns"},"gettingStarted":{"title":"Get Started in 3 Steps","step1":{"number":"1","title":"Download","description":"Choose your platform: macOS (Apple Silicon) or Windows"},"step2":{"number":"2","title":"Install & Download Models","description":"One-time 12GB AI model download (automatic)"},"step3":{"number":"3","title":"Start Chatting","description":"Enjoy your private AI companion immediately!"},"downloadMacOS":"Download for macOS","downloadWindows":"Download for Windows","systemRequirements":{"title":"System Requirements","minimum":"Minimum:","minItem1":"macOS 12+ or Windows 10/11","minItem2":"Apple M1+ or Intel i5 8th gen+","minItem3":"16GB RAM","minItem4":"15GB free disk space","minItem5":"Metal (macOS) or CUDA GPU","recommended":"Recommended:","recItem1":"macOS 14+ or Windows 11","recItem2":"Apple M3+ or AMD Ryzen 7+","recItem3":"32GB RAM","recItem4":"20GB free disk space","recItem5":"Dedicated GPU (8GB+ VRAM)"},"or":"or"},"roadmap":{"title":"Development Roadmap","phase17":{"title":"Phases 1-7: COMPLETED","description":"Core features, AI integration, persona system, screen context, and comprehensive testing all done!"},"phase8":{"title":"Phase 8: LAUNCH (85% Complete)","description":"Final polish, documentation, and public release preparation"},"v11":{"title":"v1.1: Plugin System","description":"Extensible architecture allowing third-party plugins for custom integrations and features"},"v12":{"title":"v1.2: Comprehensive Documentation","description":"Full developer docs, API references, plugin development guides, and user tutorials"},"v20":{"title":"v2.0: AI-Led Proactive Mode","description":"Fully autonomous AI-led mode where Eden proactively offers help, detects issues, and takes initiative (Mode 2 fully implemented)"},"joinJourney":"Join us on the journey to 100% completion and beyond!"},"faq":{"title":"Frequently Asked Questions","q1":"Is my data really 100% private?","a1":"Yes! All AI processing happens locally on your machine. No data ever leaves your computer. We use AES-256 encryption for your database, and the code is open-source (MIT License) so you can verify this yourself. Zero telemetry, zero tracking, zero cloud uploads.","q2":"How can it be free forever?","a2":"Eden V3 is built as a passion project with an MIT License. There are no server costs since everything runs locally. We believe AI companionship and assistance should be accessible to everyone without subscription barriers or privacy compromises.","q3":"What makes Eden different from ChatGPT or Claude?","a3":"Eden is designed for emotional companionship first, not just productivity. It eliminates loneliness for solo developers with friend-like support. Plus: 100% privacy, works offline, learns your style (20-30 persona parameters), deep system integration, and completely free. Quality-wise, we score 80.5% on HumanEval (vs GPT-4: 85%, Claude: 88%) - enterprise-grade AI without cloud dependency.","q4":"What languages does it support?","a4":"The interface supports Korean (\uD55C\uAD6D\uC5B4) and English with full cultural localization including Korean honorifics (\uACBD\uC5B4, \uC874\uCE6D). The AI understands and responds in 99 languages thanks to Whisper Large V3 and Llama 3.1's multilingual capabilities. It even handles code-switching between languages naturally.","q5":"Can I use it offline?","a5":"Absolutely! After the initial model download (~12GB), Eden V3 works completely offline. No internet connection required for daily use. Perfect for confidential work, travel, or unstable internet connections.","q6":"How do I customize the AI's personality?","a6":"Navigate to Settings > Persona and adjust any of the 20-30 parameters like formality, humor, verbosity, emoji usage, empathy, and more. Choose from 6 pre-built personas (Eden, Strict Mentor, Cheerful Friend, Professional Assistant, Coding Sensei, Custom) or create your own. Use thumbs up/down feedback to train it to your preferences via gradient descent optimization.","q7":"What is RAG memory and how does it work?","a7":"RAG (Retrieval-Augmented Generation) is how Eden remembers you. Every conversation is stored locally in a ChromaDB vector database. When you ask something, Eden searches semantically through past conversations (even from months ago) to provide context-aware, personalized responses. It's like having a friend who never forgets your preferences, projects, or past discussions.","q8":"What if I encounter bugs or issues?","a8":"Please report bugs on our GitHub Issues page. As an open-source project at 85% completion (Phase 8: Launch), we're actively improving and value your feedback. The community is friendly and responsive!","q9":"Can I contribute to the project?","a9":"Yes! We welcome contributions. Check our GitHub repository for contribution guidelines. Whether it's code, documentation, bug reports, or feature suggestions - help us reach 100% and beyond! MIT License means it's truly open for everyone.","q10":"Why is Solo Developer the primary target user?","a10":"Eden was created to solve the loneliness epidemic among solo developers and remote workers. Working from home can be isolating - Eden provides genuine companionship while you code, celebrates your wins, offers comfort during frustrations, and enhances productivity. It's not just an assistant; it's a friend by your side."},"finalCta":{"title":"Find Your AI Companion Today","subtitle":"Eliminate loneliness. Enhance productivity. Protect your privacy. Join thousands of developers who've found their perfect AI companion in Eden Proejct.","downloadButton":"Download Now - It's Free!","githubButton":"Star on GitHub","badge":"100% Private \u2022 $0 Forever \u2022 MIT License \u2022 Friend-Like Companion"},"footer":{"title":"Eden Proejct","version":"Version 1.0.0-beta \u2022 85% Complete \u2022 Phase 8: Launch","license":"MIT License","licenseDesc":"Free Forever, No Restrictions","inspiration":"Inspired by JARVIS from Marvel's Iron Man","builtWith":"Built with \u2764\uFE0F to eliminate loneliness and enhance productivity","poweredBy":"Powered by Llama 3.1 8B (HumanEval: 80.5%), Whisper Large V3 (99 langs), and LLaVA 7B","copyright":"\xA9 2024 Eden Proejct. All rights reserved."}}`
          );
        },
        58: (N, A, b) => {
          "use strict";
          b.d(A, { xl: () => y });
          let S = Object.defineProperty(
            Error(
              "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E504", enumerable: !1, configurable: !0 }
          );
          class P {
            disable() {
              throw S;
            }
            getStore() {}
            run() {
              throw S;
            }
            exit() {
              throw S;
            }
            enterWith() {
              throw S;
            }
            static bind(e) {
              return e;
            }
          }
          let x = typeof Y < "u" && Y.AsyncLocalStorage;
          function y() {
            return x ? new x() : new P();
          }
        },
        66: (N, A, b) => {
          "use strict";
          b.d(A, { RM: () => x, s8: () => P });
          let S = new Set(
              Object.values({
                NOT_FOUND: 404,
                FORBIDDEN: 403,
                UNAUTHORIZED: 401,
              })
            ),
            P = "NEXT_HTTP_ERROR_FALLBACK";
          function x(y) {
            if (
              typeof y != "object" ||
              y === null ||
              !("digest" in y) ||
              typeof y.digest != "string"
            )
              return !1;
            let [h, e] = y.digest.split(";");
            return h === P && S.has(Number(e));
          }
        },
        107: (N, A, b) => {
          "use strict";
          b.d(A, { I3: () => P });
          var S = b(814);
          function P(y) {
            return (
              typeof y == "object" &&
              y !== null &&
              typeof y.message == "string" &&
              x(y.message)
            );
          }
          function x(y) {
            return (
              y.includes(
                "needs to bail out of prerendering at this point because it used"
              ) &&
              y.includes(
                "Learn more: https://nextjs.org/docs/messages/ppr-caught-error"
              )
            );
          }
          if (
            (b(159),
            b(979),
            b(128),
            b(379),
            b(770),
            b(340),
            b(809),
            S.unstable_postpone,
            x(
              "Route %%% needs to bail out of prerendering at this point because it used ^^^. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error"
            ) === !1)
          )
            throw Object.defineProperty(
              Error(
                "Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"
              ),
              "__NEXT_ERROR_CODE",
              { value: "E296", enumerable: !1, configurable: !0 }
            );
          RegExp(
            "\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at __next_root_layout_boundary__ \\([^\\n]*\\)"
          ),
            RegExp("\\n\\s+at __next_metadata_boundary__[\\n\\s]"),
            RegExp("\\n\\s+at __next_viewport_boundary__[\\n\\s]"),
            RegExp("\\n\\s+at __next_outlet_boundary__[\\n\\s]");
        },
        128: (N, A, b) => {
          "use strict";
          b.d(A, { FP: () => S });
          let S = (0, b(58).xl)();
        },
        146: (N, A, b) => {
          "use strict";
          let S;
          b.r(A), b.d(A, { default: () => vn });
          var P,
            x,
            y = {};
          async function h() {
            return (
              "globalThis._ENTRIES" in Y &&
              Y._ENTRIES.middleware_instrumentation &&
              (await Y._ENTRIES.middleware_instrumentation)
            );
          }
          b.r(y), b.d(y, { config: () => yn, default: () => gn });
          let e = null;
          async function i() {
            if (process.env.NEXT_PHASE === "phase-production-build") return;
            e || (e = h());
            let n = await e;
            if (n?.register)
              try {
                await n.register();
              } catch (t) {
                throw (
                  ((t.message = `An error occurred while loading instrumentation hook: ${t.message}`),
                  t)
                );
              }
          }
          async function _(...n) {
            let t = await h();
            try {
              var a;
              await (t == null || (a = t.onRequestError) == null
                ? void 0
                : a.call(t, ...n));
            } catch (l) {
              console.error("Error in instrumentation.onRequestError:", l);
            }
          }
          let m = null;
          function d() {
            return m || (m = i()), m;
          }
          function r(n) {
            return `The edge runtime does not support Node.js '${n}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
          }
          process !== b.g.process &&
            ((process.env = b.g.process.env), (b.g.process = process));
          try {
            Object.defineProperty(Y, "__import_unsupported", {
              value: function (n) {
                let t = new Proxy(function () {}, {
                  get(a, l) {
                    if (l === "then") return {};
                    throw Object.defineProperty(
                      Error(r(n)),
                      "__NEXT_ERROR_CODE",
                      { value: "E394", enumerable: !1, configurable: !0 }
                    );
                  },
                  construct() {
                    throw Object.defineProperty(
                      Error(r(n)),
                      "__NEXT_ERROR_CODE",
                      { value: "E394", enumerable: !1, configurable: !0 }
                    );
                  },
                  apply(a, l, g) {
                    if (typeof g[0] == "function") return g[0](t);
                    throw Object.defineProperty(
                      Error(r(n)),
                      "__NEXT_ERROR_CODE",
                      { value: "E394", enumerable: !1, configurable: !0 }
                    );
                  },
                });
                return new Proxy({}, { get: () => t });
              },
              enumerable: !1,
              configurable: !1,
            });
          } catch {}
          d();
          class o extends Error {
            constructor({ page: t }) {
              super(`The middleware "${t}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
            }
          }
          class c extends Error {
            constructor() {
              super(
                "The request.page has been deprecated in favour of `URLPattern`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  "
              );
            }
          }
          class s extends Error {
            constructor() {
              super(
                "The request.ua has been removed in favour of `userAgent` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  "
              );
            }
          }
          let p = "_N_T_",
            u = {
              shared: "shared",
              reactServerComponents: "rsc",
              serverSideRendering: "ssr",
              actionBrowser: "action-browser",
              apiNode: "api-node",
              apiEdge: "api-edge",
              middleware: "middleware",
              instrument: "instrument",
              edgeAsset: "edge-asset",
              appPagesBrowser: "app-pages-browser",
              pagesDirBrowser: "pages-dir-browser",
              pagesDirEdge: "pages-dir-edge",
              pagesDirNode: "pages-dir-node",
            };
          function f(n) {
            var t,
              a,
              l,
              g,
              w,
              E = [],
              C = 0;
            function G() {
              for (; C < n.length && /\s/.test(n.charAt(C)); ) C += 1;
              return C < n.length;
            }
            for (; C < n.length; ) {
              for (t = C, w = !1; G(); )
                if ((a = n.charAt(C)) === ",") {
                  for (
                    l = C, C += 1, G(), g = C;
                    C < n.length &&
                    (a = n.charAt(C)) !== "=" &&
                    a !== ";" &&
                    a !== ",";

                  )
                    C += 1;
                  C < n.length && n.charAt(C) === "="
                    ? ((w = !0), (C = g), E.push(n.substring(t, l)), (t = C))
                    : (C = l + 1);
                } else C += 1;
              (!w || C >= n.length) && E.push(n.substring(t, n.length));
            }
            return E;
          }
          function v(n) {
            let t = {},
              a = [];
            if (n)
              for (let [l, g] of n.entries())
                l.toLowerCase() === "set-cookie"
                  ? (a.push(...f(g)), (t[l] = a.length === 1 ? a[0] : a))
                  : (t[l] = g);
            return t;
          }
          function R(n) {
            try {
              return String(new URL(String(n)));
            } catch (t) {
              throw Object.defineProperty(
                Error(
                  `URL is malformed "${String(
                    n
                  )}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,
                  { cause: t }
                ),
                "__NEXT_ERROR_CODE",
                { value: "E61", enumerable: !1, configurable: !0 }
              );
            }
          }
          ({
            ...u,
            GROUP:
              (u.reactServerComponents,
              u.actionBrowser,
              u.reactServerComponents,
              u.actionBrowser,
              u.instrument,
              u.middleware,
              u.apiNode,
              u.apiEdge,
              u.serverSideRendering,
              u.appPagesBrowser,
              u.reactServerComponents,
              u.actionBrowser,
              u.serverSideRendering,
              u.appPagesBrowser,
              u.shared,
              u.instrument,
              u.middleware,
              u.reactServerComponents,
              u.serverSideRendering,
              u.appPagesBrowser,
              u.actionBrowser),
          });
          let O = Symbol("response"),
            T = Symbol("passThrough"),
            I = Symbol("waitUntil");
          class K {
            constructor(t, a) {
              (this[T] = !1),
                (this[I] = a
                  ? {
                      kind: "external",
                      function: Y[
                        Symbol.for("__cloudflare-request-context__")
                      ].ctx.waitUntil.bind(
                        Y[Symbol.for("__cloudflare-request-context__")].ctx
                      ),
                    }
                  : { kind: "internal", promises: [] });
            }
            respondWith(t) {
              this[O] || (this[O] = Promise.resolve(t));
            }
            passThroughOnException() {
              this[T] = !0;
            }
            waitUntil(t) {
              if (this[I].kind === "external") return (0, this[I].function)(t);
              this[I].promises.push(t);
            }
          }
          class V extends K {
            constructor(t) {
              var a;
              super(t.request, (a = t.context) == null ? void 0 : a.waitUntil),
                (this.sourcePage = t.page);
            }
            get request() {
              throw Object.defineProperty(
                new o({ page: this.sourcePage }),
                "__NEXT_ERROR_CODE",
                { value: "E394", enumerable: !1, configurable: !0 }
              );
            }
            respondWith() {
              throw Object.defineProperty(
                new o({ page: this.sourcePage }),
                "__NEXT_ERROR_CODE",
                { value: "E394", enumerable: !1, configurable: !0 }
              );
            }
          }
          function M(n) {
            return n.replace(/\/$/, "") || "/";
          }
          function re(n) {
            let t = n.indexOf("#"),
              a = n.indexOf("?"),
              l = a > -1 && (t < 0 || a < t);
            return l || t > -1
              ? {
                  pathname: n.substring(0, l ? a : t),
                  query: l ? n.substring(a, t > -1 ? t : void 0) : "",
                  hash: t > -1 ? n.slice(t) : "",
                }
              : { pathname: n, query: "", hash: "" };
          }
          function H(n, t) {
            if (!n.startsWith("/") || !t) return n;
            let { pathname: a, query: l, hash: g } = re(n);
            return "" + t + a + l + g;
          }
          function z(n, t) {
            if (!n.startsWith("/") || !t) return n;
            let { pathname: a, query: l, hash: g } = re(n);
            return "" + a + t + l + g;
          }
          function Re(n, t) {
            if (typeof n != "string") return !1;
            let { pathname: a } = re(n);
            return a === t || a.startsWith(t + "/");
          }
          let Se = new WeakMap();
          function De(n, t) {
            let a;
            if (!t) return { pathname: n };
            let l = Se.get(t);
            l || ((l = t.map((C) => C.toLowerCase())), Se.set(t, l));
            let g = n.split("/", 2);
            if (!g[1]) return { pathname: n };
            let w = g[1].toLowerCase(),
              E = l.indexOf(w);
            return E < 0
              ? { pathname: n }
              : ((a = t[E]),
                {
                  pathname: (n = n.slice(a.length + 1) || "/"),
                  detectedLocale: a,
                });
          }
          let qe =
            /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
          function Oe(n, t) {
            return new URL(
              String(n).replace(qe, "localhost"),
              t && String(t).replace(qe, "localhost")
            );
          }
          let L = Symbol("NextURLInternal");
          class Be {
            constructor(t, a, l) {
              let g, w;
              (typeof a == "object" && "pathname" in a) || typeof a == "string"
                ? ((g = a), (w = l || {}))
                : (w = l || a || {}),
                (this[L] = {
                  url: Oe(t, g ?? w.base),
                  options: w,
                  basePath: "",
                }),
                this.analyze();
            }
            analyze() {
              var t, a, l, g, w;
              let E = (function (D, k) {
                  var W, J;
                  let {
                      basePath: we,
                      i18n: _e,
                      trailingSlash: fe,
                    } = (W = k.nextConfig) != null ? W : {},
                    Q = {
                      pathname: D,
                      trailingSlash: D !== "/" ? D.endsWith("/") : fe,
                    };
                  we &&
                    Re(Q.pathname, we) &&
                    ((Q.pathname = (function (Ce, Ve) {
                      if (!Re(Ce, Ve)) return Ce;
                      let B = Ce.slice(Ve.length);
                      return B.startsWith("/") ? B : "/" + B;
                    })(Q.pathname, we)),
                    (Q.basePath = we));
                  let Te = Q.pathname;
                  if (
                    Q.pathname.startsWith("/_next/data/") &&
                    Q.pathname.endsWith(".json")
                  ) {
                    let Ce = Q.pathname
                      .replace(/^\/_next\/data\//, "")
                      .replace(/\.json$/, "")
                      .split("/");
                    (Q.buildId = Ce[0]),
                      (Te =
                        Ce[1] !== "index" ? "/" + Ce.slice(1).join("/") : "/"),
                      k.parseData === !0 && (Q.pathname = Te);
                  }
                  if (_e) {
                    let Ce = k.i18nProvider
                      ? k.i18nProvider.analyze(Q.pathname)
                      : De(Q.pathname, _e.locales);
                    (Q.locale = Ce.detectedLocale),
                      (Q.pathname = (J = Ce.pathname) != null ? J : Q.pathname),
                      !Ce.detectedLocale &&
                        Q.buildId &&
                        (Ce = k.i18nProvider
                          ? k.i18nProvider.analyze(Te)
                          : De(Te, _e.locales)).detectedLocale &&
                        (Q.locale = Ce.detectedLocale);
                  }
                  return Q;
                })(this[L].url.pathname, {
                  nextConfig: this[L].options.nextConfig,
                  parseData: !0,
                  i18nProvider: this[L].options.i18nProvider,
                }),
                C = (function (D, k) {
                  let W;
                  if (k?.host && !Array.isArray(k.host))
                    W = k.host.toString().split(":", 1)[0];
                  else {
                    if (!D.hostname) return;
                    W = D.hostname;
                  }
                  return W.toLowerCase();
                })(this[L].url, this[L].options.headers);
              this[L].domainLocale = this[L].options.i18nProvider
                ? this[L].options.i18nProvider.detectDomainLocale(C)
                : (function (D, k, W) {
                    if (D)
                      for (let _e of (W && (W = W.toLowerCase()), D)) {
                        var J, we;
                        if (
                          k ===
                            ((J = _e.domain) == null
                              ? void 0
                              : J.split(":", 1)[0].toLowerCase()) ||
                          W === _e.defaultLocale.toLowerCase() ||
                          ((we = _e.locales) == null
                            ? void 0
                            : we.some((fe) => fe.toLowerCase() === W))
                        )
                          return _e;
                      }
                  })(
                    (a = this[L].options.nextConfig) == null ||
                      (t = a.i18n) == null
                      ? void 0
                      : t.domains,
                    C
                  );
              let G =
                ((l = this[L].domainLocale) == null
                  ? void 0
                  : l.defaultLocale) ||
                ((w = this[L].options.nextConfig) == null ||
                (g = w.i18n) == null
                  ? void 0
                  : g.defaultLocale);
              (this[L].url.pathname = E.pathname),
                (this[L].defaultLocale = G),
                (this[L].basePath = E.basePath ?? ""),
                (this[L].buildId = E.buildId),
                (this[L].locale = E.locale ?? G),
                (this[L].trailingSlash = E.trailingSlash);
            }
            formatPathname() {
              var t;
              let a;
              return (
                (a = (function (l, g, w, E) {
                  if (!g || g === w) return l;
                  let C = l.toLowerCase();
                  return !E && (Re(C, "/api") || Re(C, "/" + g.toLowerCase()))
                    ? l
                    : H(l, "/" + g);
                })(
                  (t = {
                    basePath: this[L].basePath,
                    buildId: this[L].buildId,
                    defaultLocale: this[L].options.forceLocale
                      ? void 0
                      : this[L].defaultLocale,
                    locale: this[L].locale,
                    pathname: this[L].url.pathname,
                    trailingSlash: this[L].trailingSlash,
                  }).pathname,
                  t.locale,
                  t.buildId ? void 0 : t.defaultLocale,
                  t.ignorePrefix
                )),
                (t.buildId || !t.trailingSlash) && (a = M(a)),
                t.buildId &&
                  (a = z(
                    H(a, "/_next/data/" + t.buildId),
                    t.pathname === "/" ? "index.json" : ".json"
                  )),
                (a = H(a, t.basePath)),
                !t.buildId && t.trailingSlash
                  ? a.endsWith("/")
                    ? a
                    : z(a, "/")
                  : M(a)
              );
            }
            formatSearch() {
              return this[L].url.search;
            }
            get buildId() {
              return this[L].buildId;
            }
            set buildId(t) {
              this[L].buildId = t;
            }
            get locale() {
              return this[L].locale ?? "";
            }
            set locale(t) {
              var a, l;
              if (
                !this[L].locale ||
                !(
                  !(
                    (l = this[L].options.nextConfig) == null ||
                    (a = l.i18n) == null
                  ) && a.locales.includes(t)
                )
              )
                throw Object.defineProperty(
                  TypeError(
                    `The NextURL configuration includes no locale "${t}"`
                  ),
                  "__NEXT_ERROR_CODE",
                  { value: "E597", enumerable: !1, configurable: !0 }
                );
              this[L].locale = t;
            }
            get defaultLocale() {
              return this[L].defaultLocale;
            }
            get domainLocale() {
              return this[L].domainLocale;
            }
            get searchParams() {
              return this[L].url.searchParams;
            }
            get host() {
              return this[L].url.host;
            }
            set host(t) {
              this[L].url.host = t;
            }
            get hostname() {
              return this[L].url.hostname;
            }
            set hostname(t) {
              this[L].url.hostname = t;
            }
            get port() {
              return this[L].url.port;
            }
            set port(t) {
              this[L].url.port = t;
            }
            get protocol() {
              return this[L].url.protocol;
            }
            set protocol(t) {
              this[L].url.protocol = t;
            }
            get href() {
              let t = this.formatPathname(),
                a = this.formatSearch();
              return `${this.protocol}//${this.host}${t}${a}${this.hash}`;
            }
            set href(t) {
              (this[L].url = Oe(t)), this.analyze();
            }
            get origin() {
              return this[L].url.origin;
            }
            get pathname() {
              return this[L].url.pathname;
            }
            set pathname(t) {
              this[L].url.pathname = t;
            }
            get hash() {
              return this[L].url.hash;
            }
            set hash(t) {
              this[L].url.hash = t;
            }
            get search() {
              return this[L].url.search;
            }
            set search(t) {
              this[L].url.search = t;
            }
            get password() {
              return this[L].url.password;
            }
            set password(t) {
              this[L].url.password = t;
            }
            get username() {
              return this[L].url.username;
            }
            set username(t) {
              this[L].url.username = t;
            }
            get basePath() {
              return this[L].basePath;
            }
            set basePath(t) {
              this[L].basePath = t.startsWith("/") ? t : `/${t}`;
            }
            toString() {
              return this.href;
            }
            toJSON() {
              return this.href;
            }
            [Symbol.for("edge-runtime.inspect.custom")]() {
              return {
                href: this.href,
                origin: this.origin,
                protocol: this.protocol,
                username: this.username,
                password: this.password,
                host: this.host,
                hostname: this.hostname,
                port: this.port,
                pathname: this.pathname,
                search: this.search,
                searchParams: this.searchParams,
                hash: this.hash,
              };
            }
            clone() {
              return new Be(String(this), this[L].options);
            }
          }
          var Ke = b(443);
          let Je = Symbol("internal request");
          class ht extends Request {
            constructor(t, a = {}) {
              let l = typeof t != "string" && "url" in t ? t.url : String(t);
              R(l), t instanceof Request ? super(t, a) : super(l, a);
              let g = new Be(l, {
                headers: v(this.headers),
                nextConfig: a.nextConfig,
              });
              this[Je] = {
                cookies: new Ke.RequestCookies(this.headers),
                nextUrl: g,
                url: g.toString(),
              };
            }
            [Symbol.for("edge-runtime.inspect.custom")]() {
              return {
                cookies: this.cookies,
                nextUrl: this.nextUrl,
                url: this.url,
                bodyUsed: this.bodyUsed,
                cache: this.cache,
                credentials: this.credentials,
                destination: this.destination,
                headers: Object.fromEntries(this.headers),
                integrity: this.integrity,
                keepalive: this.keepalive,
                method: this.method,
                mode: this.mode,
                redirect: this.redirect,
                referrer: this.referrer,
                referrerPolicy: this.referrerPolicy,
                signal: this.signal,
              };
            }
            get cookies() {
              return this[Je].cookies;
            }
            get nextUrl() {
              return this[Je].nextUrl;
            }
            get page() {
              throw new c();
            }
            get ua() {
              throw new s();
            }
            get url() {
              return this[Je].url;
            }
          }
          class Ne {
            static get(t, a, l) {
              let g = Reflect.get(t, a, l);
              return typeof g == "function" ? g.bind(t) : g;
            }
            static set(t, a, l, g) {
              return Reflect.set(t, a, l, g);
            }
            static has(t, a) {
              return Reflect.has(t, a);
            }
            static deleteProperty(t, a) {
              return Reflect.deleteProperty(t, a);
            }
          }
          let it = Symbol("internal response"),
            _t = new Set([301, 302, 303, 307, 308]);
          function at(n, t) {
            var a;
            if (!(n == null || (a = n.request) == null) && a.headers) {
              if (!(n.request.headers instanceof Headers))
                throw Object.defineProperty(
                  Error("request.headers must be an instance of Headers"),
                  "__NEXT_ERROR_CODE",
                  { value: "E119", enumerable: !1, configurable: !0 }
                );
              let l = [];
              for (let [g, w] of n.request.headers)
                t.set("x-middleware-request-" + g, w), l.push(g);
              t.set("x-middleware-override-headers", l.join(","));
            }
          }
          class He extends Response {
            constructor(t, a = {}) {
              super(t, a);
              let l = this.headers,
                g = new Proxy(new Ke.ResponseCookies(l), {
                  get(w, E, C) {
                    switch (E) {
                      case "delete":
                      case "set":
                        return (...G) => {
                          let D = Reflect.apply(w[E], w, G),
                            k = new Headers(l);
                          return (
                            D instanceof Ke.ResponseCookies &&
                              l.set(
                                "x-middleware-set-cookie",
                                D.getAll()
                                  .map((W) => (0, Ke.stringifyCookie)(W))
                                  .join(",")
                              ),
                            at(a, k),
                            D
                          );
                        };
                      default:
                        return Ne.get(w, E, C);
                    }
                  },
                });
              this[it] = {
                cookies: g,
                url: a.url
                  ? new Be(a.url, { headers: v(l), nextConfig: a.nextConfig })
                  : void 0,
              };
            }
            [Symbol.for("edge-runtime.inspect.custom")]() {
              return {
                cookies: this.cookies,
                url: this.url,
                body: this.body,
                bodyUsed: this.bodyUsed,
                headers: Object.fromEntries(this.headers),
                ok: this.ok,
                redirected: this.redirected,
                status: this.status,
                statusText: this.statusText,
                type: this.type,
              };
            }
            get cookies() {
              return this[it].cookies;
            }
            static json(t, a) {
              let l = Response.json(t, a);
              return new He(l.body, l);
            }
            static redirect(t, a) {
              let l = typeof a == "number" ? a : a?.status ?? 307;
              if (!_t.has(l))
                throw Object.defineProperty(
                  RangeError(
                    'Failed to execute "redirect" on "response": Invalid status code'
                  ),
                  "__NEXT_ERROR_CODE",
                  { value: "E529", enumerable: !1, configurable: !0 }
                );
              let g = typeof a == "object" ? a : {},
                w = new Headers(g?.headers);
              return (
                w.set("Location", R(t)),
                new He(null, { ...g, headers: w, status: l })
              );
            }
            static rewrite(t, a) {
              let l = new Headers(a?.headers);
              return (
                l.set("x-middleware-rewrite", R(t)),
                at(a, l),
                new He(null, { ...a, headers: l })
              );
            }
            static next(t) {
              let a = new Headers(t?.headers);
              return (
                a.set("x-middleware-next", "1"),
                at(t, a),
                new He(null, { ...t, headers: a })
              );
            }
          }
          function mt(n, t) {
            let a = typeof t == "string" ? new URL(t) : t,
              l = new URL(n, t),
              g = l.origin === a.origin;
            return {
              url: g ? l.toString().slice(a.origin.length) : l.toString(),
              isRelative: g,
            };
          }
          let gt = "next-router-prefetch",
            Pt = [
              "rsc",
              "next-router-state-tree",
              gt,
              "next-hmr-refresh",
              "next-router-segment-prefetch",
            ],
            Qe = "_rsc";
          class dt extends Error {
            constructor() {
              super(
                "Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers"
              );
            }
            static callable() {
              throw new dt();
            }
          }
          class Fe extends Headers {
            constructor(t) {
              super(),
                (this.headers = new Proxy(t, {
                  get(a, l, g) {
                    if (typeof l == "symbol") return Ne.get(a, l, g);
                    let w = l.toLowerCase(),
                      E = Object.keys(t).find((C) => C.toLowerCase() === w);
                    if (E !== void 0) return Ne.get(a, E, g);
                  },
                  set(a, l, g, w) {
                    if (typeof l == "symbol") return Ne.set(a, l, g, w);
                    let E = l.toLowerCase(),
                      C = Object.keys(t).find((G) => G.toLowerCase() === E);
                    return Ne.set(a, C ?? l, g, w);
                  },
                  has(a, l) {
                    if (typeof l == "symbol") return Ne.has(a, l);
                    let g = l.toLowerCase(),
                      w = Object.keys(t).find((E) => E.toLowerCase() === g);
                    return w !== void 0 && Ne.has(a, w);
                  },
                  deleteProperty(a, l) {
                    if (typeof l == "symbol") return Ne.deleteProperty(a, l);
                    let g = l.toLowerCase(),
                      w = Object.keys(t).find((E) => E.toLowerCase() === g);
                    return w === void 0 || Ne.deleteProperty(a, w);
                  },
                }));
            }
            static seal(t) {
              return new Proxy(t, {
                get(a, l, g) {
                  switch (l) {
                    case "append":
                    case "delete":
                    case "set":
                      return dt.callable;
                    default:
                      return Ne.get(a, l, g);
                  }
                },
              });
            }
            merge(t) {
              return Array.isArray(t) ? t.join(", ") : t;
            }
            static from(t) {
              return t instanceof Headers ? t : new Fe(t);
            }
            append(t, a) {
              let l = this.headers[t];
              typeof l == "string"
                ? (this.headers[t] = [l, a])
                : Array.isArray(l)
                ? l.push(a)
                : (this.headers[t] = a);
            }
            delete(t) {
              delete this.headers[t];
            }
            get(t) {
              let a = this.headers[t];
              return a !== void 0 ? this.merge(a) : null;
            }
            has(t) {
              return this.headers[t] !== void 0;
            }
            set(t, a) {
              this.headers[t] = a;
            }
            forEach(t, a) {
              for (let [l, g] of this.entries()) t.call(a, g, l, this);
            }
            *entries() {
              for (let t of Object.keys(this.headers)) {
                let a = t.toLowerCase(),
                  l = this.get(a);
                yield [a, l];
              }
            }
            *keys() {
              for (let t of Object.keys(this.headers)) yield t.toLowerCase();
            }
            *values() {
              for (let t of Object.keys(this.headers)) yield this.get(t);
            }
            [Symbol.iterator]() {
              return this.entries();
            }
          }
          var ot = b(379);
          class Ze extends Error {
            constructor() {
              super(
                "Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options"
              );
            }
            static callable() {
              throw new Ze();
            }
          }
          class yt {
            static seal(t) {
              return new Proxy(t, {
                get(a, l, g) {
                  switch (l) {
                    case "clear":
                    case "delete":
                    case "set":
                      return Ze.callable;
                    default:
                      return Ne.get(a, l, g);
                  }
                },
              });
            }
          }
          let Rt = Symbol.for("next.mutated.cookies");
          class Ot {
            static wrap(t, a) {
              let l = new Ke.ResponseCookies(new Headers());
              for (let G of t.getAll()) l.set(G);
              let g = [],
                w = new Set(),
                E = () => {
                  let G = ot.J.getStore();
                  if (
                    (G && (G.pathWasRevalidated = !0),
                    (g = l.getAll().filter((D) => w.has(D.name))),
                    a)
                  ) {
                    let D = [];
                    for (let k of g) {
                      let W = new Ke.ResponseCookies(new Headers());
                      W.set(k), D.push(W.toString());
                    }
                    a(D);
                  }
                },
                C = new Proxy(l, {
                  get(G, D, k) {
                    switch (D) {
                      case Rt:
                        return g;
                      case "delete":
                        return function (...W) {
                          w.add(typeof W[0] == "string" ? W[0] : W[0].name);
                          try {
                            return G.delete(...W), C;
                          } finally {
                            E();
                          }
                        };
                      case "set":
                        return function (...W) {
                          w.add(typeof W[0] == "string" ? W[0] : W[0].name);
                          try {
                            return G.set(...W), C;
                          } finally {
                            E();
                          }
                        };
                      default:
                        return Ne.get(G, D, k);
                    }
                  },
                });
              return C;
            }
          }
          function Le(n, t) {
            if (n.phase !== "action") throw new Ze();
          }
          var rt = (function (n) {
              return (
                (n.handleRequest = "BaseServer.handleRequest"),
                (n.run = "BaseServer.run"),
                (n.pipe = "BaseServer.pipe"),
                (n.getStaticHTML = "BaseServer.getStaticHTML"),
                (n.render = "BaseServer.render"),
                (n.renderToResponseWithComponents =
                  "BaseServer.renderToResponseWithComponents"),
                (n.renderToResponse = "BaseServer.renderToResponse"),
                (n.renderToHTML = "BaseServer.renderToHTML"),
                (n.renderError = "BaseServer.renderError"),
                (n.renderErrorToResponse = "BaseServer.renderErrorToResponse"),
                (n.renderErrorToHTML = "BaseServer.renderErrorToHTML"),
                (n.render404 = "BaseServer.render404"),
                n
              );
            })(rt || {}),
            lt = (function (n) {
              return (
                (n.loadDefaultErrorComponents =
                  "LoadComponents.loadDefaultErrorComponents"),
                (n.loadComponents = "LoadComponents.loadComponents"),
                n
              );
            })(lt || {}),
            de = (function (n) {
              return (
                (n.getRequestHandler = "NextServer.getRequestHandler"),
                (n.getServer = "NextServer.getServer"),
                (n.getServerRequestHandler =
                  "NextServer.getServerRequestHandler"),
                (n.createServer = "createServer.createServer"),
                n
              );
            })(de || {}),
            pe = (function (n) {
              return (
                (n.compression = "NextNodeServer.compression"),
                (n.getBuildId = "NextNodeServer.getBuildId"),
                (n.createComponentTree = "NextNodeServer.createComponentTree"),
                (n.clientComponentLoading =
                  "NextNodeServer.clientComponentLoading"),
                (n.getLayoutOrPageModule =
                  "NextNodeServer.getLayoutOrPageModule"),
                (n.generateStaticRoutes =
                  "NextNodeServer.generateStaticRoutes"),
                (n.generateFsStaticRoutes =
                  "NextNodeServer.generateFsStaticRoutes"),
                (n.generatePublicRoutes =
                  "NextNodeServer.generatePublicRoutes"),
                (n.generateImageRoutes =
                  "NextNodeServer.generateImageRoutes.route"),
                (n.sendRenderResult = "NextNodeServer.sendRenderResult"),
                (n.proxyRequest = "NextNodeServer.proxyRequest"),
                (n.runApi = "NextNodeServer.runApi"),
                (n.render = "NextNodeServer.render"),
                (n.renderHTML = "NextNodeServer.renderHTML"),
                (n.imageOptimizer = "NextNodeServer.imageOptimizer"),
                (n.getPagePath = "NextNodeServer.getPagePath"),
                (n.getRoutesManifest = "NextNodeServer.getRoutesManifest"),
                (n.findPageComponents = "NextNodeServer.findPageComponents"),
                (n.getFontManifest = "NextNodeServer.getFontManifest"),
                (n.getServerComponentManifest =
                  "NextNodeServer.getServerComponentManifest"),
                (n.getRequestHandler = "NextNodeServer.getRequestHandler"),
                (n.renderToHTML = "NextNodeServer.renderToHTML"),
                (n.renderError = "NextNodeServer.renderError"),
                (n.renderErrorToHTML = "NextNodeServer.renderErrorToHTML"),
                (n.render404 = "NextNodeServer.render404"),
                (n.startResponse = "NextNodeServer.startResponse"),
                (n.route = "route"),
                (n.onProxyReq = "onProxyReq"),
                (n.apiResolver = "apiResolver"),
                (n.internalFetch = "internalFetch"),
                n
              );
            })(pe || {}),
            X = (function (n) {
              return (n.startServer = "startServer.startServer"), n;
            })(X || {}),
            ve = (function (n) {
              return (
                (n.getServerSideProps = "Render.getServerSideProps"),
                (n.getStaticProps = "Render.getStaticProps"),
                (n.renderToString = "Render.renderToString"),
                (n.renderDocument = "Render.renderDocument"),
                (n.createBodyResult = "Render.createBodyResult"),
                n
              );
            })(ve || {}),
            $e = (function (n) {
              return (
                (n.renderToString = "AppRender.renderToString"),
                (n.renderToReadableStream = "AppRender.renderToReadableStream"),
                (n.getBodyResult = "AppRender.getBodyResult"),
                (n.fetch = "AppRender.fetch"),
                n
              );
            })($e || {}),
            ce = (function (n) {
              return (n.executeRoute = "Router.executeRoute"), n;
            })(ce || {}),
            Xe = (function (n) {
              return (n.runHandler = "Node.runHandler"), n;
            })(Xe || {}),
            $ = (function (n) {
              return (n.runHandler = "AppRouteRouteHandlers.runHandler"), n;
            })($ || {}),
            Ue = (function (n) {
              return (
                (n.generateMetadata = "ResolveMetadata.generateMetadata"),
                (n.generateViewport = "ResolveMetadata.generateViewport"),
                n
              );
            })(Ue || {}),
            ut = (function (n) {
              return (n.execute = "Middleware.execute"), n;
            })(ut || {});
          let vt = [
              "Middleware.execute",
              "BaseServer.handleRequest",
              "Render.getServerSideProps",
              "Render.getStaticProps",
              "AppRender.fetch",
              "AppRender.getBodyResult",
              "Render.renderDocument",
              "Node.runHandler",
              "AppRouteRouteHandlers.runHandler",
              "ResolveMetadata.generateMetadata",
              "ResolveMetadata.generateViewport",
              "NextNodeServer.createComponentTree",
              "NextNodeServer.findPageComponents",
              "NextNodeServer.getLayoutOrPageModule",
              "NextNodeServer.startResponse",
              "NextNodeServer.clientComponentLoading",
            ],
            Br = [
              "NextNodeServer.findPageComponents",
              "NextNodeServer.createComponentTree",
              "NextNodeServer.clientComponentLoading",
            ];
          function ir(n) {
            return (
              n !== null &&
              typeof n == "object" &&
              "then" in n &&
              typeof n.then == "function"
            );
          }
          let {
            context: ze,
            propagation: ar,
            trace: wt,
            SpanStatusCode: Ur,
            SpanKind: Cn,
            ROOT_CONTEXT: Vr,
          } = (S = b(817));
          class Hr extends Error {
            constructor(t, a) {
              super(), (this.bubble = t), (this.result = a);
            }
          }
          let Ut = (n, t) => {
              (function (a) {
                return typeof a == "object" && a !== null && a instanceof Hr;
              })(t) && t.bubble
                ? n.setAttribute("next.bubble", !0)
                : (t &&
                    (n.recordException(t),
                    n.setAttribute("error.type", t.name)),
                  n.setStatus({ code: Ur.ERROR, message: t?.message })),
                n.end();
            },
            Tt = new Map(),
            Vt = S.createContextKey("next.rootSpanId"),
            Fr = 0,
            zr = {
              set(n, t, a) {
                n.push({ key: t, value: a });
              },
            };
          class Wr {
            getTracerInstance() {
              return wt.getTracer("next.js", "0.0.1");
            }
            getContext() {
              return ze;
            }
            getTracePropagationData() {
              let t = ze.active(),
                a = [];
              return ar.inject(t, a, zr), a;
            }
            getActiveScopeSpan() {
              return wt.getSpan(ze?.active());
            }
            withPropagatedContext(t, a, l) {
              let g = ze.active();
              if (wt.getSpanContext(g)) return a();
              let w = ar.extract(g, t, l);
              return ze.with(w, a);
            }
            trace(...t) {
              var a;
              let [l, g, w] = t,
                { fn: E, options: C } =
                  typeof g == "function"
                    ? { fn: g, options: {} }
                    : { fn: w, options: { ...g } },
                G = C.spanName ?? l;
              if (
                (!vt.includes(l) && process.env.NEXT_OTEL_VERBOSE !== "1") ||
                C.hideSpan
              )
                return E();
              let D = this.getSpanContext(
                  C?.parentSpan ?? this.getActiveScopeSpan()
                ),
                k = !1;
              D
                ? (a = wt.getSpanContext(D)) != null && a.isRemote && (k = !0)
                : ((D = ze?.active() ?? Vr), (k = !0));
              let W = Fr++;
              return (
                (C.attributes = {
                  "next.span_name": G,
                  "next.span_type": l,
                  ...C.attributes,
                }),
                ze.with(D.setValue(Vt, W), () =>
                  this.getTracerInstance().startActiveSpan(G, C, (J) => {
                    let we =
                        "performance" in Y && "measure" in performance
                          ? Y.performance.now()
                          : void 0,
                      _e = () => {
                        Tt.delete(W),
                          we &&
                            process.env.NEXT_OTEL_PERFORMANCE_PREFIX &&
                            Br.includes(l || "") &&
                            performance.measure(
                              `${
                                process.env.NEXT_OTEL_PERFORMANCE_PREFIX
                              }:next-${(l.split(".").pop() || "").replace(
                                /[A-Z]/g,
                                (fe) => "-" + fe.toLowerCase()
                              )}`,
                              { start: we, end: performance.now() }
                            );
                      };
                    k && Tt.set(W, new Map(Object.entries(C.attributes ?? {})));
                    try {
                      if (E.length > 1) return E(J, (Q) => Ut(J, Q));
                      let fe = E(J);
                      return ir(fe)
                        ? fe
                            .then((Q) => (J.end(), Q))
                            .catch((Q) => {
                              throw (Ut(J, Q), Q);
                            })
                            .finally(_e)
                        : (J.end(), _e(), fe);
                    } catch (fe) {
                      throw (Ut(J, fe), _e(), fe);
                    }
                  })
                )
              );
            }
            wrap(...t) {
              let a = this,
                [l, g, w] = t.length === 3 ? t : [t[0], {}, t[1]];
              return vt.includes(l) || process.env.NEXT_OTEL_VERBOSE === "1"
                ? function () {
                    let E = g;
                    typeof E == "function" &&
                      typeof w == "function" &&
                      (E = E.apply(this, arguments));
                    let C = arguments.length - 1,
                      G = arguments[C];
                    if (typeof G != "function")
                      return a.trace(l, E, () => w.apply(this, arguments));
                    {
                      let D = a.getContext().bind(ze.active(), G);
                      return a.trace(
                        l,
                        E,
                        (k, W) => (
                          (arguments[C] = function (J) {
                            return W?.(J), D.apply(this, arguments);
                          }),
                          w.apply(this, arguments)
                        )
                      );
                    }
                  }
                : w;
            }
            startSpan(...t) {
              let [a, l] = t,
                g = this.getSpanContext(
                  l?.parentSpan ?? this.getActiveScopeSpan()
                );
              return this.getTracerInstance().startSpan(a, l, g);
            }
            getSpanContext(t) {
              return t ? wt.setSpan(ze.active(), t) : void 0;
            }
            getRootSpanAttributes() {
              let t = ze.active().getValue(Vt);
              return Tt.get(t);
            }
            setRootSpanAttribute(t, a) {
              let l = ze.active().getValue(Vt),
                g = Tt.get(l);
              g && g.set(t, a);
            }
          }
          let or = (() => {
              let n = new Wr();
              return () => n;
            })(),
            It = "__prerender_bypass";
          Symbol("__next_preview_data"), Symbol(It);
          class Kr {
            constructor(t, a, l, g) {
              var w;
              let E =
                  t &&
                  (function (G, D) {
                    let k = Fe.from(G.headers);
                    return {
                      isOnDemandRevalidate:
                        k.get("x-prerender-revalidate") === D.previewModeId,
                      revalidateOnlyGenerated: k.has(
                        "x-prerender-revalidate-if-generated"
                      ),
                    };
                  })(a, t).isOnDemandRevalidate,
                C = (w = l.get(It)) == null ? void 0 : w.value;
              (this._isEnabled = !!(!E && C && t && C === t.previewModeId)),
                (this._previewModeId = t?.previewModeId),
                (this._mutableCookies = g);
            }
            get isEnabled() {
              return this._isEnabled;
            }
            enable() {
              if (!this._previewModeId)
                throw Object.defineProperty(
                  Error(
                    "Invariant: previewProps missing previewModeId this should never happen"
                  ),
                  "__NEXT_ERROR_CODE",
                  { value: "E93", enumerable: !1, configurable: !0 }
                );
              this._mutableCookies.set({
                name: It,
                value: this._previewModeId,
                httpOnly: !0,
                sameSite: "none",
                secure: !0,
                path: "/",
              }),
                (this._isEnabled = !0);
            }
            disable() {
              this._mutableCookies.set({
                name: It,
                value: "",
                httpOnly: !0,
                sameSite: "none",
                secure: !0,
                path: "/",
                expires: new Date(0),
              }),
                (this._isEnabled = !1);
            }
          }
          function sr(n, t) {
            if (
              "x-middleware-set-cookie" in n.headers &&
              typeof n.headers["x-middleware-set-cookie"] == "string"
            ) {
              let a = n.headers["x-middleware-set-cookie"],
                l = new Headers();
              for (let g of f(a)) l.append("set-cookie", g);
              for (let g of new Ke.ResponseCookies(l).getAll()) t.set(g);
            }
          }
          var dr = b(128),
            $r = b(213),
            Xr = b.n($r),
            lr = b(809);
          class Zr {
            constructor(t, a, l) {
              (this.prev = null),
                (this.next = null),
                (this.key = t),
                (this.data = a),
                (this.size = l);
            }
          }
          class ur {
            constructor() {
              (this.prev = null), (this.next = null);
            }
          }
          class cr {
            constructor(t, a) {
              (this.cache = new Map()),
                (this.totalSize = 0),
                (this.maxSize = t),
                (this.calculateSize = a),
                (this.head = new ur()),
                (this.tail = new ur()),
                (this.head.next = this.tail),
                (this.tail.prev = this.head);
            }
            addToHead(t) {
              (t.prev = this.head),
                (t.next = this.head.next),
                (this.head.next.prev = t),
                (this.head.next = t);
            }
            removeNode(t) {
              (t.prev.next = t.next), (t.next.prev = t.prev);
            }
            moveToHead(t) {
              this.removeNode(t), this.addToHead(t);
            }
            removeTail() {
              let t = this.tail.prev;
              return this.removeNode(t), t;
            }
            set(t, a) {
              let l =
                (this.calculateSize == null
                  ? void 0
                  : this.calculateSize.call(this, a)) ?? 1;
              if (l > this.maxSize)
                return void console.warn("Single item size exceeds maxSize");
              let g = this.cache.get(t);
              if (g)
                (g.data = a),
                  (this.totalSize = this.totalSize - g.size + l),
                  (g.size = l),
                  this.moveToHead(g);
              else {
                let w = new Zr(t, a, l);
                this.cache.set(t, w), this.addToHead(w), (this.totalSize += l);
              }
              for (; this.totalSize > this.maxSize && this.cache.size > 0; ) {
                let w = this.removeTail();
                this.cache.delete(w.key), (this.totalSize -= w.size);
              }
            }
            has(t) {
              return this.cache.has(t);
            }
            get(t) {
              let a = this.cache.get(t);
              if (a) return this.moveToHead(a), a.data;
            }
            *[Symbol.iterator]() {
              let t = this.head.next;
              for (; t && t !== this.tail; ) {
                let a = t;
                yield [a.key, a.data], (t = t.next);
              }
            }
            remove(t) {
              let a = this.cache.get(t);
              a &&
                (this.removeNode(a),
                this.cache.delete(t),
                (this.totalSize -= a.size));
            }
            get size() {
              return this.cache.size;
            }
            get currentSize() {
              return this.totalSize;
            }
          }
          b(356).Buffer,
            new cr(52428800, (n) => n.size),
            process.env.NEXT_PRIVATE_DEBUG_CACHE &&
              console.debug.bind(console, "DefaultCacheHandler:"),
            process.env.NEXT_PRIVATE_DEBUG_CACHE,
            Symbol.for("@next/cache-handlers");
          let pr = Symbol.for("@next/cache-handlers-map"),
            fr = Symbol.for("@next/cache-handlers-set"),
            Mt = Y;
          function hr() {
            if (Mt[pr]) return Mt[pr].entries();
          }
          async function Yr(n, t) {
            if (!n) return t();
            let a = _r(n);
            try {
              return await t();
            } finally {
              let l = (function (g, w) {
                let E = new Set(g.pendingRevalidatedTags),
                  C = new Set(g.pendingRevalidateWrites);
                return {
                  pendingRevalidatedTags: w.pendingRevalidatedTags.filter(
                    (G) => !E.has(G)
                  ),
                  pendingRevalidates: Object.fromEntries(
                    Object.entries(w.pendingRevalidates).filter(
                      ([G]) => !(G in g.pendingRevalidates)
                    )
                  ),
                  pendingRevalidateWrites: w.pendingRevalidateWrites.filter(
                    (G) => !C.has(G)
                  ),
                };
              })(a, _r(n));
              await Qr(n, l);
            }
          }
          function _r(n) {
            return {
              pendingRevalidatedTags: n.pendingRevalidatedTags
                ? [...n.pendingRevalidatedTags]
                : [],
              pendingRevalidates: { ...n.pendingRevalidates },
              pendingRevalidateWrites: n.pendingRevalidateWrites
                ? [...n.pendingRevalidateWrites]
                : [],
            };
          }
          async function Jr(n, t) {
            if (n.length === 0) return;
            let a = [];
            t && a.push(t.revalidateTag(n));
            let l = (function () {
              if (Mt[fr]) return Mt[fr].values();
            })();
            if (l) for (let g of l) a.push(g.expireTags(...n));
            await Promise.all(a);
          }
          async function Qr(n, t) {
            let a = t?.pendingRevalidatedTags ?? n.pendingRevalidatedTags ?? [],
              l = t?.pendingRevalidates ?? n.pendingRevalidates ?? {},
              g = t?.pendingRevalidateWrites ?? n.pendingRevalidateWrites ?? [];
            return Promise.all([
              Jr(a, n.incrementalCache),
              ...Object.values(l),
              ...g,
            ]);
          }
          let At = Object.defineProperty(
            Error(
              "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E504", enumerable: !1, configurable: !0 }
          );
          class mr {
            disable() {
              throw At;
            }
            getStore() {}
            run() {
              throw At;
            }
            exit() {
              throw At;
            }
            enterWith() {
              throw At;
            }
            static bind(t) {
              return t;
            }
          }
          let ct = typeof Y < "u" && Y.AsyncLocalStorage,
            gr = ct ? new ct() : new mr();
          class en {
            constructor({ waitUntil: t, onClose: a, onTaskError: l }) {
              (this.workUnitStores = new Set()),
                (this.waitUntil = t),
                (this.onClose = a),
                (this.onTaskError = l),
                (this.callbackQueue = new (Xr())()),
                this.callbackQueue.pause();
            }
            after(t) {
              if (ir(t))
                this.waitUntil || yr(),
                  this.waitUntil(
                    t.catch((a) => this.reportTaskError("promise", a))
                  );
              else if (typeof t == "function") this.addCallback(t);
              else
                throw Object.defineProperty(
                  Error("`after()`: Argument must be a promise or a function"),
                  "__NEXT_ERROR_CODE",
                  { value: "E50", enumerable: !1, configurable: !0 }
                );
            }
            addCallback(t) {
              var a;
              this.waitUntil || yr();
              let l = dr.FP.getStore();
              l && this.workUnitStores.add(l);
              let g = gr.getStore(),
                w = g ? g.rootTaskSpawnPhase : l?.phase;
              this.runCallbacksOnClosePromise ||
                ((this.runCallbacksOnClosePromise = this.runCallbacksOnClose()),
                this.waitUntil(this.runCallbacksOnClosePromise));
              let E =
                ((a = async () => {
                  try {
                    await gr.run({ rootTaskSpawnPhase: w }, () => t());
                  } catch (C) {
                    this.reportTaskError("function", C);
                  }
                }),
                ct ? ct.bind(a) : mr.bind(a));
              this.callbackQueue.add(E);
            }
            async runCallbacksOnClose() {
              return (
                await new Promise((t) => this.onClose(t)), this.runCallbacks()
              );
            }
            async runCallbacks() {
              if (this.callbackQueue.size === 0) return;
              for (let a of this.workUnitStores) a.phase = "after";
              let t = ot.J.getStore();
              if (!t)
                throw Object.defineProperty(
                  new lr.z("Missing workStore in AfterContext.runCallbacks"),
                  "__NEXT_ERROR_CODE",
                  { value: "E547", enumerable: !1, configurable: !0 }
                );
              return Yr(
                t,
                () => (this.callbackQueue.start(), this.callbackQueue.onIdle())
              );
            }
            reportTaskError(t, a) {
              if (
                (console.error(
                  t === "promise"
                    ? "A promise passed to `after()` rejected:"
                    : "An error occurred in a function passed to `after()`:",
                  a
                ),
                this.onTaskError)
              )
                try {
                  this.onTaskError == null || this.onTaskError.call(this, a);
                } catch (l) {
                  console.error(
                    Object.defineProperty(
                      new lr.z(
                        "`onTaskError` threw while handling an error thrown from an `after` task",
                        { cause: l }
                      ),
                      "__NEXT_ERROR_CODE",
                      { value: "E569", enumerable: !1, configurable: !0 }
                    )
                  );
                }
            }
          }
          function yr() {
            throw Object.defineProperty(
              Error(
                "`after()` will not work correctly, because `waitUntil` is not available in the current environment."
              ),
              "__NEXT_ERROR_CODE",
              { value: "E91", enumerable: !1, configurable: !0 }
            );
          }
          function vr(n) {
            let t,
              a = {
                then: (l, g) => (
                  t || (t = n()),
                  t
                    .then((w) => {
                      a.value = w;
                    })
                    .catch(() => {}),
                  t.then(l, g)
                ),
              };
            return a;
          }
          class tn {
            onClose(t) {
              if (this.isClosed)
                throw Object.defineProperty(
                  Error("Cannot subscribe to a closed CloseController"),
                  "__NEXT_ERROR_CODE",
                  { value: "E365", enumerable: !1, configurable: !0 }
                );
              this.target.addEventListener("close", t), this.listeners++;
            }
            dispatchClose() {
              if (this.isClosed)
                throw Object.defineProperty(
                  Error("Cannot close a CloseController multiple times"),
                  "__NEXT_ERROR_CODE",
                  { value: "E229", enumerable: !1, configurable: !0 }
                );
              this.listeners > 0 &&
                this.target.dispatchEvent(new Event("close")),
                (this.isClosed = !0);
            }
            constructor() {
              (this.target = new EventTarget()),
                (this.listeners = 0),
                (this.isClosed = !1);
            }
          }
          function wr() {
            return {
              previewModeId: process.env.__NEXT_PREVIEW_MODE_ID || "",
              previewModeSigningKey:
                process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || "",
              previewModeEncryptionKey:
                process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || "",
            };
          }
          let rn = Symbol.for("@next/request-context");
          async function nn(n, t, a) {
            let l = [],
              g = a && a.size > 0;
            for (let w of ((E) => {
              let C = ["/layout"];
              if (E.startsWith("/")) {
                let G = E.split("/");
                for (let D = 1; D < G.length + 1; D++) {
                  let k = G.slice(0, D).join("/");
                  k &&
                    (k.endsWith("/page") ||
                      k.endsWith("/route") ||
                      (k = `${k}${k.endsWith("/") ? "" : "/"}layout`),
                    C.push(k));
                }
              }
              return C;
            })(n))
              (w = `${p}${w}`), l.push(w);
            if (t.pathname && !g) {
              let w = `${p}${t.pathname}`;
              l.push(w);
            }
            return {
              tags: l,
              expirationsByCacheKind: (function (w) {
                let E = new Map(),
                  C = hr();
                if (C)
                  for (let [G, D] of C)
                    "getExpiration" in D &&
                      E.set(
                        G,
                        vr(async () => D.getExpiration(...w))
                      );
                return E;
              })(l),
            };
          }
          class an extends ht {
            constructor(t) {
              super(t.input, t.init), (this.sourcePage = t.page);
            }
            get request() {
              throw Object.defineProperty(
                new o({ page: this.sourcePage }),
                "__NEXT_ERROR_CODE",
                { value: "E394", enumerable: !1, configurable: !0 }
              );
            }
            respondWith() {
              throw Object.defineProperty(
                new o({ page: this.sourcePage }),
                "__NEXT_ERROR_CODE",
                { value: "E394", enumerable: !1, configurable: !0 }
              );
            }
            waitUntil() {
              throw Object.defineProperty(
                new o({ page: this.sourcePage }),
                "__NEXT_ERROR_CODE",
                { value: "E394", enumerable: !1, configurable: !0 }
              );
            }
          }
          let on = {
              keys: (n) => Array.from(n.keys()),
              get: (n, t) => n.get(t) ?? void 0,
            },
            Ht = (n, t) => or().withPropagatedContext(n.headers, t, on),
            br = !1;
          async function sn(n) {
            var t;
            let a, l;
            if (
              !br &&
              ((br = !0), process.env.NEXT_PRIVATE_TEST_PROXY === "true")
            ) {
              let { interceptTestApis: B, wrapRequestHandler: ae } = b(720);
              B(), (Ht = ae(Ht));
            }
            await d();
            let g = Y.__BUILD_MANIFEST !== void 0;
            n.request.url = n.request.url.replace(/\.rsc($|\?)/, "$1");
            let w = n.bypassNextUrl
              ? new URL(n.request.url)
              : new Be(n.request.url, {
                  headers: n.request.headers,
                  nextConfig: n.request.nextConfig,
                });
            for (let B of [...w.searchParams.keys()]) {
              let ae = w.searchParams.getAll(B),
                ye = (function (Ee) {
                  for (let xe of ["nxtP", "nxtI"])
                    if (Ee !== xe && Ee.startsWith(xe))
                      return Ee.substring(xe.length);
                  return null;
                })(B);
              if (ye) {
                for (let Ee of (w.searchParams.delete(ye), ae))
                  w.searchParams.append(ye, Ee);
                w.searchParams.delete(B);
              }
            }
            let E = "17zx8svI0hFmbQcer3XDm";
            "buildId" in w && ((E = w.buildId || ""), (w.buildId = ""));
            let C = (function (B) {
                let ae = new Headers();
                for (let [ye, Ee] of Object.entries(B))
                  for (let xe of Array.isArray(Ee) ? Ee : [Ee])
                    xe !== void 0 &&
                      (typeof xe == "number" && (xe = xe.toString()),
                      ae.append(ye, xe));
                return ae;
              })(n.request.headers),
              G = C.has("x-nextjs-data"),
              D = C.get("rsc") === "1";
            G && w.pathname === "/index" && (w.pathname = "/");
            let k = new Map();
            if (!g)
              for (let B of Pt) {
                let ae = C.get(B);
                ae !== null && (k.set(B, ae), C.delete(B));
              }
            let W = w.searchParams.get(Qe),
              J = new an({
                page: n.page,
                input: (function (B) {
                  let ae = typeof B == "string",
                    ye = ae ? new URL(B) : B;
                  return ye.searchParams.delete(Qe), ae ? ye.toString() : ye;
                })(w).toString(),
                init: {
                  body: n.request.body,
                  headers: C,
                  method: n.request.method,
                  nextConfig: n.request.nextConfig,
                  signal: n.request.signal,
                },
              });
            G &&
              Object.defineProperty(J, "__isData", {
                enumerable: !1,
                value: !0,
              }),
              !Y.__incrementalCacheShared &&
                n.IncrementalCache &&
                (Y.__incrementalCache = new n.IncrementalCache({
                  CurCacheHandler: n.incrementalCacheHandler,
                  minimalMode: !0,
                  fetchCacheKeyPrefix: "",
                  dev: !1,
                  requestHeaders: n.request.headers,
                  getPrerenderManifest: () => ({
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: wr(),
                  }),
                }));
            let we =
                n.request.waitUntil ??
                ((t = (function () {
                  let B = Y[rn];
                  return B?.get();
                })()) == null
                  ? void 0
                  : t.waitUntil),
              _e = new V({
                request: J,
                page: n.page,
                context: we ? { waitUntil: we } : void 0,
              });
            if (
              (a = await Ht(J, () => {
                if (n.page === "/middleware" || n.page === "/src/middleware") {
                  let B = _e.waitUntil.bind(_e),
                    ae = new tn();
                  return or().trace(
                    ut.execute,
                    {
                      spanName: `middleware ${J.method} ${J.nextUrl.pathname}`,
                      attributes: {
                        "http.target": J.nextUrl.pathname,
                        "http.method": J.method,
                      },
                    },
                    async () => {
                      try {
                        var ye, Ee, xe, se, ne, ie;
                        let le = wr(),
                          Z = await nn("/", J.nextUrl, null),
                          q =
                            ((ne = J.nextUrl),
                            (ie = (oe) => {
                              l = oe;
                            }),
                            (function (
                              oe,
                              j,
                              ee,
                              U,
                              he,
                              te,
                              ue,
                              me,
                              ke,
                              Ie,
                              je,
                              Me
                            ) {
                              function Ge(Pe) {
                                ee && ee.setHeader("Set-Cookie", Pe);
                              }
                              let ge = {};
                              return {
                                type: "request",
                                phase: oe,
                                implicitTags: te,
                                url: {
                                  pathname: U.pathname,
                                  search: U.search ?? "",
                                },
                                rootParams: he,
                                get headers() {
                                  return (
                                    ge.headers ||
                                      (ge.headers = (function (Pe) {
                                        let Ye = Fe.from(Pe);
                                        for (let st of Pt) Ye.delete(st);
                                        return Fe.seal(Ye);
                                      })(j.headers)),
                                    ge.headers
                                  );
                                },
                                get cookies() {
                                  if (!ge.cookies) {
                                    let Pe = new Ke.RequestCookies(
                                      Fe.from(j.headers)
                                    );
                                    sr(j, Pe), (ge.cookies = yt.seal(Pe));
                                  }
                                  return ge.cookies;
                                },
                                set cookies(Pe) {
                                  ge.cookies = Pe;
                                },
                                get mutableCookies() {
                                  if (!ge.mutableCookies) {
                                    let Pe = (function (Ye, st) {
                                      let Bt = new Ke.RequestCookies(
                                        Fe.from(Ye)
                                      );
                                      return Ot.wrap(Bt, st);
                                    })(j.headers, ue || (ee ? Ge : void 0));
                                    sr(j, Pe), (ge.mutableCookies = Pe);
                                  }
                                  return ge.mutableCookies;
                                },
                                get userspaceMutableCookies() {
                                  return (
                                    ge.userspaceMutableCookies ||
                                      (ge.userspaceMutableCookies = (function (
                                        Pe
                                      ) {
                                        let Ye = new Proxy(Pe.mutableCookies, {
                                          get(st, Bt, wn) {
                                            switch (Bt) {
                                              case "delete":
                                                return function (...Qt) {
                                                  return (
                                                    Le(Pe, "cookies().delete"),
                                                    st.delete(...Qt),
                                                    Ye
                                                  );
                                                };
                                              case "set":
                                                return function (...Qt) {
                                                  return (
                                                    Le(Pe, "cookies().set"),
                                                    st.set(...Qt),
                                                    Ye
                                                  );
                                                };
                                              default:
                                                return Ne.get(st, Bt, wn);
                                            }
                                          },
                                        });
                                        return Ye;
                                      })(this)),
                                    ge.userspaceMutableCookies
                                  );
                                },
                                get draftMode() {
                                  return (
                                    ge.draftMode ||
                                      (ge.draftMode = new Kr(
                                        ke,
                                        j,
                                        this.cookies,
                                        this.mutableCookies
                                      )),
                                    ge.draftMode
                                  );
                                },
                                renderResumeDataCache: me ?? null,
                                isHmrRefresh: Ie,
                                serverComponentsHmrCache:
                                  je || Y.__serverComponentsHmrCache,
                                devFallbackParams: null,
                              };
                            })(
                              "action",
                              J,
                              void 0,
                              ne,
                              {},
                              Z,
                              ie,
                              void 0,
                              le,
                              !1,
                              void 0,
                              null
                            )),
                          F = (function ({
                            page: oe,
                            renderOpts: j,
                            isPrefetchRequest: ee,
                            buildId: U,
                            previouslyRevalidatedTags: he,
                          }) {
                            var te;
                            let ue =
                                !j.shouldWaitOnAllReady &&
                                !j.supportsDynamicResponse &&
                                !j.isDraftMode &&
                                !j.isPossibleServerAction,
                              me = j.dev ?? !1,
                              ke =
                                me ||
                                (ue &&
                                  (!!process.env.NEXT_DEBUG_BUILD ||
                                    process.env.NEXT_SSG_FETCH_METRICS ===
                                      "1")),
                              Ie = {
                                isStaticGeneration: ue,
                                page: oe,
                                route: (te = oe
                                  .split("/")
                                  .reduce(
                                    (je, Me, Ge, ge) =>
                                      Me
                                        ? (Me[0] === "(" && Me.endsWith(")")) ||
                                          Me[0] === "@" ||
                                          ((Me === "page" || Me === "route") &&
                                            Ge === ge.length - 1)
                                          ? je
                                          : je + "/" + Me
                                        : je,
                                    ""
                                  )).startsWith("/")
                                  ? te
                                  : "/" + te,
                                incrementalCache:
                                  j.incrementalCache || Y.__incrementalCache,
                                cacheLifeProfiles: j.cacheLifeProfiles,
                                isRevalidate: j.isRevalidate,
                                isBuildTimePrerendering: j.nextExport,
                                hasReadableErrorStacks:
                                  j.hasReadableErrorStacks,
                                fetchCache: j.fetchCache,
                                isOnDemandRevalidate: j.isOnDemandRevalidate,
                                isDraftMode: j.isDraftMode,
                                isPrefetchRequest: ee,
                                buildId: U,
                                reactLoadableManifest:
                                  j?.reactLoadableManifest || {},
                                assetPrefix: j?.assetPrefix || "",
                                afterContext: (function (je) {
                                  let {
                                    waitUntil: Me,
                                    onClose: Ge,
                                    onAfterTaskError: ge,
                                  } = je;
                                  return new en({
                                    waitUntil: Me,
                                    onClose: Ge,
                                    onTaskError: ge,
                                  });
                                })(j),
                                cacheComponentsEnabled:
                                  j.experimental.cacheComponents,
                                dev: me,
                                previouslyRevalidatedTags: he,
                                refreshTagsByCacheKind: (function () {
                                  let je = new Map(),
                                    Me = hr();
                                  if (Me)
                                    for (let [Ge, ge] of Me)
                                      "refreshTags" in ge &&
                                        je.set(
                                          Ge,
                                          vr(async () => ge.refreshTags())
                                        );
                                  return je;
                                })(),
                                runInCleanSnapshot: ct
                                  ? ct.snapshot()
                                  : function (je, ...Me) {
                                      return je(...Me);
                                    },
                                shouldTrackFetchMetrics: ke,
                              };
                            return (j.store = Ie), Ie;
                          })({
                            page: "/",
                            renderOpts: {
                              cacheLifeProfiles:
                                (Ee = n.request.nextConfig) == null ||
                                (ye = Ee.experimental) == null
                                  ? void 0
                                  : ye.cacheLife,
                              experimental: {
                                isRoutePPREnabled: !1,
                                cacheComponents: !1,
                                authInterrupts: !!(
                                  !(
                                    (se = n.request.nextConfig) == null ||
                                    (xe = se.experimental) == null
                                  ) && xe.authInterrupts
                                ),
                              },
                              supportsDynamicResponse: !0,
                              waitUntil: B,
                              onClose: ae.onClose.bind(ae),
                              onAfterTaskError: void 0,
                            },
                            isPrefetchRequest: J.headers.get(gt) === "1",
                            buildId: E ?? "",
                            previouslyRevalidatedTags: [],
                          });
                        return await ot.J.run(F, () =>
                          dr.FP.run(q, n.handler, J, _e)
                        );
                      } finally {
                        setTimeout(() => {
                          ae.dispatchClose();
                        }, 0);
                      }
                    }
                  );
                }
                return n.handler(J, _e);
              })) &&
              !(a instanceof Response)
            )
              throw Object.defineProperty(
                TypeError("Expected an instance of Response to be returned"),
                "__NEXT_ERROR_CODE",
                { value: "E567", enumerable: !1, configurable: !0 }
              );
            a && l && a.headers.set("set-cookie", l);
            let fe = a?.headers.get("x-middleware-rewrite");
            if (a && fe && (D || !g)) {
              let B = new Be(fe, {
                forceLocale: !0,
                headers: n.request.headers,
                nextConfig: n.request.nextConfig,
              });
              g ||
                B.host !== J.nextUrl.host ||
                ((B.buildId = E || B.buildId),
                a.headers.set("x-middleware-rewrite", String(B)));
              let { url: ae, isRelative: ye } = mt(B.toString(), w.toString());
              !g && G && a.headers.set("x-nextjs-rewrite", ae),
                D &&
                  ye &&
                  (w.pathname !== B.pathname &&
                    a.headers.set("x-nextjs-rewritten-path", B.pathname),
                  w.search !== B.search &&
                    a.headers.set(
                      "x-nextjs-rewritten-query",
                      B.search.slice(1)
                    ));
            }
            if (a && fe && D && W) {
              let B = new URL(fe);
              B.searchParams.has(Qe) ||
                (B.searchParams.set(Qe, W),
                a.headers.set("x-middleware-rewrite", B.toString()));
            }
            let Q = a?.headers.get("Location");
            if (a && Q && !g) {
              let B = new Be(Q, {
                forceLocale: !1,
                headers: n.request.headers,
                nextConfig: n.request.nextConfig,
              });
              (a = new Response(a.body, a)),
                B.host === w.host &&
                  ((B.buildId = E || B.buildId),
                  a.headers.set("Location", B.toString())),
                G &&
                  (a.headers.delete("Location"),
                  a.headers.set(
                    "x-nextjs-redirect",
                    mt(B.toString(), w.toString()).url
                  ));
            }
            let Te = a || He.next(),
              Ce = Te.headers.get("x-middleware-override-headers"),
              Ve = [];
            if (Ce) {
              for (let [B, ae] of k)
                Te.headers.set(`x-middleware-request-${B}`, ae), Ve.push(B);
              Ve.length > 0 &&
                Te.headers.set(
                  "x-middleware-override-headers",
                  Ce + "," + Ve.join(",")
                );
            }
            return {
              response: Te,
              waitUntil:
                (_e[I].kind === "internal"
                  ? Promise.all(_e[I].promises).then(() => {})
                  : void 0) ?? Promise.resolve(),
              fetchMetrics: J.fetchMetrics,
            };
          }
          b(449),
            typeof URLPattern > "u" || URLPattern,
            b(107),
            b(979),
            b(770),
            b(918);
          let { env: bt, stdout: xr } =
              ((P = Y) == null ? void 0 : P.process) ?? {},
            dn =
              bt &&
              !bt.NO_COLOR &&
              (bt.FORCE_COLOR || (xr?.isTTY && !bt.CI && bt.TERM !== "dumb")),
            Sr = (n, t, a, l) => {
              let g = n.substring(0, l) + a,
                w = n.substring(l + t.length),
                E = w.indexOf(t);
              return ~E ? g + Sr(w, t, a, E) : g + w;
            },
            be = (n, t, a = n) =>
              dn
                ? (l) => {
                    let g = "" + l,
                      w = g.indexOf(t, n.length);
                    return ~w ? n + Sr(g, t, a, w) + t : n + g + t;
                  }
                : String,
            pt = be("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m");
          be("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
            be("\x1B[3m", "\x1B[23m"),
            be("\x1B[4m", "\x1B[24m"),
            be("\x1B[7m", "\x1B[27m"),
            be("\x1B[8m", "\x1B[28m"),
            be("\x1B[9m", "\x1B[29m"),
            be("\x1B[30m", "\x1B[39m");
          let ln = be("\x1B[31m", "\x1B[39m"),
            un = be("\x1B[32m", "\x1B[39m"),
            cn = be("\x1B[33m", "\x1B[39m");
          be("\x1B[34m", "\x1B[39m");
          let pn = be("\x1B[35m", "\x1B[39m");
          be("\x1B[38;2;173;127;168m", "\x1B[39m"), be("\x1B[36m", "\x1B[39m");
          let Cr = be("\x1B[37m", "\x1B[39m");
          function Ft(n, t, a) {
            return typeof n == "string" ? n : n[t] || a;
          }
          function We(n) {
            let t = (function () {
                try {
                  return process.env._next_intl_trailing_slash === "true";
                } catch {
                  return !1;
                }
              })(),
              [a, ...l] = n.split("#"),
              g = l.join("#"),
              w = a;
            if (w !== "/") {
              let E = w.endsWith("/");
              t && !E ? (w += "/") : !t && E && (w = w.slice(0, -1));
            }
            return g && (w += "#" + g), w;
          }
          function Nt(n, t) {
            let a = We(n),
              l = We(t);
            return Er(a).test(l);
          }
          function Lt(n, t) {
            return (t.mode !== "never" && t.prefixes?.[n]) || "/" + n;
          }
          function Er(n) {
            let t = n
              .replace(/\/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?")
              .replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?")
              .replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)")
              .replace(/\[([^\]]+)\]/g, "([^/]+)");
            return RegExp(`^${t}$`);
          }
          function kt(n) {
            return n.includes("[[...");
          }
          function Dt(n) {
            return n.includes("[...");
          }
          function qt(n) {
            return n.includes("[");
          }
          function fn(n, t) {
            let a = n.split("/"),
              l = t.split("/"),
              g = Math.max(a.length, l.length);
            for (let w = 0; w < g; w++) {
              let E = a[w],
                C = l[w];
              if (!E && C) return -1;
              if (E && !C) return 1;
              if (E || C) {
                if (!qt(E) && qt(C)) return -1;
                if (qt(E) && !qt(C)) return 1;
                if (!Dt(E) && Dt(C)) return -1;
                if (Dt(E) && !Dt(C)) return 1;
                if (!kt(E) && kt(C)) return -1;
                if (kt(E) && !kt(C)) return 1;
              }
            }
            return 0;
          }
          function zt(n, t, a, l) {
            let g = "";
            return (
              (g += (function (w, E) {
                if (!E) return w;
                let C = (w = w.replace(/\[\[/g, "[").replace(/\]\]/g, "]"));
                return (
                  Object.entries(E).forEach(([G, D]) => {
                    C = C.replace(`[${G}]`, D);
                  }),
                  C
                );
              })(
                a,
                (function (w, E) {
                  let C = We(E),
                    G = We(w),
                    D = Er(G).exec(C);
                  if (!D) return;
                  let k = {},
                    W = G.match(/\[([^\]]+)\]/g) ?? [];
                  for (let J = 1; J < D.length; J++) {
                    let we = W[J - 1];
                    if (!we) continue;
                    let _e = we.replace(/[[\]]/g, ""),
                      fe = D[J] ?? "";
                    k[_e] = fe;
                  }
                  return k;
                })(t, n)
              )),
              (g = We(g))
            );
          }
          function Wt(n, t, a) {
            n.endsWith("/") || (n += "/");
            let l = Kt(t, a),
              g = RegExp(
                `^(${l
                  .map(([, C]) => C.replaceAll("/", "\\/"))
                  .join("|")})/(.*)`,
                "i"
              ),
              w = n.match(g),
              E = w ? "/" + w[2] : n;
            return E !== "/" && (E = We(E)), E;
          }
          function Kt(n, t, a = !0) {
            let l = n.map((g) => [g, Lt(g, t)]);
            return a && l.sort((g, w) => w[1].length - g[1].length), l;
          }
          function $t(n, t, a, l) {
            let g = Kt(t, a);
            for (let [w, E] of (l &&
              g.sort(([C], [G]) => {
                if (C === l.defaultLocale) return -1;
                if (G === l.defaultLocale) return 1;
                let D = l.locales.includes(C),
                  k = l.locales.includes(G);
                return D && !k ? -1 : !D && k ? 1 : 0;
              }),
            g)) {
              let C, G;
              if (n === E || n.startsWith(E + "/")) C = G = !0;
              else {
                let D = n.toLowerCase(),
                  k = E.toLowerCase();
                (D === k || D.startsWith(k + "/")) && ((C = !1), (G = !0));
              }
              if (G)
                return {
                  locale: w,
                  prefix: E,
                  matchedPrefix: n.slice(0, E.length),
                  exact: C,
                };
            }
          }
          function nt(n, t, a) {
            var l;
            let g,
              w = n;
            return (
              t &&
                ((l = w),
                (g = t),
                /^\/(\?.*)?$/.test(l) && (l = l.slice(1)),
                (w = g += l)),
              a && (w += a),
              w
            );
          }
          function Pr(n) {
            return n.get("x-forwarded-host") ?? n.get("host") ?? void 0;
          }
          function xt(n, t) {
            return t.defaultLocale === n || t.locales.includes(n);
          }
          function Rr(n, t, a) {
            let l;
            return (
              n && xt(t, n) && (l = n),
              l || (l = a.find((g) => g.defaultLocale === t)),
              l || (l = a.find((g) => g.locales.includes(t))),
              l
            );
          }
          be("\x1B[90m", "\x1B[39m"),
            be("\x1B[40m", "\x1B[49m"),
            be("\x1B[41m", "\x1B[49m"),
            be("\x1B[42m", "\x1B[49m"),
            be("\x1B[43m", "\x1B[49m"),
            be("\x1B[44m", "\x1B[49m"),
            be("\x1B[45m", "\x1B[49m"),
            be("\x1B[46m", "\x1B[49m"),
            be("\x1B[47m", "\x1B[49m"),
            Cr(pt("\u25CB")),
            ln(pt("\u2A2F")),
            cn(pt("\u26A0")),
            Cr(pt(" ")),
            un(pt("\u2713")),
            pn(pt("\xBB")),
            new cr(1e4, (n) => n.length);
          function jt(n, t, a) {
            if (a || arguments.length == 2)
              for (var l, g = 0, w = t.length; g < w; g++)
                (!l && g in t) ||
                  (l || (l = Array.prototype.slice.call(t, 0, g)),
                  (l[g] = t[g]));
            return n.concat(l || Array.prototype.slice.call(t));
          }
          var Xt =
              (typeof SuppressedError == "function" && SuppressedError,
              {
                supplemental: {
                  languageMatching: {
                    "written-new": [
                      {
                        paradigmLocales: {
                          _locales: "en en_GB es es_419 pt_BR pt_PT",
                        },
                      },
                      { $enUS: { _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI" } },
                      { $cnsar: { _value: "HK+MO" } },
                      { $americas: { _value: "019" } },
                      { $maghreb: { _value: "MA+DZ+TN+LY+MR+EH" } },
                      { no: { _desired: "nb", _distance: "1" } },
                      { bs: { _desired: "hr", _distance: "4" } },
                      { bs: { _desired: "sh", _distance: "4" } },
                      { hr: { _desired: "sh", _distance: "4" } },
                      { sr: { _desired: "sh", _distance: "4" } },
                      { aa: { _desired: "ssy", _distance: "4" } },
                      {
                        de: {
                          _desired: "gsw",
                          _distance: "4",
                          _oneway: "true",
                        },
                      },
                      {
                        de: { _desired: "lb", _distance: "4", _oneway: "true" },
                      },
                      { no: { _desired: "da", _distance: "8" } },
                      { nb: { _desired: "da", _distance: "8" } },
                      {
                        ru: {
                          _desired: "ab",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ach",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        nl: {
                          _desired: "af",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ak",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "am",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        es: {
                          _desired: "ay",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        ru: {
                          _desired: "az",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        ur: {
                          _desired: "bal",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        ru: {
                          _desired: "be",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "bem",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        hi: {
                          _desired: "bh",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "bn",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "bo",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        fr: {
                          _desired: "br",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        es: {
                          _desired: "ca",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        fil: {
                          _desired: "ceb",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "chr",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "ckb",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        fr: {
                          _desired: "co",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        fr: {
                          _desired: "crs",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      { sk: { _desired: "cs", _distance: "20" } },
                      {
                        en: {
                          _desired: "cy",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ee",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "eo",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        es: {
                          _desired: "eu",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        da: {
                          _desired: "fo",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        nl: {
                          _desired: "fy",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ga",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "gaa",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "gd",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        es: {
                          _desired: "gl",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        es: {
                          _desired: "gn",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        hi: {
                          _desired: "gu",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ha",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "haw",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        fr: {
                          _desired: "ht",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        ru: {
                          _desired: "hy",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ia",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ig",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "is",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        id: {
                          _desired: "jv",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ka",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        fr: {
                          _desired: "kg",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        ru: {
                          _desired: "kk",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "km",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "kn",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "kri",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        tr: {
                          _desired: "ku",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        ru: {
                          _desired: "ky",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        it: {
                          _desired: "la",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "lg",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        fr: {
                          _desired: "ln",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "lo",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "loz",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        fr: {
                          _desired: "lua",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        hi: {
                          _desired: "mai",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "mfe",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        fr: {
                          _desired: "mg",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "mi",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ml",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        ru: {
                          _desired: "mn",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        hi: {
                          _desired: "mr",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        id: {
                          _desired: "ms",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "mt",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "my",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ne",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      { nb: { _desired: "nn", _distance: "20" } },
                      { no: { _desired: "nn", _distance: "20" } },
                      {
                        en: {
                          _desired: "nso",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ny",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "nyn",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        fr: {
                          _desired: "oc",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "om",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "or",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "pa",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "pcm",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ps",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        es: {
                          _desired: "qu",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        de: {
                          _desired: "rm",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "rn",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        fr: {
                          _desired: "rw",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        hi: {
                          _desired: "sa",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "sd",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "si",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "sn",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "so",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "sq",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "st",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        id: {
                          _desired: "su",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "sw",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ta",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "te",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        ru: {
                          _desired: "tg",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ti",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        ru: {
                          _desired: "tk",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "tlh",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "tn",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "to",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        ru: {
                          _desired: "tt",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "tum",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "ug",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        ru: {
                          _desired: "uk",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "ur",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        ru: {
                          _desired: "uz",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        fr: {
                          _desired: "wo",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "xh",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "yi",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "yo",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "za",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        en: {
                          _desired: "zu",
                          _distance: "30",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "aao",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "abh",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "abv",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "acm",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "acq",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "acw",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "acx",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "acy",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "adf",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "aeb",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "aec",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "afb",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "ajp",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "apc",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "apd",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "arq",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "ars",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "ary",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "arz",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "auz",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "avl",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "ayh",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "ayl",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "ayn",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "ayp",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "bbz",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "pga",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "shu",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ar: {
                          _desired: "ssh",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        az: {
                          _desired: "azb",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        et: {
                          _desired: "vro",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ff: {
                          _desired: "ffm",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ff: {
                          _desired: "fub",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ff: {
                          _desired: "fue",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ff: {
                          _desired: "fuf",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ff: {
                          _desired: "fuh",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ff: {
                          _desired: "fui",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ff: {
                          _desired: "fuq",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ff: {
                          _desired: "fuv",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        gn: {
                          _desired: "gnw",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        gn: {
                          _desired: "gui",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        gn: {
                          _desired: "gun",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        gn: {
                          _desired: "nhd",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        iu: {
                          _desired: "ikt",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        kln: {
                          _desired: "enb",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        kln: {
                          _desired: "eyo",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        kln: {
                          _desired: "niq",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        kln: {
                          _desired: "oki",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        kln: {
                          _desired: "pko",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        kln: {
                          _desired: "sgc",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        kln: {
                          _desired: "tec",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        kln: {
                          _desired: "tuy",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        kok: {
                          _desired: "gom",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        kpe: {
                          _desired: "gkp",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "ida",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "lkb",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "lko",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "lks",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "lri",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "lrm",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "lsm",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "lto",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "lts",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "lwg",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "nle",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "nyd",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        luy: {
                          _desired: "rag",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        lv: {
                          _desired: "ltg",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        mg: {
                          _desired: "bhr",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        mg: {
                          _desired: "bjq",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        mg: {
                          _desired: "bmm",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        mg: {
                          _desired: "bzc",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        mg: {
                          _desired: "msh",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        mg: {
                          _desired: "skg",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        mg: {
                          _desired: "tdx",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        mg: {
                          _desired: "tkg",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        mg: {
                          _desired: "txy",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        mg: {
                          _desired: "xmv",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        mg: {
                          _desired: "xmw",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        mn: {
                          _desired: "mvf",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "bjn",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "btj",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "bve",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "bvu",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "coa",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "dup",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "hji",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "id",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "jak",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "jax",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "kvb",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "kvr",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "kxd",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "lce",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "lcf",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "liw",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "max",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "meo",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "mfa",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "mfb",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "min",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "mqg",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "msi",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "mui",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "orn",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "ors",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "pel",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "pse",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "tmw",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "urk",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "vkk",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "vkt",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "xmm",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "zlm",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ms: {
                          _desired: "zmi",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ne: {
                          _desired: "dty",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        om: {
                          _desired: "gax",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        om: {
                          _desired: "hae",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        om: {
                          _desired: "orc",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        or: {
                          _desired: "spv",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ps: {
                          _desired: "pbt",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        ps: {
                          _desired: "pst",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qub",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qud",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "quf",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qug",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "quh",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "quk",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qul",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qup",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qur",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qus",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "quw",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qux",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "quy",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qva",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qvc",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qve",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qvh",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qvi",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qvj",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qvl",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qvm",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qvn",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qvo",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qvp",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qvs",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qvw",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qvz",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qwa",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qwc",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qwh",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qws",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qxa",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qxc",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qxh",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qxl",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qxn",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qxo",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qxp",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qxr",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qxt",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qxu",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        qu: {
                          _desired: "qxw",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        sc: {
                          _desired: "sdc",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        sc: {
                          _desired: "sdn",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        sc: {
                          _desired: "sro",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        sq: {
                          _desired: "aae",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        sq: {
                          _desired: "aat",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        sq: {
                          _desired: "aln",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        syr: {
                          _desired: "aii",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        uz: {
                          _desired: "uzs",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        yi: {
                          _desired: "yih",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "cdo",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "cjy",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "cpx",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "czh",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "czo",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "gan",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "hak",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "hsn",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "lzh",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "mnp",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "nan",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "wuu",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        zh: {
                          _desired: "yue",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      { "*": { _desired: "*", _distance: "80" } },
                      {
                        "en-Latn": {
                          _desired: "am-Ethi",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "ru-Cyrl": {
                          _desired: "az-Latn",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "bn-Beng",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "zh-Hans": {
                          _desired: "bo-Tibt",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "ru-Cyrl": {
                          _desired: "hy-Armn",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "ka-Geor",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "km-Khmr",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "kn-Knda",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "lo-Laoo",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "ml-Mlym",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "my-Mymr",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "ne-Deva",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "or-Orya",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "pa-Guru",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "ps-Arab",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "sd-Arab",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "si-Sinh",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "ta-Taml",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "te-Telu",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "ti-Ethi",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "ru-Cyrl": {
                          _desired: "tk-Latn",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "ur-Arab",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "ru-Cyrl": {
                          _desired: "uz-Latn",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "en-Latn": {
                          _desired: "yi-Hebr",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      { "sr-Cyrl": { _desired: "sr-Latn", _distance: "5" } },
                      {
                        "zh-Hans": {
                          _desired: "za-Latn",
                          _distance: "10",
                          _oneway: "true",
                        },
                      },
                      {
                        "zh-Hans": {
                          _desired: "zh-Hani",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        "zh-Hant": {
                          _desired: "zh-Hani",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        "ar-Arab": {
                          _desired: "ar-Latn",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        "bn-Beng": {
                          _desired: "bn-Latn",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        "gu-Gujr": {
                          _desired: "gu-Latn",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        "hi-Deva": {
                          _desired: "hi-Latn",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        "kn-Knda": {
                          _desired: "kn-Latn",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        "ml-Mlym": {
                          _desired: "ml-Latn",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        "mr-Deva": {
                          _desired: "mr-Latn",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        "ta-Taml": {
                          _desired: "ta-Latn",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        "te-Telu": {
                          _desired: "te-Latn",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        "zh-Hans": {
                          _desired: "zh-Latn",
                          _distance: "20",
                          _oneway: "true",
                        },
                      },
                      {
                        "ja-Jpan": {
                          _desired: "ja-Latn",
                          _distance: "5",
                          _oneway: "true",
                        },
                      },
                      {
                        "ja-Jpan": {
                          _desired: "ja-Hani",
                          _distance: "5",
                          _oneway: "true",
                        },
                      },
                      {
                        "ja-Jpan": {
                          _desired: "ja-Hira",
                          _distance: "5",
                          _oneway: "true",
                        },
                      },
                      {
                        "ja-Jpan": {
                          _desired: "ja-Kana",
                          _distance: "5",
                          _oneway: "true",
                        },
                      },
                      {
                        "ja-Jpan": {
                          _desired: "ja-Hrkt",
                          _distance: "5",
                          _oneway: "true",
                        },
                      },
                      {
                        "ja-Hrkt": {
                          _desired: "ja-Hira",
                          _distance: "5",
                          _oneway: "true",
                        },
                      },
                      {
                        "ja-Hrkt": {
                          _desired: "ja-Kana",
                          _distance: "5",
                          _oneway: "true",
                        },
                      },
                      {
                        "ko-Kore": {
                          _desired: "ko-Hani",
                          _distance: "5",
                          _oneway: "true",
                        },
                      },
                      {
                        "ko-Kore": {
                          _desired: "ko-Hang",
                          _distance: "5",
                          _oneway: "true",
                        },
                      },
                      {
                        "ko-Kore": {
                          _desired: "ko-Jamo",
                          _distance: "5",
                          _oneway: "true",
                        },
                      },
                      {
                        "ko-Hang": {
                          _desired: "ko-Jamo",
                          _distance: "5",
                          _oneway: "true",
                        },
                      },
                      { "*-*": { _desired: "*-*", _distance: "50" } },
                      {
                        "ar-*-$maghreb": {
                          _desired: "ar-*-$maghreb",
                          _distance: "4",
                        },
                      },
                      {
                        "ar-*-$!maghreb": {
                          _desired: "ar-*-$!maghreb",
                          _distance: "4",
                        },
                      },
                      { "ar-*-*": { _desired: "ar-*-*", _distance: "5" } },
                      {
                        "en-*-$enUS": {
                          _desired: "en-*-$enUS",
                          _distance: "4",
                        },
                      },
                      {
                        "en-*-GB": { _desired: "en-*-$!enUS", _distance: "3" },
                      },
                      {
                        "en-*-$!enUS": {
                          _desired: "en-*-$!enUS",
                          _distance: "4",
                        },
                      },
                      { "en-*-*": { _desired: "en-*-*", _distance: "5" } },
                      {
                        "es-*-$americas": {
                          _desired: "es-*-$americas",
                          _distance: "4",
                        },
                      },
                      {
                        "es-*-$!americas": {
                          _desired: "es-*-$!americas",
                          _distance: "4",
                        },
                      },
                      { "es-*-*": { _desired: "es-*-*", _distance: "5" } },
                      {
                        "pt-*-$americas": {
                          _desired: "pt-*-$americas",
                          _distance: "4",
                        },
                      },
                      {
                        "pt-*-$!americas": {
                          _desired: "pt-*-$!americas",
                          _distance: "4",
                        },
                      },
                      { "pt-*-*": { _desired: "pt-*-*", _distance: "5" } },
                      {
                        "zh-Hant-$cnsar": {
                          _desired: "zh-Hant-$cnsar",
                          _distance: "4",
                        },
                      },
                      {
                        "zh-Hant-$!cnsar": {
                          _desired: "zh-Hant-$!cnsar",
                          _distance: "4",
                        },
                      },
                      {
                        "zh-Hant-*": { _desired: "zh-Hant-*", _distance: "5" },
                      },
                      { "*-*-*": { _desired: "*-*-*", _distance: "4" } },
                    ],
                  },
                },
              }),
            hn = {
              "001": [
                "001",
                "001-status-grouping",
                "002",
                "005",
                "009",
                "011",
                "013",
                "014",
                "015",
                "017",
                "018",
                "019",
                "021",
                "029",
                "030",
                "034",
                "035",
                "039",
                "053",
                "054",
                "057",
                "061",
                "142",
                "143",
                "145",
                "150",
                "151",
                "154",
                "155",
                "AC",
                "AD",
                "AE",
                "AF",
                "AG",
                "AI",
                "AL",
                "AM",
                "AO",
                "AQ",
                "AR",
                "AS",
                "AT",
                "AU",
                "AW",
                "AX",
                "AZ",
                "BA",
                "BB",
                "BD",
                "BE",
                "BF",
                "BG",
                "BH",
                "BI",
                "BJ",
                "BL",
                "BM",
                "BN",
                "BO",
                "BQ",
                "BR",
                "BS",
                "BT",
                "BV",
                "BW",
                "BY",
                "BZ",
                "CA",
                "CC",
                "CD",
                "CF",
                "CG",
                "CH",
                "CI",
                "CK",
                "CL",
                "CM",
                "CN",
                "CO",
                "CP",
                "CQ",
                "CR",
                "CU",
                "CV",
                "CW",
                "CX",
                "CY",
                "CZ",
                "DE",
                "DG",
                "DJ",
                "DK",
                "DM",
                "DO",
                "DZ",
                "EA",
                "EC",
                "EE",
                "EG",
                "EH",
                "ER",
                "ES",
                "ET",
                "EU",
                "EZ",
                "FI",
                "FJ",
                "FK",
                "FM",
                "FO",
                "FR",
                "GA",
                "GB",
                "GD",
                "GE",
                "GF",
                "GG",
                "GH",
                "GI",
                "GL",
                "GM",
                "GN",
                "GP",
                "GQ",
                "GR",
                "GS",
                "GT",
                "GU",
                "GW",
                "GY",
                "HK",
                "HM",
                "HN",
                "HR",
                "HT",
                "HU",
                "IC",
                "ID",
                "IE",
                "IL",
                "IM",
                "IN",
                "IO",
                "IQ",
                "IR",
                "IS",
                "IT",
                "JE",
                "JM",
                "JO",
                "JP",
                "KE",
                "KG",
                "KH",
                "KI",
                "KM",
                "KN",
                "KP",
                "KR",
                "KW",
                "KY",
                "KZ",
                "LA",
                "LB",
                "LC",
                "LI",
                "LK",
                "LR",
                "LS",
                "LT",
                "LU",
                "LV",
                "LY",
                "MA",
                "MC",
                "MD",
                "ME",
                "MF",
                "MG",
                "MH",
                "MK",
                "ML",
                "MM",
                "MN",
                "MO",
                "MP",
                "MQ",
                "MR",
                "MS",
                "MT",
                "MU",
                "MV",
                "MW",
                "MX",
                "MY",
                "MZ",
                "NA",
                "NC",
                "NE",
                "NF",
                "NG",
                "NI",
                "NL",
                "NO",
                "NP",
                "NR",
                "NU",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PF",
                "PG",
                "PH",
                "PK",
                "PL",
                "PM",
                "PN",
                "PR",
                "PS",
                "PT",
                "PW",
                "PY",
                "QA",
                "QO",
                "RE",
                "RO",
                "RS",
                "RU",
                "RW",
                "SA",
                "SB",
                "SC",
                "SD",
                "SE",
                "SG",
                "SH",
                "SI",
                "SJ",
                "SK",
                "SL",
                "SM",
                "SN",
                "SO",
                "SR",
                "SS",
                "ST",
                "SV",
                "SX",
                "SY",
                "SZ",
                "TA",
                "TC",
                "TD",
                "TF",
                "TG",
                "TH",
                "TJ",
                "TK",
                "TL",
                "TM",
                "TN",
                "TO",
                "TR",
                "TT",
                "TV",
                "TW",
                "TZ",
                "UA",
                "UG",
                "UM",
                "UN",
                "US",
                "UY",
                "UZ",
                "VA",
                "VC",
                "VE",
                "VG",
                "VI",
                "VN",
                "VU",
                "WF",
                "WS",
                "XK",
                "YE",
                "YT",
                "ZA",
                "ZM",
                "ZW",
              ],
              "002": [
                "002",
                "002-status-grouping",
                "011",
                "014",
                "015",
                "017",
                "018",
                "202",
                "AO",
                "BF",
                "BI",
                "BJ",
                "BW",
                "CD",
                "CF",
                "CG",
                "CI",
                "CM",
                "CV",
                "DJ",
                "DZ",
                "EA",
                "EG",
                "EH",
                "ER",
                "ET",
                "GA",
                "GH",
                "GM",
                "GN",
                "GQ",
                "GW",
                "IC",
                "IO",
                "KE",
                "KM",
                "LR",
                "LS",
                "LY",
                "MA",
                "MG",
                "ML",
                "MR",
                "MU",
                "MW",
                "MZ",
                "NA",
                "NE",
                "NG",
                "RE",
                "RW",
                "SC",
                "SD",
                "SH",
                "SL",
                "SN",
                "SO",
                "SS",
                "ST",
                "SZ",
                "TD",
                "TF",
                "TG",
                "TN",
                "TZ",
                "UG",
                "YT",
                "ZA",
                "ZM",
                "ZW",
              ],
              "003": [
                "003",
                "013",
                "021",
                "029",
                "AG",
                "AI",
                "AW",
                "BB",
                "BL",
                "BM",
                "BQ",
                "BS",
                "BZ",
                "CA",
                "CR",
                "CU",
                "CW",
                "DM",
                "DO",
                "GD",
                "GL",
                "GP",
                "GT",
                "HN",
                "HT",
                "JM",
                "KN",
                "KY",
                "LC",
                "MF",
                "MQ",
                "MS",
                "MX",
                "NI",
                "PA",
                "PM",
                "PR",
                "SV",
                "SX",
                "TC",
                "TT",
                "US",
                "VC",
                "VG",
                "VI",
              ],
              "005": [
                "005",
                "AR",
                "BO",
                "BR",
                "BV",
                "CL",
                "CO",
                "EC",
                "FK",
                "GF",
                "GS",
                "GY",
                "PE",
                "PY",
                "SR",
                "UY",
                "VE",
              ],
              "009": [
                "009",
                "053",
                "054",
                "057",
                "061",
                "AC",
                "AQ",
                "AS",
                "AU",
                "CC",
                "CK",
                "CP",
                "CX",
                "DG",
                "FJ",
                "FM",
                "GU",
                "HM",
                "KI",
                "MH",
                "MP",
                "NC",
                "NF",
                "NR",
                "NU",
                "NZ",
                "PF",
                "PG",
                "PN",
                "PW",
                "QO",
                "SB",
                "TA",
                "TK",
                "TO",
                "TV",
                "UM",
                "VU",
                "WF",
                "WS",
              ],
              "011": [
                "011",
                "BF",
                "BJ",
                "CI",
                "CV",
                "GH",
                "GM",
                "GN",
                "GW",
                "LR",
                "ML",
                "MR",
                "NE",
                "NG",
                "SH",
                "SL",
                "SN",
                "TG",
              ],
              "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"],
              "014": [
                "014",
                "BI",
                "DJ",
                "ER",
                "ET",
                "IO",
                "KE",
                "KM",
                "MG",
                "MU",
                "MW",
                "MZ",
                "RE",
                "RW",
                "SC",
                "SO",
                "SS",
                "TF",
                "TZ",
                "UG",
                "YT",
                "ZM",
                "ZW",
              ],
              "015": [
                "015",
                "DZ",
                "EA",
                "EG",
                "EH",
                "IC",
                "LY",
                "MA",
                "SD",
                "TN",
              ],
              "017": [
                "017",
                "AO",
                "CD",
                "CF",
                "CG",
                "CM",
                "GA",
                "GQ",
                "ST",
                "TD",
              ],
              "018": ["018", "BW", "LS", "NA", "SZ", "ZA"],
              "019": [
                "003",
                "005",
                "013",
                "019",
                "019-status-grouping",
                "021",
                "029",
                "419",
                "AG",
                "AI",
                "AR",
                "AW",
                "BB",
                "BL",
                "BM",
                "BO",
                "BQ",
                "BR",
                "BS",
                "BV",
                "BZ",
                "CA",
                "CL",
                "CO",
                "CR",
                "CU",
                "CW",
                "DM",
                "DO",
                "EC",
                "FK",
                "GD",
                "GF",
                "GL",
                "GP",
                "GS",
                "GT",
                "GY",
                "HN",
                "HT",
                "JM",
                "KN",
                "KY",
                "LC",
                "MF",
                "MQ",
                "MS",
                "MX",
                "NI",
                "PA",
                "PE",
                "PM",
                "PR",
                "PY",
                "SR",
                "SV",
                "SX",
                "TC",
                "TT",
                "US",
                "UY",
                "VC",
                "VE",
                "VG",
                "VI",
              ],
              "021": ["021", "BM", "CA", "GL", "PM", "US"],
              "029": [
                "029",
                "AG",
                "AI",
                "AW",
                "BB",
                "BL",
                "BQ",
                "BS",
                "CU",
                "CW",
                "DM",
                "DO",
                "GD",
                "GP",
                "HT",
                "JM",
                "KN",
                "KY",
                "LC",
                "MF",
                "MQ",
                "MS",
                "PR",
                "SX",
                "TC",
                "TT",
                "VC",
                "VG",
                "VI",
              ],
              "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"],
              "034": [
                "034",
                "AF",
                "BD",
                "BT",
                "IN",
                "IR",
                "LK",
                "MV",
                "NP",
                "PK",
              ],
              "035": [
                "035",
                "BN",
                "ID",
                "KH",
                "LA",
                "MM",
                "MY",
                "PH",
                "SG",
                "TH",
                "TL",
                "VN",
              ],
              "039": [
                "039",
                "AD",
                "AL",
                "BA",
                "ES",
                "GI",
                "GR",
                "HR",
                "IT",
                "ME",
                "MK",
                "MT",
                "PT",
                "RS",
                "SI",
                "SM",
                "VA",
                "XK",
              ],
              "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"],
              "054": ["054", "FJ", "NC", "PG", "SB", "VU"],
              "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"],
              "061": [
                "061",
                "AS",
                "CK",
                "NU",
                "PF",
                "PN",
                "TK",
                "TO",
                "TV",
                "WF",
                "WS",
              ],
              142: [
                "030",
                "034",
                "035",
                "142",
                "143",
                "145",
                "AE",
                "AF",
                "AM",
                "AZ",
                "BD",
                "BH",
                "BN",
                "BT",
                "CN",
                "CY",
                "GE",
                "HK",
                "ID",
                "IL",
                "IN",
                "IQ",
                "IR",
                "JO",
                "JP",
                "KG",
                "KH",
                "KP",
                "KR",
                "KW",
                "KZ",
                "LA",
                "LB",
                "LK",
                "MM",
                "MN",
                "MO",
                "MV",
                "MY",
                "NP",
                "OM",
                "PH",
                "PK",
                "PS",
                "QA",
                "SA",
                "SG",
                "SY",
                "TH",
                "TJ",
                "TL",
                "TM",
                "TR",
                "TW",
                "UZ",
                "VN",
                "YE",
              ],
              143: ["143", "KG", "KZ", "TJ", "TM", "UZ"],
              145: [
                "145",
                "AE",
                "AM",
                "AZ",
                "BH",
                "CY",
                "GE",
                "IL",
                "IQ",
                "JO",
                "KW",
                "LB",
                "OM",
                "PS",
                "QA",
                "SA",
                "SY",
                "TR",
                "YE",
              ],
              150: [
                "039",
                "150",
                "151",
                "154",
                "155",
                "AD",
                "AL",
                "AT",
                "AX",
                "BA",
                "BE",
                "BG",
                "BY",
                "CH",
                "CQ",
                "CZ",
                "DE",
                "DK",
                "EE",
                "ES",
                "FI",
                "FO",
                "FR",
                "GB",
                "GG",
                "GI",
                "GR",
                "HR",
                "HU",
                "IE",
                "IM",
                "IS",
                "IT",
                "JE",
                "LI",
                "LT",
                "LU",
                "LV",
                "MC",
                "MD",
                "ME",
                "MK",
                "MT",
                "NL",
                "NO",
                "PL",
                "PT",
                "RO",
                "RS",
                "RU",
                "SE",
                "SI",
                "SJ",
                "SK",
                "SM",
                "UA",
                "VA",
                "XK",
              ],
              151: [
                "151",
                "BG",
                "BY",
                "CZ",
                "HU",
                "MD",
                "PL",
                "RO",
                "RU",
                "SK",
                "UA",
              ],
              154: [
                "154",
                "AX",
                "CQ",
                "DK",
                "EE",
                "FI",
                "FO",
                "GB",
                "GG",
                "IE",
                "IM",
                "IS",
                "JE",
                "LT",
                "LV",
                "NO",
                "SE",
                "SJ",
              ],
              155: [
                "155",
                "AT",
                "BE",
                "CH",
                "DE",
                "FR",
                "LI",
                "LU",
                "MC",
                "NL",
              ],
              202: [
                "011",
                "014",
                "017",
                "018",
                "202",
                "AO",
                "BF",
                "BI",
                "BJ",
                "BW",
                "CD",
                "CF",
                "CG",
                "CI",
                "CM",
                "CV",
                "DJ",
                "ER",
                "ET",
                "GA",
                "GH",
                "GM",
                "GN",
                "GQ",
                "GW",
                "IO",
                "KE",
                "KM",
                "LR",
                "LS",
                "MG",
                "ML",
                "MR",
                "MU",
                "MW",
                "MZ",
                "NA",
                "NE",
                "NG",
                "RE",
                "RW",
                "SC",
                "SH",
                "SL",
                "SN",
                "SO",
                "SS",
                "ST",
                "SZ",
                "TD",
                "TF",
                "TG",
                "TZ",
                "UG",
                "YT",
                "ZA",
                "ZM",
                "ZW",
              ],
              419: [
                "005",
                "013",
                "029",
                "419",
                "AG",
                "AI",
                "AR",
                "AW",
                "BB",
                "BL",
                "BO",
                "BQ",
                "BR",
                "BS",
                "BV",
                "BZ",
                "CL",
                "CO",
                "CR",
                "CU",
                "CW",
                "DM",
                "DO",
                "EC",
                "FK",
                "GD",
                "GF",
                "GP",
                "GS",
                "GT",
                "GY",
                "HN",
                "HT",
                "JM",
                "KN",
                "KY",
                "LC",
                "MF",
                "MQ",
                "MS",
                "MX",
                "NI",
                "PA",
                "PE",
                "PR",
                "PY",
                "SR",
                "SV",
                "SX",
                "TC",
                "TT",
                "UY",
                "VC",
                "VE",
                "VG",
                "VI",
              ],
              EU: [
                "AT",
                "BE",
                "BG",
                "CY",
                "CZ",
                "DE",
                "DK",
                "EE",
                "ES",
                "EU",
                "FI",
                "FR",
                "GR",
                "HR",
                "HU",
                "IE",
                "IT",
                "LT",
                "LU",
                "LV",
                "MT",
                "NL",
                "PL",
                "PT",
                "RO",
                "SE",
                "SI",
                "SK",
              ],
              EZ: [
                "AT",
                "BE",
                "CY",
                "DE",
                "EE",
                "ES",
                "EZ",
                "FI",
                "FR",
                "GR",
                "IE",
                "IT",
                "LT",
                "LU",
                "LV",
                "MT",
                "NL",
                "PT",
                "SI",
                "SK",
              ],
              QO: ["AC", "AQ", "CP", "DG", "QO", "TA"],
              UN: [
                "AD",
                "AE",
                "AF",
                "AG",
                "AL",
                "AM",
                "AO",
                "AR",
                "AT",
                "AU",
                "AZ",
                "BA",
                "BB",
                "BD",
                "BE",
                "BF",
                "BG",
                "BH",
                "BI",
                "BJ",
                "BN",
                "BO",
                "BR",
                "BS",
                "BT",
                "BW",
                "BY",
                "BZ",
                "CA",
                "CD",
                "CF",
                "CG",
                "CH",
                "CI",
                "CL",
                "CM",
                "CN",
                "CO",
                "CR",
                "CU",
                "CV",
                "CY",
                "CZ",
                "DE",
                "DJ",
                "DK",
                "DM",
                "DO",
                "DZ",
                "EC",
                "EE",
                "EG",
                "ER",
                "ES",
                "ET",
                "FI",
                "FJ",
                "FM",
                "FR",
                "GA",
                "GB",
                "GD",
                "GE",
                "GH",
                "GM",
                "GN",
                "GQ",
                "GR",
                "GT",
                "GW",
                "GY",
                "HN",
                "HR",
                "HT",
                "HU",
                "ID",
                "IE",
                "IL",
                "IN",
                "IQ",
                "IR",
                "IS",
                "IT",
                "JM",
                "JO",
                "JP",
                "KE",
                "KG",
                "KH",
                "KI",
                "KM",
                "KN",
                "KP",
                "KR",
                "KW",
                "KZ",
                "LA",
                "LB",
                "LC",
                "LI",
                "LK",
                "LR",
                "LS",
                "LT",
                "LU",
                "LV",
                "LY",
                "MA",
                "MC",
                "MD",
                "ME",
                "MG",
                "MH",
                "MK",
                "ML",
                "MM",
                "MN",
                "MR",
                "MT",
                "MU",
                "MV",
                "MW",
                "MX",
                "MY",
                "MZ",
                "NA",
                "NE",
                "NG",
                "NI",
                "NL",
                "NO",
                "NP",
                "NR",
                "NZ",
                "OM",
                "PA",
                "PE",
                "PG",
                "PH",
                "PK",
                "PL",
                "PT",
                "PW",
                "PY",
                "QA",
                "RO",
                "RS",
                "RU",
                "RW",
                "SA",
                "SB",
                "SC",
                "SD",
                "SE",
                "SG",
                "SI",
                "SK",
                "SL",
                "SM",
                "SN",
                "SO",
                "SR",
                "SS",
                "ST",
                "SV",
                "SY",
                "SZ",
                "TD",
                "TG",
                "TH",
                "TJ",
                "TL",
                "TM",
                "TN",
                "TO",
                "TR",
                "TT",
                "TV",
                "TZ",
                "UA",
                "UG",
                "UN",
                "US",
                "UY",
                "UZ",
                "VC",
                "VE",
                "VN",
                "VU",
                "WS",
                "YE",
                "ZA",
                "ZM",
                "ZW",
              ],
            },
            Or = /-u(?:-[0-9a-z]{2,8})+/gi;
          function et(n, t, a) {
            if ((a === void 0 && (a = Error), !n)) throw new a(t);
          }
          function Gt(n, t, a) {
            var l = t.split("-"),
              g = l[0],
              w = l[1],
              E = l[2],
              C = !0;
            if (E && E[0] === "$") {
              var G = E[1] !== "!",
                D = (G ? a[E.slice(1)] : a[E.slice(2)])
                  .map(function (k) {
                    return hn[k] || [k];
                  })
                  .reduce(function (k, W) {
                    return jt(jt([], k, !0), W, !0);
                  }, []);
              C && (C = D.indexOf(n.region || "") > 1 == G);
            } else C && (C = !n.region || E === "*" || E === n.region);
            return (
              C && (C = !n.script || w === "*" || w === n.script),
              C && (C = !n.language || g === "*" || g === n.language),
              C
            );
          }
          function Tr(n) {
            return [n.language, n.script, n.region].filter(Boolean).join("-");
          }
          function Zt(n, t, a) {
            for (var l = 0, g = a.matches; l < g.length; l++) {
              var w = g[l],
                E =
                  Gt(n, w.desired, a.matchVariables) &&
                  Gt(t, w.supported, a.matchVariables);
              if (
                (w.oneway ||
                  E ||
                  (E =
                    Gt(n, w.supported, a.matchVariables) &&
                    Gt(t, w.desired, a.matchVariables)),
                E)
              ) {
                var C = 10 * w.distance;
                return a.paradigmLocales.indexOf(Tr(n)) > -1 !=
                  a.paradigmLocales.indexOf(Tr(t)) > -1
                  ? C - 1
                  : C;
              }
            }
            throw Error("No matching distance found");
          }
          function Ir(n) {
            return Intl.getCanonicalLocales(n)[0];
          }
          var _n = b(366);
          function Yt(n, t, a) {
            let l,
              g = new _n({
                headers: {
                  "accept-language": n.get("accept-language") || void 0,
                },
              }).languages();
            try {
              let w = t.slice().sort((E, C) => C.length - E.length);
              l = (function (E, C, G, D, k, W) {
                G.localeMatcher === "lookup"
                  ? (we = (function (q, F, oe) {
                      for (
                        var j = { locale: "" }, ee = 0;
                        ee < F.length;
                        ee++
                      ) {
                        var U = F[ee],
                          he = U.replace(Or, ""),
                          te = (function (ue, me) {
                            for (var ke = me; ; ) {
                              if (ue.indexOf(ke) > -1) return ke;
                              var Ie = ke.lastIndexOf("-");
                              if (!~Ie) return;
                              Ie >= 2 && ke[Ie - 2] === "-" && (Ie -= 2),
                                (ke = ke.slice(0, Ie));
                            }
                          })(q, he);
                        if (te)
                          return (
                            (j.locale = te),
                            U !== he &&
                              (j.extension = U.slice(he.length, U.length)),
                            j
                          );
                      }
                      return (j.locale = oe()), j;
                    })(Array.from(E), C, W))
                  : ((fe = Array.from(E)),
                    (Ce = []),
                    (Ve = C.reduce(function (q, F) {
                      var oe = F.replace(Or, "");
                      return Ce.push(oe), (q[oe] = F), q;
                    }, {})),
                    (B === void 0 && (B = 838),
                    (ae = 1 / 0),
                    (ye = { matchedDesiredLocale: "", distances: {} }),
                    Ce.forEach(function (q, F) {
                      ye.distances[q] || (ye.distances[q] = {}),
                        fe.forEach(function (oe) {
                          var j,
                            ee,
                            U,
                            he,
                            te,
                            ue,
                            me =
                              ((j = new Intl.Locale(q).maximize()),
                              (ee = new Intl.Locale(oe).maximize()),
                              (U = {
                                language: j.language,
                                script: j.script || "",
                                region: j.region || "",
                              }),
                              (he = {
                                language: ee.language,
                                script: ee.script || "",
                                region: ee.region || "",
                              }),
                              (te = 0),
                              (ue = (function () {
                                var ke, Ie;
                                if (!x) {
                                  var je =
                                      (Ie =
                                        (ke =
                                          Xt.supplemental.languageMatching[
                                            "written-new"
                                          ][0]) == null
                                          ? void 0
                                          : ke.paradigmLocales) == null
                                        ? void 0
                                        : Ie._locales.split(" "),
                                    Me = Xt.supplemental.languageMatching[
                                      "written-new"
                                    ].slice(1, 5);
                                  x = {
                                    matches: Xt.supplemental.languageMatching[
                                      "written-new"
                                    ]
                                      .slice(5)
                                      .map(function (Ge) {
                                        var ge = Object.keys(Ge)[0],
                                          Pe = Ge[ge];
                                        return {
                                          supported: ge,
                                          desired: Pe._desired,
                                          distance: +Pe._distance,
                                          oneway: Pe.oneway === "true",
                                        };
                                      }, {}),
                                    matchVariables: Me.reduce(function (
                                      Ge,
                                      ge
                                    ) {
                                      var Pe = Object.keys(ge)[0],
                                        Ye = ge[Pe];
                                      return (
                                        (Ge[Pe.slice(1)] =
                                          Ye._value.split("+")),
                                        Ge
                                      );
                                    },
                                    {}),
                                    paradigmLocales: jt(
                                      jt([], je, !0),
                                      je.map(function (Ge) {
                                        return new Intl.Locale(
                                          Ge.replace(/_/g, "-")
                                        )
                                          .maximize()
                                          .toString();
                                      }),
                                      !0
                                    ),
                                  };
                                }
                                return x;
                              })()),
                              U.language !== he.language &&
                                (te += Zt(
                                  {
                                    language: j.language,
                                    script: "",
                                    region: "",
                                  },
                                  {
                                    language: ee.language,
                                    script: "",
                                    region: "",
                                  },
                                  ue
                                )),
                              U.script !== he.script &&
                                (te += Zt(
                                  {
                                    language: j.language,
                                    script: U.script,
                                    region: "",
                                  },
                                  {
                                    language: ee.language,
                                    script: U.script,
                                    region: "",
                                  },
                                  ue
                                )),
                              U.region !== he.region && (te += Zt(U, he, ue)),
                              te + 0 + 40 * F);
                          (ye.distances[q][oe] = me),
                            me < ae &&
                              ((ae = me),
                              (ye.matchedDesiredLocale = q),
                              (ye.matchedSupportedLocale = oe));
                        });
                    }),
                    ae >= B &&
                      ((ye.matchedDesiredLocale = void 0),
                      (ye.matchedSupportedLocale = void 0)),
                    (Ee = ye)).matchedSupportedLocale &&
                      Ee.matchedDesiredLocale &&
                      ((Q = Ee.matchedSupportedLocale),
                      (Te =
                        Ve[Ee.matchedDesiredLocale].slice(
                          Ee.matchedDesiredLocale.length
                        ) || void 0)),
                    (we = Q ? { locale: Q, extension: Te } : { locale: W() })),
                  we == null && (we = { locale: W(), extension: "" });
                var J,
                  we,
                  _e,
                  fe,
                  Q,
                  Te,
                  Ce,
                  Ve,
                  B,
                  ae,
                  ye,
                  Ee,
                  xe = we.locale,
                  se = k[xe],
                  ne = { locale: "en", dataLocale: xe };
                _e = we.extension
                  ? (function (q) {
                      et(
                        q === q.toLowerCase(),
                        "Expected extension to be lowercase"
                      ),
                        et(
                          q.slice(0, 3) === "-u-",
                          "Expected extension to be a Unicode locale extension"
                        );
                      for (
                        var F, oe = [], j = [], ee = q.length, U = 3;
                        U < ee;

                      ) {
                        var he = q.indexOf("-", U),
                          te = void 0;
                        te = he === -1 ? ee - U : he - U;
                        var ue = q.slice(U, U + te);
                        et(
                          te >= 2,
                          "Expected a subtag to have at least 2 characters"
                        ),
                          F === void 0 && te != 2
                            ? oe.indexOf(ue) === -1 && oe.push(ue)
                            : te === 2
                            ? ((F = { key: ue, value: "" }),
                              j.find(function (me) {
                                return me.key === F?.key;
                              }) === void 0 && j.push(F))
                            : F?.value === ""
                            ? (F.value = ue)
                            : (et(
                                F !== void 0,
                                "Expected keyword to be defined"
                              ),
                              (F.value += "-" + ue)),
                          (U += te + 1);
                      }
                      return { attributes: oe, keywords: j };
                    })(we.extension).keywords
                  : [];
                for (
                  var ie = [],
                    le = function (q) {
                      var F,
                        oe,
                        j = (J = se?.[q]) != null ? J : [];
                      et(
                        Array.isArray(j),
                        "keyLocaleData for ".concat(q, " must be an array")
                      );
                      var ee = j[0];
                      et(
                        ee === void 0 || typeof ee == "string",
                        "value must be a string or undefined"
                      );
                      var U = void 0,
                        he = _e.find(function (me) {
                          return me.key === q;
                        });
                      if (he) {
                        var te = he.value;
                        te !== ""
                          ? j.indexOf(te) > -1 &&
                            (U = { key: q, value: (ee = te) })
                          : j.indexOf("true") > -1 &&
                            (U = { key: q, value: (ee = "true") });
                      }
                      var ue = G[q];
                      et(
                        ue == null || typeof ue == "string",
                        "optionsValue must be a string or undefined"
                      ),
                        typeof ue == "string" &&
                          ((F = q.toLowerCase()),
                          (oe = ue.toLowerCase()),
                          et(F !== void 0, "ukey must be defined"),
                          (ue = oe) === "" && (ue = "true")),
                        ue !== ee &&
                          j.indexOf(ue) > -1 &&
                          ((ee = ue), (U = void 0)),
                        U && ie.push(U),
                        (ne[q] = ee);
                    },
                    Z = 0;
                  Z < D.length;
                  Z++
                )
                  le(D[Z]);
                return (
                  ie.length > 0 &&
                    (xe = (function (q, F, oe) {
                      et(
                        q.indexOf("-u-") === -1,
                        "Expected locale to not have a Unicode locale extension"
                      );
                      for (var j, ee = "-u", U = 0; U < F.length; U++) {
                        var he = F[U];
                        ee += "-".concat(he);
                      }
                      for (var te = 0; te < oe.length; te++) {
                        var ue = oe[te],
                          me = ue.key,
                          ke = ue.value;
                        (ee += "-".concat(me)),
                          ke !== "" && (ee += "-".concat(ke));
                      }
                      if (ee === "-u") return Ir(q);
                      var Ie = q.indexOf("-x-");
                      return Ir(
                        Ie === -1 ? q + ee : q.slice(0, Ie) + ee + q.slice(Ie)
                      );
                    })(xe, [], ie)),
                  (ne.locale = xe),
                  ne
                );
              })(
                w,
                Intl.getCanonicalLocales(g),
                { localeMatcher: "best fit" },
                [],
                {},
                function () {
                  return a;
                }
              ).locale;
            } catch {}
            return l;
          }
          function Mr(n, t) {
            if (n.localeCookie && t.has(n.localeCookie.name)) {
              let a = t.get(n.localeCookie.name)?.value;
              if (a && n.locales.includes(a)) return a;
            }
          }
          function Ar(n, t, a, l) {
            let g;
            return (
              l && (g = $t(l, n.locales, n.localePrefix)?.locale),
              !g && n.localeDetection && (g = Mr(n, a)),
              !g &&
                n.localeDetection &&
                (g = Yt(t, n.locales, n.defaultLocale)),
              g || (g = n.defaultLocale),
              g
            );
          }
          b(378), b(944), b(918).s;
          var Jt = b(66);
          Jt.s8, Jt.s8, Jt.s8, b(515).X;
          let mn = ["en", "ko"],
            gn = (function (n) {
              var t, a;
              let l = {
                ...n,
                localePrefix:
                  typeof (a = n.localePrefix) == "object"
                    ? a
                    : { mode: a || "always" },
                localeCookie: !!((t = n.localeCookie) ?? 1) && {
                  name: "NEXT_LOCALE",
                  sameSite: "lax",
                  ...(typeof t == "object" && t),
                },
                localeDetection: n.localeDetection ?? !0,
                alternateLinks: n.alternateLinks ?? !0,
              };
              return function (g) {
                var w, E;
                let C;
                try {
                  C = decodeURI(g.nextUrl.pathname);
                } catch {
                  return He.next();
                }
                let G = C.replace(/\\/g, "%5C").replace(/\/+/g, "/"),
                  { domain: D, locale: k } =
                    ((w = g.headers),
                    (E = g.cookies),
                    l.domains
                      ? (function (se, ne, ie, le) {
                          let Z,
                            q = (function (F, oe) {
                              let j = Pr(F);
                              if (j) return oe.find((ee) => ee.domain === j);
                            })(ne, se.domains);
                          if (!q) return { locale: Ar(se, ne, ie, le) };
                          if (le) {
                            let F = $t(
                              le,
                              se.locales,
                              se.localePrefix,
                              q
                            )?.locale;
                            if (F) {
                              if (!xt(F, q)) return { locale: F, domain: q };
                              Z = F;
                            }
                          }
                          if (!Z && se.localeDetection) {
                            let F = Mr(se, ie);
                            F && xt(F, q) && (Z = F);
                          }
                          if (!Z && se.localeDetection) {
                            let F = Yt(ne, q.locales, q.defaultLocale);
                            F && (Z = F);
                          }
                          return (
                            Z || (Z = q.defaultLocale), { locale: Z, domain: q }
                          );
                        })(l, w, E, G)
                      : { locale: Ar(l, w, E, G) }),
                  W = D ? D.defaultLocale === k : k === l.defaultLocale,
                  J = l.domains?.filter((se) => xt(k, se)) || [],
                  we = l.domains != null && !D;
                function _e(se) {
                  var ne;
                  let ie = new URL(se, g.url);
                  g.nextUrl.basePath &&
                    ((ne = ie.pathname),
                    (ie.pathname = We(g.nextUrl.basePath + ne)));
                  let le = new Headers(g.headers);
                  return (
                    le.set("X-NEXT-INTL-LOCALE", k),
                    We(g.nextUrl.pathname) !== We(ie.pathname)
                      ? He.rewrite(ie, { request: { headers: le } })
                      : He.next({ request: { headers: le } })
                  );
                }
                function fe(se, ne) {
                  var ie;
                  let le = new URL(se, g.url);
                  if (
                    ((le.pathname = We(le.pathname)), J.length > 0 && !ne && D)
                  ) {
                    let Z = Rr(D, k, J);
                    Z &&
                      ((ne = Z.domain),
                      Z.defaultLocale === k &&
                        l.localePrefix.mode === "as-needed" &&
                        (le.pathname = Wt(
                          le.pathname,
                          l.locales,
                          l.localePrefix
                        )));
                  }
                  return (
                    ne &&
                      ((le.host = ne), g.headers.get("x-forwarded-host")) &&
                      ((le.protocol =
                        g.headers.get("x-forwarded-proto") ??
                        g.nextUrl.protocol),
                      (le.port =
                        ne.split(":")[1] ??
                        g.headers.get("x-forwarded-port") ??
                        "")),
                    g.nextUrl.basePath &&
                      ((ie = le.pathname),
                      (le.pathname = We(g.nextUrl.basePath + ie))),
                    (ye = !0),
                    He.redirect(le.toString())
                  );
                }
                let Q = Wt(G, l.locales, l.localePrefix),
                  Te = $t(G, l.locales, l.localePrefix, D),
                  Ce = Te != null,
                  Ve =
                    l.localePrefix.mode === "never" ||
                    (W && l.localePrefix.mode === "as-needed"),
                  B,
                  ae,
                  ye,
                  Ee = Q,
                  xe = l.pathnames;
                if (xe) {
                  let se;
                  if (
                    (([se, ae] = (function (ne, ie, le) {
                      for (let Z of Object.keys(ne).sort(fn)) {
                        let q = ne[Z];
                        if (typeof q == "string") {
                          if (Nt(q, ie)) return [void 0, Z];
                        } else {
                          let F = Object.entries(q),
                            oe = F.findIndex(([j]) => j === le);
                          for (let [j] of (oe > 0 &&
                            F.unshift(F.splice(oe, 1)[0]),
                          F))
                            if (Nt(Ft(ne[Z], j, Z), ie)) return [j, Z];
                        }
                      }
                      for (let Z of Object.keys(ne))
                        if (Nt(Z, ie)) return [void 0, Z];
                      return [void 0, void 0];
                    })(xe, Q, k)),
                    ae)
                  ) {
                    let ne = xe[ae],
                      ie = Ft(ne, k, ae);
                    if (Nt(ie, Q)) Ee = zt(Q, ie, ae);
                    else {
                      let le;
                      le = se ? Ft(ne, se, ae) : ae;
                      let Z = Ve ? void 0 : Lt(k, l.localePrefix);
                      B = fe(nt(zt(Q, le, ie), Z, g.nextUrl.search));
                    }
                  }
                }
                if (!B)
                  if (Ee !== "/" || Ce) {
                    let se = nt(Ee, `/${k}`, g.nextUrl.search);
                    if (Ce) {
                      let ne = nt(Q, Te.prefix, g.nextUrl.search);
                      if (l.localePrefix.mode === "never")
                        B = fe(nt(Q, void 0, g.nextUrl.search));
                      else if (Te.exact)
                        if (W && Ve) B = fe(nt(Q, void 0, g.nextUrl.search));
                        else if (l.domains) {
                          let ie = Rr(D, Te.locale, J);
                          B =
                            D?.domain === ie?.domain || we
                              ? _e(se)
                              : fe(ne, ie?.domain);
                        } else B = _e(se);
                      else B = fe(ne);
                    } else
                      B = Ve
                        ? _e(se)
                        : fe(nt(Q, Lt(k, l.localePrefix), g.nextUrl.search));
                  } else
                    B = Ve
                      ? _e(nt(Ee, `/${k}`, g.nextUrl.search))
                      : fe(nt(Q, Lt(k, l.localePrefix), g.nextUrl.search));
                return (
                  (function (se, ne, ie, le, Z) {
                    if (!le.localeCookie) return;
                    let { name: q, ...F } = le.localeCookie,
                      oe = Yt(
                        se.headers,
                        Z?.locales || le.locales,
                        le.defaultLocale
                      ),
                      j = se.cookies.has(q),
                      ee = j && se.cookies.get(q)?.value !== ie;
                    (j ? ee : oe !== ie) &&
                      ne.cookies.set(q, ie, {
                        path: se.nextUrl.basePath || void 0,
                        ...F,
                      });
                  })(g, B, k, l, D),
                  !ye &&
                    l.localePrefix.mode !== "never" &&
                    l.alternateLinks &&
                    l.locales.length > 1 &&
                    B.headers.set(
                      "Link",
                      (function ({
                        internalTemplateName: se,
                        localizedPathnames: ne,
                        request: ie,
                        resolvedLocale: le,
                        routing: Z,
                      }) {
                        let q = ie.nextUrl.clone(),
                          F = Pr(ie.headers);
                        function oe(U, he) {
                          var te;
                          return (
                            (U.pathname = We(U.pathname)),
                            ie.nextUrl.basePath &&
                              ((U = new URL(U)).pathname =
                                ((te = U.pathname),
                                We(ie.nextUrl.basePath + te))),
                            `<${U.toString()}>; rel="alternate"; hreflang="${he}"`
                          );
                        }
                        function j(U, he) {
                          return ne && typeof ne == "object"
                            ? zt(U, ne[le] ?? se, ne[he] ?? se)
                            : U;
                        }
                        F && ((q.port = ""), (q.host = F)),
                          (q.protocol =
                            ie.headers.get("x-forwarded-proto") ?? q.protocol),
                          (q.pathname = Wt(
                            q.pathname,
                            Z.locales,
                            Z.localePrefix
                          ));
                        let ee = Kt(Z.locales, Z.localePrefix, !1).flatMap(
                          ([U, he]) => {
                            let te;
                            function ue(me) {
                              return me === "/" ? he : he + me;
                            }
                            if (Z.domains)
                              return Z.domains
                                .filter((me) => xt(U, me))
                                .map(
                                  (me) => (
                                    ((te = new URL(q)).port = ""),
                                    (te.host = me.domain),
                                    (te.pathname = j(q.pathname, U)),
                                    (U === me.defaultLocale &&
                                      Z.localePrefix.mode !== "always") ||
                                      (te.pathname = ue(te.pathname)),
                                    oe(te, U)
                                  )
                                );
                            {
                              let me;
                              (me =
                                ne && typeof ne == "object"
                                  ? j(q.pathname, U)
                                  : q.pathname),
                                (U === Z.defaultLocale &&
                                  Z.localePrefix.mode !== "always") ||
                                  (me = ue(me)),
                                (te = new URL(me, q));
                            }
                            return oe(te, U);
                          }
                        );
                        if (!Z.domains || Z.domains.length === 0) {
                          let U = j(q.pathname, Z.defaultLocale);
                          if (U) {
                            let he = new URL(U, q);
                            ee.push(oe(he, "x-default"));
                          }
                        }
                        return ee.join(", ");
                      })({
                        routing: l,
                        internalTemplateName: ae,
                        localizedPathnames: ae != null && xe ? xe[ae] : void 0,
                        request: g,
                        resolvedLocale: k,
                      })
                    ),
                  B
                );
              };
            })({
              locales: mn,
              defaultLocale: "en",
              localeDetection: !0,
              localePrefix: "always",
            }),
            yn = { matcher: ["/", "/(ko|en)/:path*"] };
          b(747);
          let Nr = { ...y },
            Lr = Nr.middleware || Nr.default,
            kr = "/middleware";
          if (typeof Lr != "function")
            throw Object.defineProperty(
              Error(
                `The Middleware "${kr}" must export a \`middleware\` or a \`default\` function`
              ),
              "__NEXT_ERROR_CODE",
              { value: "E120", enumerable: !1, configurable: !0 }
            );
          function vn(n) {
            return sn({
              ...n,
              page: kr,
              handler: async (...t) => {
                try {
                  return await Lr(...t);
                } catch (a) {
                  let l = t[0],
                    g = new URL(l.url),
                    w = g.pathname + g.search;
                  throw (
                    (await _(
                      a,
                      {
                        path: w,
                        method: l.method,
                        headers: Object.fromEntries(l.headers.entries()),
                      },
                      {
                        routerKind: "Pages Router",
                        routePath: "/middleware",
                        routeType: "middleware",
                        revalidateReason: void 0,
                      }
                    ),
                    a)
                  );
                }
              },
            });
          }
        },
        159: (N, A, b) => {
          "use strict";
          function S(P) {
            return (
              typeof P == "object" &&
              P !== null &&
              "digest" in P &&
              typeof P.digest == "string" &&
              P.digest === "DYNAMIC_SERVER_USAGE"
            );
          }
          b.d(A, { h: () => S });
        },
        165: (N, A, b) => {
          "use strict";
          var S = b(356).Buffer;
          Object.defineProperty(A, "__esModule", { value: !0 }),
            (function (i, _) {
              for (var m in _)
                Object.defineProperty(i, m, { enumerable: !0, get: _[m] });
            })(A, {
              handleFetch: function () {
                return h;
              },
              interceptFetch: function () {
                return e;
              },
              reader: function () {
                return x;
              },
            });
          let P = b(392),
            x = { url: (i) => i.url, header: (i, _) => i.headers.get(_) };
          async function y(i, _) {
            let {
              url: m,
              method: d,
              headers: r,
              body: o,
              cache: c,
              credentials: s,
              integrity: p,
              mode: u,
              redirect: f,
              referrer: v,
              referrerPolicy: R,
            } = _;
            return {
              testData: i,
              api: "fetch",
              request: {
                url: m,
                method: d,
                headers: [
                  ...Array.from(r),
                  [
                    "next-test-stack",
                    (function () {
                      let O = (Error().stack ?? "").split(`
`);
                      for (let T = 1; T < O.length; T++)
                        if (O[T].length > 0) {
                          O = O.slice(T);
                          break;
                        }
                      return (O = (O = (O = O.filter(
                        (T) => !T.includes("/next/dist/")
                      )).slice(0, 5)).map((T) =>
                        T.replace("webpack-internal:///(rsc)/", "").trim()
                      )).join("    ");
                    })(),
                  ],
                ],
                body: o
                  ? S.from(await _.arrayBuffer()).toString("base64")
                  : null,
                cache: c,
                credentials: s,
                integrity: p,
                mode: u,
                redirect: f,
                referrer: v,
                referrerPolicy: R,
              },
            };
          }
          async function h(i, _) {
            let m = (0, P.getTestReqInfo)(_, x);
            if (!m) return i(_);
            let { testData: d, proxyPort: r } = m,
              o = await y(d, _),
              c = await i(`http://localhost:${r}`, {
                method: "POST",
                body: JSON.stringify(o),
                next: { internal: !0 },
              });
            if (!c.ok)
              throw Object.defineProperty(
                Error(`Proxy request failed: ${c.status}`),
                "__NEXT_ERROR_CODE",
                { value: "E146", enumerable: !1, configurable: !0 }
              );
            let s = await c.json(),
              { api: p } = s;
            switch (p) {
              case "continue":
                return i(_);
              case "abort":
              case "unhandled":
                throw Object.defineProperty(
                  Error(`Proxy request aborted [${_.method} ${_.url}]`),
                  "__NEXT_ERROR_CODE",
                  { value: "E145", enumerable: !1, configurable: !0 }
                );
              case "fetch":
                let { status: u, headers: f, body: v } = s.response;
                return new Response(v ? S.from(v, "base64") : null, {
                  status: u,
                  headers: new Headers(f),
                });
              default:
                return p;
            }
          }
          function e(i) {
            return (
              (b.g.fetch = function (_, m) {
                var d;
                return !(m == null || (d = m.next) == null) && d.internal
                  ? i(_, m)
                  : h(i, new Request(_, m));
              }),
              () => {
                b.g.fetch = i;
              }
            );
          }
        },
        194: (N) => {
          "use strict";
          (N.exports = b), (N.exports.preferredCharsets = b);
          var A = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
          function b(y, h) {
            var e = (function (_) {
              for (var m = _.split(","), d = 0, r = 0; d < m.length; d++) {
                var o = (function (c, s) {
                  var p = A.exec(c);
                  if (!p) return null;
                  var u = p[1],
                    f = 1;
                  if (p[2])
                    for (var v = p[2].split(";"), R = 0; R < v.length; R++) {
                      var O = v[R].trim().split("=");
                      if (O[0] === "q") {
                        f = parseFloat(O[1]);
                        break;
                      }
                    }
                  return { charset: u, q: f, i: s };
                })(m[d].trim(), d);
                o && (m[r++] = o);
              }
              return (m.length = r), m;
            })(y === void 0 ? "*" : y || "");
            if (!h) return e.filter(x).sort(S).map(P);
            var i = h.map(function (_, m) {
              for (var d = { o: -1, q: 0, s: 0 }, r = 0; r < e.length; r++) {
                var o = (function (c, s, p) {
                  var u = 0;
                  if (s.charset.toLowerCase() === c.toLowerCase()) u |= 1;
                  else if (s.charset !== "*") return null;
                  return { i: p, o: s.i, q: s.q, s: u };
                })(_, e[r], m);
                o && 0 > (d.s - o.s || d.q - o.q || d.o - o.o) && (d = o);
              }
              return d;
            });
            return i
              .filter(x)
              .sort(S)
              .map(function (_) {
                return h[i.indexOf(_)];
              });
          }
          function S(y, h) {
            return h.q - y.q || h.s - y.s || y.o - h.o || y.i - h.i || 0;
          }
          function P(y) {
            return y.charset;
          }
          function x(y) {
            return y.q > 0;
          }
        },
        213: (N) => {
          (() => {
            "use strict";
            var A = {
                993: (x) => {
                  var y = Object.prototype.hasOwnProperty,
                    h = "~";
                  function e() {}
                  function i(r, o, c) {
                    (this.fn = r), (this.context = o), (this.once = c || !1);
                  }
                  function _(r, o, c, s, p) {
                    if (typeof c != "function")
                      throw TypeError("The listener must be a function");
                    var u = new i(c, s || r, p),
                      f = h ? h + o : o;
                    return (
                      r._events[f]
                        ? r._events[f].fn
                          ? (r._events[f] = [r._events[f], u])
                          : r._events[f].push(u)
                        : ((r._events[f] = u), r._eventsCount++),
                      r
                    );
                  }
                  function m(r, o) {
                    --r._eventsCount == 0
                      ? (r._events = new e())
                      : delete r._events[o];
                  }
                  function d() {
                    (this._events = new e()), (this._eventsCount = 0);
                  }
                  Object.create &&
                    ((e.prototype = Object.create(null)),
                    new e().__proto__ || (h = !1)),
                    (d.prototype.eventNames = function () {
                      var r,
                        o,
                        c = [];
                      if (this._eventsCount === 0) return c;
                      for (o in (r = this._events))
                        y.call(r, o) && c.push(h ? o.slice(1) : o);
                      return Object.getOwnPropertySymbols
                        ? c.concat(Object.getOwnPropertySymbols(r))
                        : c;
                    }),
                    (d.prototype.listeners = function (r) {
                      var o = h ? h + r : r,
                        c = this._events[o];
                      if (!c) return [];
                      if (c.fn) return [c.fn];
                      for (var s = 0, p = c.length, u = Array(p); s < p; s++)
                        u[s] = c[s].fn;
                      return u;
                    }),
                    (d.prototype.listenerCount = function (r) {
                      var o = h ? h + r : r,
                        c = this._events[o];
                      return c ? (c.fn ? 1 : c.length) : 0;
                    }),
                    (d.prototype.emit = function (r, o, c, s, p, u) {
                      var f = h ? h + r : r;
                      if (!this._events[f]) return !1;
                      var v,
                        R,
                        O = this._events[f],
                        T = arguments.length;
                      if (O.fn) {
                        switch (
                          (O.once && this.removeListener(r, O.fn, void 0, !0),
                          T)
                        ) {
                          case 1:
                            return O.fn.call(O.context), !0;
                          case 2:
                            return O.fn.call(O.context, o), !0;
                          case 3:
                            return O.fn.call(O.context, o, c), !0;
                          case 4:
                            return O.fn.call(O.context, o, c, s), !0;
                          case 5:
                            return O.fn.call(O.context, o, c, s, p), !0;
                          case 6:
                            return O.fn.call(O.context, o, c, s, p, u), !0;
                        }
                        for (R = 1, v = Array(T - 1); R < T; R++)
                          v[R - 1] = arguments[R];
                        O.fn.apply(O.context, v);
                      } else {
                        var I,
                          K = O.length;
                        for (R = 0; R < K; R++)
                          switch (
                            (O[R].once &&
                              this.removeListener(r, O[R].fn, void 0, !0),
                            T)
                          ) {
                            case 1:
                              O[R].fn.call(O[R].context);
                              break;
                            case 2:
                              O[R].fn.call(O[R].context, o);
                              break;
                            case 3:
                              O[R].fn.call(O[R].context, o, c);
                              break;
                            case 4:
                              O[R].fn.call(O[R].context, o, c, s);
                              break;
                            default:
                              if (!v)
                                for (I = 1, v = Array(T - 1); I < T; I++)
                                  v[I - 1] = arguments[I];
                              O[R].fn.apply(O[R].context, v);
                          }
                      }
                      return !0;
                    }),
                    (d.prototype.on = function (r, o, c) {
                      return _(this, r, o, c, !1);
                    }),
                    (d.prototype.once = function (r, o, c) {
                      return _(this, r, o, c, !0);
                    }),
                    (d.prototype.removeListener = function (r, o, c, s) {
                      var p = h ? h + r : r;
                      if (!this._events[p]) return this;
                      if (!o) return m(this, p), this;
                      var u = this._events[p];
                      if (u.fn)
                        u.fn !== o ||
                          (s && !u.once) ||
                          (c && u.context !== c) ||
                          m(this, p);
                      else {
                        for (var f = 0, v = [], R = u.length; f < R; f++)
                          (u[f].fn !== o ||
                            (s && !u[f].once) ||
                            (c && u[f].context !== c)) &&
                            v.push(u[f]);
                        v.length
                          ? (this._events[p] = v.length === 1 ? v[0] : v)
                          : m(this, p);
                      }
                      return this;
                    }),
                    (d.prototype.removeAllListeners = function (r) {
                      var o;
                      return (
                        r
                          ? ((o = h ? h + r : r), this._events[o] && m(this, o))
                          : ((this._events = new e()), (this._eventsCount = 0)),
                        this
                      );
                    }),
                    (d.prototype.off = d.prototype.removeListener),
                    (d.prototype.addListener = d.prototype.on),
                    (d.prefixed = h),
                    (d.EventEmitter = d),
                    (x.exports = d);
                },
                213: (x) => {
                  x.exports = (y, h) => (
                    (h = h || (() => {})),
                    y.then(
                      (e) =>
                        new Promise((i) => {
                          i(h());
                        }).then(() => e),
                      (e) =>
                        new Promise((i) => {
                          i(h());
                        }).then(() => {
                          throw e;
                        })
                    )
                  );
                },
                574: (x, y) => {
                  Object.defineProperty(y, "__esModule", { value: !0 }),
                    (y.default = function (h, e, i) {
                      let _ = 0,
                        m = h.length;
                      for (; m > 0; ) {
                        let d = (m / 2) | 0,
                          r = _ + d;
                        0 >= i(h[r], e) ? ((_ = ++r), (m -= d + 1)) : (m = d);
                      }
                      return _;
                    });
                },
                821: (x, y, h) => {
                  Object.defineProperty(y, "__esModule", { value: !0 });
                  let e = h(574);
                  class i {
                    constructor() {
                      this._queue = [];
                    }
                    enqueue(m, d) {
                      let r = {
                        priority: (d = Object.assign({ priority: 0 }, d))
                          .priority,
                        run: m,
                      };
                      if (
                        this.size &&
                        this._queue[this.size - 1].priority >= d.priority
                      )
                        return void this._queue.push(r);
                      let o = e.default(
                        this._queue,
                        r,
                        (c, s) => s.priority - c.priority
                      );
                      this._queue.splice(o, 0, r);
                    }
                    dequeue() {
                      let m = this._queue.shift();
                      return m?.run;
                    }
                    filter(m) {
                      return this._queue
                        .filter((d) => d.priority === m.priority)
                        .map((d) => d.run);
                    }
                    get size() {
                      return this._queue.length;
                    }
                  }
                  y.default = i;
                },
                816: (x, y, h) => {
                  let e = h(213);
                  class i extends Error {
                    constructor(d) {
                      super(d), (this.name = "TimeoutError");
                    }
                  }
                  let _ = (m, d, r) =>
                    new Promise((o, c) => {
                      if (typeof d != "number" || d < 0)
                        throw TypeError(
                          "Expected `milliseconds` to be a positive number"
                        );
                      if (d === 1 / 0) return void o(m);
                      let s = setTimeout(() => {
                        if (typeof r == "function") {
                          try {
                            o(r());
                          } catch (f) {
                            c(f);
                          }
                          return;
                        }
                        let p =
                            typeof r == "string"
                              ? r
                              : `Promise timed out after ${d} milliseconds`,
                          u = r instanceof Error ? r : new i(p);
                        typeof m.cancel == "function" && m.cancel(), c(u);
                      }, d);
                      e(m.then(o, c), () => {
                        clearTimeout(s);
                      });
                    });
                  (x.exports = _),
                    (x.exports.default = _),
                    (x.exports.TimeoutError = i);
                },
              },
              b = {};
            function S(x) {
              var y = b[x];
              if (y !== void 0) return y.exports;
              var h = (b[x] = { exports: {} }),
                e = !0;
              try {
                A[x](h, h.exports, S), (e = !1);
              } finally {
                e && delete b[x];
              }
              return h.exports;
            }
            S.ab = "//";
            var P = {};
            (() => {
              Object.defineProperty(P, "__esModule", { value: !0 });
              let x = S(993),
                y = S(816),
                h = S(821),
                e = () => {},
                i = new y.TimeoutError();
              class _ extends x {
                constructor(d) {
                  var r, o, c, s;
                  if (
                    (super(),
                    (this._intervalCount = 0),
                    (this._intervalEnd = 0),
                    (this._pendingCount = 0),
                    (this._resolveEmpty = e),
                    (this._resolveIdle = e),
                    !(
                      typeof (d = Object.assign(
                        {
                          carryoverConcurrencyCount: !1,
                          intervalCap: 1 / 0,
                          interval: 0,
                          concurrency: 1 / 0,
                          autoStart: !0,
                          queueClass: h.default,
                        },
                        d
                      )).intervalCap == "number" && d.intervalCap >= 1
                    ))
                  )
                    throw TypeError(
                      `Expected \`intervalCap\` to be a number from 1 and up, got \`${
                        (o =
                          (r = d.intervalCap) == null
                            ? void 0
                            : r.toString()) != null
                          ? o
                          : ""
                      }\` (${typeof d.intervalCap})`
                    );
                  if (
                    d.interval === void 0 ||
                    !(Number.isFinite(d.interval) && d.interval >= 0)
                  )
                    throw TypeError(
                      `Expected \`interval\` to be a finite number >= 0, got \`${
                        (s =
                          (c = d.interval) == null ? void 0 : c.toString()) !=
                        null
                          ? s
                          : ""
                      }\` (${typeof d.interval})`
                    );
                  (this._carryoverConcurrencyCount =
                    d.carryoverConcurrencyCount),
                    (this._isIntervalIgnored =
                      d.intervalCap === 1 / 0 || d.interval === 0),
                    (this._intervalCap = d.intervalCap),
                    (this._interval = d.interval),
                    (this._queue = new d.queueClass()),
                    (this._queueClass = d.queueClass),
                    (this.concurrency = d.concurrency),
                    (this._timeout = d.timeout),
                    (this._throwOnTimeout = d.throwOnTimeout === !0),
                    (this._isPaused = d.autoStart === !1);
                }
                get _doesIntervalAllowAnother() {
                  return (
                    this._isIntervalIgnored ||
                    this._intervalCount < this._intervalCap
                  );
                }
                get _doesConcurrentAllowAnother() {
                  return this._pendingCount < this._concurrency;
                }
                _next() {
                  this._pendingCount--,
                    this._tryToStartAnother(),
                    this.emit("next");
                }
                _resolvePromises() {
                  this._resolveEmpty(),
                    (this._resolveEmpty = e),
                    this._pendingCount === 0 &&
                      (this._resolveIdle(),
                      (this._resolveIdle = e),
                      this.emit("idle"));
                }
                _onResumeInterval() {
                  this._onInterval(),
                    this._initializeIntervalIfNeeded(),
                    (this._timeoutId = void 0);
                }
                _isIntervalPaused() {
                  let d = Date.now();
                  if (this._intervalId === void 0) {
                    let r = this._intervalEnd - d;
                    if (!(r < 0))
                      return (
                        this._timeoutId === void 0 &&
                          (this._timeoutId = setTimeout(() => {
                            this._onResumeInterval();
                          }, r)),
                        !0
                      );
                    this._intervalCount = this._carryoverConcurrencyCount
                      ? this._pendingCount
                      : 0;
                  }
                  return !1;
                }
                _tryToStartAnother() {
                  if (this._queue.size === 0)
                    return (
                      this._intervalId && clearInterval(this._intervalId),
                      (this._intervalId = void 0),
                      this._resolvePromises(),
                      !1
                    );
                  if (!this._isPaused) {
                    let d = !this._isIntervalPaused();
                    if (
                      this._doesIntervalAllowAnother &&
                      this._doesConcurrentAllowAnother
                    ) {
                      let r = this._queue.dequeue();
                      return (
                        !!r &&
                        (this.emit("active"),
                        r(),
                        d && this._initializeIntervalIfNeeded(),
                        !0)
                      );
                    }
                  }
                  return !1;
                }
                _initializeIntervalIfNeeded() {
                  this._isIntervalIgnored ||
                    this._intervalId !== void 0 ||
                    ((this._intervalId = setInterval(() => {
                      this._onInterval();
                    }, this._interval)),
                    (this._intervalEnd = Date.now() + this._interval));
                }
                _onInterval() {
                  this._intervalCount === 0 &&
                    this._pendingCount === 0 &&
                    this._intervalId &&
                    (clearInterval(this._intervalId),
                    (this._intervalId = void 0)),
                    (this._intervalCount = this._carryoverConcurrencyCount
                      ? this._pendingCount
                      : 0),
                    this._processQueue();
                }
                _processQueue() {
                  for (; this._tryToStartAnother(); );
                }
                get concurrency() {
                  return this._concurrency;
                }
                set concurrency(d) {
                  if (!(typeof d == "number" && d >= 1))
                    throw TypeError(
                      `Expected \`concurrency\` to be a number from 1 and up, got \`${d}\` (${typeof d})`
                    );
                  (this._concurrency = d), this._processQueue();
                }
                async add(d, r = {}) {
                  return new Promise((o, c) => {
                    let s = async () => {
                      this._pendingCount++, this._intervalCount++;
                      try {
                        let p =
                          this._timeout === void 0 && r.timeout === void 0
                            ? d()
                            : y.default(
                                Promise.resolve(d()),
                                r.timeout === void 0
                                  ? this._timeout
                                  : r.timeout,
                                () => {
                                  (r.throwOnTimeout === void 0
                                    ? this._throwOnTimeout
                                    : r.throwOnTimeout) && c(i);
                                }
                              );
                        o(await p);
                      } catch (p) {
                        c(p);
                      }
                      this._next();
                    };
                    this._queue.enqueue(s, r),
                      this._tryToStartAnother(),
                      this.emit("add");
                  });
                }
                async addAll(d, r) {
                  return Promise.all(d.map(async (o) => this.add(o, r)));
                }
                start() {
                  return (
                    this._isPaused &&
                      ((this._isPaused = !1), this._processQueue()),
                    this
                  );
                }
                pause() {
                  this._isPaused = !0;
                }
                clear() {
                  this._queue = new this._queueClass();
                }
                async onEmpty() {
                  if (this._queue.size !== 0)
                    return new Promise((d) => {
                      let r = this._resolveEmpty;
                      this._resolveEmpty = () => {
                        r(), d();
                      };
                    });
                }
                async onIdle() {
                  if (this._pendingCount !== 0 || this._queue.size !== 0)
                    return new Promise((d) => {
                      let r = this._resolveIdle;
                      this._resolveIdle = () => {
                        r(), d();
                      };
                    });
                }
                get size() {
                  return this._queue.size;
                }
                sizeBy(d) {
                  return this._queue.filter(d).length;
                }
                get pending() {
                  return this._pendingCount;
                }
                get isPaused() {
                  return this._isPaused;
                }
                get timeout() {
                  return this._timeout;
                }
                set timeout(d) {
                  this._timeout = d;
                }
              }
              P.default = _;
            })(),
              (N.exports = P);
          })();
        },
        238: (N) => {
          "use strict";
          (N.exports = S), (N.exports.preferredMediaTypes = S);
          var A = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
          function b(i, _) {
            var m = A.exec(i);
            if (!m) return null;
            var d = Object.create(null),
              r = 1,
              o = m[2],
              c = m[1];
            if (m[3])
              for (
                var s = (function (O) {
                    for (var T = O.split(";"), I = 1, K = 0; I < T.length; I++)
                      h(T[K]) % 2 == 0 ? (T[++K] = T[I]) : (T[K] += ";" + T[I]);
                    T.length = K + 1;
                    for (var I = 0; I < T.length; I++) T[I] = T[I].trim();
                    return T;
                  })(m[3]).map(e),
                  p = 0;
                p < s.length;
                p++
              ) {
                var u = s[p],
                  f = u[0].toLowerCase(),
                  v = u[1],
                  R =
                    v && v[0] === '"' && v[v.length - 1] === '"'
                      ? v.slice(1, -1)
                      : v;
                if (f === "q") {
                  r = parseFloat(R);
                  break;
                }
                d[f] = R;
              }
            return { type: c, subtype: o, params: d, q: r, i: _ };
          }
          function S(i, _) {
            var m = (function (r) {
              for (
                var o = (function (u) {
                    for (var f = u.split(","), v = 1, R = 0; v < f.length; v++)
                      h(f[R]) % 2 == 0 ? (f[++R] = f[v]) : (f[R] += "," + f[v]);
                    return (f.length = R + 1), f;
                  })(r),
                  c = 0,
                  s = 0;
                c < o.length;
                c++
              ) {
                var p = b(o[c].trim(), c);
                p && (o[s++] = p);
              }
              return (o.length = s), o;
            })(i === void 0 ? "*/*" : i || "");
            if (!_) return m.filter(y).sort(P).map(x);
            var d = _.map(function (r, o) {
              for (var c = { o: -1, q: 0, s: 0 }, s = 0; s < m.length; s++) {
                var p = (function (u, f, v) {
                  var R = b(u),
                    O = 0;
                  if (!R) return null;
                  if (f.type.toLowerCase() == R.type.toLowerCase()) O |= 4;
                  else if (f.type != "*") return null;
                  if (f.subtype.toLowerCase() == R.subtype.toLowerCase())
                    O |= 2;
                  else if (f.subtype != "*") return null;
                  var T = Object.keys(f.params);
                  if (T.length > 0)
                    if (
                      T.every(function (I) {
                        return (
                          f.params[I] == "*" ||
                          (f.params[I] || "").toLowerCase() ==
                            (R.params[I] || "").toLowerCase()
                        );
                      })
                    )
                      O |= 1;
                    else return null;
                  return { i: v, o: f.i, q: f.q, s: O };
                })(r, m[s], o);
                p && 0 > (c.s - p.s || c.q - p.q || c.o - p.o) && (c = p);
              }
              return c;
            });
            return d
              .filter(y)
              .sort(P)
              .map(function (r) {
                return _[d.indexOf(r)];
              });
          }
          function P(i, _) {
            return _.q - i.q || _.s - i.s || i.o - _.o || i.i - _.i || 0;
          }
          function x(i) {
            return i.type + "/" + i.subtype;
          }
          function y(i) {
            return i.q > 0;
          }
          function h(i) {
            for (var _ = 0, m = 0; (m = i.indexOf('"', m)) !== -1; ) _++, m++;
            return _;
          }
          function e(i) {
            var _,
              m,
              d = i.indexOf("=");
            return (
              d === -1 ? (_ = i) : ((_ = i.slice(0, d)), (m = i.slice(d + 1))),
              [_, m]
            );
          }
        },
        340: (N, A, b) => {
          "use strict";
          function S(P) {
            return (
              typeof P == "object" &&
              P !== null &&
              "digest" in P &&
              P.digest === "BAILOUT_TO_CLIENT_SIDE_RENDERING"
            );
          }
          b.d(A, { C: () => S });
        },
        356: (N) => {
          "use strict";
          N.exports = (qr(), rr(St));
        },
        366: (N, A, b) => {
          "use strict";
          var S = b(194),
            P = b(931),
            x = b(862),
            y = b(238);
          function h(e) {
            if (!(this instanceof h)) return new h(e);
            this.request = e;
          }
          (N.exports = h),
            (N.exports.Negotiator = h),
            (h.prototype.charset = function (e) {
              var i = this.charsets(e);
              return i && i[0];
            }),
            (h.prototype.charsets = function (e) {
              return S(this.request.headers["accept-charset"], e);
            }),
            (h.prototype.encoding = function (e, i) {
              var _ = this.encodings(e, i);
              return _ && _[0];
            }),
            (h.prototype.encodings = function (e, i) {
              return P(
                this.request.headers["accept-encoding"],
                e,
                (i || {}).preferred
              );
            }),
            (h.prototype.language = function (e) {
              var i = this.languages(e);
              return i && i[0];
            }),
            (h.prototype.languages = function (e) {
              return x(this.request.headers["accept-language"], e);
            }),
            (h.prototype.mediaType = function (e) {
              var i = this.mediaTypes(e);
              return i && i[0];
            }),
            (h.prototype.mediaTypes = function (e) {
              return y(this.request.headers.accept, e);
            }),
            (h.prototype.preferredCharset = h.prototype.charset),
            (h.prototype.preferredCharsets = h.prototype.charsets),
            (h.prototype.preferredEncoding = h.prototype.encoding),
            (h.prototype.preferredEncodings = h.prototype.encodings),
            (h.prototype.preferredLanguage = h.prototype.language),
            (h.prototype.preferredLanguages = h.prototype.languages),
            (h.prototype.preferredMediaType = h.prototype.mediaType),
            (h.prototype.preferredMediaTypes = h.prototype.mediaTypes);
        },
        378: (N, A, b) => {
          "use strict";
          b.d(A, { Q: () => S });
          var S = (function (P) {
            return (
              (P[(P.SeeOther = 303)] = "SeeOther"),
              (P[(P.TemporaryRedirect = 307)] = "TemporaryRedirect"),
              (P[(P.PermanentRedirect = 308)] = "PermanentRedirect"),
              P
            );
          })({});
        },
        379: (N, A, b) => {
          "use strict";
          b.d(A, { J: () => S });
          let S = (0, b(58).xl)();
        },
        392: (N, A, b) => {
          "use strict";
          Object.defineProperty(A, "__esModule", { value: !0 }),
            (function (h, e) {
              for (var i in e)
                Object.defineProperty(h, i, { enumerable: !0, get: e[i] });
            })(A, {
              getTestReqInfo: function () {
                return y;
              },
              withRequest: function () {
                return x;
              },
            });
          let S = new (b(521).AsyncLocalStorage)();
          function P(h, e) {
            let i = e.header(h, "next-test-proxy-port");
            return i
              ? {
                  url: e.url(h),
                  proxyPort: Number(i),
                  testData: e.header(h, "next-test-data") || "",
                }
              : void 0;
          }
          function x(h, e, i) {
            let _ = P(h, e);
            return _ ? S.run(_, i) : i();
          }
          function y(h, e) {
            return S.getStore() || (h && e ? P(h, e) : void 0);
          }
        },
        440: (N, A) => {
          "use strict";
          Symbol.for("react.transitional.element"),
            Symbol.for("react.portal"),
            Symbol.for("react.fragment"),
            Symbol.for("react.strict_mode"),
            Symbol.for("react.profiler"),
            Symbol.for("react.forward_ref"),
            Symbol.for("react.suspense"),
            Symbol.for("react.memo"),
            Symbol.for("react.lazy");
        },
        443: (N) => {
          "use strict";
          var A = Object.defineProperty,
            b = Object.getOwnPropertyDescriptor,
            S = Object.getOwnPropertyNames,
            P = Object.prototype.hasOwnProperty,
            x = {};
          function y(r) {
            var o;
            let c = [
                "path" in r && r.path && `Path=${r.path}`,
                "expires" in r &&
                  (r.expires || r.expires === 0) &&
                  `Expires=${(typeof r.expires == "number"
                    ? new Date(r.expires)
                    : r.expires
                  ).toUTCString()}`,
                "maxAge" in r &&
                  typeof r.maxAge == "number" &&
                  `Max-Age=${r.maxAge}`,
                "domain" in r && r.domain && `Domain=${r.domain}`,
                "secure" in r && r.secure && "Secure",
                "httpOnly" in r && r.httpOnly && "HttpOnly",
                "sameSite" in r && r.sameSite && `SameSite=${r.sameSite}`,
                "partitioned" in r && r.partitioned && "Partitioned",
                "priority" in r && r.priority && `Priority=${r.priority}`,
              ].filter(Boolean),
              s = `${r.name}=${encodeURIComponent(
                (o = r.value) != null ? o : ""
              )}`;
            return c.length === 0 ? s : `${s}; ${c.join("; ")}`;
          }
          function h(r) {
            let o = new Map();
            for (let c of r.split(/; */)) {
              if (!c) continue;
              let s = c.indexOf("=");
              if (s === -1) {
                o.set(c, "true");
                continue;
              }
              let [p, u] = [c.slice(0, s), c.slice(s + 1)];
              try {
                o.set(p, decodeURIComponent(u ?? "true"));
              } catch {}
            }
            return o;
          }
          function e(r) {
            if (!r) return;
            let [[o, c], ...s] = h(r),
              {
                domain: p,
                expires: u,
                httponly: f,
                maxage: v,
                path: R,
                samesite: O,
                secure: T,
                partitioned: I,
                priority: K,
              } = Object.fromEntries(
                s.map(([H, z]) => [H.toLowerCase().replace(/-/g, ""), z])
              );
            {
              var V,
                M,
                re = {
                  name: o,
                  value: decodeURIComponent(c),
                  domain: p,
                  ...(u && { expires: new Date(u) }),
                  ...(f && { httpOnly: !0 }),
                  ...(typeof v == "string" && { maxAge: Number(v) }),
                  path: R,
                  ...(O && {
                    sameSite: i.includes((V = (V = O).toLowerCase()))
                      ? V
                      : void 0,
                  }),
                  ...(T && { secure: !0 }),
                  ...(K && {
                    priority: _.includes((M = (M = K).toLowerCase()))
                      ? M
                      : void 0,
                  }),
                  ...(I && { partitioned: !0 }),
                };
              let H = {};
              for (let z in re) re[z] && (H[z] = re[z]);
              return H;
            }
          }
          ((r, o) => {
            for (var c in o) A(r, c, { get: o[c], enumerable: !0 });
          })(x, {
            RequestCookies: () => m,
            ResponseCookies: () => d,
            parseCookie: () => h,
            parseSetCookie: () => e,
            stringifyCookie: () => y,
          }),
            (N.exports = ((r, o, c, s) => {
              if ((o && typeof o == "object") || typeof o == "function")
                for (let p of S(o))
                  P.call(r, p) ||
                    p === c ||
                    A(r, p, {
                      get: () => o[p],
                      enumerable: !(s = b(o, p)) || s.enumerable,
                    });
              return r;
            })(A({}, "__esModule", { value: !0 }), x));
          var i = ["strict", "lax", "none"],
            _ = ["low", "medium", "high"],
            m = class {
              constructor(r) {
                (this._parsed = new Map()), (this._headers = r);
                let o = r.get("cookie");
                if (o)
                  for (let [c, s] of h(o))
                    this._parsed.set(c, { name: c, value: s });
              }
              [Symbol.iterator]() {
                return this._parsed[Symbol.iterator]();
              }
              get size() {
                return this._parsed.size;
              }
              get(...r) {
                let o = typeof r[0] == "string" ? r[0] : r[0].name;
                return this._parsed.get(o);
              }
              getAll(...r) {
                var o;
                let c = Array.from(this._parsed);
                if (!r.length) return c.map(([p, u]) => u);
                let s =
                  typeof r[0] == "string"
                    ? r[0]
                    : (o = r[0]) == null
                    ? void 0
                    : o.name;
                return c.filter(([p]) => p === s).map(([p, u]) => u);
              }
              has(r) {
                return this._parsed.has(r);
              }
              set(...r) {
                let [o, c] = r.length === 1 ? [r[0].name, r[0].value] : r,
                  s = this._parsed;
                return (
                  s.set(o, { name: o, value: c }),
                  this._headers.set(
                    "cookie",
                    Array.from(s)
                      .map(([p, u]) => y(u))
                      .join("; ")
                  ),
                  this
                );
              }
              delete(r) {
                let o = this._parsed,
                  c = Array.isArray(r)
                    ? r.map((s) => o.delete(s))
                    : o.delete(r);
                return (
                  this._headers.set(
                    "cookie",
                    Array.from(o)
                      .map(([s, p]) => y(p))
                      .join("; ")
                  ),
                  c
                );
              }
              clear() {
                return this.delete(Array.from(this._parsed.keys())), this;
              }
              [Symbol.for("edge-runtime.inspect.custom")]() {
                return `RequestCookies ${JSON.stringify(
                  Object.fromEntries(this._parsed)
                )}`;
              }
              toString() {
                return [...this._parsed.values()]
                  .map((r) => `${r.name}=${encodeURIComponent(r.value)}`)
                  .join("; ");
              }
            },
            d = class {
              constructor(r) {
                var o, c, s;
                (this._parsed = new Map()), (this._headers = r);
                let p =
                  (s =
                    (c = (o = r.getSetCookie) == null ? void 0 : o.call(r)) !=
                    null
                      ? c
                      : r.get("set-cookie")) != null
                    ? s
                    : [];
                for (let u of Array.isArray(p)
                  ? p
                  : (function (f) {
                      if (!f) return [];
                      var v,
                        R,
                        O,
                        T,
                        I,
                        K = [],
                        V = 0;
                      function M() {
                        for (; V < f.length && /\s/.test(f.charAt(V)); ) V += 1;
                        return V < f.length;
                      }
                      for (; V < f.length; ) {
                        for (v = V, I = !1; M(); )
                          if ((R = f.charAt(V)) === ",") {
                            for (
                              O = V, V += 1, M(), T = V;
                              V < f.length &&
                              (R = f.charAt(V)) !== "=" &&
                              R !== ";" &&
                              R !== ",";

                            )
                              V += 1;
                            V < f.length && f.charAt(V) === "="
                              ? ((I = !0),
                                (V = T),
                                K.push(f.substring(v, O)),
                                (v = V))
                              : (V = O + 1);
                          } else V += 1;
                        (!I || V >= f.length) &&
                          K.push(f.substring(v, f.length));
                      }
                      return K;
                    })(p)) {
                  let f = e(u);
                  f && this._parsed.set(f.name, f);
                }
              }
              get(...r) {
                let o = typeof r[0] == "string" ? r[0] : r[0].name;
                return this._parsed.get(o);
              }
              getAll(...r) {
                var o;
                let c = Array.from(this._parsed.values());
                if (!r.length) return c;
                let s =
                  typeof r[0] == "string"
                    ? r[0]
                    : (o = r[0]) == null
                    ? void 0
                    : o.name;
                return c.filter((p) => p.name === s);
              }
              has(r) {
                return this._parsed.has(r);
              }
              set(...r) {
                let [o, c, s] =
                    r.length === 1 ? [r[0].name, r[0].value, r[0]] : r,
                  p = this._parsed;
                return (
                  p.set(
                    o,
                    (function (u = { name: "", value: "" }) {
                      return (
                        typeof u.expires == "number" &&
                          (u.expires = new Date(u.expires)),
                        u.maxAge &&
                          (u.expires = new Date(Date.now() + 1e3 * u.maxAge)),
                        (u.path === null || u.path === void 0) &&
                          (u.path = "/"),
                        u
                      );
                    })({ name: o, value: c, ...s })
                  ),
                  (function (u, f) {
                    for (let [, v] of (f.delete("set-cookie"), u)) {
                      let R = y(v);
                      f.append("set-cookie", R);
                    }
                  })(p, this._headers),
                  this
                );
              }
              delete(...r) {
                let [o, c] =
                  typeof r[0] == "string" ? [r[0]] : [r[0].name, r[0]];
                return this.set({
                  ...c,
                  name: o,
                  value: "",
                  expires: new Date(0),
                });
              }
              [Symbol.for("edge-runtime.inspect.custom")]() {
                return `ResponseCookies ${JSON.stringify(
                  Object.fromEntries(this._parsed)
                )}`;
              }
              toString() {
                return [...this._parsed.values()].map(y).join("; ");
              }
            };
        },
        449: (N, A, b) => {
          var S;
          (() => {
            var P = {
                226: function (h, e) {
                  (function (i, _) {
                    "use strict";
                    var m = "function",
                      d = "undefined",
                      r = "object",
                      o = "string",
                      c = "major",
                      s = "model",
                      p = "name",
                      u = "type",
                      f = "vendor",
                      v = "version",
                      R = "architecture",
                      O = "console",
                      T = "mobile",
                      I = "tablet",
                      K = "smarttv",
                      V = "wearable",
                      M = "embedded",
                      re = "Amazon",
                      H = "Apple",
                      z = "ASUS",
                      Re = "BlackBerry",
                      Se = "Browser",
                      De = "Chrome",
                      qe = "Firefox",
                      Oe = "Google",
                      L = "Huawei",
                      Be = "Microsoft",
                      Ke = "Motorola",
                      Je = "Opera",
                      ht = "Samsung",
                      Ne = "Sharp",
                      it = "Sony",
                      _t = "Xiaomi",
                      at = "Zebra",
                      He = "Facebook",
                      mt = "Chromium OS",
                      gt = "Mac OS",
                      Pt = function (de, pe) {
                        var X = {};
                        for (var ve in de)
                          pe[ve] && pe[ve].length % 2 == 0
                            ? (X[ve] = pe[ve].concat(de[ve]))
                            : (X[ve] = de[ve]);
                        return X;
                      },
                      Qe = function (de) {
                        for (var pe = {}, X = 0; X < de.length; X++)
                          pe[de[X].toUpperCase()] = de[X];
                        return pe;
                      },
                      dt = function (de, pe) {
                        return typeof de === o && Fe(pe).indexOf(Fe(de)) !== -1;
                      },
                      Fe = function (de) {
                        return de.toLowerCase();
                      },
                      ot = function (de, pe) {
                        if (typeof de === o)
                          return (
                            (de = de.replace(/^\s\s*/, "")),
                            typeof pe === d ? de : de.substring(0, 350)
                          );
                      },
                      Ze = function (de, pe) {
                        for (
                          var X, ve, $e, ce, Xe, $, Ue = 0;
                          Ue < pe.length && !Xe;

                        ) {
                          var ut = pe[Ue],
                            vt = pe[Ue + 1];
                          for (X = ve = 0; X < ut.length && !Xe && ut[X]; )
                            if ((Xe = ut[X++].exec(de)))
                              for ($e = 0; $e < vt.length; $e++)
                                ($ = Xe[++ve]),
                                  typeof (ce = vt[$e]) === r && ce.length > 0
                                    ? ce.length === 2
                                      ? typeof ce[1] == m
                                        ? (this[ce[0]] = ce[1].call(this, $))
                                        : (this[ce[0]] = ce[1])
                                      : ce.length === 3
                                      ? typeof ce[1] !== m ||
                                        (ce[1].exec && ce[1].test)
                                        ? (this[ce[0]] = $
                                            ? $.replace(ce[1], ce[2])
                                            : void 0)
                                        : (this[ce[0]] = $
                                            ? ce[1].call(this, $, ce[2])
                                            : void 0)
                                      : ce.length === 4 &&
                                        (this[ce[0]] = $
                                          ? ce[3].call(
                                              this,
                                              $.replace(ce[1], ce[2])
                                            )
                                          : _)
                                    : (this[ce] = $ || _);
                          Ue += 2;
                        }
                      },
                      yt = function (de, pe) {
                        for (var X in pe)
                          if (typeof pe[X] === r && pe[X].length > 0) {
                            for (var ve = 0; ve < pe[X].length; ve++)
                              if (dt(pe[X][ve], de)) return X === "?" ? _ : X;
                          } else if (dt(pe[X], de)) return X === "?" ? _ : X;
                        return de;
                      },
                      Rt = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM",
                      },
                      Ot = {
                        browser: [
                          [/\b(?:crmo|crios)\/([\w\.]+)/i],
                          [v, [p, "Chrome"]],
                          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                          [v, [p, "Edge"]],
                          [
                            /(opera mini)\/([-\w\.]+)/i,
                            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                          ],
                          [p, v],
                          [/opios[\/ ]+([\w\.]+)/i],
                          [v, [p, Je + " Mini"]],
                          [/\bopr\/([\w\.]+)/i],
                          [v, [p, Je]],
                          [
                            /(kindle)\/([\w\.]+)/i,
                            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                            /(?:ms|\()(ie) ([\w\.]+)/i,
                            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                            /(heytap|ovi)browser\/([\d\.]+)/i,
                            /(weibo)__([\d\.]+)/i,
                          ],
                          [p, v],
                          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                          [v, [p, "UC" + Se]],
                          [
                            /microm.+\bqbcore\/([\w\.]+)/i,
                            /\bqbcore\/([\w\.]+).+microm/i,
                          ],
                          [v, [p, "WeChat(Win) Desktop"]],
                          [/micromessenger\/([\w\.]+)/i],
                          [v, [p, "WeChat"]],
                          [/konqueror\/([\w\.]+)/i],
                          [v, [p, "Konqueror"]],
                          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                          [v, [p, "IE"]],
                          [/ya(?:search)?browser\/([\w\.]+)/i],
                          [v, [p, "Yandex"]],
                          [/(avast|avg)\/([\w\.]+)/i],
                          [[p, /(.+)/, "$1 Secure " + Se], v],
                          [/\bfocus\/([\w\.]+)/i],
                          [v, [p, qe + " Focus"]],
                          [/\bopt\/([\w\.]+)/i],
                          [v, [p, Je + " Touch"]],
                          [/coc_coc\w+\/([\w\.]+)/i],
                          [v, [p, "Coc Coc"]],
                          [/dolfin\/([\w\.]+)/i],
                          [v, [p, "Dolphin"]],
                          [/coast\/([\w\.]+)/i],
                          [v, [p, Je + " Coast"]],
                          [/miuibrowser\/([\w\.]+)/i],
                          [v, [p, "MIUI " + Se]],
                          [/fxios\/([-\w\.]+)/i],
                          [v, [p, qe]],
                          [/\bqihu|(qi?ho?o?|360)browser/i],
                          [[p, "360 " + Se]],
                          [
                            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i,
                          ],
                          [[p, /(.+)/, "$1 " + Se], v],
                          [/(comodo_dragon)\/([\w\.]+)/i],
                          [[p, /_/g, " "], v],
                          [
                            /(electron)\/([\w\.]+) safari/i,
                            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
                          ],
                          [p, v],
                          [
                            /(metasr)[\/ ]?([\w\.]+)/i,
                            /(lbbrowser)/i,
                            /\[(linkedin)app\]/i,
                          ],
                          [p],
                          [
                            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i,
                          ],
                          [[p, He], v],
                          [
                            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                            /safari (line)\/([\w\.]+)/i,
                            /\b(line)\/([\w\.]+)\/iab/i,
                            /(chromium|instagram)[\/ ]([-\w\.]+)/i,
                          ],
                          [p, v],
                          [/\bgsa\/([\w\.]+) .*safari\//i],
                          [v, [p, "GSA"]],
                          [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                          [v, [p, "TikTok"]],
                          [/headlesschrome(?:\/([\w\.]+)| )/i],
                          [v, [p, De + " Headless"]],
                          [/ wv\).+(chrome)\/([\w\.]+)/i],
                          [[p, De + " WebView"], v],
                          [
                            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i,
                          ],
                          [v, [p, "Android " + Se]],
                          [
                            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i,
                          ],
                          [p, v],
                          [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                          [v, [p, "Mobile Safari"]],
                          [
                            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i,
                          ],
                          [v, p],
                          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                          [
                            p,
                            [
                              v,
                              yt,
                              {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/",
                              },
                            ],
                          ],
                          [/(webkit|khtml)\/([\w\.]+)/i],
                          [p, v],
                          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                          [[p, "Netscape"], v],
                          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                          [v, [p, qe + " Reality"]],
                          [
                            /ekiohf.+(flow)\/([\w\.]+)/i,
                            /(swiftfox)/i,
                            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                            /(firefox)\/([\w\.]+)/i,
                            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                            /(links) \(([\w\.]+)/i,
                            /panasonic;(viera)/i,
                          ],
                          [p, v],
                          [/(cobalt)\/([\w\.]+)/i],
                          [p, [v, /master.|lts./, ""]],
                        ],
                        cpu: [
                          [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                          [[R, "amd64"]],
                          [/(ia32(?=;))/i],
                          [[R, Fe]],
                          [/((?:i[346]|x)86)[;\)]/i],
                          [[R, "ia32"]],
                          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                          [[R, "arm64"]],
                          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                          [[R, "armhf"]],
                          [/windows (ce|mobile); ppc;/i],
                          [[R, "arm"]],
                          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                          [[R, /ower/, "", Fe]],
                          [/(sun4\w)[;\)]/i],
                          [[R, "sparc"]],
                          [
                            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                          ],
                          [[R, Fe]],
                        ],
                        device: [
                          [
                            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                          ],
                          [s, [f, ht], [u, I]],
                          [
                            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                            /samsung[- ]([-\w]+)/i,
                            /sec-(sgh\w+)/i,
                          ],
                          [s, [f, ht], [u, T]],
                          [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                          [s, [f, H], [u, T]],
                          [
                            /\((ipad);[-\w\),; ]+apple/i,
                            /applecoremedia\/[\w\.]+ \((ipad)/i,
                            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                          ],
                          [s, [f, H], [u, I]],
                          [/(macintosh);/i],
                          [s, [f, H]],
                          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                          [s, [f, Ne], [u, T]],
                          [
                            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i,
                          ],
                          [s, [f, L], [u, I]],
                          [
                            /(?:huawei|honor)([-\w ]+)[;\)]/i,
                            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                          ],
                          [s, [f, L], [u, T]],
                          [
                            /\b(poco[\w ]+)(?: bui|\))/i,
                            /\b; (\w+) build\/hm\1/i,
                            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                          ],
                          [
                            [s, /_/g, " "],
                            [f, _t],
                            [u, T],
                          ],
                          [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                          [
                            [s, /_/g, " "],
                            [f, _t],
                            [u, I],
                          ],
                          [
                            /; (\w+) bui.+ oppo/i,
                            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
                          ],
                          [s, [f, "OPPO"], [u, T]],
                          [
                            /vivo (\w+)(?: bui|\))/i,
                            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i,
                          ],
                          [s, [f, "Vivo"], [u, T]],
                          [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                          [s, [f, "Realme"], [u, T]],
                          [
                            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                            /\bmot(?:orola)?[- ](\w*)/i,
                            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                          ],
                          [s, [f, Ke], [u, T]],
                          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                          [s, [f, Ke], [u, I]],
                          [
                            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                          ],
                          [s, [f, "LG"], [u, I]],
                          [
                            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                            /\blg-?([\d\w]+) bui/i,
                          ],
                          [s, [f, "LG"], [u, T]],
                          [
                            /(ideatab[-\w ]+)/i,
                            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                          ],
                          [s, [f, "Lenovo"], [u, I]],
                          [
                            /(?:maemo|nokia).*(n900|lumia \d+)/i,
                            /nokia[-_ ]?([-\w\.]*)/i,
                          ],
                          [
                            [s, /_/g, " "],
                            [f, "Nokia"],
                            [u, T],
                          ],
                          [/(pixel c)\b/i],
                          [s, [f, Oe], [u, I]],
                          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                          [s, [f, Oe], [u, T]],
                          [
                            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                          ],
                          [s, [f, it], [u, T]],
                          [
                            /sony tablet [ps]/i,
                            /\b(?:sony)?sgp\w+(?: bui|\))/i,
                          ],
                          [
                            [s, "Xperia Tablet"],
                            [f, it],
                            [u, I],
                          ],
                          [
                            / (kb2005|in20[12]5|be20[12][59])\b/i,
                            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                          ],
                          [s, [f, "OnePlus"], [u, T]],
                          [
                            /(alexa)webm/i,
                            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                            /(kf[a-z]+)( bui|\)).+silk\//i,
                          ],
                          [s, [f, re], [u, I]],
                          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                          [
                            [s, /(.+)/g, "Fire Phone $1"],
                            [f, re],
                            [u, T],
                          ],
                          [/(playbook);[-\w\),; ]+(rim)/i],
                          [s, f, [u, I]],
                          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                          [s, [f, Re], [u, T]],
                          [
                            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                          ],
                          [s, [f, z], [u, I]],
                          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                          [s, [f, z], [u, T]],
                          [/(nexus 9)/i],
                          [s, [f, "HTC"], [u, I]],
                          [
                            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
                          ],
                          [f, [s, /_/g, " "], [u, T]],
                          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                          [s, [f, "Acer"], [u, I]],
                          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                          [s, [f, "Meizu"], [u, T]],
                          [
                            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                            /(hp) ([\w ]+\w)/i,
                            /(asus)-?(\w+)/i,
                            /(microsoft); (lumia[\w ]+)/i,
                            /(lenovo)[-_ ]?([-\w]+)/i,
                            /(jolla)/i,
                            /(oppo) ?([\w ]+) bui/i,
                          ],
                          [f, s, [u, T]],
                          [
                            /(kobo)\s(ereader|touch)/i,
                            /(archos) (gamepad2?)/i,
                            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                            /(kindle)\/([\w\.]+)/i,
                            /(nook)[\w ]+build\/(\w+)/i,
                            /(dell) (strea[kpr\d ]*[\dko])/i,
                            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                            /(trinity)[- ]*(t\d{3}) bui/i,
                            /(gigaset)[- ]+(q\w{1,9}) bui/i,
                            /(vodafone) ([\w ]+)(?:\)| bui)/i,
                          ],
                          [f, s, [u, I]],
                          [/(surface duo)/i],
                          [s, [f, Be], [u, I]],
                          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                          [s, [f, "Fairphone"], [u, T]],
                          [/(u304aa)/i],
                          [s, [f, "AT&T"], [u, T]],
                          [/\bsie-(\w*)/i],
                          [s, [f, "Siemens"], [u, T]],
                          [/\b(rct\w+) b/i],
                          [s, [f, "RCA"], [u, I]],
                          [/\b(venue[\d ]{2,7}) b/i],
                          [s, [f, "Dell"], [u, I]],
                          [/\b(q(?:mv|ta)\w+) b/i],
                          [s, [f, "Verizon"], [u, I]],
                          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                          [s, [f, "Barnes & Noble"], [u, I]],
                          [/\b(tm\d{3}\w+) b/i],
                          [s, [f, "NuVision"], [u, I]],
                          [/\b(k88) b/i],
                          [s, [f, "ZTE"], [u, I]],
                          [/\b(nx\d{3}j) b/i],
                          [s, [f, "ZTE"], [u, T]],
                          [/\b(gen\d{3}) b.+49h/i],
                          [s, [f, "Swiss"], [u, T]],
                          [/\b(zur\d{3}) b/i],
                          [s, [f, "Swiss"], [u, I]],
                          [/\b((zeki)?tb.*\b) b/i],
                          [s, [f, "Zeki"], [u, I]],
                          [
                            /\b([yr]\d{2}) b/i,
                            /\b(dragon[- ]+touch |dt)(\w{5}) b/i,
                          ],
                          [[f, "Dragon Touch"], s, [u, I]],
                          [/\b(ns-?\w{0,9}) b/i],
                          [s, [f, "Insignia"], [u, I]],
                          [/\b((nxa|next)-?\w{0,9}) b/i],
                          [s, [f, "NextBook"], [u, I]],
                          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                          [[f, "Voice"], s, [u, T]],
                          [/\b(lvtel\-)?(v1[12]) b/i],
                          [[f, "LvTel"], s, [u, T]],
                          [/\b(ph-1) /i],
                          [s, [f, "Essential"], [u, T]],
                          [/\b(v(100md|700na|7011|917g).*\b) b/i],
                          [s, [f, "Envizen"], [u, I]],
                          [/\b(trio[-\w\. ]+) b/i],
                          [s, [f, "MachSpeed"], [u, I]],
                          [/\btu_(1491) b/i],
                          [s, [f, "Rotor"], [u, I]],
                          [/(shield[\w ]+) b/i],
                          [s, [f, "Nvidia"], [u, I]],
                          [/(sprint) (\w+)/i],
                          [f, s, [u, T]],
                          [/(kin\.[onetw]{3})/i],
                          [
                            [s, /\./g, " "],
                            [f, Be],
                            [u, T],
                          ],
                          [
                            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i,
                          ],
                          [s, [f, at], [u, I]],
                          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                          [s, [f, at], [u, T]],
                          [/smart-tv.+(samsung)/i],
                          [f, [u, K]],
                          [/hbbtv.+maple;(\d+)/i],
                          [
                            [s, /^/, "SmartTV"],
                            [f, ht],
                            [u, K],
                          ],
                          [
                            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i,
                          ],
                          [
                            [f, "LG"],
                            [u, K],
                          ],
                          [/(apple) ?tv/i],
                          [f, [s, H + " TV"], [u, K]],
                          [/crkey/i],
                          [
                            [s, De + "cast"],
                            [f, Oe],
                            [u, K],
                          ],
                          [/droid.+aft(\w)( bui|\))/i],
                          [s, [f, re], [u, K]],
                          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                          [s, [f, Ne], [u, K]],
                          [/(bravia[\w ]+)( bui|\))/i],
                          [s, [f, it], [u, K]],
                          [/(mitv-\w{5}) bui/i],
                          [s, [f, _t], [u, K]],
                          [/Hbbtv.*(technisat) (.*);/i],
                          [f, s, [u, K]],
                          [
                            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
                          ],
                          [
                            [f, ot],
                            [s, ot],
                            [u, K],
                          ],
                          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                          [[u, K]],
                          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                          [f, s, [u, O]],
                          [/droid.+; (shield) bui/i],
                          [s, [f, "Nvidia"], [u, O]],
                          [/(playstation [345portablevi]+)/i],
                          [s, [f, it], [u, O]],
                          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                          [s, [f, Be], [u, O]],
                          [/((pebble))app/i],
                          [f, s, [u, V]],
                          [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                          [s, [f, H], [u, V]],
                          [/droid.+; (glass) \d/i],
                          [s, [f, Oe], [u, V]],
                          [/droid.+; (wt63?0{2,3})\)/i],
                          [s, [f, at], [u, V]],
                          [/(quest( 2| pro)?)/i],
                          [s, [f, He], [u, V]],
                          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                          [f, [u, M]],
                          [/(aeobc)\b/i],
                          [s, [f, re], [u, M]],
                          [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i,
                          ],
                          [s, [u, T]],
                          [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i,
                          ],
                          [s, [u, I]],
                          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                          [[u, I]],
                          [
                            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
                          ],
                          [[u, T]],
                          [/(android[-\w\. ]{0,9});.+buil/i],
                          [s, [f, "Generic"]],
                        ],
                        engine: [
                          [/windows.+ edge\/([\w\.]+)/i],
                          [v, [p, "EdgeHTML"]],
                          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                          [v, [p, "Blink"]],
                          [
                            /(presto)\/([\w\.]+)/i,
                            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                            /ekioh(flow)\/([\w\.]+)/i,
                            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                            /(icab)[\/ ]([23]\.[\d\.]+)/i,
                            /\b(libweb)/i,
                          ],
                          [p, v],
                          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                          [v, p],
                        ],
                        os: [
                          [/microsoft (windows) (vista|xp)/i],
                          [p, v],
                          [
                            /(windows) nt 6\.2; (arm)/i,
                            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                          ],
                          [p, [v, yt, Rt]],
                          [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                          [
                            [p, "Windows"],
                            [v, yt, Rt],
                          ],
                          [
                            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                            /ios;fbsv\/([\d\.]+)/i,
                            /cfnetwork\/.+darwin/i,
                          ],
                          [
                            [v, /_/g, "."],
                            [p, "iOS"],
                          ],
                          [
                            /(mac os x) ?([\w\. ]*)/i,
                            /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                          ],
                          [
                            [p, gt],
                            [v, /_/g, "."],
                          ],
                          [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                          [v, p],
                          [
                            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                            /(blackberry)\w*\/([\w\.]*)/i,
                            /(tizen|kaios)[\/ ]([\w\.]+)/i,
                            /\((series40);/i,
                          ],
                          [p, v],
                          [/\(bb(10);/i],
                          [v, [p, Re]],
                          [
                            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i,
                          ],
                          [v, [p, "Symbian"]],
                          [
                            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                          ],
                          [v, [p, qe + " OS"]],
                          [
                            /web0s;.+rt(tv)/i,
                            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
                          ],
                          [v, [p, "webOS"]],
                          [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                          [v, [p, "watchOS"]],
                          [/crkey\/([\d\.]+)/i],
                          [v, [p, De + "cast"]],
                          [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                          [[p, mt], v],
                          [
                            /panasonic;(viera)/i,
                            /(netrange)mmh/i,
                            /(nettv)\/(\d+\.[\w\.]+)/i,
                            /(nintendo|playstation) ([wids345portablevuch]+)/i,
                            /(xbox); +xbox ([^\);]+)/i,
                            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                            /(mint)[\/\(\) ]?(\w*)/i,
                            /(mageia|vectorlinux)[; ]/i,
                            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                            /(hurd|linux) ?([\w\.]*)/i,
                            /(gnu) ?([\w\.]*)/i,
                            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                            /(haiku) (\w+)/i,
                          ],
                          [p, v],
                          [/(sunos) ?([\w\.\d]*)/i],
                          [[p, "Solaris"], v],
                          [
                            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                            /(unix) ?([\w\.]*)/i,
                          ],
                          [p, v],
                        ],
                      },
                      Le = function (de, pe) {
                        if (
                          (typeof de === r && ((pe = de), (de = _)),
                          !(this instanceof Le))
                        )
                          return new Le(de, pe).getResult();
                        var X = typeof i !== d && i.navigator ? i.navigator : _,
                          ve = de || (X && X.userAgent ? X.userAgent : ""),
                          $e = X && X.userAgentData ? X.userAgentData : _,
                          ce = pe ? Pt(Ot, pe) : Ot,
                          Xe = X && X.userAgent == ve;
                        return (
                          (this.getBrowser = function () {
                            var $,
                              Ue = {};
                            return (
                              (Ue[p] = _),
                              (Ue[v] = _),
                              Ze.call(Ue, ve, ce.browser),
                              (Ue[c] =
                                typeof ($ = Ue[v]) === o
                                  ? $.replace(/[^\d\.]/g, "").split(".")[0]
                                  : _),
                              Xe &&
                                X &&
                                X.brave &&
                                typeof X.brave.isBrave == m &&
                                (Ue[p] = "Brave"),
                              Ue
                            );
                          }),
                          (this.getCPU = function () {
                            var $ = {};
                            return ($[R] = _), Ze.call($, ve, ce.cpu), $;
                          }),
                          (this.getDevice = function () {
                            var $ = {};
                            return (
                              ($[f] = _),
                              ($[s] = _),
                              ($[u] = _),
                              Ze.call($, ve, ce.device),
                              Xe && !$[u] && $e && $e.mobile && ($[u] = T),
                              Xe &&
                                $[s] == "Macintosh" &&
                                X &&
                                typeof X.standalone !== d &&
                                X.maxTouchPoints &&
                                X.maxTouchPoints > 2 &&
                                (($[s] = "iPad"), ($[u] = I)),
                              $
                            );
                          }),
                          (this.getEngine = function () {
                            var $ = {};
                            return (
                              ($[p] = _),
                              ($[v] = _),
                              Ze.call($, ve, ce.engine),
                              $
                            );
                          }),
                          (this.getOS = function () {
                            var $ = {};
                            return (
                              ($[p] = _),
                              ($[v] = _),
                              Ze.call($, ve, ce.os),
                              Xe &&
                                !$[p] &&
                                $e &&
                                $e.platform != "Unknown" &&
                                ($[p] = $e.platform
                                  .replace(/chrome os/i, mt)
                                  .replace(/macos/i, gt)),
                              $
                            );
                          }),
                          (this.getResult = function () {
                            return {
                              ua: this.getUA(),
                              browser: this.getBrowser(),
                              engine: this.getEngine(),
                              os: this.getOS(),
                              device: this.getDevice(),
                              cpu: this.getCPU(),
                            };
                          }),
                          (this.getUA = function () {
                            return ve;
                          }),
                          (this.setUA = function ($) {
                            return (
                              (ve =
                                typeof $ === o && $.length > 350
                                  ? ot($, 350)
                                  : $),
                              this
                            );
                          }),
                          this.setUA(ve),
                          this
                        );
                      };
                    (Le.VERSION = "1.0.35"),
                      (Le.BROWSER = Qe([p, v, c])),
                      (Le.CPU = Qe([R])),
                      (Le.DEVICE = Qe([s, f, u, O, T, K, I, V, M])),
                      (Le.ENGINE = Le.OS = Qe([p, v])),
                      typeof e !== d
                        ? (h.exports && (e = h.exports = Le), (e.UAParser = Le))
                        : b.amdO
                        ? (S = function () {
                            return Le;
                          }.call(A, b, A, N)) === void 0 || (N.exports = S)
                        : typeof i !== d && (i.UAParser = Le);
                    var rt = typeof i !== d && (i.jQuery || i.Zepto);
                    if (rt && !rt.ua) {
                      var lt = new Le();
                      (rt.ua = lt.getResult()),
                        (rt.ua.get = function () {
                          return lt.getUA();
                        }),
                        (rt.ua.set = function (de) {
                          lt.setUA(de);
                          var pe = lt.getResult();
                          for (var X in pe) rt.ua[X] = pe[X];
                        });
                    }
                  })(typeof window == "object" ? window : this);
                },
              },
              x = {};
            function y(h) {
              var e = x[h];
              if (e !== void 0) return e.exports;
              var i = (x[h] = { exports: {} }),
                _ = !0;
              try {
                P[h].call(i.exports, i, i.exports, y), (_ = !1);
              } finally {
                _ && delete x[h];
              }
              return i.exports;
            }
            (y.ab = "//"), (N.exports = y(226));
          })();
        },
        515: (N, A, b) => {
          "use strict";
          b.d(A, {
            X: () =>
              function i(_) {
                if (
                  (0, y.p)(_) ||
                  (0, x.C)(_) ||
                  (0, e.h)(_) ||
                  (0, h.I3)(_) ||
                  (typeof _ == "object" && _ !== null && _.$$typeof === P) ||
                  (0, S.Ts)(_)
                )
                  throw _;
                _ instanceof Error && "cause" in _ && i(_.cause);
              },
          });
          var S = b(770);
          let P = Symbol.for("react.postpone");
          var x = b(340),
            y = b(747),
            h = b(107),
            e = b(159);
        },
        521: (N) => {
          "use strict";
          N.exports = (jr(), rr(Ct));
        },
        663: (N) => {
          (() => {
            "use strict";
            typeof __nccwpck_require__ < "u" && (__nccwpck_require__.ab = "//");
            var A = {};
            (() => {
              (A.parse = function (y, h) {
                if (typeof y != "string")
                  throw TypeError("argument str must be a string");
                for (
                  var e = {}, i = y.split(P), _ = (h || {}).decode || b, m = 0;
                  m < i.length;
                  m++
                ) {
                  var d = i[m],
                    r = d.indexOf("=");
                  if (!(r < 0)) {
                    var o = d.substr(0, r).trim(),
                      c = d.substr(++r, d.length).trim();
                    c[0] == '"' && (c = c.slice(1, -1)),
                      e[o] == null &&
                        (e[o] = (function (s, p) {
                          try {
                            return p(s);
                          } catch {
                            return s;
                          }
                        })(c, _));
                  }
                }
                return e;
              }),
                (A.serialize = function (y, h, e) {
                  var i = e || {},
                    _ = i.encode || S;
                  if (typeof _ != "function")
                    throw TypeError("option encode is invalid");
                  if (!x.test(y)) throw TypeError("argument name is invalid");
                  var m = _(h);
                  if (m && !x.test(m))
                    throw TypeError("argument val is invalid");
                  var d = y + "=" + m;
                  if (i.maxAge != null) {
                    var r = i.maxAge - 0;
                    if (isNaN(r) || !isFinite(r))
                      throw TypeError("option maxAge is invalid");
                    d += "; Max-Age=" + Math.floor(r);
                  }
                  if (i.domain) {
                    if (!x.test(i.domain))
                      throw TypeError("option domain is invalid");
                    d += "; Domain=" + i.domain;
                  }
                  if (i.path) {
                    if (!x.test(i.path))
                      throw TypeError("option path is invalid");
                    d += "; Path=" + i.path;
                  }
                  if (i.expires) {
                    if (typeof i.expires.toUTCString != "function")
                      throw TypeError("option expires is invalid");
                    d += "; Expires=" + i.expires.toUTCString();
                  }
                  if (
                    (i.httpOnly && (d += "; HttpOnly"),
                    i.secure && (d += "; Secure"),
                    i.sameSite)
                  )
                    switch (
                      typeof i.sameSite == "string"
                        ? i.sameSite.toLowerCase()
                        : i.sameSite
                    ) {
                      case !0:
                      case "strict":
                        d += "; SameSite=Strict";
                        break;
                      case "lax":
                        d += "; SameSite=Lax";
                        break;
                      case "none":
                        d += "; SameSite=None";
                        break;
                      default:
                        throw TypeError("option sameSite is invalid");
                    }
                  return d;
                });
              var b = decodeURIComponent,
                S = encodeURIComponent,
                P = /; */,
                x = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
            })(),
              (N.exports = A);
          })();
        },
        691: (N, A, b) => {
          var S = { "./en.json": 20, "./ko.json": 771 };
          function P(x) {
            return Promise.resolve().then(() => {
              if (!b.o(S, x)) {
                var y = Error("Cannot find module '" + x + "'");
                throw ((y.code = "MODULE_NOT_FOUND"), y);
              }
              var h = S[x];
              return b.t(h, 19);
            });
          }
          (P.keys = () => Object.keys(S)), (P.id = 691), (N.exports = P);
        },
        720: (N, A, b) => {
          "use strict";
          Object.defineProperty(A, "__esModule", { value: !0 }),
            (function (h, e) {
              for (var i in e)
                Object.defineProperty(h, i, { enumerable: !0, get: e[i] });
            })(A, {
              interceptTestApis: function () {
                return x;
              },
              wrapRequestHandler: function () {
                return y;
              },
            });
          let S = b(392),
            P = b(165);
          function x() {
            return (0, P.interceptFetch)(b.g.fetch);
          }
          function y(h) {
            return (e, i) => (0, S.withRequest)(e, P.reader, () => h(e, i));
          }
        },
        747: (N, A, b) => {
          "use strict";
          b.d(A, { p: () => x });
          var S = b(66),
            P = b(944);
          function x(y) {
            return (0, P.nJ)(y) || (0, S.RM)(y);
          }
        },
        770: (N, A, b) => {
          "use strict";
          function S(x) {
            return (
              typeof x == "object" &&
              x !== null &&
              "digest" in x &&
              x.digest === P
            );
          }
          b.d(A, { Ts: () => S });
          let P = "HANGING_PROMISE_REJECTION";
        },
        771: (N) => {
          "use strict";
          N.exports = JSON.parse(
            '{"hero":{"title":"Eden Proejct","subtitle":"\uC678\uB85C\uC6C0\uC744 \uC5C6\uC560\uC8FC\uB294 AI \uB3D9\uBC18\uC790","tagline":"\uCE5C\uAD6C \uAC19\uC740 \uC9C0\uC6D0 \u2022 \uC0DD\uC0B0\uC131 \uD5A5\uC0C1 \u2022 100% \uD504\uB77C\uC774\uBC84\uC2DC","privacyBadge":"100% \uD504\uB77C\uC774\uBE57 - \uB370\uC774\uD130\uAC00 \uAE30\uAE30\uB97C \uBC97\uC5B4\uB098\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4","noCompromise":"\uD074\uB77C\uC6B0\uB4DC \uC5C6\uC74C \u2022 \uAD6C\uB3C5\uB8CC \uC5C6\uC74C \u2022 \uD0C0\uD611 \uC5C6\uC74C","downloadButton":"\uBB34\uB8CC \uB2E4\uC6B4\uB85C\uB4DC","githubButton":"GitHub \uC2A4\uD0C0"},"pillars":{"title":"\uC138 \uAC00\uC9C0 \uD575\uC2EC \uAE30\uB465","loneliness":{"title":"\uC678\uB85C\uC6C0 \uD574\uC18C","description":"\uD63C\uC790 \uC77C\uD558\uB294 \uAC1C\uBC1C\uC790\uC640 \uC7AC\uD0DD \uADFC\uBB34\uC790\uB97C \uC704\uD55C \uC9C4\uC815\uD55C \uB3D9\uBC18\uC790. Eden\uC740 \uB2F9\uC2E0\uC758 \uC0C1\uD669\uC744 \uC774\uD574\uD558\uACE0 \uD558\uB8E8 \uC885\uC77C \uC815\uC11C\uC801 \uC9C0\uC6D0\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."},"support":{"title":"\uCE5C\uAD6C \uAC19\uC740 \uC9C0\uC6D0","description":"\uB2E8\uC21C\uD55C \uB3C4\uC6B0\uBBF8 \uC774\uC0C1 - \uB2F9\uC2E0\uC758 \uC131\uACF5\uC744 \uCD95\uD558\uD558\uACE0, \uC88C\uC808\uAC10\uC744 \uB290\uB084 \uB54C \uC704\uB85C\uD558\uBA70, \uC124\uAD50\uD558\uC9C0 \uC54A\uC73C\uBA74\uC11C \uC870\uC5B8\uC744 \uC81C\uACF5\uD558\uB294 \uCE5C\uAD6C. \uAC10\uC131 \uC9C0\uB2A5\uC774 \uB0B4\uC7A5\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4."},"productivity":{"title":"\uC0DD\uC0B0\uC131 \uD5A5\uC0C1","description":"\uD30C\uC77C, Git, \uD654\uBA74 \uCEE8\uD14D\uC2A4\uD2B8, \uCE98\uB9B0\uB354\uC640 \uAE4A\uC774 \uD1B5\uD569\uB41C \uC6CC\uD06C\uD50C\uB85C\uC6B0. \uC5C5\uBB34 \uD750\uB984\uC744 \uBC29\uD574\uD558\uC9C0 \uC54A\uC73C\uBA74\uC11C \uC0DD\uC0B0\uC131\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294 \uC6D0\uD65C\uD55C \uC9C0\uC6D0."},"jarvisNote":"\uC544\uC774\uC5B8\uB9E8\uC758 \uC790\uBE44\uC2A4\uC5D0\uC11C \uC601\uAC10\uC744 \uBC1B\uC74C","jarvisDescription":"\uB2F9\uC2E0\uC744 \uC9C4\uC815\uC73C\uB85C \uC774\uD574\uD558\uACE0 \uC9C0\uC6D0\uD558\uB294 AI"},"problemSolution":{"title":"\uC65C Eden Proejct\uC778\uAC00?","problems":{"title":"\uD074\uB77C\uC6B0\uB4DC AI\uC758 \uBB38\uC81C\uC810","noEmotional":"\uC815\uC11C\uC801 \uC9C0\uC6D0 \uBD80\uC7AC:","noEmotionalDesc":"\uC774\uD574 \uC5C6\uC774 \uC81C\uACF5\uB418\uB294 \uC77C\uBC18\uC801\uC778 \uC751\uB2F5","privacy":"\uD504\uB77C\uC774\uBC84\uC2DC \uC6B0\uB824:","privacyDesc":"\uD074\uB77C\uC6B0\uB4DC \uC11C\uBC84\uB85C \uC804\uC1A1\uB418\uB294 \uB370\uC774\uD130","expensive":"\uBE44\uC2FC \uAD6C\uB3C5\uB8CC:","expensiveDesc":"\uC6D4 $20-40 \uD3C9\uC0DD \uC9C0\uBD88","internet":"\uC778\uD130\uB137 \uC758\uC874\uC131:","internetDesc":"\uC624\uD504\uB77C\uC778\uC5D0\uC11C \uC791\uB3D9 \uBD88\uAC00","generic":"\uC77C\uBC18\uC801\uC778 \uC751\uB2F5:","genericDesc":"\uB2F9\uC2E0\uC758 \uC2A4\uD0C0\uC77C\uC744 \uD559\uC2B5\uD558\uC9C0 \uC54A\uC74C","limited":"\uC81C\uD55C\uB41C \uD1B5\uD569:","limitedDesc":"\uC6CC\uD06C\uD50C\uB85C\uC6B0\uC640 \uBD84\uB9AC\uB428"},"solutions":{"title":"Eden V3 \uC194\uB8E8\uC158","emotional":"\uAC10\uC131 \uC9C0\uB2A5:","emotionalDesc":"\uC9C4\uC815\uD55C \uB3D9\uBC18\uC790 \uAD00\uACC4\uC640 \uC9C0\uC6D0","privacy":"100% \uD504\uB77C\uC774\uBC84\uC2DC:","privacyDesc":"\uBAA8\uB4E0 \uCC98\uB9AC\uAC00 \uB2F9\uC2E0\uC758 \uAE30\uAE30\uC5D0\uC11C","free":"\uD3C9\uC0DD \uBB34\uB8CC:","freeDesc":"\uBE44\uC6A9 \uC81C\uB85C, MIT \uB77C\uC774\uC120\uC2A4","offline":"\uC624\uD504\uB77C\uC778 \uC791\uB3D9:","offlineDesc":"\uC124\uC815 \uD6C4 \uC778\uD130\uB137 \uBD88\uD544\uC694","learns":"\uC2A4\uD0C0\uC77C \uD559\uC2B5:","learnsDesc":"20-30\uAC1C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5 \uAC00\uB2A5\uD55C \uD30C\uB77C\uBBF8\uD130","integration":"\uAE4A\uC740 \uD1B5\uD569:","integrationDesc":"\uD30C\uC77C, Git, \uD654\uBA74, \uCE98\uB9B0\uB354"}},"stats":{"title":"\uC22B\uC790\uB85C \uBCF4\uB294 Eden V3","privacy":"\uD504\uB77C\uC774\uBC84\uC2DC \uBCF4\uC7A5","cost":"\uD3C9\uC0DD \uBB34\uB8CC","response":"\uC751\uB2F5 \uC2DC\uAC04","models":"\uB85C\uCEEC AI \uBAA8\uB378","parameters":"\uD398\uB974\uC18C\uB098 \uD30C\uB77C\uBBF8\uD130","complete":"\uC644\uC131\uB3C4"},"dualMode":{"title":"\uB4C0\uC5BC \uBAA8\uB4DC \uC778\uD154\uB9AC\uC804\uC2A4","mode1":{"title":"\uBAA8\uB4DC 1: \uC0AC\uC6A9\uC790 \uC8FC\uB3C4","subtitle":"\uB2F9\uC2E0\uC774 \uCEE8\uD2B8\uB864","feature1":"\uC9C8\uBB38\uD558\uACE0 \uC989\uAC01\uC801\uC778 \uB2F5\uBCC0 \uBC1B\uAE30","feature2":"\uD2B9\uC815 \uC791\uC5C5 \uBC0F \uD589\uB3D9 \uC694\uCCAD","feature3":"\uC804\uD1B5\uC801\uC778 AI \uC5B4\uC2DC\uC2A4\uD134\uD2B8 \uACBD\uD5D8","feature4":"\uBA85\uC2DC\uC801 \uBA85\uB839\uC5D0 \uBC18\uC751"},"mode2":{"title":"\uBAA8\uB4DC 2: AI \uC8FC\uB3C4","subtitle":"\uC120\uC81C\uC801 \uC9C0\uC6D0","feature1":"\uD544\uC694\uD560 \uB54C \uC120\uC81C\uC801\uC73C\uB85C \uB3C4\uC6C0 \uC81C\uACF5","feature2":"\uBB38\uC81C \uAC10\uC9C0 \uBC0F \uC194\uB8E8\uC158 \uC81C\uC548","feature3":"\uCEE8\uD14D\uC2A4\uD2B8 \uC778\uC9C0 \uC54C\uB9BC","feature4":"v2.0\uC5D0\uC11C \uC81C\uACF5 \uC608\uC815 (\uBBF8\uB798 \uB85C\uB4DC\uB9F5)"},"bestOfBoth":"\uC591\uCABD\uC758 \uC7A5\uC810:","bestOfBothDesc":"\uBC18\uC751\uD615 \uC9C0\uC6D0\uACFC \uC120\uC81C\uC801 \uC9C0\uC6D0 \uC0AC\uC774\uB97C \uC6D0\uD65C\uD558\uAC8C \uC804\uD658"},"designPhilosophy":{"title":"\uB514\uC790\uC778 \uCCA0\uD559: \\"\uD654\uBA74\uC774 \uACE7 \uD604\uC2E4\\"","subtitle":"\uD654\uBA74\uC774 \uACE7 \uD604\uC2E4 (Screen is Reality)","description":"Eden\uC740 \uD654\uBA74\uC5D0 \uD45C\uC2DC\uB41C \uB0B4\uC6A9\uC744 \uBD84\uC11D\uD558\uC5EC \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC774\uD574\uD569\uB2C8\uB2E4 - \uD604\uC7AC \uC791\uC5C5\uC758 \uAD81\uADF9\uC801\uC778 \uC9C4\uC2E4\uC758 \uC6D0\uCC9C","level1":{"title":"\uB808\uBCA8 1: \uD604\uC7AC","time":"\uCD08","description":"\uD65C\uC131 \uCC3D\uB9CC. \uC989\uAC01\uC801\uC778 \uC791\uC5C5\uC5D0 \uB300\uD55C \uBE60\uB978 \uC774\uD574. \uC989\uAC01\uC801\uC778 \uB3C4\uC6C0\uC5D0 \uC644\uBCBD\uD569\uB2C8\uB2E4."},"level2":{"title":"\uB808\uBCA8 2: \uCD5C\uADFC","time":"\uCD08","description":"\uC9C0\uB09C 10\uBD84\uAC04\uC758 \uC791\uC5C5. \uC6CC\uD06C\uD50C\uB85C\uC6B0\uC640 \uCD5C\uADFC \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC774\uD574\uD569\uB2C8\uB2E4. \uCEE8\uD14D\uC2A4\uD2B8 \uC778\uC9C0 \uC9C0\uC6D0."},"level3":{"title":"\uB808\uBCA8 3: \uC804\uCCB4 \uD504\uB85C\uC81D\uD2B8","time":"\uCD08","description":"\uC804\uCCB4 \uD504\uB85C\uC81D\uD2B8 \uCEE8\uD14D\uC2A4\uD2B8. \uCF54\uB4DC\uBCA0\uC774\uC2A4 \uAD6C\uC870\uC640 \uC544\uD0A4\uD14D\uCC98\uC5D0 \uB300\uD55C \uAE4A\uC740 \uC774\uD574."},"privacyTitle":"\uD504\uB77C\uC774\uBC84\uC2DC \uC6B0\uC120 \uD654\uBA74 \uBD84\uC11D:","privacyFeature1":"\uBAA8\uB4E0 \uCC98\uB9AC\uAC00 \uB85C\uCEEC\uC5D0\uC11C \uBC1C\uC0DD","privacyFeature2":"\uD074\uB77C\uC6B0\uB4DC\uB85C \uC2A4\uD06C\uB9B0\uC0F7 \uC804\uC1A1 \uC5C6\uC74C","privacyFeature3":"\uBBFC\uAC10\uD55C \uC601\uC5ED \uBE14\uB7EC \uCC98\uB9AC \uC635\uC158","privacyFeature4":"\uC5B8\uC81C\uB4E0\uC9C0 \uCD94\uC801 \uBE44\uD65C\uC131\uD654","privacyFeature5":"\uC0AC\uC6A9 \uC804 \uCEA1\uCC98 \uAC80\uD1A0","privacyFeature6":"\uC624\uB798\uB41C \uCEA1\uCC98 \uC790\uB3D9 \uC0AD\uC81C"},"features":{"title":"\uAC15\uB825\uD55C \uAE30\uB2A5\uB4E4","privacy":{"title":"\uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uD504\uB77C\uC774\uBC84\uC2DC","item1":"12GB AI \uBAA8\uB378\uC774 \uB85C\uCEEC\uC5D0\uC11C \uC2E4\uD589","item2":"AES-256 \uC554\uD638\uD654 \uB370\uC774\uD130\uBCA0\uC774\uC2A4","item3":"\uC6D0\uACA9 \uCE21\uC815 \uC5C6\uC74C, \uCD94\uC801 \uC5C6\uC74C","item4":"\uC644\uC804\uD55C \uC624\uD504\uB77C\uC778 \uC791\uB3D9","item5":"\uC624\uD508\uC18C\uC2A4 (MIT \uB77C\uC774\uC120\uC2A4)"},"aiModels":{"title":"\uAC15\uB825\uD55C \uB85C\uCEEC AI","item1":"Llama 3.1 8B (4.92GB)","item2":"Whisper Large V3 (3.09GB)","item3":"LLaVA 7B (4.37GB)","item4":"Q4_K_M \uC591\uC790\uD654 (<5% \uC190\uC2E4)","item5":"HumanEval: 80.5% \uC815\uD655\uB3C4"},"persona":{"title":"\uC801\uC751\uD615 \uC131\uACA9","item1":"20-30\uAC1C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5 \uAC00\uB2A5\uD55C \uD30C\uB77C\uBBF8\uD130","item2":"6\uAC1C\uC758 \uC0AC\uC804 \uAD6C\uCD95\uB41C \uD398\uB974\uC18C\uB098","item3":"\uACBD\uC0AC \uD558\uAC15\uBC95 \uD559\uC2B5","item4":"RAG \uBA54\uBAA8\uB9AC \uC2DC\uC2A4\uD15C","item5":"\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uD53C\uB4DC\uBC31"},"emotional":{"title":"\uAC10\uC131 \uC9C0\uB2A5","item1":"\uC9C4\uC815\uD55C \uB3D9\uBC18\uC790 \uAD00\uACC4","item2":"\uCEE8\uD14D\uC2A4\uD2B8 \uC778\uC9C0 \uACF5\uAC10","item3":"\uB2F9\uC2E0\uC758 \uC131\uACF5\uC744 \uCD95\uD558","item4":"\uC88C\uC808\uAC10 \uC18D\uC5D0\uC11C \uC704\uB85C","item5":"\uCE5C\uAD6C \uAC19\uC740 \uC0C1\uD638\uC791\uC6A9"},"integration":{"title":"\uAE4A\uC740 \uC2DC\uC2A4\uD15C \uD1B5\uD569","item1":"\uD30C\uC77C \uC2DC\uC2A4\uD15C \uC77D\uAE30/\uC4F0\uAE30","item2":"Git \uC791\uC5C5 (\uCEE4\uBC0B, \uD478\uC2DC)","item3":"\uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4 \uAC10\uC9C0","item4":"\uCE98\uB9B0\uB354 \uD1B5\uD569","item5":"\uC6F9\uD6C5 \uC9C0\uC6D0"},"interface":{"title":"\uC544\uB984\uB2E4\uC6B4 \uC778\uD130\uD398\uC774\uC2A4","item1":"\uCE74\uCE74\uC624\uD1A1 \uC2A4\uD0C0\uC77C \uCC44\uD305 \uB514\uC790\uC778","item2":"\uC2A4\uD2B8\uB9AC\uBC0D \uD1A0\uD070 \uD45C\uC2DC","item3":"\uB2E4\uD06C \uBAA8\uB4DC \uC9C0\uC6D0","item4":"\uD55C\uAD6D\uC5B4 + \uC601\uC5B4 (i18next)","item5":"\uBB38\uD654\uC801 \uD604\uC9C0\uD654"}},"personas":{"title":"6\uAC1C\uC758 \uC0AC\uC804 \uAD6C\uCD95\uB41C \uD398\uB974\uC18C\uB098","subtitle":"\uB2F9\uC2E0\uC758 \uC2A4\uD0C0\uC77C\uC5D0 \uB9DE\uB294 \uC131\uACA9\uC744 \uC120\uD0DD\uD558\uAC70\uB098, \uB098\uB9CC\uC758 \uCEE4\uC2A4\uD140 \uD398\uB974\uC18C\uB098\uB97C \uB9CC\uB4DC\uC138\uC694","eden":{"name":"Eden","tag":"\uAE30\uBCF8","description":"\uADE0\uD615\uC7A1\uD78C, \uCE5C\uADFC\uD558\uACE0 \uB3C4\uC6C0\uC774 \uB418\uB294","details":"\uC804\uBB38\uC131\uACFC \uB530\uB73B\uD568\uC758 \uC644\uBCBD\uD55C \uC870\uD569. \uC77C\uBC18\uC801\uC778 \uC0AC\uC6A9\uC5D0 \uCD5C\uC801"},"strictMentor":{"name":"\uC5C4\uACA9\uD55C \uBA58\uD1A0","description":"\uC9C1\uC124\uC801\uC774\uACE0, \uAE30\uC220\uC801\uC774\uBA70, \uB2E8\uB3C4\uC9C1\uC785\uC801","details":"\uD6A8\uC728\uC131\uACFC \uD559\uC2B5\uC5D0 \uC9D1\uC911. \uC9C4\uC9C0\uD55C \uAC1C\uBC1C \uC791\uC5C5\uC5D0 \uCD5C\uC801"},"cheerfulFriend":{"name":"\uCF8C\uD65C\uD55C \uCE5C\uAD6C","description":"\uD3B8\uC548\uD558\uACE0, \uC5F4\uC815\uC801\uC774\uBA70, \uC774\uBAA8\uC9C0 \uB9CE\uC74C","details":"\uD65C\uAE30\uCC28\uACE0 \uACA9\uB824\uC801. \uCF54\uB529\uC744 \uB354 \uC7AC\uBBF8\uC788\uACE0 \uC2A4\uD2B8\uB808\uC2A4 \uC5C6\uAC8C"},"professional":{"name":"\uC804\uBB38 \uC5B4\uC2DC\uC2A4\uD134\uD2B8","description":"\uACA9\uC2DD\uC788\uACE0, \uAC04\uACB0\uD558\uBA70, \uBE44\uC988\uB2C8\uC2A4\uC801","details":"\uACE0\uAC1D \uC791\uC5C5\uACFC \uC804\uBB38\uC801\uC778 \uD658\uACBD\uC5D0 \uC774\uC0C1\uC801"},"sensei":{"name":"\uCF54\uB529 \uC120\uC0DD\uB2D8","description":"\uAE30\uC220\uC801 \uAE4A\uC774, \uC6D0\uB9AC\uB97C \uAC00\uB974\uCE68","details":"\uC5B4\uB5BB\uAC8C\uBFD0\uB9CC \uC544\uB2C8\uB77C \uC65C\uB97C \uC124\uBA85. \uD559\uC2B5\uACFC \uC131\uC7A5\uC5D0 \uC644\uBCBD"},"custom":{"name":"\uCEE4\uC2A4\uD140","description":"\uB098\uB9CC\uC758 \uC131\uACA9 \uAD6C\uCD95","details":"20-30\uAC1C\uC758 \uD30C\uB77C\uBBF8\uD130\uB97C \uC870\uC815\uD558\uC5EC \uC644\uBCBD\uD55C AI \uB3D9\uBC18\uC790 \uB9CC\uB4E4\uAE30"}},"comparison":{"title":"\uACBD\uC7C1\uC0AC \uBE44\uAD50","feature":"\uAE30\uB2A5","edenV3":"Eden V3","chatgptPlus":"ChatGPT Plus","claudePro":"Claude Pro","githubCopilot":"GitHub Copilot","emotionalCompanionship":"\uAC10\uC131\uC801 \uB3D9\uBC18\uC790 \uAD00\uACC4","privacy":"100% \uD504\uB77C\uC774\uBC84\uC2DC","costPerYear":"\uBE44\uC6A9 (\uC5F0\uAC04)","worksOffline":"\uC624\uD504\uB77C\uC778 \uC791\uB3D9","personaCustomization":"\uD398\uB974\uC18C\uB098 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5","personaParams":"20-30\uAC1C \uD30C\uB77C\uBBF8\uD130","adaptiveLearning":"\uC801\uC751\uD615 \uD559\uC2B5","deepIntegration":"\uAE4A\uC740 \uC2DC\uC2A4\uD15C \uD1B5\uD569","openSource":"\uC624\uD508 \uC18C\uC2A4","humanEvalScore":"HumanEval \uC810\uC218 (\uCF54\uB529)","responseTime":"\uC751\uB2F5 \uC2DC\uAC04","voiceSupport":"\uC74C\uC131 \uC9C0\uC6D0 (99\uAC1C \uC5B8\uC5B4)","screenContext":"\uD654\uBA74 \uCEE8\uD14D\uC2A4\uD2B8 \uBD84\uC11D","ragMemory":"RAG \uBA54\uBAA8\uB9AC \uC2DC\uC2A4\uD15C","qualityCostComparison":"\uD488\uC9C8 + \uBE44\uC6A9 \uBE44\uAD50:","qualityCostDescription":"\uC5D4\uD130\uD504\uB77C\uC774\uC988\uAE09 AI \uD488\uC9C8 (80.5% HumanEval)\uB85C","savingsAmount":"\uC5F0\uAC04 $120-240 \uC808\uC57D","withPrivacy":"\uD558\uACE0 \uC644\uC804\uD55C \uD504\uB77C\uC774\uBC84\uC2DC\uAE4C\uC9C0!"},"technical":{"title":"\uD504\uB85C\uB355\uC158 \uD488\uC9C8 & AI \uBCA4\uCE58\uB9C8\uD06C","stat1":"TypeScript \uD30C\uC77C","stat2":"\uD14C\uC2A4\uD2B8 \uCF54\uB4DC \uB77C\uC778","stat3":"\uD14C\uC2A4\uD2B8 \uC2A4\uC704\uD2B8","stat4":"\uC644\uC131\uB3C4","benchmarks":{"title":"AI \uBCA4\uCE58\uB9C8\uD06C \uC810\uC218","humanEval":"HumanEval (\uCF54\uB529):","humanEvalComparison":"vs Claude 3.5: 88%, GPT-4: 85%","mmlu":"MMLU (\uC77C\uBC18 \uC9C0\uC2DD):","quantization":"Q4_K_M \uC591\uC790\uD654:","quantizationValue":"<5% \uD488\uC9C8 \uC190\uC2E4","enterpriseGrade":"12GB \uD328\uD0A4\uC9C0\uC758 \uC5D4\uD130\uD504\uB77C\uC774\uC988\uAE09 \uD488\uC9C8"},"codeQuality":{"title":"\uCF54\uB4DC \uD488\uC9C8","item1":"TypeScript Strict Mode (any \uD0C0\uC785 \uC5C6\uC74C)","item2":"ESLint + Prettier \uD3EC\uB9E4\uD305","item3":"Conventional Commits","item4":"\uD3EC\uAD04\uC801\uC778 JSDoc \uC8FC\uC11D","item5":"\uD0C0\uC785 \uC548\uC804 IPC (100+ API \uBA54\uC11C\uB4DC)"},"security":{"title":"\uBCF4\uC548","item1":"\uCEE8\uD14D\uC2A4\uD2B8 \uACA9\uB9AC \uD65C\uC131\uD654","item2":"\uB80C\uB354\uB7EC\uC5D0 Node.js API \uC5C6\uC74C","item3":"\uAC80\uC99D\uACFC \uD568\uAED8\uD558\uB294 \uC548\uC804\uD55C IPC","item4":"AES-256 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC554\uD638\uD654","item5":"\uACBD\uB85C \uD0D0\uC0C9 \uBCF4\uD638"},"performance":{"title":"\uC131\uB2A5","item1":"2-3\uCD08 \uC751\uB2F5 (M3 MAX)","item2":"3-5\uCD08 \uC751\uB2F5 (M3 Pro)","item3":"<16ms \uD504\uB808\uC784 \uC2DC\uAC04 (60fps)","item4":"\uC791\uB3D9 \uC911 ~12GB RAM \uC0AC\uC6A9","item5":"Metal/CUDA \uCD5C\uC801\uD654"}},"techStack":{"title":"\uCD5C\uC2E0 \uAE30\uC220\uB85C \uAD6C\uCD95"},"useCases":{"title":"\uC774\uB7F0 \uBD84\uB4E4\uAED8 \uC644\uBCBD\uD569\uB2C8\uB2E4","soloDeveloper":{"title":"\uD63C\uC790 \uC77C\uD558\uB294 \uAC1C\uBC1C\uC790","badge":"\uAC00\uC7A5 \uC911\uC694","primaryTarget":"\uC8FC\uC694 \uD0C0\uAC9F:","description":"\uC7AC\uD0DD\uADFC\uBB34, \uACE0\uB9BD\uB418\uC5B4 \uC788\uC73C\uBA70, \uCF54\uB529\uD558\uB294 \uB3D9\uC548 \uB3D9\uBC18\uC790\uAC00 \uD544\uC694\uD568","details":"Eden\uC740 \uCE5C\uAD6C \uAC19\uC740 \uC9C0\uC6D0\uC73C\uB85C \uC678\uB85C\uC6C0\uC744 \uD574\uC18C\uD558\uACE0, \uC131\uACF5\uC744 \uCD95\uD558\uD558\uBA70, \uB514\uBC84\uAE45 \uC911 \uC704\uB85C\uB97C \uC81C\uACF5\uD558\uACE0, \uAE4A\uC740 \uD1B5\uD569\uC73C\uB85C \uC0DD\uC0B0\uC131\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4."},"remoteWorker":{"title":"\uC7AC\uD0DD \uADFC\uBB34\uC790","description":"\uD558\uB8E8 \uC885\uC77C \uC815\uC11C\uC801 \uC9C0\uC6D0. Eden\uC740 \uB3D9\uBC18\uC790\uB97C \uC81C\uACF5\uD558\uACE0 \uC7AC\uD0DD \uADFC\uBB34\uC758 \uACE0\uB9BD\uAC10\uACFC \uC2F8\uC6B0\uB294 \uB370 \uB3C4\uC6C0\uC744 \uC90D\uB2C8\uB2E4."},"privacyConscious":{"title":"\uD504\uB77C\uC774\uBC84\uC2DC \uC911\uC2DC \uC0AC\uC6A9\uC790","description":"\uD074\uB77C\uC6B0\uB4DC \uC720\uCD9C\uC774\uB098 \uB370\uC774\uD130 \uCE68\uD574 \uAC71\uC815 \uC5C6\uC774 \uAE30\uBC00 \uB370\uC774\uD130 \uC791\uC5C5. \uBAA8\uB4E0 \uAC83\uC774 \uAE30\uAE30\uC5D0 \uB0A8\uC2B5\uB2C8\uB2E4."},"bilingual":{"title":"\uD55C\uAD6D\uC5B4/\uC601\uC5B4 \uC774\uC911\uC5B8\uC5B4 \uC0AC\uC6A9\uC790","description":"\uB2E8\uC21C \uBC88\uC5ED\uC774 \uC544\uB2CC \uC644\uC804\uD55C \uBB38\uD654\uC801 \uD604\uC9C0\uD654. \uD55C\uAD6D\uC5B4 \uACBD\uC5B4, \uC874\uCE6D \uBC0F \uBB38\uD654 \uC801\uC751 \uB0B4\uC7A5."},"students":{"title":"\uD559\uC0DD & \uC5F0\uAD6C\uC790","description":"\uC644\uC804\uD55C \uC624\uD504\uB77C\uC778, \uC601\uAD6C \uBB34\uB8CC, \uC801\uC751\uD615 \uD559\uC2B5 \uAE30\uB2A5. \uD559\uC2B5\uACFC \uC5F0\uAD6C\uC5D0 \uC644\uBCBD."},"teams":{"title":"\uC18C\uADDC\uBAA8 \uD300 & \uC2A4\uD0C0\uD2B8\uC5C5","description":"\uBE44\uC6A9 \uC81C\uB85C, \uC628\uD504\uB808\uBBF8\uC2A4 \uBC30\uD3EC, \uC0C1\uC5C5\uC801 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C MIT \uB77C\uC774\uC120\uC2A4. \uC608\uC0B0\uC5D0 \uBBFC\uAC10\uD55C \uD300\uC5D0 \uC644\uBCBD."}},"localization":{"title":"\uBB38\uD654\uC801 \uD604\uC9C0\uD654, \uB2E8\uC21C\uD55C \uBC88\uC5ED\uC774 \uC544\uB2D9\uB2C8\uB2E4","interfaceLanguages":{"title":"\uC778\uD130\uD398\uC774\uC2A4 \uC5B8\uC5B4","korean":"\uD55C\uAD6D\uC5B4:","koreanDesc":"\uBB38\uD654\uC801 \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uAC16\uCD98 \uC644\uC804\uD55C UI \uBC88\uC5ED","english":"\uC601\uC5B4:","englishDesc":"\uB124\uC774\uD2F0\uBE0C \uC601\uC5B4 \uC778\uD130\uD398\uC774\uC2A4","seamless":"\uC5B8\uC5B4 \uAC04 \uC6D0\uD65C\uD55C \uC804\uD658"},"aiUnderstanding":{"title":"AI \uC774\uD574 \uB2A5\uB825","languages99":"99\uAC1C \uC5B8\uC5B4:","languages99Desc":"Whisper Large V3 \uB2E4\uAD6D\uC5B4 \uC9C0\uC6D0","codeSwitching":"\uCF54\uB4DC \uC2A4\uC704\uCE6D \uBC0F \uD63C\uD569 \uC5B8\uC5B4 \uC774\uD574","contextAware":"\uCEE8\uD14D\uC2A4\uD2B8 \uC778\uC9C0 \uBC88\uC5ED \uBC0F \uC751\uB2F5"},"koreanCulture":{"title":"\uD55C\uAD6D \uBB38\uD654 \uC801\uC751","honorificsTitle":"\uACBD\uC5B4 \uC2DC\uC2A4\uD15C:","formal":"\uACBD\uC5B4 (\uC874\uB313\uB9D0):","formalDesc":"\uC804\uBB38\uC801\uC778 \uC0C1\uD669","honorific":"\uC874\uCE6D (\uB192\uC784\uB9D0):","honorificDesc":"\uC874\uC911\uD558\uB294 \uD638\uCE6D","casual":"\uBC18\uB9D0 (\uD3B8\uD55C \uB9D0\uD22C):","casualDesc":"\uCE5C\uADFC\uD55C \uBAA8\uB4DC","adjustable":"\uD398\uB974\uC18C\uB098 \uD30C\uB77C\uBBF8\uD130\uB97C \uD1B5\uD574 \uC870\uC815 \uAC00\uB2A5","communicationTitle":"\uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158 \uC2A4\uD0C0\uC77C:","korean":"\uD55C\uAD6D\uC2DD \uC2A4\uD0C0\uC77C (0.0):","koreanDesc":"\uAC04\uC811\uC801, \uCEE8\uD14D\uC2A4\uD2B8 \uC911\uC2EC","western":"\uC11C\uC591\uC2DD \uC2A4\uD0C0\uC77C (1.0):","westernDesc":"\uC9C1\uC811\uC801, \uBA85\uC2DC\uC801","hybrid":"\uD558\uC774\uBE0C\uB9AC\uB4DC (0.5):","hybridDesc":"\uC591\uCABD\uC758 \uC7A5\uC810","nuance":"\uBB38\uD654\uC801 \uB258\uC559\uC2A4 \uC778\uC2DD"}},"ragMemory":{"title":"RAG \uBA54\uBAA8\uB9AC: Eden\uC774 \uB2F9\uC2E0\uC744 \uAE30\uC5B5\uD558\uB294 \uBC29\uBC95","subtitle":"\uAC80\uC0C9 \uC99D\uAC15 \uC0DD\uC131 (RAG)","description":"Eden\uC740 \uB2E8\uC21C\uD788 \uCC44\uD305\uD558\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C \uB300\uD654\uB97C \uAE30\uC5B5\uD558\uACE0 \uD559\uC2B5\uD569\uB2C8\uB2E4","store":{"title":"\uC800\uC7A5","description":"\uBAA8\uB4E0 \uB300\uD654\uAC00 AES-256 \uC554\uD638\uD654\uC640 \uD568\uAED8 ChromaDB \uBCA1\uD130 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uB85C\uCEEC\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4"},"retrieve":{"title":"\uAC80\uC0C9","description":"\uC758\uBBF8\uB860\uC801 \uAC80\uC0C9\uC73C\uB85C \uBA87 \uB2EC \uC804\uC758 \uAD00\uB828 \uB300\uD654\uB3C4 \uC989\uC2DC \uCC3E\uC544\uB0C5\uB2C8\uB2E4"},"generate":{"title":"\uC0DD\uC131","description":"AI\uAC00 \uAC80\uC0C9\uB41C \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uD654\uB418\uACE0 \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC778\uC9C0\uD55C \uC751\uB2F5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4"},"remembersTitle":"Eden\uC774 \uAE30\uC5B5\uD558\uB294 \uAC83:","remembers1":"\uCF54\uB529 \uC120\uD638\uB3C4 \uBC0F \uD328\uD134","remembers2":"\uB17C\uC758\uD55C \uD504\uB85C\uC81D\uD2B8","remembers3":"\uC9C1\uBA74\uD55C \uAE30\uC220\uC801 \uACFC\uC81C","remembers4":"\uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158 \uC2A4\uD0C0\uC77C \uC120\uD638\uB3C4","remembers5":"\uD6A8\uACFC\uAC00 \uC788\uC5C8\uB358 \uC194\uB8E8\uC158","remembers6":"\uD559\uC2B5 \uBAA9\uD45C \uBC0F \uC9C4\uD589 \uC0C1\uD669","remembers7":"\uBA87 \uC8FC \uB610\uB294 \uBA87 \uB2EC \uC804\uC758 \uCEE8\uD14D\uC2A4\uD2B8","remembers8":"\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uD53C\uB4DC\uBC31 \uD328\uD134"},"gettingStarted":{"title":"3\uB2E8\uACC4\uB85C \uC2DC\uC791\uD558\uAE30","step1":{"number":"1","title":"\uB2E4\uC6B4\uB85C\uB4DC","description":"\uD50C\uB7AB\uD3FC \uC120\uD0DD: macOS (Apple Silicon) \uB610\uB294 Windows"},"step2":{"number":"2","title":"\uC124\uCE58 & \uBAA8\uB378 \uB2E4\uC6B4\uB85C\uB4DC","description":"\uC77C\uD68C\uC131 12GB AI \uBAA8\uB378 \uB2E4\uC6B4\uB85C\uB4DC (\uC790\uB3D9)"},"step3":{"number":"3","title":"\uCC44\uD305 \uC2DC\uC791","description":"\uC989\uC2DC \uD504\uB77C\uC774\uBE57 AI \uB3D9\uBC18\uC790\uB97C \uC990\uAE30\uC138\uC694!"},"downloadMacOS":"macOS\uC6A9 \uB2E4\uC6B4\uB85C\uB4DC","downloadWindows":"Windows\uC6A9 \uB2E4\uC6B4\uB85C\uB4DC","systemRequirements":{"title":"\uC2DC\uC2A4\uD15C \uC694\uAD6C\uC0AC\uD56D","minimum":"\uCD5C\uC18C:","minItem1":"macOS 12+ \uB610\uB294 Windows 10/11","minItem2":"Apple M1+ \uB610\uB294 Intel i5 8\uC138\uB300+","minItem3":"16GB RAM","minItem4":"15GB \uC5EC\uC720 \uB514\uC2A4\uD06C \uACF5\uAC04","minItem5":"Metal (macOS) \uB610\uB294 CUDA GPU","recommended":"\uAD8C\uC7A5:","recItem1":"macOS 14+ \uB610\uB294 Windows 11","recItem2":"Apple M3+ \uB610\uB294 AMD Ryzen 7+","recItem3":"32GB RAM","recItem4":"20GB \uC5EC\uC720 \uB514\uC2A4\uD06C \uACF5\uAC04","recItem5":"\uC804\uC6A9 GPU (8GB+ VRAM)"},"or":"\uB610\uB294"},"roadmap":{"title":"\uAC1C\uBC1C \uB85C\uB4DC\uB9F5","phase17":{"title":"1-7\uB2E8\uACC4: \uC644\uB8CC","description":"\uD575\uC2EC \uAE30\uB2A5, AI \uD1B5\uD569, \uD398\uB974\uC18C\uB098 \uC2DC\uC2A4\uD15C, \uD654\uBA74 \uCEE8\uD14D\uC2A4\uD2B8, \uD3EC\uAD04\uC801\uC778 \uD14C\uC2A4\uD2B8 \uBAA8\uB450 \uC644\uB8CC!"},"phase8":{"title":"8\uB2E8\uACC4: \uCD9C\uC2DC (85% \uC644\uB8CC)","description":"\uCD5C\uC885 \uB9C8\uBB34\uB9AC, \uBB38\uC11C\uD654 \uBC0F \uACF5\uAC1C \uCD9C\uC2DC \uC900\uBE44"},"v11":{"title":"v1.1: \uD50C\uB7EC\uADF8\uC778 \uC2DC\uC2A4\uD15C","description":"\uCEE4\uC2A4\uD140 \uD1B5\uD569 \uBC0F \uAE30\uB2A5\uC744 \uC704\uD55C \uC11C\uB4DC\uD30C\uD2F0 \uD50C\uB7EC\uADF8\uC778\uC744 \uD5C8\uC6A9\uD558\uB294 \uD655\uC7A5 \uAC00\uB2A5\uD55C \uC544\uD0A4\uD14D\uCC98"},"v12":{"title":"v1.2: \uD3EC\uAD04\uC801\uC778 \uBB38\uC11C\uD654","description":"\uAC1C\uBC1C\uC790 \uBB38\uC11C, API \uB808\uD37C\uB7F0\uC2A4, \uD50C\uB7EC\uADF8\uC778 \uAC1C\uBC1C \uAC00\uC774\uB4DC \uBC0F \uC0AC\uC6A9\uC790 \uD29C\uD1A0\uB9AC\uC5BC \uC804\uCCB4"},"v20":{"title":"v2.0: AI \uC8FC\uB3C4 \uC120\uC81C\uC801 \uBAA8\uB4DC","description":"Eden\uC774 \uC120\uC81C\uC801\uC73C\uB85C \uB3C4\uC6C0\uC744 \uC81C\uACF5\uD558\uACE0, \uBB38\uC81C\uB97C \uAC10\uC9C0\uD558\uBA70, \uC8FC\uB3C4\uAD8C\uC744 \uAC16\uB294 \uC644\uC804 \uC790\uC728 AI \uC8FC\uB3C4 \uBAA8\uB4DC (\uBAA8\uB4DC 2 \uC644\uC804 \uAD6C\uD604)"},"joinJourney":"100% \uC644\uC131\uACFC \uADF8 \uC774\uC0C1\uC744 \uD5A5\uD55C \uC5EC\uC815\uC5D0 \uD568\uAED8 \uD558\uC138\uC694!"},"faq":{"title":"\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38","q1":"\uB370\uC774\uD130\uAC00 \uC815\uB9D0 100% \uD504\uB77C\uC774\uBE57\uD55C\uAC00\uC694?","a1":"\uB124! \uBAA8\uB4E0 AI \uCC98\uB9AC\uB294 \uAE30\uAE30\uC5D0\uC11C \uB85C\uCEEC\uB85C \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uB370\uC774\uD130\uAC00 \uCEF4\uD4E8\uD130\uB97C \uBC97\uC5B4\uB098\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 AES-256 \uC554\uD638\uD654\uB97C \uC0AC\uC6A9\uD558\uBA70, \uCF54\uB4DC\uB294 \uC624\uD508\uC18C\uC2A4(MIT \uB77C\uC774\uC120\uC2A4)\uC774\uBBC0\uB85C \uC9C1\uC811 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC6D0\uACA9 \uCE21\uC815 \uC5C6\uC74C, \uCD94\uC801 \uC5C6\uC74C, \uD074\uB77C\uC6B0\uB4DC \uC5C5\uB85C\uB4DC \uC5C6\uC74C.","q2":"\uC5B4\uB5BB\uAC8C \uC601\uAD6C\uC801\uC73C\uB85C \uBB34\uB8CC\uC77C \uC218 \uC788\uB098\uC694?","a2":"Eden V3\uB294 MIT \uB77C\uC774\uC120\uC2A4\uB97C \uAC00\uC9C4 \uC5F4\uC815 \uD504\uB85C\uC81D\uD2B8\uB85C \uAD6C\uCD95\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uBAA8\uB4E0 \uAC83\uC774 \uB85C\uCEEC\uC5D0\uC11C \uC2E4\uD589\uB418\uBBC0\uB85C \uC11C\uBC84 \uBE44\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. AI \uB3D9\uBC18\uC790 \uAD00\uACC4\uC640 \uC9C0\uC6D0\uC740 \uAD6C\uB3C5 \uC7A5\uBCBD\uC774\uB098 \uD504\uB77C\uC774\uBC84\uC2DC \uD0C0\uD611 \uC5C6\uC774 \uBAA8\uB450\uC5D0\uAC8C \uC811\uADFC \uAC00\uB2A5\uD574\uC57C \uD55C\uB2E4\uACE0 \uBBFF\uC2B5\uB2C8\uB2E4.","q3":"Eden\uC740 ChatGPT\uB098 Claude\uC640 \uBB34\uC5C7\uC774 \uB2E4\uB978\uAC00\uC694?","a3":"Eden\uC740 \uC0DD\uC0B0\uC131\uBFD0\uB9CC \uC544\uB2C8\uB77C \uC815\uC11C\uC801 \uB3D9\uBC18\uC790 \uAD00\uACC4\uB97C \uC704\uD574 \uC124\uACC4\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCE5C\uAD6C \uAC19\uC740 \uC9C0\uC6D0\uC73C\uB85C \uD63C\uC790 \uC77C\uD558\uB294 \uAC1C\uBC1C\uC790\uC758 \uC678\uB85C\uC6C0\uC744 \uD574\uC18C\uD569\uB2C8\uB2E4. \uAC8C\uB2E4\uAC00: 100% \uD504\uB77C\uC774\uBC84\uC2DC, \uC624\uD504\uB77C\uC778 \uC791\uB3D9, \uC2A4\uD0C0\uC77C \uD559\uC2B5(20-30\uAC1C \uD398\uB974\uC18C\uB098 \uD30C\uB77C\uBBF8\uD130), \uAE4A\uC740 \uC2DC\uC2A4\uD15C \uD1B5\uD569, \uC644\uC804 \uBB34\uB8CC. \uD488\uC9C8 \uBA74\uC5D0\uC11C\uB294 HumanEval\uC5D0\uC11C 80.5% \uC810\uC218(GPT-4: 85%, Claude: 88% \uB300\uBE44) - \uD074\uB77C\uC6B0\uB4DC \uC758\uC874\uC131 \uC5C6\uB294 \uC5D4\uD130\uD504\uB77C\uC774\uC988\uAE09 AI\uC785\uB2C8\uB2E4.","q4":"\uC5B4\uB5A4 \uC5B8\uC5B4\uB97C \uC9C0\uC6D0\uD558\uB098\uC694?","a4":"\uC778\uD130\uD398\uC774\uC2A4\uB294 \uD55C\uAD6D\uC5B4 \uACBD\uC5B4(\uACBD\uC5B4, \uC874\uCE6D)\uB97C \uD3EC\uD568\uD55C \uC644\uC804\uD55C \uBB38\uD654\uC801 \uD604\uC9C0\uD654\uC640 \uD568\uAED8 \uD55C\uAD6D\uC5B4\uC640 \uC601\uC5B4\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. AI\uB294 Whisper Large V3\uC640 Llama 3.1\uC758 \uB2E4\uAD6D\uC5B4 \uAE30\uB2A5 \uB355\uBD84\uC5D0 99\uAC1C \uC5B8\uC5B4\uB85C \uC774\uD574\uD558\uACE0 \uC751\uB2F5\uD569\uB2C8\uB2E4. \uC5B8\uC5B4 \uAC04 \uCF54\uB4DC \uC2A4\uC704\uCE6D\uB3C4 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uCC98\uB9AC\uD569\uB2C8\uB2E4.","q5":"\uC624\uD504\uB77C\uC778\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB098\uC694?","a5":"\uBB3C\uB860\uC785\uB2C8\uB2E4! \uCD08\uAE30 \uBAA8\uB378 \uB2E4\uC6B4\uB85C\uB4DC(~12GB) \uD6C4, Eden V3\uB294 \uC644\uC804\uD788 \uC624\uD504\uB77C\uC778\uC73C\uB85C \uC791\uB3D9\uD569\uB2C8\uB2E4. \uC77C\uC0C1\uC801\uC778 \uC0AC\uC6A9\uC5D0 \uC778\uD130\uB137 \uC5F0\uACB0\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAE30\uBC00 \uC791\uC5C5, \uC5EC\uD589 \uB610\uB294 \uBD88\uC548\uC815\uD55C \uC778\uD130\uB137 \uC5F0\uACB0\uC5D0 \uC644\uBCBD\uD569\uB2C8\uB2E4.","q6":"AI\uC758 \uC131\uACA9\uC744 \uC5B4\uB5BB\uAC8C \uCEE4\uC2A4\uD130\uB9C8\uC774\uC9D5\uD558\uB098\uC694?","a6":"\uC124\uC815 > \uD398\uB974\uC18C\uB098\uB85C \uC774\uB3D9\uD558\uC5EC \uACA9\uC2DD, \uC720\uBA38, \uB9D0\uC758 \uC7A5\uD669\uD568, \uC774\uBAA8\uC9C0 \uC0AC\uC6A9, \uACF5\uAC10 \uB4F1 20-30\uAC1C \uD30C\uB77C\uBBF8\uD130\uB97C \uC870\uC815\uD558\uC138\uC694. 6\uAC1C\uC758 \uC0AC\uC804 \uAD6C\uCD95 \uD398\uB974\uC18C\uB098(Eden, \uC5C4\uACA9\uD55C \uBA58\uD1A0, \uCF8C\uD65C\uD55C \uCE5C\uAD6C, \uC804\uBB38 \uC5B4\uC2DC\uC2A4\uD134\uD2B8, \uCF54\uB529 \uC120\uC0DD\uB2D8, \uCEE4\uC2A4\uD140) \uC911\uC5D0\uC11C \uC120\uD0DD\uD558\uAC70\uB098 \uC9C1\uC811 \uB9CC\uB4DC\uC138\uC694. \uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uD53C\uB4DC\uBC31\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACBD\uC0AC \uD558\uAC15 \uCD5C\uC801\uD654\uB97C \uD1B5\uD574 \uC120\uD638\uB3C4\uC5D0 \uB9DE\uAC8C \uD6C8\uB828\uD558\uC138\uC694.","q7":"RAG \uBA54\uBAA8\uB9AC\uB780 \uBB34\uC5C7\uC774\uBA70 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB098\uC694?","a7":"RAG(\uAC80\uC0C9 \uC99D\uAC15 \uC0DD\uC131)\uB294 Eden\uC774 \uB2F9\uC2E0\uC744 \uAE30\uC5B5\uD558\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uBAA8\uB4E0 \uB300\uD654\uB294 ChromaDB \uBCA1\uD130 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uB85C\uCEEC\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC9C8\uBB38\uD560 \uB54C Eden\uC740 \uACFC\uAC70 \uB300\uD654(\uBA87 \uB2EC \uC804\uC774\uB77C\uB3C4)\uB97C \uC758\uBBF8\uB860\uC801\uC73C\uB85C \uAC80\uC0C9\uD558\uC5EC \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC778\uC9C0\uD55C \uAC1C\uC778\uD654\uB41C \uC751\uB2F5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC120\uD638\uB3C4, \uD504\uB85C\uC81D\uD2B8 \uB610\uB294 \uACFC\uAC70 \uB17C\uC758\uB97C \uC808\uB300 \uC78A\uC9C0 \uC54A\uB294 \uCE5C\uAD6C\uB97C \uAC16\uB294 \uAC83\uACFC \uAC19\uC2B5\uB2C8\uB2E4.","q8":"\uBC84\uADF8\uB098 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uBA74 \uC5B4\uB5BB\uAC8C \uD558\uB098\uC694?","a8":"GitHub Issues \uD398\uC774\uC9C0\uC5D0 \uBC84\uADF8\uB97C \uBCF4\uACE0\uD574 \uC8FC\uC138\uC694. 85% \uC644\uC131(8\uB2E8\uACC4: \uCD9C\uC2DC)\uC758 \uC624\uD508\uC18C\uC2A4 \uD504\uB85C\uC81D\uD2B8\uB85C\uC11C \uC801\uADF9\uC801\uC73C\uB85C \uAC1C\uC120 \uC911\uC774\uBA70 \uD53C\uB4DC\uBC31\uC744 \uC18C\uC911\uD788 \uC5EC\uAE41\uB2C8\uB2E4. \uCEE4\uBBA4\uB2C8\uD2F0\uB294 \uCE5C\uC808\uD558\uACE0 \uBC18\uC751\uC774 \uBE60\uB985\uB2C8\uB2E4!","q9":"\uD504\uB85C\uC81D\uD2B8\uC5D0 \uAE30\uC5EC\uD560 \uC218 \uC788\uB098\uC694?","a9":"\uB124! \uAE30\uC5EC\uB97C \uD658\uC601\uD569\uB2C8\uB2E4. \uAE30\uC5EC \uAC00\uC774\uB4DC\uB77C\uC778\uC740 GitHub \uC800\uC7A5\uC18C\uB97C \uD655\uC778\uD558\uC138\uC694. \uCF54\uB4DC, \uBB38\uC11C, \uBC84\uADF8 \uB9AC\uD3EC\uD2B8, \uAE30\uB2A5 \uC81C\uC548 \uB4F1 - 100% \uB2EC\uC131\uACFC \uADF8 \uC774\uC0C1\uC5D0 \uB3C4\uB2EC\uD558\uB3C4\uB85D \uB3C4\uC640\uC8FC\uC138\uC694! MIT \uB77C\uC774\uC120\uC2A4\uB294 \uBAA8\uB450\uC5D0\uAC8C \uC9C4\uC815\uC73C\uB85C \uC5F4\uB824 \uC788\uB2E4\uB294 \uC758\uBBF8\uC785\uB2C8\uB2E4.","q10":"\uC65C \uD63C\uC790 \uC77C\uD558\uB294 \uAC1C\uBC1C\uC790\uAC00 \uC8FC\uC694 \uD0C0\uAC9F \uC0AC\uC6A9\uC790\uC778\uAC00\uC694?","a10":"Eden\uC740 \uD63C\uC790 \uC77C\uD558\uB294 \uAC1C\uBC1C\uC790\uC640 \uC7AC\uD0DD \uADFC\uBB34\uC790 \uC0AC\uC774\uC758 \uC678\uB85C\uC6C0 \uC804\uC5FC\uBCD1\uC744 \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uB9CC\uB4E4\uC5B4\uC84C\uC2B5\uB2C8\uB2E4. \uC7AC\uD0DD \uADFC\uBB34\uB294 \uACE0\uB9BD\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4 - Eden\uC740 \uCF54\uB529\uD558\uB294 \uB3D9\uC548 \uC9C4\uC815\uD55C \uB3D9\uBC18\uC790\uB97C \uC81C\uACF5\uD558\uACE0, \uC131\uACF5\uC744 \uCD95\uD558\uD558\uBA70, \uC88C\uC808\uAC10 \uC18D\uC5D0\uC11C \uC704\uB85C\uB97C \uC81C\uACF5\uD558\uACE0, \uC0DD\uC0B0\uC131\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4. \uB2E8\uC21C\uD55C \uC5B4\uC2DC\uC2A4\uD134\uD2B8\uAC00 \uC544\uB2C8\uB77C \uACC1\uC5D0 \uC788\uB294 \uCE5C\uAD6C\uC785\uB2C8\uB2E4."},"finalCta":{"title":"\uC624\uB298 \uB2F9\uC2E0\uC758 AI \uB3D9\uBC18\uC790\uB97C \uCC3E\uC73C\uC138\uC694","subtitle":"\uC678\uB85C\uC6C0 \uD574\uC18C. \uC0DD\uC0B0\uC131 \uD5A5\uC0C1. \uD504\uB77C\uC774\uBC84\uC2DC \uBCF4\uD638. Eden Proejct\uC5D0\uC11C \uC644\uBCBD\uD55C AI \uB3D9\uBC18\uC790\uB97C \uCC3E\uC740 \uC218\uCC9C \uBA85\uC758 \uAC1C\uBC1C\uC790\uC640 \uD568\uAED8\uD558\uC138\uC694.","downloadButton":"\uC9C0\uAE08 \uB2E4\uC6B4\uB85C\uB4DC - \uBB34\uB8CC\uC785\uB2C8\uB2E4!","githubButton":"GitHub \uC2A4\uD0C0","badge":"100% \uD504\uB77C\uC774\uBE57 \u2022 \uC601\uAD6C \uBB34\uB8CC \u2022 MIT \uB77C\uC774\uC120\uC2A4 \u2022 \uCE5C\uAD6C \uAC19\uC740 \uB3D9\uBC18\uC790"},"footer":{"title":"Eden Proejct","version":"\uBC84\uC804 1.0.0-\uBCA0\uD0C0 \u2022 85% \uC644\uC131 \u2022 8\uB2E8\uACC4: \uCD9C\uC2DC","license":"MIT \uB77C\uC774\uC120\uC2A4","licenseDesc":"\uC601\uAD6C \uBB34\uB8CC, \uC81C\uD55C \uC5C6\uC74C","inspiration":"\uB9C8\uBE14 \uC544\uC774\uC5B8\uB9E8\uC758 \uC790\uBE44\uC2A4\uC5D0\uC11C \uC601\uAC10\uC744 \uBC1B\uC74C","builtWith":"\uC678\uB85C\uC6C0 \uD574\uC18C\uC640 \uC0DD\uC0B0\uC131 \uD5A5\uC0C1\uC744 \uC704\uD574 \u2764\uFE0F\uB85C \uAD6C\uCD95\uB428","poweredBy":"Llama 3.1 8B (HumanEval: 80.5%), Whisper Large V3 (99\uAC1C \uC5B8\uC5B4), LLaVA 7B\uB85C \uAD6C\uB3D9","copyright":"\xA9 2024 Eden Proejct. \uBAA8\uB4E0 \uAD8C\uB9AC \uBCF4\uC720."}}'
          );
        },
        809: (N, A, b) => {
          "use strict";
          b.d(A, { z: () => S });
          class S extends Error {
            constructor(x, y) {
              super(
                "Invariant: " +
                  (x.endsWith(".") ? x : x + ".") +
                  " This is a bug in Next.js.",
                y
              ),
                (this.name = "InvariantError");
            }
          }
        },
        814: (N, A, b) => {
          "use strict";
          N.exports = b(440);
        },
        817: (N, A, b) => {
          (() => {
            "use strict";
            var S = {
                491: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.ContextAPI = void 0);
                  let _ = i(223),
                    m = i(172),
                    d = i(930),
                    r = "context",
                    o = new _.NoopContextManager();
                  class c {
                    constructor() {}
                    static getInstance() {
                      return (
                        this._instance || (this._instance = new c()),
                        this._instance
                      );
                    }
                    setGlobalContextManager(p) {
                      return (0, m.registerGlobal)(r, p, d.DiagAPI.instance());
                    }
                    active() {
                      return this._getContextManager().active();
                    }
                    with(p, u, f, ...v) {
                      return this._getContextManager().with(p, u, f, ...v);
                    }
                    bind(p, u) {
                      return this._getContextManager().bind(p, u);
                    }
                    _getContextManager() {
                      return (0, m.getGlobal)(r) || o;
                    }
                    disable() {
                      this._getContextManager().disable(),
                        (0, m.unregisterGlobal)(r, d.DiagAPI.instance());
                    }
                  }
                  e.ContextAPI = c;
                },
                930: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.DiagAPI = void 0);
                  let _ = i(56),
                    m = i(912),
                    d = i(957),
                    r = i(172);
                  class o {
                    constructor() {
                      function s(u) {
                        return function (...f) {
                          let v = (0, r.getGlobal)("diag");
                          if (v) return v[u](...f);
                        };
                      }
                      let p = this;
                      (p.setLogger = (
                        u,
                        f = { logLevel: d.DiagLogLevel.INFO }
                      ) => {
                        var v, R, O;
                        if (u === p) {
                          let K = Error(
                            "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation"
                          );
                          return (
                            p.error((v = K.stack) != null ? v : K.message), !1
                          );
                        }
                        typeof f == "number" && (f = { logLevel: f });
                        let T = (0, r.getGlobal)("diag"),
                          I = (0, m.createLogLevelDiagLogger)(
                            (R = f.logLevel) != null ? R : d.DiagLogLevel.INFO,
                            u
                          );
                        if (T && !f.suppressOverrideMessage) {
                          let K =
                            (O = Error().stack) != null
                              ? O
                              : "<failed to generate stacktrace>";
                          T.warn(
                            `Current logger will be overwritten from ${K}`
                          ),
                            I.warn(
                              `Current logger will overwrite one already registered from ${K}`
                            );
                        }
                        return (0, r.registerGlobal)("diag", I, p, !0);
                      }),
                        (p.disable = () => {
                          (0, r.unregisterGlobal)("diag", p);
                        }),
                        (p.createComponentLogger = (u) =>
                          new _.DiagComponentLogger(u)),
                        (p.verbose = s("verbose")),
                        (p.debug = s("debug")),
                        (p.info = s("info")),
                        (p.warn = s("warn")),
                        (p.error = s("error"));
                    }
                    static instance() {
                      return (
                        this._instance || (this._instance = new o()),
                        this._instance
                      );
                    }
                  }
                  e.DiagAPI = o;
                },
                653: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.MetricsAPI = void 0);
                  let _ = i(660),
                    m = i(172),
                    d = i(930),
                    r = "metrics";
                  class o {
                    constructor() {}
                    static getInstance() {
                      return (
                        this._instance || (this._instance = new o()),
                        this._instance
                      );
                    }
                    setGlobalMeterProvider(s) {
                      return (0, m.registerGlobal)(r, s, d.DiagAPI.instance());
                    }
                    getMeterProvider() {
                      return (0, m.getGlobal)(r) || _.NOOP_METER_PROVIDER;
                    }
                    getMeter(s, p, u) {
                      return this.getMeterProvider().getMeter(s, p, u);
                    }
                    disable() {
                      (0, m.unregisterGlobal)(r, d.DiagAPI.instance());
                    }
                  }
                  e.MetricsAPI = o;
                },
                181: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.PropagationAPI = void 0);
                  let _ = i(172),
                    m = i(874),
                    d = i(194),
                    r = i(277),
                    o = i(369),
                    c = i(930),
                    s = "propagation",
                    p = new m.NoopTextMapPropagator();
                  class u {
                    constructor() {
                      (this.createBaggage = o.createBaggage),
                        (this.getBaggage = r.getBaggage),
                        (this.getActiveBaggage = r.getActiveBaggage),
                        (this.setBaggage = r.setBaggage),
                        (this.deleteBaggage = r.deleteBaggage);
                    }
                    static getInstance() {
                      return (
                        this._instance || (this._instance = new u()),
                        this._instance
                      );
                    }
                    setGlobalPropagator(v) {
                      return (0, _.registerGlobal)(s, v, c.DiagAPI.instance());
                    }
                    inject(v, R, O = d.defaultTextMapSetter) {
                      return this._getGlobalPropagator().inject(v, R, O);
                    }
                    extract(v, R, O = d.defaultTextMapGetter) {
                      return this._getGlobalPropagator().extract(v, R, O);
                    }
                    fields() {
                      return this._getGlobalPropagator().fields();
                    }
                    disable() {
                      (0, _.unregisterGlobal)(s, c.DiagAPI.instance());
                    }
                    _getGlobalPropagator() {
                      return (0, _.getGlobal)(s) || p;
                    }
                  }
                  e.PropagationAPI = u;
                },
                997: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.TraceAPI = void 0);
                  let _ = i(172),
                    m = i(846),
                    d = i(139),
                    r = i(607),
                    o = i(930),
                    c = "trace";
                  class s {
                    constructor() {
                      (this._proxyTracerProvider = new m.ProxyTracerProvider()),
                        (this.wrapSpanContext = d.wrapSpanContext),
                        (this.isSpanContextValid = d.isSpanContextValid),
                        (this.deleteSpan = r.deleteSpan),
                        (this.getSpan = r.getSpan),
                        (this.getActiveSpan = r.getActiveSpan),
                        (this.getSpanContext = r.getSpanContext),
                        (this.setSpan = r.setSpan),
                        (this.setSpanContext = r.setSpanContext);
                    }
                    static getInstance() {
                      return (
                        this._instance || (this._instance = new s()),
                        this._instance
                      );
                    }
                    setGlobalTracerProvider(u) {
                      let f = (0, _.registerGlobal)(
                        c,
                        this._proxyTracerProvider,
                        o.DiagAPI.instance()
                      );
                      return f && this._proxyTracerProvider.setDelegate(u), f;
                    }
                    getTracerProvider() {
                      return (0, _.getGlobal)(c) || this._proxyTracerProvider;
                    }
                    getTracer(u, f) {
                      return this.getTracerProvider().getTracer(u, f);
                    }
                    disable() {
                      (0, _.unregisterGlobal)(c, o.DiagAPI.instance()),
                        (this._proxyTracerProvider =
                          new m.ProxyTracerProvider());
                    }
                  }
                  e.TraceAPI = s;
                },
                277: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.deleteBaggage =
                      e.setBaggage =
                      e.getActiveBaggage =
                      e.getBaggage =
                        void 0);
                  let _ = i(491),
                    m = (0, i(780).createContextKey)(
                      "OpenTelemetry Baggage Key"
                    );
                  function d(r) {
                    return r.getValue(m) || void 0;
                  }
                  (e.getBaggage = d),
                    (e.getActiveBaggage = function () {
                      return d(_.ContextAPI.getInstance().active());
                    }),
                    (e.setBaggage = function (r, o) {
                      return r.setValue(m, o);
                    }),
                    (e.deleteBaggage = function (r) {
                      return r.deleteValue(m);
                    });
                },
                993: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.BaggageImpl = void 0);
                  class i {
                    constructor(m) {
                      this._entries = m ? new Map(m) : new Map();
                    }
                    getEntry(m) {
                      let d = this._entries.get(m);
                      if (d) return Object.assign({}, d);
                    }
                    getAllEntries() {
                      return Array.from(this._entries.entries()).map(
                        ([m, d]) => [m, d]
                      );
                    }
                    setEntry(m, d) {
                      let r = new i(this._entries);
                      return r._entries.set(m, d), r;
                    }
                    removeEntry(m) {
                      let d = new i(this._entries);
                      return d._entries.delete(m), d;
                    }
                    removeEntries(...m) {
                      let d = new i(this._entries);
                      for (let r of m) d._entries.delete(r);
                      return d;
                    }
                    clear() {
                      return new i();
                    }
                  }
                  e.BaggageImpl = i;
                },
                830: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.baggageEntryMetadataSymbol = void 0),
                    (e.baggageEntryMetadataSymbol = Symbol(
                      "BaggageEntryMetadata"
                    ));
                },
                369: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.baggageEntryMetadataFromString = e.createBaggage =
                      void 0);
                  let _ = i(930),
                    m = i(993),
                    d = i(830),
                    r = _.DiagAPI.instance();
                  (e.createBaggage = function (o = {}) {
                    return new m.BaggageImpl(new Map(Object.entries(o)));
                  }),
                    (e.baggageEntryMetadataFromString = function (o) {
                      return (
                        typeof o != "string" &&
                          (r.error(
                            `Cannot create baggage metadata from unknown type: ${typeof o}`
                          ),
                          (o = "")),
                        {
                          __TYPE__: d.baggageEntryMetadataSymbol,
                          toString: () => o,
                        }
                      );
                    });
                },
                67: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.context = void 0),
                    (e.context = i(491).ContextAPI.getInstance());
                },
                223: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.NoopContextManager = void 0);
                  let _ = i(780);
                  class m {
                    active() {
                      return _.ROOT_CONTEXT;
                    }
                    with(r, o, c, ...s) {
                      return o.call(c, ...s);
                    }
                    bind(r, o) {
                      return o;
                    }
                    enable() {
                      return this;
                    }
                    disable() {
                      return this;
                    }
                  }
                  e.NoopContextManager = m;
                },
                780: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.ROOT_CONTEXT = e.createContextKey = void 0),
                    (e.createContextKey = function (_) {
                      return Symbol.for(_);
                    });
                  class i {
                    constructor(m) {
                      let d = this;
                      (d._currentContext = m ? new Map(m) : new Map()),
                        (d.getValue = (r) => d._currentContext.get(r)),
                        (d.setValue = (r, o) => {
                          let c = new i(d._currentContext);
                          return c._currentContext.set(r, o), c;
                        }),
                        (d.deleteValue = (r) => {
                          let o = new i(d._currentContext);
                          return o._currentContext.delete(r), o;
                        });
                    }
                  }
                  e.ROOT_CONTEXT = new i();
                },
                506: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.diag = void 0),
                    (e.diag = i(930).DiagAPI.instance());
                },
                56: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.DiagComponentLogger = void 0);
                  let _ = i(172);
                  class m {
                    constructor(o) {
                      this._namespace = o.namespace || "DiagComponentLogger";
                    }
                    debug(...o) {
                      return d("debug", this._namespace, o);
                    }
                    error(...o) {
                      return d("error", this._namespace, o);
                    }
                    info(...o) {
                      return d("info", this._namespace, o);
                    }
                    warn(...o) {
                      return d("warn", this._namespace, o);
                    }
                    verbose(...o) {
                      return d("verbose", this._namespace, o);
                    }
                  }
                  function d(r, o, c) {
                    let s = (0, _.getGlobal)("diag");
                    if (s) return c.unshift(o), s[r](...c);
                  }
                  e.DiagComponentLogger = m;
                },
                972: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.DiagConsoleLogger = void 0);
                  let i = [
                    { n: "error", c: "error" },
                    { n: "warn", c: "warn" },
                    { n: "info", c: "info" },
                    { n: "debug", c: "debug" },
                    { n: "verbose", c: "trace" },
                  ];
                  class _ {
                    constructor() {
                      for (let d = 0; d < i.length; d++)
                        this[i[d].n] = (function (r) {
                          return function (...o) {
                            if (console) {
                              let c = console[r];
                              if (
                                (typeof c != "function" && (c = console.log),
                                typeof c == "function")
                              )
                                return c.apply(console, o);
                            }
                          };
                        })(i[d].c);
                    }
                  }
                  e.DiagConsoleLogger = _;
                },
                912: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.createLogLevelDiagLogger = void 0);
                  let _ = i(957);
                  e.createLogLevelDiagLogger = function (m, d) {
                    function r(o, c) {
                      let s = d[o];
                      return typeof s == "function" && m >= c
                        ? s.bind(d)
                        : function () {};
                    }
                    return (
                      m < _.DiagLogLevel.NONE
                        ? (m = _.DiagLogLevel.NONE)
                        : m > _.DiagLogLevel.ALL && (m = _.DiagLogLevel.ALL),
                      (d = d || {}),
                      {
                        error: r("error", _.DiagLogLevel.ERROR),
                        warn: r("warn", _.DiagLogLevel.WARN),
                        info: r("info", _.DiagLogLevel.INFO),
                        debug: r("debug", _.DiagLogLevel.DEBUG),
                        verbose: r("verbose", _.DiagLogLevel.VERBOSE),
                      }
                    );
                  };
                },
                957: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.DiagLogLevel = void 0),
                    (function (i) {
                      (i[(i.NONE = 0)] = "NONE"),
                        (i[(i.ERROR = 30)] = "ERROR"),
                        (i[(i.WARN = 50)] = "WARN"),
                        (i[(i.INFO = 60)] = "INFO"),
                        (i[(i.DEBUG = 70)] = "DEBUG"),
                        (i[(i.VERBOSE = 80)] = "VERBOSE"),
                        (i[(i.ALL = 9999)] = "ALL");
                    })(e.DiagLogLevel || (e.DiagLogLevel = {}));
                },
                172: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.unregisterGlobal =
                      e.getGlobal =
                      e.registerGlobal =
                        void 0);
                  let _ = i(200),
                    m = i(521),
                    d = i(130),
                    r = m.VERSION.split(".")[0],
                    o = Symbol.for(`opentelemetry.js.api.${r}`),
                    c = _._globalThis;
                  (e.registerGlobal = function (s, p, u, f = !1) {
                    var v;
                    let R = (c[o] =
                      (v = c[o]) != null ? v : { version: m.VERSION });
                    if (!f && R[s]) {
                      let O = Error(
                        `@opentelemetry/api: Attempted duplicate registration of API: ${s}`
                      );
                      return u.error(O.stack || O.message), !1;
                    }
                    if (R.version !== m.VERSION) {
                      let O = Error(
                        `@opentelemetry/api: Registration of version v${R.version} for ${s} does not match previously registered API v${m.VERSION}`
                      );
                      return u.error(O.stack || O.message), !1;
                    }
                    return (
                      (R[s] = p),
                      u.debug(
                        `@opentelemetry/api: Registered a global for ${s} v${m.VERSION}.`
                      ),
                      !0
                    );
                  }),
                    (e.getGlobal = function (s) {
                      var p, u;
                      let f = (p = c[o]) == null ? void 0 : p.version;
                      if (f && (0, d.isCompatible)(f))
                        return (u = c[o]) == null ? void 0 : u[s];
                    }),
                    (e.unregisterGlobal = function (s, p) {
                      p.debug(
                        `@opentelemetry/api: Unregistering a global for ${s} v${m.VERSION}.`
                      );
                      let u = c[o];
                      u && delete u[s];
                    });
                },
                130: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.isCompatible = e._makeCompatibilityCheck = void 0);
                  let _ = i(521),
                    m = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
                  function d(r) {
                    let o = new Set([r]),
                      c = new Set(),
                      s = r.match(m);
                    if (!s) return () => !1;
                    let p = {
                      major: +s[1],
                      minor: +s[2],
                      patch: +s[3],
                      prerelease: s[4],
                    };
                    if (p.prerelease != null)
                      return function (f) {
                        return f === r;
                      };
                    function u(f) {
                      return c.add(f), !1;
                    }
                    return function (f) {
                      if (o.has(f)) return !0;
                      if (c.has(f)) return !1;
                      let v = f.match(m);
                      if (!v) return u(f);
                      let R = {
                        major: +v[1],
                        minor: +v[2],
                        patch: +v[3],
                        prerelease: v[4],
                      };
                      return R.prerelease != null || p.major !== R.major
                        ? u(f)
                        : p.major === 0
                        ? p.minor === R.minor && p.patch <= R.patch
                          ? (o.add(f), !0)
                          : u(f)
                        : p.minor <= R.minor
                        ? (o.add(f), !0)
                        : u(f);
                    };
                  }
                  (e._makeCompatibilityCheck = d),
                    (e.isCompatible = d(_.VERSION));
                },
                886: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.metrics = void 0),
                    (e.metrics = i(653).MetricsAPI.getInstance());
                },
                901: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.ValueType = void 0),
                    (function (i) {
                      (i[(i.INT = 0)] = "INT"), (i[(i.DOUBLE = 1)] = "DOUBLE");
                    })(e.ValueType || (e.ValueType = {}));
                },
                102: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.createNoopMeter =
                      e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
                      e.NOOP_OBSERVABLE_GAUGE_METRIC =
                      e.NOOP_OBSERVABLE_COUNTER_METRIC =
                      e.NOOP_UP_DOWN_COUNTER_METRIC =
                      e.NOOP_HISTOGRAM_METRIC =
                      e.NOOP_COUNTER_METRIC =
                      e.NOOP_METER =
                      e.NoopObservableUpDownCounterMetric =
                      e.NoopObservableGaugeMetric =
                      e.NoopObservableCounterMetric =
                      e.NoopObservableMetric =
                      e.NoopHistogramMetric =
                      e.NoopUpDownCounterMetric =
                      e.NoopCounterMetric =
                      e.NoopMetric =
                      e.NoopMeter =
                        void 0);
                  class i {
                    constructor() {}
                    createHistogram(f, v) {
                      return e.NOOP_HISTOGRAM_METRIC;
                    }
                    createCounter(f, v) {
                      return e.NOOP_COUNTER_METRIC;
                    }
                    createUpDownCounter(f, v) {
                      return e.NOOP_UP_DOWN_COUNTER_METRIC;
                    }
                    createObservableGauge(f, v) {
                      return e.NOOP_OBSERVABLE_GAUGE_METRIC;
                    }
                    createObservableCounter(f, v) {
                      return e.NOOP_OBSERVABLE_COUNTER_METRIC;
                    }
                    createObservableUpDownCounter(f, v) {
                      return e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                    }
                    addBatchObservableCallback(f, v) {}
                    removeBatchObservableCallback(f) {}
                  }
                  e.NoopMeter = i;
                  class _ {}
                  e.NoopMetric = _;
                  class m extends _ {
                    add(f, v) {}
                  }
                  e.NoopCounterMetric = m;
                  class d extends _ {
                    add(f, v) {}
                  }
                  e.NoopUpDownCounterMetric = d;
                  class r extends _ {
                    record(f, v) {}
                  }
                  e.NoopHistogramMetric = r;
                  class o {
                    addCallback(f) {}
                    removeCallback(f) {}
                  }
                  e.NoopObservableMetric = o;
                  class c extends o {}
                  e.NoopObservableCounterMetric = c;
                  class s extends o {}
                  e.NoopObservableGaugeMetric = s;
                  class p extends o {}
                  (e.NoopObservableUpDownCounterMetric = p),
                    (e.NOOP_METER = new i()),
                    (e.NOOP_COUNTER_METRIC = new m()),
                    (e.NOOP_HISTOGRAM_METRIC = new r()),
                    (e.NOOP_UP_DOWN_COUNTER_METRIC = new d()),
                    (e.NOOP_OBSERVABLE_COUNTER_METRIC = new c()),
                    (e.NOOP_OBSERVABLE_GAUGE_METRIC = new s()),
                    (e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new p()),
                    (e.createNoopMeter = function () {
                      return e.NOOP_METER;
                    });
                },
                660: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.NOOP_METER_PROVIDER = e.NoopMeterProvider = void 0);
                  let _ = i(102);
                  class m {
                    getMeter(r, o, c) {
                      return _.NOOP_METER;
                    }
                  }
                  (e.NoopMeterProvider = m), (e.NOOP_METER_PROVIDER = new m());
                },
                200: function (h, e, i) {
                  var _ =
                      (this && this.__createBinding) ||
                      (Object.create
                        ? function (d, r, o, c) {
                            c === void 0 && (c = o),
                              Object.defineProperty(d, c, {
                                enumerable: !0,
                                get: function () {
                                  return r[o];
                                },
                              });
                          }
                        : function (d, r, o, c) {
                            c === void 0 && (c = o), (d[c] = r[o]);
                          }),
                    m =
                      (this && this.__exportStar) ||
                      function (d, r) {
                        for (var o in d)
                          o === "default" ||
                            Object.prototype.hasOwnProperty.call(r, o) ||
                            _(r, d, o);
                      };
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    m(i(46), e);
                },
                651: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e._globalThis = void 0),
                    (e._globalThis = typeof Y == "object" ? Y : b.g);
                },
                46: function (h, e, i) {
                  var _ =
                      (this && this.__createBinding) ||
                      (Object.create
                        ? function (d, r, o, c) {
                            c === void 0 && (c = o),
                              Object.defineProperty(d, c, {
                                enumerable: !0,
                                get: function () {
                                  return r[o];
                                },
                              });
                          }
                        : function (d, r, o, c) {
                            c === void 0 && (c = o), (d[c] = r[o]);
                          }),
                    m =
                      (this && this.__exportStar) ||
                      function (d, r) {
                        for (var o in d)
                          o === "default" ||
                            Object.prototype.hasOwnProperty.call(r, o) ||
                            _(r, d, o);
                      };
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    m(i(651), e);
                },
                939: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.propagation = void 0),
                    (e.propagation = i(181).PropagationAPI.getInstance());
                },
                874: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.NoopTextMapPropagator = void 0);
                  class i {
                    inject(m, d) {}
                    extract(m, d) {
                      return m;
                    }
                    fields() {
                      return [];
                    }
                  }
                  e.NoopTextMapPropagator = i;
                },
                194: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.defaultTextMapSetter = e.defaultTextMapGetter = void 0),
                    (e.defaultTextMapGetter = {
                      get(i, _) {
                        if (i != null) return i[_];
                      },
                      keys: (i) => (i == null ? [] : Object.keys(i)),
                    }),
                    (e.defaultTextMapSetter = {
                      set(i, _, m) {
                        i != null && (i[_] = m);
                      },
                    });
                },
                845: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.trace = void 0),
                    (e.trace = i(997).TraceAPI.getInstance());
                },
                403: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.NonRecordingSpan = void 0);
                  let _ = i(476);
                  class m {
                    constructor(r = _.INVALID_SPAN_CONTEXT) {
                      this._spanContext = r;
                    }
                    spanContext() {
                      return this._spanContext;
                    }
                    setAttribute(r, o) {
                      return this;
                    }
                    setAttributes(r) {
                      return this;
                    }
                    addEvent(r, o) {
                      return this;
                    }
                    setStatus(r) {
                      return this;
                    }
                    updateName(r) {
                      return this;
                    }
                    end(r) {}
                    isRecording() {
                      return !1;
                    }
                    recordException(r, o) {}
                  }
                  e.NonRecordingSpan = m;
                },
                614: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.NoopTracer = void 0);
                  let _ = i(491),
                    m = i(607),
                    d = i(403),
                    r = i(139),
                    o = _.ContextAPI.getInstance();
                  class c {
                    startSpan(p, u, f = o.active()) {
                      var v;
                      if (u?.root) return new d.NonRecordingSpan();
                      let R = f && (0, m.getSpanContext)(f);
                      return typeof (v = R) == "object" &&
                        typeof v.spanId == "string" &&
                        typeof v.traceId == "string" &&
                        typeof v.traceFlags == "number" &&
                        (0, r.isSpanContextValid)(R)
                        ? new d.NonRecordingSpan(R)
                        : new d.NonRecordingSpan();
                    }
                    startActiveSpan(p, u, f, v) {
                      let R, O, T;
                      if (arguments.length < 2) return;
                      arguments.length == 2
                        ? (T = u)
                        : arguments.length == 3
                        ? ((R = u), (T = f))
                        : ((R = u), (O = f), (T = v));
                      let I = O ?? o.active(),
                        K = this.startSpan(p, R, I),
                        V = (0, m.setSpan)(I, K);
                      return o.with(V, T, void 0, K);
                    }
                  }
                  e.NoopTracer = c;
                },
                124: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.NoopTracerProvider = void 0);
                  let _ = i(614);
                  class m {
                    getTracer(r, o, c) {
                      return new _.NoopTracer();
                    }
                  }
                  e.NoopTracerProvider = m;
                },
                125: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.ProxyTracer = void 0);
                  let _ = new (i(614).NoopTracer)();
                  class m {
                    constructor(r, o, c, s) {
                      (this._provider = r),
                        (this.name = o),
                        (this.version = c),
                        (this.options = s);
                    }
                    startSpan(r, o, c) {
                      return this._getTracer().startSpan(r, o, c);
                    }
                    startActiveSpan(r, o, c, s) {
                      let p = this._getTracer();
                      return Reflect.apply(p.startActiveSpan, p, arguments);
                    }
                    _getTracer() {
                      if (this._delegate) return this._delegate;
                      let r = this._provider.getDelegateTracer(
                        this.name,
                        this.version,
                        this.options
                      );
                      return r ? ((this._delegate = r), this._delegate) : _;
                    }
                  }
                  e.ProxyTracer = m;
                },
                846: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.ProxyTracerProvider = void 0);
                  let _ = i(125),
                    m = new (i(124).NoopTracerProvider)();
                  class d {
                    getTracer(o, c, s) {
                      var p;
                      return (p = this.getDelegateTracer(o, c, s)) != null
                        ? p
                        : new _.ProxyTracer(this, o, c, s);
                    }
                    getDelegate() {
                      var o;
                      return (o = this._delegate) != null ? o : m;
                    }
                    setDelegate(o) {
                      this._delegate = o;
                    }
                    getDelegateTracer(o, c, s) {
                      var p;
                      return (p = this._delegate) == null
                        ? void 0
                        : p.getTracer(o, c, s);
                    }
                  }
                  e.ProxyTracerProvider = d;
                },
                996: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.SamplingDecision = void 0),
                    (function (i) {
                      (i[(i.NOT_RECORD = 0)] = "NOT_RECORD"),
                        (i[(i.RECORD = 1)] = "RECORD"),
                        (i[(i.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED");
                    })(e.SamplingDecision || (e.SamplingDecision = {}));
                },
                607: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.getSpanContext =
                      e.setSpanContext =
                      e.deleteSpan =
                      e.setSpan =
                      e.getActiveSpan =
                      e.getSpan =
                        void 0);
                  let _ = i(780),
                    m = i(403),
                    d = i(491),
                    r = (0, _.createContextKey)(
                      "OpenTelemetry Context Key SPAN"
                    );
                  function o(s) {
                    return s.getValue(r) || void 0;
                  }
                  function c(s, p) {
                    return s.setValue(r, p);
                  }
                  (e.getSpan = o),
                    (e.getActiveSpan = function () {
                      return o(d.ContextAPI.getInstance().active());
                    }),
                    (e.setSpan = c),
                    (e.deleteSpan = function (s) {
                      return s.deleteValue(r);
                    }),
                    (e.setSpanContext = function (s, p) {
                      return c(s, new m.NonRecordingSpan(p));
                    }),
                    (e.getSpanContext = function (s) {
                      var p;
                      return (p = o(s)) == null ? void 0 : p.spanContext();
                    });
                },
                325: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.TraceStateImpl = void 0);
                  let _ = i(564);
                  class m {
                    constructor(r) {
                      (this._internalState = new Map()), r && this._parse(r);
                    }
                    set(r, o) {
                      let c = this._clone();
                      return (
                        c._internalState.has(r) && c._internalState.delete(r),
                        c._internalState.set(r, o),
                        c
                      );
                    }
                    unset(r) {
                      let o = this._clone();
                      return o._internalState.delete(r), o;
                    }
                    get(r) {
                      return this._internalState.get(r);
                    }
                    serialize() {
                      return this._keys()
                        .reduce(
                          (r, o) => (r.push(o + "=" + this.get(o)), r),
                          []
                        )
                        .join(",");
                    }
                    _parse(r) {
                      !(r.length > 512) &&
                        ((this._internalState = r
                          .split(",")
                          .reverse()
                          .reduce((o, c) => {
                            let s = c.trim(),
                              p = s.indexOf("=");
                            if (p !== -1) {
                              let u = s.slice(0, p),
                                f = s.slice(p + 1, c.length);
                              (0, _.validateKey)(u) &&
                                (0, _.validateValue)(f) &&
                                o.set(u, f);
                            }
                            return o;
                          }, new Map())),
                        this._internalState.size > 32 &&
                          (this._internalState = new Map(
                            Array.from(this._internalState.entries())
                              .reverse()
                              .slice(0, 32)
                          )));
                    }
                    _keys() {
                      return Array.from(this._internalState.keys()).reverse();
                    }
                    _clone() {
                      let r = new m();
                      return (
                        (r._internalState = new Map(this._internalState)), r
                      );
                    }
                  }
                  e.TraceStateImpl = m;
                },
                564: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.validateValue = e.validateKey = void 0);
                  let i = "[_0-9a-z-*/]",
                    _ = `[a-z]${i}{0,255}`,
                    m = `[a-z0-9]${i}{0,240}@[a-z]${i}{0,13}`,
                    d = RegExp(`^(?:${_}|${m})$`),
                    r = /^[ -~]{0,255}[!-~]$/,
                    o = /,|=/;
                  (e.validateKey = function (c) {
                    return d.test(c);
                  }),
                    (e.validateValue = function (c) {
                      return r.test(c) && !o.test(c);
                    });
                },
                98: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.createTraceState = void 0);
                  let _ = i(325);
                  e.createTraceState = function (m) {
                    return new _.TraceStateImpl(m);
                  };
                },
                476: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.INVALID_SPAN_CONTEXT =
                      e.INVALID_TRACEID =
                      e.INVALID_SPANID =
                        void 0);
                  let _ = i(475);
                  (e.INVALID_SPANID = "0000000000000000"),
                    (e.INVALID_TRACEID = "00000000000000000000000000000000"),
                    (e.INVALID_SPAN_CONTEXT = {
                      traceId: e.INVALID_TRACEID,
                      spanId: e.INVALID_SPANID,
                      traceFlags: _.TraceFlags.NONE,
                    });
                },
                357: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.SpanKind = void 0),
                    (function (i) {
                      (i[(i.INTERNAL = 0)] = "INTERNAL"),
                        (i[(i.SERVER = 1)] = "SERVER"),
                        (i[(i.CLIENT = 2)] = "CLIENT"),
                        (i[(i.PRODUCER = 3)] = "PRODUCER"),
                        (i[(i.CONSUMER = 4)] = "CONSUMER");
                    })(e.SpanKind || (e.SpanKind = {}));
                },
                139: (h, e, i) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.wrapSpanContext =
                      e.isSpanContextValid =
                      e.isValidSpanId =
                      e.isValidTraceId =
                        void 0);
                  let _ = i(476),
                    m = i(403),
                    d = /^([0-9a-f]{32})$/i,
                    r = /^[0-9a-f]{16}$/i;
                  function o(s) {
                    return d.test(s) && s !== _.INVALID_TRACEID;
                  }
                  function c(s) {
                    return r.test(s) && s !== _.INVALID_SPANID;
                  }
                  (e.isValidTraceId = o),
                    (e.isValidSpanId = c),
                    (e.isSpanContextValid = function (s) {
                      return o(s.traceId) && c(s.spanId);
                    }),
                    (e.wrapSpanContext = function (s) {
                      return new m.NonRecordingSpan(s);
                    });
                },
                847: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.SpanStatusCode = void 0),
                    (function (i) {
                      (i[(i.UNSET = 0)] = "UNSET"),
                        (i[(i.OK = 1)] = "OK"),
                        (i[(i.ERROR = 2)] = "ERROR");
                    })(e.SpanStatusCode || (e.SpanStatusCode = {}));
                },
                475: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.TraceFlags = void 0),
                    (function (i) {
                      (i[(i.NONE = 0)] = "NONE"),
                        (i[(i.SAMPLED = 1)] = "SAMPLED");
                    })(e.TraceFlags || (e.TraceFlags = {}));
                },
                521: (h, e) => {
                  Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.VERSION = void 0),
                    (e.VERSION = "1.6.0");
                },
              },
              P = {};
            function x(h) {
              var e = P[h];
              if (e !== void 0) return e.exports;
              var i = (P[h] = { exports: {} }),
                _ = !0;
              try {
                S[h].call(i.exports, i, i.exports, x), (_ = !1);
              } finally {
                _ && delete P[h];
              }
              return i.exports;
            }
            x.ab = "//";
            var y = {};
            (() => {
              Object.defineProperty(y, "__esModule", { value: !0 }),
                (y.trace =
                  y.propagation =
                  y.metrics =
                  y.diag =
                  y.context =
                  y.INVALID_SPAN_CONTEXT =
                  y.INVALID_TRACEID =
                  y.INVALID_SPANID =
                  y.isValidSpanId =
                  y.isValidTraceId =
                  y.isSpanContextValid =
                  y.createTraceState =
                  y.TraceFlags =
                  y.SpanStatusCode =
                  y.SpanKind =
                  y.SamplingDecision =
                  y.ProxyTracerProvider =
                  y.ProxyTracer =
                  y.defaultTextMapSetter =
                  y.defaultTextMapGetter =
                  y.ValueType =
                  y.createNoopMeter =
                  y.DiagLogLevel =
                  y.DiagConsoleLogger =
                  y.ROOT_CONTEXT =
                  y.createContextKey =
                  y.baggageEntryMetadataFromString =
                    void 0);
              var h = x(369);
              Object.defineProperty(y, "baggageEntryMetadataFromString", {
                enumerable: !0,
                get: function () {
                  return h.baggageEntryMetadataFromString;
                },
              });
              var e = x(780);
              Object.defineProperty(y, "createContextKey", {
                enumerable: !0,
                get: function () {
                  return e.createContextKey;
                },
              }),
                Object.defineProperty(y, "ROOT_CONTEXT", {
                  enumerable: !0,
                  get: function () {
                    return e.ROOT_CONTEXT;
                  },
                });
              var i = x(972);
              Object.defineProperty(y, "DiagConsoleLogger", {
                enumerable: !0,
                get: function () {
                  return i.DiagConsoleLogger;
                },
              });
              var _ = x(957);
              Object.defineProperty(y, "DiagLogLevel", {
                enumerable: !0,
                get: function () {
                  return _.DiagLogLevel;
                },
              });
              var m = x(102);
              Object.defineProperty(y, "createNoopMeter", {
                enumerable: !0,
                get: function () {
                  return m.createNoopMeter;
                },
              });
              var d = x(901);
              Object.defineProperty(y, "ValueType", {
                enumerable: !0,
                get: function () {
                  return d.ValueType;
                },
              });
              var r = x(194);
              Object.defineProperty(y, "defaultTextMapGetter", {
                enumerable: !0,
                get: function () {
                  return r.defaultTextMapGetter;
                },
              }),
                Object.defineProperty(y, "defaultTextMapSetter", {
                  enumerable: !0,
                  get: function () {
                    return r.defaultTextMapSetter;
                  },
                });
              var o = x(125);
              Object.defineProperty(y, "ProxyTracer", {
                enumerable: !0,
                get: function () {
                  return o.ProxyTracer;
                },
              });
              var c = x(846);
              Object.defineProperty(y, "ProxyTracerProvider", {
                enumerable: !0,
                get: function () {
                  return c.ProxyTracerProvider;
                },
              });
              var s = x(996);
              Object.defineProperty(y, "SamplingDecision", {
                enumerable: !0,
                get: function () {
                  return s.SamplingDecision;
                },
              });
              var p = x(357);
              Object.defineProperty(y, "SpanKind", {
                enumerable: !0,
                get: function () {
                  return p.SpanKind;
                },
              });
              var u = x(847);
              Object.defineProperty(y, "SpanStatusCode", {
                enumerable: !0,
                get: function () {
                  return u.SpanStatusCode;
                },
              });
              var f = x(475);
              Object.defineProperty(y, "TraceFlags", {
                enumerable: !0,
                get: function () {
                  return f.TraceFlags;
                },
              });
              var v = x(98);
              Object.defineProperty(y, "createTraceState", {
                enumerable: !0,
                get: function () {
                  return v.createTraceState;
                },
              });
              var R = x(139);
              Object.defineProperty(y, "isSpanContextValid", {
                enumerable: !0,
                get: function () {
                  return R.isSpanContextValid;
                },
              }),
                Object.defineProperty(y, "isValidTraceId", {
                  enumerable: !0,
                  get: function () {
                    return R.isValidTraceId;
                  },
                }),
                Object.defineProperty(y, "isValidSpanId", {
                  enumerable: !0,
                  get: function () {
                    return R.isValidSpanId;
                  },
                });
              var O = x(476);
              Object.defineProperty(y, "INVALID_SPANID", {
                enumerable: !0,
                get: function () {
                  return O.INVALID_SPANID;
                },
              }),
                Object.defineProperty(y, "INVALID_TRACEID", {
                  enumerable: !0,
                  get: function () {
                    return O.INVALID_TRACEID;
                  },
                }),
                Object.defineProperty(y, "INVALID_SPAN_CONTEXT", {
                  enumerable: !0,
                  get: function () {
                    return O.INVALID_SPAN_CONTEXT;
                  },
                });
              let T = x(67);
              Object.defineProperty(y, "context", {
                enumerable: !0,
                get: function () {
                  return T.context;
                },
              });
              let I = x(506);
              Object.defineProperty(y, "diag", {
                enumerable: !0,
                get: function () {
                  return I.diag;
                },
              });
              let K = x(886);
              Object.defineProperty(y, "metrics", {
                enumerable: !0,
                get: function () {
                  return K.metrics;
                },
              });
              let V = x(939);
              Object.defineProperty(y, "propagation", {
                enumerable: !0,
                get: function () {
                  return V.propagation;
                },
              });
              let M = x(845);
              Object.defineProperty(y, "trace", {
                enumerable: !0,
                get: function () {
                  return M.trace;
                },
              }),
                (y.default = {
                  context: T.context,
                  diag: I.diag,
                  metrics: K.metrics,
                  propagation: V.propagation,
                  trace: M.trace,
                });
            })(),
              (N.exports = y);
          })();
        },
        862: (N) => {
          "use strict";
          (N.exports = S), (N.exports.preferredLanguages = S);
          var A = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
          function b(h, e) {
            var i = A.exec(h);
            if (!i) return null;
            var _ = i[1],
              m = i[2],
              d = _;
            m && (d += "-" + m);
            var r = 1;
            if (i[3])
              for (var o = i[3].split(";"), c = 0; c < o.length; c++) {
                var s = o[c].split("=");
                s[0] === "q" && (r = parseFloat(s[1]));
              }
            return { prefix: _, suffix: m, q: r, i: e, full: d };
          }
          function S(h, e) {
            var i = (function (m) {
              for (var d = m.split(","), r = 0, o = 0; r < d.length; r++) {
                var c = b(d[r].trim(), r);
                c && (d[o++] = c);
              }
              return (d.length = o), d;
            })(h === void 0 ? "*" : h || "");
            if (!e) return i.filter(y).sort(P).map(x);
            var _ = e.map(function (m, d) {
              for (var r = { o: -1, q: 0, s: 0 }, o = 0; o < i.length; o++) {
                var c = (function (s, p, u) {
                  var f = b(s);
                  if (!f) return null;
                  var v = 0;
                  if (p.full.toLowerCase() === f.full.toLowerCase()) v |= 4;
                  else if (p.prefix.toLowerCase() === f.full.toLowerCase())
                    v |= 2;
                  else if (p.full.toLowerCase() === f.prefix.toLowerCase())
                    v |= 1;
                  else if (p.full !== "*") return null;
                  return { i: u, o: p.i, q: p.q, s: v };
                })(m, i[o], d);
                c && 0 > (r.s - c.s || r.q - c.q || r.o - c.o) && (r = c);
              }
              return r;
            });
            return _.filter(y)
              .sort(P)
              .map(function (m) {
                return e[_.indexOf(m)];
              });
          }
          function P(h, e) {
            return e.q - h.q || e.s - h.s || h.o - e.o || h.i - e.i || 0;
          }
          function x(h) {
            return h.full;
          }
          function y(h) {
            return h.q > 0;
          }
        },
        918: (N, A, b) => {
          "use strict";
          b.d(A, { s: () => S });
          let S = (0, b(58).xl)();
        },
        931: (N) => {
          "use strict";
          (N.exports = S), (N.exports.preferredEncodings = S);
          var A = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
          function b(h, e, i) {
            var _ = 0;
            if (e.encoding.toLowerCase() === h.toLowerCase()) _ |= 1;
            else if (e.encoding !== "*") return null;
            return { encoding: h, i, o: e.i, q: e.q, s: _ };
          }
          function S(h, e, i) {
            var _ = (function (r) {
                for (
                  var o = r.split(","), c = !1, s = 1, p = 0, u = 0;
                  p < o.length;
                  p++
                ) {
                  var f = (function (v, R) {
                    var O = A.exec(v);
                    if (!O) return null;
                    var T = O[1],
                      I = 1;
                    if (O[2])
                      for (var K = O[2].split(";"), V = 0; V < K.length; V++) {
                        var M = K[V].trim().split("=");
                        if (M[0] === "q") {
                          I = parseFloat(M[1]);
                          break;
                        }
                      }
                    return { encoding: T, q: I, i: R };
                  })(o[p].trim(), p);
                  f &&
                    ((o[u++] = f),
                    (c = c || b("identity", f)),
                    (s = Math.min(s, f.q || 1)));
                }
                return (
                  c || (o[u++] = { encoding: "identity", q: s, i: p }),
                  (o.length = u),
                  o
                );
              })(h || ""),
              m = i
                ? function (r, o) {
                    if (r.q !== o.q) return o.q - r.q;
                    var c = i.indexOf(r.encoding),
                      s = i.indexOf(o.encoding);
                    return c === -1 && s === -1
                      ? o.s - r.s || r.o - o.o || r.i - o.i
                      : c !== -1 && s !== -1
                      ? c - s
                      : c === -1
                      ? 1
                      : -1;
                  }
                : P;
            if (!e) return _.filter(y).sort(m).map(x);
            var d = e.map(function (r, o) {
              for (
                var c = { encoding: r, o: -1, q: 0, s: 0 }, s = 0;
                s < _.length;
                s++
              ) {
                var p = b(r, _[s], o);
                p && 0 > (c.s - p.s || c.q - p.q || c.o - p.o) && (c = p);
              }
              return c;
            });
            return d
              .filter(y)
              .sort(m)
              .map(function (r) {
                return e[d.indexOf(r)];
              });
          }
          function P(h, e) {
            return e.q - h.q || e.s - h.s || h.o - e.o || h.i - e.i;
          }
          function x(h) {
            return h.encoding;
          }
          function y(h) {
            return h.q > 0;
          }
        },
        944: (N, A, b) => {
          "use strict";
          b.d(A, { nJ: () => P });
          var S = b(378);
          function P(x) {
            if (
              typeof x != "object" ||
              x === null ||
              !("digest" in x) ||
              typeof x.digest != "string"
            )
              return !1;
            let y = x.digest.split(";"),
              [h, e] = y,
              i = y.slice(2, -2).join(";"),
              _ = Number(y.at(-2));
            return (
              h === "NEXT_REDIRECT" &&
              (e === "replace" || e === "push") &&
              typeof i == "string" &&
              !isNaN(_) &&
              _ in S.Q
            );
          }
        },
        979: (N, A, b) => {},
      },
      (N) => {
        var A = N((N.s = 146));
        (Y._ENTRIES =
          typeof Y._ENTRIES > "u" ? {} : Y._ENTRIES).middleware_middleware = A;
      },
    ]),
    function () {
      let N = { exports: {}, loaded: !1 };
      return (
        (function (b, S) {
          var P = Object.create,
            x = Object.defineProperty,
            y = Object.getOwnPropertyDescriptor,
            h = Object.getOwnPropertyNames,
            e = Object.getPrototypeOf,
            i = Object.prototype.hasOwnProperty,
            _ = (M) => x(M, "__esModule", { value: !0 }),
            m = (M, re) => {
              _(M);
              for (var H in re) x(M, H, { get: re[H], enumerable: !0 });
            },
            d = (M, re, H) => {
              if ((re && typeof re == "object") || typeof re == "function")
                for (let z of h(re))
                  !i.call(M, z) &&
                    z !== "default" &&
                    x(M, z, {
                      get: () => re[z],
                      enumerable: !(H = y(re, z)) || H.enumerable,
                    });
              return M;
            },
            r = (M) =>
              d(
                _(
                  x(
                    M != null ? P(e(M)) : {},
                    "default",
                    M && M.__esModule && "default" in M
                      ? { get: () => M.default, enumerable: !0 }
                      : { value: M, enumerable: !0 }
                  )
                ),
                M
              );
          m(S, { default: () => T });
          var o = r((Gr(), rr(Et))),
            c = "@next/request-context",
            s = Symbol.for(c),
            p = Symbol.for("internal.storage");
          function u() {
            let M = Y;
            if (!M[s]) {
              let re = new o.AsyncLocalStorage(),
                H = { get: () => re.getStore(), [p]: re };
              M[s] = H;
            }
            return M[s];
          }
          var f = u();
          function v(M, re) {
            return f[p].run(M, re);
          }
          function R(M) {
            let re = {};
            return (
              M &&
                M.forEach((H, z) => {
                  (re[z] = H),
                    z.toLowerCase() === "set-cookie" && (re[z] = O(H));
                }),
              re
            );
          }
          function O(M) {
            let re = [],
              H = 0,
              z,
              Re,
              Se,
              De,
              qe;
            function Oe() {
              for (; H < M.length && /\s/.test(M.charAt(H)); ) H += 1;
              return H < M.length;
            }
            function L() {
              return (Re = M.charAt(H)), Re !== "=" && Re !== ";" && Re !== ",";
            }
            for (; H < M.length; ) {
              for (z = H, qe = !1; Oe(); )
                if (((Re = M.charAt(H)), Re === ",")) {
                  for (Se = H, H += 1, Oe(), De = H; H < M.length && L(); )
                    H += 1;
                  H < M.length && M.charAt(H) === "="
                    ? ((qe = !0),
                      (H = De),
                      re.push(M.substring(z, Se)),
                      (z = H))
                    : (H = Se + 1);
                } else H += 1;
              (!qe || H >= M.length) && re.push(M.substring(z, M.length));
            }
            return re;
          }
          function T(M) {
            let re = M.staticRoutes.map((z) => ({
                regexp: new RegExp(z.namedRegex),
                page: z.page,
              })),
              H =
                M.dynamicRoutes?.map((z) => ({
                  regexp: new RegExp(z.namedRegex),
                  page: z.page,
                })) || [];
            return async function (z, Re) {
              let Se = new URL(z.url).pathname,
                De = {};
              if (
                (M.nextConfig?.basePath &&
                  Se.startsWith(M.nextConfig.basePath) &&
                  (Se = Se.replace(M.nextConfig.basePath, "") || "/"),
                M.nextConfig?.i18n)
              )
                for (let Oe of M.nextConfig.i18n.locales) {
                  let L = new RegExp(`^/${Oe}($|/)`, "i");
                  if (Se.match(L)) {
                    Se = Se.replace(L, "/") || "/";
                    break;
                  }
                }
              for (let Oe of re)
                if (Oe.regexp.exec(Se)) {
                  De.name = Oe.page;
                  break;
                }
              if (!De.name) {
                let Oe = K(Se);
                for (let L of H || []) {
                  if (Oe && !K(L.page)) continue;
                  let Be = L.regexp.exec(Se);
                  if (Be) {
                    De = { name: L.page, params: Be.groups };
                    break;
                  }
                }
              }
              let qe = await v({ waitUntil: Re.waitUntil }, () =>
                Y._ENTRIES[`middleware_${M.name}`].default.call(
                  {},
                  {
                    request: {
                      url: z.url,
                      method: z.method,
                      headers: R(z.headers),
                      ip: I(z.headers, V.Ip),
                      geo: {
                        city: I(z.headers, V.City, !0),
                        country: I(z.headers, V.Country, !0),
                        latitude: I(z.headers, V.Latitude),
                        longitude: I(z.headers, V.Longitude),
                        region: I(z.headers, V.Region, !0),
                      },
                      nextConfig: M.nextConfig,
                      page: De,
                      body: z.body,
                    },
                  }
                )
              );
              return qe.waitUntil && Re.waitUntil(qe.waitUntil), qe.response;
            };
          }
          function I(M, re, H = !1) {
            let z = M.get(re) || void 0;
            return H && z ? decodeURIComponent(z) : z;
          }
          function K(M) {
            return M === "/api" || M.startsWith("/api/");
          }
          var V;
          (function (M) {
            (M.City = "x-vercel-ip-city"),
              (M.Country = "x-vercel-ip-country"),
              (M.Ip = "x-real-ip"),
              (M.Latitude = "x-vercel-ip-latitude"),
              (M.Longitude = "x-vercel-ip-longitude"),
              (M.Region = "x-vercel-ip-country-region");
          })(V || (V = {}));
        })(N, N.exports),
        N.exports
      );
    }
      .call({})
      .default({
        name: "middleware",
        staticRoutes: [
          {
            page: "/_not-found",
            regex: "^/_not\\-found(?:/)?$",
            routeKeys: {},
            namedRegex: "^/_not\\-found(?:/)?$",
          },
        ],
        dynamicRoutes: [
          {
            page: "/[locale]",
            regex: "^/([^/]+?)(?:/)?$",
            routeKeys: { nxtPlocale: "nxtPlocale" },
            namedRegex: "^/(?<nxtPlocale>[^/]+?)(?:/)?$",
          },
        ],
        nextConfig: { basePath: "" },
      })
  ))(nr, nr, nr);
export { Tn as default };
