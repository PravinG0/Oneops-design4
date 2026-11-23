(() => {
  const routes = [["Platform","/product/"],["Optimization","/optimize/"],["Security","/security-governance/"],["Solutions","/solutions/"],["Resources","/resources/"]];
  const links = routes.map(([label,url]) => '<a href="'+url+'"'+(location.pathname === url ? ' aria-current="page"' : '')+'>'+label+'</a>').join('');
  const main = document.querySelector("main");
  if (main && !main.id) main.id = "main-content";
  document.body.insertAdjacentHTML("afterbegin", `<a class="ops-skip" href="#${main?.id || 'main-content'}">Skip to content</a><a class="ops-notice" href="/optimize/">New guide · Five ways to cut Amazon Bedrock costs <u>Explore the levers</u></a><header class="ops-bar"><nav class="ops-nav" aria-label="Primary navigation"><a class="ops-brand" href="/" aria-label="OneOps home"><img src="/assets/logo-light.svg" alt="OneOps"></a><div class="ops-links" id="ops-links">${links}</div><div class="ops-actions"><a class="ops-signin" href="https://app.oneops.pro/">Sign in</a><a class="ops-demo" href="/contact-demo/">Book a demo</a></div><button class="ops-menu" aria-controls="ops-links" aria-expanded="false">Menu</button></nav></header>`);
  document.body.insertAdjacentHTML("beforeend", `<footer class="ops-foot"><div class="ops-foot-inner"><div><a href="/"><img src="/assets/logo-dark.svg" alt="OneOps home"></a><p>One control plane for enterprise AI on Amazon Bedrock.</p></div><div><strong>Platform</strong><a href="/product/">Architecture</a><a href="/optimize/">Savings levers</a><a href="/security-governance/">Governance &amp; security</a></div><div><strong>Explore</strong><a href="/solutions/">Solutions by role</a><a href="/optimize/#calculator">Savings calculator</a><a href="/resources/">Architecture guide</a></div><div><strong>OneOps</strong><a href="/contact-demo/">Book a demo</a><a href="https://app.oneops.pro/">Sign in</a></div></div><small>© ${new Date().getFullYear()} OneOps</small></footer>`);
  const menu = document.querySelector(".ops-menu");
  function setMenu(open) {
    menu.setAttribute("aria-expanded", String(open));
    document.querySelector(".ops-links").classList.toggle("open",open);
    menu.textContent = open ? "Close" : "Menu";
  }
  menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") === "false"));
  document.addEventListener("keydown", event => { if(event.key === "Escape" && menu.getAttribute("aria-expanded") === "true"){setMenu(false);menu.focus();} });
})();
