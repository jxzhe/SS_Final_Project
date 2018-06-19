export default class Start extends Phaser.State {
    constructor() {
        super();
    }
    create() {
        this.game.menu = this.add.audio('menu');
        this.game.boss = this.add.audio('boss');
        this.game.normal = this.add.audio('normal');
        this.game.gate = this.add.audio('gate');
        this.game.menu.play();

        this.Text3D();
        this.start_text = this.add.bitmapText(928 * 0.5, 793 * 0.8, 'carrier_command', `Click To Start`);
        this.start_text.anchor.set(0.5, 0);
        this.start_text_tween = this.add.tween(this.start_text).to({alpha: 0.5}).yoyo(true).loop().start();
        this.start_text.fontSize = 40;
        this.start_text.inputEnabled = true;
        this.start_text.input.useHandCursor = true;
        this.start_text.events.onInputUp.add(() => {
            var elem = document.getElementById('dd');
            elem.parentNode.removeChild(elem);
            this.state.start('Menu');
        }, this);
    }
    Text3D() {
        const width = 928;
        const height = 600;

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.domElement.id = 'dd';
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

        var text_p = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 2, 0], [4, 3, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0]];
        var text_r = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 2, 0], [4, 3, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0], [4, 0, 0], [3, 1, 0]];
        var text_i = [[0, 0, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0], [0, 4, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0], [2, 1, 0], [2, 2, 0], [2, 3, 0]];
        var text_n = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0], [1, 3, 0], [2, 2, 0], [3, 1, 0]];
        var text_y = [[0, 4, 0], [1, 3, 0], [2, 2, 0], [2, 1, 0], [2, 0, 0], [3, 3, 0], [4, 4, 0]];
        var text_d = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0]];
        var text_a = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0]];
        var text_s = [[0, 0, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0]];
        var text_h = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0]];

        var group_p = new THREE.Group();
        for(let i = 0; i < text_p.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0x6f6bd6});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_p[i][0];
            cube.position.y = text_p[i][1];
            cube.position.z = text_p[i][2];
            group_p.add(cube);
        }
        scene.add(group_p);

        var group_r = new THREE.Group();
        for(let i = 0; i < text_r.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0x6f6bd6});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_r[i][0] + 6;
            cube.position.y = text_r[i][1];
            cube.position.z = text_r[i][2];
            group_r.add(cube);
        }
        scene.add(group_r);

        var group_i = new THREE.Group();
        for(let i = 0; i < text_i.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0x6f6bd6});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_i[i][0] + 12;
            cube.position.y = text_i[i][1];
            cube.position.z = text_i[i][2];
            group_i.add(cube);
        }
        scene.add(group_i);

        var group_n1 = new THREE.Group();
        for(let i = 0; i < text_n.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0x6f6bd6});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_n[i][0] + 18;
            cube.position.y = text_n[i][1];
            cube.position.z = text_n[i][2];
            group_n1.add(cube);
        }
        scene.add(group_n1);

        var group_n2 = new THREE.Group();
        for(let i = 0; i < text_n.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0x6f6bd6});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_n[i][0] + 24;
            cube.position.y = text_n[i][1];
            cube.position.z = text_n[i][2];
            group_n2.add(cube);
        }
        scene.add(group_n2);

        var group_y = new THREE.Group();
        for(let i = 0; i < text_y.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0x6f6bd6});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_y[i][0] + 30;
            cube.position.y = text_y[i][1];
            cube.position.z = text_y[i][2];
            group_y.add(cube);
        }
        scene.add(group_y);

        var group_d = new THREE.Group();
        for(let i = 0; i < text_d.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_d[i][0] + 17;
            cube.position.y = text_d[i][1] - 6;
            cube.position.z = text_d[i][2];
            group_d.add(cube);
        }
        scene.add(group_d);

        var group_a = new THREE.Group();
        for(let i = 0; i < text_a.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_a[i][0] + 23;
            cube.position.y = text_a[i][1] - 6;
            cube.position.z = text_a[i][2];
            group_a.add(cube);
        }
        scene.add(group_a);

        var group_s = new THREE.Group();
        for(let i = 0; i < text_s.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_s[i][0] + 29;
            cube.position.y = text_s[i][1] - 6;
            cube.position.z = text_s[i][2];
            group_s.add(cube);
        }
        scene.add(group_s);

        var group_h = new THREE.Group();
        for(let i = 0; i < text_h.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_h[i][0] + 35;
            cube.position.y = text_h[i][1] - 6;
            cube.position.z = text_h[i][2];
            group_h.add(cube);
        }
        scene.add(group_h);


        var render = function () {
            let time = new Date();
            requestAnimationFrame(render);
            
            group_p.rotation.x -= 0.005 *0.5;
            group_r.rotation.x -= 0.01*0.5;
            group_i.rotation.x -= 0.015*0.5;
            group_n1.rotation.x -= 0.02*0.5;
            group_n2.rotation.x -= 0.025*0.5;
            group_y.rotation.x -= 0.03*0.5;

            group_d.rotation.x -= 0.02*0.5;
            group_a.rotation.x -= 0.025*0.5;
            group_s.rotation.x -= 0.03*0.5;
            group_h.rotation.x -= 0.035*0.5;
            
            renderer.render(scene, camera);
            directionalLight.position.set(1, Math.cos(time.getSeconds()/100), 1);
        }
        render();
    }
}