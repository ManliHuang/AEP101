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

    public daysPassed(days: number = 1) {
        this._sellIn -= days

        if (this._quality > 0) {
            this._quality -= days;
        }
    }
}