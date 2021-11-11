import FizzBuzzWhizz from "./FizzBuzzWhizz";

describe('The number is neither dividable by nor including 3, 5, 7', () => {
    test('should return 1 when queueing number is 1 which is not dividable by 3, 5, 7 and excludes 3, 5, 7', () => {
        const fizzBuzzWhizz = new FizzBuzzWhizz(1);
        expect(fizzBuzzWhizz.report()).toEqual("1")
    })
})

describe('The number is only dividable by one target number and excludes 3, 5, 7', () => {
    test('should return Fizz when queueing number is 6 which is only dividable by 3 and excludes 3, 5, 7', () => {
        const fizzBuzzWhizz = new FizzBuzzWhizz(6);
        expect(fizzBuzzWhizz.report()).toEqual("Fizz")
    })

    test('should return Buzz when queueing number is 5 which is only dividable by 5 and excludes 3, 5, 7', () => {
        const fizzBuzzWhizz = new FizzBuzzWhizz(5);
        expect(fizzBuzzWhizz.report()).toEqual("Buzz")
    })

    test('should return Whizz when queueing number is 7 which is only dividable by 7 and excludes 3, 5, 7', () => {
        const fizzBuzzWhizz = new FizzBuzzWhizz(7);
        expect(fizzBuzzWhizz.report()).toEqual("Whizz")
    })
})

describe('The number is dividable by more than one target number and excludes 3, 5, 7', () => {
    test('should return FizzBuzz when queueing number is 60 which is dividable by 3 and 5', () => {
        const fizzBuzzWhizz = new FizzBuzzWhizz(60);
        expect(fizzBuzzWhizz.report()).toEqual('FizzBuzz')
    })
})