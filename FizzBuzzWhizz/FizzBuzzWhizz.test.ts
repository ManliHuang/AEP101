test('should return 1 when queueing number 1 which is not dividable by 3, 5, 7 and excludes 3, 5, 7', () => {
    const fizzBuzzWhizz = new FizzBuzzWhizz(1);
    expect(fizzBuzzWhizz.report).toEqual(1)
})
