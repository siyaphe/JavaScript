//ELEMENT SELECTORS

// Single Element selectors
// console.log(document.getElementById('my-form'));
//     // const form = document.getElementById('my-form');
//     // console.log(form);
// console.log(document.querySelector('.container'));

// Multiple Element Selector
// // console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));


// // MANIPULATION THE DOM
// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'malia';
// ul.children[1].innerHTML = 'Medhi';
// ul.lastElementChild.innerHTML = '<h1>Pieri</h1>';

// const button = document.querySelector('.button');
// button.style.background = 'red';
// button.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items')
//     .lastElementChild.innerHTML = '<h1>Hello</h1>';
// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#Users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = ('Please enter all fields');
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('Li');
        li.appendChild(document.createTexteNode(`$
        {nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);
    }    
}


//clear fields
nameInput.value = '';
emailInput.value = '';

