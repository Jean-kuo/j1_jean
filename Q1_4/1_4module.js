//計算用
export function calculationSUM(valueN){
    let sum1 = 0;
    let sum2 = 0;
    let resultSum = 0;
    if (valueN !== 0){
        for (var letterI = 1; letterI < (valueN+1); letterI++){
            if(letterI % 2 == 0){
                sum1 = sum1+letterI;
            }
            else if(letterI % 2 != 0){
                sum2 = sum2-letterI;
            }
        };
        resultSum = sum1+sum2+2;
    }
    else{
        resultSum = 0;
    }
    
    return resultSum; 
}

//列出算式用
export function calculationFormula(valueN){
    if (valueN !== 0){
        let arrayFormula = ["1"];
        for (var letterK = 2; letterK < (valueN+1); letterK++){
            if (letterK % 2 == 0){
                arrayFormula.push("+"+letterK);
                }
            else if (letterK % 2 !== 0){
                arrayFormula.push("-"+letterK);
                }
            };
        arrayFormula.push("=");
        return arrayFormula;
    }
    else{
        let arrayValue0 = ["0="];
        return arrayValue0;
        };
}


//合一

export function calculationFormula2(valueN){
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
export function calculationSunPower(valueN){
    let sumPower = 0;
    let resultSumPower;
    for (var letterI = 0; letterI <= (valueN); letterI++){
        sumPower += (letterI * ((-1) ** (letterI)));
    };
    resultSumPower = sumPower+2;
    
    return resultSumPower; 
}


//遞迴函數

export function  calculationFormula3(valueN){
    
    if ((valueN) === 0){
        return 1;
    }
    else{
        let sumPower = 0;
        let resultSumPower;
        sumPower += (valueN * ((-1) ** (valueN)));
        return sumPower + 1 + calculationFormula3(valueN - 1)
    }
    
    
}
