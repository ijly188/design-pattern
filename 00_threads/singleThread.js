// singleThread.js
const fs = require('fs');

console.log('開始讀取文件');

fs.readFile('./00_threads/example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('讀取文件時發生錯誤:', err);
        return;
    }
    console.log(data);
});

console.log('請求讀取文件');
