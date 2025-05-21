
import {areRemainderEqual} from './1_2module.js';
const readline = require('readline');//預設匯出
//const {dividedby3} = require('./stage1_2')//具名匯出


jest.mock('readline', () => {
    return{
            createInterface:jest.fn().mockReturnValueOnce({
            question: jest.fn((question, callback) => {
            callback('12','15');
            }),
            close: jest.fn()
        })
    };
});

// test(' two integer divided by 3 and their remainder are the same', () => {
test(' 12, 15 divided by 3 and get message "餘數相同"', () => {
    let result1 = areRemainderEqual([12, 15]);
    expect(result1).toBe("餘數相同");
});
test('13,18 divided by 3 and get message "餘數不同"', () => {
    let result2 = areRemainderEqual([13, 18]);
    expect(result2).toBe("餘數不同");
});
test('21,11 divided by 3 and get message "餘數不同"', () => {  
    let result3 = areRemainderEqual([21, 11]);
    expect(result3).toBe("餘數不同");
});