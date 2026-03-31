const passportCatalog = [
  {
    id: "brasil",
    name: "Brasil",
    country: "Brasil",
    region: "Amazonia brasileira",
    status: "discovered",
    signature: "Verde umido, resina dourada e calor tropical em movimento.",
    ritual: "Uma assinatura vibrante que lembra floresta viva, pele aquecida pelo sol e exuberancia sensorial.",
    notes: ["folhas amassadas", "umidade mineral", "resina macia", "terra profunda"],
    theme: { glow: "rgba(111, 170, 92, 0.18)", mist: "rgba(255, 221, 150, 0.10)", tones: [392, 494, 659] }
  },
  {
    id: "rios-vivos",
    name: "Rios Vivos",
    country: "Peru",
    region: "Margens translucidas",
    status: "locked",
    signature: "Brisa aquatica, pedra fria e nevoa andina sobre vales antigos.",
    ritual: "Uma leitura que evoca altitude, minerais umidos e a memoria serena das montanhas peruanas.",
    notes: ["nevoa da manha", "pedra umida", "erva fria", "correnteza fresca"],
    theme: { glow: "rgba(142, 184, 202, 0.18)", mist: "rgba(206, 224, 234, 0.10)", tones: [349, 440, 587] }
  },
  {
    id: "sol-da-copa",
    name: "Sol da Copa",
    country: "Colombia",
    region: "Clareira dourada",
    status: "locked",
    signature: "Luz dourada, flor branca e calor aromatico de montanhas ensolaradas.",
    ritual: "Um territorio que lembra cafe fresco, claridade vibrante e exuberancia floral colombiana.",
    notes: ["flor solar", "grao tostado", "folha aquecida", "madeira clara"],
    theme: { glow: "rgba(230, 184, 92, 0.18)", mist: "rgba(248, 225, 150, 0.09)", tones: [415, 523, 698] }
  },
  {
    id: "raiz-profunda",
    name: "Raiz Profunda",
    country: "Bolivia",
    region: "Subsolo da floresta",
    status: "locked",
    signature: "Terra escura, raiz umida e ar rarefeito de paisagens amplas e silenciosas.",
    ritual: "A descoberta abre um acorde mais terroso e contemplativo, inspirado em altitude, barro e profundidade.",
    notes: ["solo molhado", "raiz densa", "barro frio", "rastro terroso"],
    theme: { glow: "rgba(156, 108, 74, 0.18)", mist: "rgba(182, 144, 122, 0.08)", tones: [330, 392, 523] }
  },
  {
    id: "orvalho-negro",
    name: "Orvalho Negro",
    country: "Equador",
    region: "Crepusculo vegetal",
    status: "locked",
    signature: "Sombra fria, flor escura e mineralidade sutil entre vulcao e neblina.",
    ritual: "Um perfil mais misterioso, com frescor elevado e um fundo que lembra altitude equatoriana e solo vulcanico.",
    notes: ["folha escura", "orvalho frio", "acorde vulcanico", "madeira crepuscular"],
    theme: { glow: "rgba(118, 116, 156, 0.18)", mist: "rgba(174, 179, 214, 0.09)", tones: [311, 466, 622] }
  },
  {
    id: "resina-do-sol",
    name: "Resina do Sol",
    country: "Venezuela",
    region: "Ambar da mata",
    status: "locked",
    signature: "Luz quente, resina dourada e brilho tropical de paisagens amplas.",
    ritual: "Um territorio mais radiante, com calor luminoso e um rastro balsamico que lembra sol intenso e vegetacao viva.",
    notes: ["resina ambar", "calor luminoso", "casca dourada", "rastro balsamico"],
    theme: { glow: "rgba(240, 171, 87, 0.18)", mist: "rgba(255, 211, 152, 0.10)", tones: [440, 554, 740] }
  },
  {
    id: "chuva-de-londres",
    name: "Bruma de Veludo",
    country: "Inglaterra",
    region: "Bruma urbana",
    status: "locked",
    signature: "Cha preto, couro limpo e chuva fria sobre pedra antiga.",
    ritual: "A leitura revela uma elegancia contida, entre neblina fina, jardins verdes e tecidos de corte impecavel.",
    notes: ["bergamota seca", "cha preto", "rosa contida", "madeira polida"],
    theme: { glow: "rgba(149, 160, 186, 0.16)", mist: "rgba(213, 220, 236, 0.09)", tones: [370, 466, 554] }
  },
  {
    id: "atelier-dourado",
    name: "Véu de Iris",
    country: "França",
    region: "Elegancia floral",
    status: "locked",
    signature: "Iris macia, rosa luminosa e um acorde aveludado de perfumaria classica.",
    ritual: "Um territorio de flores refinadas, textura polida e um acabamento que lembra luxo silencioso.",
    notes: ["iris polida", "rosa cremosa", "almiscar macio", "po de luxo"],
    theme: { glow: "rgba(213, 171, 195, 0.18)", mist: "rgba(239, 213, 229, 0.09)", tones: [392, 523, 784] }
  },
  {
    id: "sol-de-toscana",
    name: "Jardim de Ouro",
    country: "Itália",
    region: "Jardim mediterraneo",
    status: "locked",
    signature: "Citricos vivos, ervas aromaticas e calor dourado sobre pedra clara.",
    ritual: "A descoberta combina frescor luminoso, elegancia ensolarada e um fundo de couro macio e ervas nobres.",
    notes: ["bergamota radiante", "manjericao fino", "flor de laranjeira", "couro macio"],
    theme: { glow: "rgba(231, 189, 114, 0.18)", mist: "rgba(255, 224, 164, 0.10)", tones: [415, 554, 698] }
  },
  {
    id: "luz-do-norte",
    name: "Luz do Norte",
    country: "Finlândia",
    region: "Silencio boreal",
    status: "locked",
    signature: "Ar gelado, madeira clara e pureza mineral sob uma luz quase azul.",
    ritual: "Um acorde limpo e contemplativo, inspirado em lagos frios, bétulas claras e na quietude finlandesa.",
    notes: ["ar cristalino", "boreal verde", "madeira palida", "musk gelado"],
    theme: { glow: "rgba(171, 211, 230, 0.18)", mist: "rgba(219, 240, 247, 0.11)", tones: [330, 494, 659] }
  }
];

