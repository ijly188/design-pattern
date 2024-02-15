// worker.js
const { parentPort } = require('worker_threads');

parentPort.on('message', (numbers) => {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    parentPort.postMessage(sum);
});
