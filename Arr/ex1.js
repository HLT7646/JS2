function minNumber(arr) {
    if (arr.length === 0) {
      return null;
    }
    let min = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
let arr = [5, 23, 9, 4, 7];
console.log(minNumber(arr)); 