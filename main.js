// Renders data.js into the page. You normally don't need to edit this file.

const $ = (id) => document.getElementById(id);
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const STATUS_LABEL = {
  "under-review": "Under Review",
  accepted: "Accepted",
  published: "Published",
  preprint: "Preprint",
};

function linkButtons(links = {}) {
  return Object.entries(links)
    .filter(([, url]) => url)
    .map(([label, url]) => `<a class="btn" href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}</a>`)
    .join("");
}

function hideIfEmpty(sectionId, arr) {
  if (!arr || arr.length === 0) {
    $(sectionId).hidden = true;
    return true;
  }
  return false;
}

function boldSelf(authors) {
  return esc(authors).replace(esc(PROFILE.name), `<strong>${esc(PROFILE.name)}</strong>`);
}

function render() {
  const p = PROFILE;
  document.title = p.name;
  $("brand").textContent = p.name;
  $("name").innerHTML = `${esc(p.name)}${p.nameLocal ? ` <span class="local">${esc(p.nameLocal)}</span>` : ""}`;
  $("title").textContent = p.title;
  $("bio").innerHTML = p.bio.map((b) => `<p>${esc(b)}</p>`).join("");

  const initials = p.name.split(" ").map((w) => w[0]).join("");
  $("avatar").innerHTML = p.photo ? `<img src="${esc(p.photo)}" alt="${esc(p.name)}">` : `<span>${esc(initials)}</span>`;

  const c = p.contact;
  const contactLinks = [
    c.email && `<a class="btn" href="mailto:${esc(c.email)}">Email</a>`,
    c.linkedin && `<a class="btn" href="${esc(c.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
    c.github && `<a class="btn" href="${esc(c.github)}" target="_blank" rel="noopener">GitHub</a>`,
    c.scholar && `<a class="btn" href="${esc(c.scholar)}" target="_blank" rel="noopener">Scholar</a>`,
    c.cv && `<a class="btn btn-primary" href="${esc(c.cv)}" target="_blank" rel="noopener">CV</a>`,
  ].filter(Boolean);
  $("contact").innerHTML = contactLinks.join("") + (c.email ? `<span class="email">${esc(c.email)}</span>` : "");

  if (!hideIfEmpty("interests", RESEARCH_INTERESTS)) {
    $("interests-list").innerHTML = RESEARCH_INTERESTS.map((i) => `<li>${esc(i)}</li>`).join("");
  }

  if (!hideIfEmpty("news", NEWS)) {
    $("news-list").innerHTML = NEWS.map(
      (n) => `<li><span class="date">${esc(n.date)}</span><span>${esc(n.text)}</span></li>`
    ).join("");
  }

  if (!hideIfEmpty("publications", PUBLICATIONS)) {
    $("pubs-list").innerHTML = PUBLICATIONS.map(
      (pub) => `
      <li class="pub">
        <div class="pub-head">
          <span class="badge badge-${esc(pub.status)}">${esc(STATUS_LABEL[pub.status] || pub.status)}</span>
          <h3>${esc(pub.title)}</h3>
        </div>
        <p class="authors">${boldSelf(pub.authors)}</p>
        ${pub.venue ? `<p class="venue">${esc(pub.venue)}</p>` : ""}
        ${pub.summary ? `<p class="summary">${esc(pub.summary)}</p>` : ""}
        <div class="links">${linkButtons(pub.links)}</div>
      </li>`
    ).join("");
  }

  if (!hideIfEmpty("experience", EXPERIENCE)) {
    $("exp-list").innerHTML = EXPERIENCE.map(
      (e) => `
      <div class="item">
        <div class="item-head">
          <div><h3>${esc(e.org)}</h3><p class="role">${esc(e.role)}</p></div>
          <div class="meta"><span>${esc(e.period)}</span><span>${esc(e.location)}</span></div>
        </div>
        ${e.details?.length ? `<ul class="details">${e.details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
      </div>`
    ).join("");
  }

  if (!hideIfEmpty("projects", PROJECTS)) {
    $("projects-list").innerHTML = PROJECTS.map(
      (pr) => `
      <div class="item">
        <div class="item-head">
          <div>
            <h3>${esc(pr.title)}</h3>
            ${pr.type ? `<p class="role">${esc(pr.type)}</p>` : ""}
          </div>
          ${pr.period ? `<div class="meta"><span>${esc(pr.period)}</span></div>` : ""}
        </div>
        ${pr.role ? `<p class="proj-line"><strong>Role:</strong> ${esc(pr.role)}</p>` : ""}
        ${pr.summary ? `<p class="proj-line proj-summary">${esc(pr.summary)}</p>` : ""}
        ${pr.description ? `<p class="proj-desc">${esc(pr.description)}</p>` : ""}
        <div class="links">${linkButtons(pr.links)}</div>
      </div>`
    ).join("");
  }

  if (!hideIfEmpty("education", EDUCATION)) {
    $("edu-list").innerHTML = EDUCATION.map(
      (e) => `
      <div class="item">
        <div class="item-head">
          <div><h3>${esc(e.school)}</h3><p class="role">${esc(e.degree)}</p></div>
          <div class="meta"><span>${esc(e.period)}</span><span>${esc(e.location)}</span></div>
        </div>
      </div>`
    ).join("");
  }

  if (!hideIfEmpty("awards", AWARDS)) {
    $("awards-list").innerHTML = AWARDS.map(
      (a) => `<li><div><strong>${
        a.link
          ? `<a class="ext" href="${esc(a.link)}" target="_blank" rel="noopener">${esc(a.title)}</a>`
          : esc(a.title)
      }</strong><span>${esc(a.detail)}</span></div><span class="year">${esc(a.year)}</span></li>`
    ).join("");
  }

  if (!hideIfEmpty("skills", SKILLS)) {
    $("skills-list").innerHTML = SKILLS.map(
      (s) => `<div><dt>${esc(s.category)}</dt><dd>${s.items.map((i) => `<span>${esc(i)}</span>`).join("")}</dd></div>`
    ).join("");
  }

  // Nav: only sections that are visible
  const navItems = [
    ["publications", "Publications"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["education", "Education"],
    ["awards", "Awards"],
  ].filter(([id]) => !$(id).hidden);
  $("nav-links").innerHTML = navItems.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join("");

  $("footer").innerHTML = `© ${new Date().getFullYear()} ${esc(p.name)}`;
}

function initTheme() {
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch {}
  if (saved) root.dataset.theme = saved;
  $("theme-toggle").addEventListener("click", () => {
    const isDark =
      root.dataset.theme === "dark" ||
      (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch {}
  });
}

render();
initTheme();
