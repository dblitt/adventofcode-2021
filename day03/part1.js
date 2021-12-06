let fs = require('fs');
let data = fs.readFileSync(0, 'utf-8');

data = (data.split('\n'))

let counter = [0,0,0,0,0,0,0,0,0,0,0,0]

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (data[i][j] === '1') {
            counter[j]++;
        }
    }
}

let gammaBinary = '';
let epsilonBinary = '';
for (let i = 0; i < counter.length; i++) {
    if (counter[i] > data.length / 2) {
        gammaBinary += '1';
        epsilonBinary += '0';
    } else {
        gammaBinary += '0';
        epsilonBinary += '1';
    }
}

console.log(parseInt(gammaBinary,2) * parseInt(epsilonBinary,2))
