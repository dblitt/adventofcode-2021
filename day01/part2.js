let fs = require('fs');
let data = fs.readFileSync(0, 'utf-8');

data = (data.split('\n'))

let counter = 0;
for (let i = 1; i < data.length - 2; i++) {
    let previous = Number(data[i-1]) + Number(data[i]) + Number(data[i+1]);
    let current = Number(data[i]) + Number(data[i+1]) + Number(data[i+2]);
    if (current > previous) {
        counter++;
    }
}

console.log(counter)
