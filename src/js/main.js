console.log("Файл script.js успешно подключён!");

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header-menu'),
  menuItem = document.querySelectorAll('header-menu__item'),
  hamburger = document.querySelector('.menu-mob');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-mob__active');
    menu.classList.toggle('header-menu__active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('menu-mob__active');
      menu.classList.toggle('header-menu__active');
    })
  })
})
