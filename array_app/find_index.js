'use strict';
// findIndex() method returns the index of the first element in an array that pass a test (provided as a function)
// findIndex() method executes the function once for each element present in the array
// If it finds an array element where the function returns a true value,
// findIndex() returns the index of that array element (and does not check the remaining values) Otherwise it returns -1
// Note: findIndex() does not execute the function for array elements without values
// Note: findIndex() does not change the original array

// NOTE: find() is lot similar to find method which returns an 'Element' &
// findIndex() method returns the index of the first element
if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    // NOTE: findIndex() is lot similar to Find method which returns an 'Element' &
    // findIndex() method returns the index of the first element

    // indexOf() & findIndex() does the same thing
    // NOTE: the difference is indexOf expects a 'value' as first parameter
    // .indexOf(23) - if an array contains 23 then true else false
    // findIndex() expects a 'callback' as first parameter
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // SPLICE method - splice() method removes items to an array, and returns the removed item(s) also
    // Note: This method works as same as the SLICE method but changes/mutates the ORIGINAL ARRAY
    // In practice, we use Splice to delete one or more elements in an ORIGINAL ARRAY
    accounts.splice(index, 1); // index where 1 item is deleted
  }
});
