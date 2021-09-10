'use strict';

// DOM traversing is basically walking through the DOM, one element to another
// which means we can select an element from another element.

// You can traverse in three directions:
// 1. Downwards - querySelector/querySelectorAll: children elements
// 2. Upwards - Closest(): parent elements
// 3. Sideways - siblings: In js, we can access only direct siblings - previous & next one

const h1 = document.querySelector('h1');

// 1. Downwards - querySelector/querySelectorAll  or children
// Basically selecting Child Element
// To select hightlight class which are 'children' of h1 element
console.log(h1.querySelectorAll('.hightlight'));

// to select direct children
// childNodes are not that used often
console.log(h1.childNodes); // all the nodes elements inside of h1 element

// children are use commonly to 'select direct children'
console.log(h1.children); // just the html tags/elements

// to select fist child in a parent element
h1.firstElementChild.style.color = 'white';

// to select last child in a parent element
h1.lastElementChild.style.color = 'orangered';

// 2. Upwards - Going upwards by basically selecting top level 'Parents' elements
console.log(h1.parentNode); // div.header__title
console.log(h1.parentElement); // same thing as above

// closest() method is a selector just like querySelector to find the Parent element no matter how far up in the DOM Tree
// closest() method searches up the DOM tree for the closest element which matches a specified CSS selector.
// It starts at the element itself, then tests the parent, grandparent, and so on until a match is found.
// If a match is not found, this method returns null.
// closest() method - finding closest top level parent element with class-header to h1 element
// no matter how far away it is in the DOM tree
h1.closest('.header').style.background = 'var(--gradient-secondary)'; // closest header to the h1
// NOTE: THIS IS REALLY USEFUL ALL THE TIME
// also useful when working with Event Delegation

// NOTE- querySelector method finds 'Children' elements no matter how deep in the dom tree
// NOTE- Closest method finds 'Parent' no matter elements how far up in the dom tree

// 3. Sideways - siblings: In js, we can access only direct siblings elements- previous & next one
// first child of the parent element - div, therefore no direct sibling above
// NOTE - TO FIND HTML TAG ELEMENTS
console.log(h1.previousElementSibling); // null - since none
console.log(h1.nextElementSibling); // h4 - direct sibling element comes after it

// To get all the Children/Sibling elements of One element & style them
console.log(h1.parentElement.children);
// to create into an array
[...h1.parentElement.children].forEach((el) => { 
  if (el !== h1) {
    el.style.transform = 'scale(0.5)'
  }})

// NOTE - USE METHOD ALWAYS TO FIND HTML TAG ELEMENTS
