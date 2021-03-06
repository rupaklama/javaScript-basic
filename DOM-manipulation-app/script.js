'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// TO OPEN MODAL
// for (let i = 0; i < btnsOpenModal.length; i++)
// btnsOpenModal[i].addEventListener('click', openModal);

// same as above with forEach() method - EASIER way with CLEANER syntax & really EASY to access current INDEX
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// PAGE NAVIGATION

// SMOOTH SCROLLING
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// adding event listener
btnScrollTo.addEventListener('click', e => {
  // NEW - MODERN WAY & better way of doing same as above with passing OBJECT
  // simply take an element we want to scroll to & on that
  // we call 'scrollIntoView()' method & pass an object to specify behavior - smooth effect
  section1.scrollIntoView({ behavior: 'smooth' }); // option object
});

// NOTE- Smooth Navigation from the NAV BAR to the related Section in a page
// selecting all 'a tag' links element which return a node list - new array
// using forEach() in order to attach event handler to each of the elements
// document.querySelectorAll('.nav__link').forEach(el =>
//   el.addEventListener('click', function (e) {
//     // stopping anchors(#section--1) to navigate to a section
//     // which is a default behaviour of the browser so that to implement smooth navigation
//     e.preventDefault();

//     // NOTE: In an event handler, 'this' keyword points always to the 'Element' on which
//     // the Event Handler is attached - here is the '.nav__link', a tag
//     const id = this.getAttribute('href'); // to select an attrib to get its value
//     // console.log(id); // #section--1

//     // using 'scrollIntoView()' for smooth navigation
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

// NOTE- Doing the same above with 'Event Delegation'
// NOTE - Using power of 'Event Bubbling' to implement 'Event Delegation' for
// Smooth Navigation from the NAV BAR to the related Section in a page

// Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.
// The idea is that if we have a lot of elements handled in a similar way,
// then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
// In the handler we get 'event.target' to see where the event actually happened and handle it

