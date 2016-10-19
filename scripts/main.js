var green = "#2ecc40";
var red = "#ff851b";

function searchByID() {
	var searchValue = document.getElementById("id-search").value;

	if (searchValue.length > 0) {
		for (var i = 0; i < database.length; i++) {
			if (database[i].id == searchValue) {
				setBackgroundColor(green);
				return database[i];
			} else {
				setBackgroundColor(red);
			}
		}
	}
}

function setBackgroundColor(color) {
	document.body.style.backgroundColor = color;
}