const storageKey = "aroma-atlas-passport";
const discoveredGrid = document.getElementById("discoveredGrid");
const lockedGrid = document.getElementById("lockedGrid");
const nfcActions = document.getElementById("nfcActions");
const discoveredCount = document.getElementById("discoveredCount");
const progressLabel = document.getElementById("progressLabel");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");
const resetPassport = document.getElementById("resetPassport");
const discoveryToast = document.getElementById("discoveryToast");
const historyList = document.getElementById("historyList");

let toastTimeout = null;
let revealResetTimeout = null;
let audioContext = null;
let lastDiscoveredId = null;

function getBaseDiscoveredIds() {
  return passportCatalog.filter((item) => item.status === "discovered").map((item) => item.id);
}

function createDefaultState() {
  const discovered = getBaseDiscoveredIds();
  const timestamp = new Date().toISOString();
  const history = discovered.map((id, index) => ({
    id,
    order: index + 1,
    discoveredAt: timestamp,
    base: true
  }));

  return { discovered, history };
}

function loadPassportState() {
  const fallback = createDefaultState();

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved) {
      return fallback;
    }

    if (Array.isArray(saved.discovered) && Array.isArray(saved.history)) {
      const baseIds = new Set(getBaseDiscoveredIds());
      const mergedDiscovered = Array.from(new Set([...saved.discovered, ...baseIds]));
      const knownHistoryIds = new Set(saved.history.map((entry) => entry.id));
      const baseHistory = fallback.history.filter((entry) => !knownHistoryIds.has(entry.id));
      return {
        discovered: mergedDiscovered,
        history: [...saved.history, ...baseHistory].sort((a, b) => a.order - b.order)
      };
    }

    if (Array.isArray(saved.discovered)) {
      return {
        discovered: Array.from(new Set([...saved.discovered, ...fallback.discovered])),
        history: fallback.history
      };
    }

    return fallback;
  } catch {
    return fallback;
  }
}

let passportState = loadPassportState();
let discoveredIds = new Set(passportState.discovered);
let discoveryHistory = passportState.history;

function savePassportState() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      discovered: Array.from(discoveredIds),
      history: discoveryHistory
    })
  );
}

function getHistoryEntry(id) {
  return discoveryHistory.find((entry) => entry.id === id) || null;
}

function getPassportItems() {
  return passportCatalog.map((item) => {
    const discovered = discoveredIds.has(item.id);
    const historyEntry = getHistoryEntry(item.id);

    return {
      ...item,
      discovered,
      displayName: discovered ? item.country : item.name,
      recentlyDiscovered: item.id === lastDiscoveredId,
      historyEntry
    };
  });
}

