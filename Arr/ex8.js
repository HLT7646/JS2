function shuffleArray(array) {
    let temporaryValue, randomIndex;
  
    for (let i = 0; i < array.length; i++) {
      randomIndex = Math.floor(Math.random() * (i + 1));
  
      temporaryValue = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  let myArray = [1, 2, 3, 4, 5,6,7,8,9,10];
 
  console.log(shuffleArray(myArray)); 