let getImage = src =>{
	return loadImage(main.github + src + ".png")
};

let keys = [];

let	main = {
	width: window.innerWidth,
	height: window.innerHeight,
	starsCount: 500,
	speed: 15,
	score: 0,
	github: "https://raw.githubusercontent.com/aben-azz/19_invaders/master/images/"
};

let player = null;

let ships = {
	simple: null,
	airplane: null
};

let bullets = {
	simple: null,
	airplane: null
};

let weapons = {
	simple: null,
	airplane: null
};

let controller = {
	controllerType: "keyboard"
}
