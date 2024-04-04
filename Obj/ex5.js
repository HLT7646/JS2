function getObjects(objects, age ,status) {
    return objects.filter(obj => obj.age > age && obj.isStatus===status);
  }
  let user = [
    { name: "John", age: 30, isStatus:false  },
    { name: "Jane", age: 28, isStatus:true  },
    { name: "Mike", age: 22, isStatus:true  },
    { name: "Emily", age: 27, isStatus:true  }
  ];
  console.log(getObjects(user, 25,true));