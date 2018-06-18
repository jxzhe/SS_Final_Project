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
        this.create_npc_layer();
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
        this.layer_1 = this.add.group();
        this.layer_1.create(0, 0, 'Menu_Layer01');
        this.layer_1.create(1586, 0, 'Menu_Layer01');
    }
    create_layer_2() {
        this.layer_2 = this.add.group();
        this.layer_2.create(0, 0, 'Menu_Layer02');
        this.layer_2.create(1586, 0, 'Menu_Layer02');
    }
    create_layer_3() {
        this.layer_3 = this.add.group();
        this.layer_3.create(0, 0, 'Menu_Layer03');
        this.layer_3.create(1586, 0, 'Menu_Layer03');
    }
    create_layer_4() {
        this.border_layer = this.add.group();
        this.border_layer.enableBody = true;
        this.layer_4 = this.add.sprite(0, 0, 'Menu_Layer04');
        this.physics.arcade.enable(this.layer_4);
        this.layer_4.body.setSize(1586, 62, 0, 745);
        this.border_layer.addMultiple([this.layer_4]);
        this.border_layer.setAll('body.immovable', true);
    }
    create_layer_5() {
        this.layer_5 = this.add.group();
        this.layer_5.create(0, 0, 'Menu_Layer05');
        this.layer_5.create(1586, 0, 'Menu_Layer05');
    }
    create_npc_layer() {
        this.npc_layer = this.add.group();

        this.talk_sign_prist = this.add.sprite(312, 745 - 112 + 40, 'talk');
        this.talk_sign_prist.visible = false;
        this.talk_sign_prist.inputEnabled = true;
        this.talk_sign_prist.input.useHandCursor = true;
        this.talk_sign_prist.anchor.set(0, 1);
        this.talk_sign_prist.mask = this.add.graphics(312, 745 - 112);
        this.talk_sign_prist.mask.anchor.set(0, 1);
        this.talk_sign_prist.mask.beginFill(0x000000);
        this.talk_sign_prist.mask.drawRect(0, -33, 45, 33);
        this.talk_sign_prist.events.onInputUp.add(() => {
            //
        }, this);

        this.talk_sign_pumpgirl = this.add.sprite(613, 745 - 92 + 40, 'talk');
        this.talk_sign_pumpgirl.anchor.set(0, 1);
        this.talk_sign_pumpgirl.mask = this.add.graphics(613, 745 - 92);
        this.talk_sign_pumpgirl.mask.anchor.set(0, 1);
        this.talk_sign_pumpgirl.mask.beginFill(0x000000);
        this.talk_sign_pumpgirl.mask.drawRect(0, -33, 45, 33);

        this.talk_sign_bookgirl = this.add.sprite(851, 745 - 92 + 40, 'talk');
        this.talk_sign_bookgirl.anchor.set(0, 1);
        this.talk_sign_bookgirl.mask = this.add.graphics(851, 745 - 92);
        this.talk_sign_bookgirl.mask.anchor.set(0, 1);
        this.talk_sign_bookgirl.mask.beginFill(0x000000);
        this.talk_sign_bookgirl.mask.drawRect(0, -33, 45, 33);

        this.talk_sign_save = this.add.sprite(1211, 745 - 132 + 40, 'talk');
        this.talk_sign_save.anchor.set(0, 1);
        this.talk_sign_save.mask = this.add.graphics(1211, 745 - 132);
        this.talk_sign_save.mask.anchor.set(0, 1);
        this.talk_sign_save.mask.beginFill(0x000000);
        this.talk_sign_save.mask.drawRect(0, -33, 45, 33);

        this.talk_sign_exitdoor = this.add.sprite(1501, 745 - 102 + 40, 'talk');
        this.talk_sign_exitdoor.anchor.set(0, 1);
        this.talk_sign_exitdoor.visible = false;
        this.talk_sign_exitdoor.inputEnabled = true;
        this.talk_sign_exitdoor.input.useHandCursor = true;
        this.talk_sign_exitdoor.mask = this.add.graphics(1501, 745 - 102);
        this.talk_sign_exitdoor.mask.anchor.set(0, 1);
        this.talk_sign_exitdoor.mask.beginFill(0x000000);
        this.talk_sign_exitdoor.mask.drawRect(0, -33, 45, 33);
        this.talk_sign_exitdoor.events.onInputUp.add(() => {
            this.state.start('Stage1');
        }, this);

        this.prist = this.add.sprite(312, 745, 'prist');
        this.prist.anchor.set(0, 1);
        this.prist.sign = this.talk_sign_prist;
        this.prist.tween = this.add.tween(this.talk_sign_prist).to({ y: 745 - 112 }, 300);
        this.prist.tween_back = this.add.tween(this.talk_sign_prist).to({ y: 745 - 112 + 40 }, 300);

        this.pumpgirl = this.add.sprite(613, 745, 'pumpgirl');
        this.pumpgirl.anchor.set(0, 1);
        this.pumpgirl.sign = this.talk_sign_pumpgirl;
        this.pumpgirl.animations.add('idle', [0, 1, 2], 5, true);
        this.pumpgirl.animations.play('idle');
        this.pumpgirl.tween = this.add.tween(this.talk_sign_pumpgirl).to({ y: 745 - 92 }, 300);
        this.pumpgirl.tween_back = this.add.tween(this.talk_sign_pumpgirl).to({ y: 745 - 92 + 40 }, 300);

        this.bookgirl = this.add.sprite(851, 745, 'bookgirl');
        this.bookgirl.anchor.set(0, 1);
        this.bookgirl.sign = this.talk_sign_bookgirl;
        this.bookgirl.animations.add('idle', [0, 1, 2, 3, 4, 5], 8, true);
        this.bookgirl.animations.play('idle');
        this.bookgirl.tween = this.add.tween(this.talk_sign_bookgirl).to({ y: 745 - 92 }, 300);
        this.bookgirl.tween_back = this.add.tween(this.talk_sign_bookgirl).to({ y: 745 - 92 + 40 }, 300);

        this.save = this.add.sprite(1211, 745, 'saveboy');
        this.save.anchor.set(0, 1);
        this.save.sign = this.talk_sign_save;
        this.save.animations.add('idle', [0, 1, 2, 3], 8, true);
        this.save.animations.play('idle');
        this.save.tween = this.add.tween(this.talk_sign_save).to({ y: 745 - 132 }, 300);
        this.save.tween_back = this.add.tween(this.talk_sign_save).to({ y: 745 - 132 + 40 }, 300);

        this.exitdoor = this.add.sprite(1501, 745, 'exitdoor');
        this.exitdoor.anchor.set(0, 1);
        this.exitdoor.sign = this.talk_sign_exitdoor;
        this.exitdoor.animations.add('idle', [0, 1, 2, 3], 8, true);
        this.exitdoor.animations.play('idle');
        this.exitdoor.tween = this.add.tween(this.talk_sign_exitdoor).to({ y: 745 - 102 }, 300);
        this.exitdoor.tween_back = this.add.tween(this.talk_sign_exitdoor).to({ y: 745 - 102 + 40 }, 300);

        this.npc_layer.addMultiple([this.prist, this.pumpgirl, this.bookgirl, this.save, this.exitdoor]);
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

        // NPC effect
        for(let child of this.npc_layer.children) {
            if(this.player.x > child.x - 25 && this.player.x < child.x + 75) {
                child.sign.visible = true;
                child.tween.start();
            } else {
                child.tween_back.start().onComplete.add(() => { child.sign.visible = false;});
            }
        }

        // Layer effect
        if(this.player.x > 928 * 0.5 && this.player.x < 1586 - 928 * 0.5 ) {
            for(let child of this.layer_1.children) {
                child.x -= this.player.body.velocity.x * 0.0025;
                if(child.x < -1586) {
                    child.x += 1586 * 2;
                } else if(child.x > 1586) {
                    child.x -= 1586 * 2;
                }
            }
            for(let child of this.layer_2.children) {
                child.x -= this.player.body.velocity.x * 0.006;
                if(child.x < -1586) {
                    child.x += 1586 * 2;
                } else if(child.x > 1586) {
                    child.x -= 1586 * 2;
                }
            }
            for(let child of this.layer_3.children) {
                child.x -= this.player.body.velocity.x * 0.0095;
                if(child.x < -1586) {
                    child.x += 1586 * 2;
                } else if(child.x > 1586) {
                    child.x -= 1586 * 2;
                }
            }
            for(let child of this.layer_5.children) {
                child.x -= this.player.body.velocity.x * 0.015;
                if(child.x < -1586) {
                    child.x += 1586 * 2;
                } else if(child.x > 1586) {
                    child.x -= 1586 * 2;
                }
            }
        }
    }
}