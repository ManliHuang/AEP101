export default abstract class Goods {
    private _sellIn: number;
    private _quality: number;
    private _qualityChangeScale: number = 1;

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

    public get qualityChangeScale(): number {
        return this._qualityChangeScale
    }
    public set sellIn(sellIn: number) {
        this._sellIn = sellIn
    }

    public set quality(quality: number) {
        this._quality = quality
    }

    public set qualityChangeScale(qualityChangeScale: number) {
        this._qualityChangeScale = qualityChangeScale;
    }

    abstract daysPassed(days: number): void
}