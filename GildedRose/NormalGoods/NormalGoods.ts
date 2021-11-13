export default class NormalGoods {
    private _sellIn: number;
    private _quality: number;
    private _qualityMinusScale: number;

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
        this._qualityMinusScale = this._sellIn < 0 ? 2 : 1
        this._quality -= days * this._qualityMinusScale;
        this._quality = Math.max(this._quality, 0);
    }
}