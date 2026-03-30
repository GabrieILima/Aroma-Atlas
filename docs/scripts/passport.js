const passportCatalog = [
  {
    id: "brasil",
    name: "Brasil",
    country: "Brasil",
    region: "Amazonia brasileira",
    status: "discovered",
    signature: "Verde umido, resina dourada e calor tropical em movimento.",
    ritual: "Uma assinatura vibrante que lembra floresta viva, pele aquecida pelo sol e exuberancia sensorial.",
    notes: ["folhas amassadas", "umidade mineral", "resina macia", "terra profunda"]
  },
  {
    id: "rios-vivos",
    name: "Rios Vivos",
    country: "Peru",
    region: "Margens translucidas",
    status: "locked",
    signature: "Brisa aquatica, pedra fria e nevoa andina sobre vales antigos.",
    ritual: "Uma leitura que evoca altitude, minerais umidos e a memoria serena das montanhas peruanas.",
    notes: ["nevoa da manha", "pedra umida", "erva fria", "correnteza fresca"]
  },
  {
    id: "sol-da-copa",
    name: "Sol da Copa",
    country: "Colombia",
    region: "Clareira dourada",
    status: "locked",
    signature: "Luz dourada, flor branca e calor aromatico de montanhas ensolaradas.",
    ritual: "Um territorio que lembra cafe fresco, claridade vibrante e exuberancia floral colombiana.",
    notes: ["flor solar", "grao tostado", "folha aquecida", "madeira clara"]
  },
  {
    id: "raiz-profunda",
    name: "Raiz Profunda",
    country: "Bolivia",
    region: "Subsolo da floresta",
    status: "locked",
    signature: "Terra escura, raiz umida e ar rarefeito de paisagens amplas e silenciosas.",
    ritual: "A descoberta abre um acorde mais terroso e contemplativo, inspirado em altitude, barro e profundidade.",
    notes: ["solo molhado", "raiz densa", "barro frio", "rastro terroso"]
  },
  {
    id: "orvalho-negro",
    name: "Orvalho Negro",
    country: "Equador",
    region: "Crepusculo vegetal",
    status: "locked",
    signature: "Sombra fria, flor escura e mineralidade sutil entre vulcao e neblina.",
    ritual: "Um perfil mais misterioso, com frescor elevado e um fundo que lembra altitude equatoriana e solo vulcanico.",
    notes: ["folha escura", "orvalho frio", "acorde vulcanico", "madeira crepuscular"]
  },
  {
    id: "resina-do-sol",
    name: "Resina do Sol",
    country: "Venezuela",
    region: "Ambar da mata",
    status: "locked",
    signature: "Luz quente, resina dourada e brilho tropical de paisagens amplas.",
    ritual: "Um territorio mais radiante, com calor luminoso e um rastro balsamico que lembra sol intenso e vegetacao viva.",
    notes: ["resina ambar", "calor luminoso", "casca dourada", "rastro balsamico"]
  },
  {
    id: "chuva-de-londres",
    name: "Bruma de Veludo",
    country: "Inglaterra",
    region: "Bruma urbana",
    status: "locked",
    signature: "Cha preto, couro limpo e chuva fria sobre pedra antiga.",
    ritual: "A leitura revela uma elegancia contida, entre neblina fina, jardins verdes e tecidos de corte impecavel.",
    notes: ["bergamota seca", "cha preto", "rosa contida", "madeira polida"]
  },
  {
    id: "atelier-dourado",
    name: "Véu de Iris",
    country: "França",
    region: "Elegancia floral",
    status: "locked",
    signature: "Iris macia, rosa luminosa e um acorde aveludado de perfumaria classica.",
    ritual: "Um territorio de flores refinadas, textura polida e um acabamento que lembra luxo silencioso.",
    notes: ["iris polida", "rosa cremosa", "almiscar macio", "po de luxo"]
  },
  {
    id: "sol-de-toscana",
    name: "Jardim de Ouro",
    country: "Itália",
    region: "Jardim mediterraneo",
    status: "locked",
    signature: "Citricos vivos, ervas aromaticas e calor dourado sobre pedra clara.",
    ritual: "A descoberta combina frescor luminoso, elegancia ensolarada e um fundo de couro macio e ervas nobres.",
    notes: ["bergamota radiante", "manjericao fino", "flor de laranjeira", "couro macio"]
  },
  {
    id: "luz-do-norte",
    name: "Luz do Norte",
    country: "Finlândia",
    region: "Silencio boreal",
    status: "locked",
    signature: "Ar gelado, madeira clara e pureza mineral sob uma luz quase azul.",
    ritual: "Um acorde limpo e contemplativo, inspirado em lagos frios, bétulas claras e na quietude finlandesa.",
    notes: ["ar cristalino", "boreal verde", "madeira palida", "musk gelado"]
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

function loadPassportState() {
  const baseDiscovered = passportCatalog
    .filter((item) => item.status === "discovered")
    .map((item) => item.id);

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved || !Array.isArray(saved.discovered)) {
      return new Set(baseDiscovered);
    }

    return new Set([...baseDiscovered, ...saved.discovered]);
  } catch {
    return new Set(baseDiscovered);
  }
}

let discoveredIds = loadPassportState();

function savePassportState() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      discovered: Array.from(discoveredIds)
    })
  );
}

function getPassportItems() {
  return passportCatalog.map((item) => ({
    ...item,
    discovered: discoveredIds.has(item.id),
    displayName: discoveredIds.has(item.id) ? item.country : item.name
  }));
}

function renderList(list, container, type) {
  if (!list.length && type === "discovered") {
    container.innerHTML = `
      <article class="empty-state">
        <p>Nenhuma fragrancia foi registrada ainda. Toque um frasco com NFC para iniciar o atlas.</p>
      </article>
    `;
    return;
  }

  container.innerHTML = list
    .map((item) => {
      const badge = item.discovered ? "registrada" : "nao descoberta";
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
        <article class="passport-card ${item.discovered ? "discovered" : "locked"}">
          <div class="card-top">
            <div>
              <span class="eyebrow">${item.region}</span>
              <h3>${item.displayName}</h3>
            </div>
            <span class="badge">${badge}</span>
          </div>
          ${details}
        </article>
      `;
    })
    .join("");
}

function renderActions(items) {
  nfcActions.innerHTML = items
    .map((item) => {
      const disabled = item.discovered ? "disabled" : "";
      const label = item.discovered ? "ja registrado" : "simular leitura NFC";
      return `
        <article class="action-card">
          <div>
            <span class="eyebrow">${item.region}</span>
            <h3>${item.displayName}</h3>
          </div>
          <p>${item.signature}</p>
          <button class="discover-button" type="button" data-id="${item.id}" ${disabled}>${label}</button>
        </article>
      `;
    })
    .join("");
}

function updateStats(items) {
  const total = items.length;
  const discovered = items.filter((item) => item.discovered).length;
  const percent = Math.round((discovered / total) * 100);

  discoveredCount.textContent = String(discovered);
  progressLabel.textContent = `${discovered} de ${total} territorios encontrados`;
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
  updateStats(items);
}

nfcActions.addEventListener("click", (event) => {
  const button = event.target.closest(".discover-button");
  if (!button) {
    return;
  }

  const { id } = button.dataset;
  if (!id) {
    return;
  }

  discoveredIds.add(id);
  savePassportState();
  renderPassport();
});

resetPassport.addEventListener("click", () => {
  discoveredIds = new Set(
    passportCatalog.filter((item) => item.status === "discovered").map((item) => item.id)
  );
  savePassportState();
  renderPassport();
});

renderPassport();
