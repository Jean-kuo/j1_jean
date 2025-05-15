
//列出計算＋算式合一

export function calculationFormula(valueN){
    if (valueN !== 0){
        let arrayFormula = [];
        let sum1 = 0;
        let sum2 = 0;
        let resultSum = 0;

        for (var letterK = 1; letterK < (valueN+1); letterK++){
            if (letterK % 2 == 0){
                arrayFormula.push("+"+letterK);
                sum1 = sum1+letterK;
                }
            else if (letterK % 2 !== 0){
                arrayFormula.push("-");
                arrayFormula.push(letterK);
                sum2 = sum2-letterK;
                }
            };
        arrayFormula.push("=");
        resultSum = sum1+sum2+2;
        arrayFormula.push(resultSum);
        arrayFormula.splice(0,1);
        return arrayFormula;
    }
    else{
        let arrayValue0 = ["0=0"];
        return arrayValue0;
        };
}

//另一種計算 (-1)** 幾次方
export function calculationSumPower(valueN){
    let sumPower = 0;
    for (var letterI = 0; letterI <= (valueN); letterI++){
        sumPower += (letterI * ((-1) ** (letterI)));
    };
    return valueN === 0 ? sumPower : sumPower+2;
    
}


//遞迴函數 寫不出來～

// export function  calculationRecursive(valueN){
    
//     if ((valueN) === 0){
//         return;
//     }
//     else{
//         let sumPower;
//         sumPower += (valueN * ((-1) ** (valueN)));
//         return sumPower + calculationRecursive(valueN - 1);
//     }
    
    
// }
