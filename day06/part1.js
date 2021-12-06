let fs = require('fs');
let data = fs.readFileSync(0, 'utf-8');

data = data.split(',').map(x => parseInt(x, 10))

for (let day = 0; day < 80; day++) {
    let currentLength = data.length;
    for (let i = 0; i < currentLength; i++) {
        data[i]--;
        if (data[i] === -1) {
            data[i] = 6;
            data.push(8)
        }
    }
}
console.log(data.length)
