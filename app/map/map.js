var arr = ['a', 'b', 'c'];
var data = arr.map(function (val, i, a) { return console.log(val, i, a); });
// first parameter returns elements of array, sencond parameter returns index value number
// of array, and third parameter returns original array data.
var findData = arr.find(function (val, i, a) { return val === 'a'; });
console.log(findData);
