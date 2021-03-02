'use strict';

// Selecting Elements

// selecting top html element - document
// documentElement - to select Entire Document of any WEB PAGE because document is window object, not an html element
// NOTE: In the window object, select ENTIRE WEB PAGE
console.log(document.documentElement); // <html>...</html>, selects entire web page
// NOTE: If we want to apply CSS for the entire page, we always need to select 'documentElement'

// Note: we can also select specific elements in a page
// NOTE: In the window object, select HEAD Element
console.log(document.head);

// body
console.log(document.body);

// NOTE: FOR ALL ABOVE ELEMENTS WE DON'T EVEN NEED TO WRITE ANY SELECTORS like querySelector()

// NOTE: DOM querySelector() Method is not only available on DOCUMENT (document.)
// but also on ALL THE ELEMENTS, frequently use to select CHILD elements

// DOM querySelector() Method
// querySelector() method returns the first element that matches a specified CSS selector(s) in the document
// Note: The querySelector() method only returns the first element that matches the specified selectors.
// To return all the matches, use the querySelectorAll() method instead - Array of Node Elements
console.log(document.querySelector('.header')); // <header class="header"></header>

// NodeList(4) [section#section--1.section, section#section--2.section, section#section--3.section,
// section.section.section--sign-up]
const allSections = document.querySelectorAll('.section'); // all sections
console.log(allSections);

// DOM getElementById() Method
// getElementById() method returns the element that has the ID attribute with the specified value
// NOTE: we don't need CSS Selectors here like ('.', '#') those are only for querySelector() Method
console.log(document.getElementById('section--1'));

// DOM getElementsByTagName() Method
// Get all elements in the document with the specified tag name
// The getElementsByTagName() method returns a collection of all elements in the document
// with the specified tag name, as an HTMLCollection object - Array of Nodes

// The HTMLCollection object represents a collection of nodes. - Array of Nodes
// The nodes can be accessed by index numbers. The index starts at 0.
// To get all the buttons - all the elements with the name of 'button'
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// DOM getElementsByClassName() Method
// The getElementsByClassName() method returns a collection of all elements in the document
// with the specified class name, as an HTMLCollection object  - Array of Nodes
// The HTMLCollection object represents a collection of nodes. - Array of Nodes
// The nodes can be accessed by index numbers. The index starts at 0.
console.log(document.getElementsByClassName('btn'));
