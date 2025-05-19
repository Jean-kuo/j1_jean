//另一個寫法 填入1~4可求出第1~4個名字單數
export function getSplitName (a) {
    let splitX = name[a].split('')
    let arrayX = []
    for (var i = 0; i <= (splitX.length); i++){
        if (i % 2 == 0){
            arrayX.push(splitX[i]);
        };
    };
    console.log(`第 ${a+1} 個名字字母單數輸出: ${arrayX.join("")} `);
}