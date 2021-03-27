'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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

let map, mapEvent;

// just to make sure we don't get errors in old browsers
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(position);
      // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      // current coords
      const coords = [latitude, longitude];

      // NOTE - whatever String we pass into the map function,
      // must be the 'id' name of an element in our html & it is in that element
      // where the map will be displayed & what this means is that
      // the in our html we need an Element with the ID of 'map'
      map = L.map('map').setView(coords, 13); // array - coords / 13 - initial zoom level
      // assigning Map object to variable so that we have access to its props & methods

      // map object to access its props & methods
      console.log(map);

      // using different map style of openstreetmap.org
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // NOTE- Leaflet method 'on' as an event listener to the map object
      // handling click on map
      map.on('click', mapE => {
        mapEvent = mapE;

        // display the hidden form
        form.classList.remove('hidden');

        // to select the input field
        inputDistance.focus();
      });
    },
    function () {
      alert('Sorry, could not get your position');
    }
  );

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // to clear fields
    inputDistance.value = inputDuration.value = inputCadence.value = '';

    // display marker
    console.log(mapEvent);
    const { lat, lng } = mapEvent.latlng;
    // To ADD Marker & pop-ups on click
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          // passing options to customize popup
          maxWidth: 250,
          mindWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      // Sets the content of the popup bound to this layer
      .setPopupContent('Workout')
      .openPopup();
  });

  // toggling when 'change' event happens
  inputType.addEventListener('change', function () {
    // closest dom traversal method to select parent element
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    // note - by toggling same class on both of them,
    // we make sure its always one of them that is hidden & other one visible
  });
}
