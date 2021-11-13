import Goods from "../Goods/Goods";

export default class Sulfuras extends Goods {
    public daysPassed(days: number = 1) {
        this.sellIn -= days;
        this.quality += this.qualityChangeScale;
        this.quality = Math.min(this.quality, 50)
    }
}