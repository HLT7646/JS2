function isOddDecreasingArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i - 1] || arr[i]%2==0 ) {
        return false;
      }
    }
    return true;
  }
  let inputArray = [9, 7, 5, 3, 1];
  let inputArray2 = [10,9, 7, 5, 3, 1];
  let inputArray3 = [9, 7, 5, 3, 1,0];
  console.log(isOddDecreasingArray(inputArray)); 
  console.log(isOddDecreasingArray(inputArray2)); 
  console.log(isOddDecreasingArray(inputArray3)); 