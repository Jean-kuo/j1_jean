export function isLetters (keyWord){
    const regex = /$^[a-zA-Z\s]+$/;
    //console.log(regex.test(keyWord));
    return regex.test(keyWord);
}