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




// test('range of audience decide movie open', () => {
//     let resultMovieStatus1 = shouldOpenMovie(0);
//     expect(resultMovieStatus1) . toMatch("今日暫停播放電影");

//     let resultMovieStatus2 = shouldOpenMovie(1);
//     expect(resultMovieStatus2) . toMatch("照常電影播放");

//     let resultMovieStatus3 = shouldOpenMovie(301);
//     expect(resultMovieStatus3) . toMatch("人數超過電影院容納量");

//     let resultMovieStatus4 = shouldOpenMovie(-1);
//     expect(resultMovieStatus4) . toMatch("請輸入正確數字");
// })




const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); 

afterEach(() => {
  logSpy.mockClear(); // 每次測試後清除呼叫記錄
});

afterAll(() => {
  logSpy.mockRestore(); // 測試完後還原 console.log
});

test('if user input not Integer, print "請輸入正確數字"', () => {
  shouldOpenMovie("abc");
  expect(console.log).toHaveBeenCalledWith("請輸入正確數字");
});

test('if Audience is zero, print "今日暫停播放電影"', () => {
  shouldOpenMovie(0);
  expect(console.log).toHaveBeenCalledWith("今日暫停播放電影");
});

test('if Audience in the range of 1~300, print "照常電影播放"', () => {
  shouldOpenMovie(150);
  expect(console.log).toHaveBeenCalledWith("照常電影播放");
});

test('if Audience out of 300, print "人數超過電影院容納量"', () => {
  shouldOpenMovie(350);
  expect(console.log).toHaveBeenCalledWith("人數超過電影院容納量");
});


