class ConfigManager {
    constructor() {
        if (!ConfigManager.instance) {
            ConfigManager.instance = this;
            this.config = this.loadConfig();
        }
        return ConfigManager.instance;
    }

    loadConfig() {
        // 假設從一個文件或環境變量加載配置
        return {
            dbHost: 'localhost',
            dbPort: 3306
        };
    }

    getConfig() {
        return this.config;
    }
}

module.exports = ConfigManager;
