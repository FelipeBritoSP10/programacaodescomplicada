document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');

    // Ensure the mobile menu is closed by default
    mobileMenu.classList.add('hidden');
    menuOpenIcon.classList.remove('hidden');
    menuCloseIcon.classList.add('hidden');

    mobileMenuButton.addEventListener('click', () => {
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
      }
    });
  });


  document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});