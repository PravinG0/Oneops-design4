const homepage = document.querySelector('.oh');
const descriptions = ["Control · Define access before execution.","Optimize · Put each task on the right model.","Observe · Follow every request.","Report · Show what each team gained."];
const stack = homepage.querySelector('.oh-stack');
const layers = [...stack.children];
const buttons = [...homepage.querySelectorAll('[data-layer]')];
buttons.forEach((button, index) => button.addEventListener('click', () => {
  buttons.forEach((item, i) => item.setAttribute('aria-pressed', String(i === index)));
  layers.forEach((item, i) => { item.classList.toggle('active', i === index); item.style.top = (37 + i * 8.3 + (i < index ? -8 : 0)) + '%'; });
  stack.classList.add('has-selection');
  homepage.querySelector('.oh-caption').textContent = descriptions[index];
}));
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.remove('oh-pending'); observer.unobserve(entry.target); }
  }), {threshold: 0.08});
  homepage.querySelectorAll('.oh-section h2,.oh-layers article,.oh-week li').forEach(item => {
    if (item.getBoundingClientRect().top > innerHeight) { item.dataset.reveal = ''; item.classList.add('oh-pending'); observer.observe(item); }
  });
}
