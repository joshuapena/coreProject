var Game = function(canvas, sprites, audio, params) {
	this.fps = 60;
	var canvas = canvas;
	this.ctx = canvas.getContext("2d");
	this.sprites = sprites;
	this.audio = audio;
	this.backgroundSound = "casanova";

    console.log(params.sex);
    console.log(params.ethnicity);
    console.log(params.major);
		
	var worldOptions = {
		width : canvas.width,
		height : canvas.height
	};
	
	this.world = new World(this.ctx, worldOptions, this.sprites);
	
	this.world.addPlayer(new Player(this.world, this.audio));
	
	var game = this;
	
	var gameloop = setInterval(function() {
		collider(game);
		update(game, audio);
		draw(game.world);
	}, 1000 / this.fps);
}
