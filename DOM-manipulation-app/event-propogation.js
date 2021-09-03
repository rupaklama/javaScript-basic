'use strict';

// Event Propagation: Bubbling and Capturing;
// Propagation means bubbling up to parent elements or capturing down to child elements

// Event propagation is a way to describe the “stack” of events that are fired in a web browser.
// So a click on the a tag also clicks on the row, the table, the div in which the table is nested,
// and anything else all the way out to document

// stopPropagation() Event Method
// The stopPropagation() method of the Event interface prevents further propagation of the current event
// in the capturing and bubbling phases. It does not, however, prevent any default behaviors from occurring;
// for instance, clicks on links are still processed.

// NOTE: stopPropagation() method prevents propagation of the CURRENT EVENT

// EVENT BUBBLING - DEFAULT BEHAVIOUR OF addEventListener() method
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// random color - rgb(255, 255, 255)
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// parent
// NOTE- SAME Target Element because all of the Event Handlers are handling EXACT SAME EVENT

// 'target' is the element that triggered the event (e.g., the user clicked on)
// 'currentTarget' is the element that the event listener is attached to.

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    // e.currentTarget is the element in which event handler is attached
    console.log('nav bar - parent', e.target, e.currentTarget); 
    
    // NOTE: In an event handler, 'this' keyword points always to the 'Element' on which
    // the Event Handler is attached - here is the '.nav__link', a tag
    this.style.backgroundColor = randomColor();
    
     // note - 'this' keyword & e.currentTarget is exactly the same in any event handler
    console.log(e.currentTarget === this); // true
    
    // STOPPING Event Bubbling with stopPropagation() Event Method
    // e.stopPropagation();
  },
  // 'true' - now the Event Handler No Longer listen to Bubbling Events instead to CAPTURING Events
  true // be default this value is set to FALSE
  // NOTE - CAPTURING is rarely use these days
);

// first child
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('nav links - first child', e.target, e.currentTarget); // same target element
  
  this.style.backgroundColor = randomColor();
});

// NOTE: if we really want to CATCH EVENTS in CAPTURING PHASE, we can define a THIRD PARAMETER
// in the addEventListener() method

// inner child in first child
document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log(
    'nav link - inner child in first child',
    e.target,
    e.currentTarget
  ); // same target element
  // NOTE: In an event handler, 'this' keyword points always to the 'Element' on which
  // the Event Handler is attached - here is the '.nav__link', a tag
  this.style.backgroundColor = randomColor(); // applying style

  // current target is exactly the same with 'this' keyword
  // 'this' keyword is also pointing to the element that an event listener is attached too
  console.log(e.currentTarget === this); // true

  // STOPPING Event Bubbling with stopPropagation() Event Method
  // e.stopPropagation();
});
