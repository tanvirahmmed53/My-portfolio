# Tanvir Ahmmed — Electrical & Electronic Engineering (EEE) Portfolio Website

A personal portfolio website designed and developed for **Tanvir Ahmmed**, an Electrical & Electronic Engineering undergraduate student at **Daffodil International University (DIU)**.

---

## ⚡ Key Highlights & Features

- **Engineering Aesthetic**: Tech-inspired theme with subtle circuit grids, interactive particles, and glowing accents.
- **Dark / Light Mode**: Seamless theme switching with smooth transitions, persisting user preference via `localStorage`.
- **Integrated CV Downloads & Preview**:
  - Direct 1-click download of official `Tanvir_Ahmmed_CV.pdf`.
  - Built-in PDF quick preview modal & new tab viewer.
- **Projects & Lab Works**:
  - Filterable by categories (*Arduino*, *ESP32*, *Circuits*, *Electronics*, *Robotics*, *Lab Work*).
  - Detailed interactive modal popup for schematics, hardware components, circuit explanation, and code snippets.
  - Zero fake projects: Includes clean editable blueprints ready for your real lab reports.
- **Workshops & Certifications**:
  - Timeline featuring your verified role in the **IEEE PES DIU Student Branch Chapter** and laboratory training.
- **Technical Skills**:
  - Categorized chips (*Programming*, *Electronics & Embedded*, *Electrical Engineering*, *Software/Tools*) without arbitrary fake percentages.
- **GitHub Integration**:
  - Dynamically fetches repositories from `github.com/tanvirahmmed53` via GitHub REST API with offline fallbacks.
- **Personal Blog & Photo Journal**:
  - Clean card gallery with image lightbox modal viewer.
- **Responsive & Accessible**:
  - Smooth scrolling, sticky glassmorphism navbar, responsive hamburger menu, and optimized layouts for desktop, tablet, and mobile screens.

---

## 📂 Project Structure

```
tanvir-eee-portfolio/
│
├── index.html                  # Semantic single-page HTML5 structure
├── README.md                   # Documentation and customization guide
│
├── css/
│   ├── style.css               # Design tokens, variables, typography, navigation & base layout
│   └── components.css          # Styling for CV, projects, workshops, skills, github & modals
│
├── js/
│   ├── data.js                 # Centralized content configuration (Update this to change content!)
│   ├── github.js               # Dynamic GitHub API integration
│   └── main.js                 # Theme toggler, navigation, modals, filtering & animations
│
└── assets/
    ├── img/
    │   ├── hero-banner.png     # Power & robotics technology banner
    │   └── tanvir-portrait.png # Cutout professional suit portrait
    └── docs/
        └── Tanvir_Ahmmed_CV.pdf# Official Curriculum Vitae document
```

---

## 🛠️ How to Customize & Add Content

All portfolio information is centralized in [`js/data.js`](js/data.js). You can edit your portfolio in seconds without touching any HTML or CSS:

### 1. Adding a New Project / Lab Work
Open `js/data.js` and add an entry inside `PORTFOLIO_DATA.projects`:

```javascript
{
  id: "proj-new",
  title: "Your Project Title",
  category: "Arduino Projects",      // or "ESP32 Projects", "Electrical Circuits", etc.
  categoryKey: "arduino",           // matches filter pill
  status: "Completed",
  featured: true,
  description: "Brief summary of your build or lab experiment.",
  components: ["Arduino Uno", "Sensor X", "Relay"],
  contribution: "What you designed, assembled, or programmed.",
  skillsLearned: ["Skill 1", "Skill 2"],
  image: "assets/img/your-project-photo.jpg",
  githubUrl: "https://github.com/tanvirahmmed53/your-repo",
  details: {
    objective: "Primary goal of the project.",
    circuitSummary: "Description of the wiring and circuit topology.",
    keyFeatures: ["Feature 1", "Feature 2"],
    codeSnippet: `// Your Arduino / C code here`
  }
}
```

### 2. Updating Your CV
To update your CV, simply replace the file at:
`assets/docs/Tanvir_Ahmmed_CV.pdf` with your new PDF document.

### 3. Adding a Photo to the Journal
1. Place your image in `assets/img/`.
2. Open `js/data.js` and add an entry to `PORTFOLIO_DATA.journal`:

```javascript
{
  id: "journal-4",
  title: "Campus Project Exhibition",
  date: "October 2026",
  location: "DIU Campus, Birulia",
  tags: ["DIU", "Exhibition", "Hardware"],
  image: "assets/img/your-photo.jpg",
  story: "Brief description of the event or project demonstration."
}
```

---

## 🚀 How to Run & Deploy

### Running Locally
You can simply double-click `index.html` to open it in any web browser (Google Chrome, Microsoft Edge, Firefox, Safari).

### Free 1-Click Deployment to GitHub Pages
1. Create a new repository on your GitHub account (`https://github.com/tanvirahmmed53/portfolio` or `https://github.com/tanvirahmmed53/tanvirahmmed53.github.io`).
2. Push this folder's files to your repository.
3. In GitHub, go to **Settings > Pages** and set branch to `main` (or `master`) and folder to `/ (root)`.
4. Your website will be live at `https://tanvirahmmed53.github.io/`!
