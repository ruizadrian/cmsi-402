Player = function(game) {
    this.game = game;
    this.speed = 20;
    this.lives = 3;
    this.isDead = false;
    this.canMove = true;
    rockEmitter = game.add.emitter(-100, -100, 100);
    rockEmitter.makeParticles('rock_particle');
    dustEmitter = game.add.emitter(-100, -100, 100);
    dustEmitter.makeParticles('dust_particle');
    dustEmitter.gravity = 500;
    dustEmitter.setAlpha(1, 0, 0);
    rockEmitter.gravity = 500;
    rockEmitter.setAlpha(1, 0, 0);
    lifeEmitter = game.add.emitter(-100, -100, 100);
    lifeEmitter.makeParticles('life_particle');
    lifeEmitter.gravity = -300;
    lifeEmitter.setAlpha(1, 0, 1500);
    lifeEmitter.setRotation(1, 1);
};

Player.prototype = {
    create: function() {
        this.group = game.add.group();
        this.stream = game.add.sprite(game.world.centerX, 900, 'star_stream');
        this.stream.anchor.setTo(0.5, 0.5);
        this.stream.animations.add('flying', null, 12, true);
        this.stream.animations.play('flying');
        this.sprite = game.add.sprite(game.world.centerX, 800, 'player');
        this.sprite.anchor.setTo(0.5, 0.5);

        game.physics.arcade.enable(this.sprite, Phaser.Physics.ARCADE);
        game.input.onUp.add(this.move, this);
        this.sprite.body.immovable = true;
        this.group.add(this.stream);
        this.group.add(this.sprite);
        game.add.tween(this.group)
            .to({
                y: +8
            }, 1200, Phaser.Easing.Sinusoidal.In)
            .to({
                y: -8
            }, 1200, Phaser.Easing.Sinusoidal.In)
            .loop()
            .start();
    },
    update: function() {
        if (this.speed < 50) {
            this.speed += 0.008;
        }

        if (this.lives < 1) {
            if (!this.isDead) {
                dustEmitter.y += 30;
                dustEmitter.gravity = 0;
                dustEmitter.start(true, 2000, 250, 50);
            }
            this.isDead = true;
        }
    },
        //  only move when you click
    
    move: function(pointer) {
        if (this.canMove) {
            this.canMove = false;
            var tempX;
            if (pointer.x < 25) {
                tempX = 25;
            } else if (pointer.x > 550) {
                tempX = 550;
            } else {
                tempX = pointer.x;
            }
            

            game.add.tween(this.group)
                .to({
                    x: tempX - 290
                }, 300, Phaser.Easing.Back.InOut)
                .start();
            game.time.events.add(350, (function() {
                this.canMove = true;
            }), this);
        }
    },

    // move: function(pointer) {
    //     if (this.canMove) {

    //         while (game.input.mousePointer.isDown){
    //             tempX = game.input.x;
    //         }
    //         // this.canMove = false;
    //         // var tempX;
    //         // if (pointer.x < 25) {
    //         //     tempX = 25;
    //         // } else if (pointer.x > 550) {
    //         //     tempX = 550;
    //         // } else if (game.input.mousePointer.isDown){
    //         //     //tempX = pointer.x;
    //         //     game.physics.arcade.moveToPointer;
    //         //     tempX = game.input.x;
    //         // }


    //         game.add.tween(this.group)
    //             .to({
    //                 x: tempX - 290
    //             }, 300, Phaser.Easing.Back.InOut)
    //             .start();
    //         game.time.events.add(350, (function() {
    //             this.canMove = true;
    //         }), this);
    //     }
    // },

    onHit: function(playerSprite, object) {
        if (object.key === 'powerup') {
            object.kill();
            lifeEmitter.x = object.x;
            lifeEmitter.y = object.y;
            lifeEmitter.start(true, 2000, 250, 10);
            if (player.lives < 3) {
                player.lives++;
            }
        } else {
            object.kill();
            rockEmitter.x = dustEmitter.x = object.x;
            rockEmitter.y = dustEmitter.y = object.y;
            rockEmitter.start(true, 1000, 250, 10);
            dustEmitter.start(true, 1000, 250, 10);
            player.lives--;
            game.plugins.screenShake.shake(30);
        }
    }
};