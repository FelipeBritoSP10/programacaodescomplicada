

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

  menuButton.addEventListener('click', function () {
    const isMenuOpen = menu.classList.contains('block');
    
    if (isMenuOpen) {
      menu.classList.add('hidden');
      menu.classList.remove('block');
      menuOpenIcon.classList.remove('hidden');
      menuCloseIcon.classList.add('hidden');
    } else {
      menu.classList.add('block');
      menu.classList.remove('hidden');
      menuOpenIcon.classList.add('hidden');
      menuCloseIcon.classList.remove('hidden');
    }
  });
});
