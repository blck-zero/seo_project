/* Navigation toggle (mobile) */
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    /* Close menu when a link is clicked (mobile) */
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* FAQ accordion */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var answer = item.querySelector('.faq-answer');
      var isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
      answer.setAttribute('aria-hidden', String(!isOpen));
    });
  });

  /* Highlight current nav item */
  var currentPath = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-menu a').forEach(function (a) {
    var href = a.getAttribute('href').replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
    if (href === currentPath) {
      a.setAttribute('aria-current', 'page');
    }
  });
});
