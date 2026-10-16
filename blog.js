/* ═══════════════════════════════════════════
   BOOKHUB BLOG — JAVASCRIPT
   ═══════════════════════════════════════════ */

function esc(str) {
  return String(str || '').replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// ═══ BLOG LISTING PAGE ═══
function renderArticles(category = 'all') {
  const grid = document.getElementById('articlesGrid');
  const empty = document.getElementById('emptyState');
  if (!grid) return;

  let list = [...ARTICLES];
  if (category !== 'all') {
    list = list.filter(a => a.category === category);
  }
  list.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (list.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  grid.innerHTML = list.map(a => `
    <article class="article-card" onclick="window.location.href='article.html?slug=${esc(a.slug)}'">
      <div class="article-cover">
        <img src="${esc(a.cover)}" alt="${esc(a.title)}" loading="lazy" />
      </div>
      <div class="article-category">${esc(a.category)}</div>
      <h3>${esc(a.title)}</h3>
      <p class="excerpt">${esc(a.excerpt)}</p>
      <div class="article-meta">
        <span>${esc(a.author)}</span>
        <span>·</span>
        <span>${esc(a.readTime)}</span>
      </div>
    </article>
  `).join('');
}

// ═══ ARTICLE DETAIL PAGE ═══
function renderArticleDetail() {
  const container = document.getElementById('articleContent');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  if (!slug) {
    container.innerHTML = '<p>Article not found. <a href="blog.html">Back to blog</a></p>';
    return;
  }

  const article = ARTICLES.find(a => a.slug === slug);
  if (!article) {
    container.innerHTML = '<p>Article not found. <a href="blog.html">Back to blog</a></p>';
    return;
  }

  document.title = `${article.title} — BOOKHUB`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', article.excerpt);

  container.innerHTML = `
    <div class="article-header">
      <div class="article-category">${esc(article.category)}</div>
      <h1>${esc(article.title)}</h1>
      <div class="article-meta">
        <span>${esc(article.author)}</span>
        <span>·</span>
        <span>${formatDate(article.date)}</span>
        <span>·</span>
        <span>${esc(article.readTime)}</span>
      </div>
    </div>
    <img class="article-cover-img" src="${esc(article.cover)}" alt="${esc(article.title)}" />
    <div class="article-body">
      ${article.content}
    </div>
  `;

  // Related articles
  const relatedGrid = document.getElementById('relatedGrid');
  if (relatedGrid) {
    const related = ARTICLES
      .filter(a => a.id !== article.id && a.category === article.category)
      .slice(0, 3);
    const fallback = ARTICLES.filter(a => a.id !== article.id).slice(0, 3);
    const list = related.length ? related : fallback;

    relatedGrid.innerHTML = list.map(a => `
      <article class="article-card" onclick="window.location.href='article.html?slug=${esc(a.slug)}'">
        <div class="article-cover">
          <img src="${esc(a.cover)}" alt="${esc(a.title)}" loading="lazy" />
        </div>
        <div class="article-category">${esc(a.category)}</div>
        <h3>${esc(a.title)}</h3>
        <p class="excerpt">${esc(a.excerpt)}</p>
      </article>
    `).join('');
  }
}

// ═══ FILTER BAR ═══
function setupFilters() {
  const bar = document.getElementById('filterBar');
  if (!bar) return;

  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderArticles(btn.dataset.cat);
    });
  });
}

// ═══ NEWSLETTER ═══
function handleNewsletter(e) {
  e.preventDefault();
  const msg = document.getElementById('newsletterMsg');
  if (msg) {
    msg.textContent = 'Thank you! Newsletter signup is not yet active.';
    msg.style.display = 'block';
  }
  e.target.reset();
}

// ═══ INIT ═══
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (document.getElementById('articlesGrid')) {
    setupFilters();
    renderArticles('all');
  }

  if (document.getElementById('articleContent')) {
    renderArticleDetail();
  }
});
