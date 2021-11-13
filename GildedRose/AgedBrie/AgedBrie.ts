import Goods from "../Goods/Goods";

export default class AgedBrie extends Goods{
    public daysPassed(days: number = 1) {
        this.sellIn -= days;
        this.qualityChangeScale = this.sellIn > 0 ? 1 : 2;
        this.quality += this.qualityChangeScale;
        this.quality = Math.min(50, this.quality)
    }
}