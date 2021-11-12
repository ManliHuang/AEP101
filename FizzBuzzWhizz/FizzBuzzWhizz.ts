export default class FizzBuzzWhizz{
    reportExpression: string
    queueingNumber: number;

    constructor(queueingNumber: number) {
        this.queueingNumber = queueingNumber
    }

    report(): string {
        if (this.inclusiveByTarget('7')) {
            this.reportExpression = '' + this.queueingNumber
        } else if (this.inclusiveByTarget('5')) {
            this.reportExpression = '' + this.queueingNumber
            if (this.dividableByTarget(5)) {
                this.reportExpression = 'Buzz'
                if (this.dividableByTarget(7)) {
                    this.reportExpression = 'BuzzWhizz'
                }
            } else if (this.dividableByTarget(7)) {
                this.reportExpression = 'Whizz'
            }
        } else if (this.inclusiveByTarget('3')) {
            this.reportExpression = 'Fizz'
        } else if (this.dividableByTarget(3)) {
            this.reportExpression = 'Fizz'
            if (this.dividableByTarget( 5)) {
                this.reportExpression = this.dividableByTarget(7) ? 'FizzBuzzWhizz' : 'FizzBuzz'
            } else if (this.dividableByTarget(7)) {
                this.reportExpression = 'FizzWhizz'
            }
        } else if (this.dividableByTarget( 5)) {
            this.reportExpression = 'Buzz'
            if (this.dividableByTarget(7)) {
                this.reportExpression = 'BuzzWhizz'
            }
        } else if (this.dividableByTarget(7)) {
            this.reportExpression = 'Whizz'
        } else {
            this.reportExpression = '' + this.queueingNumber
        }
        return this.reportExpression
    }

    dividableByTarget(target: number): boolean {
        return this.queueingNumber % target === 0
    }

    inclusiveByTarget(target: string): boolean {
        return this.queueingNumber.toString().includes(target)
    }
}

