function sample(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  let arr = [1, 2, 3, 4, 5,6,7,8,9,10];
  console.log(sample(arr)); 