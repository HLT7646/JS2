function maxLength(arr) {
  if (arr.length === 0) {
    return null;
  }

  let maxLengthArr = [];
  let max = arr[0].length;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      maxLengthArr = [arr[i]];
    } else if (arr[i].length === max) {
      maxLengthArr.push(arr[i]);
    }
  }

  return maxLengthArr;
}

let arr = ['a', 'abc', 'aaaa', 'aaad', 'abv'];
console.log(maxLength(arr));