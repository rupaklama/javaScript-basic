// exporting module - This code get executed first in the importing module
console.log('Exporting module');

// Variables are private to the module by default
// Variables that are declared inside of a module are actually scope to this module only.
// If you want to use these variables in outside/another module, we need to export it
// We can export it as Named Export or Default Export.
export const cart = [];

// named export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity }); // adding object to an array
  console.log(`${quantity} ${product} added to the cart`);
};

// note - we can also Export Multiple Things from a module using Named export
// This is the main use case of Named Export.
const totalPrice = 237;
const totalQuantity = 23;

// we can also exported as different name - 'as'
export { totalPrice, totalQuantity as tq };

// DEFAULT EXPORT
// note - Usually we use Default Export when we only want to export One Thing per Module
// & that is the reason why its call 'Default'
// No name involve here, we are simply exporting the value &
// when we import it, we can basically give any Name we want
export default function (product, quantity) {
  cart.push({ product, quantity }); // adding object to an array
  console.log(`${quantity} ${product} added to the cart`);
}
