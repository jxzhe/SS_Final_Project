export default class Stage1 extends Phaser.State {
    constructor() {
        super();
    }
    create() {
        this.create_layers();
        this.init_sign_layer();
        this.init_obstacle_layer();
        this.init_enemy_layer();
        this.init_front_layer();
        this.init_target_layer();
        this.init_border_layer();
        this.init_main_layer();
        this.init_board();
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
        this.bullets = [];
    }
    create_layers() {
        this.back_layer_2 = this.add.group();
        this.back_layer_1 = this.add.group();
        this.back_layer_0 = this.add.group();
        this.enemy_layer = this.add.physicsGroup(Phaser.Physics.ARCADE);
        this.bullet_layer = this.add.group();
        this.obstacle_layer = this.add.group();
        this.sign_layer = this.add.group();
        this.border_layer = this.add.group();
        this.main_layer = this.add.group();
        this.boss_layer = this.add.group();
        this.front_layer = this.add.group();
        this.target_layer = this.add.group();
    }
    init_sign_layer() {
        this.sign_layer_pos = [800, 900];
        this.boss_gate = {
            'back': this.add.sprite(963, 585, 'Boss_Gate03'),
            'down': this.add.sprite(900, 500, 'Boss_Gate02'),
            'up': this.add.sprite(900, 500, 'Boss_Gate01'),
            'door': this.add.sprite(900, 500, 'Boss_Gate00'),
            'front': this.add.sprite(900, 500, 'Boss_Gate04'),
            'valid': false,
        };
        this.physics.arcade.enable(this.boss_gate.door);
        this.boss_gate.door.body.setSize(46, 63, 34, 52);

        this.boss_gate.back.anchor.set(0.5);
        this.boss_gate.back.mask = this.add.graphics(963, 585);
        this.boss_gate.back.mask.anchor.set(0.5);
        this.boss_gate.back.mask.beginFill(0x000000);
        this.boss_gate.back.mask.drawRect(-42.5, -52.5, 85, 105);

        this.boss_gate.up.mask = this.add.graphics(900, 500);
        this.boss_gate.up.mask.beginFill(0x000000);
        this.boss_gate.up.mask.drawRect(23, 39, 82, 71);

        this.boss_gate.down.mask = this.add.graphics(900, 500);
        this.boss_gate.down.mask.beginFill(0x000000);
        this.boss_gate.down.mask.drawRect(13, 77, 102, 71);

        this.boss_gate.front.visible = false;
        this.boss_gate.front_effect = this.add.tween(this.boss_gate.front).to({ alpha: 0.3 }, 750).yoyo(true).loop();
        this.boss_gate.up_effect = this.add.tween(this.boss_gate.up).to({ y: 400 }, 1500);
        this.boss_gate.down_effect = this.add.tween(this.boss_gate.down).to({ y: 700 }, 1500);
        this.boss_gate.back_effect = this.add.tween(this.boss_gate.back).to({ angle: 360 }, 4000).loop();

        this.boss_gate_sign_bloom = this.add.sprite(800, this.game.settings.border_bottom_offset_y - 18, 'Boss_Gate_Sign01');
        this.boss_gate_sign_bloom.anchor.set(0.5);
        this.boss_gate_sign_bloom.alpha = 0.7;
        this.boss_gate_sign_bloom.frame = 2;
        this.boss_gate_sign_bloom.bloom_effect = this.add.tween(this.boss_gate_sign_bloom).to({ alpha: 0.1 }, 750).yoyo(true).loop().start();

        this.boss_gate_sign = this.add.sprite(800, this.game.settings.border_bottom_offset_y - 18, 'Boss_Gate_Sign01');
        this.physics.arcade.enable(this.boss_gate_sign);
        this.boss_gate_sign.body.immovable = true;
        this.boss_gate_sign.anchor.set(0.5);

        this.boss_gate_sign00 = this.add.sprite(800, this.game.settings.border_bottom_offset_y - 60, 'Boss_Gate_Sign00');
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
    init_obstacle_layer() {
        this.obstacle_layer_pos = [];
        this.obstacles = [];
        for (let i = 0; i < 20; ++i) {
            let random_decision = Math.random();
            let spawn = this.create_unique_value(10000, this.sign_layer_pos);
            this.obstacle_layer_pos.push(spawn);

            let obstacle;
            if (random_decision > 0.5) {
                obstacle = this.add.sprite(spawn, 723 - 139.2 + 10, 'Obstacle00');
                obstacle.scale.set(1.2);
            } else {
                obstacle = this.add.sprite(spawn, 195 + 277 - 10, 'Obstacle01');
            }
            this.physics.arcade.enable(obstacle);
            obstacle.body.immovable = true;
            this.obstacles.push(obstacle);
            this.obstacle_layer.add(obstacle);
        }
    }
    init_enemy_layer() {
        for (let i = 0; i < 4; ++i) {
            for (let j = 0; j < this.game.total_enemies; ++j) {
                let spawn = this.create_unique_value(4000, this.sign_layer_pos.concat(this.obstacle_layer_pos));
                let enemy = this.enemy_layer.create(spawn, i < 2 ? Math.random() * 150 + 500 : 600, `Enemy0${i}`);
                enemy.anchor.set(0.5);
                enemy.scale.set(1.2);
                enemy.angle = Math.random() * 180;
            }
        }
        this.enemy_layer.setAll('body.gravity.y', 300);
    }
    init_front_layer() {
        this.front_layer.create(0, 0, 'Map01_Layer00');
        this.front_layer.create(this.game.width, 0, 'Map01_Layer00');
    }
    init_target_layer() {
        this.target_large = this.add.sprite(0, 0, 'Target_Large00')
        this.target_large.anchor.set(0.5);
        this.add.tween(this.target_large.scale).to({ x: 0.8, y: 0.8 }, 4000, Phaser.Easing.Linear.None).yoyo(true).loop().start();
        this.add.tween(this.target_large).to({ angle: 360 }, 5000).loop().start();
        this.target_large.inputEnabled = true;
        this.target_large.events.onInputDown.add((sprite, pointer) => {
            if (!this.game.mouse.is_down) {
                this.game.mouse.is_down = true;
                this.game.mouse.x = pointer.x;
                this.game.mouse.y = pointer.y;
                this.player.body.velocity.x = 0;
                this.player.body.velocity.y = 0;

                this.mouse_drag.alpha = 1;
                this.player.body.gravity.y = this.player.body.gravity.y > 0 ? 25 : -25;
            }
        }, this);
        this.target_large.events.onInputUp.add((sprite, pointer) => {
            this.game.total_life -= 1;
            this.game.mouse.is_down = false;
            this.game.time_angle = 0;
            this.game.last_time = this.time.now;
            let dx = this.game.mouse.x - pointer.x;
            let dy = this.game.mouse.y - pointer.y;
            this.player.body.velocity.x = dx > 0 ? Math.min(1000, dx * 5) : Math.max(-1000, dx * 5);
            this.player.body.velocity.y = dy > 0 ? Math.min(1000, dy * 5) : Math.max(-1000, dy * 5);

            this.mouse_drag.animations.play('fire').onComplete.add(() => { this.mouse_drag.frame = 0; this.mouse_drag.alpha = 0; });
            this.player.body.gravity.y = this.player.body.gravity.y > 0 ? 300 : -300;
        }, this);
        this.boss_HP = {
            'front': this.add.sprite(this.game.width * 0.06, this.game.height - 20, 'HP_Front'),
            'back': this.add.sprite(this.game.width * 0.06, this.game.height - 20, 'HP_Back'),
        };
        this.boss_HP.front.anchor.set(0, 0.5);
        this.boss_HP.back.anchor.set(0, 0.5);

        this.boss_HP.front.mask = this.add.graphics(this.game.width * 0.06, this.game.height - 20);
        this.boss_HP.front.mask.beginFill(0xffffff);
        this.boss_HP.front.mask.anchor.set(0, 0.5);
        this.boss_HP.front.mask.drawRect(0, -15, 800, 30);

        this.boss_HP.front.visible = false;
        this.boss_HP.back.visible = false;

        this.target_layer.addMultiple([this.target_large, this.boss_HP.back, this.boss_HP.front, this.boss_HP.front.mask]);
    }
    init_border_layer() {
        this.border_layer.enableBody = true;
        for (let i = this.game.map1_boundary.left - 400; i < this.game.map1_boundary.right; i += 900) {
            this.border_layer.create(i, this.game.settings.border_bottom_offset_y, 'Map01_Layer01');
            this.border_layer.create(i, this.game.settings.border_top_offset_y, 'Map01_Layer02');
        }
        this.boundary_RH = this.add.sprite(this.game.map1_boundary.right, 458, 'Boundary');
        this.boundary_LH = this.add.sprite(this.game.map1_boundary.left, 458, 'Boundary');
        this.boundary_LH.scale.set(-1, 1);
        this.border_layer.addMultiple([this.boundary_RH, this.boundary_LH]);
        this.border_layer.setAll('body.immovable', true);
    }
    init_main_layer() {
        this.gravity_0 = this.add.sprite(this.game.width * 0.25, 500, 'Gravity00');
        this.gravity_1 = this.add.sprite(this.game.width * 0.75, 700, 'Gravity01');
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

        if (this.game.player_choice == 0) {
            this.player = this.add.sprite(this.game.width * 0.5, 500, 'Player00');
            this.player.animations.add('leftwalk', [13, 14, 15, 16, 17, 18], 8, true);
            this.player.animations.add('rightwalk', [19, 20, 21, 22, 23, 24], 8, true);
            this.player.animations.add('leftjump', [1, 2, 3, 4, 5, 6], 10, true);
            this.player.animations.add('rightjump', [7, 8, 9, 10, 11, 12], 10, true);
            this.player.animations.add('leftrun', [25, 26, 27, 28, 29, 30], 8, true);
            this.player.animations.add('rightrun', [31, 32, 33, 34, 35, 36], 8, true);
        }
        else {
            this.player = this.add.sprite(this.game.width * 0.5, 500, 'Player01');
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

        // this.dbg = this.add.text(5, 5, ``);
        // this.dbg.fontSize = 20;
        // this.dbg.fill = '#000';

        this.main_layer.addMultiple([/*this.dbg, */this.mouse_drag, this.player, this.gravity_0, this.gravity_1]);

        this.back_layer_0.create(0, 0, 'Map01_Layer03');
        this.back_layer_0.create(this.game.width, 0, 'Map01_Layer03');

        this.back_layer_1.create(0, 0, 'Map01_Layer04');
        this.back_layer_1.create(this.game.width, 0, 'Map01_Layer04');

        this.back_layer_2.create(0, 0, 'Map01_Layer05');

        this.boss = this.add.sprite(this.game.width * 0.5, 200, 'Boss00');
        this.physics.arcade.enable(this.boss);
        this.boss.body.setSize(150, 200, 125, 100);
        this.boss.anchor.set(0.5);
        this.boss.body.immovable = true;
        this.boss.animations.add('walk', [0, 1], 3, true);
        this.boss.animations.add('attack', [2, 3, 4], 8, false);
        this.boss.visible = false;
        this.add.tween(this.boss).to({ y: 250 }, 1000).yoyo(true).loop().start();
        this.boss_layer.add(this.boss);
        this.boss.hp = 100;
    }
    init_board() {
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
        }
        this.board[`Enemy00Ratio`].cover.animations.add('kill', [1, 2, 3, 4, 5], 8, false);
        this.board[`Enemy01Ratio`].cover.animations.add('kill', [0, 1, 2, 3], 8, false);
        this.board[`Enemy02Ratio`].cover.animations.add('kill', [0, 1, 2, 3, 4], 8, false);
        this.board[`Enemy03Ratio`].cover.animations.add('kill', [0, 1, 2, 3, 4, 5], 8, false);

        this.life_icon = this.add.image(this.game.width * 0.045, this.game.height * 0.035, 'LifeIcon');
        this.life_icon.anchor.set(0.5);
        this.life_text = this.add.bitmapText(this.game.width * 0.15, this.game.height * 0.035, 'carrier_command', `x${this.game.total_life}`);
        this.life_text.anchor.set(0.5);
        this.life_text.scale.set(0.6);
        this.life_text.tint = 0x220000;
    }
    check_duplicate(spawn, arr) {
        for (let used of arr) {
            if (spawn > used - 100 && spawn < used + 100) {
                return true;
            }
        }
        return false;
    }
    create_unique_value(boundary, arr) {
        let spawn;
        do {
            spawn = (Math.random() - 0.5) * boundary;
        } while (this.check_duplicate(spawn, arr));
        return spawn;
    }
    update() {
        let cur_time = this.time.now;

        // Physics Controller
        if (this.is_boss_state) {
            if (this.game.mouse.is_down == false) {
                this.physics.arcade.collide(this.player, this.bullet_layer, (player, bullet) => bullet.hit = true);
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
        this.physics.arcade.collide(this.enemy_layer, [this.enemy_layer, this.border_layer, this.obstacle_layer, this.gravity_0, this.gravity_1]);
        this.physics.arcade.collide(this.player, [this.border_layer, this.obstacle_layer, this.main_layer], this.handle_gravity.bind(this));
        this.physics.arcade.collide(this.player, this.boss_gate_sign, this.handle_sign.bind(this));
        this.physics.arcade.overlap(this.player, this.boss_gate.door, this.handle_sign.bind(this));

        // Mouse Effect
        let angle = this.math.angleBetween(this.input.activePointer.x, this.input.activePointer.y, this.player.body.position.x + this.player.offsetX, this.player.body.position.y + this.player.offsetY);
        let distance = Math.min(30, this.math.distance(this.input.activePointer.x, this.input.activePointer.y, this.player.body.position.x + this.player.offsetX, this.player.body.position.y + this.player.offsetY) * 0.25);
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

        // Large pointer field
        this.target_large.x = this.player.body.position.x + this.player.offsetX;
        this.target_large.y = this.player.body.position.y + this.player.offsetY;

        // Control layer movement
        if (this.player.body.x > this.game.settings.active_right_bounder && this.boundary_RH.body.x > this.game.width - 50) {
            for (let child of this.back_layer_0.children) {
                child.x -= this.player.body.velocity.x * 0.01;
                if (child.x < -this.game.width) {
                    child.x += this.game.width * 2;
                }
            }
            for (let child of this.back_layer_1.children) {
                child.x -= this.player.body.velocity.x * 0.005;
                if (child.x < -this.game.width) {
                    child.x += this.game.width * 2;
                }
            }
            for (let child of this.front_layer.children) {
                child.x -= this.player.body.velocity.x * 0.02;
                if (child.x < -this.game.width) {
                    child.x += this.game.width * 2;
                }
            }
            for (let child of this.border_layer.children) {
                child.x -= this.player.body.velocity.x * 0.015;
            }
            for (let child of this.obstacle_layer.children) {
                child.x -= this.player.body.velocity.x * 0.01;
            }
            if (!this.is_boss_state) {
                for (let child of this.enemy_layer.children) {
                    child.x -= this.player.body.velocity.x * 0.01;
                }
                for (let child of this.sign_layer.children) {
                    child.x -= this.player.body.velocity.x * 0.01;
                }
            } else {
                this.boss.body.x -= this.player.body.velocity.x * 0.01;
            }
            this.gravity_0.x -= this.player.body.velocity.x * 0.01;
            this.gravity_1.x -= this.player.body.velocity.x * 0.01;
            if (this.player.body.x > this.game.settings.active_right_bounder) this.player.body.x = this.game.settings.active_right_bounder;
            if (this.is_boss_state) {
                if (this.boss.move_effect && this.boss.move_effect.isRunning) {
                    this.boss.move_effect.timeline[0].vEnd.x -= this.player.body.velocity.x * 0.01;
                }
                if (this.bullets) {
                    for (let child of this.bullet_layer.children) {
                        child.x -= this.player.body.velocity.x * 0.01;
                    }
                }
            }
        } else if (this.player.body.x < this.game.settings.active_left_bounder && this.boundary_LH.body.x < 0 - 100) {
            for (let child of this.back_layer_0.children) {
                child.x -= this.player.body.velocity.x * 0.01;
                if (child.x > this.game.width) {
                    child.x += -this.game.width * 2;
                }
            }
            for (let child of this.back_layer_1.children) {
                child.x -= this.player.body.velocity.x * 0.005;
                if (child.x > this.game.width) {
                    child.x += -this.game.width * 2;
                }
            }
            for (let child of this.front_layer.children) {
                child.x -= this.player.body.velocity.x * 0.02;
                if (child.x > this.game.width) {
                    child.x += -this.game.width * 2;
                }
            }
            for (let child of this.border_layer.children) {
                child.x -= this.player.body.velocity.x * 0.015;
            }
            for (let child of this.obstacle_layer.children) {
                child.x -= this.player.body.velocity.x * 0.01;
            }
            if (!this.is_boss_state) {
                for (let child of this.enemy_layer.children) {
                    child.x -= this.player.body.velocity.x * 0.01;
                }
                for (let child of this.sign_layer.children) {
                    child.x -= this.player.body.velocity.x * 0.01;
                }
            } else {
                this.boss.body.x -= this.player.body.velocity.x * 0.01;
            }
            this.gravity_0.x -= this.player.body.velocity.x * 0.01;
            this.gravity_1.x -= this.player.body.velocity.x * 0.01;
            if (this.player.body.x < this.game.settings.active_left_bounder) this.player.body.x = this.game.settings.active_left_bounder;
            if (this.is_boss_state) {
                if (this.boss.move_effect && this.boss.move_effect.isRunning) {
                    this.boss.move_effect.timeline[0].vEnd.x -= this.player.body.velocity.x * 0.01;
                }
                if (this.bullets) {
                    for (let child of this.bullet_layer.children) {
                        child.x -= this.player.body.velocity.x * 0.01;
                    }
                }
            }
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
        if (this.player.body.gravity.y < 0) {
            this.gravity_1.animations.play('active');
            this.gravity_0.frame = 0;
            this.gravity_0.animations.stop();

            if (this.player.angle == 0) {
                this.tween_down.start();
            }
        } else {
            this.gravity_0.animations.play('active');
            this.gravity_1.frame = 0;
            this.gravity_1.animations.stop();

            if (this.player.angle != 0) {
                this.tween_up.start();
            }
        }

        // Update board status
        for (let i = 0; i < this.game.settings.total_enemy_types; ++i) {
            let percent = Math.min(this.board[`Enemy0${i}Ratio`].total_clear, this.game.total_enemies) / this.game.total_enemies;
            this.board[`Enemy0${i}Ratio`].text.text = `${Math.round(percent * 100)}%`;
            this.board[`Enemy0${i}Ratio`].text.x = this.board[`Enemy0${i}Ratio`].cover.x + 32.5 + percent * 150;
            this.board[`Enemy0${i}Ratio`].mask.scale.set(percent, 1);
        }

        // Boss functions
        if (this.is_boss_state) {
            // Boss check clear
            if (this.boss.hp < 0.01) {
                this.state.start('Clear');
            }
            this.boss_HP.front.mask.scale.set(this.boss.hp / 100, 1);
            // Boss attack bahavior
            if (this.boss.last_time + 8000 < cur_time) {
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
                this.boss.move_effect = this.add.tween(this.boss).to({ x: this.player.x }, 2000).start();
                this.boss.move_effect.onComplete.add(() => {
                    this.tweens.remove(this.boss.move_effect);
                    // if(Math.random() > 0.2) {
                    this.boss.animations.play('attack');
                    setTimeout(() => {
                        this.boss.frame = 2;
                    }, 1000);
                    if (this.bullets.length == 0) {
                        for (let child of this.bullet_layer.children) {
                            child.destroy();
                        }
                        this.bullets.length = 0;
                    }
                    this.time.events.repeat(Phaser.Timer.SECOND * 0.75, 3, () => {
                        let bullets = {
                            0: this.add.sprite(this.boss.x + 136, this.boss.y + 52, 'Enemy00'),
                            1: this.add.sprite(this.boss.x + 136, this.boss.y + 52, 'Enemy00'),
                            2: this.add.sprite(this.boss.x + 136, this.boss.y + 52, 'Enemy00'),
                        };
                        for (let i = 0; i < 3; ++i) {
                            bullets[i].scale.set(1.5);
                            this.physics.arcade.enable(bullets[i]);
                            bullets[i].body.mass = 0.25;
                            bullets[i].body.bounce.set(1);
                            bullets[i].body.velocity.y = 200;
                            bullets[i].hit = false;
                        }
                        bullets[0].body.velocity.x = -50;
                        bullets[1].body.velocity.x = 0;
                        bullets[2].body.velocity.x = 50;
                        // bullet.body.gravity.y = 200;
                        this.bullet_layer.addMultiple([bullets[0], bullets[1], bullets[2]]);
                        for (let i = 0; i < 3; ++i) {
                            this.bullets.push(bullets[i]);
                        }
                        bullets = {
                            0: this.add.sprite(this.boss.x - 145, this.boss.y + 52, 'Enemy01'),
                            1: this.add.sprite(this.boss.x - 145, this.boss.y + 52, 'Enemy01'),
                            2: this.add.sprite(this.boss.x - 145, this.boss.y + 52, 'Enemy01'),
                        };
                        for (let i = 0; i < 3; ++i) {
                            bullets[i].scale.set(1.5);
                            this.physics.arcade.enable(bullets[i]);
                            bullets[i].body.mass = 0.25;
                            bullets[i].body.bounce.set(1);
                            bullets[i].body.velocity.y = 250;
                            bullets[i].hit = false;
                        }
                        bullets[0].body.velocity.x = -50;
                        bullets[1].body.velocity.x = 0;
                        bullets[2].body.velocity.x = 50;
                        // bullet.body.gravity.y = 200;
                        this.bullet_layer.addMultiple([bullets[0], bullets[1], bullets[2]]);
                        for (let i = 0; i < 3; ++i) {
                            this.bullets.push(bullets[i]);
                        }
                    }, this);
                    this.world.bringToTop(this.bullet_layer);
                    // }
                });
            }
        }
        // Life window
        this.life_text.text = `x${this.game.total_life}`;
        // debug window
        // this.dbg.text = `FPS: ${this.time.fps}\nCurrent Mouse: (${this.input.activePointer.x}, ${this.input.activePointer.y})\nLast Mouse: (${this.game.mouse.x}, ${this.game.mouse.y})\nCombo: ${this.counter.combo}\n`;

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
        } else if (gravity.key == 'Gravity01') {
            player.body.gravity.y = -300;
            this.enemy_layer.setAll('body.gravity.y', -300);
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
                this.destroy_emitter.remove(emitter);
                emitter.destroy();
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
            this.game.normal.stop();
            this.game.gate.play();
            this.game.boss.play();
        } else if (this.boss_gate.valid && sign.key == 'Boss_Gate00') {
            this.is_boss_state = true;
            this.boss.visible = true;
            this.boss.animations.play('walk');
            this.enemy_layer.removeAll();
            this.sign_layer.removeAll();
            this.player.body.bounce.set(0.8);
            this.boss_HP.front.visible = true;
            this.boss_HP.back.visible = true;
        }
    }
    handle_boss_hit(boss, bullet) {
        if (bullet.hit) {
            boss.hp -= 10;
            bullet.destroy();
        }
    }
};