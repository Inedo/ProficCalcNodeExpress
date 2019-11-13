import assert = require('assert');
import AccountingCalculator = require('../core/AccountingCalculator');

describe("Accounting Calculator Tests", () => {
    var calc = new AccountingCalculator();
    it("Profit Test", () => {
        assert.equal(calc.calculateNet(1000.00, 1000.00), 0, "Error in profit calculation");
    });
    it("Test Exceptions", () => {
        assert.throws(() => calc.calculateNet(1000.00, -1000.00));
        assert.throws(() => calc.calculateNet(-1000.00, 1000.00));
    });
});
