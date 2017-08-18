var inputText = document.getElementById("inputText");
var txt = "";
var textArray = [];

// 1. The user enters in text into the text area and then clicks the create button
//   once you hit enter, THEN it grabs the input value
document.body.addEventListener('keypress', function(event){
	if(event.key === 'Enter') {
		// Issue here: txt gets assigned a value the first time and won't let me pass another value
		txt = inputText.value;
//   1a.Create a new card element in the DOM from that text
		domString(txt);
		// This 'array[array.length - 1]' sends only the last(newest) object in the array to writeToDom()
		writeToDom(textArray[textArray.length - 1]);
		// console.log("input text", txt);
		// console.log("array objects",textArray);
		console.log("input field", inputText.value)

		inputText.value = "";
		console.log("input field", inputText.value)
	}
});


//		1c.You decide the height/width of the card.



// 2.  When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM.
//   2a. Not just made invisible, actually removed from the DOM. -->
		// using splice??
		// using target, and removing the div??

//Functions
function domString(someText) {
	var outputCard = "";
	// for (var i = 0; i < textArray.length; i++){
		outputCard += `<div class="textBox">`;
		outputCard +=		`<p class="cardText">${txt}</p>`;
		//		1b. Which also includes it's own delete button.
		outputCard +=		`<button class="deleteBtn">Delete Card</button>`
		outputCard += `</div>`;
		console.log("domString function, outputCard is ", outputCard);
		textArray.push(outputCard);

	// }
}

// For this function to print properly I need it to grab each object in the array and print EACH card out
function writeToDom(strang){
	document.body.innerHTML += strang;
}



