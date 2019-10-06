function keyReleased(e){
	keys.splice(keys.indexOf(e.key), 1);
}

function keyPressed(e){
	keys.push(e.key);
}

function handle_keys(){
	if (~keys.indexOf("ArrowLeft"))
		if (player.getX - 50 > 0)
			player.setPosition = [player.getX - player.speed, player.getY];
	if (~keys.indexOf("ArrowRight"))
		if (player.getX + 55  < main.width)
			player.setPosition = [player.getX + player.speed, player.getY];
	if (~keys.indexOf("ArrowDown"))
		if (player.getY + 75 < main.height)
			player.setPosition = [player.getX, player.getY + player.speed];
	if (~keys.indexOf("ArrowUp"))
		if (player.getY - 45 > 0)
			player.setPosition = [player.getX, player.getY - player.speed];
}
