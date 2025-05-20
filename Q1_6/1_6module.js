
import {isLetters} from "../common_modules/isLetters.js";


//另一個寫法 填入1~4可求出此名字的單數字母
//引入name
export function getSplitName (a,name) {
    let splitX = name[(a-1)].split('')
    let arrayX = []
    for (var i = 0; i < (splitX.length); i++){
        if (i % 2 == 0){
            arrayX.push(splitX[i]);
        };
    };
    console.log(`第 ${a} 個名字字母單數輸出: ${arrayX.join(",")} `);
}
//arrayX.join(",")間隔有","分隔


//使用者輸入名字＆驗證
export function userInput(query){
    return new Promise((resolve, reject) => {
        read.question(query, answer => {
            //驗證是否英文字母
            if (isLetters(answer)) {
                resolve(answer)
            }
            else{
                reject("請輸入英文名字")
            }
        });
    });
};