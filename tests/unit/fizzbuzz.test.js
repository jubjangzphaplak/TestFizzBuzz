const libs = require('../../src/fizzbuzz')
describe('fizzbuzz',()=>{
    it('should return 1 if number is 1',() =>{
        const number = 1;
        const result = libs.fizzbuzz(number);
        expect(result).toBe(1); 
    })
    it('should return 2 if number is 2',() =>{
        const number = 2;
        const result = libs.fizzbuzz(number);
        expect(result).toBe(2); 
    })
    it('should return Fizz if number is 3',() =>{
        const number = 3;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("Fizz"); 
    })
    it('should return 4 if number is 4',() =>{
        const number = 4;
        const result = libs.fizzbuzz(number);
        expect(result).toBe(4); 
    })
    it('should return Buzz if number is 5',() =>{
        const number = 5;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("Buzz"); 
    })
    it('should return Fizz if number is 6',() =>{
        const number = 6;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("Fizz"); 
    })
    
})