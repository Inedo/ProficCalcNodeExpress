class Config {
    static CONFIG_VALUE: string         = process.env.CONFIG_VALUE || 'Local Development';
    static DATABASE_URL: string         = process.env.DATABASE_URL;
    static APPLICATION_VERSION: string  = "0.0.0";
}

export = Config;