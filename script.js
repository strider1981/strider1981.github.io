const panel = document.querySelector('#terminal-panel');
const toggle = document.querySelector('#terminal-toggle');
toggle.addEventListener('click', () => { panel.showModal(); toggle.setAttribute('aria-expanded', 'true'); });
document.querySelector('#terminal-close').addEventListener('click', () => panel.close());
panel.addEventListener('click', event => { if (event.target === panel) { const r = panel.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) panel.close(); } });
panel.addEventListener('close', () => { toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); });
document.querySelector('#year').textContent = new Date().getFullYear();
