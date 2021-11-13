import BackstagePass from "./BackstagePass";

describe('Backstage Pass', () => {
    test('SellIn should be 10 and Quality should be 2 when one day passes given Quality is 1 and SellIn is 11', () => {
        const backstagePass = new BackstagePass(11, 1);
        backstagePass.daysPassed();
        expect(backstagePass.sellIn).toEqual(10);
        expect(backstagePass.quality).toEqual(2);
    })

    test('SellIn should be 9 and Quality should be 3 when one day passes given Quality is 1 and SellIn is 10', () => {
        const backstagePass = new BackstagePass(10, 1);
        backstagePass.daysPassed();
        expect(backstagePass.sellIn).toEqual(9);
        expect(backstagePass.quality).toEqual(3);
    })
})