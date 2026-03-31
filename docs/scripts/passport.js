const passportCatalog = [
  {
    id: "brasil",
    name: "Brasil",
    country: "Brasil",
    region: "Amazonia brasileira",
    family: "Territórios Tropicais",
    rarity: "Ícone da coleção",
    edition: "Arquivo 01",
    reward: "Abre o selo-base do atlas",
    teaser: "A mata viva onde toda a coleção começa.",
    status: "discovered",
    signature: "Verde úmido, resina dourada e calor tropical em movimento.",
    ritual: "Uma assinatura vibrante que lembra floresta viva, pele aquecida pelo sol e exuberância sensorial.",
    notes: ["folhas amassadas", "umidade mineral", "resina macia", "terra profunda"],
    theme: { glow: "rgba(111,170,92,0.18)", mist: "rgba(255,221,150,0.10)", tones: [392, 494, 659] }
  },
  {
    id: "rios-vivos",
    name: "Rios Vivos",
    country: "Peru",
    region: "Margens translúcidas",
    family: "Brumas Frias",
    rarity: "Raro",
    edition: "Arquivo 02",
    reward: "Avança o selo de bruma mineral",
    teaser: "Mineral úmido, corrente fria e altitude em suspensão.",
    status: "locked",
    signature: "Brisa aquática, pedra fria e névoa andina sobre vales antigos.",
    ritual: "Uma leitura que evoca altitude, minerais úmidos e a memória serena das montanhas peruanas.",
    notes: ["névoa da manhã", "pedra úmida", "erva fria", "correnteza fresca"],
    theme: { glow: "rgba(142,184,202,0.18)", mist: "rgba(206,224,234,0.10)", tones: [349, 440, 587] }
  },
  {
    id: "sol-da-copa",
    name: "Sol da Copa",
    country: "Colômbia",
    region: "Clareira dourada",
    family: "Territórios Tropicais",
    rarity: "Exclusivo",
    edition: "Arquivo 03",
    reward: "Libera um carimbo solar da coleção",
    teaser: "Flor clara, calor aromático e brilho ensolarado.",
    status: "locked",
    signature: "Luz dourada, flor branca e calor aromático de montanhas ensolaradas.",
    ritual: "Um território que lembra café fresco, claridade vibrante e exuberância floral colombiana.",
    notes: ["flor solar", "grão tostado", "folha aquecida", "madeira clara"],
    theme: { glow: "rgba(230,184,92,0.18)", mist: "rgba(248,225,150,0.09)", tones: [415, 523, 698] }
  },
  {
    id: "raiz-profunda",
    name: "Raiz Profunda",
    country: "Bolívia",
    region: "Subsolo da floresta",
    family: "Brumas Frias",
    rarity: "Raro",
    edition: "Arquivo 04",
    reward: "Aprofunda o capítulo terroso da coleção",
    teaser: "Terra densa, barro frio e silêncio profundo.",
    status: "locked",
    signature: "Terra escura, raiz úmida e ar rarefeito de paisagens amplas e silenciosas.",
    ritual: "A descoberta abre um acorde mais terroso e contemplativo, inspirado em altitude, barro e profundidade.",
    notes: ["solo molhado", "raiz densa", "barro frio", "rastro terroso"],
    theme: { glow: "rgba(156,108,74,0.18)", mist: "rgba(182,144,122,0.08)", tones: [330, 392, 523] }
  },
  {
    id: "orvalho-negro",
    name: "Orvalho Negro",
    country: "Equador",
    region: "Crepúsculo vegetal",
    family: "Brumas Frias",
    rarity: "Colecionador",
    edition: "Arquivo 05",
    reward: "Abre o primeiro selo de bruma vulcânica",
    teaser: "Flor escura, bruma fria e mineralidade secreta.",
    status: "locked",
    signature: "Sombra fria, flor escura e mineralidade sutil entre vulcão e neblina.",
    ritual: "Um perfil mais misterioso, com frescor elevado e um fundo que lembra altitude equatoriana e solo vulcânico.",
    notes: ["folha escura", "orvalho frio", "acorde vulcânico", "madeira crepuscular"],
    theme: { glow: "rgba(118,116,156,0.18)", mist: "rgba(174,179,214,0.09)", tones: [311, 466, 622] }
  },
  {
    id: "resina-do-sol",
    name: "Resina do Sol",
    country: "Venezuela",
    region: "Âmbar da mata",
    family: "Territórios Tropicais",
    rarity: "Exclusivo",
    edition: "Arquivo 06",
    reward: "Amplia o acervo radiante do atlas",
    teaser: "Resina quente, brilho vivo e ouro vegetal.",
    status: "locked",
    signature: "Luz quente, resina dourada e brilho tropical de paisagens amplas.",
    ritual: "Um território mais radiante, com calor luminoso e um rastro balsâmico que lembra sol intenso e vegetação viva.",
    notes: ["resina âmbar", "calor luminoso", "casca dourada", "rastro balsâmico"],
    theme: { glow: "rgba(240,171,87,0.18)", mist: "rgba(255,211,152,0.10)", tones: [440, 554, 740] }
  },
  {
    id: "chuva-de-londres",
    name: "Bruma de Veludo",
    country: "Inglaterra",
    region: "Bruma urbana",
    family: "Jardins Nobres",
    rarity: "Colecionador",
    edition: "Arquivo 07",
    reward: "Inicia a família de jardins nobres",
    teaser: "Couro limpo, névoa fina e gesto contido.",
    status: "locked",
    signature: "Chá preto, couro limpo e chuva fria sobre pedra antiga.",
    ritual: "A leitura revela uma elegância contida, entre neblina fina, jardins verdes e tecidos de corte impecável.",
    notes: ["bergamota seca", "chá preto", "rosa contida", "madeira polida"],
    theme: { glow: "rgba(149,160,186,0.16)", mist: "rgba(213,220,236,0.09)", tones: [370, 466, 554] }
  },
  {
    id: "atelier-dourado",
    name: "Véu de Iris",
    country: "França",
    region: "Elegância floral",
    family: "Jardins Nobres",
    rarity: "Prestígio",
    edition: "Arquivo 08",
    reward: "Libera um selo de haute parfumerie",
    teaser: "Textura polida, pó nobre e flor velada.",
    status: "locked",
    signature: "Iris macia, rosa luminosa e um acorde aveludado de perfumaria clássica.",
    ritual: "Um território de flores refinadas, textura polida e um acabamento que lembra luxo silencioso.",
    notes: ["iris polida", "rosa cremosa", "almíscar macio", "pó de luxo"],
    theme: { glow: "rgba(213,171,195,0.18)", mist: "rgba(239,213,229,0.09)", tones: [392, 523, 784] }
  },
  {
    id: "sol-de-toscana",
    name: "Jardim de Ouro",
    country: "Itália",
    region: "Jardim mediterrâneo",
    family: "Jardins Nobres",
    rarity: "Prestígio",
    edition: "Arquivo 09",
    reward: "Eleva a coleção para assinatura solar",
    teaser: "Cítrico dourado, erva nobre e claridade macia.",
    status: "locked",
    signature: "Cítricos vivos, ervas aromáticas e calor dourado sobre pedra clara.",
    ritual: "A descoberta combina frescor luminoso, elegância ensolarada e um fundo de couro macio e ervas nobres.",
    notes: ["bergamota radiante", "manjericão fino", "flor de laranjeira", "couro macio"],
    theme: { glow: "rgba(231,189,114,0.18)", mist: "rgba(255,224,164,0.10)", tones: [415, 554, 698] }
  },
  {
    id: "luz-do-norte",
    name: "Luz do Norte",
    country: "Finlândia",
    region: "Silêncio boreal",
    family: "Luzes do Norte",
    rarity: "Ultra raro",
    edition: "Arquivo 10",
    reward: "Concede o selo final de exclusividade fria",
    teaser: "Ar cristalino, madeira pálida e luz azulada.",
    status: "locked",
    signature: "Ar gelado, madeira clara e pureza mineral sob uma luz quase azul.",
    ritual: "Um acorde limpo e contemplativo, inspirado em lagos frios, bétulas claras e na quietude finlandesa.",
    notes: ["ar cristalino", "boreal verde", "madeira pálida", "musk gelado"],
    theme: { glow: "rgba(171,211,230,0.18)", mist: "rgba(219,240,247,0.11)", tones: [330, 494, 659] }
  }
];

