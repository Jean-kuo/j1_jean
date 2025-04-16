/*好想電影院規定除非完全沒有客人買票，
否則就算只有一位顧客也照常播放電影。
讓使用者輸入客人的人數，並用「!」判斷人數，
不為零顯示「照常播放電影」。*/

//非邏輯運算符號"!"
//使用者輸入值視為字串,字串視為truthy值
//!0=True
//const readline=require('readline');屬node.js commonJS寫法

import {isMaxPeople300, isZero} from "./1_1module.js";
import {isValidInteger} from "../common_modules/isInteger.js";
import validator from 'validator';
import  readline from 'readline';
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


// read.question( "輸入今日到場人數:" , function (movieAudience) {
//     if (isValidInteger (movieAudience)) {
//         if (isMaxPeople300(movieAudience)){
//             console.log("人數超過電影院容納量");
//             read.close();
//         }
//         else{
//             const result = isZero(movieAudience) ? "照常電影播放" : "今日暫停播放電影";
//             console.log(result);
//             read.close();
//         }
//     }
//     else{
//         console.log("請輸入正確數字");
//         read.close();
//     }
// });
function shouldPauseMovie(movieAudience) {
    validator.isInt(movieAudience, {min:1, max:300});
} 
read.question( "輸入今日到場人數:" , function (movieAudience) {
    shouldOpenMovie(movieAudience);
    read.close();
})


function shouldOpenMovie(movieAudience){
    let movieStatusMessage = {
        zero : console.log("今日暫停播放電影"),
        one : console.log("照常電影播放"),
        second : console.log("人數超過電影院容納量"),
        third : console.log("請輸入正確數字")
    };

    if (! isValidInteger(movieAudience)){
        movieStatusMessage.third;
    }
    else if (! Number(movieAudience)){
        movieStatusMessage["zero"];
    }
    else if (1 <= movieAudience <= 300){
        movieStatusMessage.one;
    }
    else if (movieAudience > 300){
        movieStatusMessage.second;
    };
}