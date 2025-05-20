
/*6. 宣告陣列 `name`，
讓使用者自行輸入四個英文名字於陣列中，
輸出第一個和第三個名字的單數個字母。 */

//問題1.輸出名字中單數位置的字母
//問題2.陣列的單數?還是人類的單數?
import {isLetters} from "../common_modules/isLetters.js";
import {getSplitName} from './1_6module.js';


import  readline from 'readline';
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let name = [];


function userInput(query){
    return new Promise((resolve, reject) => {
        read.question(query, answer => {
            //驗正是否英文字母
            if (isLetters(answer)) {
                resolve(answer)
            }
            else{
                reject("請輸入英文名字")
            }
        });
    });
};
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
    
})();

getSplitName(1, name);

getSplitName(3, name);
//出現錯誤cannot read properties of undefined，
// 推估是因為pushName是非同步函式，反而name等不到值傳入就被getSplitName抓走了





// function splitName () {//分裂名字字母並輸出單數
//     let splitA = name[0].split('');
//     let splitB = name[2].split('');
//     let arrayA = []
//     let arrayB = []
//     //第一個名字
//     for (var i = 0; i <= (splitA.length); i++){
//         if (i % 2 == 0){
//             arrayA.push(splitA[i]);
//         };
//     };
//     console.log("第一個名字字母單數輸出:"+arrayA.join(""));
//     //第三個名字
//     for (var j = 0; j <= (splitA.length); j++){
//         if (j % 2 == 0){
//             arrayB.push(splitB[j]);
//         };
//     };
//     console.log("第三個名字字母單數輸出:"+arrayB.join(""));
        
    
// }

// function pushName(n) {//將名字加入陣列 (刪除)
//     name.push(n);
//     return name;
// }

// let [a, b] = shiftName()
// let values = shiftName()
// let shiftA = values[0]
// let shiftB = values[1]
// function shiftName () {//提取第1,3個名字(錯誤:shift是提取/刪除第一個元素)
//     let a = name.shift(1);
//     let b = name.shift(3);
//     //return shiftA, shiftB; //javascript不能回傳一個值以上,此處只會回傳最後的shiftB
//     return [a, b];//可用陣列回傳兩個值以上

