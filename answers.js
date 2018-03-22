for (let i = 1; i <= 20; i++) {
	console.log(i);
}


for (let i = 2; i <= 200; i+=2) {
 console.log(i);
}


for (let i = 0; i < 20; i++) {
	console.log("Love me, pet me! HSSSSSS!");
}

let responses = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (let i = 1; i <= 20; i++) {
	if (i%2 === 0) {
		console.log(responses[Math.floor((Math.random() * 3) + 0)]);
	} else {
		console.log("Love me, pet me! HSSSSSS!");
	}
}
