// old way
// need to first get a coordinate of element that we want to scroll to
const s1coords = section1.getBoundingClientRect();
console.log(s1coords); // DOMRect {x: 0, y: 731, width: 753, height: 1932, top: 731, …}

// target event property returns the element that triggered the event
console.log(e.target.getBoundingClientRect());

// get current scroll position
console.log('Current scroll (x/y)', window.pageXOffset, window.pageYOffset); // vertical & horizontal - 0 338px

// Just to show we can also get height & width of Viewport/window object
console.log(
  'height/width viewport',
  document.documentElement.clientHeight,
  document.documentElement.clientWidth
); // 521 978 - height & width in pixels

// OLD WAY of scrolling
// scrollTo() is a global function available in window object
// first arg is the left position
// second arg is the top of section1
window.scrollTo(
  s1coords.left + window.pageXOffset, // current position
  s1coords.top + window.pageYOffset // current scroll
); // properties - console.log(s1coords);
// NOTE- the solution is to add (+ window.pageYOffset) in 's1coords.top' to navigate to it

// same as above with smooth scrolling
window.scrollTo({
  left: s1coords.left + window.pageXOffset, // current position - starting
  top: s1coords.top + window.pageYOffset, // current scroll - end position to navigate to
  behavior: 'smooth', // smooth scrolling effect
});

// NEW - MODERN WAY & better way of doing same as above with passing OBJECT
// simply take an element we want to scroll to & on that
// we call 'scrollIntoView()' method & pass an object to specify behavior - smooth effect
section1.scrollIntoView({ behavior: 'smooth' }); // option object
