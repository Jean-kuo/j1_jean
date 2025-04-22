

import {isValidInteger} from "../common_modules/isInteger.js";

//整合驗證
export function shouldOpenMovie(movieAudience){
    
    //修改方便更改＋測試的版本
    let movieStatusMessage = {
        zero : "今日暫停播放電影" ,
        one : "照常電影播放",
        second :  "人數超過電影院容納量",
        third : "請輸入正確數字"
    };

    if (! isValidInteger(movieAudience)){
        return movieStatusMessage.third;
    }
    else if (! Number(movieAudience)){
        return movieStatusMessage.zero;
    }
    else if ((1 <= movieAudience) && (movieAudience <= 300)){
        return movieStatusMessage.one;
    }
    else if (movieAudience > 300){
        return movieStatusMessage.second;
    };

    
}
