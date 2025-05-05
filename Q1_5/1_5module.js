import {isValidInteger} from "../common_modules/isInteger.js";

//判斷輸入n值為n>=4 且 n為偶數  
export function isValueNaEVENnumber(valueN){
    const resultValueN = (valueN >= 4) && (valueN % 2 == 0) ? true : false;
    return resultValueN;
}

//判斷輸入n值為n>=4
export function isValueOver4(valueN){
    let resultOver4 = (valueN >= 4) ? true : false;
    return resultOver4;
}
//判斷輸入n值為偶數
export function isNumberEven(valueN){
    let resultEven = (valueN % 2 === 0) ? true : false;
    return resultEven;
}

//合一
export function checkValueN(valueN){
    if ( ! isValidInteger(valueN)) return "輸入數值非整數";
    if ( ! isValueOver4(valueN)) return "輸入數值小於4";
    if ( ! isNumberEven(valueN)) return "輸入數值非偶數";
    
    return valueN; 
}

//遞迴函數 增設中止條件 避免負數造成無窮遞迴（報錯：maximum call stack size exceeded）
export function umleven(valueN){
    if (valueN <= 2 || valueN < 0){
        return 0;
    }
    let umlevenSum = valueN * (valueN - 2);
    return umlevenSum + umleven(valueN - 2);
}
