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
		console.log(responses[Math.floor(Math.random() * 3)]);
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


// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
let TMNT = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
// Use a for loop to call toUpperCase() on each of them and print out the result.
for (let i = 0; i < TMNT.length; i++) {
	console.log(TMNT[i].toUpperCase());
}


const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// Alien Attire
// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
let kristynsShoe = kristynsCloset.splice(0,1);
console.log(kristynsShoe);
thomsCloset[2][3] = kristynsShoe.toString();
console.log(thomsCloset);
// Dress Us Up
// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
console.log("Kristyn's amazing outfit consists of " + kristynsCloset[0] + ", " + kristynsCloset[3] + ' and a ' + kristynsCloset[2] + '.');
console.log("Thom likes wearing his " + thomsCloset[0][1] + " with his " + thomsCloset[1][0] + ".");
console.log("Thom sometimes likes to eat " + kristynsCloset[5] + " while wearing his " + thomsCloset[1][2] + ".");


for (let i = 0; i < kristynsCloset.length; i++) {
	console.log("WHIRR: Now washing " + kristynsCloset[i]);
}

for (let i = 0; i < thomsCloset.length; i++) {
	for (let j = 0; j < thomsCloset[i].length; j++) {
		console.log(thomsCloset[i][j]);
	}
}


let sumOfDivisibleBy3And5=0;

for (let i = 0; i < 1000; i++) {
	if (i%3===0 || i%5===0) {
		sumOfDivisibleBy3And5 += i;
	}
}
console.log(sumOfDivisibleBy3And5);


for (let i = 0; i <= 7; i++) {
	let triangleLayer = "";
	for (let j = 0; j < i; j++) {
		triangleLayer += "*";
	}
	console.log(triangleLayer);
}


const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// let sum = 0;
// for (var i = 0; i < nums.length; i++) {
// 	sum += nums[i];
//
// }
// console.log(sum);
// console.log(nums.length);
console.log(Math.floor(nums.length/2));
