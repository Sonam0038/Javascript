// function Parent(){
//     let count =0;

//     return function(){
//         count++; // 1
//         console.log(count);
//     }
// }
// const counter = Parent();
// counter();// 1
// counter()

// =============================================


const globalDiscout = 5;
function Store(){
    let storeDiscount= 10;

    function Product(){
        let productDiscount = 15;

        function CalculatePrice(price){
            let totalDiscount = globalDiscout+storeDiscount+productDiscount;
            let finalPrice = price - (price*totalDiscount/100)
            console.log(finalPrice);
        }
        CalculatePrice(1000)
    }
    Product()
}
Store()
