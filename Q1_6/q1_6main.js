
/*6. 宣告陣列 `name`，
讓使用者自行輸入四個英文名字於陣列中，
輸出第一個和第三個名字的單數個字母。 */

//問題1.輸出名字中單數位置的字母
//問題2.陣列的單數?還是人類的單數?

let name = [];

const readline = require( 'readline' );
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var q1 = read;
var q2 = read;
var q3 = read;
var q4 = read;

q1.question("輸入第一個名字:", function (input1) {
    name.push(input1);
    q2.question("輸入第二個名字:", function (input2){
        name.push(input2);
        q3.question("輸入第三個名字:", function (input3) {
            name.push(input3);
            q4.question("輸入第四個名字:", function (input4) {
                name.push(input4);
                console.log("name陣列:"+name);
                getSplitName(0);//第一個名字
                getSplitName(2);//第三個名字
                //splitName(name);
                read.close();
            });
        });
    });
    
});

module.exports = {getSplitName};


//另一個寫法 填入1~4可求出第1~4個名字單數
function getSplitName (a) {
    let splitX = name[a].split('')
    let arrayX = []
    for (var i = 0; i <= (splitX.length); i++){
        if (i % 2 == 0){
            arrayX.push(splitX[i]);
        };
    };
    console.log(`第 ${a+1} 個名字字母單數輸出: ${arrayX.join("")} `);
}




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