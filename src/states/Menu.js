export default class Menu extends Phaser.State {
    constructor() {
        super();
    }
    create() {
        this.state.start('Stage2');
    }
}