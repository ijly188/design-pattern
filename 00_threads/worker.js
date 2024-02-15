// worker.js
const { parentPort } = require('worker_threads');

parentPort.on('message', (task) => {
    if (task === 'doWork') {
        // 假設的耗時任務
        let sum = 0;
        for (let i = 0; i < 1e9; i++) {
            sum += i;
        }
        parentPort.postMessage(`工作完成，結果是 ${sum}`);
    }
});