function formatDate(isoString) {
  if (!isoString) {
    return "data não disponível";
  }

  const date = new Date(isoString);
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

function getItemStyles(item) {
  const glow = item.theme?.glow || "rgba(215, 180, 108, 0.12)";
  const mist = item.theme?.mist || "rgba(255, 255, 255, 0.06)";
  const flagWash = getFlagWash(item.country);
  return `--country-glow: ${glow}; --country-mist: ${mist}; --flag-wash: ${flagWash};`;
}

function getFlagWash(country) {
  const washes = {
    "Brasil": "rgba(33, 156, 92, 0.16), rgba(237, 202, 67, 0.10), rgba(52, 104, 190, 0.08)",
    "Peru": "rgba(172, 42, 52, 0.16), rgba(255, 255, 255, 0.08), rgba(172, 42, 52, 0.12)",
    "Colombia": "rgba(232, 190, 44, 0.17), rgba(44, 80, 176, 0.10), rgba(170, 36, 38, 0.09)",
    "Bolivia": "rgba(174, 33, 44, 0.15), rgba(235, 193, 57, 0.10), rgba(42, 122, 68, 0.10)",
    "Equador": "rgba(232, 190, 44, 0.17), rgba(44, 80, 176, 0.10), rgba(170, 36, 38, 0.09)",
    "Venezuela": "rgba(232, 190, 44, 0.17), rgba(46, 71, 171, 0.10), rgba(161, 44, 58, 0.09)",
    "Inglaterra": "rgba(222, 222, 222, 0.07), rgba(170, 36, 38, 0.15), rgba(222, 222, 222, 0.05)",
    "França": "rgba(44, 72, 163, 0.14), rgba(255, 255, 255, 0.07), rgba(174, 44, 63, 0.13)",
    "Itália": "rgba(43, 122, 75, 0.14), rgba(255, 255, 255, 0.07), rgba(168, 53, 56, 0.13)",
    "Finlândia": "rgba(255, 255, 255, 0.08), rgba(66, 107, 191, 0.14), rgba(255, 255, 255, 0.05)"
  };

  return washes[country] || "rgba(255, 255, 255, 0.06), rgba(215, 180, 108, 0.05), rgba(255, 255, 255, 0.03)";
}

function showDiscoveryToast(item) {
  if (!discoveryToast) {
    return;
  }

  discoveryToast.textContent = `${item.country} revelado no passaporte sensorial`;
  discoveryToast.classList.add("visible");

  if (toastTimeout) {
    window.clearTimeout(toastTimeout);
  }

  toastTimeout = window.setTimeout(() => {
    discoveryToast.classList.remove("visible");
  }, 2200);
}

function ensureAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      return null;
    }

    audioContext = new AudioCtx();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  return audioContext;
}

function playDiscoverySound(item) {
  const ctx = ensureAudioContext();
  if (!ctx) {
    return;
  }

  const tones = item.theme?.tones || [392, 523, 659];
  const startTime = ctx.currentTime;

  tones.forEach((tone, index) => {
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = index === tones.length - 1 ? "triangle" : "sine";
    oscillator.frequency.value = tone;

    gain.gain.setValueAtTime(0.0001, startTime + index * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.08, startTime + index * 0.08 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + index * 0.08 + 0.34);

    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start(startTime + index * 0.08);
    oscillator.stop(startTime + index * 0.08 + 0.36);
  });
}

function renderList(list, container, type) {
  if (!list.length && type === "discovered") {
    container.innerHTML = `
      <article class="empty-state">
        <p>Nenhuma fragrância foi registrada ainda. Toque um frasco com NFC para iniciar o atlas.</p>
      </article>
    `;
    return;
  }

  container.innerHTML = list
    .map((item) => {
      const badge = item.discovered ? "registrada" : "não descoberta";
      const details = item.discovered
        ? `
          <p>${item.signature}</p>
          <ul class="card-list">
            ${item.notes.map((note) => `<li>${note}</li>`).join("")}
          </ul>
          <p class="card-meta">${item.ritual}</p>
        `
        : `
          <p>${item.ritual}</p>
          <ul class="card-list">
            ${item.notes.map((note) => `<li>${note}</li>`).join("")}
          </ul>
        `;

      return `
        <article class="passport-card anim-${item.id} ${item.discovered ? "discovered" : "locked"} ${item.recentlyDiscovered ? "revealed" : ""}" data-id="${item.id}" style="${getItemStyles(item)}">
          <span class="country-aura"></span>
          <span class="country-mist"></span>
          ${item.discovered ? `<span class="background-stamp">${item.country}</span>` : ""}
          <div class="card-content">
            <div class="card-top">
              <div>
                <span class="eyebrow">${item.region}</span>
                <h3>${item.displayName}</h3>
              </div>
              <span class="badge">${badge}</span>
            </div>
            ${details}
          </div>
          ${item.discovered ? '<span class="stamp">território revelado</span>' : ""}
        </article>
      `;
    })
    .join("");
}

