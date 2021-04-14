// importing module
// we can also change the name of the Imported value as well with 'as'
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// exported function
// addToCart('breads', 5);

// logging multiple Named Export values
// console.log(price, tq);

// above imported module code gets executed first before this module
console.log('Importing module');

// we can also Import all the Exports of a module at the Same Time
// *  - everything & giving it a Name Space which is an Object that contains everything
// Convention to start a first letter of name with upper case
// import * as ShoppingCart from './shoppingCart.js';

// Now it's an Object with a method
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// DEFAULT EXPORT - this will import Default Export
// we can give it a any Name we want
import add, { cart } from './shoppingCart.js';
add('pizzas', 2);
add('breads', 5);
add('apples', 4);

// Accessing same Cart array in memory when accessing here
console.log(cart);

// NOTE - Try not to mix NAMED & DEFAULT EXPORT together to avoid complexity
