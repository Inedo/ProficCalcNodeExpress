class AccountingCalculator {
    constructor() {
    }

    calculateNet(revenue: number, expenses: number): number {
        if (revenue < 0)
            throw new Error("revenue cannot be negative");
        if (expenses < 0)
            throw new Error("expenses cannot be negative");

        return revenue - expenses;
    }
}

export = AccountingCalculator;