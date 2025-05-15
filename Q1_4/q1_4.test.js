
import {calculationSumPower, calculationFormula} from './1_4module';
const readline = require('readline')

jest.mock('readline', () => {
    return{
            createInterface:jest.fn().mockReturnValueOnce({
            question: jest.fn((question, callback) => {
            callback('0');
            }),
            close: jest.fn()
        })
    };
});

describe('check calculation of the sum is right', () => {
    test('calculationFormula test', () => {
        const arrayX = calculationFormula(0);
        const arrayY = calculationFormula(8);
        let X = arrayX.join("");
        let Y = arrayY.join("");
        expect(X).toBe("0=0");
        expect(Y).toBe("1+2-3+4-5+6-7+8=6");
        
    });
    test ('calculationSumPower test', () => {
        let resultPower1 = calculationSumPower(0);
        let resultPower2 = calculationSumPower(8);
        expect(resultPower1).toBe(0);
        expect(resultPower2).toBe(6);
    })
});
