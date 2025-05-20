
/*6. 宣告陣列 `name`，
讓使用者自行輸入四個英文名字於陣列中，
輸出第一個和第三個名字的單數個字母。 */

//問題1.輸出名字中單數位置的字母
//問題2.陣列的單數?還是人類的單數?
import {isLetters} from "../common_modules/isLetters.js";
import {getSplitName, userInput} from './1_6module.js';


import  readline from 'readline';
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let name = [];


// function userInput(query){
//     return new Promise((resolve, reject) => {
//         read.question(query, answer => {
//             //驗正是否英文字母
//             if (isLetters(answer)) {
//                 resolve(answer)
//             }
//             else{
//                 reject("請輸入英文名字")
//             }
//         });
//     });
// };
async function pushName(){
    let number = 1;
    while (number <= 4){
        try{
            let inputName = await userInput(`輸入第${number}個名字: `);
            name.push(inputName);
            number+=1;
        }
        catch(error){
            console.log(error)
        }
    };
    read.close();
    return name;
};

//另一種async寫法
(async () => {
    const name = await pushName();
    console.log(name)
    getSplitName(1, name);
    getSplitName(3, name);
    
})();

//出現錯誤cannot read properties of undefined，
// 推估是因為pushName是非同步函式，反而name等不到值傳入就被getSplitName抓走了