function renderActions(items) {
  nfcActions.innerHTML = items
    .map((item) => {
      const disabled = item.discovered ? "disabled" : "";
      const label = item.discovered ? "já registrado" : "simular leitura NFC";
      return `
        <article class="action-card anim-${item.id} ${item.recentlyDiscovered ? "revealed" : ""}" data-id="${item.id}" style="${getItemStyles(item)}">
          <span class="country-aura"></span>
          <span class="country-mist"></span>
          <div class="action-content">
            <div>
              <span class="eyebrow">${item.region}</span>
              <h3>${item.displayName}</h3>
            </div>
            <p>${item.signature}</p>
            <button class="discover-button ${item.recentlyDiscovered ? "just-discovered" : ""}" type="button" data-id="${item.id}" ${disabled}>${label}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderHistory() {
  if (!historyList) {
    return;
  }

  const orderedHistory = [...discoveryHistory]
    .sort((a, b) => a.order - b.order)
    .map((entry) => ({
      ...entry,
      item: passportCatalog.find((item) => item.id === entry.id)
    }))
    .filter((entry) => entry.item);

  if (!orderedHistory.length) {
    historyList.innerHTML = `
      <article class="history-empty">
        <p>As descobertas aparecerão aqui com data e ordem de revelação.</p>
      </article>
    `;
    return;
  }

  historyList.innerHTML = orderedHistory
    .map((entry) => `
      <article class="history-item" style="--flag-wash: ${getFlagWash(entry.item.country)};">
        <span class="history-flag-wash"></span>
        <span class="history-order">${entry.order}</span>
        <div class="history-content">
          <div class="history-country">${entry.item.country}</div>
          <div class="history-meta">${entry.base ? "coleção inicial" : "território desbloqueado por NFC"}</div>
        </div>
        <div class="history-meta history-date">${formatDate(entry.discoveredAt)}</div>
      </article>
    `)
    .join("");
}

function updateStats(items) {
  const total = items.length;
  const discovered = items.filter((item) => item.discovered).length;
  const percent = Math.round((discovered / total) * 100);

  discoveredCount.textContent = String(discovered);
  progressLabel.textContent = `${discovered} de ${total} territórios encontrados`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

function renderPassport() {
  const items = getPassportItems();
  const discovered = items.filter((item) => item.discovered);
  const locked = items.filter((item) => !item.discovered);

  renderList(discovered, discoveredGrid, "discovered");
  renderList(locked, lockedGrid, "locked");
  renderActions(items);
  renderHistory();
  updateStats(items);

  if (lastDiscoveredId) {
    const revealedCard = discoveredGrid.querySelector(`[data-id="${lastDiscoveredId}"]`);
    if (revealedCard) {
      revealedCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    if (revealResetTimeout) {
      window.clearTimeout(revealResetTimeout);
    }

    revealResetTimeout = window.setTimeout(() => {
      lastDiscoveredId = null;
      renderPassport();
    }, 1400);
  }
}

nfcActions.addEventListener("click", (event) => {
  const button = event.target.closest(".discover-button");
  if (!button || button.hasAttribute("disabled")) {
    return;
  }

  const { id } = button.dataset;
  if (!id || discoveredIds.has(id)) {
    return;
  }

  const item = passportCatalog.find((entry) => entry.id === id);
  if (!item) {
    return;
  }

  discoveredIds.add(id);
  const nextOrder = discoveryHistory.length ? Math.max(...discoveryHistory.map((entry) => entry.order)) + 1 : 1;
  discoveryHistory.push({
    id,
    order: nextOrder,
    discoveredAt: new Date().toISOString(),
    base: false
  });
  lastDiscoveredId = id;

  savePassportState();
  playDiscoverySound(item);
  showDiscoveryToast(item);
  renderPassport();
});

resetPassport.addEventListener("click", () => {
  const baseState = createDefaultState();
  discoveredIds = new Set(baseState.discovered);
  discoveryHistory = baseState.history;
  lastDiscoveredId = null;
  savePassportState();
  renderPassport();
});

renderPassport();
