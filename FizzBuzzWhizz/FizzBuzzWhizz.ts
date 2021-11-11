export default class FizzBuzzWhizz{
    reportExpression: string
    queueingNumber: number;

    constructor(queueingNumber: number) {
        this.queueingNumber = queueingNumber
    }

    report(): string {
        if (this.dividableBy3(this.queueingNumber)) {
            this.reportExpression = 'Fizz'
        } else if (this.dividableBy5(this.queueingNumber)) {
            this.reportExpression = 'Buzz'
        } else {
            this.reportExpression = '' + this.queueingNumber
        }
        return this.reportExpression
    }

    dividableBy3(number: number): boolean {
        return number % 3 === 0
    }

    dividableBy5(number: number): boolean {
        return number % 5 === 0
    }
}

