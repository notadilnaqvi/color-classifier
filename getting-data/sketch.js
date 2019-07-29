let colorByLabel = {
	'red-ish': [],
	'green-ish': [],
	'blue-ish': [],
	'yellow-ish': [],
	'orange-ish': [],
	'pink-ish': [],
	'purple-ish': [],
	'brown-ish': [],
	'grey-ish': []
}

let banned = {
	'red-ish': [331, 330, 328, 238, 223, 47, 16, 15, 11, 32, 30, 189, 166, 240, 239, 0, 1, 78, 329],
	'green-ish': [20, 298, 168, 742, 740, 739, 743, 744, 747, 749, 750, 650, 651, 752, 753, 756, 758, 755, 761, 764, 767, 768, 769, 772, 771, 774, 778, 779, 785, 786, 790, 792, 793, 791, 794, 795, 797, 773, 796, 804, 776, 781, 788, 1019, 1023, 1232, 1481, 1477, 298, 76, 766, 1274, 1485, 258, 398, 140, 139, 38, 15, 67, 91, 73, 14, 648, 760, 751, 801, 800],
	'blue-ish': [13, 46, 56, 51, 2, 158, 240, 250, 560, 561, 565, 742, 744, 745, 1114, 747, 748, 564, 563, 612],
	'yellow-ish': [194, 193, 137, 135, 136, 0, 102, 16, 17, 113, 112, 138, 135, 134, 47, 73, 14, 11, 10],
	'orange-ish': [0, 7, 8, 12, 15, 16, 24, 48, 72, 73, 124, 93, 67, 101, 125, 154, 179, 186, 162, 173, 43],
	'pink-ish': [0, 11, 10, 24, 192, 294, 148, 197, 195, 111, 136, 8, 6, 7, 31, 59, 9, 293, 307, 287, 288, 264, 194, 173],
	'purple-ish': [4, 184, 180, 483, 482, 481, 478, 479, 622, 621, 624, 829, 288, 185, 32, 220, 884, 878, 879, 174, 199, 2, 1, 870],
	'brown-ish': [3, 24, 316, 270, 314, 335, 334, 14, 425, 399, 19, 30, 180, 25, 50],
	'grey-ish': [3, 7, 8, 11, 31, 82, 55, 163, 162, 161, 94, 93, 91, 87, 86, 85, 83, 123, 171, 169, 92, 173, 6, 102, 81, 167, 95]
}

function setup(){
	canvas = createCanvas(250, 750);
	var firebaseConfig = {
		apiKey: "AIzaSyDAvuUh8M-pT3dsRD0AfhJOr2NNxjgJCR4",
		authDomain: "color-classifier-d9030.firebaseapp.com",
		databaseURL: "https://color-classifier-d9030.firebaseio.com",
		projectId: "color-classifier-d9030",
		storageBucket: "",
		messagingSenderId: "25631780343",
		appId: "1:25631780343:web:1787a3c6cc876530"
	};
	firebase.initializeApp(firebaseConfig);
	let database = firebase.database();
	let ref = database.ref('colors');
	ref.once('value', gotData);
}

// function mousePressed(){
// 	let i = floor(mouseX / 10);
// 	let j = floor(mouseY / 10);
// 	let index = i + j * (width / 10);
// 	console.log(index);
// 	// banned['grey-ish'].push(index);
// 	// colorByLabel['green-ish'].splice(index,1);
// }

