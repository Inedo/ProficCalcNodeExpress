'use strict';
import express = require('express');
import AccountingCalculator = require('../core/AccountingCalculator')
import RootViewModel = require('../viewModels/RootViewModel');

var router = express.Router();

/* GET / */
router.get('/', function (req, res) {
    res.render('index', new ViewModel());
});

/* POST / */
router.post('/', (req, res) => {
    let model: ViewModel = req.body;
    let calc = new AccountingCalculator();
    let net: string;
    let error: string;
    try {
        let value = calc.calculateNet(model.revenue, model.expenses);
        net = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(value);
    }
    catch (ex) {
        error = ex;
    }
    res.render(
        'index',
        new ViewModel(
            model.revenue,
            model.expenses,
            net,
            error
        )
    );
});

class ViewModel extends RootViewModel {
    constructor(
        public revenue?: number,
        public expenses?: number,
        public net?: string,
        public error?: string
    ) {
        super();
    }
}

module.exports = router;
