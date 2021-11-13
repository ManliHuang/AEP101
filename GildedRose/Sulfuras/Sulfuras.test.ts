
describe('Aged Brie', () => {
    test('SellIn should be 0 and Quality should be 50 when one day passes given Quality is 49 and SellIn is 1', () => {
        const sulfuras = new Sulfuras(1, 49);
        sulfuras.daysPassed();
        expect(sulfuras.sellIn).toEqual(0);
        expect(sulfuras.quality).toEqual(50);
    })
})