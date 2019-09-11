
function mergeSort(ua) {
  if(ua.length <= 1) {
    return ua;
  }
  
  const mid = Math.floor(ua.length/2);
  
  const left = mergeSort(ua.slice(0, mid))
  const right = mergeSort(ua.slice(mid))
  
  return merge(left, right);
}

function merge(left, right) {
  
  let lal = left.length;
  let ral = right.length;
  let li = 0;
  let ri = 0;
  let result = [];
  
  while(li < lal && ri < ral) {
    if(left[li] < right[ri]) {
      result.push(left[li])
      li++;
    } else {
      result.push(right[ri]);
      ri++;
    }
  }
  
  return result.concat(left.slice(li)).concat(right.slice(ri));
}

console.time('mad')
let val = mergeSort(c);
console.timeEnd('mad')

console.log(val);
