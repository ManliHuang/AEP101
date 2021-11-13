import BackstagePass from "./BackstagePass";

describe('Backstage Pass', () => {
    test('SellIn should be 10 and Quality should be 2 when one day passes given Quality is 1 and SellIn is 11', () => {
        const backstagePass = new BackstagePass(11, 1);
        backstagePass.daysPassed();
        expect(backstagePass.sellIn).toEqual(10);
        expect(backstagePass.quality).toEqual(2);
    })
})