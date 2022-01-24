import {basicOp} from "./Homework/1.3/task1"
import {stringMerge} from "./Homework/1.3/task2"
import {createPhoneNumber} from "./Homework/1.3/task3"
import {getOperands} from './Homework/1.3/task4'
import {getTime} from './Homework/1.3/task5'


describe('Testing task1', () => {
    test('Should return 11 when passed 4, 7 and "+"', () => {
        expect(basicOp("+", 4, 7)).toBe(11)
    });
    test('Should return 11 when passed 4, 7 and "+"', () => {
        expect(basicOp("-", 15, 18)).toBe(-3)
    });
    test('Should return 11 when passed 4, 7 and "+"', () => {
        expect(basicOp("*", 5, 5)).toBe(25)
    });
    test('Should return 11 when passed 4, 7 and "+"', () => {
        expect(basicOp("/", 49, 7)).toBe(7)
    });
    test('Should return 11 when passed 4, 7 and "+"', () => {
        expect(basicOp("something else", 45, 45)).toBe(0)
    });
});

describe('Testing task2', () => {
    test('Should return held when passed "hello", "world" and "l"', () => {
        expect(stringMerge("hello", "world", "l")).toBe("held")
    });
    test('Should return codinywhere when passed "coding", "anywhere", "n"', () => {
        expect(stringMerge("coding", "anywhere", "n")).toBe("codinywhere")
    });
    test('Should return jasamson when passed "jason", "samson", "s"', () => {
        expect(stringMerge("jason", "samson", "s")).toBe("jasamson")
    });
    test('Should return held when passed "wonderful", "people", "e"', () => {
        expect(stringMerge("wonderful", "people", "e")).toBe("wondeople")
    });
});

describe('Testing task3', () => {
    test('Should return "(123) 456-7890" when passed [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', () => {
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890")
    });
    
});

describe('Testing task 4', () => {
    test('Should return "a: 1, b: 2;" when passed "1 + 2"', () => {
        expect(getOperands('1 + 2')).toBe("a: 1, b: 2;")
    });
    test('Should return "a: 1.2, b: -3.4;" when passed "1.2 * -3.4"', () => {
        expect(getOperands('1.2 * -3.4')).toBe("a: 1.2, b: -3.4;")
    }); 
    test('Should return "a: 1, b: 2;" when passed "1 - 2"', () => {
        expect(getOperands('1 - 2')).toBe("a: 1, b: 2;")
    });
    test('Should return "a: 1, b: -2;" when passed "1 - -2"', () => {
        expect(getOperands('1 - -2')).toBe("a: 1, b: -2;")
    });
    
});

describe('Testing task 5', () => {
    test('Should return "09:00" when passed "Breakfast at 09:00"', () => {
        expect(getTime("Breakfast at 09:00")).toBe("09:00")
    });
    test('Should return "21:00" when passed "Breakfast at 09:60, Dinner at 21:00"', () => {
        expect(getTime("Breakfast at 09:60, Dinner at 21:00")).toBe("21:00")
    });
    test('Should return "09:59" when passed "Breakfast at 09:59, Dinner at 21:00"', () => {
        expect(getTime("Breakfast at 09:59, Dinner at 21:00")).toBe("09:59")
    });
});



