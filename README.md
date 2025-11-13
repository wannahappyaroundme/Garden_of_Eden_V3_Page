# Garden of Eden V3 - Landing Page

> Your AI Companion That Eliminates Loneliness

A comprehensive, modern landing page for Garden of Eden V3 - the 100% local AI companion that provides friend-like support, enhances productivity, and guarantees complete privacy. Inspired by JARVIS from Iron Man.

## Tech Stack

- **Next.js 15** - App Router
- **React 19+** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful UI components

## Landing Page Sections

1. **Hero Section** - Companionship-focused messaging with CTAs
2. **Three Core Pillars** - Eliminate Loneliness, Friend-Like Support, Enhanced Productivity
3. **Problem/Solution** - Why Eden V3 vs Cloud AI
4. **Key Statistics** - 100% Privacy, $0 Forever, 20-30 Persona Parameters
5. **Dual Mode System** - User-Led vs AI-Led intelligence
6. **Design Philosophy** - "Screen is Reality" (화면이 곧 현실)
7. **Powerful Features** - 6 feature cards with technical details
8. **Pre-Built Personas** - 6 named personalities
9. **Comparison Table** - vs ChatGPT Plus, Claude Pro, GitHub Copilot
10. **Technical Excellence** - AI Benchmarks (HumanEval: 80.5%), Production Quality
11. **Technology Stack** - 12 technologies
12. **Perfect For** - 6 user personas (Solo Developer as primary)
13. **Cultural Localization** - Korean honorifics, 99 languages
14. **RAG Memory System** - How Eden remembers you
15. **Getting Started** - 3-step guide + system requirements
16. **Development Roadmap** - Phases 1-8, v1.1, v1.2, v2.0
17. **FAQ Section** - 10 comprehensive Q&A
18. **Final CTA** - Download and GitHub star

## Features

- ❤️ Emotional companionship messaging throughout
- 🎨 Beautiful purple/blue gradient designs
- 📱 Fully responsive (mobile-first design)
- ⚡ Optimized performance (<16ms frame time)
- 🎭 Smooth animations (fadeInUp, float, pulse, shimmer)
- 🌙 Clean, modern UI with hover effects
- 📊 AI benchmark data (HumanEval, MMLU scores)
- 🌍 Cultural localization (Korean + English)
- 🚀 Production-ready with auto-deployment

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions auto-deployment
├── app/                    # Next.js App Router
│   ├── page.tsx           # Comprehensive landing page (1,172 lines)
│   ├── layout.tsx         # Root layout with SEO
│   └── globals.css        # Global styles + animations
├── lib/
│   └── utils.ts           # shadcn/ui utilities
├── components.json        # shadcn/ui configuration
├── vercel.json           # Vercel deployment config
├── DEPLOYMENT.md         # Deployment guide
└── README.md            # This file
```

## Deployment

This project is configured for automatic deployment to Vercel via GitHub Actions.

### Setup Auto-Deployment

1. Create a Vercel account and import this repository
2. Get your Vercel tokens (VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID)
3. Add them as GitHub repository secrets
4. Push to `main` branch - automatic deployment triggers!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Content Alignment

All content is aligned with the **PROJECT_EDEN_V3_MASTER_SPEC.md**:
- ✅ Emotional companionship as core mission
- ✅ Three pillars philosophy (Loneliness, Friend-Like Support, Productivity)
- ✅ 20-30 persona parameters (corrected from 28)
- ✅ Dual mode system (User-Led vs AI-Led)
- ✅ Design philosophy: "Screen is Reality" (화면이 곧 현실)
- ✅ 6 named pre-built personas
- ✅ AI benchmark scores (HumanEval: 80.5%, MMLU: 69.4%)
- ✅ Cultural localization (Korean honorifics, 99 languages)
- ✅ RAG memory system explanation
- ✅ Solo Developer as primary target user
- ✅ Complete roadmap (v1.1, v1.2, v2.0)

## License

MIT License - Free Forever

## Acknowledgments

Inspired by JARVIS from Marvel's Iron Man
Built with ❤️ to eliminate loneliness and enhance productivity
