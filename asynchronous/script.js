'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// function to fetch country data
const getCountryData = function (country) {
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

    const html = `
  <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${Number(
              data.population / 1000000
            ).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
  </article>
  `;

    // add in page - dom
    countriesContainer.insertAdjacentHTML('beforeend', html);

    // to display the data
    countriesContainer.style.opacity = 1;
  });
};

// nepal
getCountryData('nepal');

// us
getCountryData('usa');

// bhutan
getCountryData('bhutan');
