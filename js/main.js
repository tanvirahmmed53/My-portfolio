/**
 * ============================================================================
 * MAIN PORTFOLIO CONTROLLER - TANVIR AHMMED
 * Modern, Responsive, Interactive Engine
 * Supporting Dual High-Tech Themes: Cyber Blue & Cyber Green
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavigation();
  initDynamicContent();
  initModals();
  initScrollAnimations();
  initHeroCanvas();
});

/* ==========================================================================
   1. THEME TOGGLE (CYBER BLUE ⇄ CYBER GREEN DARK THEMES)
   ========================================================================== */
function initThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  const themeLabel = document.getElementById("theme-btn-label");
  const storedTheme = localStorage.getItem("tanvir-portfolio-theme");

  // Default to cyber blue (dark) unless user previously selected green-dark
  const initialTheme = storedTheme === "green-dark" ? "green-dark" : "dark";
  document.documentElement.setAttribute("data-theme", initialTheme);
  updateThemeButton(initialTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "green-dark" ? "dark" : "green-dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("tanvir-portfolio-theme", nextTheme);
      updateThemeButton(nextTheme);
      showToast(`Switched to ${nextTheme === "green-dark" ? "CYBER GREEN" : "CYBER BLUE"} mode`);
    });
  }

  function updateThemeButton(theme) {
    if (themeLabel) {
      themeLabel.textContent = theme === "green-dark" ? "Cyber Green" : "Cyber Blue";
    }
  }
}

/* ==========================================================================
   2. STICKY NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const headerNav = document.getElementById("header-nav");
  const mobileToggle = document.getElementById("mobile-toggle-btn");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll header effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      headerNav.classList.add("scrolled");
    } else {
      headerNav.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      mobileDrawer.classList.toggle("open");
    });

    // Close mobile drawer when link is clicked
    mobileDrawer.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
      });
    });
  }

  // Active section indicator using IntersectionObserver
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => navObserver.observe(sec));
}

/* ==========================================================================
   3. DYNAMIC CONTENT RENDERING FROM DATA.JS
   ========================================================================== */
function initDynamicContent() {
  if (typeof PORTFOLIO_DATA === "undefined") return;

  renderTechnicalInterests();
  renderProjects(PORTFOLIO_DATA.projects);
  renderWorkshops();
  renderSkills();
  renderJournal();
}

// Render Technical Interests
function renderTechnicalInterests() {
  const container = document.getElementById("interests-grid-container");
  if (!container || !PORTFOLIO_DATA.technicalInterests) return;

  container.innerHTML = PORTFOLIO_DATA.technicalInterests
    .map((item) => `
      <div class="interest-card reveal-on-scroll">
        <div class="interest-icon-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            ${getIconPath(item.icon)}
          </svg>
        </div>
        <div>
          <div class="interest-title">${escapeHTML(item.name)}</div>
          <div class="interest-desc">${escapeHTML(item.desc)}</div>
        </div>
      </div>
    `)
    .join("");
}

