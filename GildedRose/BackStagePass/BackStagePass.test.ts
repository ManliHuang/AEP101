
describe('Backstage Pass', () => {
    test('SellIn should be 10 and Quality should be 2 when one day passes given Quality is 1 and SellIn is 11', () => {
        const backStagePass = new BackstagePass(11, 1);
        backStagePass.daysPassed();
        expect(backStagePass.sellIn).toEqual(10);
        expect(backStagePass.quality).toEqual(2);
    })
})