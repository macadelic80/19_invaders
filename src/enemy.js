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

class Enemy {
    constructor(_shipType, _position){
        this.ship = new Ship(_shipType);
        this.position = _position;

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