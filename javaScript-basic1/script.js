// const day = 'monday';

// Switch cases use strict comparison (===)
// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;

//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;

//   case 'friday':
//     console.log('Record videos');
//     break;

//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;

//   default:
//     console.log('Not a valid day!');
// }

const day = 'friday';

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if ( day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

// ternary/conditional operator
const age = 16;
// condition | ? - if | : else
// age >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink water!');

const drink = age >= 21 ? 'wine' : 'water';
console.log(drink);

// Since Ternary operator is an expression meaning it returns/produces a value 
// we can use it inside template literals. Place holder takes any Expressions. 
console.log(`I like to drink ${age >= 21 ? 'wine' : 'water'}.`);
