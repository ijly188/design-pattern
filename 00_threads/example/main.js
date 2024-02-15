// main.js
const { Worker } = require('worker_threads');

// 創建一個大數組作為示例
const numbers = Array.from({ length: 1e6 }, (_, i) => i + 1);

const worker = new Worker('./00_threads/example/worker.js');

console.log('主線程開始工作');
const startTime = Date.now();

worker.on('message', (sum) => {
    console.log(`總和: ${sum}`);
    console.log(`計算耗時: ${Date.now() - startTime}ms`);
    worker.terminate().then(() => console.log('工作線程已終止'));
});

worker.postMessage(numbers);

console.log('主線程繼續執行其他任務');
