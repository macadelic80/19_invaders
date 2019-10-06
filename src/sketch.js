/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sketch.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aben-azz <aben-azz@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/06 20:40:48 by aben-azz          #+#    #+#             */
/*   Updated: 2019/10/06 22:43:28 by tjuzen           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let	main = {
	width: window.innerWidth,
	height: window.innerHeight,
	starsCount: 500,
	speed: 15,
	github: "https://raw.githubusercontent.com/aben-azz/19_invaders/master/"
}

let player = null;


let ships = {
	simple: null,
	airplane: null
}

let bullets = {
	simple: null,
	airplane: null
}

let weapons = {
	simple: null,
	airplane: null
}


let getImage = src =>{
	return loadImage(main.github + src + ".png")
}

let keys = [];
function	preload(){
	ships.simple = getImage("simple")
	ships.airplane = getImage("airplane");
}

function setup(){
	createCanvas(main.width-20, main.height-20);
	frameRate(30);
	player = new Player("abenazz", "airplane");
}


function keyReleased(e){
	keys.splice(keys.indexOf(e.key), 1);
}

function keyPressed(e){
	keys.push(e.key);
}

function draw(){
	//console.log("xd")
	background(0);
	show_fps();
	handle_keys();
	player.displayShip();
	set_background();

}

function handle_keys(){
	//console.log(keys)
	if (~keys.indexOf("ArrowLeft"))
		player.setPosition = [player.getX - player.speed, player.getY];
	if (~keys.indexOf("ArrowRight"))
		player.setPosition = [player.getX + player.speed, player.getY];
	if (~keys.indexOf("ArrowDown"))
		player.setPosition = [player.getX, player.getY + player.speed];
	if (~keys.indexOf("ArrowUp"))
		player.setPosition = [player.getX, player.getY - player.speed];
}


class Weapon {
	constructor(_imageType, _imageAmmo){
		this.imageWeapon = weapons[_imageWeapon];
		this.ammo = new Bullet(_bulletType);

	}
}

class Bullet {
		constructor(_bulletType){

		}
}

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

class Player {
	constructor(_displayName, _shipType)
	{
		this.displayName = _displayName;
		this.controller = null;
		this.ship = new Ship(_shipType);
		this.position = [main.width / 2, main.height - 50]
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
		rectMode(CENTER)
		stroke(255,0,0)
		noFill()
		rect(...this.position,35,75);
		this.ship.display(this.position);
	}
}

function display_star() {
	let x = random(-main.width / 2, main.width / 2);
	let y = random(-main.height / 2, main.height / 2);
	let z = random(main.width / 2);
	let pz = z;

	z -= main.speed;
	if (z < 1) {
		z = main.width / 2;
		x = random(-main.width / 2, main.width / 2);
		y = random(-main.height / 2, main.height / 2);
		pz = z;
	}
	fill(0);
	noStroke();

	var sx = map(x / z, 0, 1, 0, main.width / 2);
	var sy = map(y / z, 0, 1, 0, main.height / 2);

	var r = map(z, 0, main.width / 2, 8, 0);
	ellipse(sx, sy, r, r);

	var px = map(x / pz, 0, 1, 0, main.width / 2);
	var py = map(y / pz, 0, 1, 0, main.height / 2);

	pz = z;
	stroke(100);
	line(px, py, sx, sy);
}

function set_background() {
	translate(main.width / 2, main.height / 2);
	for (let i = 0; i < main.starsCount; i++) display_star();
	translate(main.width, main.height);
}

function show_fps() {
	let fps = frameRate();
	fill(255);
	stroke(0);
	textSize(25);
	text("FPS : " + fps.toFixed(2), 15, 30);
}
