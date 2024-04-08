function findNonDuplicates(arr1, arr2) {
  let combinedArray = arr1.concat(arr2);
  let nonDuplicates = [];

  for (let i = 0; i < combinedArray.length; i++) {
    let number = combinedArray[i];

    if (!arr1.includes(number) || !arr2.includes(number)) {
      nonDuplicates.push(number);
    }
  }

  return nonDuplicates;
}

let myArray1 = [1, 2, 3, 4, 5];
let myArray2 = [1, 2, 3, 5, 6, 7, 12];
console.log(findNonDuplicates(myArray1, myArray2));