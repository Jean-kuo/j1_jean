// let amusementParkTicket = {};
// amusementParkTicket.originPrice = 400;
// amusementParkTicket.concessionTicket = amusementParkTicket.originPrice/2;

export function calculateTicketPrice(age){
    const originTicketPrice = 400;

    let amusementParkTicket = {
        originPrice : originTicketPrice,
        concessionPrice : originTicketPrice/2,
    }
    let resultPrice;//宣告變數
    if ((age <= 6) || (age >= 65)){

        resultPrice = `您符合優待票資格,票價優惠為${amusementParkTicket.concessionPrice}元`;
    }
    else{
        resultPrice = `您的票價為${amusementParkTicket.originPrice}元`;
    }
    return resultPrice;
}
