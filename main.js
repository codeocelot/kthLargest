//Kth largest element in array

// this implementation has O(n^2) time.  Not great, but acceptable for small inputs
function sort(arr){
  for(var i =0;i<arr.length;i++){
    var j = i, k = i + 1;
    while(arr[j] > arr[k] && k < arr.length){
      var t = arr[j];
      arr[j] = arr[k];
      arr[k] = t;
      j++;k++
      i=-1;
    }
  }
  return arr;
}

function kthLargest(arr,k){
  if(!arr || !arr.length) return null;
  return sort(arr)[arr.length-k];
}

module.exports.sort = sort;
module.exports.kthLargest = kthLargest;
