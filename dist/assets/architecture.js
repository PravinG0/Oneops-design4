document.querySelectorAll('.towers a').forEach(link => {
  link.addEventListener('click', () => {
    const layer = document.getElementById(link.hash.slice(1));
    if (layer) layer.open = true;
  });
});
const calculator = document.querySelector('.calculator form');
if (calculator) {
  const currency = new Intl.NumberFormat('en-US', {style:'currency', currency:'USD', maximumFractionDigits:0});
  calculator.addEventListener('input', () => {
    const spend = document.querySelector('#spend').valueAsNumber;
    const teams = document.querySelector('#teams').valueAsNumber;
    const rate = document.querySelector('#rate').valueAsNumber;
    document.querySelector('#rate-text').textContent = rate + '%';
    const valid = calculator.checkValidity();
    const annual = spend * 12 * rate / 100;
    document.querySelector('#saving').textContent = valid ? currency.format(annual) : '—';
    document.querySelector('#per-team').textContent = valid ? currency.format(annual / teams) + ' per team per year' : 'Enter a valid spend and team count.';
  });
}
