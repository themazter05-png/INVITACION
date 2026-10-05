document.addEventListener('DOMContentLoaded', function () {
  const intro = document.getElementById('intro');
  const main = document.getElementById('main');
  const openBtn = document.getElementById('open');
  const routeBtn = document.getElementById('route');
  const music = document.getElementById('music');
  const musicBtn = document.getElementById('musicBtn');
  const wa = document.getElementById('wa');

  // Abrir invitación
  function openInvitation(event) {
    if (event) event.preventDefault();
    if (intro) intro.style.display = 'none';
    if (main) {
      main.classList.remove('hide');
      main.style.display = 'block';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  if (openBtn) {
    openBtn.addEventListener('click', openInvitation);
    openBtn.addEventListener('touchend', openInvitation, { passive: false });
  }

  // Ruta dentro de la invitación
  if (routeBtn) {
    routeBtn.addEventListener('click', function (event) {
      event.preventDefault();
      const hero = document.querySelector('.hero');
      if (hero) hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Cuenta regresiva
  const target = new Date('2026-10-17T17:00:00-06:00').getTime();
  function tick() {
    let x = Math.max(0, target - Date.now());
    const d = Math.floor(x / 86400000); x %= 86400000;
    const h = Math.floor(x / 3600000); x %= 3600000;
    const m = Math.floor(x / 60000); x %= 60000;
    const s = Math.floor(x / 1000);
    [['d', d], ['h', h], ['m', m], ['s', s]].forEach(function (item) {
      const el = document.getElementById(item[0]);
      if (el) el.textContent = String(item[1]).padStart(2, '0');
    });
  }
  tick();
  setInterval(tick, 1000);

  // WhatsApp: cambia el número por el real en script.js
  if (wa) {
    const number = '521XXXXXXXXXX';
    const msg = encodeURIComponent('¡Hola Shakty! 🏴‍☠️ Confirmo mi asistencia a tu cumpleaños número 21. ¡Nos vemos en la aventura!');
    wa.href = 'https://wa.me/' + number + '?text=' + msg;
    wa.target = '_blank';
    wa.rel = 'noopener noreferrer';
  }

  // Música: es opcional; si no existe, la invitación sigue funcionando
  if (musicBtn && music) {
    musicBtn.addEventListener('click', async function () {
      try {
        if (music.paused) {
          await music.play();
          musicBtn.textContent = '♫ MÚSICA ACTIVADA';
        } else {
          music.pause();
          musicBtn.textContent = '♫ ACTIVAR MÚSICA';
        }
      } catch (error) {
        alert('Para activar la música, agrega el archivo assets/audio/musica.mp3 al repositorio.');
      }
    });
  }
});
