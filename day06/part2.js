let fs = require('fs');
let data = fs.readFileSync(0, 'utf-8');

data = data.split(',').map(x => parseInt(x, 10))

let tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// populate tracker
for (let i = 0; i < data.length; i++) {
    tracker[data[i]]++;
}
for (let day = 0; day < 256; day++) {
    let firstItem = tracker.shift();
    tracker.push(0);
    tracker[6] += firstItem;
    tracker[8] += firstItem;
}

let sum = 0;
for (let i = 0; i < tracker.length; i++) {
    sum += tracker[i];
}

console.log(sum)