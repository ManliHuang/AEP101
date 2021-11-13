import Goods from "../Goods/Goods";

export default class BackstagePass extends Goods {
    public daysPassed(days:number = 1) {
        if (this.sellIn <= 10 && this.sellIn > 5) {
            this.qualityChangeScale = 2
        }
        this.sellIn -= days;
        this.quality += this.qualityChangeScale;
    };

}