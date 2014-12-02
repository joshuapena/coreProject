"use strict";

// Stages
var nextStage = false;
var minionTime = false;
var bossTime = true;
var round = 0;
var playerEnd = false;

var test = true;

var update = function (game, params, audio) {

    // Calls the update function for all objects
	[game.world.platforms,
     game.world.spikes
	].forEach (
		function(gameElementArray) {
			gameElementArray.forEach(function(gameElement) {
				gameElement.update();
			});
		}
	);

    // Calls update for player function
	game.world.players.forEach( function(player) {
        player.update();
        if (player.reachEnd === true) {
            playerEnd = true;
        }
    });

    // Filters inactive objects
    game.world.players = game.world.players.filter(function(player) {
        return player.active;
    });
	
	game.world.platforms = game.world.platforms.filter(function(platform) {
		return platform.active;
	});

    // Start of the level layout
    if (playerEnd === true) {
        game.world.end = true;
    } else if (game.world.players.length < 1) {
       game.world.died = true; 
    } else if (test) {
        // End Flag
        game.world.assets.push (new EndLine(game.world, {
            x: game.world.width - 60,
            y: game.world.height - 60,
            spriteName: "endFlag"
        }));

        // The floor
        game.world.platforms.push (new Platform(game.world, {
            x: 0,
            y: game.world.height - 30,
            width: game.world.width / 8,
            height: 200
        }));
        game.world.platforms.push (new Platform(game.world, {
            x: game.world.width * 7 / 8,
            y: game.world.height - 30,
            width: game.world.width / 8,
            height: 200
        }));

        // Spikes
        game.world.spikes.push (new Spike(game.world, {
            x: game.world.width / 8,
            width: game.world.width * 3 / 4
        }));

        // Platforms
        game.world.platforms.push(new Platform(game.world, {
			x: 167,
			y: 250,
            width: 66
		}));
		game.world.platforms.push(new Platform(game.world, {
			x: 367,
			y: 250,
            width: 66
		}));
        
        // Moving Spikes
        game.world.spikes.push (new MovingSpike(game.world, {
            x: game.world.width * 3 / 4,
            y: game.world.height / 2,
            rightBound: game.world.width - 100,
            leftBound: 100,
            movingRight: true,
            speed: 3
        }));
        game.world.spikes.push (new MovingSpike(game.world, {
            x: game.world.width / 4,
            y: game.world.height / 2,
            rightBound: game.world.width - 100,
            leftBound: 100,
            speed: 3
        }));
        game.world.spikes.push (new MovingSpike(game.world, {
            x: game.world.width / 3,
            y: game.world.height / 2 + 20,
            rightBound: game.world.width - 120,
            leftBound: 120,
            movingRight: true,
            speed: 2
        }));
        game.world.spikes.push (new MovingSpike(game.world, {
            x: game.world.width * 2 / 3,
            y: game.world.height / 2 + 20,
            rightBound: game.world.width - 120,
            leftBound: 120,
            speed: 2
        }));

        test = false;
    } else if (test) {
        // Basic Set up (?)

        // Spikes
        game.world.spikes.push (new Spike(game.world, {
            x: game.world.width / 2
        }));
        game.world.spikes.push (new Spike(game.world, {
            x: game.world.width / 2 + 80
        }));
        game.world.spikes.push (new Spike(game.world, {
            x: game.world.width / 2 + 160
        }));
        game.world.spikes.push (new Spike(game.world, {
            x: game.world.width / 2 - 80
        }));
        game.world.spikes.push (new Spike(game.world, {
            x: game.world.width / 2 - 160
        }));

        // Moving Spikes
        game.world.spikes.push (new MovingSpike(game.world, {
            x: game.world.width * 3 / 4,
            y: game.world.height / 2,
            rightBound: game.world.width - 100,
            leftBound: 100,
            movingRight: true
        }));
        game.world.spikes.push (new MovingSpike(game.world, {
            x: game.world.width / 4,
            y: game.world.height / 2,
            rightBound: game.world.width - 100,
            leftBound: 100,
        }));
        game.world.spikes.push (new MovingSpike(game.world, {
            x: game.world.width - 100,
            y: game.world.height - 60,
            rightBound: game.world.width - 100,
            leftBound: 100,
            speed: 1
        }));

        // End Flag
        game.world.assets.push (new EndLine(game.world, {
            x: game.world.width - 60,
            y: game.world.height - 60,
            spriteName: "endFlag"
        }));

        // The floor
        game.world.platforms.push (new Platform(game.world, {
            x: 0,
            y: game.world.height - 30,
            width: game.world.width,
            height: 200
        }));

        test = false;
    } else if (test) {
        // End Flag
        game.world.assets.push (new EndLine(game.world, {
            x: game.world.width - 60,
            y: game.world.height - 60,
            spriteName: "endFlag"
        }));

        // Spikes
        game.world.spikes.push (new Spike(game.world));

        // Moving Spikes
        game.world.spikes.push (new MovingSpike(game.world, {
            topBound: 1,
            bottomBound: game.world.height - 100
        }));
        game.world.spikes.push (new MovingSpike(game.world, {
            rightBound: game.world.width - 100,
            leftBound: 100
        }));

        // The floor
        game.world.platforms.push (new Platform(game.world, {
            x: 0,
            y: game.world.height - 30,
            width: game.world.width,
            height: 200
        }));

        // Platforms
        game.world.platforms.push(new Platform(game.world, {
			x: 175,
			y: 250,
		}));
		game.world.platforms.push(new Platform(game.world, {
			x: 375,
			y: 250,
		}));
		game.world.platforms.push(new Platform(game.world, {
			x: 130,
			y: 196,
		}));
		game.world.platforms.push(new Platform(game.world, {
			x: 420,
			y: 196,
		}));
        game.world.platforms.push(new Platform(game.world, {
            x: 130,
            y: 140
        }));
        game.world.platforms.push(new Platform(game.world, {
            x: 420,
            y: 140
        }));
        game.world.platforms.push(new Platform(game.world, {
            x: 175,
            y: 83
        }));
        game.world.platforms.push(new Platform(game.world, {
            x: 375,
            y: 83
        }));
        game.world.platforms.push(new Platform(game.world, {
            x: 275,
            y: 83
        }));

        test = false;
	} else if (minionTime && round == 0) {
        game.world.platforms.push(new Platform(game.world, {
			x: 175,
			y: 250,
		}));
		game.world.platforms.push(new Platform(game.world, {
			x: 375,
			y: 250,
		}));
		game.world.platforms.push(new Platform(game.world, {
			x: 130,
			y: 196,
		}));
		game.world.platforms.push(new Platform(game.world, {
			x: 420,
			y: 196,
		}));
        game.world.platforms.push(new Platform(game.world, {
            x: 130,
            y: 140
        }));
        game.world.platforms.push(new Platform(game.world, {
            x: 420,
            y: 140
        }));
        game.world.platforms.push(new Platform(game.world, {
            x: 175,
            y: 83
        }));
        game.world.platforms.push(new Platform(game.world, {
            x: 375,
            y: 83
        }));
        game.world.platforms.push(new Platform(game.world, {
            x: 275,
            y: 83
        }));

	}
};
