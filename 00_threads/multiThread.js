// multiThread.js
const { Worker } = require('worker_threads');

const worker = new Worker('./00_threads/worker.js');

worker.on('message', (msg) => {
    console.log(msg);
    worker.terminate().then(() => console.log('工作線程已終止'));
});

worker.postMessage('doWork');

console.log('主線程工作');
