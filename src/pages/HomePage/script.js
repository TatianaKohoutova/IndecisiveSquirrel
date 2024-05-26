const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuClassic = document.querySelector('.menu');

const hamburgerLines = document.querySelectorAll('.line');

hamburgerMenu.addEventListener('click', () => {
  menuClassic.classList.toggle('open');
});

hamburgerLines.forEach((prvek) => {
  hamburgerMenu.addEventListener('click', () => {
    prvek.classList.toggle('open');
  });
});
