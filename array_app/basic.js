'use strict';

// Array - array is an Object & has special built in methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE method - similar to String to extract part of array & return NEW ARRAY
// The slice() method returns the selected elements in an array, as a new array object
// The slice() method selects the elements starting at the given start argument,
// and ends at before of second argument, but does not include, the given end argument.

// start at index 2 & all the way to the end
console.log(arr.slice(2)); // ["c", "d", "e"]

// with first & second args
console.log(arr.slice(2, 4)); // ["c", "d"]

// negative start arg to copy from the END of an array
console.log(arr.slice(-1)); // ["e"]
console.log(arr.slice(-2)); // ["d", "e"]
console.log(arr.slice(1, -2)); // ["b", "c"]

// we can use the SLICE method to simply create a SHALLOW COPY of an array
// We can do it with either Array Slice method or Spread operator - console.log([...arr]);
// The ONLY TIME you really need to use Slice method is When you want to CHAIN multiple methods together

// SPLICE method - splice() method adds or removes items to an array, and returns the removed item(s) also
// Note: This method works as the SLICE method but changes/mutate the ORIGINAL ARRAY

// SYNTAX - array.splice(index, deleteCount, item1, ....., itemX)
// index - Required. An integer that specifies at what position to add or remove items,
// Use negative values to specify the position from the end of the array

// deleteCount - Optional, The number of items to be removed. If set to 0, no items will be removed

// item1, ..., itemX	- Optional, The new item(s) to be added to the array

let arraySplice = ['a', 'b', 'c', 'd', 'e'];
// start at index 2 & all the way to the end
// console.log(arrSplice.splice(2)); // ["c", "d", "e"]

// NOTE: now, our ORIGINAL ARRAY GOT MUTATED
// In practice, we use Splice to delete one or more elements in an ORIGINAL ARRAY
console.log(arraySplice); // ["a", "b"]

// ONE COMMON practice is to simply delete last element in an array
console.log(arraySplice.splice(-1)); // ["a", "b", "c", "d"]

// REVERSE method - reverse() method reverses the order of the elements in an array
// Note: this method will CHANGE the original array
let arrayReverse = ['a', 'b', 'c', 'd', 'e'];
console.log(arrayReverse.reverse());

// CONCAT method - concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
const concatArray = ['f', 'g', 'h', 'i', 'j'];
const concatLetters = concatArray.concat(arrayReverse);
console.log(concatLetters);

// same result as above
console.log([...arrayReverse, ...concatArray]);

// JOIN method - returns the array as a STRING
// Note: this method will not change the original array
// The elements will be separated by a specified separator. The default separator is comma (,)
const joinArray = ['f', 'g', 'h', 'i', 'j'];
console.log(joinArray.join(' - '));
