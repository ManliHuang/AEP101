import Goods from "../Goods/Goods";

export default class BackstagePass extends Goods {
    public daysPassed(days:number = 1) {
        this.sellIn -= days;
        this.quality += this.qualityChangeScale;
    };

}