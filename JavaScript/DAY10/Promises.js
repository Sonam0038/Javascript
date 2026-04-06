// Without promise
// Without promise

// Syntax :- 

// new Promise((resolve,reject)=>{
  
// })


// ================================


// Example :- 


// let myPromise = new Promise((resolve,reject)=>{
//     let ice_cream = true;
//     if(ice_cream === true){
//         console.log("ice-cream");
//     }else{
//         console.log("ice-cream");
//     }
// })

// myPromise.then((data)=>{
//      console.log(data);
// }).catch((error)=>{
//      console.log(error);
// })

// =========================================


// without Promises :- 

// setTimeout(()=>{
//     console.log("Step1");

//     setTimeout(()=>{
//         console.log("setp-2");

//          setTimeout(()=>{
//         console.log("step 3");
//       },1000)
//     },2000)
// },3000)



// With Promises :- 

// function fetchUsers(){
//    return fetch("https://jsonpllder.typicode.com/users")
//     .then((res)=> res.json())
//     .then((data)=>{
//         console.log("Users data :", data);
//         return data
//     }).catch((err)=> console.log("user fetching error :",err))
// }

// function fetchPost(){
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=> res.json())
//     .then((data1)=> {
//         console.log("post data :",data1);
//         return data1;
//     }).catch((error)=>{
//         console.log("Fetching post data",error);
//     })
// }

// fetchUsers().then(()=>{
//     fetchPost();
// })


// ==========================================

// async and await :- 

async function fetchUsers(){
   try {
    const res =await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("users data",data);
    return data;
   } catch (error) {
     console.log("Error fetching users",error);
   } }
async function fetchPost(){
   try {
    const res =await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("Post data",data);
    return data;
   } catch (error) {
     console.log("Error fetching Posts",error);
   }
}
// calling both function 
async function getData(){
   await fetchUsers();
   await fetchPost();
}
getData()