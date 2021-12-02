let fs = require('fs');
let data = fs.readFileSync(0, 'utf-8');

data = (data.split('\n'))

let horizontal = 0
let depth = 0

for (let i = 0; i < data.length; i++) {
	let thing = data[i].split(' ')
	switch(thing[0]) {
		case 'forward':
			horizontal += Number(thing[1])
			break
		case 'down':
			depth += Number(thing[1])
			break
		case 'up':
			depth -= Number(thing[1])
			break
	}
}
console.log(horizontal)
console.log(depth)
console.log(horizontal * depth)
