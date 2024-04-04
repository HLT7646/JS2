function isIncreasingArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  let inputArray = [1, 2, 3, 4, 5, 6];
  console.log(isIncreasingArray(inputArray)); 
  
  let inputArray2 = [1, 3, 2, 4, 5];
  console.log(isIncreasingArray(inputArray2)); 