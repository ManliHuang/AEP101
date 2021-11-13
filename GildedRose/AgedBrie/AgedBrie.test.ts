describe('Aged Brie', () => {
    test('SellIn should be 0 and Quality should be 50 when one day passes given Quality is 49 and SellIn is 1', () =>{
        const agedBrie = new AgedBrie(1, 49);
        agedBrie.daysPassed();
        expect(agedBrie.sellIn).toEqual(0);
        expect(agedBrie.quality).toEqual(50);

    })
})