// Render Projects (Showcasing Open-Ended Experiment with PDF Report & Uncropped Image)
function renderProjects(projectsList) {
  const container = document.getElementById("projects-grid-container");
  if (!container) return;

  if (!projectsList || projectsList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
        <p>No project available.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = projectsList
    .map((proj) => `
      <div class="project-card reveal-on-scroll" data-category="${proj.categoryKey || 'all'}">
        <div class="project-thumb-box lightbox-trigger" data-img-src="${proj.image}" data-img-title="${escapeHTML(proj.title)}" data-img-desc="${escapeHTML(proj.title)}" title="Click to view full uncropped photo">
          <img src="${proj.image || 'assets/img/hero-banner.png'}" alt="${escapeHTML(proj.title)}" class="project-img" loading="lazy">
          <div class="project-overlay-badge">
            <span class="chip chip-accent">${escapeHTML(proj.status || 'Verified Lab Experiment')}</span>
          </div>
        </div>
        <div class="project-body">
          <div class="project-category-tag">${escapeHTML(proj.category)}</div>
          <h4 class="project-title">${escapeHTML(proj.title)}</h4>
          <p class="project-desc">${escapeHTML(proj.description)}</p>
          
          <div class="components-used">
            ${(proj.components || []).map(comp => `<span class="component-pill">${escapeHTML(comp)}</span>`).join('')}
          </div>
        </div>
        <div class="project-card-footer">
          <button class="btn btn-sm btn-primary view-project-btn" data-project-id="${proj.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            View Details
          </button>
          
          ${proj.pdfReport ? `
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <a href="${proj.pdfReport}" download="Open_Ended_Experiment_Electrical_Circuit_Lab_Tanvir_Ahmmed.pdf" class="btn btn-sm btn-secondary" title="Download Official Lab Report PDF">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Lab Report
              </a>
              <a href="${proj.pdfReport}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" title="Open Lab Report in New Tab">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                View PDF
              </a>
            </div>
          ` : ''}
        </div>
      </div>
    `)
    .join("");

  // Rebind project detail buttons
  document.querySelectorAll(".view-project-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pId = btn.getAttribute("data-project-id");
      openProjectModal(pId);
    });
  });
}

// Render Workshops & Certifications
function renderWorkshops() {
  const container = document.getElementById("workshops-timeline-container");
  if (!container || !PORTFOLIO_DATA.workshops) return;

  container.innerHTML = PORTFOLIO_DATA.workshops
    .map((ws) => `
      <div class="workshop-card reveal-on-scroll">
        <div class="workshop-header">
          <div>
            <h4 class="workshop-title">${escapeHTML(ws.title)}</h4>
            <div class="workshop-organizer">${escapeHTML(ws.organizer)}</div>
          </div>
          <span class="chip chip-accent">${escapeHTML(ws.status || 'Verified')}</span>
        </div>
        
        <div class="workshop-meta-bar">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${escapeHTML(ws.period)}
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${escapeHTML(ws.location)}
          </span>
        </div>

        <p class="workshop-desc">${escapeHTML(ws.description)}</p>

        <div class="workshop-skills" style="margin-bottom: ${ws.certificateAvailable ? '1rem' : '0'};">
          ${(ws.skills || []).map((sk) => `<span class="chip">${escapeHTML(sk)}</span>`).join("")}
        </div>

        ${ws.certificateAvailable && ws.certificateFile ? `
          <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--success); display: inline-flex; align-items: center; gap: 0.35rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Certificate / Event Document Available
            </span>
            <button class="btn btn-sm btn-primary view-cert-btn" data-cert-file="${ws.certificateFile}" data-cert-title="${escapeHTML(ws.certificateTitle || ws.title)}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
              View Document
            </button>
          </div>
        ` : ''}
      </div>
    `)
    .join("");

  // Rebind certificate view buttons
  document.querySelectorAll(".view-cert-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const file = btn.getAttribute("data-cert-file");
      const title = btn.getAttribute("data-cert-title");
      openLightboxModal(file, title, "Official Verified Certificate & Recognition");
    });
  });
}

// Render Skills
function renderSkills() {
  const progContainer = document.getElementById("skills-programming");
  const embedContainer = document.getElementById("skills-embedded");
  const elecContainer = document.getElementById("skills-electrical");
  const toolsContainer = document.getElementById("skills-tools");

  if (!PORTFOLIO_DATA.skills) return;

  if (progContainer && PORTFOLIO_DATA.skills.programming) {
    progContainer.innerHTML = renderSkillRows(PORTFOLIO_DATA.skills.programming);
  }
  if (embedContainer && PORTFOLIO_DATA.skills.electronicsEmbedded) {
    embedContainer.innerHTML = renderSkillRows(PORTFOLIO_DATA.skills.electronicsEmbedded);
  }
  if (elecContainer && PORTFOLIO_DATA.skills.electricalEngineering) {
    elecContainer.innerHTML = renderSkillRows(PORTFOLIO_DATA.skills.electricalEngineering);
  }
  if (toolsContainer && PORTFOLIO_DATA.skills.softwareTools) {
    toolsContainer.innerHTML = renderSkillRows(PORTFOLIO_DATA.skills.softwareTools);
  }
}

