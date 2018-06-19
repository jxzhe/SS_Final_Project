import firebase from 'firebase/app';
export default class Menu extends Phaser.State {
    constructor() {
        super();
    }
    create() {
        this.bgm = this.add.audio('bgm');
        this.bgm.play();
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

        this.info_back = this.add.sprite(928 * 0.5, 0, 'info_back');
        this.info_back.anchor.set(0.5, 0);
        this.info_back.alpha = 0.6;
        this.info_back.fixedToCamera = true;
        this.info_back.text = this.add.bitmapText(928 * 0.5, 80, 'carrier_command', `PRINNY DASH`);
        this.info_back.text.tint = 0x331111;
        this.info_back.text.anchor.set(0.5, 0);
        this.info_back.text.fontSize = 40;
        this.info_back.text.fixedToCamera = true;

        this.load_input = {
            'name': this.add.bitmapText(400, 90, 'carrier_command', `${this.game.inputBuffer}`),
            'isPassword': false,
            'password': ''
        };
        this.load_input.name_title = this.add.bitmapText(928 * 0.18, 90, 'carrier_command', `NAME: `);
        this.load_input.name_title.fixedToCamera = true;
        this.load_input.name_title.visible = false;
        this.load_input.name.fixedToCamera = true;
        this.load_input.name.visible = false;
        this.load_input.name.tint = 0x331111;
        this.load_input.name_title.tint = 0x331111;
        this.load_input.name.fontSize = 20;
        this.load_input.name_title.fontSize = 20;

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
            this.info_back.text.visible = false;
            this.load_input.name.visible = true;
            this.load_input.name_title.visible = true;
        }, this);

        this.talk_sign_pumpgirl = this.add.sprite(613, 745 - 92 + 40, 'talk');
        this.talk_sign_pumpgirl.anchor.set(0, 1);
        this.talk_sign_pumpgirl.visible = false;
        this.talk_sign_pumpgirl.inputEnabled = true;
        this.talk_sign_pumpgirl.input.useHandCursor = true;
        this.talk_sign_pumpgirl.mask = this.add.graphics(613, 745 - 92);
        this.talk_sign_pumpgirl.mask.anchor.set(0, 1);
        this.talk_sign_pumpgirl.mask.beginFill(0x000000);
        this.talk_sign_pumpgirl.mask.drawRect(0, -33, 45, 33);
        this.talk_sign_pumpgirl.btns = {
            'player1': this.add.bitmapText(928 * 0.5, 60, 'carrier_command', `Prinny`),
            'player2': this.add.bitmapText(928 * 0.5, 120, 'carrier_command', `Prince`),
        };
        this.talk_sign_pumpgirl.btns.player1.tint = 0x331111;
        this.talk_sign_pumpgirl.btns.player2.tint = 0x331111;
        this.talk_sign_pumpgirl.btns.player1.anchor.set(0.5, 0);
        this.talk_sign_pumpgirl.btns.player2.anchor.set(0.5, 0);
        this.talk_sign_pumpgirl.btns.player1.visible = false;
        this.talk_sign_pumpgirl.btns.player2.visible = false;
        this.talk_sign_pumpgirl.btns.player1.fontSize = 30;
        this.talk_sign_pumpgirl.btns.player2.fontSize = 30;
        this.talk_sign_pumpgirl.btns.player1.fixedToCamera = true;
        this.talk_sign_pumpgirl.btns.player2.fixedToCamera = true;
        this.talk_sign_pumpgirl.btns.player1.inputEnabled = true;
        this.talk_sign_pumpgirl.btns.player1.input.useHandCursor = true;
        this.talk_sign_pumpgirl.btns.player2.inputEnabled = true;
        this.talk_sign_pumpgirl.btns.player2.input.useHandCursor = true;
        this.talk_sign_pumpgirl.events.onInputUp.add(() => {
            this.info_back.text.visible = false;
            this.talk_sign_pumpgirl.btns.player1.visible = true;
            this.talk_sign_pumpgirl.btns.player2.visible = true;
        }, this);


        this.talk_sign_bookgirl = this.add.sprite(851, 745 - 92 + 40, 'talk');
        this.talk_sign_bookgirl.anchor.set(0, 1);
        this.talk_sign_bookgirl.visible = false;
        this.talk_sign_bookgirl.inputEnabled = true;
        this.talk_sign_bookgirl.input.useHandCursor = true;
        this.talk_sign_bookgirl.mask = this.add.graphics(851, 745 - 92);
        this.talk_sign_bookgirl.mask.anchor.set(0, 1);
        this.talk_sign_bookgirl.mask.beginFill(0x000000);
        this.talk_sign_bookgirl.mask.drawRect(0, -33, 45, 33);
        
        this.leaderboard = this.add.sprite(928*0.5, 798*0.5, 'leaderboard');
        this.leaderboard.fixedToCamera = true;
        this.leaderboard.alpha = 0;
        this.leaderboard.anchor.set(0.5);

        this.records = [];
        this.record_text = [];
        firebase.database().ref(`board`).orderByChild('score').limitToLast(5).on('value', snapshot => {
            if(this.record_text.length != 0) {
                for(let i of this.record_text) {
                    i.destroy();
                }
            }
            this.records.length = 0;
            snapshot.forEach(child => {
                console.log(child.key, child.val());
                this.records.push({name: child.key, score: child.val().score});
            });
            for(let i = this.records.length - 1; i >= 0; i--) {
                let t = this.add.bitmapText(928*0.5, (this.records.length-i)*50 + 200, 'carrier_command', `${this.records[i].name}: ${this.records[i].score}`);
                t.anchor.set(0.5);
                t.fixedToCamera = true;
                t.fontSize = 20;
                t.tint = 0x331111;
                t.visible = false;
                this.record_text.push(t);
            }
        });

        this.talk_sign_bookgirl.events.onInputUp.add(() => {
            this.add.tween(this.leaderboard).to({ alpha: 1 }, 300).start().onComplete.add(() => {
                for(let i = 0; i < this.record_text.length; i++) {
                    this.record_text[i].visible = true;
                }
            });
        });

        this.sign_input = {
            'name': this.add.bitmapText(400, 90, 'carrier_command', `${this.game.inputBuffer}`),
            'isPassword': false,
            'password': ''
        };
        this.sign_input.name_title = this.add.bitmapText(928 * 0.18, 90, 'carrier_command', `NAME: `);
        this.sign_input.name_title.fixedToCamera = true;
        this.sign_input.name_title.visible = false;
        this.sign_input.name.fixedToCamera = true;
        this.sign_input.name.visible = false;
        this.sign_input.name.tint = 0x331111;
        this.sign_input.name_title.tint = 0x331111;
        this.sign_input.name.fontSize = 20;
        this.sign_input.name_title.fontSize = 20;
        this.talk_sign_save = this.add.sprite(1211, 745 - 132 + 40, 'talk');
        this.talk_sign_save.anchor.set(0, 1);
        this.talk_sign_save.visible = false;
        this.talk_sign_save.inputEnabled = true;
        this.talk_sign_save.input.useHandCursor = true;
        this.talk_sign_save.mask = this.add.graphics(1211, 745 - 132);
        this.talk_sign_save.mask.anchor.set(0, 1);
        this.talk_sign_save.mask.beginFill(0x000000);
        this.talk_sign_save.mask.drawRect(0, -33, 45, 33);
        this.talk_sign_save.events.onInputUp.add(() => {
            this.info_back.text.visible = false;
            this.sign_input.name.visible = true;
            this.sign_input.name_title.visible = true;
        });

        this.talk_sign_exitdoor = this.add.sprite(1501, 745 - 102 + 40, 'talk');
        this.talk_sign_exitdoor.anchor.set(0, 1);
        this.talk_sign_exitdoor.visible = false;
        this.talk_sign_exitdoor.inputEnabled = true;
        this.talk_sign_exitdoor.input.useHandCursor = true;
        this.talk_sign_exitdoor.mask = this.add.graphics(1501, 745 - 102);
        this.talk_sign_exitdoor.mask.anchor.set(0, 1);
        this.talk_sign_exitdoor.mask.beginFill(0x000000);
        this.talk_sign_exitdoor.mask.drawRect(0, -33, 45, 33);
        this.talk_sign_exitdoor.btns = {
            'stage1': this.add.bitmapText(928 * 0.5, 60, 'carrier_command', `Stage 1 (Beginner)`),
            'stage2': this.add.bitmapText(928 * 0.5, 120, 'carrier_command', `Stage 2 (Advanced)`),
        };
        this.talk_sign_exitdoor.btns.stage1.tint = 0x331111;
        this.talk_sign_exitdoor.btns.stage2.tint = 0x331111;
        this.talk_sign_exitdoor.btns.stage1.anchor.set(0.5, 0);
        this.talk_sign_exitdoor.btns.stage2.anchor.set(0.5, 0);
        this.talk_sign_exitdoor.btns.stage1.visible = false;
        this.talk_sign_exitdoor.btns.stage2.visible = false;
        this.talk_sign_exitdoor.btns.stage1.fontSize = 24;
        this.talk_sign_exitdoor.btns.stage2.fontSize = 24;
        this.talk_sign_exitdoor.btns.stage1.fixedToCamera = true;
        this.talk_sign_exitdoor.btns.stage2.fixedToCamera = true;
        this.talk_sign_exitdoor.btns.stage1.inputEnabled = true;
        this.talk_sign_exitdoor.btns.stage1.input.useHandCursor = true;
        this.talk_sign_exitdoor.btns.stage1.events.onInputUp.add(() => {
            this.game.total_life = 100;
            this.bgm.stop();
            this.state.start('Stage1');
        });
        this.talk_sign_exitdoor.btns.stage2.inputEnabled = true;
        this.talk_sign_exitdoor.btns.stage2.input.useHandCursor = true;
        this.talk_sign_exitdoor.btns.stage2.events.onInputUp.add(() => {
            this.game.total_life = 100;
            this.bgm.stop();
            this.state.start('Stage2');
        });
        this.talk_sign_exitdoor.events.onInputUp.add(() => {
            this.info_back.text.visible = false;
            this.talk_sign_exitdoor.btns.stage1.visible = true;
            this.talk_sign_exitdoor.btns.stage2.visible = true;
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

        this.life_icon = this.add.image(this.game.width * 0.045, this.game.height * 0.035, 'LifeIcon');
        this.life_icon.anchor.set(0.5);
        this.life_icon.fixedToCamera = true;
        this.life_text = this.add.bitmapText(this.game.width * 0.15, this.game.height * 0.035, 'carrier_command', `x${this.game.total_life}`);
        this.life_text.anchor.set(0.5);
        this.life_text.fixedToCamera = true;
        this.life_text.scale.set(0.6);
        this.life_text.tint = 0x220000;

        this.input.keyboard.onPressCallback = this.processKey.bind(this);
    }
    create_main_layer() {
        this.main_layer = this.add.group();

        this.mouse_drag = this.add.sprite(0, 0, 'Mouse_Drag');
        this.mouse_drag.anchor.set(0.5);
        this.mouse_drag.scale.set(0.5);
        this.mouse_drag.animations.add('fire', [0, 1, 2, 3, 4, 5], 15, false);
        this.mouse_drag.frame = 0;
        this.mouse_drag.alpha = 0;

        if (this.game.player_choice == 0) {
            if(this.game.first_time_play) {
                this.player = this.add.sprite(this.game.width * 0.5, 500, 'Player00');
            } else {
                this.player = this.add.sprite(1586 * 0.8, 500, 'Player00');
                this.game.first_time_play = true;
            }
            this.player.animations.add('leftwalk', [13, 14, 15, 16, 17, 18], 8, true);
            this.player.animations.add('rightwalk', [19, 20, 21, 22, 23, 24], 8, true);
            this.player.animations.add('leftjump', [1, 2, 3, 4, 5, 6], 10, true);
            this.player.animations.add('rightjump', [7, 8, 9, 10, 11, 12], 10, true);
            this.player.animations.add('leftrun', [25, 26, 27, 28, 29, 30], 8, true);
            this.player.animations.add('rightrun', [31, 32, 33, 34, 35, 36], 8, true);
        }
        else {
            if(this.game.first_time_play) {
                this.player = this.add.sprite(this.game.width * 0.5, 500, 'Player01');
            } else {
                this.player = this.add.sprite(1586 * 0.8, 500, 'Player00');
                this.game.first_time_play = true;
            }
            this.player.animations.add('leftwalk', [1, 2, 3, 4, 5, 6], 8, true);
            this.player.animations.add('rightwalk', [7, 8, 9, 10, 11, 12], 8, true);
            this.player.animations.add('leftjump', [13, 14, 15, 16, 17, 18], 10, true);
            this.player.animations.add('rightjump', [19, 20, 21, 22, 23, 24], 10, true);
            this.player.animations.add('leftrun', [25, 26, 27, 28, 29, 30], 8, true);
            this.player.animations.add('rightrun', [31, 32, 33, 34, 35, 36], 8, true);
        }
        this.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        this.player.is_touching = false;
        this.player.body.bounce.set(0.3);
        this.player.anchor.set(0.5);
        this.player.angle = 0;
        this.player.body.gravity.y = 300;
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

        this.talk_sign_pumpgirl.btns.player1.events.onInputUp.add(() => {
            this.game.player_choice = 0;
            this.player.loadTexture('Player00');
            this.player.animations.add('leftwalk', [13, 14, 15, 16, 17, 18], 8, true);
            this.player.animations.add('rightwalk', [19, 20, 21, 22, 23, 24], 8, true);
            this.player.animations.add('leftjump', [1, 2, 3, 4, 5, 6], 10, true);
            this.player.animations.add('rightjump', [7, 8, 9, 10, 11, 12], 10, true);
            this.player.animations.add('leftrun', [25, 26, 27, 28, 29, 30], 8, true);
            this.player.animations.add('rightrun', [31, 32, 33, 34, 35, 36], 8, true);
        });
        this.talk_sign_pumpgirl.btns.player2.events.onInputUp.add(() => {
            this.game.player_choice = 1;
            this.player.loadTexture('Player01');
            this.player.animations.add('leftwalk', [1, 2, 3, 4, 5, 6], 8, true);
            this.player.animations.add('rightwalk', [7, 8, 9, 10, 11, 12], 8, true);
            this.player.animations.add('leftjump', [13, 14, 15, 16, 17, 18], 10, true);
            this.player.animations.add('rightjump', [19, 20, 21, 22, 23, 24], 10, true);
            this.player.animations.add('leftrun', [25, 26, 27, 28, 29, 30], 8, true);
            this.player.animations.add('rightrun', [31, 32, 33, 34, 35, 36], 8, true);
        });
        this.talk_sign_pumpgirl.btns.player1.events.onInputOver.add(() => {
            this.talk_sign_pumpgirl.btns.player1.tint = 0x553333;
        });
        this.talk_sign_pumpgirl.btns.player2.events.onInputOver.add(() => {
            this.talk_sign_pumpgirl.btns.player2.tint = 0x553333;
        });
        this.talk_sign_pumpgirl.btns.player1.events.onInputOut.add(() => {
            this.talk_sign_pumpgirl.btns.player1.tint = 0x331111;
        });
        this.talk_sign_pumpgirl.btns.player2.events.onInputOut.add(() => {
            this.talk_sign_pumpgirl.btns.player2.tint = 0x331111;
        });
        this.talk_sign_exitdoor.btns.stage1.events.onInputOver.add(() => {
            this.talk_sign_exitdoor.btns.stage1.tint = 0x553333;
        });
        this.talk_sign_exitdoor.btns.stage2.events.onInputOver.add(() => {
            this.talk_sign_exitdoor.btns.stage2.tint = 0x553333;
        });
        this.talk_sign_exitdoor.btns.stage1.events.onInputOut.add(() => {
            this.talk_sign_exitdoor.btns.stage1.tint = 0x331111;
        });
        this.talk_sign_exitdoor.btns.stage2.events.onInputOut.add(() => {
            this.talk_sign_exitdoor.btns.stage2.tint = 0x331111;
        });

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
        let flag = 0;
        for (let child of this.npc_layer.children) {
            if (this.player.x > child.x - 25 && this.player.x < child.x + 75) {
                child.sign.visible = true;
                child.tween.start();
            } else {
                ++flag;
                child.tween_back.start().onComplete.add(() => {
                    child.sign.visible = false;
                });
                if (child.key == 'exitdoor') {
                    this.talk_sign_exitdoor.btns.stage1.visible = false;
                    this.talk_sign_exitdoor.btns.stage2.visible = false;
                }
                else if (child.key == 'pumpgirl') {
                    this.talk_sign_pumpgirl.btns.player1.visible = false;
                    this.talk_sign_pumpgirl.btns.player2.visible = false;
                }
                else if (child.key == 'saveboy') {
                    this.sign_input.name_title.visible = false;
                    this.sign_input.name.visible = false;
                }
                else if(child.key == 'bookgirl') {
                    for(let i of this.record_text) {
                        i.visible = false;
                    }
                    this.add.tween(this.leaderboard).to({ alpha: 0 }, 100).start();
                }
                else if(child.key == 'prist') {
                    this.load_input.name_title.visible = false;
                    this.load_input.name.visible = false;
                }
            }
        }
        if (flag == this.npc_layer.length) {
            this.info_back.text.visible = true;
        }

        // Layer effect
        if (this.player.x > 928 * 0.5 && this.player.x < 1586 - 928 * 0.5) {
            for (let child of this.layer_1.children) {
                child.x -= this.player.body.velocity.x * 0.0025;
                if (child.x < -1586) {
                    child.x += 1586 * 2;
                } else if (child.x > 1586) {
                    child.x -= 1586 * 2;
                }
            }
            for (let child of this.layer_2.children) {
                child.x -= this.player.body.velocity.x * 0.006;
                if (child.x < -1586) {
                    child.x += 1586 * 2;
                } else if (child.x > 1586) {
                    child.x -= 1586 * 2;
                }
            }
            for (let child of this.layer_3.children) {
                child.x -= this.player.body.velocity.x * 0.0095;
                if (child.x < -1586) {
                    child.x += 1586 * 2;
                } else if (child.x > 1586) {
                    child.x -= 1586 * 2;
                }
            }
            for (let child of this.layer_5.children) {
                child.x -= this.player.body.velocity.x * 0.015;
                if (child.x < -1586) {
                    child.x += 1586 * 2;
                } else if (child.x > 1586) {
                    child.x -= 1586 * 2;
                }
            }
        }
        this.sign_input.name.text = `${this.game.inputBuffer}`;

        // Life window
        this.life_text.text = `x${this.game.total_life}`;
    }
    processKey(key) {
        if (this.input.keyboard.lastKey.keyCode == Phaser.Keyboard.ENTER) {
            if (this.game.inputBuffer !== '') {
                if (this.sign_input.isPassword) {
                    this.game.inputBuffer = '';
                    if (this.sign_input.password) {
                        if (this.sign_input.password === this.game.passwordBuffer) {
                            firebase.database().ref(`/board/${this.game.nameBuffer}`).update({
                                score: this.game.total_life
                            }).then(() => {
                                this.sign_input.name_title.text = 'NAME: ';
                                this.sign_input.name_title.visible = false;
                                this.sign_input.name.visible = false;
                                this.info_back.text.visible = true;
                                this.game.inputBuffer = this.game.nameBuffer = this.game.passwordBuffer = '';
                                this.sign_input.isPassword = false;
                                this.sign_input.password = '';
                            });
                        } else {
                            this.game.inputBuffer = this.game.passwordBuffer = '';
                        }
                    } else {
                        firebase.database().ref(`/board/${this.game.nameBuffer}`).update({
                            score: this.game.total_life,
                            password: this.game.passwordBuffer
                        }).then(() => {
                            this.sign_input.name_title.text = 'NAME: ';
                            this.sign_input.name_title.visible = false;
                            this.sign_input.name.visible = false;
                            this.info_back.text.visible = true;
                            this.game.inputBuffer = this.game.nameBuffer = this.game.passwordBuffer = '';
                            this.sign_input.isPassword = false;
                            this.sign_input.password = '';
                        });
                    }
                } else {
                    this.sign_input.name_title.text = 'PASSWORD: ';
                    this.game.nameBuffer = this.game.inputBuffer;
                    this.game.inputBuffer = '';
                    firebase.database().ref(`/board/${this.game.nameBuffer}`).once('value').then(snapshot => {
                        if (snapshot.exists()) {
                            this.sign_input.password = String(snapshot.child('password').val());
                        } else {
                            this.sign_input.password = '';
                        }
                    });
                    this.sign_input.isPassword = true;
                }
            }
        }
        else if (this.input.keyboard.lastKey.keyCode == Phaser.Keyboard.BACKSPACE) {
            this.game.inputBuffer = this.game.inputBuffer.slice(0, -1);
            if (this.sign_input.isPassword) {
                this.game.passwordBuffer = this.game.passwordBuffer.slice(0, -1);
            }
        }
        else {
            if (!this.sign_input.isPassword && this.game.inputBuffer.length < 10) {
                this.game.inputBuffer += String(key).toUpperCase();
            }
            else if (this.sign_input.isPassword && this.game.inputBuffer.length < 10) {
                this.game.inputBuffer += '*';
                this.game.passwordBuffer += String(key);
            }
        }
    }
}