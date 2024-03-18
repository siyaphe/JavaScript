//ELEMENT SELECTORS

// Single Element selectors
// console.log(document.getElementById('my-form'));
//     // const form = document.getElementById('my-form');
//     // console.log(form);
// console.log(document.querySelector('.container'));

// Multiple Element Selector
// // console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));


// MANIPULATION THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'malia';
ul.children[1].innerHTML = 'Medhi';
ul.lastElementChild.innerHTML = '<h1>Pieri</h1>';

const button = document.querySelector('.button');
button.style.background = 'red';

