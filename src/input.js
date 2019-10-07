function keyReleased(e){
	if (e.key === "Shift")
		player.speed = 35;
	keys.splice(keys.indexOf(e.key.toLowerCase()), 1);
}

function keyPressed(e){
	keys.push(e.key.toLowerCase());
}

function handle_keys_ingame(){
	if (~keys.indexOf("shift")) player.speed = 10;
	if (~keys.indexOf("a"))
		//if (player.getX - 50 > 0)
			player.setPosition = [player.getX - player.speed, player.getY];
	if (~keys.indexOf("d"))
		//if (player.getX + 55  < main.width)
			player.setPosition = [player.getX + player.speed, player.getY];
	if (~keys.indexOf("s"))
		//if (player.getY + 75 < main.height)
			player.setPosition = [player.getX, player.getY + player.speed];
	if (~keys.indexOf("w"))
		//if (player.getY - 45 > 0)
			player.setPosition = [player.getX, player.getY - player.speed];
	if (~keys.indexOf("Escape")) menu.index = 0;
	// /console.log(keys);

}

function handle_keys_menu(){
	if (~keys.indexOf("arrowdown")) {
		menu.selected++;
		if (menu.selected > 2)
			menu.selected = 0;
	}
	if (~keys.indexOf("arrowup")) {
		menu.selected--;
		if (menu.selected < 0)
			menu.selected = 2;
	}
	if (~keys.indexOf("enter"))
	{
		console.log(menu.index, menu.selected);
		menu.index = menu.selected + 1;
	}

}
