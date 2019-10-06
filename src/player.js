class Player {
	constructor(_displayName, _shipType)
	{
		this.displayName = _displayName;
		this.controller = null;
		this.ship = new Ship(_shipType);
		this.position = [main.width / 2, main.height - 50];
		this.speed = 35;
	}
	get getX(){
		return this.position[0];
	}
	get getY(){
		return this.position[1];
	}
	set setPosition(xy){
		this.position = xy;
	}
	displayShip(){
		rectMode(CENTER);
		stroke(255,0,0);
		noFill();
		rect(...this.position,35,75);
		this.ship.display(this.position);
	}
}
