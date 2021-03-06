
// TASK: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. You have to use the arguments object.

function destroyer(arr) {
  var args = [...arguments].slice(1);

  args.forEach(arg => {
    while (arr.includes(arg)) {
      let index = arr.indexOf(arg);
      arr.splice(index, 1);
    }
  });

  return arr;
}

// Given solution:
function destroyer2(arr) {
  var args = Array.from(arguments).slice(1);

  return arr.filter(val => !args.includes(val));
}

// Given solution 2:
const destroyer3 = (arr, ...args) => arr.filter(i => !args.includes(i));

console.log(destroyer3([1, 2, 3, 1, 2, 3], 2, 3));

