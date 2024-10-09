// Lang const
const btnLang =document.querySelector('#btn-lang');
const listLang = document.querySelector('#list-lang');

// Contact const
const btn = document.querySelector('#btn-list');
const list = document.querySelector('#list');

// Lang event
// btnLeng.addEventListener('click', () => {
//     if (listLeng.classList.contains('open-lang') == true) {
//         listLeng.classList.remove('open-lang');
//     } else {
//         listLeng.classList.add('open-lang');
//     }
// })

// Contact event
btn.addEventListener('click', () => {
    if (list.classList.contains('open-contact') == true) {
        list.classList.remove('open-contact');
    } else {
        list.classList.add('open-contact');
    }
})