
//export const isThereZero = (people) => {}
import {isValidInteger} from "../common_modules/isInteger.js";

//整合驗證
export function shouldOpenMovie(movieAudience){
    
    let movieStatusMessage = {
        zero : () => console.log("今日暫停播放電影") ,
        one : () => console.log("照常電影播放"),
        second : () => console.log("人數超過電影院容納量"),
        third : () => console.log("請輸入正確數字")
    };

    if (! isValidInteger(movieAudience)){
        movieStatusMessage.third();
    }
    else if (! Number(movieAudience)){
        movieStatusMessage.zero();
    }
    else if ((1 <= movieAudience) && (movieAudience <= 300)){
        movieStatusMessage.one();
    }
    else if (movieAudience > 300){
        movieStatusMessage.second();
    };

    
}

//module.exports = {isThereZero};//commonJS