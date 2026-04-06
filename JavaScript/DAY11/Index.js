// let arr = [1,2,3,4,5,6]

// // console.log(arr);
// let [a,b,c] = arr;
// console.log(a,b,c);


// in the case of the object 

// let person1 = {
//     name1:"ajay",
//     age:20,
//     address:"indore"
// }

// // console.log(person1);
// // console.log(person1.name1)
// let {name1,age,address} = person1;
// console.log(name1,age,address);



// Event Loop Working :- 

console.log("1");

console.log("2");

setTimeout(() => {
     console.log("3");
}, 0);

console.log("4");

Promise.resolve().then(()=>{
    console.log("5");
})

console.log("6");










