// typecasting :- we can convert from one datatype to another datatype.

// 1. implicit typecasting  -> Automatically
// 2. Explicit typecasting  -> Mannual 



// implicit :- 

console.log(10+10);// 20 
console.log(10+'10');// 1010 // concat
console.log(10-'10');// - , * , / -> string -> number // 10-10 /// 0 
console.log(10*'10');// 100


// Explicit 
console.log(10+Number('10'));// 20
console.log(String(10)+10);// 1010
console.log(Number(100)+20);
console.log(10+'a');// NAN