const storageKey = "aroma-atlas-passport-v2";
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
const familyProgress = document.getElementById("familyProgress");
const collectorStatus = document.getElementById("collectorStatus");
const collectionCode = document.getElementById("collectionCode");
const nextUnlockHint = document.getElementById("nextUnlockHint");
const lastDiscovery = document.getElementById("lastDiscovery");
const rarestDiscovery = document.getElementById("rarestDiscovery");
const nextSeal = document.getElementById("nextSeal");
const sequenceReward = document.getElementById("sequenceReward");
const nextTerritoryTeaser = document.getElementById("nextTerritoryTeaser");
const collectionStatusTitle = document.getElementById("collectionStatusTitle");
const collectionStatusCopy = document.getElementById("collectionStatusCopy");
const continentBadge = document.getElementById("continentBadge");
const continentBadgeCopy = document.getElementById("continentBadgeCopy");
const collectionBadges = document.getElementById("collectionBadges");

const familyOrder = [
  "Territórios Tropicais",
  "Brumas Frias",
  "Jardins Nobres",
  "Luzes do Norte"
];

const familyRewards = {
  "Territórios Tropicais": "Selo especial de exuberância tropical",
  "Brumas Frias": "Selo especial de bruma mineral",
  "Jardins Nobres": "Selo especial de alta elegância",
  "Luzes do Norte": "Selo especial de exclusividade boreal"
};

