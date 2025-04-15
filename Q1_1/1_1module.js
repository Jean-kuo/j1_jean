
//判斷是否為0  //ES6
//export const isThereZero = (people) => {}

export function  isZero  (people)  {
    let result;
    if( ! Number(people)){
        result = false;
    }//"今日暫停播放電影"

    else{
        result = true;
    }//"照常電影播放"
    return result;
}

export function isMaxPeople300 (people) {
    
    if (Number(people) > 300){
        return true;//"人數超過電影院容納量"
    }
    else {
        return false;//"人數未超過"
    }

}

//module.exports = {isThereZero};//commonJS

//export default isThereZero;
//每個檔案只能有一個default

//驗證器validator.js寫法
//validator.inInt(people, {min:0, max:300})