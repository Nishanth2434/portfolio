# Nishanth B. — Personal Portfolio Website

A modern, high-performance personal developer portfolio built for **Nishanth B.**, Computer Science and Engineering student, developer, and AI enthusiast based in Mandya, Karnataka, India.

Inspired by the visual design, dark obsidian aesthetic, and micro-interactions of modern engineering portfolios, while remaining 100% original and faithful to Nishanth's profile and projects.

---

## ✨ Features

- **⚡ Modern Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.
- **🎨 Visual Design**: Obsidian dark theme (`#060913`), subtle gradient glow meshes, ambient grid patterns, and glassmorphic cards (`backdrop-blur-md`).
- **🚀 8 Featured Projects**:
  1. **Smart Campus Complaint Portal** *(Full Stack & Supabase)*
  2. **Interview AI** *(AI Mock Interview Preparation)*
  3. **KrishiMitra AI / Rytha Seva** *(AI Agricultural Assistant)*
  4. **E-Commerce Platform** *(Interactive Shopping Experience)*
  5. **CineScope** *(Entertainment & Discovery Platform)*
  6. **PixelGram** *(Social Content Sharing Application)*
  7. **Board App – Collaborative Project Management** *(Agile Kanban Board)*
  8. **ResumeAI – AI Resume Builder & Analyzer** *(ATS Resume Optimization)*
- **🔍 Interactive Project Modal**: Click any project to open a comprehensive deep-dive view including:
  - Project Overview
  - Problem Statement
  - Engineering Solution
  - Key Capabilities & Features
  - Technology Stack tags
  - Interactive UI Mockup preview
  - Live Demo & GitHub repository buttons
- **🏷️ Category Filtering**: Easily filter projects by *All Projects (7)*, *AI & Smart Systems*, *Web & Platforms*, and *Apps & Productivity*.
- **🧠 Categorized & Extensible Skills**:
  - Development (Programming, Web Dev, App Dev, Software Dev)
  - Artificial Intelligence (AI, AI-powered applications, AI APIs, AI tools)
  - IoT / Embedded (ESP32, Sensors, OLED, Embedded Systems, IoT)
  - Tools & Platforms (VS Code, PlatformIO, Wokwi, Git, GitHub)
- **🎓 Education Spotlight**:
  - Bachelor of Engineering / B.E. in Computer Science and Engineering
  - 4th Semester · Karnataka, India
- **📬 Contact & Collaboration**:
  - "Let's Build Something Together"
  - Interactive contact form with form validation & celebratory confetti
  - One-click copy buttons for Email and Phone
  - Direct links for GitHub and LinkedIn placeholders
- **📱 Fully Responsive**: Flawless experience on mobile smartphones, tablets, laptops, and ultra-wide displays.
- **☁️ Vercel-Ready**: Pre-configured for immediate one-click deployment on Vercel with zero extra setup.

---

## 🛠️ Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the portfolio.

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind CSS, ambient grid & glassmorphism utilities
│   │   ├── layout.tsx           # Root layout with Space Grotesk & SEO metadata
│   │   └── page.tsx             # Single-page assembled portfolio
│   ├── components/
│   │   ├── Navbar.tsx           # Glassmorphic navbar with active scroll spy & mobile sheet
│   │   ├── Hero.tsx             # Main hero, status pills, CTA & interactive terminal
│   │   ├── About.tsx            # Bio, areas of interest & strengths grid
│   │   ├── Skills.tsx           # Categorized skills cards with extensible structure
│   │   ├── Projects.tsx         # Filterable showcase grid with AI badges
│   │   ├── ProjectModal.tsx     # Full modal view with problem, solution, features & links
│   │   ├── Education.tsx        # B.E. CSE 4th sem academic spotlight
│   │   ├── Contact.tsx          # "Let's Build Something Together" & message form
│   │   ├── Footer.tsx           # Copyright, social links & back-to-top trigger
│   │   └── icons.tsx            # Optimized SVG icons for GitHub and LinkedIn
│   └── data/
│       ├── types.ts             # TypeScript interfaces for projects, skills & contacts
│       └── portfolioData.ts     # Centralized file to customize profile, projects & info
```

---

## ✏️ How to Customize Your Information

All your personal details, project links, contact handles, and skills are stored centrally in:
👉 `src/data/portfolioData.ts`

- **Update Contact Info**: Edit `CONTACT_CHANNELS` with your actual email, LinkedIn URL, GitHub URL, and phone number.
- **Update Projects**: Add your real GitHub repository links and live demo URLs in `PROJECTS`.
- **Add New Skills**: Add new items to the `skills` array under any category in `SKILL_CATEGORIES`.

---

## 🚀 Deploying to Vercel

1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete modern portfolio for Nishanth B."
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. Your site will be live within seconds!

---

## 📄 License & Copyright

© 2026 Nishanth B. All rights reserved.