const familyClues = {
  "Territórios Tropicais": "folhas úmidas, ouro vegetal e calor em suspensão",
  "Brumas Frias": "pedra fria, vapor leve e silêncio de altitude",
  "Jardins Nobres": "texturas polidas, flor velada e gesto refinado",
  "Luzes do Norte": "claridade azulada, ar cristalino e madeira pálida"
};

const rarityRank = {
  "Ícone da coleção": 5,
  "Ultra raro": 4,
  "Prestígio": 3,
  "Colecionador": 2,
  "Exclusivo": 1,
  "Raro": 0
};

let toastTimeout = null;
let audioContext = null;
let lastDiscoveredId = null;
let revealResetTimeout = null;

function getBaseDiscoveredIds() {
  return passportCatalog.filter((item) => item.status === "discovered").map((item) => item.id);
}

function createDefaultState() {
  const discovered = getBaseDiscoveredIds();
  const timestamp = new Date().toISOString();
  const history = discovered.map((id, index) => ({ id, order: index + 1, discoveredAt: timestamp, base: true }));
  return { discovered, history };
}

function loadPassportState() {
  const fallback = createDefaultState();
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved) return fallback;
    const discovered = Array.isArray(saved.discovered)
      ? Array.from(new Set([...saved.discovered, ...fallback.discovered]))
      : fallback.discovered;
    const history = Array.isArray(saved.history) ? [...saved.history] : fallback.history;
    const known = new Set(history.map((entry) => entry.id));
    fallback.history.forEach((entry) => {
      if (!known.has(entry.id)) history.push(entry);
    });
    return { discovered, history: history.sort((a, b) => a.order - b.order) };
  } catch {
    return fallback;
  }
}

let passportState = loadPassportState();
let discoveredIds = new Set(passportState.discovered);
let discoveryHistory = passportState.history;

function savePassportState() {
  localStorage.setItem(storageKey, JSON.stringify({ discovered: Array.from(discoveredIds), history: discoveryHistory }));
}

function getHistoryEntry(id) {
  return discoveryHistory.find((entry) => entry.id === id) || null;
}

function getPassportItems() {
  return passportCatalog.map((item) => {
    const discovered = discoveredIds.has(item.id);
    return {
      ...item,
      discovered,
      historyEntry: getHistoryEntry(item.id),
      displayName: discovered ? item.country : item.name,
      recentlyDiscovered: item.id === lastDiscoveredId
    };
  });
}

function formatDate(isoString) {
  if (!isoString) return "data não disponível";
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(isoString));
}

function formatDiscoveryNumber(order) {
  if (!order) return "--/10";
  return `Descoberta ${String(order).padStart(2, "0")}/${String(passportCatalog.length).padStart(2, "0")}`;
}

function getNextLockedItem(items) {
  const nearUnlockFamily = getFamilyStats(items).find((family) => family.remaining === 1);
  const lockedItems = items.filter((item) => !item.discovered);
  if (nearUnlockFamily) {
    return lockedItems.find((item) => item.family === nearUnlockFamily.name) || lockedItems[0] || null;
  }
  return lockedItems[0] || null;
}

