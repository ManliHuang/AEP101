export default class Sulfuras {
    private _sellIn: number;
    private _quality: number;
    private _qualityChangeScale: number = 1

    constructor(sellIn: number, quality: number) {
        this._quality = quality;
        this._sellIn = sellIn;
    }

    public get sellIn(): number {
        return this._sellIn;
    }

    public get quality(): number {
        return this._quality;
    }

    public daysPassed(days: number = 1) {
        this._sellIn -= days;
        this._quality += this._qualityChangeScale;
        this._quality = Math.min(this._quality, 50)
    }
}