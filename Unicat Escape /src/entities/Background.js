Background = function(game) {
    this.game = game;
};

Background.prototype = {
    create: function() {
        this.background = game.add.tileSprite(0, 0, game.world.width, 1363, 'background');
        this.walls = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'rock_walls');

    },

    update: function() {
        this.background.tilePosition.y += player.speed / 5;
        this.walls.tilePosition.y += player.speed;
        //this.lava.tilePosition.x += 2;
    },
};