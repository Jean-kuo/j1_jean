//import readline from 'readline';

// const read=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });


// //兩個整數分別除以3,顯示餘式相同/不同
// export function areRemainderEqual(integer01,integer02) {
//     let divider = 3; //方便做修正
//     let divideResult;
//     if ((integer01 %= divider) == (integer02 %= divider)){
//         return divideResult = ("餘式相同");
//     }
//     else{
//         return divideResult = ("餘式不同");
//     };
// }
const {isValidInteger} = require ("../common_modules/isInteger.js");
//物件寫法
export function areRemainderEqual(integerList, divisor = 3){
    let remainder = 0;
    let result = true;
    integerList.forEach((integer, index)=>{
        if (!isValidInteger(integer))result = false;
        if (result === false)return;

        if (index === 0)
            remainder = integer % divisor;
        else{
            const current_remainder = integer % divisor;

            if (current_remainder !== remainder)
                result = false;
        }
    })
    let divideResult = (result) ? "餘數相同" : "餘數不同";
    return divideResult;
}







// import {isValidInteger} from '../common_modules/isInteger.js';
// // import { log } from 'console';
// //檢查輸入整數一是否為整數
// function getAnswer(q) {
//     return new Promise ((resolve, reject) => {
//         read.question(q,  function(integer01){
//             resolve(integer01);
//         })
//     })

// };

// //檢查輸入整數一是否為整數
// export function readLineInteger1() {
//     return new Promise ((resolve, reject) => {
//         read.question("輸入整數一:",  function(integer01){
//             if (isValidInteger(integer01)){
//                 return resolve(integer01);
//             }
//             else{
//                 let isNotInteger = "不是整數";
//                 return reject(isNotInteger);//這部分回傳不太懂
                
//             }
         
//      })
//     })
// };


// //檢查輸入整數二是否為整數
// export function readLineInteger2() {
//     return new Promise ((resolve, reject) => {
//         read.question("輸入整數二:",  function(integer02){
//             if (isValidInteger(integer02)){
//                 //read.close();
//                 return resolve(integer02);
//             }
//             else{
//                 let isNotInteger = "不是整數";
//                 //read.close();
//                 return reject(isNotInteger);
//             }
//      })
//     })
// };

// export function test() {
//     console.log("test")
// }



//code view修改版
// export async function readLineInteger1() {
//     const str= "輸入整數一"
//     const answer = await getAnswer(str);

//     if (isValidInteger(answer)){
//         console.log('1')
//         return answer;
//     }
//     else{
//         console.log('not init')
//         return readLineInteger1(str);
        
//     }
// }


// export function areRemainderEqual(integer01,integer02){
//     // let number01 = integer01;
//     // let number02 = integer02;
//     let divisor = 3;
//     let divisionPair = {
//         divisor : divisor,
//         dividend01 : integer01,
//         dividend02 : integer02,
//         remainder01 : integer01 %= divisor,
//         remainder02 : integer02 %= divisor
//     }
//     let divideResult = (divisionPair.remainder01 === divisionPair.remainder02) ? "餘式相同" : "餘式不同";
//     return divideResult;
// }