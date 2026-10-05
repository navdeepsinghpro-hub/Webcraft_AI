# 🚀 WebCraft AI

> **AI-powered website builder built with React and Tailwind CSS.**

WebCraft AI is a frontend website builder that allows users to generate, customize, preview, export, and locally publish websites from a simple prompt.

The project is currently **frontend-only**, with AI generation simulated through a rule-based generation system. The architecture is designed so that a real AI API, backend, database, and hosting system can be added later.

---

## ✨ Features

### 🤖 AI Website Generation

* Generate websites from natural-language prompts
* Detect website type and design preferences
* Supports different website styles and themes
* Simulated AI generation workflow

### 🎨 Website Customization

* Edit website content
* Change colors
* Typography controls
* Container width
* Border radius
* Shadows
* Section spacing
* Content alignment

### 🧩 Section Builder

* Add sections
* Delete sections
* Duplicate sections
* Move sections up/down
* Hide/show sections
* Customize individual sections
* Control section columns and layouts

### 👀 Live Preview

* Desktop preview
* Tablet preview
* Mobile preview
* Real-time changes while editing

### 🔄 Project System

* Automatic project saving
* LocalStorage persistence
* Load previous project
* Reset project
* Undo
* Redo

### 📱 Preview Mode

* Full-screen website preview
* Removes builder controls
* View the website as a final visitor

### 📦 Export

* Export website as standalone HTML
* Export complete React project
* Download generated React project as ZIP

### 🚀 Publish

* Local publishing system
* Generate unique project ID
* Generate shareable local URL
* Copy published URL
* Open published website

---

# 🖥️ Screenshots

## 1. AI Website Builder

![WebCraft AI Builder](screenshots/image.png)

---

## 2. AI Website Generation

![AI Website Generation](screenshots/image2.png)

---

## 3. Website Customization

![Website Customization](screenshots/image3.png)

---

## 4. Preview Mode

![Preview Mode](screenshots/image4.png)

---

## 5. Publish Website

![Publish Website](screenshots/image5.png)

---

# 🛠️ Tech Stack

| Technology   | Purpose                   |
| ------------ | ------------------------- |
| React        | Frontend UI               |
| JavaScript   | Application logic         |
| Tailwind CSS | Styling                   |
| Vite         | Development & build tool  |
| LocalStorage | Local project persistence |
| JSZip        | React project export      |

---

# 📂 Project Structure

```text
ai-website-builder/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Preview.jsx
│   │   ├── PreviewMode.jsx
│   │   ├── PublishModal.jsx
│   │   ├── CustomizePanel.jsx
│   │   ├── DesignPanel.jsx
│   │   └── SectionPanel.jsx
│   │
│   ├── sections/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   ├── Menu.jsx
│   │   ├── Gallery.jsx
│   │   ├── Pricing.jsx
│   │   ├── HowItWorks.jsx
│   │   └── Products.jsx
│   │
│   ├── data/
│   │   ├── templates.js
│   │   └── sectionRegistry.js
│   │
│   ├── utils/
│   │   ├── generateWebsite.js
│   │   ├── projectStorage.js
│   │   ├── publishProject.js
│   │   ├── exportWebsite.js
│   │   └── exportReact.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── index.html
```

---

# ⚡ Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/navdeepsinghpro-hub/Webcraft_AI.git
```

## 2. Navigate into the project

```bash
cd Webcraft_AI
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

---

# 🧠 How It Works

The basic workflow is:

```text
User Prompt
     ↓
Website Generation
     ↓
Website Structure
     ↓
Live Preview
     ↓
Content Editing
     ↓
Design Customization
     ↓
Section Builder
     ↓
Auto Save
     ↓
Preview Mode
     ↓
Export / Publish
```

---

# 🚀 Publishing System

The current publishing system is **frontend-only**.

When a website is published:

```text
Website
   ↓
Generate Project ID
   ↓
Save Published Project
   ↓
Generate Local URL
   ↓
Open Published Website
```

Published projects are currently stored using browser `localStorage`.

### Current limitation

The published URL is **not publicly accessible on the internet** because the project does not yet have a backend or hosting system.

Future architecture:

```text
React Frontend
      ↓
FastAPI Backend
      ↓
Database
      ↓
Project ID
      ↓
Public URL
      ↓
Hosted Website
```

---

# 📤 Export System

## HTML Export

WebCraft AI can generate a standalone HTML file containing the website structure and styling.

```text
WebCraft Project
      ↓
HTML Generator
      ↓
index.html
```

## React Export

The application can also generate a downloadable React project:

```text
webcraft-react-site/
├── package.json
├── index.html
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

---

# 🎯 Current Status

```text
AI Generation       ✅
Website Builder     ✅
Content Editor      ✅
Design System       ✅
Section Builder     ✅
Live Preview        ✅
Responsive Preview  ✅
Auto Save           ✅
Undo / Redo         ✅
Preview Mode        ✅
HTML Export         ✅
React Export        ✅
Local Publish       ✅
Backend             ⏳
Database            ⏳
Real AI API         ⏳
Public Hosting      ⏳
```

---

# 🔮 Future Plans

* [ ] Real AI API integration
* [ ] FastAPI backend
* [ ] User authentication
* [ ] Database integration
* [ ] Multiple projects
* [ ] Cloud project storage
* [ ] Real public URLs
* [ ] Custom domains
* [ ] Website deployment
* [ ] AI-powered code generation
* [ ] AI-powered section editing
* [ ] Image generation
* [ ] More website templates
* [ ] Team collaboration

---

# 👨‍💻 Author

**Navdeep Singh**

BTech AIML Student | AI/ML | Web Development

Currently exploring:

```text
AI / ML
   +
Web Development
   +
Generative AI
   +
Full-Stack Development
```

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

---

> **WebCraft AI — From an idea to a website.**
