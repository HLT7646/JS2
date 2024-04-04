function sodu(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i]= arr[i]%2
    }
    return newArr;
  }
let arr = [5, 23, 9, 4, 7,6,3,4,8];
console.log(sodu(arr))
