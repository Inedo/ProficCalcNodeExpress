'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var AccountingCalculator = require("../core/AccountingCalculator");
var RootViewModel = require("../viewModels/RootViewModel");
var router = express.Router();
/* GET / */
router.get('/', function (req, res) {
    res.render('index', new ViewModel());
});
/* POST / */
router.post('/', function (req, res) {
    var model = req.body;
    var calc = new AccountingCalculator();
    var net;
    var error;
    try {
        var value = calc.calculateNet(model.revenue, model.expenses);
        net = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(value);
    }
    catch (ex) {
        error = ex;
    }
    res.render('index', new ViewModel(model.revenue, model.expenses, net, error));
});
var ViewModel = /** @class */ (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel(revenue, expenses, net, error) {
        var _this = _super.call(this) || this;
        _this.revenue = revenue;
        _this.expenses = expenses;
        _this.net = net;
        _this.error = error;
        return _this;
    }
    return ViewModel;
}(RootViewModel));
module.exports = router;
//# sourceMappingURL=index.js.map