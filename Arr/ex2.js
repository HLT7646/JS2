function findSecondLargestNumber(array) {
  if (array.length < 2) {
    return null; 
  }

  let largestNumber = Math.max(array[0], array[1]);
  let secondLargestNumber = Math.min(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    if (array[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = array[i];
    } else if (array[i] > secondLargestNumber && array[i] < largestNumber) {
      secondLargestNumber = array[i];
    } 
    else if (secondLargestNumber === largestNumber && array[i] < largestNumber ){
      secondLargestNumber = array[i];
    }

  }

  if (secondLargestNumber === largestNumber) {
    return null; 
  }

  return secondLargestNumber;
}
let numberArray = [9, 9, 6, 7, 5,3,2];
let secondLargest = findSecondLargestNumber(numberArray);
console.log(secondLargest); 