let fs = require('fs');
let data = fs.readFileSync(0, 'utf-8');

data = data.split(',').map(x => parseInt(x, 10))

let tracker = [0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n]

// populate tracker
for (let i = 0; i < data.length; i++) {
    tracker[data[i]]++;
}
const DAYS = Math.pow(2,21)
for (let day = 0; day < DAYS; day++) {
    // if (day % 10000 === 0) console.log(day);
    let firstItem = tracker.shift();
    tracker.push(0n);
    tracker[6] += firstItem;
    tracker[8] += firstItem;
}

let sum = 0n;
for (let i = 0; i < tracker.length; i++) {
    sum += tracker[i];
}

console.log(sum)