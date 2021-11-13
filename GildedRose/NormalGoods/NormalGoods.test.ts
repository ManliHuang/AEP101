describe('Normal Goods', () => {
    test('SellIn and Quality should be 0 when one day passes given Quality and SellIn are both 1', () => {
        const normalGoods = new NormalGoods(1, 1);
        normalGoods.daysPassed(1);
        expect(normalGoods.sellIn).toEqual(0);
        expect(normalGoods.quality).toEqual(0);

    })
})