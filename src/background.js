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

	let sx = map(x / z, 0, 1, 0, main.width / 2);
	let sy = map(y / z, 0, 1, 0, main.height / 2);

	let r = map(z, 0, main.width / 2, 8, 0);
	ellipse(sx, sy, r, r);

	let px = map(x / pz, 0, 1, 0, main.width / 2);
	let py = map(y / pz, 0, 1, 0, main.height / 2);

	pz = z;
	stroke(100);
	line(px, py, sx, sy);
}

function set_background() {
	translate(main.width / 2, main.height / 2);
	for (let i = 0; i < main.starsCount; i++) display_star();
	translate(main.width, main.height);
}
