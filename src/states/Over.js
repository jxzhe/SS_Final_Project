export default class Over extends Phaser.State {
    constructor() {
        super();
    }
    create() {
        this.game.menu.play();
        this.angle = 0;
        this.Text3D();
        this.start_text = this.add.bitmapText(928 * 0.5, 793 * 0.8, 'carrier_command', `Click To Menu`);
        this.start_text.anchor.set(0.5, 0);
        this.start_text.fontSize = 40;
        this.start_text_tween = this.add.tween(this.start_text).to({alpha: 0.5}).yoyo(true).loop().start();
        this.start_text.inputEnabled = true;
        this.start_text.input.useHandCursor = true;
        this.start_text.events.onInputUp.add(() => {
            var elem = document.getElementById('cc');
            elem.parentNode.removeChild(elem);
            this.state.start('Menu');
        }, this);
    }
    Text3D() {
        const width = 928;
        const height = 600;

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.domElement.id = 'cc';
        renderer.domElement.style = 'position: absolute; top:8px; left:8px;';
        document.body.appendChild( renderer.domElement );

        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
        camera.position.set(+24, 0, +40);

        var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
        scene.add( ambientLight );

        var directionalLight = new THREE.DirectionalLight(0xFFFFFF);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        var text_r = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 2, 0], [4, 3, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0], [4, 0, 0], [3, 1, 0]];
        var text_e = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 2, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0]];
        var text_o = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0]];
        var text_v = [[0, 4, 0], [0, 3, 0], [1, 2, 0], [1, 1, 0], [2, 0, 0], [3, 1, 0], [3, 2, 0], [4, 3, 0], [4, 4, 0]];
        
        var group_o = new THREE.Group();
        for(let i = 0; i < text_o.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xf0fff0});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_o[i][0] + 12;
            cube.position.y = text_o[i][1];
            cube.position.z = text_o[i][2];
            group_o.add(cube);
        }
        scene.add(group_o);

        var group_v = new THREE.Group();
        for(let i = 0; i < text_v.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xf0fff0});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_v[i][0] + 18;
            cube.position.y = text_v[i][1];
            cube.position.z = text_v[i][2];
            group_v.add(cube);
        }
        scene.add(group_v);

        var group_e = new THREE.Group();
        for(let i = 0; i < text_e.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xf0fff0});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_e[i][0] + 24;
            cube.position.y = text_e[i][1];
            cube.position.z = text_e[i][2];
            group_e.add(cube);
        }
        scene.add(group_e);

        var group_r = new THREE.Group();
        for(let i = 0; i < text_r.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xf0fff0});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_r[i][0] + 30;
            cube.position.y = text_r[i][1];
            cube.position.z = text_r[i][2];
            group_r.add(cube);
        }
        scene.add(group_r);

        var render = function () {
            let time = new Date();
            requestAnimationFrame(render);
            this.angle += 0.01;

            group_o.rotation.x -= 0.015;
            group_v.rotation.x -= 0.02;
            group_e.rotation.x -= 0.025;
            group_r.rotation.x -= 0.03;

            renderer.render(scene, camera);
            directionalLight.position.set(1, Math.cos(time.getSeconds()/100), 1);
        }.bind(this);
        render();
    }
}