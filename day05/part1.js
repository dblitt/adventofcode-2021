let fs = require('fs');
let data = fs.readFileSync(0, 'utf-8');

data = data.split('\n')
data.pop();

// console.log(data[0].split(' -> ')[0].split(','))
let stuff = []
for (let i = 0; i < data.length; i++) {
    let thing = data[i].split(' -> ');
    stuff.push([
        thing[0].split(',').map(x => parseInt(x,10)),
        thing[1].split(',').map(x => parseInt(x,10))
    ]);
}

let grid = [];
for (let i = 0; i < stuff.length; i++) {
    let mode = '';
    if (stuff[i][0][0] === stuff[i][1][0]) {
        mode = 'v';
    } else if (stuff[i][0][1] === stuff[i][1][1]) {
        mode = 'h'
    } else {
        continue;
    }
    if (mode === 'h') {
        // console.log(stuff[i])
        // console.log('h')
        // make grid tall enough to put a point in (go against the y value)
        let yValue = stuff[i][0][1];
        while (grid.length <= yValue) {
            grid.push([]);
        }
        let biggerX, smallerX;
        if (stuff[i][0][0] > stuff[i][1][0]) {
            biggerX = stuff[i][0][0];
            smallerX = stuff[i][1][0];
        } else {
            biggerX = stuff[i][1][0];
            smallerX = stuff[i][0][0];
        }
        // console.log(grid)
        // console.log(yValue)
        // if this row of the grid (x values) isnt long enough for biggerX, we need to push 0s
        while (grid[yValue].length <= biggerX) {
            grid[yValue].push(0);
        }
        if (yValue === 193) {
            console.log(stuff[i])
        }
        // now we iterate on the line
        for (let j = smallerX; j <= biggerX; j++) {
            grid[yValue][j]++;
        }
    } else if (mode === 'v') {
        // console.log(mode)
        let biggerY, smallerY;
        if (stuff[i][0][1] > stuff[i][1][1]) {
            biggerY = stuff[i][0][1];
            smallerY = stuff[i][1][1];
        } else {
            biggerY = stuff[i][1][1];
            smallerY = stuff[i][0][1];
        }
        // the grid array must be at least biggerY long
        while (grid.length <= biggerY) {
            grid.push([]);
        }
        let xValue = stuff[i][0][0];
        for (let j = smallerY; j <= biggerY; j++) {
            // grid[j] must be at least xValue long
            while (grid[j].length <= xValue) {
                grid[j].push(0);
            }
            grid[j][xValue]++;
        }
    }
}

let counter = 0;
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] > 1) {
            counter++
        }
    }
}
console.log(counter);

// console.log(JSON.stringify(grid))
// console.log((JSON.stringify(grid).match(/4/g) || []).length)
// for (let i = 0; i < 200; i++)
// console.dir(grid[193])

// const util = require('util')
// console.log(stuff[193])
// console.log(util.inspect(grid[193][598], {showHidden: false, depth: null, colors: true}))