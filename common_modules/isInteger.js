
export function isValidInteger (keyWord){
    const regex = /^0$|^[1-9]\d*$/;
    //console.log(regex.test(keyWord));
    return regex.test(keyWord);
}


