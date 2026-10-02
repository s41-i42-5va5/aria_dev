'use strict';
const isEnglish = document.documentElement.lang === 'en';
const steps = isEnglish ? {
  contract: { name: 'FEATURE CONTRACT', kicker: 'FIRST, DEFINE THE OUTCOME', title: 'What should\nwe achieve?', description: 'Define the expected outcome, requirements and conditions that must be met before the task can be accepted.', items: [['Measurable outcome', 'OUTCOME'], ['Material requirements', 'REQUIREMENTS'], ['Acceptance criteria', 'ACCEPTANCE']], footer: 'The contract is fixed before code changes begin' },
  context: { name: 'PROJECT CONTEXT', kicker: 'DECISIONS CONNECTED TO REAL CODE', title: 'What does this\nchange affect?', description: 'Check the repository state, affected components, dependencies and risks before starting the task.', items: [['Current project state', 'STATE'], ['Components and dependencies', 'SYSTEM MAP'], ['Recorded decisions', 'HISTORY']], footer: 'The project map is checked against the current code' },
  verify: { name: 'EVIDENCE BUNDLE', kicker: 'EVERY CHECK LEAVES A VERIFIABLE RECORD', title: 'What has actually\nbeen verified?', description: 'Run the required checks. // A.R.I.A. records the results and links them to the requirements and code state.', items: [['Check command and result', 'RECEIPT'], ['Saved output', 'RAW OUTPUT'], ['Links to acceptance criteria', 'ACCEPTANCE']], footer: 'Failed checks or changed code block completion' },
  accept: { name: 'ACCEPTED STATE', kicker: 'ACCEPTANCE IS A SEPARATE STEP', title: 'Can we accept\nthe result?', description: 'Check the evidence against the acceptance criteria. The team workflow also verifies the merge and required checks.', items: [['Evidence for requirements', 'EVIDENCE'], ['Verified final state', 'STATE'], ['Record of the accepted change', 'HISTORY']], footer: 'Accepted results are recorded in project history' }
} : {
  contract: { name: 'FEATURE CONTRACT', kicker: 'СНАЧАЛА — ОПРЕДЕЛЕНИЕ РЕЗУЛЬТАТА', title: 'Что должно\nполучиться?', description: 'Зафиксируйте ожидаемый результат, требования и условия, при которых задача будет принята.', items: [['Измеримый результат', 'OUTCOME'], ['Материальные требования', 'REQUIREMENTS'], ['Критерии приёмки', 'ACCEPTANCE']], footer: 'Контракт фиксируется до изменения кода' },
  context: { name: 'PROJECT CONTEXT', kicker: 'РЕШЕНИЯ СВЯЗАНЫ С РЕАЛЬНЫМ КОДОМ', title: 'На что влияет\nизменение?', description: 'Проверьте состояние репозитория, затронутые компоненты, зависимости и риски перед выполнением задачи.', items: [['Текущее состояние проекта', 'STATE'], ['Компоненты и зависимости', 'SYSTEM MAP'], ['Зафиксированные решения', 'HISTORY']], footer: 'Карта проекта сверяется с актуальным кодом' },
  verify: { name: 'EVIDENCE BUNDLE', kicker: 'У ПРОВЕРКИ ЕСТЬ ПРОВЕРЯЕМЫЙ СЛЕД', title: 'Что действительно\nпроверено?', description: 'Выполните необходимые проверки. // A.R.I.A. сохраняет результаты и связывает их с требованиями и состоянием кода.', items: [['Команда и результат проверки', 'RECEIPT'], ['Сохранённый вывод', 'RAW OUTPUT'], ['Связь с критериями приёмки', 'ACCEPTANCE']], footer: 'Ошибка или изменившийся код блокируют закрытие' },
  accept: { name: 'ACCEPTED STATE', kicker: 'ПРИНЯТИЕ — ОТДЕЛЬНЫЙ ЭТАП', title: 'Можно принять\nрезультат?', description: 'Сверьте доказательства с критериями приёмки. В командном контуре дополнительно проверяются merge и обязательные checks.', items: [['Доказательства по требованиям', 'EVIDENCE'], ['Проверенное итоговое состояние', 'STATE'], ['Запись о принятом изменении', 'HISTORY']], footer: 'Принятый результат сохраняется в истории проекта' }
};
function setStep(button) {
  const data = steps[button.dataset.step];
  document.querySelectorAll('.step').forEach(tab => { const active = tab === button; tab.classList.toggle('active', active); tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; });
  document.getElementById('workflow-panel').setAttribute('aria-labelledby', button.id);
  for (const [id, value] of Object.entries({ 'artifact-name': data.name, 'artifact-kicker': data.kicker, 'artifact-description': data.description, 'artifact-footer': data.footer })) document.getElementById(id).textContent = value;
  const title = document.getElementById('artifact-title'); title.replaceChildren();
  data.title.split('\n').forEach((line, index) => { if (index) title.append(document.createElement('br')); title.append(document.createTextNode(line)); });
  const items = document.getElementById('artifact-items'); items.replaceChildren();
  data.items.forEach(([label, key]) => { const row = document.createElement('div'); const dot = document.createElement('span'); dot.className = 'item-dot'; dot.setAttribute('aria-hidden', 'true'); const text = document.createElement('span'); text.textContent = label; const tag = document.createElement('small'); tag.textContent = key; row.append(dot, text, tag); items.append(row); });
}
const tools = isEnglish ? {
  codex: { label: 'CODEX PACKAGE', description: 'Open the // A.R.I.A. package for Codex and run these commands in order:', command: 'RUN_ARIA.cmd doctor', diagnostic: 'Check the environment', requirement: 'Live GitHub operations require an internet connection and configured access.' },
  claude: { label: 'CLAUDE CODE PACKAGE', description: 'Open the // A.R.I.A. package for Claude Code and run these commands in order:', command: 'RUN_ARIA.cmd claude status', diagnostic: 'Check the integration; then run RUN_ARIA.cmd doctor', requirement: 'Requires an installed and authenticated Claude Code, plus a supported Git Bash or WSL environment.' }
} : {
  codex: { label: 'ПОСТАВКА ДЛЯ CODEX', description: 'Откройте папку поставки // A.R.I.A. для Codex и последовательно выполните:', command: 'RUN_ARIA.cmd doctor', diagnostic: 'Проверить окружение', requirement: 'Для живых операций GitHub нужны интернет и настроенный доступ.' },
  claude: { label: 'ПОСТАВКА ДЛЯ CLAUDE CODE', description: 'Откройте папку поставки // A.R.I.A. для Claude Code и последовательно выполните:', command: 'RUN_ARIA.cmd claude status', diagnostic: 'Проверить интеграцию; затем RUN_ARIA.cmd doctor', requirement: 'Нужны установленный и авторизованный Claude Code, а также поддерживаемый Git Bash или WSL.' }
};
function setTool(button) {
  const data = tools[button.dataset.tool];
  document.querySelectorAll('[data-tool]').forEach(tab => { const active = tab === button; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; });
  document.getElementById('setup-panel').setAttribute('aria-labelledby', button.id);
  for (const [id, value] of Object.entries({ 'setup-label': data.label, 'setup-description': data.description, 'diagnostic-command': data.command, 'diagnostic-description': data.diagnostic, 'setup-requirement': data.requirement })) document.getElementById(id).textContent = value;
}
function bindTabs(selector, update, vertical) {
  const buttons = [...document.querySelectorAll(selector)];
  buttons.forEach(button => {
    button.addEventListener('click', () => update(button));
    button.addEventListener('keydown', event => {
      const keys = vertical ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
      if (![...keys, 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const index = buttons.indexOf(button);
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (index + (event.key === keys[0] ? -1 : 1) + buttons.length) % buttons.length;
      update(buttons[next]); buttons[next].focus();
    });
  });
}
bindTabs('.step', setStep, true);
bindTabs('[data-tool]', setTool, false);
const menuButton = document.querySelector('.menu-toggle');
const menu = document.getElementById('navigation');
const menuLabels = isEnglish ? { open: 'Open menu', close: 'Close menu' } : { open: 'Открыть меню', close: 'Закрыть меню' };
function closeMenu() { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', menuLabels.open); }
menuButton.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? menuLabels.close : menuLabels.open); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
window.addEventListener('resize', () => { if (window.innerWidth > 520) closeMenu(); });
