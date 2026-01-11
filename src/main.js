import './style.css';
import { Navbar } from './components/navbar.js';
import { Home } from './pages/home.js';
import { Templates } from './pages/templates.js';
import { About } from './pages/about.js';

const app = document.querySelector('#app');

const routes = {
  '/': Home,
  '/templates': Templates,
  '/about': About,
};

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

function router() {
  const path = window.location.hash.slice(1) || '/';
  const page = routes[path] || Home;

  app.innerHTML = `
    ${Navbar()}
    <main class="page-content">
      ${page()}
    </main>
    <footer>
      <div class="container">
        <p>&copy; 2026 Dharshan E. All rights reserved.</p>
      </div>
    </footer>
  `;

  // Highlight active link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${path}` || (path === '/' && link.getAttribute('href') === '#/')) {
      link.classList.add('active');
    }
  });

  // Re-run animations
  setTimeout(initAnimations, 100);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
