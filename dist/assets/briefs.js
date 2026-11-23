const policy = document.querySelector('#br-policy');
policy?.addEventListener('change', () => {
  const blocked = policy.value === 'block';
  document.querySelector('#br-state').textContent = blocked ? 'Blocked before invocation' : 'Forwarded to Bedrock';
  document.querySelector('#br-result').textContent = blocked ? 'Request withheld. Sensitive email address detected.' : 'Summarize the case for [REDACTED].';
});
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.br-index a')];
  const observer = new IntersectionObserver(entries => {
    entries.filter(entry => entry.isIntersecting).forEach(({target}) => {
      target.classList.add('br-enter');
      if (target.id) links.forEach(link => {
        if (link.hash === '#' + target.id) link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin:'0px 0px -20% 0px'});
  document.querySelectorAll('.br-role,.br-cap').forEach(el => observer.observe(el));
}