function getRarestDiscoveredItem(items) {
  return items
    .filter((item) => item.discovered)
    .sort((a, b) => (rarityRank[b.rarity] ?? -1) - (rarityRank[a.rarity] ?? -1))[0] || null;
}

function getFlagWash(country) {
  const washes = {
    Brasil: "rgba(33,156,92,0.16), rgba(237,202,67,0.10), rgba(52,104,190,0.08)",
    Peru: "rgba(172,42,52,0.16), rgba(255,255,255,0.08), rgba(172,42,52,0.12)",
    "Colômbia": "rgba(232,190,44,0.17), rgba(44,80,176,0.10), rgba(170,36,38,0.09)",
    "Bolívia": "rgba(174,33,44,0.15), rgba(235,193,57,0.10), rgba(42,122,68,0.10)",
    Equador: "rgba(232,190,44,0.17), rgba(44,80,176,0.10), rgba(170,36,38,0.09)",
    Venezuela: "rgba(232,190,44,0.17), rgba(46,71,171,0.10), rgba(161,44,58,0.09)",
    Inglaterra: "rgba(222,222,222,0.07), rgba(170,36,38,0.15), rgba(222,222,222,0.05)",
    França: "rgba(44,72,163,0.14), rgba(255,255,255,0.07), rgba(174,44,63,0.13)",
    Itália: "rgba(43,122,75,0.14), rgba(255,255,255,0.07), rgba(168,53,56,0.13)",
    Finlândia: "rgba(255,255,255,0.08), rgba(66,107,191,0.14), rgba(255,255,255,0.05)"
  };
  return washes[country] || "rgba(255,255,255,0.06), rgba(215,180,108,0.05), rgba(255,255,255,0.03)";
}

function getItemStyles(item) {
  return `--country-glow: ${item.theme.glow}; --country-mist: ${item.theme.mist}; --flag-wash: ${getFlagWash(item.country)};`;
}

function ensureAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    audioContext = new AudioCtx();
  }
  if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
  return audioContext;
}

function playDiscoverySound(item) {
  const ctx = ensureAudioContext();
  if (!ctx) return;
  const start = ctx.currentTime;
  item.theme.tones.forEach((tone, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = index === item.theme.tones.length - 1 ? "triangle" : "sine";
    osc.frequency.value = tone;
    gain.gain.setValueAtTime(0.0001, start + index * 0.09);
    gain.gain.exponentialRampToValueAtTime(0.06, start + index * 0.09 + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + index * 0.09 + 0.42);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start + index * 0.09);
    osc.stop(start + index * 0.09 + 0.44);
  });
}

function showDiscoveryToast(item) {
  if (!discoveryToast) return;
  discoveryToast.textContent = `${item.country} revelado no passaporte sensorial`;
  discoveryToast.classList.add("visible");
  if (toastTimeout) window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => discoveryToast.classList.remove("visible"), 2200);
}

function getCollectorLabel(discoveredCountValue) {
  if (discoveredCountValue >= 10) return "Curador absoluto do atlas";
  if (discoveredCountValue >= 7) return "Colecionador de prestígio";
  if (discoveredCountValue >= 4) return "Explorador sensorial";
  return "Colecionador iniciante";
}

function getCollectorCopy(discoveredCountValue) {
  if (discoveredCountValue >= 10) return "Seu acervo atingiu a forma integral do atlas e já opera como coleção concluída.";
  if (discoveredCountValue >= 7) return "Seu passaporte já transmite raridade, permanência e desejo de coleção consolidada.";
  if (discoveredCountValue >= 4) return "Seu acervo começa a ganhar densidade, repertório e assinatura de colecionador.";
  return "Seu acervo acaba de começar e já carrega o primeiro registro do atlas.";
}

function getFamilyStats(items) {
  const families = items.reduce((acc, item) => {
    if (!acc[item.family]) {
      acc[item.family] = {
        name: item.family,
        total: 0,
        discovered: 0,
        reward: familyRewards[item.family] || item.reward
      };
    }
    acc[item.family].total += 1;
    if (item.discovered) acc[item.family].discovered += 1;
    return acc;
  }, {});

  return familyOrder
    .filter((family) => families[family])
    .map((family) => {
      const info = families[family];
      return {
        ...info,
        remaining: info.total - info.discovered,
        percent: Math.round((info.discovered / info.total) * 100)
      };
    });
}

