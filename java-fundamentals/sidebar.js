/* sidebar.js — uses pre-built <section> elements in each chapter */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var article = document.querySelector('article');
    if (!article) return;

    // Hide the inline TOC nav (if any) — sidebar replaces it
    var inlineToc = article.querySelector('nav.toc');
    if (inlineToc) inlineToc.style.display = 'none';

    // Use the existing <section> or <div class="section"> direct children of article
    var sections = Array.from(
      article.querySelectorAll(':scope > section, :scope > div.section')
    );
    if (sections.length === 0) return;

    // Mark them so CSS can show/hide
    sections.forEach(function (sec) {
      sec.classList.add('chapter-section');
    });

    // ── Build sidebar ─────────────────────────────────────
    var sidebar = document.createElement('nav');
    sidebar.className = 'sidebar';

    var title = document.createElement('div');
    title.className = 'sidebar-title';
    title.textContent = 'In This Chapter';
    sidebar.appendChild(title);

    var ul = document.createElement('ul');
    sections.forEach(function (sec, idx) {
      var h2 = sec.querySelector('h2');
      var label = h2 ? h2.textContent.trim() : 'Section ' + (idx + 1);

      var li = document.createElement('li');
      var a  = document.createElement('a');
      a.href = '#';
      a.textContent = label;
      a.addEventListener('click', function (e) {
        e.preventDefault();
        showSection(idx);
      });
      li.appendChild(a);
      ul.appendChild(li);
    });
    sidebar.appendChild(ul);

    // ── Wrap sidebar + article in .chapter-layout ─────────
    var layout = document.createElement('div');
    layout.className = 'chapter-layout';
    article.parentNode.insertBefore(layout, article);
    layout.appendChild(sidebar);
    layout.appendChild(article);

    // ── Show / hide ───────────────────────────────────────
    var links  = Array.from(ul.querySelectorAll('a'));
    var current = 0;

    function showSection(idx) {
      if (idx < 0 || idx >= sections.length) return;
      sections.forEach(function (s) { s.classList.remove('active'); });
      links.forEach(function (a)   { a.classList.remove('active'); });
      sections[idx].classList.add('active');
      links[idx].classList.add('active');
      article.scrollTop = 0;
      current = idx;
      links[idx].scrollIntoView({ block: 'nearest' });
      refreshFooter(idx);
    }

    function refreshFooter(idx) {
      var footer = sections[idx].querySelector('.section-footer');
      if (!footer) return;
      footer.querySelector('.sec-prev').disabled = (idx === 0);
      footer.querySelector('.sec-next').disabled = (idx === sections.length - 1);
      footer.querySelector('.sec-counter').textContent =
        (idx + 1) + ' / ' + sections.length;
    }

    // ── Prev / Next buttons inside each section ───────────
    sections.forEach(function (sec, idx) {
      var footer = document.createElement('div');
      footer.className = 'section-footer';

      var prev = document.createElement('button');
      prev.className = 'sec-prev';
      prev.textContent = '← Previous';
      prev.addEventListener('click', function () { showSection(idx - 1); });

      var counter = document.createElement('span');
      counter.className = 'sec-counter';
      counter.textContent = (idx + 1) + ' / ' + sections.length;

      var next = document.createElement('button');
      next.className = 'sec-next';
      next.textContent = 'Next →';
      next.addEventListener('click', function () { showSection(idx + 1); });

      footer.appendChild(prev);
      footer.appendChild(counter);
      footer.appendChild(next);
      sec.appendChild(footer);
    });

    // ── Keyboard navigation ───────────────────────────────
    document.addEventListener('keydown', function (e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' || e.key === 'j') showSection(current + 1);
      if (e.key === 'ArrowLeft'  || e.key === 'k') showSection(current - 1);
    });

    // ── Start on first section ────────────────────────────
    showSection(0);
  });
})();
