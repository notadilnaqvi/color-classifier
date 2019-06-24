// FIREBASE STUFF
let keys;
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

//RECEIVE FIREBASE DATA
// let ref = database.ref('colors');
// ref.once('value',gotData);
// function gotData(results){
// 	console.log(results.val());
// }

$(document).ready(function(){
	let r,g,b,data;	
	let jokeCounter = 1;

	// PICK A COLOR
	function pickColor(){
		r = Math.floor(Math.random()*255);
		g = Math.floor(Math.random()*255);
		b = Math.floor(Math.random()*255);
		hexColor = rgbToHex(r, g, b);
		$('.colorBox').css('background-color', hexColor).css('color', hexColor);
	}
	pickColor()
	// SEND DATA TO FIREBASE & CHANGE BOX COLOR UPON CLICK
	$('.button').click(function(){
		data = {
			r: r,
			g: g,
			b: b,
			label: $(this).html()
		}
		let color = ref.push(data)
		showJoke(jokeCounter);
		jokeCounter++;
		pickColor();
	})

	// CONVERT RGB TO HEX
	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}
	
	function rgbToHex(r, g, b) {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	// SHOW JOKE
	function showJoke(counter){
		$.get('jokes.txt', function(allJokes) {
			joke = allJokes.split("\n");
		});

		if(counter % 5 == 0){
			cleanedJoke = joke[Math.floor(counter/5)].slice(1,-2);
			$('.joke').html(cleanedJoke);
			
		}
	}
})