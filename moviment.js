document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpenIcon = document.getElementById('menu-open-icon');
  const menuCloseIcon = document.getElementById('menu-close-icon');
  
  mobileMenuButton.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('hidden');
      
      if (isOpen) {
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



function openModal(modalId) {
  document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

