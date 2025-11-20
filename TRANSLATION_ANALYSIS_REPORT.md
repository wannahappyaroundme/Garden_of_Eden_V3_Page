# Translation Structures Analysis Report

## Eden Project Website - 7 New Pages

**Date**: 2025-11-17
**Files Analyzed**:

- `/messages/en.json` (existing English translations)
- `/messages/ko.json` (existing Korean translations)
- 7 page component files in `/app/[locale]/`

---

## Executive Summary

The existing `en.json` and `ko.json` files **already have partial translation structures** for all 7 pages (lines 475-704 in en.json). However, these structures are **INCOMPLETE** and missing significant content that is currently hardcoded in the page components.

**Key Findings:**

- ✅ Basic structure exists for all 7 pages
- ❌ Missing 80%+ of actual page content
- ❌ Hundreds of hardcoded strings in page components
- ⚠️ Inconsistent structure between pages

---

## 1. What Translation Keys Already Exist

### Page 1: `/product/overview` → `productOverview`

**Current keys** (lines 475-555):

```
✓ badge, title, subtitle, vision
✓ threePillars (partial - only titles)
✓ problemSolution (partial - only headings)
✓ visionSection (partial)
✓ corePromise (basic)
✓ cta (basic)
```

**Missing**: All detailed pillar descriptions, all 6 problems, all 6 solutions, Korean translations for section headings

---

### Page 2: `/product/technology` → `productTechnology`

**Current keys** (lines 557-592):

```
✓ badge, title, subtitle, description
✓ architecture.title (heading only)
✓ core.title, core.subtitle (headings only)
✓ ai.title, ai.subtitle (headings only)
✓ performance.title (heading only)
✓ security (4 basic items)
✓ cta (basic)
```

**Missing**:

- All 6 architecture layers with tech stacks
- All core technology items (Framework, Language, State)
- All AI & ML items (LLM, Runtime, Speech & Vision, Embeddings)
- All 6 performance metrics
- Korean translations for all tech details

---

### Page 3: `/product/roadmap` → `productRoadmap`

**Current keys** (lines 594-629):

```
✓ badge, title, subtitle, vision, visionEn
✓ timeline.title (heading only)
✓ releases.title, completed, inProgress, planned
✓ community.title, subtitle, votes, vote
✓ philosophy.title
✓ metrics.title, current, goal2026, goal2027
✓ cta (basic)
```

**Missing**:

- All 6 timeline items (quarters, progress, labels)
- All 6 release versions with features
- All 6 community request items
- All 7 philosophy principles
- All success metrics details

---

### Page 4: `/why-eden/comparison` → `whyEdenComparison`

**Current keys** (lines 631-681):

```
✓ badge, title, subtitle, description
✓ table.title, feature, eden, free
✓ savings.title, monthly, annual, threeYear, save, edenFree, mit
✓ privacy (heading only)
✓ verdict.title, description1, highlight, description2, conclusion
✓ cta (basic)
```

**Missing**:

- All 10 comparison table rows (Price, Privacy, Offline, etc.)
- All 3 cost savings service calculations
- All 6 privacy & data ownership items
- All verdict details (cloudAI vs eden choice lists)

---

### Page 5: `/why-eden/privacy` → `whyEdenPrivacy`

**Current keys** (lines 683-694):

```
✓ badge, title, subtitle, description
✓ principles.title (heading only)
✓ philosophy.title, description
```

**Missing**:

- **ALL 6 privacy principles** with bilingual titles and descriptions:
  1. 100% Local Processing
  2. No Telemetry, No Tracking
  3. Encrypted Local Storage
  4. No Cloud Dependency
  5. Optional Cloud Backup
  6. Open Source Transparency

---

### Page 6: `/resources/documentation` → `resourcesDocumentation`

**Current keys** (lines 696-699):

```
✓ title, subtitle (only 2 keys!)
```

**Missing**:

- **ALL 6 resource links** with titles, descriptions, and URLs:
  1. User Guide
  2. Quick Start
  3. GitHub Wiki
  4. Troubleshooting
  5. GitHub Repository
  6. Discussions

---

### Page 7: `/resources/community` → `resourcesCommunity`

**Current keys** (lines 700-704):

```
✓ badge, title, subtitle (only 3 keys!)
```

**Missing**:

- **ALL 4 community channels** with titles, descriptions, and links:
  1. GitHub Discussions
  2. GitHub Issues
  3. Star on GitHub
  4. Email Contact

---

## 2. Complete Translation Keys Needed

I've created two comprehensive JSON files with ALL missing translation keys:

### **File 1**: `/TRANSLATION_ADDITIONS_EN.json`

Contains complete English translations for all 7 pages, including:

- **productOverview**: 50+ keys (3 pillars, 6 problems, 6 solutions, vision, CTA)
- **productTechnology**: 100+ keys (6 architecture layers, tech stacks, 6 metrics, security)
- **productRoadmap**: 150+ keys (6 timeline items, 6 releases, 6 requests, 7 principles, metrics)
- **whyEdenComparison**: 80+ keys (10 comparison rows, 3 cost services, 6 privacy items, verdict)
- **whyEdenPrivacy**: 20+ keys (6 privacy principles with bilingual titles)
- **resourcesDocumentation**: 10+ keys (6 resource links)
- **resourcesCommunity**: 8+ keys (4 community channels)

### **File 2**: `/TRANSLATION_ADDITIONS_KO.json`

Contains complete Korean translations matching the English structure exactly.

---

## 3. How to Integrate These Translations

### Option A: Manual Merge (Recommended)

