'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    // this.date = ...
    // this.id = ...
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    // this.type = 'cycling';
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Geolocation API allows the user to provide their location to web applications if they so desire.
// For privacy reasons, the user is asked for permission to report location information.

// navigator.geolocation - Geolocation API is accessed via a call to navigator.geolocation;
// this will cause the user's browser to ask them for permission to access their location data.

// Retrieves the device's current location
// getCurrentPosition function takes as an input - two callback functions, one more - optional
// getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback)
// successCallback - will be call on whenever a browser successfully gets the co-ordinates of current position
// errorCallback - will be call on when occurring an error or failing when getting the co-ordinates

// NOTE
// 1. Classes are NOT HOISTED
// 2. Classes are first-class citizens - we can pass them into functions & also return it from functions
// 3. Classes are executed in strict mode

// ES6 Classes to create Objects - nicer & modern alternative syntax to traditional Constructor Function
// NOTE  - Classes in javascript do not work like traditional Classes in other languages like Java, c++.
// Classes in javascript are just SYNTACTIC SUGAR for Constructor Functions.
// So, they still implement PROTOTYPICAL INHERITANCE behind the scene since
// JavaScript is a Prototype Based Language, Object inheriting properties/methods from another Object

// Note - Classes are functions in javascript
// therefore, we have Class Expression & Class Declaration

// class expression
// const Person = class {}

// class declaration
// NOTE - Private Class Fields and Methods are actually not part of javascript yet
// for data privacy - Encapsulation to prevent external code from accidentally
// manipulating internal properties/state.
// Encapsulation is to keep properties and methods PRIVATE inside the class,
// so they are not accessible from outside the class.
// Some methods can be exposed as public interface (API).

// Application Class to hold application data & methods
class App {
  // Private fields - properties are not truly accessible from outside
  // NOTE - This properties will be added in 'instances' but not in 'prototype'
  // '#' is a syntax that makes a Field Private
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    // note- this constructor gets call immediately when the new object is created
    // the constructor gets executed/call on the initial page load

    // Get user's position
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    // Attach event handlers to get executed/call on the initial page load
    // 'this' always refers to the DOM element in the Event Handler Methods,
    // to fix it using 'bind(this)' to refer to the Object
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  // In order to actually trigger the geo-location api,
  // this method needs to be call inside of the constructor
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        // On calling 'this._loadMap', it will be call as Regular Function Call by getCurrentPosition
        // but not as a Class Method.
        // In regular function call, this is set to 'undefined',
        // the solution is to manually bind 'bind(this)' keyword to point to the Current Object
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    // note - 'this' points to the map object not to our App Object, need binding
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    // Empty inputs
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
      '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;

      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form + clear input fields
    this._hideForm();

    // Set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    // BUGFIX: When we click on a workout before the map has loaded, we get an error. But there is an easy fix:
    if (!this.#map) return;

    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // using the public interface
    // workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

// creating an instance of a class
const app = new App();

// to actually trigger the geo-location api
//  app._getPosition();
// Note - It's lot cleaner to call this method inside of the Constructor of a class

// just to make sure we don't get errors in old browsers
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       console.log(position);
//       // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

//       // current coords
//       const coords = [latitude, longitude];

//       // NOTE - whatever String we pass into the map function,
//       // must be the 'id' name of an element in our html & it is in that element
//       // where the map will be displayed & what this means is that
//       // the in our html we need an Element with the ID of 'map'
//       map = L.map('map').setView(coords, 13); // array - coords / 13 - initial zoom level
//       // assigning Map object to variable so that we have access to its props & methods

//       // map object to access its props & methods
//       console.log(map);

//       // using different map style of openstreetmap.org
//       L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       // NOTE- Leaflet method 'on' as an event listener to the map object
//       // handling click on map
//       map.on('click', mapE => {
//         mapEvent = mapE;

//         // display the hidden form
//         form.classList.remove('hidden');

//         // to select the input field
//         inputDistance.focus();
//       });
//     },
//     function () {
//       alert('Sorry, could not get your position');
//     }
//   );

//   form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // to clear fields
//     inputDistance.value = inputDuration.value = inputCadence.value = '';

//     // display marker
//     console.log(mapEvent);
//     const { lat, lng } = mapEvent.latlng;
//     // To ADD Marker & pop-ups on click
//     L.marker([lat, lng])
//       .addTo(map)
//       .bindPopup(
//         L.popup({
//           // passing options to customize popup
//           maxWidth: 250,
//           mindWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: 'running-popup',
//         })
//       )
//       // Sets the content of the popup bound to this layer
//       .setPopupContent('Workout')
//       .openPopup();
//   });

//   // toggling when 'change' event happens
//   inputType.addEventListener('change', function () {
//     // closest dom traversal method to select parent element
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//     // note - by toggling same class on both of them,
//     // we make sure its always one of them that is hidden & other one visible
//   });
