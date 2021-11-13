export default class NormalGoods {
    private _sellIn: number;
    private _quality: number;

    constructor(sellIn: number, quality: number) {
        this._sellIn = sellIn;
        this._quality = quality;
    }

    public get sellIn() {
        return this._sellIn
    }

    public get quality() {
        return this._quality
    }

    public daysPassed(days: number) {
        this._quality -= days;
        this._sellIn -= days
    }
}