function renderFamilies(items) {
  const families = getFamilyStats(items);

  familyProgress.innerHTML = families.map((info) => {
    const familyState = info.remaining === 0
      ? "família concluída"
      : info.remaining === 1
        ? "falta 1 para o selo"
        : `${info.remaining} territórios restantes`;

    return `
      <article class="family-card ${info.remaining === 1 ? "family-card-near" : ""} ${info.remaining === 0 ? "family-card-complete" : ""}">
        <div class="family-head">
          <div>
            <span class="eyebrow">família</span>
            <h3>${info.name}</h3>
          </div>
          <span class="rarity-chip">${info.discovered}/${info.total}</span>
        </div>
        <div class="family-meter"><div class="family-meter-fill" style="width:${info.percent}%"></div></div>
        <div class="family-meta">${info.percent}% concluído • ${familyState}</div>
        <p class="family-clue">${familyClues[info.name] || ""}</p>
        <p class="family-reward">${info.reward}</p>
      </article>
    `;
  }).join("");
}

function renderOwnership(items) {
  const discovered = items.filter((item) => item.discovered);
  const families = getFamilyStats(items);
  const completedFamilies = families.filter((family) => family.remaining === 0);
  const discoveredCountValue = discovered.length;

  if (collectionStatusTitle) {
    collectionStatusTitle.textContent = getCollectorLabel(discoveredCountValue);
  }

  if (collectionStatusCopy) {
    collectionStatusCopy.textContent = getCollectorCopy(discoveredCountValue);
  }

  const southAmericaTotal = passportCatalog.filter((item) =>
    ["Brasil", "Peru", "Colômbia", "Bolívia", "Equador", "Venezuela"].includes(item.country)
  ).length;
  const southAmericaDiscovered = discovered.filter((item) =>
    ["Brasil", "Peru", "Colômbia", "Bolívia", "Equador", "Venezuela"].includes(item.country)
  ).length;

  if (continentBadge) {
    continentBadge.textContent = southAmericaDiscovered === southAmericaTotal ? "Américas concluídas" : "Américas em formação";
  }

  if (continentBadgeCopy) {
    continentBadgeCopy.textContent = southAmericaDiscovered === southAmericaTotal
      ? "Todos os territórios americanos foram incorporados ao acervo privado."
      : `Faltam ${southAmericaTotal - southAmericaDiscovered} territórios para consolidar a coleção continental.`;
  }

  if (!collectionBadges) return;

  const badges = [];

  completedFamilies.forEach((family) => {
    badges.push({
      label: family.name,
      type: "família olfativa concluída",
      copy: `Selo liberado por concluir ${family.name.toLowerCase()}.`
    });
  });

  if (southAmericaDiscovered === southAmericaTotal) {
    badges.push({
      label: "Américas",
      type: "coleção continental completa",
      copy: "Todos os territórios americanos foram revelados no passaporte."
    });
  }

  collectionBadges.innerHTML = badges.length
    ? badges.map((badge) => `
        <article class="collection-badge-card">
          <span class="collection-badge-ring" aria-hidden="true"></span>
          <div class="collection-badge-body">
            <span class="certificate-label">${badge.type}</span>
            <strong class="ownership-value">${badge.label}</strong>
            <p class="ownership-copy">${badge.copy}</p>
          </div>
        </article>
      `).join("")
    : `
        <article class="collection-badge-empty">
          <p>Concluir famílias ou territórios continentais fará os primeiros badges permanentes aparecerem aqui.</p>
        </article>
      `;
}

