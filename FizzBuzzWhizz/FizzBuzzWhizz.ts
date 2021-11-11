export default class FizzBuzzWhizz{
    reportExpression: string
    queueingNumber: number;

    constructor(queueingNumber: number) {
        this.queueingNumber = queueingNumber
    }

    report(): string {
        if (this.dividableByTarget(this.queueingNumber, 3)) {
            this.reportExpression = 'Fizz'
        } else if (this.dividableByTarget(this.queueingNumber, 5)) {
            this.reportExpression = 'Buzz'
        } else if (this.dividableByTarget(this.queueingNumber, 7)) {
            this.reportExpression = 'Whizz'
        } else if (this.dividableByTwoNumbers(3, 5)) {
            this.reportExpression = 'FizzBuzz'
        } else {
            this.reportExpression = '' + this.queueingNumber
        }
        return this.reportExpression
    }

    dividableByTarget(number: number, target: number): boolean {
        return number % target === 0
    }

    dividableByTwoNumbers(number1: number, number2: number): boolean {
        return this.queueingNumber % number1 === 0 && this.queueingNumber % number2 === 0
    }
}

