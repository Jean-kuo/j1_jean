
import {isValueOver4, isNumberEven, checkValueN, umleven} from './1_5module';
import {isValidInteger} from "../common_modules/isInteger.js";
const readline = require('readline')

jest.mock('readline', () => {
    return{
            createInterface:jest.fn().mockReturnValueOnce({
            question: jest.fn((question, callback) => {
            callback('5');
            }),
            close: jest.fn()
        })
    };
});

describe('value N validation', () => {
    test('Value N is EVEN number', () =>{
        expect(isNumberEven(4)).toBeTruthy();
        expect(isNumberEven(5)).toBeFalsy();
    });
    test('Value N is greater than 4', () => {
        expect(isValueOver4(4)).toBeTruthy();
        expect(isValueOver4(3)).toBeFalsy();
    })
    test('Value N is EVEN and greater than 4', () => {
        expect(checkValueN(4)).toBe(4);
        expect(checkValueN(-1)).toBe("輸入數值非正整數");
        expect(checkValueN(3)).toBe("輸入數值小於4");
        expect(checkValueN(5)).toBe("輸入數值非偶數");
    });
});



test('umleven', () => {
    let sum = umleven(8);
    expect(sum).toBe(80);
});