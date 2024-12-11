// Contact const
const btn = document.querySelector('#btn-list');
const list = document.querySelector('#list');


// Contact event
btn.addEventListener('click', () => {
    if (list.classList.contains('open-contact') == true) {
        list.classList.remove('open-contact');
    } else {
        list.classList.add('open-contact');
    }
})



window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header-nav'),
    menuItem = document.querySelectorAll('.header-nav__item'),
    humburger = document.querySelector('.burger-icon');

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('open-burger');
        menu.classList.toggle('open-nav');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            humburger.classList.toggle('open-burger');
            menu.classList.toggle('open-nav');
        })
    })
})