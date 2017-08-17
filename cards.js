var inputText = document.getElementById("inputText");
var txt = "";
var textArray = [];

// 1. The user enters in text into the text area and then clicks the create button
//   once you hit enter, THEN it grabs the input value
document.body.addEventListener('keypress', function(event){
	if(event.key === 'Enter') {
		txt = inputText.value;
//   1a.Create a new card element in the DOM from that text
		// textArray.push(txt);
		domString(txt);
		writeToDom(textArray);
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
	for (var i = 0; i < textArray.length; i++){
		outputCard += `<div class="textBox">`;
		outputCard +=		`<p class="cardText">${textArray[i]}</p>`;
		//		1b. Which also includes it's own delete button.
		outputCard +=		`<button class="deleteBtn">Delete Card</button`
		outputCard += `</div>`;
		textArray.push(outputCard);
	}
}
function writeToDom(strang){
	console.log(strang);
	document.body.innerHTML += strang;
}





