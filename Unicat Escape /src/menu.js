var menuState = {
    create: function() {
        if (!game.global.music) {
            this.music = game.add.audio('Reboot', 0.8, true);
            this.music.play();
            game.global.music = true;
        }
        this.background = game.add.image(game.world.centerX, game.world.height, 'menu_background');
        this.background.anchor.setTo(0.5, 1);


        this.displayScores();
        this.title = game.add.image(game.world.centerX, 210, 'title');
        this.title.anchor.setTo(0.5, 0.3);
        this.playButton = game.add.button(230, 500, 'play_button', this.startGame, this);
        this.tweenButtons(this.playButton);

        this.muteButton = game.add.button(250, 675, 'mute_button', this.muteSound, this);
        this.tweenButtons(this.muteButton);
        if (game.sound.mute) {
            this.muteButton.frame = 1;
        }

        this.helpButton = game.add.button(355, 620, 'help_button', this.help, this);
        this.tweenButtons(this.helpButton);

        this.creditsButton = game.add.button(170, 645, 'credits_button', this.credits, this);
        this.tweenButtons(this.creditsButton);
    },

    startGame: function() {
        game.state.start('play');
    },

    credits: function() {
        game.state.start('credits');
    },
    help: function() {
        game.state.start('help');
    },

    muteSound: function() {
        game.sound.mute = !game.sound.mute;
        if (!game.global.mute) {
            game.global.mute = true;
            this.muteButton.frame = 1;
        } else {
            game.global.mute = false;
            this.muteButton.frame = 0;
        }
    },

    displayScores: function() {
        //High score
        if (!localStorage.getItem('bestScore')) {
            localStorage.setItem('bestScore', 0);
        }

        if (game.global.score > localStorage.getItem('bestScore')) {
            localStorage.setItem('bestScore', game.global.score);
        }

        var lastScore = game.add.text(game.world.centerX, 900, 'Last Score: ' + game.global.score + ' meters', {
            font: '28px Impact',
            fill: '#a74ac7'
        });
        lastScore.anchor.setTo(0.5, 0.5);
        var bestScore = game.add.text(game.world.centerX, 950,
            'High Score: ' + Math.ceil(localStorage.getItem('bestScore')) + ' meters', {
                font: '36px Impact',
                fill: '#ffffff'
            });
        bestScore.anchor.setTo(0.5, 0.5);

    },

    tweenButtons: function(button) {
        var randomInt = game.rnd.integerInRange(5, 10);
        game.add.tween(button)
            .to({
                y: button.y + randomInt
            }, 2000)
            .to({
                y: button.y - randomInt
            }, 2000)
            .loop()
            .start();
    },
};
