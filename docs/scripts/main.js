// =========================
// Sempre voltar para a intro ao recarregar
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});
// NAVEGAÇÃO ENTRE SEÇÕES COM TÚNEL DO TEMPO
const tunnel = document.getElementById('tunnelTransition');
let tunnelTimeout = null;

document.querySelectorAll('.nav-hint').forEach(hint => {
  hint.addEventListener('click', function(e) {
    const targetSelector = this.getAttribute('data-target');
    const targetSection = document.querySelector(targetSelector);
    if (targetSection) {
      // Ativa efeito túnel
      tunnel.classList.add('active');
      clearTimeout(tunnelTimeout);
      tunnelTimeout = setTimeout(() => {
        tunnel.classList.remove('active');
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }, 600);
    }
    // Inicia música só a partir da floresta
    if (targetSelector === '.floresta' && !audioStarted) {
      startExperience();
    }
    e.stopPropagation();
  });
});
// ELEMENTOS
// =========================
const audio = document.getElementById("ambientSound");
const introSection = document.querySelector(".intro");
const restartBtn = document.getElementById("restart");
const sections = document.querySelectorAll(".section");
const light = document.querySelector(".light-overlay");

// =========================
// ÁUDIO
// =========================
let audioStarted = false;

function startExperience() {
  if (!audioStarted) {
    audio.volume = 0;
    audio.play().catch(() => {});

    let volume = 0;
    const fadeAudio = setInterval(() => {
      if (volume < 0.4) {
        volume += 0.02;
        audio.volume = volume;
      } else {
        clearInterval(fadeAudio);
      }
    }, 200);

    audioStarted = true;
  }
}

// =========================
// ENTRADA
// =========================
// ENTRADA COM TÚNEL DO TEMPO
introSection.addEventListener("click", () => {
  tunnel.classList.add('active');
  clearTimeout(tunnelTimeout);
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
    setTimeout(() => {
      tunnel.classList.remove('active');
    }, 600);
  }, 600);
});

// =========================
// RESTART
// =========================
restartBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  audio.pause();
  audio.currentTime = 0;
  audioStarted = false;
});

// =========================
// NAVEGAÇÃO ENTRE SEÇÕES
// =========================

// =========================
// INTERSECTION OBSERVER (SUAVIDADE PRO)
// =========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.3
});

sections.forEach(section => observer.observe(section));

// =========================
// SCROLL MASTER (OTIMIZADO)
// =========================
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const progress = scrollY / pageHeight;

  // 🎧 SOM DINÂMICO
  let dynamicVolume;

  if (progress < 0.3) {
    dynamicVolume = 0.2 + progress;
  } else if (progress < 0.7) {
    dynamicVolume = 0.5;
  } else {
    dynamicVolume = 0.5 - (progress - 0.7);
  }

  audio.volume = Math.max(0.2, Math.min(dynamicVolume, 0.6));

  // 🌿 PARALLAX REAL (NAS CAMADAS)
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const offset = rect.top;

    const speed = offset * 0.05;

    section.style.setProperty(
      "--parallax-offset",
      `${speed}px`
    );

    // aplica direto na pseudo camada via style hack
    section.style.setProperty(
      "--scale-dynamic",
      1.1 + Math.abs(offset) / 2000
    );
  });

  // 🎥 LUZ (SCROLL BASE)
  const posY = 30 + progress * 40;

  let intensity;

  if (progress < 0.3) {
    intensity = progress * 0.3;
  } else if (progress < 0.7) {
    intensity = 0.3;
  } else {
    intensity = 0.3 - (progress - 0.7);
  }

  light.style.setProperty("--lightY", `${posY}%`);
  light.style.setProperty("--lightIntensity", intensity);
});

// =========================
// LUZ SEGUE MOUSE (CAMADA PREMIUM)
// =========================
window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  light.style.background = `
    radial-gradient(
      circle at ${x}% ${y}%,
      rgba(255,255,255,0.12),
      transparent 60%
    )
  `;
});

// =========================
// PARTÍCULAS
// =========================
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "0";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticles() {
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      speedY: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.3
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.y -= p.speedY;

    if (p.y < 0) {
      p.y = canvas.height;
      p.x = Math.random() * canvas.width;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

createParticles();
animateParticles();