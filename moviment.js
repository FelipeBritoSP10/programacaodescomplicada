

function openModal(modalId) {
  document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const menu = document.getElementById('mobile-menu');
  const menuOpenIcon = document.getElementById('menu-open');
  const menuCloseIcon = document.getElementById('menu-close');
  const menuCloseMobile = document.getElementById('menu-close-mobile');

  menuButton.addEventListener('click', function () {
      // Toggle a visibilidade do menu
      menu.classList.toggle('hidden');

      // Trocar ícones de abrir/fechar menu
      if (menu.classList.contains('hidden')) {
          menuOpenIcon.classList.remove('hidden');
          menuCloseIcon.classList.add('hidden');
      } else {
          menuOpenIcon.classList.add('hidden');
          menuCloseIcon.classList.remove('hidden');
      }
  });

  menuCloseMobile.addEventListener('click', function () {
      menu.classList.add('hidden');
      menuOpenIcon.classList.remove('hidden');
      menuCloseIcon.classList.add('hidden');
  });
});
