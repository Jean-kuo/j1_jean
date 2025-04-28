//const {inputAgeGetTicketPrice, calculateTicketPrice} = require('./stage1_3');
import {calculateTicketPrice} from './1_3module';
const readline = require('readline');


// jest.mock('readline', () => {
//     return{
//             createInterface:jest.fn().mockReturnValueOnce({
//                 question: jest.fn((question, callback) => {
//                 callback('5');
//                 }),
//             close: jest.fn()
//         })
//     };
// });
// const createInterface = readline.createInterface



test('input age and output ticket price ', () => {
    
    //僅測試邏輯,測試ok
    let result1 = calculateTicketPrice(5);
    expect(result1).toBe("您符合優待票資格,票價優惠為200元");

    let result2 = calculateTicketPrice(65);
    expect(result2).toBe("您符合優待票資格,票價優惠為200元");
    
    let result3 = calculateTicketPrice(40);
    expect(result3).toBe("您的票價為400元");
})