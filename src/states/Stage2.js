export default class Stage2 extends Phaser.State {
    constructor() {
        super();
    }
    create() {
        this.create_layer_0();
        this.create_layer_1();
        this.create_layer_2();
        this.create_layer_3();
        this.create_sign_layer();
        this.create_main_layer();
        this.create_enemy_layer();
        this.create_map();
        this.create_layer_4();
        this.create_bullet_layer();
        this.create_boss_layer();
        this.create_minimap_layer();
        this.create_board_layer();
        this.audio = {
            'melo00': this.add.audio('melo00'),
            'melo01': this.add.audio('melo01'),
            'melo02': this.add.audio('melo02'),
            'melo03': this.add.audio('melo03'),
        };
        this.counter = {
            'combo': 0,
            'lastType': '',
        };
        this.tween_down = this.add.tween(this.player).to({ angle: 180 }, 250);
        this.tween_up = this.add.tween(this.player).to({ angle: 0 }, 250);
        this.destroy_emitter = this.add.group();
        this.boss.move_effect = null;
        this.boss.last_time = 0;
        this.is_boss_state = false;
    }
    create_layer_0() {
        this.layer_0 = this.add.image(0, 0, 'Map02_Layer0');
        this.layer_0.fixedToCamera = true;
        this.purple = this.add.graphics(0, 0);
        this.purple.beginFill(0x330033).drawRect(0, 0, 928, 793)
        this.purple.alpha = 0;
        this.purple.fixedToCamera = true;;
    }
    create_layer_1() {
        this.layer_1 = this.add.group();
        this.layer_1.create(-99999, 800, 'Map02_Layer1');
        this.layer_1.create(-99999, 800, 'Map02_Layer1');
        this.layer_1.forEach(child => {
            child.animations.add('active', [0, 1], 5, true);
            child.animations.play('active');
        });
        this.layer_1.setAll('scale.x', 2);
        this.layer_1.setAll('scale.y', 2);
        this.layer_1.setAll('alpha', 0.55);
    }
    create_layer_2() {
        this.layer_2 = this.add.group();
        this.layer_2.create(-99999, 800, 'Map02_Layer2');
        this.layer_2.create(-99999, 800, 'Map02_Layer2');
        this.layer_2.forEach(child => {
            child.animations.add('active', [0, 1], 5, true);
            child.animations.play('active');
        });
        this.layer_2.setAll('alpha', 0.65);
    }
    create_layer_3() {
        this.layer_3 = this.add.group();
        this.layer_3.create(-99999, 800, 'Map02_Layer3');
        this.layer_3.create(-99999, 800, 'Map02_Layer3');
        this.layer_3.forEach(child => {
            child.animations.add('active', [0, 1], 5, true);
            child.animations.play('active');
        });
        this.layer_3.setAll('alpha', 0.75);
    }
    create_sign_layer() {
        this.sign_layer = this.add.group();

        let x = 4605, y = 4325;
        this.boss_gate = {
            'back': this.add.sprite(x + 63, y + 85, 'Boss_Gate03'),
            'down': this.add.sprite(x, y, 'Boss_Gate02'),
            'up': this.add.sprite(x, y, 'Boss_Gate01'),
            'door': this.add.sprite(x, y, 'Boss_Gate00'),
            'front': this.add.sprite(x, y, 'Boss_Gate04'),
            'valid': false,
        };
        this.physics.arcade.enable(this.boss_gate.door);
        this.boss_gate.door.body.setSize(46, 63, 34, 52);

        this.boss_gate.back.anchor.set(0.5);
        this.boss_gate.back.mask = this.add.graphics(x + 63, y + 85);
        this.boss_gate.back.mask.anchor.set(0.5);
        this.boss_gate.back.mask.beginFill(0x000000);
        this.boss_gate.back.mask.drawRect(-42.5, -52.5, 85, 105);

        this.boss_gate.up.mask = this.add.graphics(x, y);
        this.boss_gate.up.mask.beginFill(0x000000);
        this.boss_gate.up.mask.drawRect(23, 39, 82, 71);

        this.boss_gate.down.mask = this.add.graphics(x, y);
        this.boss_gate.down.mask.beginFill(0x000000);
        this.boss_gate.down.mask.drawRect(13, 77, 102, 71);

        this.boss_gate.front.visible = false;
        this.boss_gate.front_effect = this.add.tween(this.boss_gate.front).to({ alpha: 0.3 }, 750).yoyo(true).loop();
        this.boss_gate.up_effect = this.add.tween(this.boss_gate.up).to({ y: y - 100 }, 1500);
        this.boss_gate.down_effect = this.add.tween(this.boss_gate.down).to({ y: y + 200 }, 1500);
        this.boss_gate.back_effect = this.add.tween(this.boss_gate.back).to({ angle: 360 }, 4000).loop();

        x = 4355, y = 4485;
        this.boss_gate_sign_bloom = this.add.sprite(x, y, 'Boss_Gate_Sign01');
        this.boss_gate_sign_bloom.anchor.set(0.5);
        this.boss_gate_sign_bloom.alpha = 0.7;
        this.boss_gate_sign_bloom.frame = 2;
        this.boss_gate_sign_bloom.bloom_effect = this.add.tween(this.boss_gate_sign_bloom).to({ alpha: 0.1 }, 750).yoyo(true).loop().start();

        this.boss_gate_sign = this.add.sprite(x, y, 'Boss_Gate_Sign01');
        this.physics.arcade.enable(this.boss_gate_sign);
        this.boss_gate_sign.body.immovable = true;
        this.boss_gate_sign.anchor.set(0.5);

        this.boss_gate_sign00 = this.add.sprite(x, y - 42, 'Boss_Gate_Sign00');
        this.boss_gate_sign00.anchor.set(0.5);
        this.boss_gate_sign00.animations.add('default', [0, 1, 2], 3, true);
        this.boss_gate_sign00.play('default');

        this.sign_layer.addMultiple([
            this.boss_gate.back, this.boss_gate.back.mask,
            this.boss_gate.down, this.boss_gate.down.mask,
            this.boss_gate.up, this.boss_gate.up.mask,
            this.boss_gate.door, this.boss_gate.front,
            this.boss_gate_sign, this.boss_gate_sign00, this.boss_gate_sign_bloom
        ]);
    }
    create_main_layer() {
        this.main_layer = this.add.group();

        this.gravity_0 = this.add.sprite(1100, 1100, 'Gravity00');
        this.gravity_1 = this.add.sprite(1300, 1300, 'Gravity01');
        this.physics.arcade.enable(this.gravity_0);
        this.physics.arcade.enable(this.gravity_1);
        this.gravity_0.anchor.set(0.5);
        this.gravity_1.anchor.set(0.5);
        this.gravity_0.body.setCircle(16);
        this.gravity_1.body.setCircle(16);
        this.gravity_0.body.immovable = true;
        this.gravity_1.body.immovable = true;
        this.gravity_0.animations.add('active', [0, 1, 2, 3, 4, 5], 10, true);
        this.gravity_1.animations.add('active', [0, 1, 2, 3, 4, 5], 10, true);

        this.mouse_drag = this.add.sprite(0, 0, 'Mouse_Drag');
        this.mouse_drag.anchor.set(0.5);
        this.mouse_drag.scale.set(0.5);
        this.mouse_drag.animations.add('fire', [0, 1, 2, 3, 4, 5], 15, false);
        this.mouse_drag.frame = 0;
        this.mouse_drag.alpha = 0;

        this.init_pos = [
            { x: 22, y: 25 }, { x: 208, y: 12 },
            { x: 202, y: 150 }, { x: 26, y: 172 }, { x: 26, y: 172 }
        ];
        let r = Math.floor(Math.random() * 4);

        if (this.game.player_choice == 0) {
            // this.player = this.add.sprite(this.init_pos[r].x * 45, this.init_pos[r].y * 45, 'Player00');
            this.player = this.add.sprite(112 * 45, 84 * 45, 'Player00');
            this.player.animations.add('leftwalk', [13, 14, 15, 16, 17, 18], 8, true);
            this.player.animations.add('rightwalk', [19, 20, 21, 22, 23, 24], 8, true);
            this.player.animations.add('leftjump', [1, 2, 3, 4, 5, 6], 10, true);
            this.player.animations.add('rightjump', [7, 8, 9, 10, 11, 12], 10, true);
            this.player.animations.add('leftrun', [25, 26, 27, 28, 29, 30], 8, true);
            this.player.animations.add('rightrun', [31, 32, 33, 34, 35, 36], 8, true);
        }
        else {
            // this.player = this.add.sprite(this.init_pos[r].x * 45, this.init_pos[r].y * 45, 'Player01');
            this.player = this.add.sprite(112 * 45, 84 * 45, 'Player01');
            this.player.animations.add('leftwalk', [1, 2, 3, 4, 5, 6], 8, true);
            this.player.animations.add('rightwalk', [7, 8, 9, 10, 11, 12], 8, true);
            this.player.animations.add('leftjump', [13, 14, 15, 16, 17, 18], 10, true);
            this.player.animations.add('rightjump', [19, 20, 21, 22, 23, 24], 10, true);
            this.player.animations.add('leftrun', [25, 26, 27, 28, 29, 30], 8, true);
            this.player.animations.add('rightrun', [31, 32, 33, 34, 35, 36], 8, true);
        }
        this.physics.arcade.enable(this.player);
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

        this.main_layer.addMultiple([this.mouse_drag, this.player, this.gravity_0, this.gravity_1]);
    }
    create_map() {
        this.map = this.add.tilemap('map');
        this.map.addTilesetImage('tileset');
        this.map_layer = this.map.createLayer('Layer 1');
        this.map_layer.resizeWorld();
        this.map.setCollisionByExclusion(Array.from(Array(70 - 58 + 1).keys()).map(t => t + 58));

        this.hidden_block = this.add.sprite(100 * 45, 87 * 45, 'HiddenBlock');
        this.physics.arcade.enable(this.hidden_block);
    }
    create_layer_4() {
        this.layer_4 = this.add.group();
        this.layer_4.create(-99999, 800, 'Map02_Layer4');
        this.layer_4.create(-99999, 800, 'Map02_Layer4');
        this.layer_4.forEach(child => {
            child.animations.add('active', [0, 1], 5, true);
            child.animations.play('active');
        });
        this.layer_4.setAll('alpha', 0.85);
        this.layer_4.setAll('scale.y', -1);
    }
    create_enemy_layer() {
        this.enemy_layer = this.add.physicsGroup(Phaser.Physics.ARCADE);
        for (let i = 0; i < 4; ++i) {
            for (let j = 0; j < this.game.total_enemies * 10; ++j) {
                let enemy = this.enemy_layer.create(Math.random() * 9900, Math.random() * 8100, `Enemy0${i}`);
                enemy.anchor.set(0.5);
                enemy.angle = -90 + Math.random() * 180;
            }
        }
        this.enemy_layer.setAll('body.gravity.y', 300);
    }
    create_bullet_layer() {
        this.bullet_layer = this.add.group();
    }
    create_boss_layer() {
        this.boss_HP = {
            'back': this.add.sprite(this.game.width * 0.06, this.game.height - 20, 'HP_Back'),
            'front': this.add.sprite(this.game.width * 0.06, this.game.height - 20, 'HP_Front'),
        };
        this.boss_HP.front.anchor.set(0, 0.5);
        this.boss_HP.back.anchor.set(0, 0.5);

        this.boss_HP.front.mask = this.add.graphics(this.game.width * 0.06, this.game.height - 20);
        this.boss_HP.front.mask.beginFill(0xffffff);
        this.boss_HP.front.mask.anchor.set(0, 0.5);
        this.boss_HP.front.mask.drawRect(0, -15, 800, 30);

        this.boss_HP.front.visible = false;
        this.boss_HP.back.visible = false;

        this.boss = this.add.sprite(this.player.x, this.player.y - 250, 'Boss01');
        this.physics.arcade.enable(this.boss);
        this.boss.body.setSize(250, 200, 45, 150);
        this.boss.anchor.set(0.5);
        this.boss.body.immovable = true;
        this.boss.animations.add('walk', Array.from(Array(10).keys()), 3, true);
        this.boss.animations.add('attack', Array.from(Array(6).keys()).map(x => x + 11), 8, false);
        this.boss.visible = false;
        this.boss.hp = 100;

        this.boss_HP.front.fixedToCamera = true;
        this.boss_HP.back.fixedToCamera = true;
        this.boss_HP.front.mask.fixedToCamera = true;

        // this.boss_layer = this.add.group();
        // this.boss_layer.addMultiple([this.boss_HP, this.boss]);
    }
    create_minimap_layer() {
        this.minimap_layer = this.add.group();

        this.minimap = this.add.image(0, 0, 'Minimap_02', 0, this.minimap_layer);
        this.minimap.alpha = 0.6;

        this.minimap.mask = this.add.graphics(0, 0, this.minimap_layer);
        this.minimap.mask.beginFill();
        this.minimap.mask.drawRoundedRect(0, 0, 310, 310, 9);

        this.player.dot = this.add.image(0, 0, 'favicon', 0, this.minimap_layer);
        this.player.dot.anchor.set(0.5);
        this.player.dot.scale.set(0.8);
    }
    create_board_layer() {
        this.board_layer = this.add.group();
        this.board = {
            'Enemy00Ratio': {
                'cover': this.add.sprite(this.game.width * 0.4, this.game.height * 0.075, 'Enemy00'),
                'text': this.add.text(this.game.width * 0.45, this.game.height * 0.05, `0%`),
                'bar_back': this.add.sprite(this.game.width * 0.425, this.game.height * 0.075, 'Percentage_Back'),
                'bar_front': this.add.sprite(this.game.width * 0.425, this.game.height * 0.075, 'Percentage_Front'),
                'mask': this.add.graphics(this.game.width * 0.425, this.game.height * 0.075),
                'total_clear': 0,
            },
            'Enemy01Ratio': {
                'cover': this.add.sprite(this.game.width * 0.7, this.game.height * 0.075, 'Enemy01'),
                'text': this.add.text(this.game.width * 0.75, this.game.height * 0.05, `0%`),
                'bar_back': this.add.sprite(this.game.width * 0.725, this.game.height * 0.075, 'Percentage_Back'),
                'bar_front': this.add.sprite(this.game.width * 0.725, this.game.height * 0.075, 'Percentage_Front'),
                'mask': this.add.graphics(this.game.width * 0.725, this.game.height * 0.075),
                'total_clear': 0,
            },
            'Enemy02Ratio': {
                'cover': this.add.sprite(this.game.width * 0.45, this.game.height * 0.145, 'Enemy02'),
                'text': this.add.text(this.game.width * 0.5, this.game.height * 0.12, `0%`),
                'bar_back': this.add.sprite(this.game.width * 0.475, this.game.height * 0.145, 'Percentage_Back'),
                'bar_front': this.add.sprite(this.game.width * 0.475, this.game.height * 0.145, 'Percentage_Front'),
                'mask': this.add.graphics(this.game.width * 0.475, this.game.height * 0.145),
                'total_clear': 0,
            },
            'Enemy03Ratio': {
                'cover': this.add.sprite(this.game.width * 0.75, this.game.height * 0.145, 'Enemy03'),
                'text': this.add.text(this.game.width * 0.8, this.game.height * 0.12, `0%`),
                'bar_back': this.add.sprite(this.game.width * 0.775, this.game.height * 0.145, 'Percentage_Back'),
                'bar_front': this.add.sprite(this.game.width * 0.775, this.game.height * 0.145, 'Percentage_Front'),
                'mask': this.add.graphics(this.game.width * 0.775, this.game.height * 0.145),
                'total_clear': 0,
            },
        };
        for (let i = 0; i < this.game.settings.total_enemy_types; ++i) {
            this.board[`Enemy0${i}Ratio`].cover.anchor.set(0.5);
            this.board[`Enemy0${i}Ratio`].text.anchor.set(0.5);
            this.board[`Enemy0${i}Ratio`].text.fontSize = 20;
            this.board[`Enemy0${i}Ratio`].text.fill = '#fff';
            this.board[`Enemy0${i}Ratio`].bar_back.anchor.set(0, 0.5);
            this.board[`Enemy0${i}Ratio`].bar_front.anchor.set(0, 0.5);
            this.board[`Enemy0${i}Ratio`].mask.anchor.set(0, 0.5);
            this.board[`Enemy0${i}Ratio`].mask.beginFill(0xffffff);
            this.board[`Enemy0${i}Ratio`].mask.drawRect(0, -20, 150, 40);
            this.board[`Enemy0${i}Ratio`].bar_front.mask = this.board[`Enemy0${i}Ratio`].mask;

            this.board_layer.addMultiple([this.board[`Enemy0${i}Ratio`].cover, this.board[`Enemy0${i}Ratio`].text, this.board[`Enemy0${i}Ratio`].bar_back, this.board[`Enemy0${i}Ratio`].bar_front, this.board[`Enemy0${i}Ratio`].mask]);
        }
        this.board[`Enemy00Ratio`].cover.animations.add('kill', [1, 2, 3, 4, 5], 8, false);
        this.board[`Enemy01Ratio`].cover.animations.add('kill', [0, 1, 2, 3], 8, false);
        this.board[`Enemy02Ratio`].cover.animations.add('kill', [0, 1, 2, 3, 4], 8, false);
        this.board[`Enemy03Ratio`].cover.animations.add('kill', [0, 1, 2, 3, 4, 5], 8, false);

        this.life_icon = this.add.image(10, 10, 'LifeIcon');
        this.life_icon.scale.set(0.7);
        this.life_text = this.add.bitmapText(70, 15, 'carrier_command', `x${this.game.total_life}`);
        this.life_text.scale.set(0.6);
        this.life_text.tint = 0x220000;

        this.board_layer.addMultiple([this.life_icon, this.life_text]);

        this.board_layer.setAll('fixedToCamera', true);
    }
    update() {
        let cur_time = this.time.now;

        // Physics Controller
        if (this.is_boss_state) {
            if (!this.game.mouse.is_down) {
                for (let child of this.bullet_layer.children) {
                    // if (this.board[`Enemy${child.key.substring(5, 7)}Ratio`].total_clear >= this.game.total_enemies) {
                        this.physics.arcade.overlap(this.player, child, this.handle_player_hit.bind(this));
                        this.physics.arcade.overlap(this.player, child, this.handle_destroy_bullet.bind(this));
                    // } else {
                    //     this.physics.arcade.collide(this.player, child, (player, child) => child.hit = true);
                    // }
                }
            }
            this.physics.arcade.overlap(this.boss, this.bullet_layer, this.handle_boss_hit.bind(this));
        }
        for (let child of this.enemy_layer.children) {
            if (this.board[`Enemy${child.key.substring(5, 7)}Ratio`].total_clear >= this.game.total_enemies) {
                this.physics.arcade.collide(this.player, child, this.handle_obstacle_hit.bind(this));
            } else {
                this.physics.arcade.overlap(this.player, child, this.handle_enemy_hit.bind(this));
            }
        }
        this.physics.arcade.collide(this.player, [this.main_layer, this.map_layer, this.map], this.handle_gravity.bind(this));
        this.physics.arcade.collide(this.enemy_layer, [this.map_layer, this.map]);
        this.physics.arcade.collide(this.enemy_layer);
        this.physics.arcade.collide(this.player, this.boss_gate_sign, this.handle_sign.bind(this));
        this.physics.arcade.overlap(this.player, this.boss_gate.door, this.handle_sign.bind(this));
        this.physics.arcade.overlap(this.player, this.bullet_layer, this.handle_player_hit.bind(this));
        this.physics.arcade.overlap(this.player, this.boss, this.handle_player_hit.bind(this));

        this.physics.arcade.overlap(this.hidden_block, this.player, block => {
            this.add.tween(this.hidden_block).to({ alpha: 0.5 }, 80).start();
            this.hidden_block.last_overlapped = this.time.now + 80;
        });
        if (this.hidden_block.last_overlapped && this.time.now > this.hidden_block.last_overlapped) {
            this.add.tween(this.hidden_block).to({ alpha: 1 }, 80).start();
        }

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

        // Resistance
        if (!this.game.mouse.is_down) {
            this.game.time_angle = (this.game.time_angle > 90) ? 90 : this.game.time_angle + (this.game.last_time - cur_time) * 0.00005;
            this.game.last_time = cur_time;
        }

        // Player velocity force to zero
        if (this.player.body.velocity.x < 8 && this.player.body.velocity.x > -8) {
            this.player.body.velocity.x = 0;
        }

        // Player animations controller
        if (this.player.body.velocity.x < 0) {
            this.player.animations.play(`${this.player.body.gravity.y < 0 ? 'rightrun' : 'leftrun'}`);
            this.player.dot.scale.x = -0.8;
        } else if (this.player.body.velocity.x > 0) {
            this.player.animations.play(`${this.player.body.gravity.y < 0 ? 'leftrun' : 'rightrun'}`);
            this.player.dot.scale.x = 0.8;
        } else if (!this.game.mouse.is_down) {
            this.player.frame = 0;
            this.player.animations.stop();
        }

        if (this.player.body.gravity.y < 0) {
            this.gravity_1.animations.play('active');
            this.gravity_0.frame = 0;
            this.gravity_0.animations.stop();
            this.player.dot.scale.y = -0.8;

            if (this.player.angle == 0) {
                this.tween_down.start();
            }
        } else {
            this.gravity_0.animations.play('active');
            this.gravity_1.frame = 0;
            this.gravity_1.animations.stop();
            this.player.dot.scale.y = 0.8;

            if (this.player.angle != 0) {
                this.tween_up.start();
            }
        }

        // Control layer movement
        for (let i = 1; i <= 4; ++i) {
            if (this[`layer_${i}`].getChildAt(0).x === -99999) {
                this[`layer_${i}`].getChildAt(0).x = this.camera.x;
            }
        }
        if (this[`layer_1`].getChildAt(1).x === -99999) {
            this[`layer_1`].getChildAt(1).x = this.camera.x + 950 * 2;
        }
        for (let i = 2; i <= 4; ++i) {
            if (this[`layer_${i}`].getChildAt(1).x === -99999) {
                this[`layer_${i}`].getChildAt(1).x = this.camera.x + 950;
            }
        }

        for (let child of this.layer_1.children) {
            child.x -= this.player.body.velocity.x * 0.0005;
            if (child.x < this.camera.x - 950 * 2) {
                child.x = this.camera.x + 950 * 2;
            } else if (child.x > this.camera.x + 950 * 2) {
                child.x = this.camera.x - 950 * 2;
            }
            child.y = this.camera.y - 793;
        }
        for (let child of this.layer_2.children) {
            child.x -= this.player.body.velocity.x * 0.001;
            if (child.x < this.camera.x - 950) {
                child.x = this.camera.x + 950;
            } else if (child.x > this.camera.x + 950) {
                child.x = this.camera.x - 950;
            }
            child.y = this.camera.y;
        }
        for (let child of this.layer_3.children) {
            child.x -= this.player.body.velocity.x * 0.005;
            if (child.x < this.camera.x - 950) {
                child.x = this.camera.x + 950;
            } else if (child.x > this.camera.x + 950) {
                child.x = this.camera.x - 950;
            }
            child.y = this.camera.y + 40;
        }
        for (let child of this.layer_4.children) {
            child.x -= this.player.body.velocity.x * 0.01;
            if (child.x < this.camera.x - 950) {
                child.x = this.camera.x + 950;
            } else if (child.x > this.camera.x + 950) {
                child.x = this.camera.x - 950;
            }
            child.y = this.camera.y + 770;
        }

        // Update minimap
        this.minimap_layer.x = this.camera.x + 5;
        this.minimap_layer.y = this.camera.y + 5;

        let tx = -this.player.x / 9900 * 930 + 160;
        let ty = -this.player.y / 9900 * 930 + 160;
        this.minimap.x = tx > 0 ? 0 : (tx < -620 ? -620 : tx);
        this.minimap.y = ty > 0 ? 0 : (ty < -451 ? -451 : ty);
        this.player.dot.x = tx > 0 ? 160 - tx : (tx < -620 ? 160 - 620 - tx : 160);
        this.player.dot.y = ty > 0 ? 160 - ty : (ty < -451 ? 160 - 451 - ty : 160);

        // Update board status
        for (let i = 0; i < this.game.settings.total_enemy_types; ++i) {
            let percent = Math.min(this.board[`Enemy0${i}Ratio`].total_clear, this.game.total_enemies) / this.game.total_enemies;
            this.board[`Enemy0${i}Ratio`].text.text = `${Math.round(percent * 100)}%`;
            this.board[`Enemy0${i}Ratio`].text.x = this.board[`Enemy0${i}Ratio`].cover.x + 32.5 + percent * 150;
            this.board[`Enemy0${i}Ratio`].mask.scale.set(percent, 1);
        }

        // Boss functions
        if (this.is_boss_state) {
            if (this.boss.hp < 0.01) {
                this.state.start('Clear');
            }
            this.boss_HP.front.mask.scale.set(this.boss.hp / 100, 1);
            // Boss attack bahavior
            if (this.boss.last_time + 5000 < cur_time) {
                if (this.player.x > this.boss.x) {
                    this.boss.animations.play('walk');
                    this.boss.scale.set(-1, 1);
                } else {
                    this.boss.animations.play('walk');
                    this.boss.scale.set(1, 1);
                }

                this.boss.last_time = cur_time;
                if (this.boss.move_effect) {
                    this.boss.move_effect.stop();
                    this.tweens.remove(this.boss.move_effect);
                }
                this.boss.move_effect = this.add.tween(this.boss).to({ x: this.player.x, y: this.player.y - 250 }, 2000).start();
                this.boss.move_effect.onComplete.add(() => {
                    this.tweens.remove(this.boss.move_effect);
                    this.boss.animations.play('attack');
                    setTimeout(() => {
                        this.boss.frame = 2;
                    }, 1000);
                    this.time.events.repeat(Phaser.Timer.SECOND * 0.75, 3, () => {
                        for (let i = 0; i < 6; ++i) {
                            let bullet = this.add.sprite(this.boss.x + (i < 3 ? 136 : -145), this.boss.y + 52, `Enemy0${Math.floor(Math.random() * 3.99)}`, 0, this.bullet_layer);
                            bullet.angle = -90 + Math.random() * 180;
                            this.physics.arcade.enable(bullet);
                            bullet.body.mass = 0.25;
                            bullet.body.bounce.set(1);
                            bullet.body.velocity.x = (i - (i < 3 ? 1 : 4)) * 80;
                            bullet.body.velocity.y = 200;
                            bullet.hit = false;
                            // if (this.board[`Enemy${bullet.key.substring(5, 7)}Ratio`].total_clear > this.game.total_enemies - 1) {
                            // bullet.body.immovable = true;
                            // bullet.body.moves = false;
                            // }
                        }
                    }, this);
                    this.world.bringToTop(this.bullet_layer);
                });
            }
            this.bullet_layer.forEach(bullet => {
                if (bullet.x < this.camera.x || bullet.x > this.camera.x + 928 ||
                    bullet.y < this.camera.y || bullet.y > this.camera.y + 793) {
                    bullet.destroy();
                }
            });
        }

        // Life window
        this.life_text.text = `x${this.game.total_life}`;

        if (this.player.body.touching.none) {
            this.player.is_touching = false;
        }

        if (this.game.total_life < 0.1) {
            this.state.start('Over');
        }
    }
    handle_gravity(player, gravity) {
        if (gravity.key == 'Gravity00') {
            player.body.gravity.y = 300;
            this.enemy_layer.setAll('body.gravity.y', 300);
            if (this.m_Tween) this.tweens.remove(this.m_Tween);
        } else if (gravity.key == 'Gravity01') {
            player.body.gravity.y = -300;
            this.enemy_layer.setAll('body.gravity.y', -300);
            if (this.m_Tween) this.tweens.remove(this.m_Tween);
        }
    }
    handle_enemy_hit(player, enemy) {
        enemy.body.enable = false;
        this.board[`${enemy.key}Ratio`].cover.animations.play('kill');
        let tween = this.add.tween(enemy.scale).to({ x: 1.75, y: 1.75 }, 175).start();
        tween.onComplete.add(() => {
            if (this.counter.lastType == enemy.key) {
                this.counter.combo += 1;
                this.audio[`melo0${this.counter.combo % 3}`].play();
            } else {
                this.counter.combo = 1;
                this.counter.lastType = enemy.key;
                this.audio[`melo00`].play();
            }
            this.tweens.remove(tween);
            let particle_size = this.counter.combo / 5;
            let emitter = this.add.emitter(enemy.x, enemy.y, particle_size);
            emitter.gravity = 0;
            emitter.makeParticles(`Particle${enemy.key.substring(5, 7)}`);
            emitter.setXSpeed(-150, 150);
            emitter.setYSpeed(-150, 150);
            emitter.setScale(1, 0.5, 1, 0.5, 800);
            emitter.start(true, 800, null, particle_size);
            this.destroy_emitter.add(emitter);
            this.enemy_layer.remove(enemy);
            enemy.destroy();
            setTimeout(() => {
                emitter.forEach(particle => {
                    let moveTo = this.add.tween(particle).to({ x: this.board[`Enemy${enemy.key.substring(5, 7)}Ratio`].cover.x, y: this.board[`Enemy${enemy.key.substring(5, 7)}Ratio`].cover.y }, 400).start();
                    moveTo.onComplete.add(() => {
                        this.tweens.remove(moveTo);
                    });
                });
            }, 200);
            setTimeout(() => {
                this.destroy_emitter.remove(emitter); emitter.destroy();
            }, 600);
        }, this);
        this.board[`Enemy${enemy.key.substring(5, 7)}Ratio`].total_clear += 1;
        if (this.board[`Enemy${enemy.key.substring(5, 7)}Ratio`].total_clear > this.game.total_enemies - 1) {
            this.enemy_layer.forEach(child => {
                if (child.key === enemy.key) {
                    child.body.immovable = true;
                    child.body.moves = false;
                }
            })
        }
    }
    handle_obstacle_hit(player, enemy) {
        if (!player.is_touching) {
            this.game.total_life -= 2;
            player.is_touching = true;
        }
    }
    handle_sign(player, sign) {
        if (sign.key == 'Boss_Gate_Sign01' && sign.body.touching.up) {
            this.boss_gate_sign_bloom.bloom_effect.stop();
            this.boss_gate_sign_bloom.destroy();
            sign.frame = 1;
            sign.body.enable = false;
            this.boss_gate.front.visible = true;
            this.camera.shake(0.0035, 800);
            this.boss_gate.up_effect.start();
            this.boss_gate.down_effect.start();
            this.boss_gate.back_effect.start();
            this.boss_gate.up_effect.onComplete.add(() => {
                this.boss_gate.valid = true;
                this.boss_gate.up.mask.destroy();
                this.boss_gate.up.destroy();
                this.boss_gate.down.mask.destroy();
                this.boss_gate.down.destroy();
            });
            this.boss_gate.front_effect.start();
            this.add.tween(this.purple).to({ alpha: 0.6 }, 1000).start();
        } else if (this.boss_gate.valid && sign.key == 'Boss_Gate00') {
            this.is_boss_state = true;
            this.boss.visible = true;
            this.boss.animations.play('walk');
            this.enemy_layer.removeAll();
            this.sign_layer.removeAll();
            this.boss_HP.front.visible = true;
            this.boss_HP.front.mask.visible = true;
            this.boss_HP.back.visible = true;
        }
    }
    handle_boss_hit(boss, bullet, overlap) {
        if (bullet.hit) {
            boss.hp -= 5;
            bullet.destroy();
        }
    }
    handle_player_hit(player) {
        if (!player.is_touching) {
            this.game.total_life -= 2;
            player.is_touching = true;
        }
    }
    handle_destroy_bullet(player, bullet) {
        bullet.body.enable = false;
        this.board[`${bullet.key}Ratio`].cover.animations.play('kill');
        let tween = this.add.tween(bullet.scale).to({ x: 1.75, y: 1.75 }, 175).start();
        tween.onComplete.add(() => {
            if (this.counter.lastType == bullet.key) {
                this.counter.combo += 1;
                this.audio[`melo0${this.counter.combo % 3}`].play();
            } else {
                this.counter.combo = 1;
                this.counter.lastType = bullet.key;
                this.audio[`melo00`].play();
            }
            this.tweens.remove(tween);
            this.bullet_layer.remove(bullet);
            bullet.destroy();
        }, this);
    }
}