// SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];

// we extract from the array without 
// changing the original array

//Include 2 item
let b = arr.slice(2);
console.log(b); // output: [ 'c', 'd', 'e' ]

// Include second item, but the 4th not included
let c = arr.slice(2, 4);
console.log(c); // output: [ 'c', 'd' ]

let d = arr.slice(-1);
console.log(d); // output: [ 'e' ]

let e = arr.slice(1, -2);
console.log(e); // output: [ 'b', 'c' ]


let f = arr.slice();
console.log(f); // output: [ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]); // output: [ 'a', 'b', 'c', 'd', 'e' ]


// SPLICE act as slice function, but change the original array
console.log(arr.splice(2)); // output: [ 'c', 'd', 'e' ]
console.log("Original Array : ", arr); // output: [ 'a', 'b' ]

//common used in JS application 
// we remove last element
let arr2 = ['a', 'b', 'c', 'd', 'e'];
arr2.splice(-1);
console.log([...arr2]); // output: [ 'a', 'b', 'c', 'd' ]
console.log(arr2.slice(1, 2));


/*
Note:
In Slice ----> slice(1,2) return 1 element which is 1
In Splice ----> splice(1,2) return 2 element which are 1 and 2
*/

// Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr3 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr3.reverse()); // output --> [ 'f', 'g', 'h', 'i', 'j' ]

//CONCAT
const letters = arr.concat(arr3);
console.log(letters); // --> ['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j']
console.log([...arr,...arr3]) // --> ['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j']

//Join
console.log(letters.join(' - ')); // --> a - b - c - d - e - f - g - h - i - j