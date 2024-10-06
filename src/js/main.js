const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('dropdown-list__active') == true) {
        menu.classList.remove('dropdown-list__active');
    } else {
        menu.classList.add('dropdown-list__active');
    }
})