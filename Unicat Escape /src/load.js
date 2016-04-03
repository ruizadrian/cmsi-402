var loadState = {
    preload: function() {
        var loadingLabel = game.add.text(game.world.centerX, 150, 'Loading!', {
            fontSize: 96,
            fill: '#ffffff'
        });
        loadingLabel.anchor.setTo(0.5, 0.5);
        var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);

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
