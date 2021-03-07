'use strict';

// Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.
// The idea is that if we have a lot of elements handled in a similar way,
// then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
// In the handler we get 'event.target' to see where the event actually happened and handle it

// In 'Event Delegation' basically we need Two Steps
// 1. add the Event Listener to a Common Parent Element of all the Elements
// 2. Determine what element originated the event with 'event.target' to apply event handler

// closest() method - finding closest top level parent element
// NOTE- Closest method finds 'Parent' no matter elements how far up in the dom tree
// closest() method searches up the DOM tree for the closest element which matches a specified CSS selector.
// It starts at the element itself, then tests the parent, grandparent, and so on until a match is found.
// Will return 'itself' or the matching ancestor. If no such element exists, it returns null.

// To get the closest element by a selector, you use the element.closest() method:
// const closestElement = targetElement.closest(selector);
// The closest() method starts with the targetElement and travel up to the DOM tree
// until it finds the element that matches the 'selector'.
// The method returns null if no such element exists.

// The following code selects the list item with the class category-1 and changes the color of the list item to red:
// start from the category-1
const e = document.querySelector('li.category-1');
e.style.color = 'red';

// The following code selects the closest <ul> element of the selected element and
// changes the background of the selected element to yellow:
// highlight the closet element
const closet = e.closest('ul');
closet.style.background = 'yellow';

// The following selects the closest list item element. The closest() method starts with the target element.
// NOTE- Since the target element matches with the selector, the closest() method stops searching:
// start from the category-1
// const e = document.querySelector('li.category-3');
// e.style.color = 'red';

// // highlight the closet element
// const closet = e.closest('li');
// closet.style.background = 'yellow';
