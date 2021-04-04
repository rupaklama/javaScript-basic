'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// to display in dom
const renderCountry = (data, className = '') => {
  const html = `
<article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${Number(
            data.population / 1000000
          ).toFixed(1)} million people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
</article>
`;

  // add in page - dom
  countriesContainer.insertAdjacentHTML('beforeend', html);

  // to display the data
  countriesContainer.style.opacity = 1;
};

// function to fetch country data
const getCountryData = function (country) {
  // AJAX call country 1
  // using old style XML api to make network requests - ajax calls
  const request = new XMLHttpRequest();
  // http method & url
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send(); // sending request to the above url
  // console.log(request.responseText);

  // load event to access retrieve data
  request.addEventListener('load', function () {
    // responseText will only be set once the data has arrived
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // display in dom
    renderCountry(data);

    // to get neighbor country
    const [neighbor] = data.borders;
    console.log(neighbor);

    if (!neighbor) return;

    // AJAX call country 2 - depends on the first ajax call
    // It's nested inside of another one - nested callback
    // Callback Hell - when we lots of nested callbacks in order to execute async tasks in sequence
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    request2.send();

    // load event to access retrieve data
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      // display in dom
      renderCountry(data2, 'neighbour');
    });
  });
};

// nepal
getCountryData('nepal');

// us
getCountryData('usa');

// bhutan
getCountryData('bhutan');

// NOTE - Callback Hell in async methods, not only in ajax calls
// chaining callback methods one after another
// It makes our code very messy, hard to maintain and difficult to understand.
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
