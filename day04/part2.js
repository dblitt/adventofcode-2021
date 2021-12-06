let fs = require('fs');
let data = fs.readFileSync(0, 'utf-8');

data = data.split('\n')
// data.pop();

let numbers = data[0].split(',').map(x => parseInt(x,10))
data = data.slice(2)
data.push('')

let boards = []
for (let i = 0; i < data.length; i++) {
    if (data[i] === '') {
        let board = [];
        for (let j = 0; j < 5; j++) {
            let row = data[j + (i - 5)].split(' ');
            while (row.indexOf('') !== -1) {
                row.splice(row.indexOf(''), 1);
            }
            board.push(row.map(x => parseInt(x,10)));
        }
        boards.push(board);
    }
}
let lastWinner = -1;
let winners = [];
let calledNumbers = [];
bingoNumberLoop:
for (let numberIndex = 1; numberIndex <= numbers.length; numberIndex++) {
    calledNumbers = numbers.slice(0,numberIndex);
    for (let i = 0; i < boards.length; i++) {
        // check if boards[i] is a winner
        // horizontal checking
        for (let j = 0; j < 5; j++) {
            let calledInRow = 0
            for (let k = 0; k < 5; k++) {
                if (calledNumbers.indexOf(boards[i][j][k]) !== -1) {
                    // this number in this row is called
                    calledInRow++;
                }
            }
            if (calledInRow === 5) {
                if (winners.indexOf(i) === -1) {
                    winners.push(i);
                    lastWinner = i;
                }
                firstWinner = i;
                console.log(i+' won hor turn '+numberIndex)
                // break bingoNumberLoop;
            }
        }
        // vertical checking
        for(let j = 0; j < 5; j++) {
            let calledInColumn = 0;
            for (let k = 0; k < 5; k++) {
                if (calledNumbers.indexOf(boards[i][k][j]) !== -1) {
                    calledInColumn++;
                }
            }
            if (calledInColumn === 5) {
                if (winners.indexOf(i) === -1) {
                    winners.push(i);
                    lastWinner = i;
                }
                firstWinner = i;
                console.log(i+' won vert turn '+numberIndex)
                // break bingoNumberLoop;
            }
        }
        if (winners.length === boards.length) {
            break bingoNumberLoop;
        }
    }
}

console.log(calculateScore(boards[lastWinner], calledNumbers));

function calculateScore(board, calledNumbers) {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (calledNumbers.indexOf(board[i][j]) === -1) {
                // board[i][j] is a unmarked number
                sum += board[i][j];
            }
        }
    }
    return sum * calledNumbers.at(-1);
}