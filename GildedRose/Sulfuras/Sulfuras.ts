export default class Sulfuras {
    private _sellIn: number;
    private _quality: number;
    private _qualityChangeScale: number

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
        this._qualityChangeScale = 1;
        this._quality += this._qualityChangeScale;
    }
}