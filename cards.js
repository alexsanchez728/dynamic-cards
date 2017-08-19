var inputText = document.getElementById("inputText");
var butts = document.getElementById("createButton")
var cardHolder = document.getElementById("cardHolder");
// var txt = "";
// var textArray = [];

butts.addEventListener("click", domString);
// 1. The user enters in text into the text area and then clicks the create button
//   once you hit enter, THEN it grabs the input value
// document.body.addEventListener('click', function(event){
// 	if(event.key === 'Enter') {
// 		// Issue here: txt gets assigned a value the first time and won't let me pass another value
// 		txt = inputText.value;
// //   1a.Create a new card element in the DOM from that text
// 		domString(txt);
// 		// This 'array[array.length - 1]' sends only the last(newest) object in the array to writeToDom()
		// writeToDom(textArray[textArray.length - 1]);
// 		// console.log("input text", txt);
// 		// console.log("array objects",textArray);
// 		console.log("input field before", inputText.value)

// 		// inputText.value = "";
// 		// console.log("input field after", inputText.value)
// 	}
// });


//		1c.You decide the height/width of the card.





//Functions
function domString() {
	var outputCard = "";
	// for (var i = 0; i < textArray.length; i++){
		outputCard += `<div class="textBox">`;
		outputCard +=		`<p class="cardText">${inputText.value}</p>`;
		//		1b. Which also includes it's own delete button.
		outputCard +=		`<button class="deleteBtn">Delete Card</button>`;
		outputCard += `</div>`;
		// textArray.push(outputCard);
		// writeToDom(textArray[textArray.length - 1])
		writeToDom(outputCard);
		inputText.value = "";
}
// 2.  When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM.
//   2a. Not just made invisible, actually removed from the DOM. -->
		// using target, and removing the div??
document.body.addEventListener('click', function(e){
	if (e.target.className === "deleteBtn"){
		cardHolder.removeChild(e.target.parentElement);
	}
	console.log(e.target.className)
	console.log(e)
	})
// For this function to print properly I need it to grab each object in the array and print EACH card out
function writeToDom(strang){
	cardHolder.innerHTML += strang;
}



