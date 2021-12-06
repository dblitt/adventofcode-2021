let fs = require('fs');
let data = fs.readFileSync(0, 'utf-8');

data = data.split('\n')
data.pop();
dataGoodCopy = JSON.parse(JSON.stringify(data))

function getBitsInPosition(data, n = 0) {
    let output = []
    for (let i = 0; i < data.length; i++) {
        output.push(data[i][n]);
    }
    return output;
}

function getMostCommonValue(values, defaultValue = 1) {
    let oneCounter = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] === '1') {
            oneCounter++;
        }
    }
    if (oneCounter === values.length - oneCounter) {
        return defaultValue;
    } else if (oneCounter > values.length - oneCounter) {
        return '1';
    } else {
        return '0';
    }
}

loopOfBits:
for (let i = 0; i < data[0].length; i++) {
    let values = getBitsInPosition(data, i);
    let mostCommonValue = getMostCommonValue(values, '1');
    // now we get rid of data where data[n][i] !== mostCommonValue
    let newData = []
    for (let j = 0; j < data.length; j++) {
        // we want to break when there is only one value left
        if (data.length === 1) {
            break loopOfBits;
        }
        if (data[j][i] === mostCommonValue) {
            newData.push(data[j]);
        }
    }
    data = newData;
}
let oxygen = data[0]
// console.log('oxygen: '+data[0])

data = JSON.parse(JSON.stringify(dataGoodCopy));
loopOfBits1:
for (let i = 0; i < data[0].length; i++) {
    let values = getBitsInPosition(data, i);
    let mostCommonValue = getMostCommonValue(values, '1');
    // now we get rid of data where data[n][i] === mostCommonValue
    let newData = []
    for (let j = 0; j < data.length; j++) {
        // we want to break when there is only one value left
        if (data.length === 1) {
            break loopOfBits1;
        }
        // if (i === 0 && j === 10) console.log(newData)
        if (data[j][i] !== mostCommonValue) {
            newData.push(data[j]);
        }
    }
    // console.log(i + ' ' + mostCommonValue)
    // console.log(newData)
    data = newData;
}
// console.log('co2: '+data[0])
let co2 = data[0]

console.log(parseInt(co2,2) * parseInt(oxygen,2))