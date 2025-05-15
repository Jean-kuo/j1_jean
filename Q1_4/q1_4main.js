
/*輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和 */

import {calculationSumPower, calculationFormula3, calculationFormula} from "./1_4module.js";
import {isValidInteger} from "../common_modules/isInteger.js";

import readline from'readline';
const read=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

read.question("輸入n值:",function (inputN) {
    if (isValidInteger(inputN)) {
        let valueN = Number(inputN);
        
        let arrayFormula = calculationFormula(valueN)
        
        console.log(arrayFormula.join(""));

        let sunPower = calculationSumPower(valueN);
       // let sunRecur = calculationFormula3(valueN);
        console.log(sunPower);
        //console.log(sunRecur);

        read.close();
    }
    else{
        console.log("請輸入0或正整數");
        read.close();
    }
    
});

//用process.stdout.write做法因無回傳值,測試不好測;改成 列入陣列再用join輸出，有回傳值可以測試

