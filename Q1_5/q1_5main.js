/*寫一個遞迴函數 `function umleven(n)` 
來求算 `2*4 + 4*6 + 6*8...+(n-2)*n` 
(n最小為 4, 只會出現偶數)*/

import {isValidInteger} from "../common_modules/isInteger.js";
import {checkValueN, umleven} from "./1_5module.js";

import readline from 'readline';
const read=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

console.log("求算 (2*4 + 4*6 + 6*8...+(n-2)*n) 總和為多少?");

read.question("輸入n值：", function(n) {
  if (Number(checkValueN(n))){
    let result = umleven(checkValueN(n));
    console.log(result);
    read.close();
  }
  else{
    console.log(checkValueN(n));
    read.close();
  }  
})

// //修改ing
// async function getValueN() {
//     await read.question("請輸入偶數且最小為4的數值:", function(){
//         let resultN = checkValueN(resultN);
//         return resultN;
//     })
// };
// let n = getValueN();
// console.log(n);

// let valueN = getValueN();

// let resultUmleven = umleven(valueN);
// console.log(resultUmleven);






// function getValueNAndCheck(){
//     return new Promise ((resolve, reject) => {

//         read.question("請輸入偶數且最小為4的數值:", function(valueN){
            
//             if (isValidInteger(valueN)) {
//                 if (isValueNaEVENnumber(valueN)){
//                     let valueNisOK = Number(valueN);
//                     resolve(valueNisOK);
//                 }
//                 else{
//                     const notOKvalueN = "輸入的n值要為偶數且最小為4";
//                     reject(notOKvalueN);
//                 }
//             }
//             else{
//                 console.log("輸入n值非有效整數");
//                 read.close();
//             }
//         });
//     });
// };


// getValueNAndCheck()
// .then((valueNisOK) => {
//     let formulaSUM = umleven(valueNisOK);
//     console.log("總和為:"+formulaSUM);
    
// })

// .catch((notOKvalueN) => {
//     console.log(notOKvalueN);
    
// })

// .finally(() => {
//     read.close();
// })