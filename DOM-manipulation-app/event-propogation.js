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
