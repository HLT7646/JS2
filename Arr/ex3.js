
function sortStudents(arr){
    arr.sort(function(a, b) {
        return b.localeCompare(a);
      }); 
    return arr
}
let arr = ['Tuấn', 'Nam', 'Hoa', 'hà', 'Anh'];

console.log(sortStudents(arr)); 