// Hmbugger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const openBtn = hamburger.querySelector('.iconbar');
const closeBtn = hamburger.querySelector('.icontimes');

hamburger.addEventListener('click', () => {
  console.log('Hamburger clicked!');
  mobileMenu.classList.toggle('hidden');
});
