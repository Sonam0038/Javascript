

// Array :-  huge memory block used to contain the diff types of element.
// Hetero -> diff 

// Array index always strat from the 0 

// let arr = [1,2,4,5,5,9,6,7]
// // console.log(arr[0]);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// Method of Array :-  
// push , pop , shift , unshift , indexOf , slice , splice 
// includes , 
// Iteration Methods :- 
// 1. forEach 
// 2. for of
// 3. for in 
// 4. filter 
// 5. map 
// 6. reduce 
// 7. find 
// 8. findIndex
// / 9. some 
// 10. every

// // push - element push from the last 
// let arr1 = [1,2,3,4,5]
// arr1.push(100,200)
// console.log(arr1);

// // pop - remove element from the end 
// let arr2 = [1,2,3,4,5]
// console.log(arr2.pop());

// // shift - remove the element from the begining.
// let arr3 = [1,2,3,4,5]
// // console.log(arr3.shift());
// let ar = arr3.shift();
// console.log(ar);
// console.log(arr3);

// // unshift - add the element from the begining.
// let arr4 = [1,2,3,4,5]
// arr4.unshift(100,200,300,400)
// console.log(arr4);

// // indexOf :- return the index of the element.
// let arr5 = [1,2,3,4,5]
// console.log(arr5.indexOf(4));// 3

// // slice :- we can extract the subArray from the array.
// // slice Syntax :- (start index,end index) - end index - exclude 
// let arr6 = [1,2,3,4,5,6,7,8,9]
// let sl1 = arr6.slice(3,7)
// console.log(sl1);


// // splice :- we can delete and replace the element on the position.
// // splice Syntax :- (start index, deleteCount, item1,item2,item3)
// let arr7 = [1,2,3,4,5,6,7,8,9]
// arr7.splice(2,3,1000)
// console.log(arr7);

// include :- true || false 
// let arr8 = [10,20,30,40]
// console.log(arr8.includes(300)); 

//  forEach  method :-  it will return index , value , array.
// let arr9 = [10,20,30,40,50,60,70]
// arr9.forEach((value,index,array)=>  {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// } );


// for of and for in 
//for of -> return only value , Array , String , map
// for in -> return onlu index/key , Array , Object

// for of -> in the case of Array
// let arr10 = [1,2,3,4,5,6]
// for(let value of arr10){
//     console.log(value);
// }

// // for of -> in the case of String
// let s1 = "sonamdebugshala"
// for(let value1 of s1){
//     console.log(value1);
// }

// // for of -> in the case of Map
// let map1 = [["name","ajay"],["age",20],["address","indore"]]
// for(let value2 of map1 ){
//     console.log(value2);
// }

// ===================================

// for in :- index/keys -> array , Object

// let arr11 = [9,1,3,5,23,6,365]
// for(let index1 in arr11){
//     console.log(index1);
// }


// let person = {
//     "name":"jay",
//     "age":23
// }
// for(let v in person){
//     console.log(v);
// }

// =================================================

// filter -> it will filter the elements based on the condition.
// map -> it will return the element in the new arra , we can perform the cal.
// reduce :- it will return the single value after the calculation.


// let arr12 = [10,20,30,40,50,60,70,95,1]
// let filter1 = arr12.filter((item)=>{
//     return item%2==0;
// })
// console.log(filter1);


// let arr13 = [10,20,30,40,50,60,70,95,1]
// let map1 = arr13.map((item)=>{
//     return item*10;
// })
// console.log(map1);

// let arr14 = [10,20,30,40,50,60,70,95,1]
// let red1 = arr14.reduce((item,total)=>{
//     return total*item; // 0+10 // 10 - 10+20 = 30
// },1)
// console.log(red1);

 
// 7. find -> find and filter -> return first element who met the condition. 
// 8. findIndex - ret
// / 9. some -> check some element are met the condition -> true / false
// 10. every -> check every elemene are met the condition.

// let arr15 = [1,2,4,5,6,7,10]
// let find1 = arr15.find((item)=>{
//     return item%2==0;
// })
// console.log(find1);


// let arr15 = [1,2,4,5,6,7,10]
// let find1 = arr15.findIndex((item)=>{
//     return item%2==0;
// })
// console.log(find1);

// ctrl+/

// let arr15 = [1,2,4,5,6,7,10]

// sort method :- sort the element 
// let arr = [5,3,1,7,8] // [1,3,5,7,8]
// let sort1 = arr.sort((a,b)=>{
//   return a-b;
// })
// console.log(sort1);

// 5 and 3  a= 5 b = 3  5-3 -> 2 -> [1,3,5,7,8]






