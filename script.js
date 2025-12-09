document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  // Create hamburger button
  const toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.setAttribute('aria-label', 'Toggle navigation menu');
  toggle.textContent = '☰';
  nav.insertBefore(toggle, nav.querySelector('ul'));

  // Toggle show/hide on small screens
  toggle.addEventListener('click', () => {
    const list = nav.querySelector('ul');
    list.classList.toggle('show');
    toggle.classList.toggle('active');
   });
});
