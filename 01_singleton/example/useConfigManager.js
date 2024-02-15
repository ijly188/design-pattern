const ConfigManager = require('./configManager');

const configManager = new ConfigManager();
const config = configManager.getConfig();
console.log(config.dbHost); // 輸出: localhost
