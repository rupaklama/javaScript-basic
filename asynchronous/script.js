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
  // countriesContainer.style.opacity = 1;
};

// to render error
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// NOTE - Using modern javascript ES6 feature - PROMISE to escape Callback Hell
// The modern way of making API calls using the FETCH api
// const request = fetch('https://restcountries.eu/rest/v2/name/nepal');
// console.log(request); // promise

// Creating reusable function to avoid DRY
const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  // calling above reusable function
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    // country 1
    // fetch api returns a Promise - response object from ajax call
    // fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    //   // On all Promises, we can call 'then' method to handle/consume Promise
    //   // Into the 'then' method, need to pass a callback function to execute as soon as Promise is Fulfilled/resolved
    //   // Converting Response Body Object into JSON to access & read the data
    //   // JSON() method is available in all the RESPONSE Objects - Promise
    //   .then(response => {
    //     console.log(response);

    //     // manually rejecting promise to handle error
    //     // Overriding default Error Object's - 'err.message' that don't make sense or not too clear
    //     if (!response.ok) {
    //       // false
    //       throw new Error(`Country not found (${response.status})`);
    //     }

    //     return response.json(); // 'response' is promise object

    //     // note - option 1 to handle Errors, not a good way
    //     // err => alert(err) // second callback when promise gets rejected
    //   })
    // JSON() method is Async which also returns a New Promise Object
    .then(data => {
      console.log(data);
      renderCountry(data[0]);

      const neighbor = data[0].borders[0];
      // const neighbor = 'adfdfdddf';

      if (!neighbor) throw new Error('No neighbor found!');

      // another ajax call
      // country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
      // Chaining .then() here is creating a Callback Hell here
      // Nested Callback inside of Another one
    })
    // Note - Always return promise and handle it outside by continuing chain like below
    .then(response => {
      console.log(response);

      // manually rejecting promise to handle error
      // Overriding default Error Object's - 'err.message' that don't make sense or not too clear
      if (!response.ok) {
        // false
        throw new Error(`Country not found (${response.status})`);
      }

      return response.json();
    })
    .then(data => renderCountry(data, 'neighbour'))
    // we can handle/catch Errors at the end of the Chain - right way
    // It will catch any errors on all of the above Promise Chain
    .catch(err => {
      console.error(err.message);
      renderError(`Something went wrong - ${err.message} Try again`);
      // Note - err.message will be our custom message from above
    })

    // The last one - Finally Method, an optional one
    // The finally() is always executed whether the promise is fulfilled or rejected.
    // In other words, the finally() is executed when the promise is settled.
    // The finally() method was introduced in ES2018. In the finally() method,
    // you can place the code that cleans up the resource when the promise is settled,
    // regardless of its outcome. We use this method for something that always need to happen
    // no matter the result of Promise like hiding Loading Spinner or clean up process.
    .finally(() => {
      // to display the data or Error message after Promise settled
      countriesContainer.style.opacity = 1;
    });
};

// button to make above api request
btn.addEventListener('click', function () {
  getCountryData('australia');
});

// // function to fetch country data
// const getCountryData = function (country) {
//   // AJAX call country 1
//   // using old style XML api to make network requests - ajax calls
//   const request = new XMLHttpRequest();
//   // http method & url
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send(); // sending request to the above url
//   // console.log(request.responseText);

//   // load event to access retrieve data
//   request.addEventListener('load', function () {
//     // responseText will only be set once the data has arrived
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // display in dom
//     renderCountry(data);

//     // to get neighbor country
//     const [neighbor] = data.borders;
//     console.log(neighbor);

//     if (!neighbor) return;

//     // AJAX call country 2 - depends on the first ajax call
//     // It's nested inside of another one - nested callback
//     // Callback Hell - when we lots of nested callbacks in order to execute async tasks in sequence
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     request2.send();

//     // load event to access retrieve data
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       // display in dom
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // nepal
// getCountryData('nepal');

// // us
// getCountryData('usa');

// // bhutan
// getCountryData('bhutan');

// // NOTE - Callback Hell in async methods, not only in ajax calls
// // chaining callback methods one after another
// // It makes our code very messy, hard to maintain and difficult to understand - reason.
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// EVENT LOOP in Practice
// console.log('Test Start'); // 1
// setTimeout(() => console.log('0 sec timer'), 0); // 4
// // This is a Micro task which has more priority than above callback function
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3
// console.log('Test end'); // 2

// Building a Simple Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Creating Promise with built in Constructor Object - Promise is a special Object
const lotteryPromise = new Promise(function (resolve, reject) {
  // storing new promise in a variable
  // takes one arg - executor function
  // The Executor Function takes Resolve & Reject Functions as args

  console.log('Lottery draw begins!');

  // async operation
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      // the result of above condition is fulfilled promise
      // In order to set Promise as Fulfilled, we use 'resolve()' function
      // Basically, calling the 'resolve' func like this, will mark this Promise as a resolved/fulfilled promise
      // Note - Into the resolve func here, we pass in the fulfilled value of the promise
      // so that it can later consumed with 'then' method to handle the promise
      resolve('You win!');
    } else {
      // opposite case - rejected promise
      // rejected: meaning that the operation failed.
      // When a Promise object is "rejected", the result is an error object
      reject(new Error('You lost your money :(')); // creating our custom new error object
    }
  }, 2000);
});

// consuming above promise with 'then' method
// 'then' method needs a callback function which is going to be call with resolved/rejected value of promise
lotteryPromise
  .then(res => {
    console.log(res);
  })
  .catch(err => console.error(err));

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// While a Promise object is "pending" (working), the result is undefined.

// fulfilled: meaning that the operation was completed successfully.
// When a Promise object is "fulfilled", the result is a value.

// rejected: meaning that the operation failed.
// When a Promise object is "rejected", the result is an error object
