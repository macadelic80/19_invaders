/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sketch.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aben-azz <aben-azz@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/06 20:40:48 by aben-azz          #+#    #+#             */
/*   Updated: 2019/10/06 23:53:28 by tjuzen           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function	preload(){
	ships.simple = getImage("simple");
	ships.airplane = getImage("airplane");
	ships.enemy1 = getImage("enemy");
}

let player;

let menu = {
	index: 0, //0 Main menu, 1 Game 2 Options
	selected: 0,
	colors: [[255, 0, 0], [0, 255, 0]],
	main: null,
	start: null,
	customize: null,
	options: null
};

let enemies = [];

function setup(){
	createCanvas(main.width-20, main.height-20);
	player = new Player("abenazz", "airplane");
    for (let i = 0; i < 5; i++){
        enemies[i] = new Enemy("enemy1", [100 + (main.width / 5) * (i), 130])
    }
	//console.log(getSizeText(50, "Menu"));
}

class Button {
	constructor(_text, _size, _y, _index){
		this.size = _size;
		this.text = _text;
		this.y = _y;
		this.index = _index;
	}
	display(){
		let xy = [main.width / 2 - (getSize(this.size, this.text)/2), this.y];
		display_text(this.text, this.size, menu.colors[~~(this.index === menu.selected)], xy);
	}
	get getSize(){
		textSize(this.size);
		return textWidth(this.text);
	}
}

function getSize(size, text){
		textSize(size);
		return textWidth(text);
	}
function display_text(texte, size, colors, position){
	textSize(size);
	fill(...colors);
	text(texte, ...position);
}

function draw(){
	background(0);
	if (!menu.index){
		frameRate(10);
		handle_keys_menu();
		display_text("Main Menu", 75, [255, 0, 0], [main.width / 2 - (getSize(75, "Main Menu")/2), 130]);

		menu.start = new Button("Start Game", 50, 430, 0);
		menu.customize = new Button("Customize", 50, 630, 1);
		menu.options = new Button("Options", 50, 830, 2);
		menu.start.display();
		menu.customize.display();
		menu.options.display();
	} else if (menu.index === 1){
		frameRate(30);
		show_fps();
		display_score();
		handle_keys_ingame();
		player.displayShip();
		enemies.forEach(x=>x.displayShip());
		set_background();
	} else if (main.index === 2){
		;//options
	}

}

class Weapon {
	constructor(_weaponType, _bulletType){
		this.imageWeapon = weapons[_weaponType];
		this.ammo = new Bullet(_bulletType);
	}
}

class Bullet {
		constructor(_bulletType){

		}
}