// In 'Event Delegation' basically we need Two Steps
// 1. add the Event Listener to a Common Parent Element of all the Elements
// 2. Determine what element originated the event with 'event.target' to apply event handler
document
  .querySelector('.nav__links') // parent element
  .addEventListener('click', function (e) {
    // need to figure it out where the Event is occurred
    // console.log(e.target);
    e.preventDefault();

    // NOTE - HERE WE ARE NOT USING CALLBACK FUNCTIONS to assign an event handler on each elements
    // instead of assigning a handler to each of them,
    // we put a single handler on their 'parent element' above
    // and the event handler gets applied to each child elements with Event Propogation

    // Matching strategy
    // to find the target element with its class name - nav__link to apply above event handler
    if (e.target.classList.contains('nav__link')) {
      // to select an attrib to get its value
      const id = e.target.getAttribute('href');

      // using 'scrollIntoView()' for smooth navigation
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

// Tabbed component
// selecting elements
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// adding event handlers to the buttonS

// this could be a bad practice when we have many tabs
// as we will be running exact copies of callbacks on every time - slows down the page
// tabs.forEach(tab => tab.addEventListener('click', () => console.log('tab')));

// To solve above issue, we can use Event Delegation as ABOVE to avoid use of Callback Functions
// In 'Event Delegation' basically we need Two Steps
// 1. add the Event Listener to a Common Parent Element of all the Elements
// 2. Determine what element originated the event with 'event.target' to apply  event handler

// parent element
tabsContainer.addEventListener('click', function (e) {
  // figure out which button got clicked
  // closest() method - finding closest top level parent element
  // NOTE- Closest method finds 'Parent' no matter elements how far up in the dom tree
  // closest() method searches up the DOM tree for the closest element which matches a specified CSS selector.
  // It starts at the element itself, then tests the parent, grandparent, and so on until a match is found.
  // Will return 'itself' or the matching ancestor. If no such element exists, it returns null.
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Guard clause - to check for negative case
  // if a match is not found, this method returns 'null'
  // meaning if Not Click on button, returns null
  if (!clicked) return;
  // so, if not Clicked on button, exit from this function & don't execute the code below

  // if clicked, execute this code - active tab
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  ); // remove class in content areas

  tabs.forEach(tab => tab.classList.remove('operations__tab--active')); // remove class on before tabs
  clicked.classList.add('operations__tab--active'); // add class on current tab

  // activate content area
  // data-* attributes allow us to store extra information
  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Sticky Navigation with Intersection Observer API
// NOTE - The Intersection Observer API can be used to observe an element and run a callback function
// when it enters or leaves the viewport (or another element).
const nav = document.querySelector('.nav');

// NOTE - when do we want our Navigation to become STICKY
// we want it to be happen when the HEADER moves completely OUT of VIEW
const header = document.querySelector('.header'); // The element to observe

// when the header leaves the viewport
const stickyNav = entries => {
  // With only one element being observed, the entries array will always contain just one item: '.nav' element
  const [entry] = entries;
  // console.log(entry);

  // Log if the element and if it's in the viewport
  // console.log(entry.target); // header element
  // console.log(entry.isIntersecting);

  // Each entry includes a handful of properties.
  // The isIntersecting property has a value of true if the element is in the viewport,
  // and false when it’s not. The target property is the element itself
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

// To setup an Intersection Observer, use the new IntersectionObserver() constructor,
// and pass in a callback function. The callback accepts two arguments: entries, an array
// of the attached items that triggered the callback, and the Observer Object itself
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // null - entire view port
  threshold: 0, // when header out of view - 0 %
  rootMargin: '-90px', // 90px outside of header - height of nav bar
});
// passing header element to the observer - target element
headerObserver.observe(header);

// Lazy Loading images using IntersectionObserver API
// to optimize performance since images have biggest impact in page loading.
// It's important to optimize images in any pages.

// select an image element with data set attribute
const images = document.querySelectorAll('img[data-src]');

const loadImg = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', // load 200px before when we reach them
});

images.forEach(img => imgObserver.observe(img));

// Slider components
const slides = document.querySelectorAll('.slide');

// current slide position
let currentSlide = 0;

// defining number of slides to loop over
const maxSlides = slides.length;

// putting all the slides - side by side
// first slide should be at 0%
// second slide should be at 100%
// third slide should be at 200%
// fourth slide should be at 300%
// NOTE - the width of each images is 100% then the second image & so on... have a same width
slides.forEach(
  (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
);
// multiply 100 % by current index - in the start, the first index is 0 so 0 times 100 is 0
// On the second index, it's going to be 100 since on index 1 and so on...

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.3) translateX(-1500px)';
// slider.style.overflow = 'visible';

// buttons
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

// slide move to right - next slide
btnRight.addEventListener('click', function () {
  if (currentSlide === maxSlides - 1) {
    // -1 is to make first slide to 0 index
    // when we reach at the end, go back to first slide
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  // -100%, 0%, 100%, 200% - current slide to be 0% and first slide to be -100%
  // we do this by taking current index minus current slide
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
  );
});

// slide move to left - previous slide
btnLeft.addEventListener('click', function () {
  if (currentSlide === 0) {
    // -1 is to make first slide to 0 index
    // when we reach at the end, go back to first slide
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }

  // -100%, 0%, 100%, 200% - current slide to be 0% and first slide to be -100%
  // we do this by taking current index minus current slide
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
  );
});

// LIFECYCLE DOM EVENTS
// 1. DOM Content Loaded - This event is fired by the Document as soon as the HTML is completely parsed.
// which means that the HTML has been downloaded and been converted to DOM tree. Also, all Scripts must be
// downloaded and executed before DOM Content Loaded can occurred.
// Note - This event does not wait for images & other external resources to load,
// just HTML and JavaScript needs to be loaded.
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built', e);
});
// NOTE - when we have <script>tag at the end of the HTML then we do not need to listen - DOM Content Loaded

// 2. LOAD Event - This event is fired by the Window as soon as not only the HTML & javascript
// is parsed but also all the images and external resources like css files are loaded,
// after loading file completely
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// 3. Before Unload Event - Finally, the last EVENT is Before Unload Event which also gets fired on window
// This event is created immediately before user is about to leave a page - closing close button in browser tab
window.addEventListener('beforeunload', function (e) {
  // we can ask user to make sure they want to leave the page
  e.preventDefault(); // some browsers need this

  console.log(e);
  // to display leaving confirmation we need to set the return value on the event to empty string
  e.returnValue = '';
});
