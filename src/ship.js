class Ship {
	constructor(_shipType){
		this.shield = null;
		this.guns = [];
		this.imageShip = ships[_shipType];
	}

	display(position){
		imageMode(CENTER);
		this.imageShip.resize(75, 75);
		image(this.imageShip, ...position);
	}
}
