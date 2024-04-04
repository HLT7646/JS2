function getObjLength(obj) {
    return Object.keys(obj).length;
  }
let user = { name: "Nguyễn Tiến Đạt", age: 25, email: "support@amela.vn", gender:'male'};
console.log(getObjLength(user));