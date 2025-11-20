# Eden Project - Version Comparison Guide

## 🎯 Overview

You now have **TWO versions** of your landing page ready for comparison:

1. **Original Version** (main branch) - Current production design
2. **Redesigned Version** (feature/diabrowser-redesign branch) - New minimalist design inspired by diabrowser.com

## 📊 Quick Comparison

| Aspect               | Original Version          | Redesigned Version            |
| -------------------- | ------------------------- | ----------------------------- |
| **Design Style**     | Gradient-heavy, colorful  | Minimalist, clean white space |
| **Hero Section**     | Gradient box with content | Full-screen video-style       |
| **Features Display** | Long scrolling sections   | Auto-rotating carousel        |
| **Animations**       | Basic CSS transitions     | Framer Motion animations      |
| **FAQ**              | Manual toggle state       | Smooth accordion component    |
| **Overall Feel**     | Vibrant, feature-rich     | Professional, modern          |

## 🚀 How to View Both Versions Locally

### Method 1: Switch Between Branches (Recommended)

```bash
# View ORIGINAL version
git checkout main
npm run dev
# Open http://localhost:3000/en/ in your browser

# View REDESIGN version
git checkout feature/diabrowser-redesign
npm run dev
# Open http://localhost:3000/en/ in your browser
```

### Method 2: Run Both Simultaneously (Side-by-Side)

**Terminal 1 (Original):**

```bash
git checkout main
npm run dev
# Runs on http://localhost:3000
```

**Terminal 2 (Redesign - Different Port):**

```bash
git checkout feature/diabrowser-redesign
npm run dev -- -p 3001
# Runs on http://localhost:3001
```

**Now open both URLs:**

- Original: http://localhost:3000/en/
- Redesign: http://localhost:3001/en/

**Compare side-by-side!** 🎨

### Method 3: Build and Preview Static Files

```bash
# Original version
git checkout main
npm run build
npx serve out

# Redesign version
git checkout feature/diabrowser-redesign
npm run build
npx serve out -p 3001
```

## 🔍 Key Differences to Check

### 1. Hero Section

- **Original**: Gradient box with rounded corners, standard layout
- **Redesign**: Full-screen immersive hero with animated pattern background

### 2. Features

- **Original**: All features visible at once, long scroll
- **Redesign**: Carousel with auto-rotation (8-second intervals), cleaner presentation

### 3. Personas

- **Original**: Grid layout
- **Redesign**: Carousel with large cards, auto-rotating (7-second intervals)

### 4. FAQ Section

- **Original**: Manual state management with simple toggles
- **Redesign**: Smooth accordion with rotating chevrons and slide animations

### 5. Overall Design

- **Original**: Colorful gradients throughout, feature-dense
- **Redesign**: Neutral backgrounds (white, gray-50), strategic use of purple gradient

## ✅ What's Preserved (100% Identical)

Both versions have:

- ✅ All Korean/English translations (no content changes)
- ✅ Language switcher functionality
- ✅ GitHub download & star links
- ✅ Mobile responsiveness
- ✅ All technical specifications (Qwen 2.5 14B, 16.5GB, 17 parameters)
- ✅ Static export for Cloudflare Pages

## 📱 Mobile Testing

Test both versions on mobile:

```bash
# Find your local IP
ipconfig getifaddr en0  # macOS
# or
hostname -I  # Linux

# Then access from phone:
# http://YOUR_IP:3000/en/  (original)
# http://YOUR_IP:3001/en/  (redesign)
```

## 🎯 Decision Time: Which Version to Keep?

After comparing both versions, you have 3 options:

### Option 1: Keep Redesigned Version ✨

```bash
# Merge redesign into main
git checkout main
git merge feature/diabrowser-redesign

# Push to GitHub (auto-deploys to Cloudflare)
git push origin main

# Clean up feature branch
git branch -d feature/diabrowser-redesign
```

### Option 2: Keep Original Version 🔙

```bash
# Delete redesign branch
git branch -D feature/diabrowser-redesign

# Stay on main (no changes needed)
```

### Option 3: Hybrid Approach (Cherry-Pick Features) 🔀

```bash
# Stay on main
git checkout main

# Pick specific commits from redesign
git log feature/diabrowser-redesign  # See commit history
git cherry-pick <commit-hash>  # Pick individual improvements
```

## 🔄 Rollback Anytime

If you merge the redesign but want to go back:

```bash
# Go back to original (tagged version)
git checkout v1-original-design

# Or hard reset if already merged
git reset --hard v1-original-design
```

## 📊 Performance Comparison

Both versions:

- **Build Size**: ~45.9 kB (nearly identical)
- **First Load JS**: ~162 kB
- **Export**: Static HTML/CSS/JS

Redesign adds:

- **framer-motion**: +~40 kB (for smooth animations)
- Worth it for professional feel ✅

## 🎨 Design Philosophy

### Original Version

- **Goal**: Show all features prominently
- **Strength**: Information-dense, comprehensive
- **Feel**: Energetic, colorful, feature-forward

### Redesigned Version

- **Goal**: Diabrowser-inspired minimalism
- **Strength**: Professional polish, modern aesthetic
- **Feel**: Clean, spacious, premium

## 💡 Recommendations

**Choose ORIGINAL if:**

- You prefer vibrant, colorful design
- You want all features visible immediately
- You like the current energetic vibe

**Choose REDESIGN if:**

- You want a more professional, modern look
- You appreciate minimalist design
- You want smooth, polished animations
- You prefer the diabrowser aesthetic

**Choose HYBRID if:**

- You want accordion FAQ from redesign
- You want certain carousel sections
- You want to mix elements from both

## 🚀 Next Steps

1. **Test both versions locally** (use Method 2 for side-by-side)
2. **Check on mobile devices** (very important!)
3. **Test language switching** on both versions
4. **Make your decision** (use decision guide above)
5. **Deploy chosen version** to Cloudflare Pages

## 📞 Questions?

If you need to:

- Tweak the redesign colors
- Adjust carousel timing
- Mix elements from both versions
- Make any other changes

Just let me know! Both versions are safely preserved in Git.

---

**Current Status:**

- ✅ Original version: Safe on `main` branch (tagged as `v1-original-design`)
- ✅ Redesign version: On `feature/diabrowser-redesign` branch
- ✅ Both versions: Build successfully, ready for preview

**You're currently on:** `feature/diabrowser-redesign` branch
