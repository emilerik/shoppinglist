var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

// creates a list item
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	input.value = "";
	addDeleteButton(li);
	toggleDone(li);
}

// add list item with button
button.addEventListener("click", addListAfterClick);
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// add list item with keypress
input.addEventListener("keypress", addListAfterKeypress);
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// toggles strikesthrough when click li item
function toggleDone(listItem) {
	listItem.addEventListener("click", function() {
		listItem.classList.toggle("done");
	})
}

// deletes a list item
function deleteListItem(listItem) {
	listItem.parentElement.removeChild(listItem);
}

// adds a delete button to a list item
function addDeleteButton(listItem) {
	var delBtn = document.createElement("button");
	listItem.appendChild(delBtn);
	delBtn.appendChild(document.createTextNode("Delete"));
	delBtn.classList.add("delBtn");
	adddelBtnFn(delBtn);
}

// adds the del fn to a del button
function adddelBtnFn(delBtn) {
	delBtn.addEventListener("click", function() {
		var listItem = delBtn.parentElement;
		deleteListItem(listItem);
	})
}

// adds del buttons and toggle done fn to existing li items
listItems.forEach(function(listItem) {
	addDeleteButton(listItem);
	toggleDone(listItem);
})