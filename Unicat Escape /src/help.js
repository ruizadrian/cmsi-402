var helpState = {
    create: function() {
        background = new Background(game);
        background.create();
        this.returnButton = game.add.button(64, 64, 'back_button', this.goToMenu, this);

        this.creator = game.add.text(game.world.centerX, 200, 'How to play:', {
            font: '36px Impact',
            fill: '#424242'
        });
        this.creator.anchor.setTo(0.5, 0.5);
        this.creatorName = game.add.text(game.world.centerX, 350, '\tClick/Tap on the screen \n\n\n in order to avoid objects \n\n\n\t\t\t\t\t\t\tfrom hitting you!', {
            font: '36px Impact',
            fill: '#fff',
            //fontSize: 48
        });
        this.creatorName.anchor.setTo(0.5, 0.5);
         this.creator.anchor.setTo(0.5, 0.5);
        this.creatorName = game.add.text(game.world.centerX, 750, '\n\n\nYes, it is THAT simple!', {
            font: '36px Impact',
            fill: '#fff',
            //fontSize: 48
        });
        this.creatorName.anchor.setTo(0.5, 0.5);

        // this.musicCreator = game.add.text(game.world.centerX, 450, 'Music by:', {
        //     font: '36px Impact',
        //     fill: '#424242'
        // });
        // this.musicCreator.anchor.setTo(0.5, 0.5);
        // this.musicCreatorName = game.add.text(game.world.centerX, 500, 'TBD', {
        //     font: '36px Impact',
        //     fill: '#fff',
        //     //fontSize: 48
        // });
        //this.musicCreatorName.anchor.setTo(0.5, 0.5);

    },

    goToMenu: function() {
        game.state.start('menu');
    }
};