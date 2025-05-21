/*使用者輸入兩個整數，將它們分別除以 3 ，
判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。*/

//重點糾錯:ab全域變數宣告,function執行順序,a=Number()寫法注意

import {areRemainderEqual} from "./1_2module.js"
import {isValidInteger} from "../common_modules/isInteger.js";
import readline from 'readline';

const read=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

var q1=read;
var q2=read;

console.log("請輸入兩個整數");
q1.question("整數一:",questionQ1("整數一:"))

function questionQ1(title) {
    return function (integer01) {
        if (isValidInteger(integer01)) {
            q2.question("整數二:", questionQ2("整數二:",integer01));
        }
        else {
            console.log("請輸入數字");
            q1.question(title,questionQ1(title));
        }
    };
}
function questionQ2(title,integer01) {
    return function (integer02) {
        if (isValidInteger(integer02)) {
            const dividedResult = areRemainderEqual([integer01, integer02]);
            console.log(dividedResult);
            read.close();
        }
        else {
            console.log("請輸入數字");
            q2.question(title, questionQ2(title,integer01));
        }
    };
}



