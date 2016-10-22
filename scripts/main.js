var green = "#2ecc40";
var red = "#ff4136";

function searchByID() {
	var searchValue = document.getElementById("id-search").value;

	if (searchValue.length > 0) {
		for (var i = 0; i < database.length; i++) {
			if (database[i].id == searchValue) {
				setBackgroundColor(red);
				return database[i];
			} else {
				setBackgroundColor(green);
			}
		}
	}
}

function setBackgroundColor(color) {
	document.getElementsByClassName("container").style.backgroundColor = color;
}
