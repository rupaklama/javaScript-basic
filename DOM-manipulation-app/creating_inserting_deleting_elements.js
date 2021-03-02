'use strict';

// CREATING ELEMENTS

// DOM createElement() Method
// The createElement() method creates an Element Node with the specified name.
// Tip: After the element is created,
// use the append or prepend method to insert it to the document.
const message = document.createElement('div'); // create div element

// NOTE: now we can add classes to this new div element with classList property
// This property is useful to 'add, remove and toggle CSS classes' on an element.
// The classList property is read-only, however, you can modify it by using the add() and remove() methods.
message.classList.add('cookie-message');

// textContent - simply inserts plain text
message.textContent = 'We use cookies to improve functionality and analytics.';

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

// NOTE: we can also append as a 'last child' element
header.append(message);

// NOTE - before() method is used to insert element or text before the given element
// after() method is used to insert element or text after the given element
header.before(message);
header.after(message);

// NOTE - DELETE ELEMENTS, remove()
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
  // old way of doing same thing with DOM traversing
  // message.parentElement.removeChild(message);
});

// NOTE:
// 'innerHTML' parses content as HTML, so it takes longer.
// 'nodeValue' uses straight text, does not parse HTML, and is faster.
// 'textContent' uses straight text, does not parse HTML, and is faster.
// 'innerText' Takes styles into consideration. It won't get hidden text for instance.
