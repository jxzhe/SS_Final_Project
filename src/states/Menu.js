export default class Menu extends Phaser.State {
    constructor() {
        super();
    }
    create() {
        this.create_layer_0();
        this.create_layer_1();
        this.create_layer_2();
        this.create_layer_3();
        this.create_layer_4();
        this.create_main_layer();
        this.create_layer_5();
    }
    create_layer_0() {
        this.layer_0 = this.add.image(0, 0, 'Menu_Layer00');
        this.layer_0.fixedToCamera = true;
        this.world.setBounds(0, 0, 1586, 793);
        this.physics.arcade.setBoundsToWorld();
    }
    create_layer_1() {
        this.layer_1 = this.add.image(0, 0, 'Menu_Layer01');
    }
    create_layer_2() {
        this.layer_2 = this.add.image(0, 0, 'Menu_Layer02');
    }
    create_layer_3() {
        this.layer_3 = this.add.image(0, 0, 'Menu_Layer03');
    }
    create_layer_4() {
        this.border_layer = this.add.group();
        this.border_layer.enableBody = true;
        this.layer_4 = this.add.sprite(0, 0, 'Menu_Layer04');
        this.physics.arcade.enable(this.layer_4);
        this.layer_4.body.setSize(1586, 62, 0, 732);
        this.border_layer.addMultiple([this.layer_4]);
        this.border_layer.setAll('body.immovable', true);
    }
    create_layer_5() {
        this.layer_5 = this.add.sprite(0, 0, 'Menu_Layer05');
    }
    create_main_layer() {
        this.main_layer = this.add.group();

        this.mouse_drag = this.add.sprite(0, 0, 'Mouse_Drag');
        this.mouse_drag.anchor.set(0.5);
        this.mouse_drag.scale.set(0.5);
        this.mouse_drag.animations.add('fire', [0, 1, 2, 3, 4, 5], 15, false);
        this.mouse_drag.frame = 0;
        this.mouse_drag.alpha = 0;

        this.player = this.add.sprite(500, 500, 'Player00');
        this.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        this.player.is_touching = false;
        this.player.body.bounce.set(0.3);
        this.player.anchor.set(0.5);
        this.player.angle = 0;
        this.player.body.gravity.y = 300;
        this.player.animations.add('leftwalk', [13, 14, 15, 16, 17, 18], 8, true);
        this.player.animations.add('rightwalk', [19, 20, 21, 22, 23, 24], 8, true);
        this.player.animations.add('leftjump', [1, 2, 3, 4, 5, 6], 10, true);
        this.player.animations.add('rightjump', [7, 8, 9, 10, 11, 12], 10, true);
        this.player.animations.add('leftrun', [25, 26, 27, 28, 29, 30], 8, true);
        this.player.animations.add('rightrun', [31, 32, 33, 34, 35, 36], 8, true);
        this.player.inputEnabled = true;
        this.player.events.onInputDown.add((sprite, pointer) => {
            if (!this.game.mouse.is_down) {
                this.game.mouse.is_down = true;
                this.game.mouse.x = pointer.x;
                this.game.mouse.y = pointer.y;
                sprite.body.velocity.x = 0;
                sprite.body.velocity.y = 0;

                this.mouse_drag.alpha = 1;
                this.player.body.gravity.y = (this.player.body.gravity.y > 0) ? 25 : -25;
            }
        }, this);
        this.player.events.onInputUp.add((sprite, pointer) => {
            this.game.total_life -= 1;
            this.game.mouse.is_down = false;
            this.game.time_angle = 0;
            this.game.last_time = this.time.now;
            let dx = this.game.mouse.x - pointer.x;
            let dy = this.game.mouse.y - pointer.y;
            sprite.body.velocity.x = dx > 0 ? Math.min(1000, dx * 5) : Math.max(-1000, dx * 5);
            sprite.body.velocity.y = dy > 0 ? Math.min(1000, dy * 5) : Math.max(-1000, dy * 5);
            this.mouse_drag.animations.play('fire').onComplete.add(() => { this.mouse_drag.frame = 0; this.mouse_drag.alpha = 0; });
            this.player.body.gravity.y = (this.player.body.gravity.y > 0) ? 300 : -300;
        }, this);
        this.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

        this.main_layer.addMultiple([this.mouse_drag, this.player]);
    }
    update() {
        // Physics Controller
        this.physics.arcade.collide(this.player, this.border_layer);

        // Mouse Effect
        let angle = this.math.angleBetween(this.input.activePointer.x, this.input.activePointer.y, this.player.body.position.x + this.player.offsetX - this.camera.x, this.player.body.position.y + this.player.offsetY - this.camera.y);
        let distance = Math.min(30, this.math.distance(this.input.activePointer.x, this.input.activePointer.y, this.player.body.position.x + this.player.offsetX - this.camera.x, this.player.body.position.y + this.player.offsetY - this.camera.y) * 0.25);
        if (this.game.mouse.is_down && this.input.activePointer.isDown) {
            if (this.game.mouse.x < this.input.activePointer.x) {
                this.player.animations.play(`${this.player.body.gravity.y < 0 ? 'rightjump' : 'leftjump'}`);
            } else {
                this.player.animations.play(`${this.player.body.gravity.y < 0 ? 'leftjump' : 'rightjump'}`);
            }
            this.mouse_drag.x = this.player.body.position.x + this.player.offsetX - Math.cos(angle) * distance * 1.8;
            this.mouse_drag.y = this.player.body.position.y + this.player.offsetY - Math.sin(angle) * distance * 1.8;
            this.mouse_drag.scale.set(0.5 * distance * 0.1, Math.max(0.5 * (distance * 0.05), 0.5));
            this.mouse_drag.rotation = angle;
        }

        // Player velocity force to zero
        if (this.player.body.velocity.x < 8 && this.player.body.velocity.x > -8) {
            this.player.body.velocity.x = 0;
        }

        // Player animations controller
        if (this.player.body.velocity.x < 0) {
            this.player.animations.play(`${this.player.body.gravity.y < 0 ? 'rightrun' : 'leftrun'}`);
        } else if (this.player.body.velocity.x > 0) {
            this.player.animations.play(`${this.player.body.gravity.y < 0 ? 'leftrun' : 'rightrun'}`);
        } else if (!this.game.mouse.is_down) {
            this.player.frame = 0;
            this.player.animations.stop();
        }
    }
}