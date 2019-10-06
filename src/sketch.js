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
}

function setup(){
	createCanvas(main.width-20, main.height-20);
	frameRate(30);
	player = new Player("abenazz", "airplane");
}

function draw(){
	background(0);
	show_fps();
	display_score();
	handle_keys();
	player.displayShip();
	set_background();
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
