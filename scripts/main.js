var database = [{
	name: "white page",
}, {
	name: "tuck it in my tux",
}, {
	id: 942,
	name: "penny talk",
}, {
	id: 1129,
	name: "leggy legend",
}, {
	id: 672,
	name: "mochacino",
}, {
	id: 1131,
	name: "frock 'n roll",
}, {
	id: 0,
	name: "top coat",
}, {
	id: 3,
	name: "sew me",
}, {
	id: 170,
	name: "beauty nap",
}, {
	id: 380,
	name: "off duty style",
}, {
	id: 320,
	name: "find me a man-nequin",
}, {
	id: 96,
	name: "ballet slippers",
}, {
	id: 1125,
	name: "peach side babe",
}, {
	id: 608,
	name: "in stitches",
}, {
	id: 1132,
	name: "with the band",
}, {
	id: 1133,
	name: "in the lobby",
}, {
	id: 416,
	name: "berry naughty",
}, {
	id: 250,
	name: "looks to thrill",
}, {
	id: 1154,
	name: "off tropic",
}, {
	id: 1130,
	name: "bell-bottom blues",
}, {
	id: 754,
	name: "mint candy apple",
}, {
	id: 784,
	name: "aruba blue",
}, {
	id: 1135,
	name: "virgin snow",
}, {
	name: "go ginza",
}, {
	name: "naughty nautical",
}, {
	id: 770,
	name: "pret-a-surfer",
}, {
	id: 536,
	name: "geranium",
}, {
	id: 1162,
	name: "nama-stay the night",
}, {
	id: 757,
	name: "chillato",
}, {
	id: 264,
	name: "watermelon",
}, {
	id: 276,
	name: "flowerista",
}, {
	name: "love sheen",
}, {
	name: "no shrinking violet",
}, {
	name: "muse, myself",
}];

function searchByID(query) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].id == query) {
			return database[i];
		}
	}
}

function searchByName(query) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].name == query) {
			return database[i];
		}
	}
}
