// let person = {
//     name1:"Aman",
//     age:20
// }
// console.log(person);

// ||  Array [] , Object {},String '' , "" , ``

// let person = {
//     name1:"Aman",
//     age:20
// }
// console.log(person);

// // add the key and value
// person.color = "black"
// console.log(person);

// // update the value 
// person.color = "white"
// console.log(person);

// // delete 
// delete person.color;
// console.log(person);

// // 


// let person = {
//     name1:"Aman",
//     age:20
// }

// this keyword , constructor , class
// class Person{
//     constructor(name1,age,address){
//         this.name1 = name1;
//         this.age = age;
//         this.address= address;
//     }
// }
// const p = new Person("aman",22,"indore")
// const p1 = new Person("jay",25,"bhopal")
// console.log(p.name1);
// console.log(p1.age);


// Methods of Object :-  

// keys , values , entries , freeze , assign , hasOwnProperty

// let person = {
//     name1:"jay",
//     age:20,
//     address:"indore"
// }
// // console.log(Object.keys(person));
// // console.log(Object.values(person));
// // console.log(Object.entries(person));

// // freeze -> immuatable
// Object.freeze(person)
// person.name1 = "aman"
// console.log(person);

// ================================================

// Shallow copy and deep copy :- 

// shallow copy :- a shallow copy creates a copy of an object.
// nested object is accessible by the refrence , not by the value 

// let obj1 = {
//     name: "jay",
//     address:{
//         city:"indore"
//     }
// }
// let obj2 = {...obj1}// shallow copy

// obj2.address.city = "bhopal"
// console.log(obj1.address.city);


// deep copy : creates a copy of an object but completely independent.
// let obj1 = {
//     name: "jay",
//     address:{
//         city:"indore"
//     }
// }
// let obj2 = JSON.parse(JSON.stringify(obj1))

// obj2.address.city = "surat"
// console.log(obj2.address.city);
// console.log(obj1);
