function sumFactors(a,b){
    let sum = 0;

    for (let i = a; i <= b; i++) {
      if (i % 5 === 0) {
        sum += i;
      }
    }
    return sum
}
console.log(sumFactors(0,100))