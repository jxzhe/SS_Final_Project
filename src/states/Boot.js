export default class Boot extends Phaser.State {
    constructor() {
        super();
    }
    init() {
        this.game.player_choice = 0;
        this.game.settings = {
            border_top_offset_y: 195,
            border_top_y: 277,
            border_bottom_offset_y: 723,
            border_bottom_y: 70,
            active_right_bounder: 564,
            active_left_bounder: 364,
            active_up_bounder: 472,
            active_bottom_bounder: 683,
            total_enemy_types: 4,
        };
        this.game.mouse = {
            is_down: false,
            x: 0,
            y: 0,
        };
        this.game.map1_boundary = {
            left: -5000,
            right: 5000
        }
        this.game.total_enemies = 25;
        this.game.time_angle = 0;
        this.game.last_time = 0;
        this.game.total_life = 100;
        
        this.time.advancedTiming = true;
    }
    preload() {
        this.load.baseURL = 'src/assets/';
        this.load.bitmapFont('carrier_command', 'font/carrier_command.png', 'font/carrier_command.xml');
        this.load.image('progressBarBorder', 'image/progressBarBorder.png');
        this.load.image('progressBarContent', 'image/progressBarContent.png');
    }
    create() {
        this.state.start('Load');
    }
}