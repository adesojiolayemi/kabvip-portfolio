/* KABVIP™ Portfolio — Interactions & Rendering */

(function () {
  "use strict";

  // ---- Render helpers ----
  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function statusBadge(status, statusClass) {
    return `<span class="status-badge ${statusClass}">${status}</span>`;
  }

  // ---- Capabilities ----
  function renderCapabilities() {
    const grid = document.getElementById("cap-grid");
    if (!grid) return;
    capabilities.forEach((cap) => {
      const card = el("div", "cap-card reveal");
      card.innerHTML = `
        <h3>${cap.title}</h3>
        <ul>${cap.items.map((i) => `<li>${i}</li>`).join("")}</ul>
      `;
      grid.appendChild(card);
    });
  }

  // ---- Projects ----
  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    projects.forEach((p) => {
      const card = el("article", "project-card reveal");
      const techHtml = p.technologies
        .slice(0, 8)
        .map((t) => `<span>${t}</span>`)
        .join("");
      const liveBtn = p.liveUrl
        ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer">Open ${p.title.split("™")[0].trim()} →</a>`
        : "";
      const ghBtn = p.githubUrl
        ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>`
        : "";

      card.innerHTML = `
        <div class="project-body">
          <div class="project-meta">
            <span class="project-category">${p.category}</span>
            ${statusBadge(p.status, p.statusClass)}
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-tagline">${p.tagline}</p>
          <p class="project-desc">${p.description}</p>
          <div class="project-tech">${techHtml}</div>
          <div class="project-actions">
            ${liveBtn}
            ${ghBtn}
            <button type="button" class="btn-case" data-case="${p.id}">Case Study</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // ---- Games ----
  function renderGames() {
    const grid = document.getElementById("games-grid");
    if (!grid) return;
    games.forEach((g) => {
      const card = el("div", "game-card reveal");
      card.innerHTML = `<h3>${g.title}</h3><p>${g.description}</p>`;
      grid.appendChild(card);
    });
  }

  // ---- Process ----
  function renderProcess() {
    const list = document.getElementById("process-steps");
    if (!list) return;
    processSteps.forEach((s) => {
      const item = el("li", "process-step reveal");
      item.innerHTML = `
        <span class="step-num">${s.num}</span>
        <div>
          <h3 class="step-title">${s.title}</h3>
          <p class="step-desc">${s.desc}</p>
        </div>
      `;
      list.appendChild(item);
    });
  }

  // ---- Philosophy ----
  function renderPhilosophy() {
    const grid = document.getElementById("philosophy-grid");
    if (!grid) return;
    philosophy.forEach((line) => {
      const item = el("div", "phil-item reveal");
      item.textContent = line;
      grid.appendChild(item);
    });
  }

  // ---- Currently Building ----
  function renderBuilding() {
    const grid = document.getElementById("building-grid");
    if (!grid) return;
    currentlyBuilding.forEach((b) => {
      const card = el("div", "building-card reveal");
      card.innerHTML = `
        <h3>${b.project}</h3>
        <div class="building-meta">
          <span><strong>Status</strong> ${b.status}</span>
        </div>
        <p class="b-work">${b.workingOn}</p>
        <p class="b-next"><strong>Next:</strong> ${b.next}</p>
      `;
      grid.appendChild(card);
    });
  }

  // ---- Tech Stack ----
  function renderStack() {
    const container = document.getElementById("stack-groups");
    if (!container) return;
    techStack.forEach((g) => {
      const group = el("div", "stack-group reveal");
      group.innerHTML = `
        <h3>${g.group}</h3>
        <div class="stack-tags">${g.items.map((i) => `<span>${i}</span>`).join("")}</div>
      `;
      container.appendChild(group);
    });
  }

  // ---- Case Study Modal ----
  const modal = document.getElementById("case-modal");
  const modalBody = document.getElementById("modal-body");

  function openCase(id) {
    const p = projects.find((x) => x.id === id);
    if (!p || !modal || !modalBody) return;

    const features = p.features
      ? `<p><strong>Implemented</strong></p><ul>${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>`
      : "";
    const techList = p.technologies.map((t) => `<li>${t}</li>`).join("");
    const liveLink = p.liveUrl
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Open Live Product →</a>`
      : "";
    const ghLink = p.githubUrl
      ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>`
      : `<a href="${siteConfig.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub profile</a>`;

    modalBody.innerHTML = `
      <h2 id="modal-title">${p.title}</h2>
      <div class="modal-status">${statusBadge(p.status, p.statusClass)}</div>
      <div class="case-block">
        <h3>The Idea</h3>
        <p>${p.tagline} — ${p.description}</p>
      </div>
      <div class="case-block">
        <h3>The Problem</h3>
        <p>${p.problem}</p>
      </div>
      <div class="case-block">
        <h3>The Build</h3>
        <p>${p.solution}</p>
        ${features}
        ${p.inDev ? `<p><strong>In development</strong></p><ul>${p.inDev.map((f) => `<li>${f}</li>`).join("")}</ul>` : ""}
      </div>
      ${p.decisions ? `<div class="case-block"><h3>Product Decisions</h3><ul>${p.decisions.map((x) => `<li>${x}</li>`).join("")}</ul>${p.constraint ? `<p><strong>Constraint:</strong> ${p.constraint}</p>` : ""}</div>` : ""}
      ${p.mvp ? `<div class="case-block"><h3>MVP Scope</h3><p><strong>Included:</strong> ${p.mvp.included}</p><p><strong>Later:</strong> ${p.mvp.later}</p></div>` : ""}
      <div class="case-block">
        <h3>Technology</h3>
        <ul>${techList}</ul>
      </div>
      <div class="case-block">
        <h3>Outcome</h3>
        <p>${p.outcome}</p>
      </div>
      <div class="case-block">
        <h3>What's Next</h3>
        <p>${p.next}</p>
      </div>
      ${p.evidence ? `<p class="b-next"><strong>Evidence:</strong> ${p.evidence}</p>` : ""}
      <div class="modal-links">
        ${liveLink}
        ${ghLink}
      </div>
    `;

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close")?.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  // ---- Mobile nav ----
  const navToggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  function toggleNav() {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
    document.body.style.overflow = open ? "" : "hidden";
  }

  function closeNav() {
    navToggle.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
    document.body.style.overflow = "";
  }

  // ---- Reveal on scroll ----
  function setupReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
  }

  // ---- Smooth close mobile nav on link click ----
  function setupNavLinks() {
    mobileNav?.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeNav);
    });
  }

  // ---- Event delegation ----
  document.addEventListener("click", (e) => {
    const caseBtn = e.target.closest("[data-case]");
    if (caseBtn) {
      openCase(caseBtn.getAttribute("data-case"));
      return;
    }
    if (e.target.closest("[data-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeNav();
    }
  });

  navToggle?.addEventListener("click", toggleNav);

  // ---- Init ----
  function init() {
    renderCapabilities();
    renderProjects();
    renderGames();
    renderProcess();
    renderPhilosophy();
    renderBuilding();
    renderStack();
    setupNavLinks();
    // Small delay so DOM is painted before observing
    requestAnimationFrame(() => {
      setupReveal();
      // Also mark already-in-view sections
      document.querySelectorAll(".reveal").forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) node.classList.add("visible");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
