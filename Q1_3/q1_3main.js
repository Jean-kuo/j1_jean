/*好想樂園的門票一張400元，
優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
試用「[比較運算子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison)」
// 寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。 */

import {isValidInteger} from "../common_modules/isInteger.js";
import {calculateTicketPrice} from "./1_3module.js";

import readline from 'readline';
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


//一般
read.question("請輸入年齡：", function(age){
    if (isValidInteger(age)) {
        let resultPrice = calculateTicketPrice(age);
        console.log(resultPrice);
        read.close();
    }
    else{
        console.log("年齡請輸入正確的正整數");
        read.close();
    }
})



// //callback寫法
// function getTicketPrice(callback){

//     read.question("請輸入年齡:", function(age){
//         if (isValidInteger(age)) {
//             let resultPrice = calculateTicketPrice(age);
//             callback (resultPrice);
//             read.close();
//         }
//         else{
//             callback("年齡請輸入正確的正整數");
//             read.close();
//         }    
//     });

// }
// getTicketPrice(console.log);


// //promise寫法
// function getTicketPrice(){
//     return new Promise((resolve, reject) => {
//         read.question("請輸入年齡:", function(age){
//             let resultPrice;
//             if (isValidInteger(age)) {
//                 resultPrice = calculateTicketPrice(age);
//                 resolve (resultPrice);
//                 read.close();
//             }
//             else{
//                 resultPrice = "年齡請輸入正確的正整數";
//                 reject(resultPrice)
//                 read.close();
//             }    
//         });
//     });
// }
// getTicketPrice()
// .then ((resultPrice) => {console.log(resultPrice)})
// .catch((resultPrice) => {console.log(resultPrice)});




// //async/await作法

// async function getTicketPrice(){
//     try{
//         await read.question("請輸入年齡：", function(age){
//             if (isValidInteger(age)) {
//                 let resultPrice = calculateTicketPrice(age);
//                 console.log(resultPrice);
//                 read.close();
//             }
//             else{
//                 console.log("年齡請輸入正確的正整數");
//                 read.close();
//             }
//         })
//     }
//     catch(error){
//         console.log("error");
//     }
// }
// getTicketPrice();