function renderList(list, container, type) {
  if (!list.length && type === "discovered") {
    container.innerHTML = `<article class="empty-state"><p>Nenhuma fragrância foi registrada ainda. Toque um frasco com NFC para iniciar o atlas.</p></article>`;
    return;
  }

  container.innerHTML = list.map((item) => {
    const badge = item.discovered ? "edição revelada" : "território raro";
    const certificate = item.historyEntry ? `
      <div class="card-certificate luxury-certificate">
        <div>
          <div class="certificate-label">descoberta</div>
          <div class="certificate-value">${formatDiscoveryNumber(item.historyEntry.order)}</div>
        </div>
        <div>
          <div class="certificate-label">data</div>
          <div class="certificate-value">${formatDate(item.historyEntry.discoveredAt)}</div>
        </div>
        <div>
          <div class="certificate-label">assinatura</div>
          <div class="certificate-value">acervo privado</div>
        </div>
        <div>
          <div class="certificate-label">arquivo olfativo</div>
          <div class="certificate-value">${item.rarity}</div>
        </div>
      </div>
    ` : `
      <div class="card-certificate luxury-certificate">
        <div><div class="certificate-label">edição revelada</div><div class="certificate-value">${item.edition}</div></div>
        <div><div class="certificate-label">território raro</div><div class="certificate-value">${item.rarity}</div></div>
      </div>
    `;

    const body = item.discovered ? `
      <p>${item.signature}</p>
      <ul class="card-list">${item.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
      <p class="card-meta">${item.ritual}</p>
      ${certificate}
    ` : `
      <div class="silhouette-panel" aria-hidden="true">
        <span class="silhouette-orb"></span>
        <span class="silhouette-trace"></span>
        <span class="silhouette-marker"></span>
      </div>
      <p class="teaser-copy">${item.teaser}</p>
      <div class="silhouette-line">silhueta selada • ${item.family}</div>
      <p>${item.reward}</p>
      ${certificate}
    `;

    return `
      <article class="passport-card ${item.discovered ? "discovered" : "locked"} ${item.recentlyDiscovered ? "ceremonial-reveal" : ""}" data-id="${item.id}" style="${getItemStyles(item)}">
        <span class="country-aura"></span>
        <span class="country-mist"></span>
        ${item.discovered ? `<span class="background-stamp">${item.country}</span>` : ""}
        <div class="card-content">
          <div class="card-top">
            <div>
              <span class="eyebrow">${item.region}</span>
              <h3>${item.displayName}</h3>
            </div>
            <div class="card-top-right">
              <span class="rarity-chip">${item.rarity}</span>
              <span class="badge">${badge}</span>
            </div>
          </div>
          ${body}
        </div>
        ${item.discovered ? '<span class="stamp">território revelado</span>' : ""}
      </article>
    `;
  }).join("");
}