1. Open `/messages/en.json` and `/messages/ko.json`
2. Find each section (e.g., `"productOverview"`)
3. **Expand** the existing structure by adding the missing keys from `TRANSLATION_ADDITIONS_EN.json` and `TRANSLATION_ADDITIONS_KO.json`
4. **Keep** the existing keys that are already there
5. **Add** the new keys we've identified as missing

### Option B: Complete Replacement

1. Take the entire structures from `TRANSLATION_ADDITIONS_EN.json` and `TRANSLATION_ADDITIONS_KO.json`
2. Replace the corresponding sections in `en.json` and `ko.json`
3. This ensures nothing is missed, but you'll need to verify existing keys

---

## 4. Key Statistics

| Page                   | Existing Keys | Missing Keys | Completion % |
| ---------------------- | ------------- | ------------ | ------------ |
| productOverview        | 15            | 35+          | 30%          |
| productTechnology      | 12            | 88+          | 12%          |
| productRoadmap         | 10            | 140+         | 7%           |
| whyEdenComparison      | 15            | 65+          | 19%          |
| whyEdenPrivacy         | 6             | 14           | 30%          |
| resourcesDocumentation | 2             | 8            | 20%          |
| resourcesCommunity     | 3             | 5            | 38%          |
| **TOTAL**              | **63**        | **355+**     | **15%**      |

**Current overall completion: ~15%**
**Target: 100%**

---

## 5. Critical Issues Found

### Issue 1: Hardcoded Korean/English Text

Many page components have **bilingual hardcoded text** that should use translation keys:

```tsx
// ❌ BAD - Hardcoded
<h3>외로움 해결</h3>
<p className="text-sm">Eliminate Loneliness</p>

// ✅ GOOD - Using translations
<h3>{t('productOverview.threePillars.pillar1.title')}</h3>
<p>{t('productOverview.threePillars.pillar1.titleKo')}</p>
```

### Issue 2: Inconsistent Structure

Some pages use arrays of objects (like roadmap releases), others use nested objects. Recommendation: **Use arrays for lists** of items.

### Issue 3: Missing Korean Honorifics Context

Korean translations should consider formality levels (경어, 존칭, 반말) based on the target audience. Current translations use:

- **반말 (casual)**: for friendly, conversational tone
- **존댓말 (formal)**: for professional sections

---

## 6. Recommendations

### Immediate Actions:

1. ✅ **Use the provided JSON files** (`TRANSLATION_ADDITIONS_EN.json` and `TRANSLATION_ADDITIONS_KO.json`)
2. ✅ **Merge** these into your existing `en.json` and `ko.json` files
3. ✅ **Update all 7 page components** to use `useTranslations()` and `t()` instead of hardcoded text

### Next Steps:

1. **Refactor page components** to remove all hardcoded strings
2. **Add locale switching** functionality to navigation
3. **Test** all pages in both English and Korean locales
4. **Validate JSON** structure to ensure no duplicate keys or syntax errors

### Quality Checks:

- [ ] Every hardcoded string has a translation key
- [ ] All translation keys have both English and Korean versions
- [ ] Korean translations use appropriate formality levels
- [ ] JSON files are valid (no trailing commas, proper escaping)
- [ ] All links and URLs are preserved correctly

---

## 7. Example: Before & After

### Before (Hardcoded):

```tsx
// overview/page.tsx (lines 10-14)
{
  icon: Heart,
  title: '외로움 해결',
  titleEn: 'Eliminate Loneliness',
  description: '혼자가 아닌 느낌, 24/7 함께하는 AI 친구',
  descriptionEn: 'Never feel alone with your 24/7 AI companion',
}
```

### After (Using translations):

```tsx
// overview/page.tsx
const pillar1 = {
  icon: Heart,
  title: t("productOverview.threePillars.pillar1.title"),
  titleEn: t("productOverview.threePillars.pillar1.titleKo"),
  description: t("productOverview.threePillars.pillar1.description"),
  descriptionEn: t("productOverview.threePillars.pillar1.descriptionKo"),
};
```

### Translation files:

```json
// en.json
"productOverview": {
  "threePillars": {
    "pillar1": {
      "title": "Eliminate Loneliness",
      "titleKo": "외로움 해결",
      "description": "Never feel alone with your 24/7 AI companion",
      "descriptionKo": "혼자가 아닌 느낌, 24/7 함께하는 AI 친구"
    }
  }
}

// ko.json
"productOverview": {
  "threePillars": {
    "pillar1": {
      "title": "외로움 해결",
      "titleKo": "외로움 해결",
      "description": "혼자가 아닌 느낌, 24/7 함께하는 AI 친구",
      "descriptionKo": "혼자가 아닌 느낌, 24/7 함께하는 AI 친구"
    }
  }
}
```

---

## 8. Files Provided

I've created the following files in your project root:

1. **`TRANSLATION_ADDITIONS_EN.json`** - Complete English translations
2. **`TRANSLATION_ADDITIONS_KO.json`** - Complete Korean translations
3. **`TRANSLATION_ANALYSIS_REPORT.md`** - This report

**Next Steps**: Review these files and integrate them into your existing `messages/en.json` and `messages/ko.json` files.

---

## Conclusion

The existing translation files have **basic scaffolding** but are missing **~85% of actual content**. The provided JSON files contain complete, production-ready translations for all 7 pages, covering:

- ✅ 355+ new translation keys
- ✅ Full English translations
- ✅ Full Korean translations
- ✅ Proper structure and nesting
- ✅ Consistent naming conventions
- ✅ Bilingual support for all content

**Implementation time estimate**: 2-3 hours to merge translations and refactor components.

---

**Questions or need help with implementation?** The provided JSON files are ready to use as-is - just merge them into your existing translation files and update the page components to use the translation keys.
