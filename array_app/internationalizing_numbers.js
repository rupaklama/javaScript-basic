'use strict';

// Intl.NumberFormat() constructor creates Intl.NumberFormat objects that enable language-sensitive number formatting
// formatting numbers based on different languages

const number = 123456.789;

// option object for formatting
const options = {
  // there are 3 different styles - unit, percent & currency
  style: 'currency', // defining this is Unit
  // NOTE  - if we have Percent & Currency, the unit below is completely ignored
  unit: 'mile-per-hour', //  setting Unit
  currency: 'USD',
  // NOTE: WE HAVE TO DECLARE CURRENCY BECAUSE IT'S NOT DETERMINED BY THE BROWSER's LOCALE

  // we can also turn off or on grouping
  // useGrouping: false, // to print numbers without the separators ','
};

// basic
// NumberFormat()'s first arg - locale string
// NumberFormat()'s second arg - option object
// format method takes the number value
console.log('US:', new Intl.NumberFormat('en-US', options).format(number)); // $123,456.789
console.log('Germany:', new Intl.NumberFormat('de-DE').format(number)); // 123.456,789
console.log('Nepal:', new Intl.NumberFormat('nep-ne').format(number)); // 123,456.789
console.log('Syria:', new Intl.NumberFormat('ar-SY').format(number)); // ١٢٣٬٤٥٦٫٧٨٩

// To use Browser's LOCALE
console.log(
  'Browser:',
  new Intl.NumberFormat(navigator.language).format(number)
);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
