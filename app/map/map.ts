let arr = ['a', 'b', 'c'];

let data = arr.map((val,i,a)=>console.log(val, i, a));

// first parameter returns elements of array, sencond parameter returns index value number
// of array, and third parameter returns original array data.

let findData = arr.find((val, i, a)=>val === 'a');
console.log(findData);