function show_fps() {
	let fps = frameRate();
	fill(255);
	stroke(0);
	textSize(25);
	text("FPS : " + fps.toFixed(2), 15, main.height - 30);
}

function display_score() {
    fill(255);
	stroke(0);
	textSize(20);
	text("SCORE: " + main.score, 0+20, 30);
}
