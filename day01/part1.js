let fs = require('fs');
let data = fs.readFileSync(0, 'utf-8');

data = (data.split('\n'))

let counter = 0;
for (let i = 1; i < data.length; i++) {
    if (Number(data[i]) > Number(data[i - 1])) {
        counter++;
    }
}

console.log(counter)
