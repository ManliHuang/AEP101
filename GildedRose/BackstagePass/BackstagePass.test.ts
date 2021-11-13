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

    test('SellIn should be 4 and Quality should be 43 when one day passes given Quality is 40 and SellIn is 5', () => {
        const backstagePass = new BackstagePass(5, 40);
        backstagePass.daysPassed();
        expect(backstagePass.sellIn).toEqual(4);
        expect(backstagePass.quality).toEqual(43);
    })

    test('SellIn should be 2 and Quality should be 50 when one day passes given Quality is 49 and SellIn is 3', () => {
        const backstagePass = new BackstagePass(3, 49);
        backstagePass.daysPassed();
        expect(backstagePass.sellIn).toEqual(2);
        expect(backstagePass.quality).toEqual(50);
    })

    test('SellIn should be -1 and Quality should be 0 when one day passes given Quality is 50 and SellIn is 1', () => {
        const backstagePass = new BackstagePass(0, 50);
        backstagePass.daysPassed();
        expect(backstagePass.sellIn).toEqual(-1);
        expect(backstagePass.quality).toEqual(0);
    })
})