import {areRemaindersEqual, test, readLineInteger1, readLineInteger2} from './1_2module.js';
import {isValidInteger} from '../common_modules/isInteger.js';

import readline from 'readline';
const read=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

// function readLineInteger1() {
//     return new Promise ((resolve, reject) => {
//         read.question("輸入整數一:",  function(integer01){
//             if (isValidInteger(integer01)){
//                 return resolve(integer01);
//             }
//             else{
//                 let isNotInteger = "不是整數";
//                 return reject(isNotInteger);
                
//             }
         
//      })
//     })
// };

// function readLineInteger2() {
//     return new Promise ((resolve, reject) => {
//         read.question("輸入整數二:",  function(integer02){
//             if (isValidInteger(integer02)){
//                 return resolve(integer02);
//             }
//             else{
//                 let isNotInteger = "不是整數";
//                 return reject(isNotInteger);
                
//             }
//      })
//     })
// };


while (true) {
    
    read.question("輸入整數一：",  function(integer01){
        let isNotInteger;
        if (isValidInteger(integer01)){
            read.question("輸入整數二：", function(integer02){
                if (isValidInteger(integer02)){
                    const dividedResult = areRemaindersEqual(integerA, integerB);
                    console.log(dividedResult);
                    read.close();
                    return true;
                }
                else{
                    isNotInteger = "不是整數，請重新輸入2";
                    console.log(isNotInteger);
                    return false;
                }
            })
        }
        else{
            isNotInteger = "不是整數，請重新輸入1";
            console.log(isNotInteger);
            return false;
            
        }
    })
}


// //第一版,輸入整數二 輸入錯誤又會回到 輸入一 重新提問
// async function inputWhileQuestion(){
//     while (true){
//         try{
//             const integerA = await readLineInteger1();
//             const integerB = await readLineInteger2();
//             const dividedResult = areRemaindersEqual(integerA, integerB);
//             console.log(dividedResult);
//             read.close();
//             return true;
//         }
//         catch(error){
//             console.log("輸入數值有誤，請重新輸入");
//             read.close();
//         }
//     }
// };
// inputWhileQuestion();


//

//

//

// while (true){
//     try{
        
//         const integerA = await readLineInteger1();
//         while (true){
//             try{
//                 const integerB = await readLineInteger2();
//                 const dividedResult = areRemaindersEqual(integerA, integerB);
//                 console.log(dividedResult);
//                 read.close();
//                 return true;
//             }
//             catch (error){
//                 console.log(error);
//                 //console.log("輸入數值有誤，請重新輸入1");
//                 await readLineInteger2();
//                 //return true;
//             };
//         };
        
//     }
//     catch(error){
//         console.log("輸入數值有誤，請重新輸入2");
        
//     };
// };

// inputWhileQuestion();