function gotData(results){
	let data = results.val();
	keys = Object.keys(data);
	console.log(keys.length);

	for(let key of keys){
		let record = data[key];
		colorByLabel[record.label].push(record);
	}

	let allData = {
		'entries': []
	};

	for(let i = 0; i < colorByLabel['red-ish'].length; i++){
		if(!banned['red-ish'].includes(i)){
			allData.entries.push(colorByLabel['red-ish'][i]);
		}
	}

	for(let i = 0; i < colorByLabel['green-ish'].length; i++){
		if(!banned['green-ish'].includes(i)){
			allData.entries.push(colorByLabel['green-ish'][i]);
		}
	}

	for(let i = 0; i < colorByLabel['blue-ish'].length; i++){
		if(!banned['blue-ish'].includes(i)){
			allData.entries.push(colorByLabel['blue-ish'][i]);
		}
	}

	for(let i = 0; i < colorByLabel['yellow-ish'].length; i++){
		if(!banned['yellow-ish'].includes(i)){
			allData.entries.push(colorByLabel['yellow-ish'][i]);
		}
	}

	for(let i = 0; i < colorByLabel['orange-ish'].length; i++){
		if(!banned['orange-ish'].includes(i)){
			allData.entries.push(colorByLabel['orange-ish'][i]);
		}
	}

	for(let i = 0; i < colorByLabel['pink-ish'].length; i++){
		if(!banned['pink-ish'].includes(i)){
			allData.entries.push(colorByLabel['pink-ish'][i]);
		}
	}

	for(let i = 0; i < colorByLabel['purple-ish'].length; i++){
		if(!banned['purple-ish'].includes(i)){
			allData.entries.push(colorByLabel['purple-ish'][i]);
		}
	}

	for(let i = 0; i < colorByLabel['brown-ish'].length; i++){
		if(!banned['brown-ish'].includes(i)){
			allData.entries.push(colorByLabel['brown-ish'][i]);
		}
	}

	for(let i = 0; i < colorByLabel['grey-ish'].length; i++){
		if(!banned['grey-ish'].includes(i)){
			allData.entries.push(colorByLabel['grey-ish'][i]);
		}
	}
	// saveJSON(allData, 'all-data.json');

}

function draw(){
	let currentCol = colorByLabel['red-ish'];
	let x = 0;
	let y = 0;
	for(let i = 0; i < currentCol.length; i++){
		
		noStroke();
		if(true){
			fill(currentCol[i].r, currentCol[i].g, currentCol[i].b);
		} else{
			fill(255,255,255);
		}

		rect(x, y, 10, 10);	
		x += 10;
		if(x >= width){
			x = 0;
			y += 10;
		}
	}
}


// red [331, 330, 328, 238, 223, 47, 16, 15, 11, 32, 30, 189, 166, 240, 239, 0, 1, 78, 329]

// green [20, 298, 168, 742, 740, 739, 743, 744, 747, 749, 750, 650, 651, 752, 753, 756, 758, 755, 761, 764, 767, 768, 769, 772, 771, 774, 778, 779, 785, 786, 790, 792, 793, 791, 794, 795, 797, 773, 796, 804, 776, 781, 788, 1019, 1023, 1232, 1481, 1477, 298, 76, 766, 1274, 1485, 258, 398, 140, 139, 38, 15, 67, 91, 73, 14, 648, 760, 751, 801, 800]

// blue [13, 46, 56, 51, 2, 158, 240, 250, 560, 561, 565, 742, 744, 745, 1114, 747, 748, 564, 563, 612]

// yellow [194, 193, 137, 135, 136, 0, 102, 16, 17, 113, 112, 138, 135, 134, 47, 73, 14, 11, 10]

// orange [0, 7, 8, 12, 15, 16, 24, 48, 72, 73, 124, 93, 67, 101, 125, 154, 179, 186, 162, 173, 43]

// pink [0, 11, 10, 24, 192, 294, 148, 197, 195, 111, 136, 8, 6, 7, 31, 59, 9, 293, 307, 287, 288, 264, 194, 173]

// purple [4, 184, 180, 483, 482, 481, 478, 479, 622, 621, 624, 829, 288, 185, 32, 220, 884, 878, 879, 174, 199, 2, 1, 870]

// brown [3, 24, 316, 270, 314, 335, 334, 14, 425, 399, 19, 30, 180, 25, 25, 50]

// grey [3, 7, 8, 11, 31, 82, 55, 163, 162, 161, 94, 93, 91, 87, 86, 85, 83, 123, 171, 169, 92, 173, 6, 102, 81, 167, 95]


// let currentCol = colorByLabel['grey-ish'];
// let x = 0;
// let y = 0;
// for(let i = 0; i < currentCol.length; i++){
	
// 	noStroke();
// 	if(!banned['grey-ish'].includes(i)){
// 		fill(currentCol[i].r, currentCol[i].g, currentCol[i].b);
// 	} else{
// 		fill(255,255,255);
// 	}

// 	rect(x, y, 10, 10);	
// 	x += 10;
// 	if(x >= width){
// 		x = 0;
// 		y += 10;
// 	}
// }

// console.log(
// 	banned['red-ish'].length +
// 	banned['green-ish'].length +
// 	banned['blue-ish'].length +
// 	banned['yellow-ish'].length +
// 	banned['orange-ish'].length +
// 	banned['pink-ish'].length +
// 	banned['purple-ish'].length +
// 	banned['brown-ish'].length +
// 	banned['grey-ish'].length
// );