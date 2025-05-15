import {areRemainderEqual, test, readLineInteger1, readLineInteger2} from './1_2module.js';
import {isValidInteger} from '../common_modules/isInteger.js';

import readline from 'readline';
const read=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});


//單純promise包住readline
function inputInteger() {
    return new Promise ((resolve, reject) => {
        read.question("輸入整數一:",  function(integer01){
            if (isValidInteger(integer01)){
                resolve(integer01);
            }
            else{
                let error = "不是整數，請重新輸入";
                reject(error);
            }

        })
    })
};



async function whileQuestion() {
    while (true){
        try{
            let integer01 = await inputInteger();
            let integer02 = await inputInteger();
            const dividedResult = areRemainderEqual(integer01, integer02);
            console.log(dividedResult);
            read.close();
            return true;

        }
        catch(error){

            console.error(error);
        }
        
        // if (isValidInteger(integer01)){
        //     let integer02 = await inputInteger();
            
        //     if (isValidInteger(integer02)){
        //         const dividedResult = areRemainderEqual(integer01, integer02);
        //         console.log(dividedResult);
        //         read.close();
        //         return true;
        //     }
        //     else{
        //         console.log("不是整數，請重新輸入2");
        //         console.log("輸入整數二：");
        //         return false;
        //     }
            
        // }
        // else{
        //     console.log("不是整數，請重新輸入1");
        //     console.log("輸入整數一：")
        //     return false;
        // }
    }
}
whileQuestion();



// //第一版,輸入整數二 輸入錯誤又會回到 輸入一 重新提問
// async function inputWhileQuestion(){
//     while (true){
//         try{
//             const integerA = await readLineInteger1();
//             const integerB = await readLineInteger2();
//             const dividedResult = areRemainderEqual(integerA, integerB);
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
//                 const dividedResult = areRemainderEqual(integerA, integerB);
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