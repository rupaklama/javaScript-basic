'use strict';

// Date objects are created with the new Date() constructor.

// By default, JavaScript will use the browser's time zone and display a date as a FULL TEXT STRING:
// Wed Feb 24 2021 15:06:16 GMT-0500 (Eastern Standard Time)

// There are 4 ways to create a new date object:

// 1. new Date()
// use the browser's time zone and display a date as a full text string
const now = new Date();
console.log(now);

// NOTE - MONTH IN JAVASCRIPT IS 0 BASED, 0 is january
// 2. new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(year, month, ...) creates a new date object with a specified date and time
console.log(new Date(2021, 1, 24, 3, 54));

// 3. new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time plus milliseconds
console.log(new Date(0));

// 4. new Date(date string)
// new Date(dateString) - creates a new date object from a date string
console.log(new Date('Wed Feb 24 2021 3:14')); // Wed Feb 24 2021 03:14:00 GMT-0500 (Eastern Standard Time)
console.log(new Date('Wed Feb 24 2021 3:14'));
console.log(new Date('December 24, 2021')); // Fri Dec 24 2021 00:00:00 GMT-0500 (Eastern Standard Time)

// Z means UTC (Coordinated Universal Time) with NO time zone & NO daylight savings
// this will use the browser's time zone and display a date/time as a FULL TEXT STRING
console.log(new Date('2019-11-01T13:15:33.035Z')); // Fri Nov 01 2019 09:15:33 GMT-0400 (Eastern Daylight Time)

console.log('-----------------------------');

// NOTE: JavaScript Get Date Methods
const future = new Date(2022, 1, 24, 3, 54);
console.log(future); // Thu Feb 24 2022 03:54:00 GMT-0500 (Eastern Standard Time)

// Get the year as a four digit number (yyyy)
console.log(future.getFullYear()); // 2022 - never use getYear()

// Get the month as a number (0-11), 0 is January in js
console.log(new Date().getMonth()); // 1 - feb
// It's 0 base, can add + 1 at the end to start from 1

// Get the day as a number (1-31)
console.log(new Date().getDate()); // 24

// Get the weekday as a number (0-6), 0 is Sunday
console.log(new Date().getDay()); // 3

// Get the hour (0-23)
console.log(new Date().getHours());

// Get the minute (0-59)
console.log(new Date().getMinutes());

// Get the second (0-59)
console.log(new Date().getSeconds());

// Get the millisecond (0-999)
console.log(new Date().getMilliseconds());

// The toISOString() method converts a Date object into a STRING UTC format, using the ISO standard.
// The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ
console.log(new Date().toISOString()); // 2021-02-24T21:27:07.233Z

// Get the time (milliseconds since January 1, 1970)
// timestamp is the milliseconds which have passed since January 1, 1970
console.log(new Date().getTime()); // 1614202134406 - timestamp

// NOTE: To get a current Timestamp of right now
// Get the time. ECMAScript 5.
console.log(Date.now()); // 1614202340708

// NOTE: To GET CURRENT LOCAL TIME
const now = new Date();
console.log(now.toLocaleTimeString()); // current local time

console.log('----------------------------------------------');
// NOTE: Operations With Dates
// We can do CALCULATIONS with DATES like subtract one date from another date
// in order to calculate how many days have passed between the TWO DATES.
// Whenever we attempt to CONVERT A DATE TO A NUMBER, then the result is going to be a TIMESTAMP
// in MILLISECONDS. And with this milliseconds we can perform CALCULATIONS.

const futureDate = new Date(2037, 10, 19, 15, 23);
console.log(Number(futureDate)); // 2142274980000 - timestamp in milliseconds
// NOTE: Now, we can simply convert above timestamp 'milliseconds' back to DAYS, HOURS...

// function takes Two Days as args & returns number of days passed between those two days
// 1000 converts milliseconds to seconds, then 60 to minutes, then 60 to hours, then 24 to convert in days
// NOTE: Above is because there are 24 hours in a day, 60 minutes in an hour,
// 60 seconds in 1 minute, 1000 milliseconds in 1 Second
const calcDaysPassed = (date1, date2) =>
  // math.abs to get an absolute value which is to remove negative sign before number
  // so to get positive value

 // NOTE - when having Hours & Minutes, use Math.round() to round down numbers
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)); // converting in days

const days1 = calcDaysPassed(
  new Date(2037, 3, 4),
  new Date(2037, 3, 14)
  
);
console.log(days1); // 10

// NOTE: IF WE NEED A PRECISE CALCULATION DUE TO DAY LIGHT SAVING CHANGES &
// OTHER EDGE CASES LIKE THAT WE SHOULD USA A DATE LIBRARY 'MOMENT.JS'
