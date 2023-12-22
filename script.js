document.addEventListener('DOMContentLoaded', function () {
  var menuContainer = document.getElementById('menu-container');
  var hamburger = document.getElementById('hamburger');
  var autoCloseMenu; // Variable für den Timeout

  // Funktion, die das Menü umschaltet
  function toggleMenu() {
    menuContainer.classList.toggle('active');
    resetAutoCloseMenu(); // Setzt den automatischen Schließ-Timeout zurück, wenn das Menü umgeschaltet wird
  }

  // Funktion, die das Menü automatisch schließt
  function autoClose() {
    if (menuContainer.classList.contains('active')) {
      menuContainer.classList.remove('active');
    }
  }

  // Funktion, um den automatischen Schließ-Timeout zurückzusetzen
  function resetAutoCloseMenu() {
    clearTimeout(autoCloseMenu); // Stoppt den vorherigen Timeout
    autoCloseMenu = setTimeout(autoClose, 5000); // Setzt einen neuen Timeout
  }

  // Event-Listener für das Hamburger-Icon
  hamburger.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMenu();
  });

  // Event-Listener für das gesamte Dokument
  document.addEventListener('click', function(event) {
    if (!menuContainer.contains(event.target) && menuContainer.classList.contains('active')) {
      toggleMenu();
    }
  });

  // Event-Listener für Interaktionen mit dem Menü
  menuContainer.addEventListener('mouseenter', resetAutoCloseMenu);
  menuContainer.addEventListener('mouseleave', resetAutoCloseMenu);

  // Initialisiert den automatischen Schließ-Timeout, wenn die Seite geladen wird
  resetAutoCloseMenu();
});
