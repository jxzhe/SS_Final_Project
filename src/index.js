import Boot from 'states/Boot.js';
import Load from 'states/Load.js';
import Menu from 'states/Menu.js';
import Stage1 from 'states/Stage1.js';
import Stage2 from 'states/Stage2.js';
import Clear from 'states/Clear.js';
import Over from 'states/Over.js';

class Game extends Phaser.Game {
    constructor(x, y) {
        super(x, y);
        this.state.add('Boot', Boot);
        this.state.add('Load', Load);
        this.state.add('Menu', Menu);
        this.state.add('Stage1', Stage1);
        this.state.add('Stage2', Stage2);
        this.state.add('Clear', Clear);
        this.state.add('Over', Over);
        this.state.start('Boot');
    }
}

window.onload = () => {
    new Game(928, 793);
};