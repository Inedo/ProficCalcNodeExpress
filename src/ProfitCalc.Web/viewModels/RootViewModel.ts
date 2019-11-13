import config = require('../config');

class RootViewModel {

    configValue: string;
    version: string;

    constructor() {
        this.configValue = config.CONFIG_VALUE;
        this.version = config.APPLICATION_VERSION;
    }
}

export = RootViewModel;