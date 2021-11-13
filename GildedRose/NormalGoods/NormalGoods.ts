import Goods from "../Goods/Goods";

export default class NormalGoods extends Goods{
    public daysPassed(days: number = 1) {
        this.sellIn -= days
        this.qualityChangeScale = this.sellIn < 0 ? 2 : 1
        this.quality -= days * this.qualityChangeScale;
        this.quality = Math.max(this.quality, 0);
    }
}