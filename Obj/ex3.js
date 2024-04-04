function hasObjectKeys(obj,key) {
    return key in obj;
  }
  let user = { name: "Nguyễn Tiến Đạt", age: 25, email: "support@amela.vn" };
  console.log(hasObjectKeys(user,'name')); //true
  console.log(hasObjectKeys(user,'gender')); //false

