//const {isthereZero} = require('./stage1_1');//原先寫法//commonJS

// import {isZero} from './1_1module.js';//ES6
import {shouldOpenMovie} from "./1_1module.js";
const readline = require('readline');

jest.mock('readline', () => {
    return{
            createInterface: jest.fn().mockReturnValueOnce({
            question: jest.fn((question, callback) => {
            callback('0');
            }),
            close: jest.fn()
        })
    };
});


// const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); 

// afterEach(() => {
//   logSpy.mockClear(); // 每次測試後清除呼叫記錄
// });

// afterAll(() => {
//   logSpy.mockRestore(); // 測試完後還原 console.log
// });

describe('shouldOpenMovie return messages', () => {
  
  test('if user input not Integer, print "請輸入正確數字"', () => {
    
    expect(shouldOpenMovie("abc")).toBe("請輸入正確數字");
  });
  
  test('if Audience is zero, print "今日暫停播放電影"', () => {
    
    expect(shouldOpenMovie(0)).toBe("今日暫停播放電影");
  });
  
  test('if Audience in the range of 1~300, print "照常電影播放"', () => {
    
    expect(shouldOpenMovie(1)).toBe("照常電影播放");
  });
  
  test('if Audience out of 300, print "人數超過電影院容納量"', () => {
  
    expect(shouldOpenMovie(301)).toBe("人數超過電影院容納量");
  });

})