function renderActions(items) {
  nfcActions.innerHTML = items.map((item) => {
    const disabled = item.discovered ? "disabled" : "";
    const label = item.discovered ? "já registrado" : "simular leitura NFC";
    return `
      <article class="action-card" data-id="${item.id}" style="${getItemStyles(item)}">
        <span class="country-aura"></span>
        <span class="country-mist"></span>
        <div class="action-content">
          <div class="card-top">
            <div>
              <span class="eyebrow">${item.region}</span>
              <h3>${item.displayName}</h3>
            </div>
            <span class="rarity-chip">${item.discovered ? "edição revelada" : item.rarity}</span>
          </div>
          <p>${item.teaser}</p>
          <div class="silhouette-line">${item.discovered ? "acervo privado" : `silhueta selada • ${item.family}`}</div>
          <button class="discover-button" type="button" data-id="${item.id}" ${disabled}>${label}</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderHistory() {
  const orderedHistory = [...discoveryHistory]
    .sort((a, b) => a.order - b.order)
    .map((entry) => ({ ...entry, item: passportCatalog.find((item) => item.id === entry.id) }))
    .filter((entry) => entry.item);

  if (!orderedHistory.length) {
    historyList.innerHTML = `<article class="history-empty"><p>As descobertas aparecerão aqui com data e ordem de revelação.</p></article>`;
    return;
  }

  historyList.innerHTML = orderedHistory.map((entry) => `
    <article class="history-item" style="--flag-wash:${getFlagWash(entry.item.country)};">
      <span class="history-flag-wash"></span>
      <span class="history-order">${entry.order}</span>
      <div class="history-content">
        <div class="history-country">${entry.item.country}</div>
        <div class="history-meta">${entry.base ? "coleção inicial" : `${entry.item.rarity} • ${entry.item.edition}`}</div>
      </div>
      <div class="history-meta history-date">${formatDate(entry.discoveredAt)}</div>
    </article>
  `).join("");
}

function updateStats(items) {
  const total = items.length;
  const discovered = items.filter((item) => item.discovered).length;
  const percent = Math.round((discovered / total) * 100);
  const remaining = total - discovered;
  const code = `ATLAS-${String(discovered).padStart(4, "0")}`;
  const families = getFamilyStats(items);
  const nearUnlockFamily = families.find((family) => family.remaining === 1);
  const completedFamilies = families.filter((family) => family.remaining === 0).length;
  const latestEntry = [...discoveryHistory].sort((a, b) => b.order - a.order)[0] || null;
  const latestItem = latestEntry ? passportCatalog.find((item) => item.id === latestEntry.id) : null;
  const rarestItem = getRarestDiscoveredItem(items);
  const nextLockedItem = getNextLockedItem(items);

  discoveredCount.textContent = String(discovered);
  progressLabel.textContent = `${discovered} de ${total} territórios encontrados`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
  collectorStatus.textContent = `${getCollectorLabel(discovered)} • ${completedFamilies} ${completedFamilies === 1 ? "família concluída" : "famílias concluídas"} e ${remaining} territórios ainda sustentam a curiosidade da coleção.`;
  collectionCode.textContent = code;

  if (nearUnlockFamily) {
    nextUnlockHint.textContent = `Falta 1 descoberta para desbloquear o selo especial de ${nearUnlockFamily.name}.`;
  } else if (remaining > 0) {
    nextUnlockHint.textContent = `Falta ${remaining === 1 ? "1 descoberta" : `${remaining} descobertas`} para concluir o atlas.`;
  } else {
    nextUnlockHint.textContent = "Atlas completo. Todas as famílias foram reveladas.";
  }

  if (lastDiscovery) {
    lastDiscovery.textContent = latestItem ? `${latestItem.country} • ${formatDiscoveryNumber(latestEntry.order)}` : "aguardando revelação";
  }

  if (rarestDiscovery) {
    rarestDiscovery.textContent = rarestItem ? `${rarestItem.country} • ${rarestItem.rarity}` : "ainda não encontrado";
  }

  if (nextSeal) {
    nextSeal.textContent = nearUnlockFamily ? `selo de ${nearUnlockFamily.name}` : remaining > 0 ? "próxima família em construção" : "atlas integral concluído";
  }

  if (sequenceReward) {
    const rewardUnlocked = discovered >= 3;
    sequenceReward.textContent = rewardUnlocked
      ? "Privilégio liberado: acesso ao capítulo reservado do atlas após a terceira descoberta."
      : `Ao descobrir ${Math.max(0, 3 - discovered)} ${3 - discovered === 1 ? "território" : "territórios"}, um privilégio exclusivo da coleção será liberado.`;
    sequenceReward.classList.toggle("sequence-reward-unlocked", rewardUnlocked);
  }

  if (nextTerritoryTeaser) {
    nextTerritoryTeaser.textContent = nextLockedItem
      ? `${nextLockedItem.teaser} ${nextLockedItem.family === "Jardins Nobres" ? "Um território floral de alta elegância aguarda revelação." : "O próximo capítulo já insinua sua presença no atlas."}`
      : "Todas as paisagens foram reveladas. O atlas repousa completo.";
  }
}

function renderPassport() {
  const items = getPassportItems();
  renderFamilies(items);
  renderOwnership(items);
  renderList(items.filter((item) => item.discovered), discoveredGrid, "discovered");
  renderList(items.filter((item) => !item.discovered), lockedGrid, "locked");
  renderActions(items);
  renderHistory();
  updateStats(items);

  if (lastDiscoveredId) {
    const revealedCard = discoveredGrid.querySelector(`[data-id="${lastDiscoveredId}"]`);
    if (revealedCard) revealedCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    if (revealResetTimeout) window.clearTimeout(revealResetTimeout);
    revealResetTimeout = window.setTimeout(() => {
      lastDiscoveredId = null;
    }, 1600);
  }
}

nfcActions.addEventListener("click", (event) => {
  const button = event.target.closest(".discover-button");
  if (!button || button.hasAttribute("disabled")) return;

  const { id } = button.dataset;
  const item = passportCatalog.find((entry) => entry.id === id);
  if (!item || discoveredIds.has(id)) return;

  discoveredIds.add(id);
  const nextOrder = discoveryHistory.length ? Math.max(...discoveryHistory.map((entry) => entry.order)) + 1 : 1;
  discoveryHistory.push({ id, order: nextOrder, discoveredAt: new Date().toISOString(), base: false });
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
