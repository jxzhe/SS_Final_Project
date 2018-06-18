import Boot from 'states/Boot.js';
import Load from 'states/Load.js';
import Menu from 'states/Menu.js';
import Start from 'states/Start.js';
import Stage1 from 'states/Stage1.js';
import Stage2 from 'states/Stage2.js';
import Clear from 'states/Clear.js';
import Over from 'states/Over.js';

class Game extends Phaser.Game {
    constructor(x, y) {
        super(x, y);
        this.state.add('Boot', Boot);
        this.state.add('Load', Load);
        this.state.add('Start', Start);
        this.state.add('Menu', Menu);
        this.state.add('Stage1', Stage1);
        this.state.add('Stage2', Stage2);
        this.state.add('Clear', Clear);
        this.state.add('Over', Over);
        this.state.start('Boot');
    }
}
document.body.onkeypress = e => {
    if(e.keyCode == 8) {
        e.preventDefault();
    }
};
window.onload = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyCLWVQ1SEiVTQG2B88_wD38ftmjaeycTKc",
        authDomain: "prinny-dash.firebaseapp.com",
        databaseURL: "https://prinny-dash.firebaseio.com",
        projectId: "prinny-dash",
        storageBucket: "",
        messagingSenderId: "297096066565"
    });    
    new Game(928, 793);
};