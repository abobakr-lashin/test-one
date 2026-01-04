// shallow copy
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.b.c = 5; // يؤثر على obj1

// deep copy
const obj3 = JSON.parse(JSON.stringify(obj1));
obj3.b.c = 4; // لا يؤثر على obj1
console.log(obj1)