function renderSkillRows(skillsList) {
  return skillsList
    .map((s) => `
      <div class="skill-chip-row">
        <span class="skill-name">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-cyan);">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          ${escapeHTML(s.name)}
        </span>
        <span class="skill-badge-level">${escapeHTML(s.level || 'Skill')}</span>
      </div>
    `)
    .join("");
}

// Render Photo Journal (With Real Uploaded Photos)
function renderJournal() {
  const container = document.getElementById("journal-grid-container");
  if (!container || !PORTFOLIO_DATA.journal) return;

  container.innerHTML = PORTFOLIO_DATA.journal
    .map((item) => `
      <div class="journal-card reveal-on-scroll">
        <div class="journal-img-box lightbox-trigger" data-img-src="${item.image}" data-img-title="${escapeHTML(item.title)}" data-img-desc="${escapeHTML(item.story)}">
          <img src="${item.image}" alt="${escapeHTML(item.title)}" class="journal-img" loading="lazy">
          <div class="journal-expand-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
          </div>
        </div>
        <div class="journal-body">
          <div class="journal-meta">
            <span>📅 ${escapeHTML(item.date)}</span>
            ${item.location ? `<span>📍 ${escapeHTML(item.location)}</span>` : ''}
          </div>
          <h4 class="journal-title">${escapeHTML(item.title)}</h4>
          <p class="journal-story">${escapeHTML(item.story)}</p>
          <div class="journal-tags">
            ${(item.tags || []).map(t => `<span class="chip chip-accent">#${escapeHTML(t)}</span>`).join('')}
          </div>
        </div>
      </div>
    `)
    .join("");

  // Rebind lightbox triggers
  document.querySelectorAll(".lightbox-trigger").forEach((el) => {
    el.addEventListener("click", () => {
      const src = el.getAttribute("data-img-src");
      const title = el.getAttribute("data-img-title");
      const desc = el.getAttribute("data-img-desc");
      openLightboxModal(src, title, desc);
    });
  });
}

/* ==========================================================================
   4. MODALS (PROJECT DETAILS, CV PREVIEW & LIGHTBOX)
   ========================================================================== */
function initModals() {
  const modalOverlays = document.querySelectorAll(".modal-overlay");
  modalOverlays.forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  document.querySelectorAll(".modal-close-btn").forEach((btn) => {
    btn.addEventListener("click", closeAllModals);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });

  // CV Preview Modal Button
  const previewCvBtn = document.getElementById("preview-cv-modal-btn");
  if (previewCvBtn) {
    previewCvBtn.addEventListener("click", () => {
      const cvModal = document.getElementById("cv-preview-modal");
      if (cvModal) cvModal.classList.add("active");
    });
  }
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach((m) => m.classList.remove("active"));
}

function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-details-modal");
  const modalTitle = document.getElementById("project-modal-title");
  const modalBody = document.getElementById("project-modal-body");

  if (!modal || !modalTitle || !modalBody) return;

  modalTitle.textContent = project.title;

  const details = project.details || {};
  modalBody.innerHTML = `
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <span class="chip chip-accent">${escapeHTML(project.category)}</span>
      <span class="chip">${escapeHTML(project.status || 'Verified Lab Experiment')}</span>
    </div>

    <div>
      <h4 style="font-size: 1.05rem; margin-bottom: 0.4rem; color: var(--text-primary);">Experiment Objective</h4>
      <p style="font-size: 0.95rem; color: var(--text-secondary);">${escapeHTML(details.objective || project.description)}</p>
    </div>

    <div>
      <h4 style="font-size: 1.05rem; margin-bottom: 0.4rem; color: var(--text-primary);">Components & Laboratory Apparatus</h4>
      <div class="components-used" style="margin-top: 0.4rem;">
        ${(project.components || []).map(c => `<span class="component-pill" style="font-size: 0.82rem; padding: 0.3rem 0.75rem;">${escapeHTML(c)}</span>`).join('')}
      </div>
    </div>

    ${details.circuitSummary ? `
      <div>
        <h4 style="font-size: 1.05rem; margin-bottom: 0.4rem; color: var(--text-primary);">Circuit Architecture & Interfacing</h4>
        <p style="font-size: 0.95rem; color: var(--text-secondary);">${escapeHTML(details.circuitSummary)}</p>
      </div>
    ` : ''}

    ${project.contribution ? `
      <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); padding: 1rem; border-radius: var(--radius-md);">
        <h5 style="font-size: 0.88rem; font-family: var(--font-mono); color: var(--accent-cyan); text-transform: uppercase; margin-bottom: 0.35rem;">My Contribution & Role</h5>
        <p style="font-size: 0.92rem; color: var(--text-primary);">${escapeHTML(project.contribution)}</p>
      </div>
    ` : ''}

    ${details.keyFeatures && details.keyFeatures.length > 0 ? `
      <div>
        <h4 style="font-size: 1.05rem; margin-bottom: 0.4rem; color: var(--text-primary);">Key Outcomes & Experimental Highlights</h4>
        <ul style="padding-left: 1.25rem; font-size: 0.92rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem;">
          ${details.keyFeatures.map(f => `<li>${escapeHTML(f)}</li>`).join('')}
        </ul>
      </div>
    ` : ''}

    ${project.pdfReport ? `
      <div style="margin-top: 0.75rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <a href="${project.pdfReport}" download="Open_Ended_Experiment_Electrical_Circuit_Lab_Tanvir_Ahmmed.pdf" class="btn btn-primary" style="flex: 1;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Download Official Lab Report (PDF)
        </a>
        <a href="${project.pdfReport}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Open PDF in New Tab
        </a>
      </div>
    ` : ''}
  `;

  modal.classList.add("active");
}

function openLightboxModal(imgSrc, title, desc) {
  const modal = document.getElementById("lightbox-modal");
  const imgEl = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const descEl = document.getElementById("lightbox-desc");

  if (!modal) return;

  imgEl.src = imgSrc;
  titleEl.textContent = title;
  descEl.textContent = desc;

  modal.classList.add("active");
}

/* ==========================================================================
   5. SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   6. HERO CIRCUIT CANVAS PARTICLES
   ========================================================================== */
function initHeroCanvas() {
  const canvas = document.getElementById("hero-circuit-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  const particleCount = 28;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isGreen = document.documentElement.getAttribute("data-theme") === "green-dark";
    const nodeColor = isGreen ? "rgba(0, 255, 157, 0.45)" : "rgba(0, 210, 255, 0.45)";
    const lineColor = isGreen ? "rgba(0, 255, 157, 0.1)" : "rgba(0, 210, 255, 0.1)";

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();

      // Connect near nodes with circuit lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* ==========================================================================
   UTILITY FUNCTIONS
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
    <span>${escapeHTML(message)}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getIconPath(iconName) {
  const iconPaths = {
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
    activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
    'hard-drive': '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
    radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
    wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
    code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
    bot: '<rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line>',
    tool: '<path d="m15 5 4 4"></path><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path><path d="m8 6 2-2"></path><path d="m2 16 6 6"></path><path d="m19 19-4-4"></path><circle cx="14.5" cy="9.5" r=".5"></circle>'
  };

  return iconPaths[iconName] || iconPaths['zap'];
}
