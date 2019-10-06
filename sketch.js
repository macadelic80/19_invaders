/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sketch.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aben-azz <aben-azz@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/06 20:40:48 by aben-azz          #+#    #+#             */
/*   Updated: 2019/10/06 20:56:08 by aben-azz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let		main = {
	width: 0,
	height: 0,
}

function setup(){
	main.width = window.outerWidth;
	main.height = window.outerHeight;
	createCanvas(window.outerWidth, window.outerHeight);
}

function draw(){
	//console.log("xd")
	background(255,0,0);
}


class Ship {
	
}

class Player {
	constructor(_displayName)
	{
		this.displayName = _displayName;
		this.controller = null;
		this.ship;
	}
}
