export default class Clear extends Phaser.State {
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

        var text_p = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 2, 0], [4, 3, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0]];
        var text_r = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 2, 0], [4, 3, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0], [4, 0, 0], [3, 1, 0]];
        var text_i = [[0, 0, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0], [0, 4, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0], [2, 1, 0], [2, 2, 0], [2, 3, 0]];
        var text_n = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0], [1, 3, 0], [2, 2, 0], [3, 1, 0]];
        var text_y = [[0, 4, 0], [1, 3, 0], [2, 2, 0], [2, 1, 0], [2, 0, 0], [3, 3, 0], [4, 4, 0]];
        var text_d = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0]];
        var text_a = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0]];
        var text_s = [[0, 0, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0]];
        var text_h = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0]];
        var text_q = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0], [3, 1, 0]];
        var text_u = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0]];
        var text_e = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 2, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0]];
        var text_c = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0]];
        var text_l = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0]];
        var text_t = [[2, 0, 0], [0, 4, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0], [2, 1, 0], [2, 2, 0], [2, 3, 0]];
        
        var group_q = new THREE.Group();
        for(let i = 0; i < text_q.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xff0ff0});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_q[i][0];
            cube.position.y = text_q[i][1];
            cube.position.z = text_q[i][2];
            group_q.add(cube);
        }
        scene.add(group_q);

        var group_u = new THREE.Group();
        for(let i = 0; i < text_u.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xff0ff0});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_u[i][0] + 6;
            cube.position.y = text_u[i][1];
            cube.position.z = text_u[i][2];
            group_u.add(cube);
        }
        scene.add(group_u);

        var group_e1 = new THREE.Group();
        for(let i = 0; i < text_e.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xff0ff0});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_e[i][0] + 12;
            cube.position.y = text_e[i][1];
            cube.position.z = text_e[i][2];
            group_e1.add(cube);
        }
        scene.add(group_e1);

        var group_s = new THREE.Group();
        for(let i = 0; i < text_s.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xff0ff0});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_s[i][0] + 18;
            cube.position.y = text_s[i][1];
            cube.position.z = text_s[i][2];
            group_s.add(cube);
        }
        scene.add(group_s);

        var group_t = new THREE.Group();
        for(let i = 0; i < text_t.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xff0ff0});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_t[i][0] + 24;
            cube.position.y = text_t[i][1];
            cube.position.z = text_t[i][2];
            group_t.add(cube);
        }
        scene.add(group_t);

        var group_c = new THREE.Group();
        for(let i = 0; i < text_c.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xfff00f});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_c[i][0] + 11;
            cube.position.y = text_c[i][1] - 6;
            cube.position.z = text_c[i][2];
            group_c.add(cube);
        }
        scene.add(group_c);

        var group_l = new THREE.Group();
        for(let i = 0; i < text_l.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xfff00f});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_l[i][0] + 17;
            cube.position.y = text_l[i][1] - 6;
            cube.position.z = text_l[i][2];
            group_l.add(cube);
        }
        scene.add(group_l);

        var group_e = new THREE.Group();
        for(let i = 0; i < text_e.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xfff00f});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_e[i][0] + 23;
            cube.position.y = text_e[i][1] - 6;
            cube.position.z = text_e[i][2];
            group_e.add(cube);
        }
        scene.add(group_e);

        var group_a = new THREE.Group();
        for(let i = 0; i < text_a.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xfff00f});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_a[i][0] + 29;
            cube.position.y = text_a[i][1] - 6;
            cube.position.z = text_a[i][2];
            group_a.add(cube);
        }
        scene.add(group_a);

        var group_r = new THREE.Group();
        for(let i = 0; i < text_r.length; i++) {
            let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            let cubeMaterial = new THREE.MeshStandardMaterial({color: 0xfff00f});
            let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = text_r[i][0] + 35;
            cube.position.y = text_r[i][1] - 6;
            cube.position.z = text_r[i][2];
            group_r.add(cube);
        }
        scene.add(group_r);


        var render = function () {
            let time = new Date();
            requestAnimationFrame(render);
            this.angle += 0.01;

            group_q.position.x = Math.cos(this.angle) * 1;
            group_u.position.x = Math.cos(this.angle) * 1;
            group_e1.position.x = Math.cos(this.angle) * 1;
            group_s.position.x = Math.cos(this.angle) * 1;
            group_t.position.x = Math.cos(this.angle) * 1;
            
            group_c.position.x = Math.cos(this.angle) * 2;
            group_l.position.x = Math.cos(this.angle) * 2;
            group_e.position.x = Math.cos(this.angle) * 2;
            group_a.position.x = Math.cos(this.angle) * 2;
            group_r.position.x = Math.cos(this.angle) * 2;
            renderer.render(scene, camera);
            directionalLight.position.set(1, Math.cos(time.getSeconds()/100), 1);
        }.bind(this);
        render();
    }
}