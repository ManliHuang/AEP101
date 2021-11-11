import FizzBuzzWhizz from "./FizzBuzzWhizz";

describe('FizzBuzzWhizz', () => {
    test('should return 1 when queueing number is 1 which is not dividable by 3, 5, 7 and excludes 3, 5, 7', () => {
        const fizzBuzzWhizz = new FizzBuzzWhizz(1);
        expect(fizzBuzzWhizz.report()).toEqual("1")
    })

    test('should return Fizz when queueing number is 6 which is only dividable by 3 and excludes 3, 5, 7', () => {
        const fizzBuzzWhizz = new FizzBuzzWhizz(6);
        expect(fizzBuzzWhizz.report()).toEqual("Fizz")
    })

    test('should return Buzz when queueing number is 5 which is only dividable by 5 and excludes 3, 5, 7', () => {
        const fizzBuzzWhizz = new FizzBuzzWhizz(5);
        expect(fizzBuzzWhizz.report()).toEqual("Buzz")
    })
})