var inputText = document.getElementById("inputText");
var butts = document.getElementById("createButton")
var cardHolder = document.getElementById("cardHolder");

butts.addEventListener("click", domString);

//Functions
function domString() {
	var outputCard = "";
		outputCard += `<div class="textBox">`;
		outputCard +=		`<p class="cardText">${inputText.value}</p>`;
		//		1b. Which also includes it's own delete button.
		outputCard +=		`<button class="deleteBtn">Delete Card</button>`;
		outputCard += `</div>`;
		writeToDom(outputCard);
		inputText.value = "";
}
// 2.  When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM.
//   2a. Not just made invisible, actually removed from the DOM. -->
document.body.addEventListener('click', function(e){
	if (e.target.className === "deleteBtn"){
		cardHolder.removeChild(e.target.parentElement);
	}
	console.log(e.target.className)
	console.log(e)
	})
function writeToDom(strang){
	cardHolder.innerHTML += strang;
}



