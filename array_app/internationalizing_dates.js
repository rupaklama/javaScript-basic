'use strict';

// javascript has a New Internationalization API to format Numbers & Strings
// according to different languages. This help support different languages in our app
// for users around the world.

// EXPERIMENTING WITH Internationalization API to format date in US
const now = new Date();

// option object for Time with Dates
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  // On month - instead of number or another option is '2-digit'
  month: 'long', // long returns February 27
  year: 'numeric', // or '2-digit'

  // On weekday, we can also experiment with 'short or narrow'
  weekday: 'long', //  Saturday, February 27, 2021, 10:35 AM
};

// NOTE: IN MANY SITUATIONS, IT ACTUALLY DOES NOT MAKE SENSE TO DEFINE MANUALLY BUT
// INSTEAD TO GET IT SIMPLY FROM THE USER BROWSERS
// navigator.language - To get Current Browser's Locale (language)
const locale = navigator.language;
console.log(locale); // en-US

// need to pass arg String - locale which is the Language - Country
// DateTimeFormat() for dates & times
// format() - pass in a Date that we want to format
// first arg is current browser's locale - language
// Second arg is the option object to formate the date
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
// DateTimeFormat() - Second arg to format Time pass with 'options object' to this method
// LOCALE
// http://www.lingoes.net/en/translator/langcode.htm
