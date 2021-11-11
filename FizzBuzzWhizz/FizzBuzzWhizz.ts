export default class FizzBuzzWhizz{
    reportExpression: string
    queueingNumber: number;

    constructor(queueingNumber: number) {
        this.queueingNumber = queueingNumber
    }

    report(): string {
        if (this.dividableByTarget(3, null)) {
            this.reportExpression = 'Fizz'
        } else if (this.dividableByTarget( 5, null)) {
            this.reportExpression = 'Buzz'
        } else if (this.dividableByTarget(7, null)) {
            this.reportExpression = 'Whizz'
        } else if (this.dividableByTarget(3, 5)) {
            this.reportExpression = 'FizzBuzz'
        } else {
            this.reportExpression = '' + this.queueingNumber
        }
        return this.reportExpression
    }

    dividableByTarget(number1: number, number2: number | null): boolean {
        const dividableByNumber1: boolean = this.queueingNumber % number1 === 0
        return number2 ? this.queueingNumber % number2 === 0 &&  dividableByNumber1 : dividableByNumber1
    }
}

