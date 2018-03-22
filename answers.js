for (let i = 1; i <= 20; i++) {
	console.log(i);
}


for (let i = 2; i <= 200; i+=2) {
 console.log(i);
}


for (let i = 0; i < 20; i++) {
	console.log("Love me, pet me! HSSSSSS!");
}

let responses = [
	"...human...why you taking pictures of me?...",
	"...the catnip made me do it...",
	"...why does the red dot always get away..."
]

for (let i = 1; i <= 20; i++) {
	if (i%2 === 0) {
		console.log(responses[Math.floor((Math.random() * 3) + 0)]);
	} else {
		console.log("Love me, pet me! HSSSSSS!");
	}
}


for (let i = 1; i <= 100; i++) {
	if (i%5 === 0 && i%3 === 0) {
		console.log('FizzBuzz');
	} else if (i%3 === 0) {
		console.log('Fizz');
	} else if (i%5 === 0) {
		console.log('Buzz');
	}
}

const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

// Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".
thom.unshift();
thom.shift('Gameboy');
// Karolin just had her birthday; change Karolin's array to reflect her being a year older.
karolin[1] = karolin[1] + 1;
// Change Matt H's hometown from Philadelphia to "Gotham City".
matt[2] = 'Gotham City';
// Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".
kristyn.pop();
kristyn.push('Brooklyn');
