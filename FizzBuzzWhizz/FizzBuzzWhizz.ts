export default class FizzBuzzWhizz{
    queueingNumber: number;

    constructor(queueingNumber: number) {
        this.queueingNumber = queueingNumber
    }

    report(): string {
        return "" + this.queueingNumber
    }
}

