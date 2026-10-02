'use strict';
const english = document.documentElement.lang === 'en';
const examples = JSON.parse(document.getElementById('risk-data').textContent);
const riskTabs = [...document.querySelectorAll('[data-risk]')];
function selectRisk(tab) {
  const value = examples[tab.dataset.risk];
  riskTabs.forEach(button => {
    const selected = button === tab;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  document.getElementById('risk-panel').setAttribute('aria-labelledby', tab.id);
  document.getElementById('risk-title').textContent = value.title;
  document.getElementById('risk-description').textContent = value.body;
  document.getElementById('risk-mode').textContent = value.mode;
  const tags = document.getElementById('risk-classes');
  tags.replaceChildren(...value.classes.map(testClass => {
    const tag = document.createElement('code');
    tag.textContent = testClass;
    return tag;
  }));
}
riskTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectRisk(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? riskTabs.length - 1 : (index + (['ArrowLeft','ArrowUp'].includes(event.key) ? -1 : 1) + riskTabs.length) % riskTabs.length;
    selectRisk(riskTabs[next]);
    riskTabs[next].focus();
  });
});
const menu = document.querySelector('.menu');
const navigation = document.getElementById('navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded','false');
  menu.setAttribute('aria-label',english ? 'Open menu' : 'Открыть меню');
}
menu.addEventListener('click', () => {
  const expanded = navigation.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(expanded));
  menu.setAttribute('aria-label',expanded ? (english ? 'Close menu' : 'Закрыть меню') : (english ? 'Open menu' : 'Открыть меню'));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); }
});
window.addEventListener('resize', () => { if (innerWidth > 760) closeMenu(); });
