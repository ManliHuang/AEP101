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
        } else {
            this.reportExpression = '' + this.queueingNumber
        }
        return this.reportExpression
    }

    dividableByTarget(number: number, target: number): boolean {
        return number % target === 0
    }
}

