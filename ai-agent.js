/* Avia — Scripted AI Bot for €CERT Certificate of Audit Revenue */
(function () {
  'use strict';
  var state = { isOpen: false };
  function el(id) { return document.getElementById(id); }

  var CONTRACT = 'BZ7ZJA3FgWshS9fqhhavfBXZ8165aC7h4FUhCrztcQjg';
  var POOL = '7fJh68EFNEnjMNzSQNrJMykVdNwD9wggmPNDhLuW4zPp';
  var AUDT_CONTRACT = '4EqVmfTc2ftfdcXCbR95UEsoMdab3WstSj5MEPVW2kqb';

  var KB = {
    'what': {
      title: 'What is €CERT?',
      answer: [
        '**€CERT (Certificate of Audit Revenue)** — the revenue layer of AviaTrust on Solana.',
        '',
        '€CERT combines **four fintech models** in one token:',
        '',
        '**1. Revenue Share** — 20% of audit fees',
        '**2. Staking Rewards** — earn €AUDT + €PROOF',
        '**3. Insurance Pool** — 10% reserve for audited projects',
        '**4. Governance** — vote on ecosystem params',
        '',
        'Hold €CERT → own the audit economy.',
        '',
        '📄 Contract: `' + CONTRACT + '`',
        '⛓ Chain: Solana (Token-2022, 1% transfer fee)'
      ].join('\n')
    },
    'revenue': {
      title: 'How Revenue Share works',
      answer: [
        '**Revenue Share — 20% of audit fees**',
        '',
        '**Flow:**',
        '· Project pays €AUDT for audit',
        '· Auditor gets 80%',
        '· 20% goes to distribution pool',
        '· €CERT holders receive proportional share',
        '',
        '**Example:**',
        '· Project pays 1,000 €AUDT (€10)',
        '· Auditor receives €8',
        '· Pool gets €2',
        '· You own 1% of €CERT → receive €0.02',
        '',
        '**Payouts:** weekly in USDC or €PROOF.'
      ].join('\n')
    },
    'staking': {
      title: 'How Staking works',
      answer: [
        '**Staking Rewards**',
        '',
        'Stake €CERT → earn €AUDT + €PROOF.',
        '',
        '**Three levels:**',
        '· 30 days → 5% APY in €AUDT',
        '· 90 days → 12% APY in €AUDT',
        '· 365 days → 25% APY in €AUDT + €PROOF bonus',
        '',
        '**Why stake:**',
        '· Passive income in working units',
        '· More €AUDT = more audit power',
        '· Longer stake = higher reward'
      ].join('\n')
    },
    'insurance': {
      title: 'How Insurance Pool works',
      answer: [
        '**Insurance Pool**',
        '',
        '10% of audit fees go to reserve pool.',
        '',
        '**What it covers:**',
        '· If audited project is exploited',
        '· Due to missed vulnerability',
        '· Affected users get compensation',
        '',
        '**Why it matters:**',
        '· Economic incentive for quality audit',
        '· Auditor risks reputation + future income',
        '· Users have real protection'
      ].join('\n')
    },
    'governance': {
      title: 'How Governance works',
      answer: [
        '**Governance — vote on ecosystem**',
        '',
        '€CERT holders vote on:',
        '· Revenue Share % (default 20%)',
        '· Insurance Pool % (default 10%)',
        '· Audit standards',
        '· New tools integration',
        '· Budget allocation',
        '',
        '**Mechanism:**',
        '· 1 €CERT = 1 vote',
        '· Proposals on-chain',
        '· Execution automatic'
      ].join('\n')
    },
    'buy': {
      title: 'How to buy €CERT?',
      answer: [
        '**Buy €CERT on Solana:**',
        '',
        '**1. Jupiter**',
        '→ https://jup.ag/tokens/' + CONTRACT,
        '',
        '**2. OpenSea**',
        '→ https://opensea.io/token/solana/' + CONTRACT,
        '',
        '**3. Uniswap (Solana)**',
        '→ https://app.uniswap.org/explore/tokens/solana/' + CONTRACT,
        '',
        '**4. Binance Web3**',
        '→ https://app.binance.com/uni-qr/web3-token-details?tokenCA=' + CONTRACT,
        '',
        '💡 Recommend Jupiter for lowest slippage.'
      ].join('\n')
    },
    'contract': {
      title: 'Contract & Pool',
      answer: [
        '**€CERT Contract (Solana)**',
        '',
        '`' + CONTRACT + '`',
        '',
        '**Meteora Pool**',
        '`' + POOL + '`',
        '',
        '**Verify on:**',
        '· Solscan: https://solscan.io/token/' + CONTRACT,
        '· GeckoTerminal: https://www.geckoterminal.com/solana/pools/' + POOL,
        '· OpenSea: https://opensea.io/token/solana/' + CONTRACT
      ].join('\n')
    },
    'price': {
      title: 'Price & Target',
      answer: [
        '**€CERT Price**',
        '',
        '· Launch price: **€0.01**',
        '· Community target: **×100 → €1.00**',
        '',
        '**Live price:**',
        '· GeckoTerminal: https://www.geckoterminal.com/solana/pools/' + POOL,
        '· Jupiter: https://jup.ag/tokens/' + CONTRACT,
        '',
        '⚠️ The ×100 is a community-stated target, not a promise.'
      ].join('\n')
    },
    'ecosystem': {
      title: 'What is AviaTrust?',
      answer: [
        '**AviaTrust — aviation tokenization ecosystem on Solana.**',
        '',
        '**Audit layer:**',
        '· **€AUDT** — Audit Token (working unit)',
        '· **€PROOF** — Proof Token (certificate)',
        '· **€CERT** — Certificate of Audit Revenue (you are here)',
        '',
        '**Financial layer:**',
        '· **€ESCR** — Escrow',
        '· **€DLCT** — Tokenized Documentary LC',
        '· **€LUMP** — Lump Sum (fixed commission)',
        '',
        '**Aircraft layer:**',
        '€B787 · €A350 · €C929 · €A220 · €E195 · €IL96'
      ].join('\n')
    },
    'risk': {
      title: 'Is €CERT risky?',
      answer: [
        '**Honest answer: YES.**',
        '',
        '**Known risks:**',
        '· Price volatility',
        '· Revenue depends on audit volume',
        '· Staking locks your tokens',
        '· Insurance pool may not cover all cases',
        '',
        '**What reduces risk:**',
        '· Mint Authority disabled',
        '· Freeze Authority disabled',
        '· Utility token — revenue share',
        '',
        '⚠️ **Not financial advice.** Only invest what you can afford to lose.'
      ].join('\n')
    }
  };

  var SUGGESTIONS = [
    { key: 'what',        label: '💎 What is €CERT?' },
    { key: 'revenue',     label: '💰 Revenue Share' },
    { key: 'staking',     label: '🔒 Staking' },
    { key: 'insurance',   label: '🛡️ Insurance Pool' },
    { key: 'governance',  label: '🗳️ Governance' },
    { key: 'buy',         label: '🛒 How to buy?' },
    { key: 'contract',    label: '🔗 Contract & Pool' },
    { key: 'ecosystem',   label: '🌍 AviaTrust' },
    { key: 'risk',        label: '⚠️ Is it risky?' }
  ];

  function createUI() {
    var btn = document.createElement('button');
    btn.id = 'avia-btn';
    btn.className = 'avia-btn';
    btn.innerHTML = '<span class="avia-btn-icon">💎</span><span class="avia-btn-label">Avia</span>';
    document.body.appendChild(btn);

    var win = document.createElement('div');
    win.id = 'avia-window';
    win.className = 'avia-window';
    win.innerHTML = [
      '<div class="avia-header">',
      '  <div class="avia-header-left">',
      '    <img src="cert_logo.png" alt="Avia" class="avia-avatar" onerror="this.style.display=\'none\'" />',
      '    <div>',
      '      <div class="avia-name">Avia</div>',
      '      <div class="avia-status">AI assistant · €CERT</div>',
      '    </div>',
      '  </div>',
      '  <button class="avia-close" id="avia-close">×</button>',
      '</div>',
      '<div class="avia-messages" id="avia-messages"></div>',
      '<div class="avia-suggestions" id="avia-suggestions"></div>',
      '<div class="avia-external">',
      '  <a href="staking.html">🔒 Staking</a>',
      '  <a href="https://jup.ag/tokens/' + CONTRACT + '" target="_blank">🔄 Jupiter</a>',
      '  <a href="https://x.com/aviatrust" target="_blank">🐦 X</a>',
      '</div>',
      '<div class="avia-footer">Scripted assistant · Not financial advice</div>'
    ].join('');
    document.body.appendChild(win);

    el('avia-btn').addEventListener('click', toggle);
    el('avia-close').addEventListener('click', toggle);

    addMessage('agent', 'Hi! I am Avia — assistant for €CERT. Pick a topic below.');
    renderSuggestions();
  }

  function renderSuggestions() {
    var box = el('avia-suggestions');
    if (!box) return;
    box.innerHTML = '';
    SUGGESTIONS.forEach(function (item) {
      var b = document.createElement('button');
      b.className = 'avia-suggestion';
      b.textContent = item.label;
      b.addEventListener('click', function () { showAnswer(item.key); });
      box.appendChild(b);
    });
  }

  function addMessage(role, text) {
    var box = el('avia-messages');
    if (!box) return;
    var msg = document.createElement('div');
    msg.className = 'avia-msg avia-msg-' + role;
    var bubble = document.createElement('div');
    bubble.className = 'avia-bubble';
    bubble.innerHTML = formatText(text);
    msg.appendChild(bubble);
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
  }

  function formatText(text) {
    var safe = String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    safe = safe.replace(/`([^`]+)`/g, '<code>$1</code>');
    safe = safe.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    safe = safe.replace(/\n/g, '<br />');
    safe = safe.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    return safe;
  }

  function showAnswer(key) {
    var item = KB[key];
    if (!item) { addMessage('agent', 'Sorry, no info on that.'); return; }
    addMessage('user', item.title);
    setTimeout(function () { addMessage('agent', item.answer); }, 250);
  }

  function toggle() {
    state.isOpen = !state.isOpen;
    var win = el('avia-window');
    var btn = el('avia-btn');
    if (state.isOpen) { win.classList.add('avia-open'); btn.classList.add('avia-btn-hidden'); }
    else { win.classList.remove('avia-open'); btn.classList.remove('avia-btn-hidden'); }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', createUI);
  else createUI();
})();
