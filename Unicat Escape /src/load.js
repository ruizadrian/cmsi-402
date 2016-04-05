/*jshint undef: false, unused:false*/
var loadState = {
    preload: function() {
        var loadingLabel = game.add.text(game.world.centerX, 150, 'Loading, please wait a second :)', {
            fontSize: 96,
            fill: '#ffffff'
        });
        loadingLabel.anchor.setTo(0.5, 0.5);
        var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);

<<<<<<< HEAD
        //Let's load player stuff
        game.load.image('player', 'assets/character/unicat.png');
        game.load.spritesheet('star_stream', 'assets/character/stream.png', 48, 45);

        //Let's load background stuff
        game.load.image('rock_walls', 'assets/background/rock_walls.png');
        game.load.image('background', 'assets/background/background.png');

        //Rocks
        game.load.image('small_rock', 'assets/background/small_rock.png');
        game.load.image('big_rock', 'assets/background/big_rock.png');
        game.load.image('small_rock2', 'assets/background/small_rock2.png');
        game.load.image('big_rock2', 'assets/background/big_rock2.png');
        game.load.image('medium_rock', 'assets/background/medium_rock.png');
        game.load.image('rock_particle', 'assets/background/particle_rock.png');
        game.load.image('dust_particle', 'assets/background/particle_dust.png');

        //Powerups
        game.load.image('powerup', 'assets/background/powerup.png');
        game.load.image('life_particle', 'assets/background/particle_life.png');

        //UI
=======
>>>>>>> 5bf8a04ee7415e8e250512df16dd4363f0d5d869
        game.load.image('empty_heart', 'assets/ui/empty_heart.png');
        game.load.image('full_heart', 'assets/ui/full_heart.png');
        game.load.image('play_button', 'assets/ui/play_button.png');
        game.load.image('help_button', 'assets/ui/help_button.png');
        game.load.image('credits_button', 'assets/ui/info_button.png');
        game.load.spritesheet('mute_button', 'assets/ui/mute_button.png', 154, 200);
        game.load.image('menu_background', 'assets/ui/menu_background.png');
        game.load.image('title', 'assets/ui/title.png');
        game.load.image('back_button', 'assets/ui/back_icon.png');

    },
    create: function() {
        game.state.start('menu');
    }
};
