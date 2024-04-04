function duplicatesNumber(arr_1,arr_2){
    let duplicates = [];
    for (let i = 0; i < arr_1.length; i++) {
        let number = arr_1[i];
      
        if (arr_2.includes(number)) {
          duplicates.push(number);
        }
      }
      return duplicates
}
  let myArray_1 = [1, 2, 3, 4, 5];
  let myArray_2 = [1, 2, 3,5,6,7,12];
  console.log(duplicatesNumber(myArray_1,myArray_2))