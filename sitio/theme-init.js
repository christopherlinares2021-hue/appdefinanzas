/* Se ejecuta antes de pintar para que no haya parpadeo: elige claro/oscuro por la hora de Venezuela (UTC-4),
   salvo que la persona haya forzado un modo con el botón sol/luna (se recuerda en este dispositivo). */
(function () {
  var h = new Date(Date.now() - 4 * 3600 * 1000).getUTCHours();
  var mode = h >= 6 && h < 18 ? 'light' : 'dark';
  try { var o = localStorage.getItem('afm-theme'); if (o === 'light' || o === 'dark') mode = o; } catch (e) { /* sin almacenamiento: queda el automático */ }
  document.documentElement.setAttribute('data-theme', mode);
  document.documentElement.style.colorScheme = mode;
})();
