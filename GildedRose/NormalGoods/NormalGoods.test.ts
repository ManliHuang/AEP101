import NormalGoods from "./NormalGoods";

describe('Normal Goods', () => {
    test('SellIn and Quality should be 0 when one day passes given Quality and SellIn are both 1', () => {
        const normalGoods = new NormalGoods(1, 1);
        normalGoods.daysPassed();
        expect(normalGoods.sellIn).toEqual(0);
        expect(normalGoods.quality).toEqual(0);
    })

    test('SellIn should be -1 and Quality should be 0 when one day passes given Quality and SellIn are both 0', () => {
        const normalGoods = new NormalGoods(0, 0);
        normalGoods.daysPassed();
        expect(normalGoods.sellIn).toEqual(-1);
        expect(normalGoods.quality).toEqual(0);
    })
})