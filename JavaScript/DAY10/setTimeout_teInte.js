// setTimeout(()=>{
//    console.log("hy i am run after 1 second");
// },1000)

// setTimeout(()=>{
//    console.log("hy i am run after 2 second");
// },2000)

// setTimeout(()=>{
//    console.log("hy i am run after 3 second");
// },3000)

  let count =0;
let interval = setInterval(() => {
   
         count++;
        console.log(count);
     if(count==5){
         clearInterval(interval);
     }
}, 2000);