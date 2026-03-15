// // let s1 = "sonam khandelwal"
// // let sp1 = s1.split(" ")
// // console.log(sp1);


// 1. toUpperCase() -> upperscase
// 2. toLowerCase() -> lowercase
// 3. starsWith() -> check true and false
// 4. endsWith() -> check true and false 
// 5. trim()  ->  remove the white space from the begin
// 6. split() -> String -> convert -> Array 
// 7. replace() -> indore to bhopal
// 8. charAt() -> element 3
// 9. charCodeAt() -> element -> ascii 
// 10. slice() - string subpart 
// 11. subString() -> string subpart
// 12. includes() - check include
// 13. indexOf() -> 
// 14. repeat(5) -> indore


// toUpperCase - 

let s1 = "debuhShalA"
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());

let s2= "my institute name is debugshala"
console.log(s2.startsWith("MY"));
console.log(s2.endsWith("debugshala"));

let s3 = "    jeans"
console.log(s3.trim());

let s4 = "debugshala indore"
let s44 = s4.split(" ");
console.log(s44);

let s5 = "indore to ujjain";
let s51 = s5.replace("ujjain","bhopal")
console.log(s51);

// chatAt -> 
let s6 = "indore"
console.log(s6.charAt(1));
console.log(s6.charCodeAt(2));// ASCII A-65 , a -97

// slice and subString
// slice -> extract the subpart -> negative index [start index,end index]
// 0 1 2
// D E B U G S H A L A
//                -2  -1

let s7 = "debugshala";
console.log(s7.slice(2,5));
console.log(s7.slice(-6));

// substring - extract subpart , wont accept negative indexes.
let s8 = "debugshalaindore "
console.log(s8.substring(4,7));
console.log(s8.repeat(5));

// ============================================

// Reverse the String 
// // Method
// let s9 = "indore"
// let rev = s9.split('').reverse().join('')
// console.log(rev);

// without method
// let s10 = "debugshala"
// let rev1 = ""
// for(let i=0;i<s10.length;i++){
//     rev1 =  s10[i]+ rev1;// rev1 = d || bed
// }
// console.log(rev1);