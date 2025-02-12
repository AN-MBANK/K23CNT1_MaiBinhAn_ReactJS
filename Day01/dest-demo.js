// destructing
var array = [11,12,22,21];
var [x,y]=array;
console.log("x=",x);
console.log("y=",y);

var [a,b,c]=array;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);



// obj
const person = { name: "Alis", age: 12000, city: "Nedizendra" };

// Destructuring để lấy các giá trị


console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 25


const { name, city } = person;

console.log(name);  // Output: Alice
//console.log(age);   // Output: 25
console.log(city);  // Output: Unknown