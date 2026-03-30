const audio = document.getElementById('ambientSound');
const tunnel = document.getElementById('tunnelTransition');
const light = document.querySelector('.light-overlay');
const sections = Array.from(document.querySelectorAll('.section'));
const navHints = document.querySelectorAll('.nav-hint');
const progressDots = document.querySelectorAll('.progress-dot');
const introSection = document.querySelector('.intro');
const restartBtn = document.getElementById('restart');
const enterBtn = document.getElementById('enterExperience');
const soundToggle = document.getElementById('soundToggle');

const ventoSrc = 'assets/audio/vento.mp3';
const florestaSrc = 'assets/audio/floresta.mp3';

let audioStarted = false;
let audioMuted = false;
let currentAudioType = null;
let currentVisibleSection = introSection;
let tunnelTimeout = null;
let introActivated = false;

const sectionThemes = {
  intro: { lightY: '28%', intensity: 0.22, particleColor: '255, 236, 198', particleBoost: 0.2 },
  limiar: { lightY: '26%', intensity: 0.28, particleColor: '231, 191, 111', particleBoost: 0.35 },
  floresta: { lightY: '38%', intensity: 0.18, particleColor: '206, 232, 186', particleBoost: 0.25 },
  saberes: { lightY: '33%', intensity: 0.16, particleColor: '211, 227, 197', particleBoost: 0.22 },
  fragrancia: { lightY: '40%', intensity: 0.2, particleColor: '246, 240, 222', particleBoost: 0.18 },
  final: { lightY: '30%', intensity: 0.24, particleColor: '231, 191, 111', particleBoost: 0.12 }
};

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
    setAudioSection('vento', true);
    applySectionTheme(introSection);
    updateProgress(introSection);
  }, 30);
});

function scrollToSection(targetSection, withTunnel = true) {
  if (!targetSection) {
    return;
  }

  const performScroll = () => {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  };

  if (!withTunnel) {
    performScroll();
    return;
  }

  tunnel.classList.add('active');
  clearTimeout(tunnelTimeout);
  tunnelTimeout = window.setTimeout(() => {
    performScroll();
    window.setTimeout(() => {
      tunnel.classList.remove('active');
    }, 650);
  }, 520);
}

function tryStartAudio() {
  if (audioMuted) {
    return;
  }

  audio.play().catch(() => {});
  audioStarted = true;
}

function setAudioSection(type, forcePlay = false) {
  if (currentAudioType === type && !forcePlay) {
    return;
  }

  currentAudioType = type;
  const targetSrc = type === 'vento' ? ventoSrc : florestaSrc;
  const targetVolume = type === 'vento' ? 0.35 : 0.52;

  if (!audio.src.includes(targetSrc)) {
    audio.src = targetSrc;
    audio.load();
  }

  if (!audioMuted) {
    tryStartAudio();
  }

  audio.volume = targetVolume;
}

function updateSoundToggle() {
  soundToggle.textContent = audioMuted ? 'Som da mata: desligado' : 'Som da mata: ligado';
  soundToggle.setAttribute('aria-pressed', String(!audioMuted));
  document.body.classList.toggle('sound-off', audioMuted);
}

function activateExperience() {
  if (!introActivated) {
    introActivated = true;
    scrollToSection(document.querySelector('.limiar'));
  }

  if (!audioMuted) {
    tryStartAudio();
  }
}

function updateProgress(activeSection) {
  const activeClassList = activeSection.classList;

  progressDots.forEach((dot) => {
    const matches = Array.from(activeClassList).some((className) => dot.dataset.target === `.${className}`);
    dot.classList.toggle('active', matches);
  });
}

function applySectionTheme(section) {
  if (!section) {
    return;
  }

  currentVisibleSection = section;
  updateProgress(section);

  const key = Array.from(section.classList).find((className) => sectionThemes[className]);
  const theme = sectionThemes[key] || sectionThemes.intro;

  light.style.setProperty('--light-y', theme.lightY);
  light.style.setProperty('--light-intensity', theme.intensity.toString());
  particleState.color = theme.particleColor;
  particleState.boost = theme.particleBoost;

  if (section.classList.contains('intro') || section.classList.contains('limiar')) {
    setAudioSection('vento');
  } else {
    setAudioSection('floresta');
  }
}

navHints.forEach((hint) => {
  hint.addEventListener('click', (event) => {
    event.stopPropagation();
    const targetSection = document.querySelector(hint.dataset.target);
    if (!targetSection) {
      return;
    }

    if (!audioStarted && !audioMuted) {
      tryStartAudio();
    }

    scrollToSection(targetSection);
  });
});

progressDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const targetSection = document.querySelector(dot.dataset.target);
    scrollToSection(targetSection, false);
  });
});

enterBtn.addEventListener('click', activateExperience);
introSection.addEventListener('click', (event) => {
  if (event.target.closest('button')) {
    return;
  }

  activateExperience();
});

restartBtn.addEventListener('click', () => {
  introActivated = false;
  scrollToSection(introSection, false);
  applySectionTheme(introSection);
  setAudioSection('vento', true);
});

soundToggle.addEventListener('click', () => {
  audioMuted = !audioMuted;
  if (audioMuted) {
    audio.pause();
  } else {
    setAudioSection(currentVisibleSection.classList.contains('intro') || currentVisibleSection.classList.contains('limiar') ? 'vento' : 'floresta', true);
    tryStartAudio();
  }

  updateSoundToggle();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('active');
      applySectionTheme(entry.target);
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => observer.observe(section));

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const pageHeight = Math.max(document.body.scrollHeight - window.innerHeight, 1);
  const progress = scrollY / pageHeight;

  sections.forEach((section) => {
    const offset = section.getBoundingClientRect().top;
    const speed = offset * 0.045;
    const scale = 1.06 + Math.min(Math.abs(offset) / 3000, 0.09);

    section.style.setProperty('--parallax-offset', `${speed}px`);
    section.style.setProperty('--scale-dynamic', scale.toString());
  });

  const x = 50 + Math.sin(progress * Math.PI * 2) * 10;
  light.style.setProperty('--light-x', `${x}%`);
});

window.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  light.style.setProperty('--light-x', `${x}%`);
  light.style.setProperty('--light-y', `${y}%`);
});

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.style.position = 'fixed';
canvas.style.inset = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.pointerEvents = 'none';

const particleState = {
  color: sectionThemes.intro.particleColor,
  boost: sectionThemes.intro.particleBoost
};

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = Array.from({ length: 70 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2.2 + 0.5,
    speedY: Math.random() * 0.35 + 0.08,
    driftX: Math.random() * 0.2 - 0.1,
    opacity: Math.random() * 0.24 + 0.04
  }));
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.y -= particle.speedY + particleState.boost * 0.05;
    particle.x += particle.driftX;

    if (particle.y < -10) {
      particle.y = canvas.height + 10;
      particle.x = Math.random() * canvas.width;
    }

    if (particle.x < -10) {
      particle.x = canvas.width + 10;
    }

    if (particle.x > canvas.width + 10) {
      particle.x = -10;
    }

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${particleState.color}, ${particle.opacity})`;
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createParticles();
});

updateSoundToggle();
resizeCanvas();
createParticles();
animateParticles();
