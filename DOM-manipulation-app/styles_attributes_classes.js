'use strict';

// DOM createElement() Method
// The createElement() method creates an Element Node with the specified name.
// Tip: After the element is created,
// use the append or prepend method to insert it to the document.
const message = document.createElement('div'); // create div element

// NOTE: now we can add classes to this new div element with classList property
// This property is useful to 'add, remove and toggle CSS classes' on an element.
// The classList property is read-only, however, you can modify it by using the add() and remove() methods.
message.classList.add('cookie-message');

// innerHTML - to insert HTML
message.innerHTML =
  'We use cookies to improve functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// to select the header element
const header = document.querySelector('.header');

// Tip: After the element is created,
// use the element.prepend or append method to insert it to the document.

// INSERTING ELEMENTS
// prepend() method inserts DOMString objects as Text nodes
// prepend() method adds an element as a 'first child' of the parent element - header here
header.prepend(message);

// STYLES
// applying INLINE style in an element with STYLE PROPERTY
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// ATTRIBUTES
const logo = document.querySelector('.nav__logo');
// accessing attribs
console.log(logo.alt);
console.log(logo.src); // absolute url
console.log(logo.className);

// to change attrib
logo.alt = 'my custom attrib';

// non-standard for non native attribs - our custom attribs
console.log(logo.getAttribute('designer'));
logo.setAttribute('designer', 'developer');

// to get relative url
console.log(logo.getAttribute('src'));

// same with href attribs as above
const link = document.querySelector('.nav__link--btn');
console.log(link.href); // absolute path
console.log(link.getAttribute('href')); // relative path

// DATA ATTRIBUTES - special attributes start with a word 'data' & after whatever we want
console.log(logo.dataset.versionNumber); // version-number to be 'versionNumber'
// store properties in the dataset object
// NOTE- we use 'dataset' a lots when working with UI to store data in UI - html code

// CLASSES - to work with class selectors without mutating previous classes
// NOTE- we can also pass multiple classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// don't use this
logo.clasName = 'rupak'; // this will override all the existing classes
