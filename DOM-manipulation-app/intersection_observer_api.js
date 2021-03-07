// Sticky Navigation with Intersection Observer API
// The Intersection Observer API allows you to configure a callback that is called when either of these circumstances occur:
// A target element intersects either the device's viewport or a specified element.

// NOTE - Intersection Observer API allows our code to basically observe changes to the way that
// the certain target element intersects another element or the way it intersects the viewport

// observer callback
const observerCallback = function (entries, observer) {
  // get call with two args
  // this will be call each time that the observe element - 'target element' is intersecting
  // the root element at the threshold that we defined.
  // So, whenever the 'section1' - target element is intersecting the viewport at 10%
  // when this happen, this function gets call no matter if we are scrolling up or down
  entries.forEach(entry => console.log(entry)); // IntersectionObserverEntry
};

// options object
const observerOptions = {
  // first needs a root property - this is an Element that the Target Element is intersecting
  // The element that is used as the viewport for checking visibility of the target.
  // Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null
  root: null,

  // percentage of intersection at which the 'Observer Callback' will be called
  // default is 0 (meaning as soon as even one pixel is visible, the callback will be run)
  threshold: 0.1, // on 10% visible - visibility percentage
};

// To use this API, we need to start by creating NEW Intersection Observer
const api = new IntersectionObserver(observerCallback, observerOptions); // callback & options object

// now using above observer to basically observe a certain target element with its observe method
api.observe(section1);
