export default class Load extends Phaser.State {
    constructor() {
        super();
    }
    preload() {
        var progressLabel = this.add.bitmapText(928 * 0.5 + 50, 793 * 0.5 - 50, 'carrier_command', 'Loading...');
        progressLabel.anchor.setTo(0.5, 0.5);
        progressLabel.fontSize = 40;
        progressLabel.tint = 0xfcfcfc;
        
        var progressBarContent = this.add.sprite(928 * 0.5 - 300, 793 * 0.5, 'progressBarContent');
        var progressBarBorder = this.add.sprite(928 * 0.5 - 300, 793 * 0.5, 'progressBarBorder');
        this.load.setPreloadSprite(progressBarContent);
        
        this.load.audio('melo00', 'audio/system00_melo00.wav');
        this.load.audio('melo01', 'audio/system00_melo01.wav');
        this.load.audio('melo02', 'audio/system00_melo02.wav');
        this.load.audio('melo03', 'audio/system00_melo03.wav');

        this.load.audio('boss', 'audio/boss.ogg');
        this.load.audio('bgm', 'audio/bgm.ogg');
        this.load.audio('gate', 'audio/boss_gate.wav');
        
        this.load.bitmapFont('carrier_command', 'font/carrier_command.png', 'font/carrier_command.xml');

        this.load.image('tileset', 'map/tileset.png');
        this.load.tilemap('map', 'map/map.json', null, Phaser.Tilemap.TILED_JSON);

        this.load.image('Minimap_02', 'image/Minimap/Minimap_02.png');
        
        this.load.image('Menu_Layer00', 'image/Menu/Menu_Layer_00.png');
        this.load.image('Menu_Layer01', 'image/Menu/Menu_Layer_01.png');
        this.load.image('Menu_Layer02', 'image/Menu/Menu_Layer_02.png');
        this.load.image('Menu_Layer03', 'image/Menu/Menu_Layer_03.png');
        this.load.image('Menu_Layer04', 'image/Menu/Menu_Layer_04.png');
        this.load.image('Menu_Layer05', 'image/Menu/Menu_Layer_05.png');
        this.load.image('prist', 'image/Menu/prist.png');
        this.load.image('info_back', 'image/Menu/info_back.png');
        this.load.image('talk', 'image/Menu/talk.png');
        this.load.spritesheet('bookgirl', 'image/Menu/bookgirlset.png', 66, 84);
        this.load.spritesheet('pumpgirl', 'image/Menu/pumpgirlset.png', 47, 82);
        this.load.spritesheet('saveboy', 'image/Menu/saveset.png', 78, 119);
        this.load.spritesheet('exitdoor', 'image/Menu/exitdoor.png', 58, 94);
        this.load.image('leaderboard', 'image/Menu/leaderboard.png');


        this.load.image('Map01_Layer00', 'image/Map01/Map01_Layer00.png');
        this.load.image('Map01_Layer01', 'image/Map01/Map01_Layer01.png');
        this.load.image('Map01_Layer02', 'image/Map01/Map01_Layer02.png');
        this.load.image('Map01_Layer03', 'image/Map01/Map01_Layer03.png');
        this.load.image('Map01_Layer04', 'image/Map01/Map01_Layer04.png');
        this.load.image('Map01_Layer05', 'image/Map01/Map01_Layer05.png');
        this.load.image('Boundary', 'image/Map01/Boundary.png');

        this.load.spritesheet('Map02_Layer0', 'image/Map02/Map02_Layer0.png', 950, 793);
        this.load.spritesheet('Map02_Layer1', 'image/Map02/Map02_Layer1.png', 950, 793);
        this.load.spritesheet('Map02_Layer2', 'image/Map02/Map02_Layer2.png', 950, 793);
        this.load.spritesheet('Map02_Layer3', 'image/Map02/Map02_Layer3.png', 950, 793);
        this.load.spritesheet('Map02_Layer4', 'image/Map02/Map02_Layer4.png', 950, 793);
        this.load.image('HiddenBlock', 'image/Map02/HiddenBlock.png');

        this.load.image('Particle00', 'image/Particle/Particle00.png');
        this.load.image('Particle01', 'image/Particle/Particle01.png');
        this.load.image('Particle02', 'image/Particle/Particle02.png');
        this.load.image('Particle03', 'image/Particle/Particle03.png');
        this.load.spritesheet('Mouse_Drag', 'image/Mouse_Drag.png', 160, 112);

        this.load.spritesheet('Player00', 'image/Player/Player00.png', 45, 45);
        this.load.spritesheet('Player01', 'image/Player/Player01.png', 45, 50);

        this.load.spritesheet('Enemy00', 'image/Enemy/Enemy00.png', 31, 39);
        this.load.spritesheet('Enemy01', 'image/Enemy/Enemy01.png', 45, 44);
        this.load.spritesheet('Enemy02', 'image/Enemy/Enemy02.png', 42, 50);
        this.load.spritesheet('Enemy03', 'image/Enemy/Enemy03.png', 40, 46);

        this.load.spritesheet('Gravity00', 'image/Gravity/Gravity00.png', 40, 35);
        this.load.spritesheet('Gravity01', 'image/Gravity/Gravity01.png', 40, 35);

        this.load.image('Obstacle00', 'image/Obstacle/Obstacle00.png');
        this.load.image('Obstacle01', 'image/Obstacle/Obstacle01.png');

        this.load.image('Percentage_Back', 'image/Percentage/Percentage_Back.png');
        this.load.image('Percentage_Front', 'image/Percentage/Percentage_Front.png');

        this.load.image('Boss_Gate00', 'image/Boss_Gate/Boss_Gate00.png');
        this.load.image('Boss_Gate01', 'image/Boss_Gate/Boss_Gate01.png');
        this.load.image('Boss_Gate02', 'image/Boss_Gate/Boss_Gate02.png');
        this.load.image('Boss_Gate03', 'image/Boss_Gate/Boss_Gate03.png');
        this.load.image('Boss_Gate04', 'image/Boss_Gate/Boss_Gate04.png');
        this.load.spritesheet('Boss_Gate_Sign00', 'image/Boss_Gate/Boss_Gate_Sign00.png', 54, 54);
        this.load.spritesheet('Boss_Gate_Sign01', 'image/Boss_Gate/Boss_Gate_Sign01.png', 54, 40);

        this.load.spritesheet('Boss00', 'image/Boss/Boss00.png', 400, 400);
        this.load.spritesheet('Boss01', 'image/Boss/Boss01.png', 340, 400);

        this.load.image('HP_Front', 'image/HP/HP_Front.png');
        this.load.image('HP_Back', 'image/HP/HP_Back.png');

        this.load.image('Target_Large00', 'image/Target/Target_Large00.png');
        this.load.image('Target_Large01', 'image/Target/Target_Large01.png');

        this.load.image('LifeIcon', 'image/Icon/LifeIcon.png');
        
        this.load.image('favicon', 'image/Icon/favicon.png');
    }
    create() {
        this.state.start('Start');
    }
}