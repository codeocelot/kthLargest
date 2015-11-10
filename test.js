var assert = require('assert')
var sort = require('./main.js').sort;
var kthLargest = require('./main.js').kthLargest;

// visual test verification 
console.log(sort([]))
console.log(sort([1]))
console.log(sort([2,1]))
console.log(sort([3,2,1]))
console.log(sort([5,3,7,4,8]))
console.log(sort([5,22,3,7,4,8,13,2,21]))

assert.equal(kthLargest([],null),null);
assert.equal(kthLargest([1],1),1);
assert.equal(kthLargest([1,2],1),2);
assert.equal(kthLargest([3,1,2],3),1);
assert.equal(kthLargest([6,2,4,7,1],5),1);
