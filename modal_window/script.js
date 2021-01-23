'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal); // NodeList(3) [button1, button2, button3]

// function to open modal - DRY
const openModal = () => {
  // class name's classList property's method - remove
  // removing class '.hidden', NOTE: NO DOT here, dot is only for querySelector
  modal.classList.remove('hidden'); // we can chain more classes here

  // removing overlay's hidden class
  overlay.classList.remove('hidden');
};

// NodeList is an array holding all the elements, we can loop through it.
// i is the standard for 'counter' variable name in js
// counter initialization, condition & iteration-counter update
for (let i = 0; i < btnOpenModal.length; i++) {
  // clg(btnOpenModal[i]) - display each button element
  btnOpenModal[i].addEventListener('click', openModal);
}

// NOTE: now we can select multiple elements with 'same class' - querySelectorAll &
// do something with each of them with 'for loop'.

// function to close modal - DRY
const closeModal = () => {
  // adding class to hide the modal & overlay
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// not calling function below as it gets call right away when the code executes,
// we want to call it on 'click'
btnCloseModal.addEventListener('click', closeModal); // closeModal() not going to work here

// when clicking outside of modal
overlay.addEventListener('click', closeModal); // added function to call on click


// on escape key
// e - when keydown event happens, javaScript passes an Event Object as an arg to the function
// So that we can access Event Object's properties & methods
document.addEventListener('keydown', (e) => {
  console.log(e);
  // if (e.keyCode === 27) {
  //   closeModal()
  // }

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // to check if the modal contains 'hidden' class
    // inverting boolean value 
    // if (!modal.classList.contains('hidden')) {
    //   closeModal()
    // }

    closeModal()
  }
});
