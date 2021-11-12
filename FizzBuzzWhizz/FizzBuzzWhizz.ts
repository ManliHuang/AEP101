export default class FizzBuzzWhizz{
    queueingNumber: number;

    constructor(queueingNumber: number) {
        this.queueingNumber = queueingNumber
    }

    report(): string {
        if (this.inclusiveByTarget('7')) {
            if (this.dividableByTarget(7)) return this.dividableByTarget(3) ? 'FizzWhizz' : 'Whizz'
            if (this.inclusiveByTarget('3') || this.dividableByTarget(3)) return 'Fizz'
            return '' + this.queueingNumber
        }

        if (this.inclusiveByTarget('5')) {
            if (this.dividableByTarget(5)) return this.dividableByTarget(7) ? 'BuzzWhizz' :'Buzz'
            if (this.dividableByTarget(7)) return 'Whizz'
            return '' + this.queueingNumber
        }

        if (this.inclusiveByTarget('3')) return 'Fizz'

        if (this.dividableByTarget(3)) {
            if (this.dividableByTarget( 5)) return this.dividableByTarget(7) ? 'FizzBuzzWhizz' : 'FizzBuzz'
            if (this.dividableByTarget(7)) return'FizzWhizz'
            return 'Fizz'
        }

        if (this.dividableByTarget( 5)) return this.dividableByTarget(7) ? 'BuzzWhizz' : 'Buzz'

        if (this.dividableByTarget(7)) return 'Whizz'

        return '' + this.queueingNumber
    }

    dividableByTarget(target: number): boolean {
        return this.queueingNumber % target === 0
    }

    inclusiveByTarget(target: string): boolean {
        return this.queueingNumber.toString().includes(target)
    }
}

