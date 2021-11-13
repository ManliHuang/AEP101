export default class {
    private _sellIn: number;
    private _quality: number;
    private _qualityMinusScale: number;

    constructor(sellIn: number, quality: number) {
        this._sellIn = sellIn;
        this._quality = quality;
    }

    public get sellIn() {
        return this._sellIn;
    }

    public get quality() {
        return this._quality
    }

    public daysPassed(days: number = 1) {
        this._sellIn -= days;

        this._qualityMinusScale = 1;
        this._quality += this._qualityMinusScale;
        this._quality = Math.min(50, this._quality)
    }
}