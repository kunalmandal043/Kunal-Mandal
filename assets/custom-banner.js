// Vanilla JS: render Custom Banner section dynamically

// 1) Settings coming from anywhere (replace with real values)
const settings = {
  title: 'The Gift Guide',
  subtitle: 'Discover Joy: Your Ultimate Holiday Gift Destination.',
  top_note: 'Find the ideal gift for your loved ones.',
  bottom_note: 'SUSTAINABLE. ETHICALLY MADE CLOTHES IN SIZES XXS TO 4XL',
  button_link: '#',
  button_label: 'CHOOSE GIFT'
};

// 2) Helper to create elements
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag); // createElement is standard DOM API [web:156][web:158]
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  (Array.isArray(children) ? children : [children]).forEach(c => {
    if (c == null) return;
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return node;
}

// 3) Build the banner subtree
function buildBanner(s) {
  const section = el('section', { class: 'custom-banner' }, [
    el('p', { class: 'banner-top' }, s.top_note),
    el('h1', {}, s.title),
    el('p', { class: 'banner-sub' }, s.subtitle),
    el('a', { class: 'banner-btn', href: s.button_link || '#' }, s.button_label),
    el('p', { class: 'banner-bottom' }, s.bottom_note)
  ]);
  return section;
}

// 4) Mount into the page
const mount = document.getElementById('app');
if (mount) {
  mount.appendChild(buildBanner(settings)); // Append the constructed DOM nodes [web:157][web:154]
}

// 5) Optional: minimal interaction (no jQuery)
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.banner-btn');
  if (!btn) return;
  // simple press feedback
  btn.style.transform = 'translateY(0)';
  setTimeout(() => (btn.style.transform = ''), 120);
});
