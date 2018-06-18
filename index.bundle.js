<<<<<<< HEAD
!function(t){function e(e){for(var i,o,n=e[0],h=e[1],l=e[2],y=0,p=[];y<n.length;y++)o=n[y],s[o]&&p.push(s[o][0]),s[o]=0;for(i in h)Object.prototype.hasOwnProperty.call(h,i)&&(t[i]=h[i]);for(d&&d(e);p.length;)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,n=1;n<a.length;n++){var h=a[n];0!==s[h]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={1:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var n=window.webpackJsonp=window.webpackJsonp||[],h=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=h;r.push([354,0]),a()}({130:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}();var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Phaser.State),i(e,[{key:"create",value:function(){var t=this;this.angle=0,this.Text3D(),this.start_text=this.add.bitmapText(464,793*.8,"carrier_command","Click To Menu"),this.start_text.anchor.set(.5,0),this.start_text.fontSize=40,this.start_text_tween=this.add.tween(this.start_text).to({alpha:.5}).yoyo(!0).loop().start(),this.start_text.inputEnabled=!0,this.start_text.input.useHandCursor=!0,this.start_text.events.onInputUp.add(function(){var e=document.getElementById("cc");e.parentNode.removeChild(e),t.state.start("Menu")},this)}},{key:"Text3D",value:function(){var t=new THREE.WebGLRenderer;t.setSize(928,600),t.domElement.id="cc",t.domElement.style="position: absolute; top:8px; left:8px;",document.body.appendChild(t.domElement);var e=new THREE.Scene,a=new THREE.PerspectiveCamera(45,928/600,1,1e4);a.position.set(24,0,40);var i=new THREE.AmbientLight(16777215,.5);e.add(i);var s=new THREE.DirectionalLight(16777215);s.position.set(1,1,1),e.add(s);for(var r=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,2,0],[2,2,0],[3,2,0],[4,2,0],[4,3,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0],[4,0,0],[3,1,0]],o=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,2,0],[2,2,0],[3,2,0],[4,2,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0],[1,0,0],[2,0,0],[3,0,0],[4,0,0]],n=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,4,0],[2,4,0],[3,4,0],[1,0,0],[2,0,0],[3,0,0],[4,0,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0]],h=[[0,4,0],[0,3,0],[1,2,0],[1,1,0],[2,0,0],[3,1,0],[3,2,0],[4,3,0],[4,4,0]],l=new THREE.Group,d=0;d<n.length;d++){var y=new THREE.BoxGeometry(1,1,1),p=new THREE.MeshStandardMaterial({color:15794160}),_=new THREE.Mesh(y,p);_.position.x=n[d][0]+12,_.position.y=n[d][1],_.position.z=n[d][2],l.add(_)}e.add(l);for(var c=new THREE.Group,m=0;m<h.length;m++){var g=new THREE.BoxGeometry(1,1,1),u=new THREE.MeshStandardMaterial({color:15794160}),b=new THREE.Mesh(g,u);b.position.x=h[m][0]+18,b.position.y=h[m][1],b.position.z=h[m][2],c.add(b)}e.add(c);for(var f=new THREE.Group,v=0;v<o.length;v++){var x=new THREE.BoxGeometry(1,1,1),k=new THREE.MeshStandardMaterial({color:15794160}),w=new THREE.Mesh(x,k);w.position.x=o[v][0]+24,w.position.y=o[v][1],w.position.z=o[v][2],f.add(w)}e.add(f);for(var E=new THREE.Group,M=0;M<r.length;M++){var R=new THREE.BoxGeometry(1,1,1),T=new THREE.MeshStandardMaterial({color:15794160}),P=new THREE.Mesh(R,T);P.position.x=r[M][0]+30,P.position.y=r[M][1],P.position.z=r[M][2],E.add(P)}e.add(E);var H=function(){var i=new Date;requestAnimationFrame(H),this.angle+=.01,l.rotation.x-=.015,c.rotation.x-=.02,f.rotation.x-=.025,E.rotation.x-=.03,t.render(e,a),s.position.set(1,Math.cos(i.getSeconds()/100),1)}.bind(this);H()}}]),e}();e.default=s},131:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}();var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Phaser.State),i(e,[{key:"create",value:function(){var t=this;this.angle=0,this.Text3D(),this.start_text=this.add.bitmapText(464,793*.8,"carrier_command","Click To Menu"),this.start_text.anchor.set(.5,0),this.start_text.fontSize=40,this.start_text_tween=this.add.tween(this.start_text).to({alpha:.5}).yoyo(!0).loop().start(),this.start_text.inputEnabled=!0,this.start_text.input.useHandCursor=!0,this.start_text.events.onInputUp.add(function(){var e=document.getElementById("cc");e.parentNode.removeChild(e),t.state.start("Menu")},this)}},{key:"Text3D",value:function(){var t=new THREE.WebGLRenderer;t.setSize(928,600),t.domElement.id="cc",t.domElement.style="position: absolute; top:8px; left:8px;",document.body.appendChild(t.domElement);var e=new THREE.Scene,a=new THREE.PerspectiveCamera(45,928/600,1,1e4);a.position.set(24,0,40);var i=new THREE.AmbientLight(16777215,.5);e.add(i);var s=new THREE.DirectionalLight(16777215);s.position.set(1,1,1),e.add(s);for(var r=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,2,0],[2,2,0],[3,2,0],[4,2,0],[4,3,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0],[4,0,0],[3,1,0]],o=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,2,0],[2,2,0],[3,2,0],[4,0,0],[4,1,0],[4,2,0],[4,3,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0]],n=[[0,0,0],[0,2,0],[0,3,0],[0,4,0],[1,0,0],[2,0,0],[3,0,0],[1,2,0],[2,2,0],[3,2,0],[4,0,0],[4,1,0],[4,2,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0]],h=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,4,0],[2,4,0],[3,4,0],[1,0,0],[2,0,0],[3,0,0],[4,0,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0],[3,1,0]],l=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,0,0],[2,0,0],[3,0,0],[4,0,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0]],d=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,2,0],[2,2,0],[3,2,0],[4,2,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0],[1,0,0],[2,0,0],[3,0,0],[4,0,0]],y=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0],[1,0,0],[2,0,0],[3,0,0],[4,0,0]],p=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,0,0],[2,0,0],[3,0,0],[4,0,0]],_=[[2,0,0],[0,4,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0],[2,1,0],[2,2,0],[2,3,0]],c=new THREE.Group,m=0;m<h.length;m++){var g=new THREE.BoxGeometry(1,1,1),u=new THREE.MeshStandardMaterial({color:16715760}),b=new THREE.Mesh(g,u);b.position.x=h[m][0],b.position.y=h[m][1],b.position.z=h[m][2],c.add(b)}e.add(c);for(var f=new THREE.Group,v=0;v<l.length;v++){var x=new THREE.BoxGeometry(1,1,1),k=new THREE.MeshStandardMaterial({color:16715760}),w=new THREE.Mesh(x,k);w.position.x=l[v][0]+6,w.position.y=l[v][1],w.position.z=l[v][2],f.add(w)}e.add(f);for(var E=new THREE.Group,M=0;M<d.length;M++){var R=new THREE.BoxGeometry(1,1,1),T=new THREE.MeshStandardMaterial({color:16715760}),P=new THREE.Mesh(R,T);P.position.x=d[M][0]+12,P.position.y=d[M][1],P.position.z=d[M][2],E.add(P)}e.add(E);for(var H=new THREE.Group,S=0;S<n.length;S++){var B=new THREE.BoxGeometry(1,1,1),O=new THREE.MeshStandardMaterial({color:16715760}),G=new THREE.Mesh(B,O);G.position.x=n[S][0]+18,G.position.y=n[S][1],G.position.z=n[S][2],H.add(G)}e.add(H);for(var j=new THREE.Group,L=0;L<_.length;L++){var C=new THREE.BoxGeometry(1,1,1),z=new THREE.MeshStandardMaterial({color:16715760}),A=new THREE.Mesh(C,z);A.position.x=_[L][0]+24,A.position.y=_[L][1],A.position.z=_[L][2],j.add(A)}e.add(j);for(var I=new THREE.Group,F=0;F<y.length;F++){var D=new THREE.BoxGeometry(1,1,1),U=new THREE.MeshStandardMaterial({color:16773135}),Y=new THREE.Mesh(D,U);Y.position.x=y[F][0]+11,Y.position.y=y[F][1]-6,Y.position.z=y[F][2],I.add(Y)}e.add(I);for(var X=new THREE.Group,N=0;N<p.length;N++){var W=new THREE.BoxGeometry(1,1,1),q=new THREE.MeshStandardMaterial({color:16773135}),K=new THREE.Mesh(W,q);K.position.x=p[N][0]+17,K.position.y=p[N][1]-6,K.position.z=p[N][2],X.add(K)}e.add(X);for(var J=new THREE.Group,Q=0;Q<d.length;Q++){var V=new THREE.BoxGeometry(1,1,1),Z=new THREE.MeshStandardMaterial({color:16773135}),$=new THREE.Mesh(V,Z);$.position.x=d[Q][0]+23,$.position.y=d[Q][1]-6,$.position.z=d[Q][2],J.add($)}e.add(J);for(var tt=new THREE.Group,et=0;et<o.length;et++){var at=new THREE.BoxGeometry(1,1,1),it=new THREE.MeshStandardMaterial({color:16773135}),st=new THREE.Mesh(at,it);st.position.x=o[et][0]+29,st.position.y=o[et][1]-6,st.position.z=o[et][2],tt.add(st)}e.add(tt);for(var rt=new THREE.Group,ot=0;ot<r.length;ot++){var nt=new THREE.BoxGeometry(1,1,1),ht=new THREE.MeshStandardMaterial({color:16773135}),lt=new THREE.Mesh(nt,ht);lt.position.x=r[ot][0]+35,lt.position.y=r[ot][1]-6,lt.position.z=r[ot][2],rt.add(lt)}e.add(rt);var dt=function(){var i=new Date;requestAnimationFrame(dt),this.angle+=.01,c.position.x=1*Math.cos(this.angle),f.position.x=1*Math.cos(this.angle),E.position.x=1*Math.cos(this.angle),H.position.x=1*Math.cos(this.angle),j.position.x=1*Math.cos(this.angle),I.position.x=2*Math.cos(this.angle),X.position.x=2*Math.cos(this.angle),J.position.x=2*Math.cos(this.angle),tt.position.x=2*Math.cos(this.angle),rt.position.x=2*Math.cos(this.angle),t.render(e,a),s.position.set(1,Math.cos(i.getSeconds()/100),1)}.bind(this);dt()}}]),e}();e.default=s},132:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}();var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Phaser.State),i(e,[{key:"create",value:function(){this.create_layer_0(),this.create_layer_1(),this.create_layer_2(),this.create_layer_3(),this.create_sign_layer(),this.create_main_layer(),this.create_enemy_layer(),this.create_map(),this.create_layer_4(),this.create_bullet_layer(),this.create_boss_layer(),this.create_minimap_layer(),this.create_board_layer(),this.audio={melo00:this.add.audio("melo00"),melo01:this.add.audio("melo01"),melo02:this.add.audio("melo02"),melo03:this.add.audio("melo03")},this.counter={combo:0,lastType:""},this.tween_down=this.add.tween(this.player).to({angle:180},250),this.tween_up=this.add.tween(this.player).to({angle:0},250),this.destroy_emitter=this.add.group(),this.boss.move_effect=null,this.boss.last_time=0,this.is_boss_state=!1}},{key:"create_layer_0",value:function(){this.layer_0=this.add.image(0,0,"Map02_Layer0"),this.layer_0.fixedToCamera=!0,this.purple=this.add.graphics(0,0),this.purple.beginFill(3342387).drawRect(0,0,928,793),this.purple.alpha=0,this.purple.fixedToCamera=!0}},{key:"create_layer_1",value:function(){this.layer_1=this.add.group(),this.layer_1.create(-99999,800,"Map02_Layer1"),this.layer_1.create(-99999,800,"Map02_Layer1"),this.layer_1.forEach(function(t){t.animations.add("active",[0,1],5,!0),t.animations.play("active")}),this.layer_1.setAll("scale.x",2),this.layer_1.setAll("scale.y",2),this.layer_1.setAll("alpha",.55)}},{key:"create_layer_2",value:function(){this.layer_2=this.add.group(),this.layer_2.create(-99999,800,"Map02_Layer2"),this.layer_2.create(-99999,800,"Map02_Layer2"),this.layer_2.forEach(function(t){t.animations.add("active",[0,1],5,!0),t.animations.play("active")}),this.layer_2.setAll("alpha",.65)}},{key:"create_layer_3",value:function(){this.layer_3=this.add.group(),this.layer_3.create(-99999,800,"Map02_Layer3"),this.layer_3.create(-99999,800,"Map02_Layer3"),this.layer_3.forEach(function(t){t.animations.add("active",[0,1],5,!0),t.animations.play("active")}),this.layer_3.setAll("alpha",.75)}},{key:"create_sign_layer",value:function(){this.sign_layer=this.add.group();var t=4605,e=4325;this.boss_gate={back:this.add.sprite(t+63,e+85,"Boss_Gate03"),down:this.add.sprite(t,e,"Boss_Gate02"),up:this.add.sprite(t,e,"Boss_Gate01"),door:this.add.sprite(t,e,"Boss_Gate00"),front:this.add.sprite(t,e,"Boss_Gate04"),valid:!1},this.physics.arcade.enable(this.boss_gate.door),this.boss_gate.door.body.setSize(46,63,34,52),this.boss_gate.back.anchor.set(.5),this.boss_gate.back.mask=this.add.graphics(t+63,e+85),this.boss_gate.back.mask.anchor.set(.5),this.boss_gate.back.mask.beginFill(0),this.boss_gate.back.mask.drawRect(-42.5,-52.5,85,105),this.boss_gate.up.mask=this.add.graphics(t,e),this.boss_gate.up.mask.beginFill(0),this.boss_gate.up.mask.drawRect(23,39,82,71),this.boss_gate.down.mask=this.add.graphics(t,e),this.boss_gate.down.mask.beginFill(0),this.boss_gate.down.mask.drawRect(13,77,102,71),this.boss_gate.front.visible=!1,this.boss_gate.front_effect=this.add.tween(this.boss_gate.front).to({alpha:.3},750).yoyo(!0).loop(),this.boss_gate.up_effect=this.add.tween(this.boss_gate.up).to({y:e-100},1500),this.boss_gate.down_effect=this.add.tween(this.boss_gate.down).to({y:e+200},1500),this.boss_gate.back_effect=this.add.tween(this.boss_gate.back).to({angle:360},4e3).loop(),t=4355,e=4485,this.boss_gate_sign_bloom=this.add.sprite(t,e,"Boss_Gate_Sign01"),this.boss_gate_sign_bloom.anchor.set(.5),this.boss_gate_sign_bloom.alpha=.7,this.boss_gate_sign_bloom.frame=2,this.boss_gate_sign_bloom.bloom_effect=this.add.tween(this.boss_gate_sign_bloom).to({alpha:.1},750).yoyo(!0).loop().start(),this.boss_gate_sign=this.add.sprite(t,e,"Boss_Gate_Sign01"),this.physics.arcade.enable(this.boss_gate_sign),this.boss_gate_sign.body.immovable=!0,this.boss_gate_sign.anchor.set(.5),this.boss_gate_sign00=this.add.sprite(t,e-42,"Boss_Gate_Sign00"),this.boss_gate_sign00.anchor.set(.5),this.boss_gate_sign00.animations.add("default",[0,1,2],3,!0),this.boss_gate_sign00.play("default"),this.sign_layer.addMultiple([this.boss_gate.back,this.boss_gate.back.mask,this.boss_gate.down,this.boss_gate.down.mask,this.boss_gate.up,this.boss_gate.up.mask,this.boss_gate.door,this.boss_gate.front,this.boss_gate_sign,this.boss_gate_sign00,this.boss_gate_sign_bloom])}},{key:"create_main_layer",value:function(){var t=this;this.main_layer=this.add.group(),this.gravity_0=this.add.sprite(1100,1100,"Gravity00"),this.gravity_1=this.add.sprite(1300,1300,"Gravity01"),this.physics.arcade.enable(this.gravity_0),this.physics.arcade.enable(this.gravity_1),this.gravity_0.anchor.set(.5),this.gravity_1.anchor.set(.5),this.gravity_0.body.setCircle(16),this.gravity_1.body.setCircle(16),this.gravity_0.body.immovable=!0,this.gravity_1.body.immovable=!0,this.gravity_0.animations.add("active",[0,1,2,3,4,5],10,!0),this.gravity_1.animations.add("active",[0,1,2,3,4,5],10,!0),this.mouse_drag=this.add.sprite(0,0,"Mouse_Drag"),this.mouse_drag.anchor.set(.5),this.mouse_drag.scale.set(.5),this.mouse_drag.animations.add("fire",[0,1,2,3,4,5],15,!1),this.mouse_drag.frame=0,this.mouse_drag.alpha=0,this.init_pos=[{x:22,y:25},{x:208,y:12},{x:202,y:150},{x:26,y:172},{x:26,y:172}];Math.floor(4*Math.random());0==this.game.player_choice?(this.player=this.add.sprite(5040,3780,"Player00"),this.player.animations.add("leftwalk",[13,14,15,16,17,18],8,!0),this.player.animations.add("rightwalk",[19,20,21,22,23,24],8,!0),this.player.animations.add("leftjump",[1,2,3,4,5,6],10,!0),this.player.animations.add("rightjump",[7,8,9,10,11,12],10,!0),this.player.animations.add("leftrun",[25,26,27,28,29,30],8,!0),this.player.animations.add("rightrun",[31,32,33,34,35,36],8,!0)):(this.player=this.add.sprite(5040,3780,"Player01"),this.player.animations.add("leftwalk",[1,2,3,4,5,6],8,!0),this.player.animations.add("rightwalk",[7,8,9,10,11,12],8,!0),this.player.animations.add("leftjump",[13,14,15,16,17,18],10,!0),this.player.animations.add("rightjump",[19,20,21,22,23,24],10,!0),this.player.animations.add("leftrun",[25,26,27,28,29,30],8,!0),this.player.animations.add("rightrun",[31,32,33,34,35,36],8,!0)),this.physics.arcade.enable(this.player),this.player.is_touching=!1,this.player.body.bounce.set(.3),this.player.anchor.set(.5),this.player.angle=0,this.player.body.gravity.y=300,this.player.inputEnabled=!0,this.player.events.onInputDown.add(function(e,a){t.game.mouse.is_down||(t.game.mouse.is_down=!0,t.game.mouse.x=a.x,t.game.mouse.y=a.y,e.body.velocity.x=0,e.body.velocity.y=0,t.mouse_drag.alpha=1,t.player.body.gravity.y=t.player.body.gravity.y>0?25:-25)},this),this.player.events.onInputUp.add(function(e,a){t.game.total_life-=1,t.game.mouse.is_down=!1,t.game.time_angle=0,t.game.last_time=t.time.now;var i=t.game.mouse.x-a.x,s=t.game.mouse.y-a.y;e.body.velocity.x=i>0?Math.min(1e3,5*i):Math.max(-1e3,5*i),e.body.velocity.y=s>0?Math.min(1e3,5*s):Math.max(-1e3,5*s),t.mouse_drag.animations.play("fire").onComplete.add(function(){t.mouse_drag.frame=0,t.mouse_drag.alpha=0}),t.player.body.gravity.y=t.player.body.gravity.y>0?300:-300},this),this.camera.follow(this.player,Phaser.Camera.FOLLOW_LOCKON,.1,.1),this.main_layer.addMultiple([this.mouse_drag,this.player,this.gravity_0,this.gravity_1])}},{key:"create_map",value:function(){this.map=this.add.tilemap("map"),this.map.addTilesetImage("tileset"),this.map_layer=this.map.createLayer("Layer 1"),this.map_layer.resizeWorld(),this.map.setCollisionByExclusion(Array.from(Array(13).keys()).map(function(t){return t+58})),this.hidden_block=this.add.sprite(4500,3915,"HiddenBlock"),this.physics.arcade.enable(this.hidden_block)}},{key:"create_layer_4",value:function(){this.layer_4=this.add.group(),this.layer_4.create(-99999,800,"Map02_Layer4"),this.layer_4.create(-99999,800,"Map02_Layer4"),this.layer_4.forEach(function(t){t.animations.add("active",[0,1],5,!0),t.animations.play("active")}),this.layer_4.setAll("alpha",.85),this.layer_4.setAll("scale.y",-1)}},{key:"create_enemy_layer",value:function(){this.enemy_layer=this.add.physicsGroup(Phaser.Physics.ARCADE);for(var t=0;t<4;++t)for(var e=0;e<10*this.game.total_enemies;++e){var a=this.enemy_layer.create(9900*Math.random(),8100*Math.random(),"Enemy0"+t);a.anchor.set(.5),a.angle=180*Math.random()-90}this.enemy_layer.setAll("body.gravity.y",300)}},{key:"create_bullet_layer",value:function(){this.bullet_layer=this.add.group()}},{key:"create_boss_layer",value:function(){this.boss_HP={back:this.add.sprite(.06*this.game.width,this.game.height-20,"HP_Back"),front:this.add.sprite(.06*this.game.width,this.game.height-20,"HP_Front")},this.boss_HP.front.anchor.set(0,.5),this.boss_HP.back.anchor.set(0,.5),this.boss_HP.front.mask=this.add.graphics(.06*this.game.width,this.game.height-20),this.boss_HP.front.mask.beginFill(16777215),this.boss_HP.front.mask.anchor.set(0,.5),this.boss_HP.front.mask.drawRect(0,-15,800,30),this.boss_HP.front.visible=!1,this.boss_HP.back.visible=!1,this.boss=this.add.sprite(this.player.x,this.player.y-250,"Boss01"),this.physics.arcade.enable(this.boss),this.boss.body.setSize(250,200,45,150),this.boss.anchor.set(.5),this.boss.body.immovable=!0,this.boss.animations.add("walk",Array.from(Array(10).keys()),3,!0),this.boss.animations.add("attack",Array.from(Array(6).keys()).map(function(t){return t+11}),8,!1),this.boss.visible=!1,this.boss.hp=100,this.boss_HP.front.fixedToCamera=!0,this.boss_HP.back.fixedToCamera=!0,this.boss_HP.front.mask.fixedToCamera=!0}},{key:"create_minimap_layer",value:function(){this.minimap_layer=this.add.group(),this.minimap=this.add.image(0,0,"Minimap_02",0,this.minimap_layer),this.minimap.alpha=.6,this.minimap.mask=this.add.graphics(0,0,this.minimap_layer),this.minimap.mask.beginFill(),this.minimap.mask.drawRoundedRect(0,0,310,310,9),this.player.dot=this.add.image(0,0,"favicon",0,this.minimap_layer),this.player.dot.anchor.set(.5),this.player.dot.scale.set(.8)}},{key:"create_board_layer",value:function(){this.board_layer=this.add.group(),this.board={Enemy00Ratio:{cover:this.add.sprite(.4*this.game.width,.075*this.game.height,"Enemy00"),text:this.add.text(.45*this.game.width,.05*this.game.height,"0%"),bar_back:this.add.sprite(.425*this.game.width,.075*this.game.height,"Percentage_Back"),bar_front:this.add.sprite(.425*this.game.width,.075*this.game.height,"Percentage_Front"),mask:this.add.graphics(.425*this.game.width,.075*this.game.height),total_clear:0},Enemy01Ratio:{cover:this.add.sprite(.7*this.game.width,.075*this.game.height,"Enemy01"),text:this.add.text(.75*this.game.width,.05*this.game.height,"0%"),bar_back:this.add.sprite(.725*this.game.width,.075*this.game.height,"Percentage_Back"),bar_front:this.add.sprite(.725*this.game.width,.075*this.game.height,"Percentage_Front"),mask:this.add.graphics(.725*this.game.width,.075*this.game.height),total_clear:0},Enemy02Ratio:{cover:this.add.sprite(.45*this.game.width,.145*this.game.height,"Enemy02"),text:this.add.text(.5*this.game.width,.12*this.game.height,"0%"),bar_back:this.add.sprite(.475*this.game.width,.145*this.game.height,"Percentage_Back"),bar_front:this.add.sprite(.475*this.game.width,.145*this.game.height,"Percentage_Front"),mask:this.add.graphics(.475*this.game.width,.145*this.game.height),total_clear:0},Enemy03Ratio:{cover:this.add.sprite(.75*this.game.width,.145*this.game.height,"Enemy03"),text:this.add.text(.8*this.game.width,.12*this.game.height,"0%"),bar_back:this.add.sprite(.775*this.game.width,.145*this.game.height,"Percentage_Back"),bar_front:this.add.sprite(.775*this.game.width,.145*this.game.height,"Percentage_Front"),mask:this.add.graphics(.775*this.game.width,.145*this.game.height),total_clear:0}};for(var t=0;t<this.game.settings.total_enemy_types;++t)this.board["Enemy0"+t+"Ratio"].cover.anchor.set(.5),this.board["Enemy0"+t+"Ratio"].text.anchor.set(.5),this.board["Enemy0"+t+"Ratio"].text.fontSize=20,this.board["Enemy0"+t+"Ratio"].text.fill="#fff",this.board["Enemy0"+t+"Ratio"].bar_back.anchor.set(0,.5),this.board["Enemy0"+t+"Ratio"].bar_front.anchor.set(0,.5),this.board["Enemy0"+t+"Ratio"].mask.anchor.set(0,.5),this.board["Enemy0"+t+"Ratio"].mask.beginFill(16777215),this.board["Enemy0"+t+"Ratio"].mask.drawRect(0,-20,150,40),this.board["Enemy0"+t+"Ratio"].bar_front.mask=this.board["Enemy0"+t+"Ratio"].mask,this.board_layer.addMultiple([this.board["Enemy0"+t+"Ratio"].cover,this.board["Enemy0"+t+"Ratio"].text,this.board["Enemy0"+t+"Ratio"].bar_back,this.board["Enemy0"+t+"Ratio"].bar_front,this.board["Enemy0"+t+"Ratio"].mask]);this.board.Enemy00Ratio.cover.animations.add("kill",[1,2,3,4,5],8,!1),this.board.Enemy01Ratio.cover.animations.add("kill",[0,1,2,3],8,!1),this.board.Enemy02Ratio.cover.animations.add("kill",[0,1,2,3,4],8,!1),this.board.Enemy03Ratio.cover.animations.add("kill",[0,1,2,3,4,5],8,!1),this.life_icon=this.add.image(10,10,"LifeIcon"),this.life_icon.scale.set(.7),this.life_text=this.add.bitmapText(70,15,"carrier_command","x"+this.game.total_life),this.life_text.scale.set(.6),this.life_text.tint=2228224,this.board_layer.addMultiple([this.life_icon,this.life_text]),this.board_layer.setAll("fixedToCamera",!0)}},{key:"update",value:function(){var t=this,e=this.time.now;if(this.is_boss_state){if(!this.game.mouse.is_down){var a=!0,i=!1,s=void 0;try{for(var r,o=this.bullet_layer.children[Symbol.iterator]();!(a=(r=o.next()).done);a=!0){var n=r.value;this.board["Enemy"+n.key.substring(5,7)+"Ratio"].total_clear>=this.game.total_enemies?(this.physics.arcade.overlap(this.player,n,this.handle_player_hit.bind(this)),this.physics.arcade.overlap(this.player,n,this.handle_destroy_bullet.bind(this))):this.physics.arcade.collide(this.player,n,function(t,e){return e.hit=!0})}}catch(t){i=!0,s=t}finally{try{!a&&o.return&&o.return()}finally{if(i)throw s}}}this.physics.arcade.overlap(this.boss,this.bullet_layer,this.handle_boss_hit.bind(this))}var h=!0,l=!1,d=void 0;try{for(var y,p=this.enemy_layer.children[Symbol.iterator]();!(h=(y=p.next()).done);h=!0){var _=y.value;this.board["Enemy"+_.key.substring(5,7)+"Ratio"].total_clear>=this.game.total_enemies?this.physics.arcade.collide(this.player,_,this.handle_obstacle_hit.bind(this)):this.physics.arcade.overlap(this.player,_,this.handle_enemy_hit.bind(this))}}catch(t){l=!0,d=t}finally{try{!h&&p.return&&p.return()}finally{if(l)throw d}}this.physics.arcade.collide(this.player,[this.main_layer,this.map_layer,this.map],this.handle_gravity.bind(this)),this.physics.arcade.collide(this.enemy_layer,[this.map_layer,this.map]),this.physics.arcade.collide(this.enemy_layer),this.physics.arcade.collide(this.player,this.boss_gate_sign,this.handle_sign.bind(this)),this.physics.arcade.overlap(this.player,this.boss_gate.door,this.handle_sign.bind(this)),this.physics.arcade.overlap(this.player,this.bullet_layer,this.handle_player_hit.bind(this)),this.physics.arcade.overlap(this.player,this.boss,this.handle_player_hit.bind(this)),this.physics.arcade.overlap(this.hidden_block,this.player,function(e){t.add.tween(t.hidden_block).to({alpha:.5},80).start(),t.hidden_block.last_overlapped=t.time.now+80}),this.hidden_block.last_overlapped&&this.time.now>this.hidden_block.last_overlapped&&this.add.tween(this.hidden_block).to({alpha:1},80).start();var c=this.math.angleBetween(this.input.activePointer.x,this.input.activePointer.y,this.player.body.position.x+this.player.offsetX-this.camera.x,this.player.body.position.y+this.player.offsetY-this.camera.y),m=Math.min(30,.25*this.math.distance(this.input.activePointer.x,this.input.activePointer.y,this.player.body.position.x+this.player.offsetX-this.camera.x,this.player.body.position.y+this.player.offsetY-this.camera.y));this.game.mouse.is_down&&this.input.activePointer.isDown&&(this.game.mouse.x<this.input.activePointer.x?this.player.animations.play(this.player.body.gravity.y<0?"rightjump":"leftjump"):this.player.animations.play(this.player.body.gravity.y<0?"leftjump":"rightjump"),this.mouse_drag.x=this.player.body.position.x+this.player.offsetX-Math.cos(c)*m*1.8,this.mouse_drag.y=this.player.body.position.y+this.player.offsetY-Math.sin(c)*m*1.8,this.mouse_drag.scale.set(.5*m*.1,Math.max(.05*m*.5,.5)),this.mouse_drag.rotation=c),this.game.mouse.is_down||(this.game.time_angle=this.game.time_angle>90?90:this.game.time_angle+5e-5*(this.game.last_time-e),this.game.last_time=e),this.player.body.velocity.x<8&&this.player.body.velocity.x>-8&&(this.player.body.velocity.x=0),this.player.body.velocity.x<0?(this.player.animations.play(this.player.body.gravity.y<0?"rightrun":"leftrun"),this.player.dot.scale.x=-.8):this.player.body.velocity.x>0?(this.player.animations.play(this.player.body.gravity.y<0?"leftrun":"rightrun"),this.player.dot.scale.x=.8):this.game.mouse.is_down||(this.player.frame=0,this.player.animations.stop()),this.player.body.gravity.y<0?(this.gravity_1.animations.play("active"),this.gravity_0.frame=0,this.gravity_0.animations.stop(),this.player.dot.scale.y=-.8,0==this.player.angle&&this.tween_down.start()):(this.gravity_0.animations.play("active"),this.gravity_1.frame=0,this.gravity_1.animations.stop(),this.player.dot.scale.y=.8,0!=this.player.angle&&this.tween_up.start());for(var g=1;g<=4;++g)-99999===this["layer_"+g].getChildAt(0).x&&(this["layer_"+g].getChildAt(0).x=this.camera.x);-99999===this.layer_1.getChildAt(1).x&&(this.layer_1.getChildAt(1).x=this.camera.x+1900);for(var u=2;u<=4;++u)-99999===this["layer_"+u].getChildAt(1).x&&(this["layer_"+u].getChildAt(1).x=this.camera.x+950);var b=!0,f=!1,v=void 0;try{for(var x,k=this.layer_1.children[Symbol.iterator]();!(b=(x=k.next()).done);b=!0){var w=x.value;w.x-=5e-4*this.player.body.velocity.x,w.x<this.camera.x-1900?w.x=this.camera.x+1900:w.x>this.camera.x+1900&&(w.x=this.camera.x-1900),w.y=this.camera.y-793}}catch(t){f=!0,v=t}finally{try{!b&&k.return&&k.return()}finally{if(f)throw v}}var E=!0,M=!1,R=void 0;try{for(var T,P=this.layer_2.children[Symbol.iterator]();!(E=(T=P.next()).done);E=!0){var H=T.value;H.x-=.001*this.player.body.velocity.x,H.x<this.camera.x-950?H.x=this.camera.x+950:H.x>this.camera.x+950&&(H.x=this.camera.x-950),H.y=this.camera.y}}catch(t){M=!0,R=t}finally{try{!E&&P.return&&P.return()}finally{if(M)throw R}}var S=!0,B=!1,O=void 0;try{for(var G,j=this.layer_3.children[Symbol.iterator]();!(S=(G=j.next()).done);S=!0){var L=G.value;L.x-=.005*this.player.body.velocity.x,L.x<this.camera.x-950?L.x=this.camera.x+950:L.x>this.camera.x+950&&(L.x=this.camera.x-950),L.y=this.camera.y+40}}catch(t){B=!0,O=t}finally{try{!S&&j.return&&j.return()}finally{if(B)throw O}}var C=!0,z=!1,A=void 0;try{for(var I,F=this.layer_4.children[Symbol.iterator]();!(C=(I=F.next()).done);C=!0){var D=I.value;D.x-=.01*this.player.body.velocity.x,D.x<this.camera.x-950?D.x=this.camera.x+950:D.x>this.camera.x+950&&(D.x=this.camera.x-950),D.y=this.camera.y+770}}catch(t){z=!0,A=t}finally{try{!C&&F.return&&F.return()}finally{if(z)throw A}}this.minimap_layer.x=this.camera.x+5,this.minimap_layer.y=this.camera.y+5;var U=-this.player.x/9900*930+160,Y=-this.player.y/9900*930+160;this.minimap.x=U>0?0:U<-620?-620:U,this.minimap.y=Y>0?0:Y<-451?-451:Y,this.player.dot.x=U>0?160-U:U<-620?-460-U:160,this.player.dot.y=Y>0?160-Y:Y<-451?-291-Y:160;for(var X=0;X<this.game.settings.total_enemy_types;++X){var N=Math.min(this.board["Enemy0"+X+"Ratio"].total_clear,this.game.total_enemies)/this.game.total_enemies;this.board["Enemy0"+X+"Ratio"].text.text=Math.round(100*N)+"%",this.board["Enemy0"+X+"Ratio"].text.x=this.board["Enemy0"+X+"Ratio"].cover.x+32.5+150*N,this.board["Enemy0"+X+"Ratio"].mask.scale.set(N,1)}this.is_boss_state&&(this.boss.hp<.01&&this.state.start("Clear"),this.boss_HP.front.mask.scale.set(this.boss.hp/100,1),this.boss.last_time+5e3<e&&(this.player.x>this.boss.x?(this.boss.animations.play("walk"),this.boss.scale.set(-1,1)):(this.boss.animations.play("walk"),this.boss.scale.set(1,1)),this.boss.last_time=e,this.boss.move_effect&&(this.boss.move_effect.stop(),this.tweens.remove(this.boss.move_effect)),this.boss.move_effect=this.add.tween(this.boss).to({x:this.player.x,y:this.player.y-250},2e3).start(),this.boss.move_effect.onComplete.add(function(){t.tweens.remove(t.boss.move_effect),t.boss.animations.play("attack"),setTimeout(function(){t.boss.frame=2},1e3),t.time.events.repeat(.75*Phaser.Timer.SECOND,3,function(){for(var e=0;e<6;++e){var a=t.add.sprite(t.boss.x+(e<3?136:-145),t.boss.y+52,"Enemy0"+Math.floor(3.99*Math.random()),0,t.bullet_layer);a.angle=180*Math.random()-90,t.physics.arcade.enable(a),a.body.mass=.25,a.body.bounce.set(1),a.body.velocity.x=80*(e-(e<3?1:4)),a.body.velocity.y=200,a.hit=!1}},t),t.world.bringToTop(t.bullet_layer)})),this.bullet_layer.forEach(function(e){(e.x<t.camera.x||e.x>t.camera.x+928||e.y<t.camera.y||e.y>t.camera.y+793)&&e.destroy()})),this.life_text.text="x"+this.game.total_life,this.player.body.touching.none&&(this.player.is_touching=!1),this.game.total_life<.1&&this.state.start("Over")}},{key:"handle_gravity",value:function(t,e){"Gravity00"==e.key?(t.body.gravity.y=300,this.enemy_layer.setAll("body.gravity.y",300),this.m_Tween&&this.tweens.remove(this.m_Tween)):"Gravity01"==e.key&&(t.body.gravity.y=-300,this.enemy_layer.setAll("body.gravity.y",-300),this.m_Tween&&this.tweens.remove(this.m_Tween))}},{key:"handle_enemy_hit",value:function(t,e){var a=this;e.body.enable=!1,this.board[e.key+"Ratio"].cover.animations.play("kill");var i=this.add.tween(e.scale).to({x:1.75,y:1.75},175).start();i.onComplete.add(function(){a.counter.lastType==e.key?(a.counter.combo+=1,a.audio["melo0"+a.counter.combo%3].play()):(a.counter.combo=1,a.counter.lastType=e.key,a.audio.melo00.play()),a.tweens.remove(i);var t=a.counter.combo/5,s=a.add.emitter(e.x,e.y,t);s.gravity=0,s.makeParticles("Particle"+e.key.substring(5,7)),s.setXSpeed(-150,150),s.setYSpeed(-150,150),s.setScale(1,.5,1,.5,800),s.start(!0,800,null,t),a.destroy_emitter.add(s),a.enemy_layer.remove(e),e.destroy(),setTimeout(function(){s.forEach(function(t){var i=a.add.tween(t).to({x:a.board["Enemy"+e.key.substring(5,7)+"Ratio"].cover.x,y:a.board["Enemy"+e.key.substring(5,7)+"Ratio"].cover.y},400).start();i.onComplete.add(function(){a.tweens.remove(i)})})},200),setTimeout(function(){a.destroy_emitter.remove(s),s.destroy()},600)},this),this.board["Enemy"+e.key.substring(5,7)+"Ratio"].total_clear+=1,this.board["Enemy"+e.key.substring(5,7)+"Ratio"].total_clear>this.game.total_enemies-1&&this.enemy_layer.forEach(function(t){t.key===e.key&&(t.body.immovable=!0,t.body.moves=!1)})}},{key:"handle_obstacle_hit",value:function(t,e){t.is_touching||(this.game.total_life-=2,t.is_touching=!0)}},{key:"handle_sign",value:function(t,e){var a=this;"Boss_Gate_Sign01"==e.key&&e.body.touching.up?(this.boss_gate_sign_bloom.bloom_effect.stop(),this.boss_gate_sign_bloom.destroy(),e.frame=1,e.body.enable=!1,this.boss_gate.front.visible=!0,this.camera.shake(.0035,800),this.boss_gate.up_effect.start(),this.boss_gate.down_effect.start(),this.boss_gate.back_effect.start(),this.boss_gate.up_effect.onComplete.add(function(){a.boss_gate.valid=!0,a.boss_gate.up.mask.destroy(),a.boss_gate.up.destroy(),a.boss_gate.down.mask.destroy(),a.boss_gate.down.destroy()}),this.boss_gate.front_effect.start(),this.add.tween(this.purple).to({alpha:.6},1e3).start()):this.boss_gate.valid&&"Boss_Gate00"==e.key&&(this.is_boss_state=!0,this.boss.visible=!0,this.boss.animations.play("walk"),this.enemy_layer.removeAll(),this.sign_layer.removeAll(),this.boss_HP.front.visible=!0,this.boss_HP.front.mask.visible=!0,this.boss_HP.back.visible=!0)}},{key:"handle_boss_hit",value:function(t,e,a){e.hit&&(t.hp-=5,e.destroy())}},{key:"handle_player_hit",value:function(t){t.is_touching||(this.game.total_life-=2,t.is_touching=!0)}},{key:"handle_destroy_bullet",value:function(t,e){var a=this;e.body.enable=!1,this.board[e.key+"Ratio"].cover.animations.play("kill");var i=this.add.tween(e.scale).to({x:1.75,y:1.75},175).start();i.onComplete.add(function(){a.counter.lastType==e.key?(a.counter.combo+=1,a.audio["melo0"+a.counter.combo%3].play()):(a.counter.combo=1,a.counter.lastType=e.key,a.audio.melo00.play()),a.tweens.remove(i),a.bullet_layer.remove(e),e.destroy()},this)}}]),e}();e.default=s},133:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}();var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Phaser.State),i(e,[{key:"create",value:function(){this.create_layers(),this.init_sign_layer(),this.init_obstacle_layer(),this.init_enemy_layer(),this.init_front_layer(),this.init_target_layer(),this.init_border_layer(),this.init_main_layer(),this.init_board(),this.audio={melo00:this.add.audio("melo00"),melo01:this.add.audio("melo01"),melo02:this.add.audio("melo02"),melo03:this.add.audio("melo03")},this.counter={combo:0,lastType:""},this.tween_down=this.add.tween(this.player).to({angle:180},250),this.tween_up=this.add.tween(this.player).to({angle:0},250),this.destroy_emitter=this.add.group(),this.boss.move_effect=null,this.boss.last_time=0,this.is_boss_state=!1,this.bullets=[]}},{key:"create_layers",value:function(){this.back_layer_2=this.add.group(),this.back_layer_1=this.add.group(),this.back_layer_0=this.add.group(),this.enemy_layer=this.add.physicsGroup(Phaser.Physics.ARCADE),this.bullet_layer=this.add.group(),this.obstacle_layer=this.add.group(),this.sign_layer=this.add.group(),this.border_layer=this.add.group(),this.main_layer=this.add.group(),this.boss_layer=this.add.group(),this.front_layer=this.add.group(),this.target_layer=this.add.group()}},{key:"init_sign_layer",value:function(){this.sign_layer_pos=[800,900],this.boss_gate={back:this.add.sprite(963,585,"Boss_Gate03"),down:this.add.sprite(900,500,"Boss_Gate02"),up:this.add.sprite(900,500,"Boss_Gate01"),door:this.add.sprite(900,500,"Boss_Gate00"),front:this.add.sprite(900,500,"Boss_Gate04"),valid:!1},this.physics.arcade.enable(this.boss_gate.door),this.boss_gate.door.body.setSize(46,63,34,52),this.boss_gate.back.anchor.set(.5),this.boss_gate.back.mask=this.add.graphics(963,585),this.boss_gate.back.mask.anchor.set(.5),this.boss_gate.back.mask.beginFill(0),this.boss_gate.back.mask.drawRect(-42.5,-52.5,85,105),this.boss_gate.up.mask=this.add.graphics(900,500),this.boss_gate.up.mask.beginFill(0),this.boss_gate.up.mask.drawRect(23,39,82,71),this.boss_gate.down.mask=this.add.graphics(900,500),this.boss_gate.down.mask.beginFill(0),this.boss_gate.down.mask.drawRect(13,77,102,71),this.boss_gate.front.visible=!1,this.boss_gate.front_effect=this.add.tween(this.boss_gate.front).to({alpha:.3},750).yoyo(!0).loop(),this.boss_gate.up_effect=this.add.tween(this.boss_gate.up).to({y:400},1500),this.boss_gate.down_effect=this.add.tween(this.boss_gate.down).to({y:700},1500),this.boss_gate.back_effect=this.add.tween(this.boss_gate.back).to({angle:360},4e3).loop(),this.boss_gate_sign_bloom=this.add.sprite(800,this.game.settings.border_bottom_offset_y-18,"Boss_Gate_Sign01"),this.boss_gate_sign_bloom.anchor.set(.5),this.boss_gate_sign_bloom.alpha=.7,this.boss_gate_sign_bloom.frame=2,this.boss_gate_sign_bloom.bloom_effect=this.add.tween(this.boss_gate_sign_bloom).to({alpha:.1},750).yoyo(!0).loop().start(),this.boss_gate_sign=this.add.sprite(800,this.game.settings.border_bottom_offset_y-18,"Boss_Gate_Sign01"),this.physics.arcade.enable(this.boss_gate_sign),this.boss_gate_sign.body.immovable=!0,this.boss_gate_sign.anchor.set(.5),this.boss_gate_sign00=this.add.sprite(800,this.game.settings.border_bottom_offset_y-60,"Boss_Gate_Sign00"),this.boss_gate_sign00.anchor.set(.5),this.boss_gate_sign00.animations.add("default",[0,1,2],3,!0),this.boss_gate_sign00.play("default"),this.sign_layer.addMultiple([this.boss_gate.back,this.boss_gate.back.mask,this.boss_gate.down,this.boss_gate.down.mask,this.boss_gate.up,this.boss_gate.up.mask,this.boss_gate.door,this.boss_gate.front,this.boss_gate_sign,this.boss_gate_sign00,this.boss_gate_sign_bloom])}},{key:"init_obstacle_layer",value:function(){this.obstacle_layer_pos=[],this.obstacles=[];for(var t=0;t<20;++t){var e=Math.random(),a=this.create_unique_value(1e4,this.sign_layer_pos);this.obstacle_layer_pos.push(a);var i=void 0;e>.5?(i=this.add.sprite(a,593.8,"Obstacle00")).scale.set(1.2):i=this.add.sprite(a,462,"Obstacle01"),this.physics.arcade.enable(i),i.body.immovable=!0,this.obstacles.push(i),this.obstacle_layer.add(i)}}},{key:"init_enemy_layer",value:function(){for(var t=0;t<4;++t)for(var e=0;e<this.game.total_enemies;++e){var a=this.create_unique_value(4e3,this.sign_layer_pos.concat(this.obstacle_layer_pos)),i=this.enemy_layer.create(a,t<2?150*Math.random()+500:600,"Enemy0"+t);i.anchor.set(.5),i.scale.set(1.2),i.angle=180*Math.random()}this.enemy_layer.setAll("body.gravity.y",300)}},{key:"init_front_layer",value:function(){this.front_layer.create(0,0,"Map01_Layer00"),this.front_layer.create(this.game.width,0,"Map01_Layer00")}},{key:"init_target_layer",value:function(){var t=this;this.target_large=this.add.sprite(0,0,"Target_Large00"),this.target_large.anchor.set(.5),this.add.tween(this.target_large.scale).to({x:.8,y:.8},4e3,Phaser.Easing.Linear.None).yoyo(!0).loop().start(),this.add.tween(this.target_large).to({angle:360},5e3).loop().start(),this.target_large.inputEnabled=!0,this.target_large.events.onInputDown.add(function(e,a){t.game.mouse.is_down||(t.game.mouse.is_down=!0,t.game.mouse.x=a.x,t.game.mouse.y=a.y,t.player.body.velocity.x=0,t.player.body.velocity.y=0,t.mouse_drag.alpha=1,t.player.body.gravity.y=t.player.body.gravity.y>0?25:-25)},this),this.target_large.events.onInputUp.add(function(e,a){t.game.total_life-=1,t.game.mouse.is_down=!1,t.game.time_angle=0,t.game.last_time=t.time.now;var i=t.game.mouse.x-a.x,s=t.game.mouse.y-a.y;t.player.body.velocity.x=i>0?Math.min(1e3,5*i):Math.max(-1e3,5*i),t.player.body.velocity.y=s>0?Math.min(1e3,5*s):Math.max(-1e3,5*s),t.mouse_drag.animations.play("fire").onComplete.add(function(){t.mouse_drag.frame=0,t.mouse_drag.alpha=0}),t.player.body.gravity.y=t.player.body.gravity.y>0?300:-300},this),this.boss_HP={front:this.add.sprite(.06*this.game.width,this.game.height-20,"HP_Front"),back:this.add.sprite(.06*this.game.width,this.game.height-20,"HP_Back")},this.boss_HP.front.anchor.set(0,.5),this.boss_HP.back.anchor.set(0,.5),this.boss_HP.front.mask=this.add.graphics(.06*this.game.width,this.game.height-20),this.boss_HP.front.mask.beginFill(16777215),this.boss_HP.front.mask.anchor.set(0,.5),this.boss_HP.front.mask.drawRect(0,-15,800,30),this.boss_HP.front.visible=!1,this.boss_HP.back.visible=!1,this.target_layer.addMultiple([this.target_large,this.boss_HP.back,this.boss_HP.front,this.boss_HP.front.mask])}},{key:"init_border_layer",value:function(){this.border_layer.enableBody=!0;for(var t=this.game.map1_boundary.left-400;t<this.game.map1_boundary.right;t+=900)this.border_layer.create(t,this.game.settings.border_bottom_offset_y,"Map01_Layer01"),this.border_layer.create(t,this.game.settings.border_top_offset_y,"Map01_Layer02");this.boundary_RH=this.add.sprite(this.game.map1_boundary.right,458,"Boundary"),this.boundary_LH=this.add.sprite(this.game.map1_boundary.left,458,"Boundary"),this.boundary_LH.scale.set(-1,1),this.border_layer.addMultiple([this.boundary_RH,this.boundary_LH]),this.border_layer.setAll("body.immovable",!0)}},{key:"init_main_layer",value:function(){this.gravity_0=this.add.sprite(.25*this.game.width,500,"Gravity00"),this.gravity_1=this.add.sprite(.75*this.game.width,700,"Gravity01"),this.physics.arcade.enable(this.gravity_0),this.physics.arcade.enable(this.gravity_1),this.gravity_0.anchor.set(.5),this.gravity_1.anchor.set(.5),this.gravity_0.body.setCircle(16),this.gravity_1.body.setCircle(16),this.gravity_0.body.immovable=!0,this.gravity_1.body.immovable=!0,this.gravity_0.animations.add("active",[0,1,2,3,4,5],10,!0),this.gravity_1.animations.add("active",[0,1,2,3,4,5],10,!0),this.mouse_drag=this.add.sprite(0,0,"Mouse_Drag"),this.mouse_drag.anchor.set(.5),this.mouse_drag.scale.set(.5),this.mouse_drag.animations.add("fire",[0,1,2,3,4,5],15,!1),this.mouse_drag.frame=0,this.mouse_drag.alpha=0,0==this.game.player_choice?(this.player=this.add.sprite(.5*this.game.width,500,"Player00"),this.player.animations.add("leftwalk",[13,14,15,16,17,18],8,!0),this.player.animations.add("rightwalk",[19,20,21,22,23,24],8,!0),this.player.animations.add("leftjump",[1,2,3,4,5,6],10,!0),this.player.animations.add("rightjump",[7,8,9,10,11,12],10,!0),this.player.animations.add("leftrun",[25,26,27,28,29,30],8,!0),this.player.animations.add("rightrun",[31,32,33,34,35,36],8,!0)):(this.player=this.add.sprite(.5*this.game.width,500,"Player01"),this.player.animations.add("leftwalk",[1,2,3,4,5,6],8,!0),this.player.animations.add("rightwalk",[7,8,9,10,11,12],8,!0),this.player.animations.add("leftjump",[13,14,15,16,17,18],10,!0),this.player.animations.add("rightjump",[19,20,21,22,23,24],10,!0),this.player.animations.add("leftrun",[25,26,27,28,29,30],8,!0),this.player.animations.add("rightrun",[31,32,33,34,35,36],8,!0)),this.physics.arcade.enable(this.player),this.player.is_touching=!1,this.player.body.bounce.set(.3),this.player.anchor.set(.5),this.player.angle=0,this.player.body.gravity.y=300,this.main_layer.addMultiple([this.mouse_drag,this.player,this.gravity_0,this.gravity_1]),this.back_layer_0.create(0,0,"Map01_Layer03"),this.back_layer_0.create(this.game.width,0,"Map01_Layer03"),this.back_layer_1.create(0,0,"Map01_Layer04"),this.back_layer_1.create(this.game.width,0,"Map01_Layer04"),this.back_layer_2.create(0,0,"Map01_Layer05"),this.boss=this.add.sprite(.5*this.game.width,200,"Boss00"),this.physics.arcade.enable(this.boss),this.boss.body.setSize(150,200,125,100),this.boss.anchor.set(.5),this.boss.body.immovable=!0,this.boss.animations.add("walk",[0,1],3,!0),this.boss.animations.add("attack",[2,3,4],8,!1),this.boss.visible=!1,this.add.tween(this.boss).to({y:250},1e3).yoyo(!0).loop().start(),this.boss_layer.add(this.boss),this.boss.hp=100}},{key:"init_board",value:function(){this.board={Enemy00Ratio:{cover:this.add.sprite(.4*this.game.width,.075*this.game.height,"Enemy00"),text:this.add.text(.45*this.game.width,.05*this.game.height,"0%"),bar_back:this.add.sprite(.425*this.game.width,.075*this.game.height,"Percentage_Back"),bar_front:this.add.sprite(.425*this.game.width,.075*this.game.height,"Percentage_Front"),mask:this.add.graphics(.425*this.game.width,.075*this.game.height),total_clear:0},Enemy01Ratio:{cover:this.add.sprite(.7*this.game.width,.075*this.game.height,"Enemy01"),text:this.add.text(.75*this.game.width,.05*this.game.height,"0%"),bar_back:this.add.sprite(.725*this.game.width,.075*this.game.height,"Percentage_Back"),bar_front:this.add.sprite(.725*this.game.width,.075*this.game.height,"Percentage_Front"),mask:this.add.graphics(.725*this.game.width,.075*this.game.height),total_clear:0},Enemy02Ratio:{cover:this.add.sprite(.45*this.game.width,.145*this.game.height,"Enemy02"),text:this.add.text(.5*this.game.width,.12*this.game.height,"0%"),bar_back:this.add.sprite(.475*this.game.width,.145*this.game.height,"Percentage_Back"),bar_front:this.add.sprite(.475*this.game.width,.145*this.game.height,"Percentage_Front"),mask:this.add.graphics(.475*this.game.width,.145*this.game.height),total_clear:0},Enemy03Ratio:{cover:this.add.sprite(.75*this.game.width,.145*this.game.height,"Enemy03"),text:this.add.text(.8*this.game.width,.12*this.game.height,"0%"),bar_back:this.add.sprite(.775*this.game.width,.145*this.game.height,"Percentage_Back"),bar_front:this.add.sprite(.775*this.game.width,.145*this.game.height,"Percentage_Front"),mask:this.add.graphics(.775*this.game.width,.145*this.game.height),total_clear:0}};for(var t=0;t<this.game.settings.total_enemy_types;++t)this.board["Enemy0"+t+"Ratio"].cover.anchor.set(.5),this.board["Enemy0"+t+"Ratio"].text.anchor.set(.5),this.board["Enemy0"+t+"Ratio"].text.fontSize=20,this.board["Enemy0"+t+"Ratio"].text.fill="#fff",this.board["Enemy0"+t+"Ratio"].bar_back.anchor.set(0,.5),this.board["Enemy0"+t+"Ratio"].bar_front.anchor.set(0,.5),this.board["Enemy0"+t+"Ratio"].mask.anchor.set(0,.5),this.board["Enemy0"+t+"Ratio"].mask.beginFill(16777215),this.board["Enemy0"+t+"Ratio"].mask.drawRect(0,-20,150,40),this.board["Enemy0"+t+"Ratio"].bar_front.mask=this.board["Enemy0"+t+"Ratio"].mask;this.board.Enemy00Ratio.cover.animations.add("kill",[1,2,3,4,5],8,!1),this.board.Enemy01Ratio.cover.animations.add("kill",[0,1,2,3],8,!1),this.board.Enemy02Ratio.cover.animations.add("kill",[0,1,2,3,4],8,!1),this.board.Enemy03Ratio.cover.animations.add("kill",[0,1,2,3,4,5],8,!1),this.life_icon=this.add.image(.045*this.game.width,.035*this.game.height,"LifeIcon"),this.life_icon.anchor.set(.5),this.life_text=this.add.bitmapText(.15*this.game.width,.035*this.game.height,"carrier_command","x"+this.game.total_life),this.life_text.anchor.set(.5)}},{key:"check_duplicate",value:function(t,e){var a=!0,i=!1,s=void 0;try{for(var r,o=e[Symbol.iterator]();!(a=(r=o.next()).done);a=!0){var n=r.value;if(t>n-100&&t<n+100)return!0}}catch(t){i=!0,s=t}finally{try{!a&&o.return&&o.return()}finally{if(i)throw s}}return!1}},{key:"create_unique_value",value:function(t,e){var a=void 0;do{a=(Math.random()-.5)*t}while(this.check_duplicate(a,e));return a}},{key:"update",value:function(){var t=this,e=this.time.now;this.is_boss_state&&(0==this.game.mouse.is_down&&this.physics.arcade.collide(this.player,this.bullet_layer,function(t,e){return e.hit=!0}),this.physics.arcade.overlap(this.boss,this.bullet_layer,this.handle_boss_hit.bind(this)));var a=!0,i=!1,s=void 0;try{for(var r,o=this.enemy_layer.children[Symbol.iterator]();!(a=(r=o.next()).done);a=!0){var n=r.value;this.board["Enemy"+n.key.substring(5,7)+"Ratio"].total_clear>=this.game.total_enemies?this.physics.arcade.collide(this.player,n,this.handle_obstacle_hit.bind(this)):this.physics.arcade.overlap(this.player,n,this.handle_enemy_hit.bind(this))}}catch(t){i=!0,s=t}finally{try{!a&&o.return&&o.return()}finally{if(i)throw s}}this.physics.arcade.collide(this.enemy_layer,[this.enemy_layer,this.border_layer,this.obstacle_layer,this.gravity_0,this.gravity_1]),this.physics.arcade.collide(this.player,[this.border_layer,this.obstacle_layer,this.main_layer],this.handle_gravity.bind(this)),this.physics.arcade.collide(this.player,this.boss_gate_sign,this.handle_sign.bind(this)),this.physics.arcade.overlap(this.player,this.boss_gate.door,this.handle_sign.bind(this));var h=this.math.angleBetween(this.input.activePointer.x,this.input.activePointer.y,this.player.body.position.x+this.player.offsetX,this.player.body.position.y+this.player.offsetY),l=Math.min(30,.25*this.math.distance(this.input.activePointer.x,this.input.activePointer.y,this.player.body.position.x+this.player.offsetX,this.player.body.position.y+this.player.offsetY));if(this.game.mouse.is_down&&this.input.activePointer.isDown&&(this.game.mouse.x<this.input.activePointer.x?this.player.animations.play(this.player.body.gravity.y<0?"rightjump":"leftjump"):this.player.animations.play(this.player.body.gravity.y<0?"leftjump":"rightjump"),this.mouse_drag.x=this.player.body.position.x+this.player.offsetX-Math.cos(h)*l*1.8,this.mouse_drag.y=this.player.body.position.y+this.player.offsetY-Math.sin(h)*l*1.8,this.mouse_drag.scale.set(.5*l*.1,Math.max(.05*l*.5,.5)),this.mouse_drag.rotation=h),this.game.mouse.is_down||(this.game.time_angle=this.game.time_angle>90?90:this.game.time_angle+5e-5*(this.game.last_time-e),this.game.last_time=e),this.target_large.x=this.player.body.position.x+this.player.offsetX,this.target_large.y=this.player.body.position.y+this.player.offsetY,this.player.body.x>this.game.settings.active_right_bounder&&this.boundary_RH.body.x>this.game.width-50){var d=!0,y=!1,p=void 0;try{for(var _,c=this.back_layer_0.children[Symbol.iterator]();!(d=(_=c.next()).done);d=!0){var m=_.value;m.x-=.01*this.player.body.velocity.x,m.x<-this.game.width&&(m.x+=2*this.game.width)}}catch(t){y=!0,p=t}finally{try{!d&&c.return&&c.return()}finally{if(y)throw p}}var g=!0,u=!1,b=void 0;try{for(var f,v=this.back_layer_1.children[Symbol.iterator]();!(g=(f=v.next()).done);g=!0){var x=f.value;x.x-=.005*this.player.body.velocity.x,x.x<-this.game.width&&(x.x+=2*this.game.width)}}catch(t){u=!0,b=t}finally{try{!g&&v.return&&v.return()}finally{if(u)throw b}}var k=!0,w=!1,E=void 0;try{for(var M,R=this.front_layer.children[Symbol.iterator]();!(k=(M=R.next()).done);k=!0){var T=M.value;T.x-=.02*this.player.body.velocity.x,T.x<-this.game.width&&(T.x+=2*this.game.width)}}catch(t){w=!0,E=t}finally{try{!k&&R.return&&R.return()}finally{if(w)throw E}}var P=!0,H=!1,S=void 0;try{for(var B,O=this.border_layer.children[Symbol.iterator]();!(P=(B=O.next()).done);P=!0){B.value.x-=.015*this.player.body.velocity.x}}catch(t){H=!0,S=t}finally{try{!P&&O.return&&O.return()}finally{if(H)throw S}}var G=!0,j=!1,L=void 0;try{for(var C,z=this.obstacle_layer.children[Symbol.iterator]();!(G=(C=z.next()).done);G=!0){C.value.x-=.01*this.player.body.velocity.x}}catch(t){j=!0,L=t}finally{try{!G&&z.return&&z.return()}finally{if(j)throw L}}if(this.is_boss_state)this.boss.body.x-=.01*this.player.body.velocity.x;else{var A=!0,I=!1,F=void 0;try{for(var D,U=this.enemy_layer.children[Symbol.iterator]();!(A=(D=U.next()).done);A=!0){D.value.x-=.01*this.player.body.velocity.x}}catch(t){I=!0,F=t}finally{try{!A&&U.return&&U.return()}finally{if(I)throw F}}var Y=!0,X=!1,N=void 0;try{for(var W,q=this.sign_layer.children[Symbol.iterator]();!(Y=(W=q.next()).done);Y=!0){W.value.x-=.01*this.player.body.velocity.x}}catch(t){X=!0,N=t}finally{try{!Y&&q.return&&q.return()}finally{if(X)throw N}}}if(this.gravity_0.x-=.01*this.player.body.velocity.x,this.gravity_1.x-=.01*this.player.body.velocity.x,this.player.body.x>this.game.settings.active_right_bounder&&(this.player.body.x=this.game.settings.active_right_bounder),this.is_boss_state&&(this.boss.move_effect&&this.boss.move_effect.isRunning&&(this.boss.move_effect.timeline[0].vEnd.x-=.01*this.player.body.velocity.x),this.bullets)){var K=!0,J=!1,Q=void 0;try{for(var V,Z=this.bullet_layer.children[Symbol.iterator]();!(K=(V=Z.next()).done);K=!0){V.value.x-=.01*this.player.body.velocity.x}}catch(t){J=!0,Q=t}finally{try{!K&&Z.return&&Z.return()}finally{if(J)throw Q}}}}else if(this.player.body.x<this.game.settings.active_left_bounder&&this.boundary_LH.body.x<-100){var $=!0,tt=!1,et=void 0;try{for(var at,it=this.back_layer_0.children[Symbol.iterator]();!($=(at=it.next()).done);$=!0){var st=at.value;st.x-=.01*this.player.body.velocity.x,st.x>this.game.width&&(st.x+=2*-this.game.width)}}catch(t){tt=!0,et=t}finally{try{!$&&it.return&&it.return()}finally{if(tt)throw et}}var rt=!0,ot=!1,nt=void 0;try{for(var ht,lt=this.back_layer_1.children[Symbol.iterator]();!(rt=(ht=lt.next()).done);rt=!0){var dt=ht.value;dt.x-=.005*this.player.body.velocity.x,dt.x>this.game.width&&(dt.x+=2*-this.game.width)}}catch(t){ot=!0,nt=t}finally{try{!rt&&lt.return&&lt.return()}finally{if(ot)throw nt}}var yt=!0,pt=!1,_t=void 0;try{for(var ct,mt=this.front_layer.children[Symbol.iterator]();!(yt=(ct=mt.next()).done);yt=!0){var gt=ct.value;gt.x-=.02*this.player.body.velocity.x,gt.x>this.game.width&&(gt.x+=2*-this.game.width)}}catch(t){pt=!0,_t=t}finally{try{!yt&&mt.return&&mt.return()}finally{if(pt)throw _t}}var ut=!0,bt=!1,ft=void 0;try{for(var vt,xt=this.border_layer.children[Symbol.iterator]();!(ut=(vt=xt.next()).done);ut=!0){vt.value.x-=.015*this.player.body.velocity.x}}catch(t){bt=!0,ft=t}finally{try{!ut&&xt.return&&xt.return()}finally{if(bt)throw ft}}var kt=!0,wt=!1,Et=void 0;try{for(var Mt,Rt=this.obstacle_layer.children[Symbol.iterator]();!(kt=(Mt=Rt.next()).done);kt=!0){Mt.value.x-=.01*this.player.body.velocity.x}}catch(t){wt=!0,Et=t}finally{try{!kt&&Rt.return&&Rt.return()}finally{if(wt)throw Et}}if(this.is_boss_state)this.boss.body.x-=.01*this.player.body.velocity.x;else{var Tt=!0,Pt=!1,Ht=void 0;try{for(var St,Bt=this.enemy_layer.children[Symbol.iterator]();!(Tt=(St=Bt.next()).done);Tt=!0){St.value.x-=.01*this.player.body.velocity.x}}catch(t){Pt=!0,Ht=t}finally{try{!Tt&&Bt.return&&Bt.return()}finally{if(Pt)throw Ht}}var Ot=!0,Gt=!1,jt=void 0;try{for(var Lt,Ct=this.sign_layer.children[Symbol.iterator]();!(Ot=(Lt=Ct.next()).done);Ot=!0){Lt.value.x-=.01*this.player.body.velocity.x}}catch(t){Gt=!0,jt=t}finally{try{!Ot&&Ct.return&&Ct.return()}finally{if(Gt)throw jt}}}if(this.gravity_0.x-=.01*this.player.body.velocity.x,this.gravity_1.x-=.01*this.player.body.velocity.x,this.player.body.x<this.game.settings.active_left_bounder&&(this.player.body.x=this.game.settings.active_left_bounder),this.is_boss_state&&(this.boss.move_effect&&this.boss.move_effect.isRunning&&(this.boss.move_effect.timeline[0].vEnd.x-=.01*this.player.body.velocity.x),this.bullets)){var zt=!0,At=!1,It=void 0;try{for(var Ft,Dt=this.bullet_layer.children[Symbol.iterator]();!(zt=(Ft=Dt.next()).done);zt=!0){Ft.value.x-=.01*this.player.body.velocity.x}}catch(t){At=!0,It=t}finally{try{!zt&&Dt.return&&Dt.return()}finally{if(At)throw It}}}}this.player.body.velocity.x<8&&this.player.body.velocity.x>-8&&(this.player.body.velocity.x=0),this.player.body.velocity.x<0?this.player.animations.play(this.player.body.gravity.y<0?"rightrun":"leftrun"):this.player.body.velocity.x>0?this.player.animations.play(this.player.body.gravity.y<0?"leftrun":"rightrun"):this.game.mouse.is_down||(this.player.frame=0,this.player.animations.stop()),this.player.body.gravity.y<0?(this.gravity_1.animations.play("active"),this.gravity_0.frame=0,this.gravity_0.animations.stop(),0==this.player.angle&&this.tween_down.start()):(this.gravity_0.animations.play("active"),this.gravity_1.frame=0,this.gravity_1.animations.stop(),0!=this.player.angle&&this.tween_up.start());for(var Ut=0;Ut<this.game.settings.total_enemy_types;++Ut){var Yt=Math.min(this.board["Enemy0"+Ut+"Ratio"].total_clear,this.game.total_enemies)/this.game.total_enemies;this.board["Enemy0"+Ut+"Ratio"].text.text=Math.round(100*Yt)+"%",this.board["Enemy0"+Ut+"Ratio"].text.x=this.board["Enemy0"+Ut+"Ratio"].cover.x+32.5+150*Yt,this.board["Enemy0"+Ut+"Ratio"].mask.scale.set(Yt,1)}this.is_boss_state&&(this.boss.hp<.01&&this.state.start("Clear"),this.boss_HP.front.mask.scale.set(this.boss.hp/100,1),this.boss.last_time+8e3<e&&(this.player.x>this.boss.x?(this.boss.animations.play("walk"),this.boss.scale.set(-1,1)):(this.boss.animations.play("walk"),this.boss.scale.set(1,1)),this.boss.last_time=e,this.boss.move_effect&&(this.boss.move_effect.stop(),this.tweens.remove(this.boss.move_effect)),this.boss.move_effect=this.add.tween(this.boss).to({x:this.player.x},2e3).start(),this.boss.move_effect.onComplete.add(function(){if(t.tweens.remove(t.boss.move_effect),t.boss.animations.play("attack"),setTimeout(function(){t.boss.frame=2},1e3),0==t.bullets.length){var e=!0,a=!1,i=void 0;try{for(var s,r=t.bullet_layer.children[Symbol.iterator]();!(e=(s=r.next()).done);e=!0){s.value.destroy()}}catch(t){a=!0,i=t}finally{try{!e&&r.return&&r.return()}finally{if(a)throw i}}t.bullets.length=0}t.time.events.repeat(.75*Phaser.Timer.SECOND,3,function(){for(var e={0:t.add.sprite(t.boss.x+136,t.boss.y+52,"Enemy00"),1:t.add.sprite(t.boss.x+136,t.boss.y+52,"Enemy00"),2:t.add.sprite(t.boss.x+136,t.boss.y+52,"Enemy00")},a=0;a<3;++a)e[a].scale.set(1.5),t.physics.arcade.enable(e[a]),e[a].body.mass=.25,e[a].body.bounce.set(1),e[a].body.velocity.y=200,e[a].hit=!1;e[0].body.velocity.x=-50,e[1].body.velocity.x=0,e[2].body.velocity.x=50,t.bullet_layer.addMultiple([e[0],e[1],e[2]]);for(var i=0;i<3;++i)t.bullets.push(e[i]);e={0:t.add.sprite(t.boss.x-145,t.boss.y+52,"Enemy01"),1:t.add.sprite(t.boss.x-145,t.boss.y+52,"Enemy01"),2:t.add.sprite(t.boss.x-145,t.boss.y+52,"Enemy01")};for(var s=0;s<3;++s)e[s].scale.set(1.5),t.physics.arcade.enable(e[s]),e[s].body.mass=.25,e[s].body.bounce.set(1),e[s].body.velocity.y=250,e[s].hit=!1;e[0].body.velocity.x=-50,e[1].body.velocity.x=0,e[2].body.velocity.x=50,t.bullet_layer.addMultiple([e[0],e[1],e[2]]);for(var r=0;r<3;++r)t.bullets.push(e[r])},t),t.world.bringToTop(t.bullet_layer)}))),this.life_text.text="x"+this.game.total_life,this.player.body.touching.none&&(this.player.is_touching=!1),this.game.total_life<.1&&this.state.start("Over")}},{key:"handle_gravity",value:function(t,e){"Gravity00"==e.key?(t.body.gravity.y=300,this.enemy_layer.setAll("body.gravity.y",300)):"Gravity01"==e.key&&(t.body.gravity.y=-300,this.enemy_layer.setAll("body.gravity.y",-300))}},{key:"handle_enemy_hit",value:function(t,e){var a=this;e.body.enable=!1,this.board[e.key+"Ratio"].cover.animations.play("kill");var i=this.add.tween(e.scale).to({x:1.75,y:1.75},175).start();i.onComplete.add(function(){a.counter.lastType==e.key?(a.counter.combo+=1,a.audio["melo0"+a.counter.combo%3].play()):(a.counter.combo=1,a.counter.lastType=e.key,a.audio.melo00.play()),a.tweens.remove(i);var t=a.counter.combo/5,s=a.add.emitter(e.x,e.y,t);s.gravity=0,s.makeParticles("Particle"+e.key.substring(5,7)),s.setXSpeed(-150,150),s.setYSpeed(-150,150),s.setScale(1,.5,1,.5,800),s.start(!0,800,null,t),a.destroy_emitter.add(s),a.enemy_layer.remove(e),e.destroy(),setTimeout(function(){s.forEach(function(t){var i=a.add.tween(t).to({x:a.board["Enemy"+e.key.substring(5,7)+"Ratio"].cover.x,y:a.board["Enemy"+e.key.substring(5,7)+"Ratio"].cover.y},400).start();i.onComplete.add(function(){a.tweens.remove(i)})})},200),setTimeout(function(){a.destroy_emitter.remove(s),s.destroy()},600)},this),this.board["Enemy"+e.key.substring(5,7)+"Ratio"].total_clear+=1,this.board["Enemy"+e.key.substring(5,7)+"Ratio"].total_clear>this.game.total_enemies-1&&this.enemy_layer.forEach(function(t){t.key===e.key&&(t.body.immovable=!0,t.body.moves=!1)})}},{key:"handle_obstacle_hit",value:function(t,e){t.is_touching||(this.game.total_life-=2,t.is_touching=!0)}},{key:"handle_sign",value:function(t,e){var a=this;"Boss_Gate_Sign01"==e.key&&e.body.touching.up?(this.boss_gate_sign_bloom.bloom_effect.stop(),this.boss_gate_sign_bloom.destroy(),e.frame=1,e.body.enable=!1,this.boss_gate.front.visible=!0,this.camera.shake(.0035,800),this.boss_gate.up_effect.start(),this.boss_gate.down_effect.start(),this.boss_gate.back_effect.start(),this.boss_gate.up_effect.onComplete.add(function(){a.boss_gate.valid=!0,a.boss_gate.up.mask.destroy(),a.boss_gate.up.destroy(),a.boss_gate.down.mask.destroy(),a.boss_gate.down.destroy()}),this.boss_gate.front_effect.start()):this.boss_gate.valid&&"Boss_Gate00"==e.key&&(this.is_boss_state=!0,this.boss.visible=!0,this.boss.animations.play("walk"),this.enemy_layer.removeAll(),this.sign_layer.removeAll(),this.player.body.bounce.set(.8),this.boss_HP.front.visible=!0,this.boss_HP.back.visible=!0)}},{key:"handle_boss_hit",value:function(t,e){e.hit&&(t.hp-=10,e.destroy())}}]),e}();e.default=s},134:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}();var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Phaser.State),i(e,[{key:"create",value:function(){var t=this;this.Text3D(),this.start_text=this.add.bitmapText(464,793*.8,"carrier_command","Click To Start"),this.start_text.anchor.set(.5,0),this.start_text_tween=this.add.tween(this.start_text).to({alpha:.5}).yoyo(!0).loop().start(),this.start_text.fontSize=40,this.start_text.inputEnabled=!0,this.start_text.input.useHandCursor=!0,this.start_text.events.onInputUp.add(function(){var e=document.getElementById("dd");e.parentNode.removeChild(e),t.state.start("Menu")},this)}},{key:"Text3D",value:function(){var t=new THREE.WebGLRenderer;t.setSize(928,600),t.domElement.id="dd",t.domElement.style="position: absolute; top:8px; left:8px;",document.body.appendChild(t.domElement);var e=new THREE.Scene,a=new THREE.PerspectiveCamera(45,928/600,1,1e4);a.position.set(24,0,40);var i=new THREE.AmbientLight(16777215,.5);e.add(i);var s=new THREE.DirectionalLight(16777215);s.position.set(1,1,1),e.add(s);for(var r=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,2,0],[2,2,0],[3,2,0],[4,2,0],[4,3,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0]],o=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,2,0],[2,2,0],[3,2,0],[4,2,0],[4,3,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0],[4,0,0],[3,1,0]],n=[[0,0,0],[1,0,0],[2,0,0],[3,0,0],[4,0,0],[0,4,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0],[2,1,0],[2,2,0],[2,3,0]],h=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[4,0,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0],[1,3,0],[2,2,0],[3,1,0]],l=[[0,4,0],[1,3,0],[2,2,0],[2,1,0],[2,0,0],[3,3,0],[4,4,0]],d=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,4,0],[2,4,0],[3,4,0],[1,0,0],[2,0,0],[3,0,0],[4,1,0],[4,2,0],[4,3,0]],y=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[1,2,0],[2,2,0],[3,2,0],[4,0,0],[4,1,0],[4,2,0],[4,3,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0]],p=[[0,0,0],[0,2,0],[0,3,0],[0,4,0],[1,0,0],[2,0,0],[3,0,0],[1,2,0],[2,2,0],[3,2,0],[4,0,0],[4,1,0],[4,2,0],[1,4,0],[2,4,0],[3,4,0],[4,4,0]],_=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[4,0,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0],[1,2,0],[2,2,0],[3,2,0]],c=new THREE.Group,m=0;m<r.length;m++){var g=new THREE.BoxGeometry(1,1,1),u=new THREE.MeshStandardMaterial({color:16711680}),b=new THREE.Mesh(g,u);b.position.x=r[m][0],b.position.y=r[m][1],b.position.z=r[m][2],c.add(b)}e.add(c);for(var f=new THREE.Group,v=0;v<o.length;v++){var x=new THREE.BoxGeometry(1,1,1),k=new THREE.MeshStandardMaterial({color:16711680}),w=new THREE.Mesh(x,k);w.position.x=o[v][0]+6,w.position.y=o[v][1],w.position.z=o[v][2],f.add(w)}e.add(f);for(var E=new THREE.Group,M=0;M<n.length;M++){var R=new THREE.BoxGeometry(1,1,1),T=new THREE.MeshStandardMaterial({color:16711680}),P=new THREE.Mesh(R,T);P.position.x=n[M][0]+12,P.position.y=n[M][1],P.position.z=n[M][2],E.add(P)}e.add(E);for(var H=new THREE.Group,S=0;S<h.length;S++){var B=new THREE.BoxGeometry(1,1,1),O=new THREE.MeshStandardMaterial({color:16711680}),G=new THREE.Mesh(B,O);G.position.x=h[S][0]+18,G.position.y=h[S][1],G.position.z=h[S][2],H.add(G)}e.add(H);for(var j=new THREE.Group,L=0;L<h.length;L++){var C=new THREE.BoxGeometry(1,1,1),z=new THREE.MeshStandardMaterial({color:16711680}),A=new THREE.Mesh(C,z);A.position.x=h[L][0]+24,A.position.y=h[L][1],A.position.z=h[L][2],j.add(A)}e.add(j);for(var I=new THREE.Group,F=0;F<l.length;F++){var D=new THREE.BoxGeometry(1,1,1),U=new THREE.MeshStandardMaterial({color:16711680}),Y=new THREE.Mesh(D,U);Y.position.x=l[F][0]+30,Y.position.y=l[F][1],Y.position.z=l[F][2],I.add(Y)}e.add(I);for(var X=new THREE.Group,N=0;N<d.length;N++){var W=new THREE.BoxGeometry(1,1,1),q=new THREE.MeshStandardMaterial({color:16711680}),K=new THREE.Mesh(W,q);K.position.x=d[N][0]+17,K.position.y=d[N][1]-6,K.position.z=d[N][2],X.add(K)}e.add(X);for(var J=new THREE.Group,Q=0;Q<y.length;Q++){var V=new THREE.BoxGeometry(1,1,1),Z=new THREE.MeshStandardMaterial({color:16711680}),$=new THREE.Mesh(V,Z);$.position.x=y[Q][0]+23,$.position.y=y[Q][1]-6,$.position.z=y[Q][2],J.add($)}e.add(J);for(var tt=new THREE.Group,et=0;et<p.length;et++){var at=new THREE.BoxGeometry(1,1,1),it=new THREE.MeshStandardMaterial({color:16711680}),st=new THREE.Mesh(at,it);st.position.x=p[et][0]+29,st.position.y=p[et][1]-6,st.position.z=p[et][2],tt.add(st)}e.add(tt);for(var rt=new THREE.Group,ot=0;ot<_.length;ot++){var nt=new THREE.BoxGeometry(1,1,1),ht=new THREE.MeshStandardMaterial({color:16711680}),lt=new THREE.Mesh(nt,ht);lt.position.x=_[ot][0]+35,lt.position.y=_[ot][1]-6,lt.position.z=_[ot][2],rt.add(lt)}e.add(rt);!function i(){var r=new Date;requestAnimationFrame(i),c.rotation.x-=.005,f.rotation.x-=.01,E.rotation.x-=.015,H.rotation.x-=.02,j.rotation.x-=.025,I.rotation.x-=.03,X.rotation.x-=.015,J.rotation.x-=.02,tt.rotation.x-=.025,rt.rotation.x-=.03,t.render(e,a),s.position.set(1,Math.cos(r.getSeconds()/100),1)}()}}]),e}();e.default=s},135:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}();var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Phaser.State),i(e,[{key:"create",value:function(){this.create_layer_0(),this.create_layer_1(),this.create_layer_2(),this.create_layer_3(),this.create_layer_4(),this.create_npc_layer(),this.create_main_layer(),this.create_layer_5()}},{key:"create_layer_0",value:function(){this.layer_0=this.add.image(0,0,"Menu_Layer00"),this.layer_0.fixedToCamera=!0,this.world.setBounds(0,0,1586,793),this.physics.arcade.setBoundsToWorld()}},{key:"create_layer_1",value:function(){this.layer_1=this.add.group(),this.layer_1.create(0,0,"Menu_Layer01"),this.layer_1.create(1586,0,"Menu_Layer01")}},{key:"create_layer_2",value:function(){this.layer_2=this.add.group(),this.layer_2.create(0,0,"Menu_Layer02"),this.layer_2.create(1586,0,"Menu_Layer02")}},{key:"create_layer_3",value:function(){this.layer_3=this.add.group(),this.layer_3.create(0,0,"Menu_Layer03"),this.layer_3.create(1586,0,"Menu_Layer03")}},{key:"create_layer_4",value:function(){this.border_layer=this.add.group(),this.border_layer.enableBody=!0,this.layer_4=this.add.sprite(0,0,"Menu_Layer04"),this.physics.arcade.enable(this.layer_4),this.layer_4.body.setSize(1586,62,0,745),this.border_layer.addMultiple([this.layer_4]),this.border_layer.setAll("body.immovable",!0)}},{key:"create_layer_5",value:function(){this.layer_5=this.add.group(),this.layer_5.create(0,0,"Menu_Layer05"),this.layer_5.create(1586,0,"Menu_Layer05")}},{key:"create_npc_layer",value:function(){var t=this;this.npc_layer=this.add.group(),this.info_back=this.add.sprite(464,0,"info_back"),this.info_back.anchor.set(.5,0),this.info_back.alpha=.6,this.info_back.fixedToCamera=!0,this.info_back.text=this.add.bitmapText(464,80,"carrier_command","PRINNY DASH"),this.info_back.text.anchor.set(.5,0),this.info_back.text.fontSize=40,this.info_back.text.fixedToCamera=!0,this.talk_sign_prist=this.add.sprite(312,673,"talk"),this.talk_sign_prist.visible=!1,this.talk_sign_prist.inputEnabled=!0,this.talk_sign_prist.input.useHandCursor=!0,this.talk_sign_prist.anchor.set(0,1),this.talk_sign_prist.mask=this.add.graphics(312,633),this.talk_sign_prist.mask.anchor.set(0,1),this.talk_sign_prist.mask.beginFill(0),this.talk_sign_prist.mask.drawRect(0,-33,45,33),this.talk_sign_prist.events.onInputUp.add(function(){},this),this.talk_sign_pumpgirl=this.add.sprite(613,693,"talk"),this.talk_sign_pumpgirl.anchor.set(0,1),this.talk_sign_pumpgirl.visible=!1,this.talk_sign_pumpgirl.inputEnabled=!0,this.talk_sign_pumpgirl.input.useHandCursor=!0,this.talk_sign_pumpgirl.mask=this.add.graphics(613,653),this.talk_sign_pumpgirl.mask.anchor.set(0,1),this.talk_sign_pumpgirl.mask.beginFill(0),this.talk_sign_pumpgirl.mask.drawRect(0,-33,45,33),this.talk_sign_pumpgirl.btns={player1:this.add.bitmapText(464,60,"carrier_command","Prinny"),player2:this.add.bitmapText(464,120,"carrier_command","Prince")},this.talk_sign_pumpgirl.btns.player1.tint=3346705,this.talk_sign_pumpgirl.btns.player2.tint=3346705,this.talk_sign_pumpgirl.btns.player1.anchor.set(.5,0),this.talk_sign_pumpgirl.btns.player2.anchor.set(.5,0),this.talk_sign_pumpgirl.btns.player1.visible=!1,this.talk_sign_pumpgirl.btns.player2.visible=!1,this.talk_sign_pumpgirl.btns.player1.fontSize=20,this.talk_sign_pumpgirl.btns.player2.fontSize=20,this.talk_sign_pumpgirl.btns.player1.fixedToCamera=!0,this.talk_sign_pumpgirl.btns.player2.fixedToCamera=!0,this.talk_sign_pumpgirl.btns.player1.inputEnabled=!0,this.talk_sign_pumpgirl.btns.player1.input.useHandCursor=!0,this.talk_sign_pumpgirl.btns.player2.inputEnabled=!0,this.talk_sign_pumpgirl.btns.player2.input.useHandCursor=!0,this.talk_sign_pumpgirl.events.onInputUp.add(function(){t.info_back.text.visible=!1,t.talk_sign_pumpgirl.btns.player1.visible=!0,t.talk_sign_pumpgirl.btns.player2.visible=!0},this),this.talk_sign_pumpgirl.btns.player1.events.onInputOver.add(function(){t.add.tween(t.talk_sign_pumpgirl.btns.player1).to({fontSize:22},100).start()}),this.talk_sign_pumpgirl.btns.player2.events.onInputOver.add(function(){t.add.tween(t.talk_sign_pumpgirl.btns.player2).to({fontSize:22},100).start()}),this.talk_sign_pumpgirl.btns.player1.events.onInputOut.add(function(){t.add.tween(t.talk_sign_pumpgirl.btns.player1).to({fontSize:20},100).start()}),this.talk_sign_pumpgirl.btns.player2.events.onInputOut.add(function(){t.add.tween(t.talk_sign_pumpgirl.btns.player2).to({fontSize:20},100).start()}),this.talk_sign_bookgirl=this.add.sprite(851,693,"talk"),this.talk_sign_bookgirl.anchor.set(0,1),this.talk_sign_bookgirl.visible=!1,this.talk_sign_bookgirl.inputEnabled=!0,this.talk_sign_bookgirl.input.useHandCursor=!0,this.talk_sign_bookgirl.mask=this.add.graphics(851,653),this.talk_sign_bookgirl.mask.anchor.set(0,1),this.talk_sign_bookgirl.mask.beginFill(0),this.talk_sign_bookgirl.mask.drawRect(0,-33,45,33),this.talk_sign_save=this.add.sprite(1211,653,"talk"),this.talk_sign_save.anchor.set(0,1),this.talk_sign_save.visible=!1,this.talk_sign_save.inputEnabled=!0,this.talk_sign_save.input.useHandCursor=!0,this.talk_sign_save.mask=this.add.graphics(1211,613),this.talk_sign_save.mask.anchor.set(0,1),this.talk_sign_save.mask.beginFill(0),this.talk_sign_save.mask.drawRect(0,-33,45,33),this.talk_sign_exitdoor=this.add.sprite(1501,683,"talk"),this.talk_sign_exitdoor.anchor.set(0,1),this.talk_sign_exitdoor.visible=!1,this.talk_sign_exitdoor.inputEnabled=!0,this.talk_sign_exitdoor.input.useHandCursor=!0,this.talk_sign_exitdoor.mask=this.add.graphics(1501,643),this.talk_sign_exitdoor.mask.anchor.set(0,1),this.talk_sign_exitdoor.mask.beginFill(0),this.talk_sign_exitdoor.mask.drawRect(0,-33,45,33),this.talk_sign_exitdoor.btns={stage1:this.add.bitmapText(464,60,"carrier_command","Stage 1 (Beginner)"),stage2:this.add.bitmapText(464,120,"carrier_command","Stage 2 (Advanced)")},this.talk_sign_exitdoor.btns.stage1.tint=3346705,this.talk_sign_exitdoor.btns.stage2.tint=3346705,this.talk_sign_exitdoor.btns.stage1.anchor.set(.5,0),this.talk_sign_exitdoor.btns.stage2.anchor.set(.5,0),this.talk_sign_exitdoor.btns.stage1.visible=!1,this.talk_sign_exitdoor.btns.stage2.visible=!1,this.talk_sign_exitdoor.btns.stage1.fontSize=20,this.talk_sign_exitdoor.btns.stage2.fontSize=20,this.talk_sign_exitdoor.btns.stage1.fixedToCamera=!0,this.talk_sign_exitdoor.btns.stage2.fixedToCamera=!0,this.talk_sign_exitdoor.btns.stage1.inputEnabled=!0,this.talk_sign_exitdoor.btns.stage1.input.useHandCursor=!0,this.talk_sign_exitdoor.btns.stage1.events.onInputUp.add(function(){t.state.start("Stage1")}),this.talk_sign_exitdoor.btns.stage2.inputEnabled=!0,this.talk_sign_exitdoor.btns.stage2.input.useHandCursor=!0,this.talk_sign_exitdoor.btns.stage2.events.onInputUp.add(function(){t.state.start("Stage2")}),this.talk_sign_exitdoor.events.onInputUp.add(function(){t.info_back.text.visible=!1,t.talk_sign_exitdoor.btns.stage1.visible=!0,t.talk_sign_exitdoor.btns.stage2.visible=!0},this),this.prist=this.add.sprite(312,745,"prist"),this.prist.anchor.set(0,1),this.prist.sign=this.talk_sign_prist,this.prist.tween=this.add.tween(this.talk_sign_prist).to({y:633},300),this.prist.tween_back=this.add.tween(this.talk_sign_prist).to({y:673},300),this.pumpgirl=this.add.sprite(613,745,"pumpgirl"),this.pumpgirl.anchor.set(0,1),this.pumpgirl.sign=this.talk_sign_pumpgirl,this.pumpgirl.animations.add("idle",[0,1,2],5,!0),this.pumpgirl.animations.play("idle"),this.pumpgirl.tween=this.add.tween(this.talk_sign_pumpgirl).to({y:653},300),this.pumpgirl.tween_back=this.add.tween(this.talk_sign_pumpgirl).to({y:693},300),this.bookgirl=this.add.sprite(851,745,"bookgirl"),this.bookgirl.anchor.set(0,1),this.bookgirl.sign=this.talk_sign_bookgirl,this.bookgirl.animations.add("idle",[0,1,2,3,4,5],8,!0),this.bookgirl.animations.play("idle"),this.bookgirl.tween=this.add.tween(this.talk_sign_bookgirl).to({y:653},300),this.bookgirl.tween_back=this.add.tween(this.talk_sign_bookgirl).to({y:693},300),this.save=this.add.sprite(1211,745,"saveboy"),this.save.anchor.set(0,1),this.save.sign=this.talk_sign_save,this.save.animations.add("idle",[0,1,2,3],8,!0),this.save.animations.play("idle"),this.save.tween=this.add.tween(this.talk_sign_save).to({y:613},300),this.save.tween_back=this.add.tween(this.talk_sign_save).to({y:653},300),this.exitdoor=this.add.sprite(1501,745,"exitdoor"),this.exitdoor.anchor.set(0,1),this.exitdoor.sign=this.talk_sign_exitdoor,this.exitdoor.animations.add("idle",[0,1,2,3],8,!0),this.exitdoor.animations.play("idle"),this.exitdoor.tween=this.add.tween(this.talk_sign_exitdoor).to({y:643},300),this.exitdoor.tween_back=this.add.tween(this.talk_sign_exitdoor).to({y:683},300),this.npc_layer.addMultiple([this.prist,this.pumpgirl,this.bookgirl,this.save,this.exitdoor])}},{key:"create_main_layer",value:function(){var t=this;this.main_layer=this.add.group(),this.mouse_drag=this.add.sprite(0,0,"Mouse_Drag"),this.mouse_drag.anchor.set(.5),this.mouse_drag.scale.set(.5),this.mouse_drag.animations.add("fire",[0,1,2,3,4,5],15,!1),this.mouse_drag.frame=0,this.mouse_drag.alpha=0,0==this.game.player_choice?(this.player=this.add.sprite(.5*this.game.width,500,"Player00"),this.player.animations.add("leftwalk",[13,14,15,16,17,18],8,!0),this.player.animations.add("rightwalk",[19,20,21,22,23,24],8,!0),this.player.animations.add("leftjump",[1,2,3,4,5,6],10,!0),this.player.animations.add("rightjump",[7,8,9,10,11,12],10,!0),this.player.animations.add("leftrun",[25,26,27,28,29,30],8,!0),this.player.animations.add("rightrun",[31,32,33,34,35,36],8,!0)):(this.player=this.add.sprite(.5*this.game.width,500,"Player01"),this.player.animations.add("leftwalk",[1,2,3,4,5,6],8,!0),this.player.animations.add("rightwalk",[7,8,9,10,11,12],8,!0),this.player.animations.add("leftjump",[13,14,15,16,17,18],10,!0),this.player.animations.add("rightjump",[19,20,21,22,23,24],10,!0),this.player.animations.add("leftrun",[25,26,27,28,29,30],8,!0),this.player.animations.add("rightrun",[31,32,33,34,35,36],8,!0)),this.physics.arcade.enable(this.player),this.player.body.collideWorldBounds=!0,this.player.is_touching=!1,this.player.body.bounce.set(.3),this.player.anchor.set(.5),this.player.angle=0,this.player.body.gravity.y=300,this.player.inputEnabled=!0,this.player.events.onInputDown.add(function(e,a){t.game.mouse.is_down||(t.game.mouse.is_down=!0,t.game.mouse.x=a.x,t.game.mouse.y=a.y,e.body.velocity.x=0,e.body.velocity.y=0,t.mouse_drag.alpha=1,t.player.body.gravity.y=t.player.body.gravity.y>0?25:-25)},this),this.player.events.onInputUp.add(function(e,a){t.game.mouse.is_down=!1,t.game.time_angle=0,t.game.last_time=t.time.now;var i=t.game.mouse.x-a.x,s=t.game.mouse.y-a.y;e.body.velocity.x=i>0?Math.min(1e3,5*i):Math.max(-1e3,5*i),e.body.velocity.y=s>0?Math.min(1e3,5*s):Math.max(-1e3,5*s),t.mouse_drag.animations.play("fire").onComplete.add(function(){t.mouse_drag.frame=0,t.mouse_drag.alpha=0}),t.player.body.gravity.y=t.player.body.gravity.y>0?300:-300},this),this.talk_sign_pumpgirl.btns.player1.events.onInputUp.add(function(){t.game.player_choice=0,t.player.loadTexture("Player00"),t.player.animations.add("leftwalk",[13,14,15,16,17,18],8,!0),t.player.animations.add("rightwalk",[19,20,21,22,23,24],8,!0),t.player.animations.add("leftjump",[1,2,3,4,5,6],10,!0),t.player.animations.add("rightjump",[7,8,9,10,11,12],10,!0),t.player.animations.add("leftrun",[25,26,27,28,29,30],8,!0),t.player.animations.add("rightrun",[31,32,33,34,35,36],8,!0)}),this.talk_sign_pumpgirl.btns.player2.events.onInputUp.add(function(){t.game.player_choice=1,t.player.loadTexture("Player01"),t.player.animations.add("leftwalk",[1,2,3,4,5,6],8,!0),t.player.animations.add("rightwalk",[7,8,9,10,11,12],8,!0),t.player.animations.add("leftjump",[13,14,15,16,17,18],10,!0),t.player.animations.add("rightjump",[19,20,21,22,23,24],10,!0),t.player.animations.add("leftrun",[25,26,27,28,29,30],8,!0),t.player.animations.add("rightrun",[31,32,33,34,35,36],8,!0)}),this.talk_sign_exitdoor.btns.stage1.events.onInputOver.add(function(){t.add.tween(t.talk_sign_exitdoor.btns.stage1).to({fontSize:21},500).start()}),this.talk_sign_exitdoor.btns.stage2.events.onInputOver.add(function(){t.add.tween(t.talk_sign_exitdoor.btns.stage2).to({fontSize:21},500).start()}),this.talk_sign_exitdoor.btns.stage1.events.onInputOut.add(function(){t.add.tween(t.talk_sign_exitdoor.btns.stage1).to({fontSize:20},500).start()}),this.talk_sign_exitdoor.btns.stage2.events.onInputOut.add(function(){t.add.tween(t.talk_sign_exitdoor.btns.stage2).to({fontSize:20},500).start()}),this.camera.follow(this.player,Phaser.Camera.FOLLOW_LOCKON,.1,.1),this.main_layer.addMultiple([this.mouse_drag,this.player])}},{key:"update",value:function(){var t=this;this.physics.arcade.collide(this.player,this.border_layer);var e=this.math.angleBetween(this.input.activePointer.x,this.input.activePointer.y,this.player.body.position.x+this.player.offsetX-this.camera.x,this.player.body.position.y+this.player.offsetY-this.camera.y),a=Math.min(30,.25*this.math.distance(this.input.activePointer.x,this.input.activePointer.y,this.player.body.position.x+this.player.offsetX-this.camera.x,this.player.body.position.y+this.player.offsetY-this.camera.y));this.game.mouse.is_down&&this.input.activePointer.isDown&&(this.game.mouse.x<this.input.activePointer.x?this.player.animations.play(this.player.body.gravity.y<0?"rightjump":"leftjump"):this.player.animations.play(this.player.body.gravity.y<0?"leftjump":"rightjump"),this.mouse_drag.x=this.player.body.position.x+this.player.offsetX-Math.cos(e)*a*1.8,this.mouse_drag.y=this.player.body.position.y+this.player.offsetY-Math.sin(e)*a*1.8,this.mouse_drag.scale.set(.5*a*.1,Math.max(.05*a*.5,.5)),this.mouse_drag.rotation=e),this.player.body.velocity.x<8&&this.player.body.velocity.x>-8&&(this.player.body.velocity.x=0),this.player.body.velocity.x<0?this.player.animations.play(this.player.body.gravity.y<0?"rightrun":"leftrun"):this.player.body.velocity.x>0?this.player.animations.play(this.player.body.gravity.y<0?"leftrun":"rightrun"):this.game.mouse.is_down||(this.player.frame=0,this.player.animations.stop());var i=0,s=function(e){t.player.x>e.x-25&&t.player.x<e.x+75?(e.sign.visible=!0,e.tween.start()):(++i,e.tween_back.start().onComplete.add(function(){e.sign.visible=!1}),"exitdoor"==e.key?(t.talk_sign_exitdoor.btns.stage1.visible=!1,t.talk_sign_exitdoor.btns.stage2.visible=!1):"pumpgirl"==e.key&&(t.talk_sign_pumpgirl.btns.player1.visible=!1,t.talk_sign_pumpgirl.btns.player2.visible=!1))},r=!0,o=!1,n=void 0;try{for(var h,l=this.npc_layer.children[Symbol.iterator]();!(r=(h=l.next()).done);r=!0){s(m=h.value)}}catch(t){o=!0,n=t}finally{try{!r&&l.return&&l.return()}finally{if(o)throw n}}if(i==this.npc_layer.length&&(this.info_back.text.visible=!0),this.player.x>464&&this.player.x<1122){var d=!0,y=!1,p=void 0;try{for(var _,c=this.layer_1.children[Symbol.iterator]();!(d=(_=c.next()).done);d=!0){var m;(m=_.value).x-=.0025*this.player.body.velocity.x,m.x<-1586?m.x+=3172:m.x>1586&&(m.x-=3172)}}catch(t){y=!0,p=t}finally{try{!d&&c.return&&c.return()}finally{if(y)throw p}}var g=!0,u=!1,b=void 0;try{for(var f,v=this.layer_2.children[Symbol.iterator]();!(g=(f=v.next()).done);g=!0){var x=f.value;x.x-=.006*this.player.body.velocity.x,x.x<-1586?x.x+=3172:x.x>1586&&(x.x-=3172)}}catch(t){u=!0,b=t}finally{try{!g&&v.return&&v.return()}finally{if(u)throw b}}var k=!0,w=!1,E=void 0;try{for(var M,R=this.layer_3.children[Symbol.iterator]();!(k=(M=R.next()).done);k=!0){var T=M.value;T.x-=.0095*this.player.body.velocity.x,T.x<-1586?T.x+=3172:T.x>1586&&(T.x-=3172)}}catch(t){w=!0,E=t}finally{try{!k&&R.return&&R.return()}finally{if(w)throw E}}var P=!0,H=!1,S=void 0;try{for(var B,O=this.layer_5.children[Symbol.iterator]();!(P=(B=O.next()).done);P=!0){var G=B.value;G.x-=.015*this.player.body.velocity.x,G.x<-1586?G.x+=3172:G.x>1586&&(G.x-=3172)}}catch(t){H=!0,S=t}finally{try{!P&&O.return&&O.return()}finally{if(H)throw S}}}}}]),e}();e.default=s},136:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}();var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Phaser.State),i(e,[{key:"preload",value:function(){var t=this.add.bitmapText(514,346.5,"carrier_command","Loading...");t.anchor.setTo(.5,.5),t.fontSize=40,t.tint=16579836;var e=this.add.sprite(164,396.5,"progressBarContent");this.add.sprite(164,396.5,"progressBarBorder");this.load.setPreloadSprite(e),this.load.audio("melo00","audio/system00_melo00.wav"),this.load.audio("melo01","audio/system00_melo01.wav"),this.load.audio("melo02","audio/system00_melo02.wav"),this.load.audio("melo03","audio/system00_melo03.wav"),this.load.bitmapFont("carrier_command","font/carrier_command.png","font/carrier_command.xml"),this.load.image("tileset","map/tileset.png"),this.load.tilemap("map","map/map.json",null,Phaser.Tilemap.TILED_JSON),this.load.image("Minimap_02","image/Minimap/Minimap_02.png"),this.load.image("Menu_Layer00","image/Menu/Menu_Layer_00.png"),this.load.image("Menu_Layer01","image/Menu/Menu_Layer_01.png"),this.load.image("Menu_Layer02","image/Menu/Menu_Layer_02.png"),this.load.image("Menu_Layer03","image/Menu/Menu_Layer_03.png"),this.load.image("Menu_Layer04","image/Menu/Menu_Layer_04.png"),this.load.image("Menu_Layer05","image/Menu/Menu_Layer_05.png"),this.load.image("prist","image/Menu/prist.png"),this.load.image("info_back","image/Menu/info_back.png"),this.load.image("talk","image/Menu/talk.png"),this.load.spritesheet("bookgirl","image/Menu/bookgirlset.png",66,84),this.load.spritesheet("pumpgirl","image/Menu/pumpgirlset.png",47,82),this.load.spritesheet("saveboy","image/Menu/saveset.png",78,119),this.load.spritesheet("exitdoor","image/Menu/exitdoor.png",58,94),this.load.image("Map01_Layer00","image/Map01/Map01_Layer00.png"),this.load.image("Map01_Layer01","image/Map01/Map01_Layer01.png"),this.load.image("Map01_Layer02","image/Map01/Map01_Layer02.png"),this.load.image("Map01_Layer03","image/Map01/Map01_Layer03.png"),this.load.image("Map01_Layer04","image/Map01/Map01_Layer04.png"),this.load.image("Map01_Layer05","image/Map01/Map01_Layer05.png"),this.load.image("Boundary","image/Map01/Boundary.png"),this.load.spritesheet("Map02_Layer0","image/Map02/Map02_Layer0.png",950,793),this.load.spritesheet("Map02_Layer1","image/Map02/Map02_Layer1.png",950,793),this.load.spritesheet("Map02_Layer2","image/Map02/Map02_Layer2.png",950,793),this.load.spritesheet("Map02_Layer3","image/Map02/Map02_Layer3.png",950,793),this.load.spritesheet("Map02_Layer4","image/Map02/Map02_Layer4.png",950,793),this.load.image("HiddenBlock","image/Map02/HiddenBlock.png"),this.load.image("Particle00","image/Particle/Particle00.png"),this.load.image("Particle01","image/Particle/Particle01.png"),this.load.image("Particle02","image/Particle/Particle02.png"),this.load.image("Particle03","image/Particle/Particle03.png"),this.load.spritesheet("Mouse_Drag","image/Mouse_Drag.png",160,112),this.load.spritesheet("Player00","image/Player/Player00.png",45,45),this.load.spritesheet("Player01","image/Player/Player01.png",45,50),this.load.spritesheet("Enemy00","image/Enemy/Enemy00.png",31,39),this.load.spritesheet("Enemy01","image/Enemy/Enemy01.png",45,44),this.load.spritesheet("Enemy02","image/Enemy/Enemy02.png",42,50),this.load.spritesheet("Enemy03","image/Enemy/Enemy03.png",40,46),this.load.spritesheet("Gravity00","image/Gravity/Gravity00.png",40,35),this.load.spritesheet("Gravity01","image/Gravity/Gravity01.png",40,35),this.load.image("Obstacle00","image/Obstacle/Obstacle00.png"),this.load.image("Obstacle01","image/Obstacle/Obstacle01.png"),this.load.image("Percentage_Back","image/Percentage/Percentage_Back.png"),this.load.image("Percentage_Front","image/Percentage/Percentage_Front.png"),this.load.image("Boss_Gate00","image/Boss_Gate/Boss_Gate00.png"),this.load.image("Boss_Gate01","image/Boss_Gate/Boss_Gate01.png"),this.load.image("Boss_Gate02","image/Boss_Gate/Boss_Gate02.png"),this.load.image("Boss_Gate03","image/Boss_Gate/Boss_Gate03.png"),this.load.image("Boss_Gate04","image/Boss_Gate/Boss_Gate04.png"),this.load.spritesheet("Boss_Gate_Sign00","image/Boss_Gate/Boss_Gate_Sign00.png",54,54),this.load.spritesheet("Boss_Gate_Sign01","image/Boss_Gate/Boss_Gate_Sign01.png",54,40),this.load.spritesheet("Boss00","image/Boss/Boss00.png",400,400),this.load.spritesheet("Boss01","image/Boss/Boss01.png",340,400),this.load.image("HP_Front","image/HP/HP_Front.png"),this.load.image("HP_Back","image/HP/HP_Back.png"),this.load.image("Target_Large00","image/Target/Target_Large00.png"),this.load.image("Target_Large01","image/Target/Target_Large01.png"),this.load.image("LifeIcon","image/Icon/LifeIcon.png"),this.load.image("favicon","image/Icon/favicon.png")}},{key:"create",value:function(){this.state.start("Start")}}]),e}();e.default=s},137:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),r=a(92);(i=r)&&i.__esModule;var o=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Phaser.State),s(e,[{key:"init",value:function(){this.game.player_choice=0,this.game.settings={border_top_offset_y:195,border_top_y:277,border_bottom_offset_y:723,border_bottom_y:70,active_right_bounder:564,active_left_bounder:364,active_up_bounder:472,active_bottom_bounder:683,total_enemy_types:4},this.game.mouse={is_down:!1,x:0,y:0},this.game.map1_boundary={left:-5e3,right:5e3},this.game.total_enemies=25,this.game.time_angle=0,this.game.last_time=0,this.game.total_life=100,this.time.advancedTiming=!0}},{key:"preload",value:function(){this.load.baseURL="src/assets/",this.load.bitmapFont("carrier_command","font/carrier_command.png","font/carrier_command.xml"),this.load.image("progressBarBorder","image/progressBarBorder.png"),this.load.image("progressBarContent","image/progressBarContent.png")}},{key:"create",value:function(){this.state.start("Load")}}]),e}();e.default=o},142:function(t,e,a){"use strict";(function(t){var e=d(a(137)),i=d(a(136)),s=d(a(135)),r=d(a(134)),o=d(a(133)),n=d(a(132)),h=d(a(131)),l=d(a(130));function d(t){return t&&t.__esModule?t:{default:t}}var y=function(t){function a(t,d){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);var y=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,t,d));return y.state.add("Boot",e.default),y.state.add("Load",i.default),y.state.add("Start",r.default),y.state.add("Menu",s.default),y.state.add("Stage1",o.default),y.state.add("Stage2",n.default),y.state.add("Clear",h.default),y.state.add("Over",l.default),y.state.start("Boot"),y}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(a,Phaser.Game),a}();window.onload=function(){t.initializeApp({apiKey:"AIzaSyCLWVQ1SEiVTQG2B88_wD38ftmjaeycTKc",authDomain:"prinny-dash.firebaseapp.com",databaseURL:"https://prinny-dash.firebaseio.com",projectId:"prinny-dash",storageBucket:"",messagingSenderId:"297096066565"}),new y(928,793)}}).call(this,a(92))},354:function(t,e,a){a(353),a(151),a(148),a(146),a(144),t.exports=a(142)}});
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(firebase) {

var _Boot = __webpack_require__(/*! states/Boot.js */ "./states/Boot.js");

var _Boot2 = _interopRequireDefault(_Boot);

var _Load = __webpack_require__(/*! states/Load.js */ "./states/Load.js");

var _Load2 = _interopRequireDefault(_Load);

var _Menu = __webpack_require__(/*! states/Menu.js */ "./states/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _Start = __webpack_require__(/*! states/Start.js */ "./states/Start.js");

var _Start2 = _interopRequireDefault(_Start);

var _Stage = __webpack_require__(/*! states/Stage1.js */ "./states/Stage1.js");

var _Stage2 = _interopRequireDefault(_Stage);

var _Stage3 = __webpack_require__(/*! states/Stage2.js */ "./states/Stage2.js");

var _Stage4 = _interopRequireDefault(_Stage3);

var _Clear = __webpack_require__(/*! states/Clear.js */ "./states/Clear.js");

var _Clear2 = _interopRequireDefault(_Clear);

var _Over = __webpack_require__(/*! states/Over.js */ "./states/Over.js");

var _Over2 = _interopRequireDefault(_Over);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$Game) {
    _inherits(Game, _Phaser$Game);

    function Game(x, y) {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, x, y));

        _this.state.add('Boot', _Boot2.default);
        _this.state.add('Load', _Load2.default);
        _this.state.add('Start', _Start2.default);
        _this.state.add('Menu', _Menu2.default);
        _this.state.add('Stage1', _Stage2.default);
        _this.state.add('Stage2', _Stage4.default);
        _this.state.add('Clear', _Clear2.default);
        _this.state.add('Over', _Over2.default);
        _this.state.start('Boot');
        return _this;
    }

    return Game;
}(Phaser.Game);

document.body.onkeypress = function (e) {
    if (e.keyCode == 8) {
        e.preventDefault();
    }
};
window.onload = function () {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! firebase/app */ "../node_modules/firebase/app/dist/index.cjs.js")))

/***/ }),

/***/ "./states/Boot.js":
/*!************************!*\
  !*** ./states/Boot.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(/*! firebase/app */ "../node_modules/firebase/app/dist/index.cjs.js");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = function (_Phaser$State) {
    _inherits(Boot, _Phaser$State);

    function Boot() {
        _classCallCheck(this, Boot);

        return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).call(this));
    }

    _createClass(Boot, [{
        key: 'init',
        value: function init() {
            this.game.inputBuffer = '';
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
                total_enemy_types: 4
            };
            this.game.mouse = {
                is_down: false,
                x: 0,
                y: 0
            };
            this.game.map1_boundary = {
                left: -5000,
                right: 5000
            };
            this.game.total_enemies = 25;
            this.game.time_angle = 0;
            this.game.last_time = 0;
            this.game.total_life = 100;

            this.time.advancedTiming = true;

            // firebase.database().ref('/board').orderByChild('/level').limitToLast(5).on('value', data => {
            //     this.game.leaders.splice(0);
            //     data.forEach(data => {
            //         this.game.leaders.unshift(data.val())
            //     });
            //     this.game.boardNotReady = false;
            // });
            _app2.default.database().ref('/board').push({
                name: 'Tom',
                score: 3
            });
        }
    }, {
        key: 'preload',
        value: function preload() {
            this.load.baseURL = 'src/assets/';
            this.load.bitmapFont('carrier_command', 'font/carrier_command.png', 'font/carrier_command.xml');
            this.load.image('progressBarBorder', 'image/progressBarBorder.png');
            this.load.image('progressBarContent', 'image/progressBarContent.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.state.start('Load');
        }
    }]);

    return Boot;
}(Phaser.State);

exports.default = Boot;

/***/ }),

/***/ "./states/Clear.js":
/*!*************************!*\
  !*** ./states/Clear.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clear = function (_Phaser$State) {
    _inherits(Clear, _Phaser$State);

    function Clear() {
        _classCallCheck(this, Clear);

        return _possibleConstructorReturn(this, (Clear.__proto__ || Object.getPrototypeOf(Clear)).call(this));
    }

    _createClass(Clear, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.angle = 0;
            this.Text3D();
            this.start_text = this.add.bitmapText(928 * 0.5, 793 * 0.8, 'carrier_command', 'Click To Menu');
            this.start_text.anchor.set(0.5, 0);
            this.start_text.fontSize = 40;
            this.start_text_tween = this.add.tween(this.start_text).to({ alpha: 0.5 }).yoyo(true).loop().start();
            this.start_text.inputEnabled = true;
            this.start_text.input.useHandCursor = true;
            this.start_text.events.onInputUp.add(function () {
                var elem = document.getElementById('cc');
                elem.parentNode.removeChild(elem);
                _this2.state.start('Menu');
            }, this);
        }
    }, {
        key: 'Text3D',
        value: function Text3D() {
            var width = 928;
            var height = 600;

            var renderer = new THREE.WebGLRenderer();
            renderer.setSize(width, height);
            renderer.domElement.id = 'cc';
            renderer.domElement.style = 'position: absolute; top:8px; left:8px;';
            document.body.appendChild(renderer.domElement);

            var scene = new THREE.Scene();

            var camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
            camera.position.set(+24, 0, +40);

            var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
            scene.add(ambientLight);

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
            for (var i = 0; i < text_q.length; i++) {
                var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
                var cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0ff0 });
                var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
                cube.position.x = text_q[i][0];
                cube.position.y = text_q[i][1];
                cube.position.z = text_q[i][2];
                group_q.add(cube);
            }
            scene.add(group_q);

            var group_u = new THREE.Group();
            for (var _i = 0; _i < text_u.length; _i++) {
                var _cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
                var _cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0ff0 });
                var _cube = new THREE.Mesh(_cubeGeometry, _cubeMaterial);
                _cube.position.x = text_u[_i][0] + 6;
                _cube.position.y = text_u[_i][1];
                _cube.position.z = text_u[_i][2];
                group_u.add(_cube);
            }
            scene.add(group_u);

            var group_e1 = new THREE.Group();
            for (var _i2 = 0; _i2 < text_e.length; _i2++) {
                var _cubeGeometry2 = new THREE.BoxGeometry(1, 1, 1);
                var _cubeMaterial2 = new THREE.MeshStandardMaterial({ color: 0xff0ff0 });
                var _cube2 = new THREE.Mesh(_cubeGeometry2, _cubeMaterial2);
                _cube2.position.x = text_e[_i2][0] + 12;
                _cube2.position.y = text_e[_i2][1];
                _cube2.position.z = text_e[_i2][2];
                group_e1.add(_cube2);
            }
            scene.add(group_e1);

            var group_s = new THREE.Group();
            for (var _i3 = 0; _i3 < text_s.length; _i3++) {
                var _cubeGeometry3 = new THREE.BoxGeometry(1, 1, 1);
                var _cubeMaterial3 = new THREE.MeshStandardMaterial({ color: 0xff0ff0 });
                var _cube3 = new THREE.Mesh(_cubeGeometry3, _cubeMaterial3);
                _cube3.position.x = text_s[_i3][0] + 18;
                _cube3.position.y = text_s[_i3][1];
                _cube3.position.z = text_s[_i3][2];
                group_s.add(_cube3);
            }
            scene.add(group_s);

            var group_t = new THREE.Group();
            for (var _i4 = 0; _i4 < text_t.length; _i4++) {
                var _cubeGeometry4 = new THREE.BoxGeometry(1, 1, 1);
                var _cubeMaterial4 = new THREE.MeshStandardMaterial({ color: 0xff0ff0 });
                var _cube4 = new THREE.Mesh(_cubeGeometry4, _cubeMaterial4);
                _cube4.position.x = text_t[_i4][0] + 24;
                _cube4.position.y = text_t[_i4][1];
                _cube4.position.z = text_t[_i4][2];
                group_t.add(_cube4);
            }
            scene.add(group_t);

            var group_c = new THREE.Group();
            for (var _i5 = 0; _i5 < text_c.length; _i5++) {
                var _cubeGeometry5 = new THREE.BoxGeometry(1, 1, 1);
                var _cubeMaterial5 = new THREE.MeshStandardMaterial({ color: 0xfff00f });
                var _cube5 = new THREE.Mesh(_cubeGeometry5, _cubeMaterial5);
                _cube5.position.x = text_c[_i5][0] + 11;
                _cube5.position.y = text_c[_i5][1] - 6;
                _cube5.position.z = text_c[_i5][2];
                group_c.add(_cube5);
            }
            scene.add(group_c);

            var group_l = new THREE.Group();
            for (var _i6 = 0; _i6 < text_l.length; _i6++) {
                var _cubeGeometry6 = new THREE.BoxGeometry(1, 1, 1);
                var _cubeMaterial6 = new THREE.MeshStandardMaterial({ color: 0xfff00f });
                var _cube6 = new THREE.Mesh(_cubeGeometry6, _cubeMaterial6);
                _cube6.position.x = text_l[_i6][0] + 17;
                _cube6.position.y = text_l[_i6][1] - 6;
                _cube6.position.z = text_l[_i6][2];
                group_l.add(_cube6);
            }
            scene.add(group_l);

            var group_e = new THREE.Group();
            for (var _i7 = 0; _i7 < text_e.length; _i7++) {
                var _cubeGeometry7 = new THREE.BoxGeometry(1, 1, 1);
                var _cubeMaterial7 = new THREE.MeshStandardMaterial({ color: 0xfff00f });
                var _cube7 = new THREE.Mesh(_cubeGeometry7, _cubeMaterial7);
                _cube7.position.x = text_e[_i7][0] + 23;
                _cube7.position.y = text_e[_i7][1] - 6;
                _cube7.position.z = text_e[_i7][2];
                group_e.add(_cube7);
            }
            scene.add(group_e);

            var group_a = new THREE.Group();
            for (var _i8 = 0; _i8 < text_a.length; _i8++) {
                var _cubeGeometry8 = new THREE.BoxGeometry(1, 1, 1);
                var _cubeMaterial8 = new THREE.MeshStandardMaterial({ color: 0xfff00f });
                var _cube8 = new THREE.Mesh(_cubeGeometry8, _cubeMaterial8);
                _cube8.position.x = text_a[_i8][0] + 29;
                _cube8.position.y = text_a[_i8][1] - 6;
                _cube8.position.z = text_a[_i8][2];
                group_a.add(_cube8);
            }
            scene.add(group_a);

            var group_r = new THREE.Group();
            for (var _i9 = 0; _i9 < text_r.length; _i9++) {
                var _cubeGeometry9 = new THREE.BoxGeometry(1, 1, 1);
                var _cubeMaterial9 = new THREE.MeshStandardMaterial({ color: 0xfff00f });
                var _cube9 = new THREE.Mesh(_cubeGeometry9, _cubeMaterial9);
                _cube9.position.x = text_r[_i9][0] + 35;
                _cube9.position.y = text_r[_i9][1] - 6;
                _cube9.position.z = text_r[_i9][2];
                group_r.add(_cube9);
            }
            scene.add(group_r);

            var render = function () {
                var time = new Date();
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
                directionalLight.position.set(1, Math.cos(time.getSeconds() / 100), 1);
            }.bind(this);
            render();
        }
    }]);

    return Clear;
}(Phaser.State);

exports.default = Clear;

/***/ }),

/***/ "./states/Load.js":
/*!************************!*\
  !*** ./states/Load.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Load = function (_Phaser$State) {
        _inherits(Load, _Phaser$State);

        function Load() {
                _classCallCheck(this, Load);

                return _possibleConstructorReturn(this, (Load.__proto__ || Object.getPrototypeOf(Load)).call(this));
        }

        _createClass(Load, [{
                key: 'preload',
                value: function preload() {
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
        }, {
                key: 'create',
                value: function create() {
                        this.state.start('Start');
                }
        }]);

        return Load;
}(Phaser.State);

exports.default = Load;

/***/ }),

/***/ "./states/Menu.js":
/*!************************!*\
  !*** ./states/Menu.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Phaser$State) {
    _inherits(Menu, _Phaser$State);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));
    }

    _createClass(Menu, [{
        key: 'create',
        value: function create() {
            this.create_layer_0();
            this.create_layer_1();
            this.create_layer_2();
            this.create_layer_3();
            this.create_layer_4();
            this.create_npc_layer();
            this.create_main_layer();
            this.create_layer_5();
        }
    }, {
        key: 'create_layer_0',
        value: function create_layer_0() {
            this.layer_0 = this.add.image(0, 0, 'Menu_Layer00');
            this.layer_0.fixedToCamera = true;
            this.world.setBounds(0, 0, 1586, 793);
            this.physics.arcade.setBoundsToWorld();
        }
    }, {
        key: 'create_layer_1',
        value: function create_layer_1() {
            this.layer_1 = this.add.group();
            this.layer_1.create(0, 0, 'Menu_Layer01');
            this.layer_1.create(1586, 0, 'Menu_Layer01');
        }
    }, {
        key: 'create_layer_2',
        value: function create_layer_2() {
            this.layer_2 = this.add.group();
            this.layer_2.create(0, 0, 'Menu_Layer02');
            this.layer_2.create(1586, 0, 'Menu_Layer02');
        }
    }, {
        key: 'create_layer_3',
        value: function create_layer_3() {
            this.layer_3 = this.add.group();
            this.layer_3.create(0, 0, 'Menu_Layer03');
            this.layer_3.create(1586, 0, 'Menu_Layer03');
        }
    }, {
        key: 'create_layer_4',
        value: function create_layer_4() {
            this.border_layer = this.add.group();
            this.border_layer.enableBody = true;
            this.layer_4 = this.add.sprite(0, 0, 'Menu_Layer04');
            this.physics.arcade.enable(this.layer_4);
            this.layer_4.body.setSize(1586, 62, 0, 745);
            this.border_layer.addMultiple([this.layer_4]);
            this.border_layer.setAll('body.immovable', true);
        }
    }, {
        key: 'create_layer_5',
        value: function create_layer_5() {
            this.layer_5 = this.add.group();
            this.layer_5.create(0, 0, 'Menu_Layer05');
            this.layer_5.create(1586, 0, 'Menu_Layer05');
        }
    }, {
        key: 'create_npc_layer',
        value: function create_npc_layer() {
            var _this2 = this;

            this.npc_layer = this.add.group();

            this.info_back = this.add.sprite(928 * 0.5, 0, 'info_back');
            this.info_back.anchor.set(0.5, 0);
            this.info_back.alpha = 0.6;
            this.info_back.fixedToCamera = true;
            this.info_back.text = this.add.bitmapText(928 * 0.5, 80, 'carrier_command', 'PRINNY DASH');
            this.info_back.text.anchor.set(0.5, 0);
            this.info_back.text.fontSize = 40;
            this.info_back.text.fixedToCamera = true;

            this.talk_sign_prist = this.add.sprite(312, 745 - 112 + 40, 'talk');
            this.talk_sign_prist.visible = false;
            this.talk_sign_prist.inputEnabled = true;
            this.talk_sign_prist.input.useHandCursor = true;
            this.talk_sign_prist.anchor.set(0, 1);
            this.talk_sign_prist.mask = this.add.graphics(312, 745 - 112);
            this.talk_sign_prist.mask.anchor.set(0, 1);
            this.talk_sign_prist.mask.beginFill(0x000000);
            this.talk_sign_prist.mask.drawRect(0, -33, 45, 33);
            this.talk_sign_prist.events.onInputUp.add(function () {
                //
            }, this);

            this.talk_sign_pumpgirl = this.add.sprite(613, 745 - 92 + 40, 'talk');
            this.talk_sign_pumpgirl.anchor.set(0, 1);
            this.talk_sign_pumpgirl.visible = false;
            this.talk_sign_pumpgirl.inputEnabled = true;
            this.talk_sign_pumpgirl.input.useHandCursor = true;
            this.talk_sign_pumpgirl.mask = this.add.graphics(613, 745 - 92);
            this.talk_sign_pumpgirl.mask.anchor.set(0, 1);
            this.talk_sign_pumpgirl.mask.beginFill(0x000000);
            this.talk_sign_pumpgirl.mask.drawRect(0, -33, 45, 33);
            this.talk_sign_pumpgirl.btns = {
                'player1': this.add.bitmapText(928 * 0.5, 60, 'carrier_command', 'Prinny'),
                'player2': this.add.bitmapText(928 * 0.5, 120, 'carrier_command', 'Prince')
            };
            this.talk_sign_pumpgirl.btns.player1.tint = 0x331111;
            this.talk_sign_pumpgirl.btns.player2.tint = 0x331111;
            this.talk_sign_pumpgirl.btns.player1.anchor.set(0.5, 0);
            this.talk_sign_pumpgirl.btns.player2.anchor.set(0.5, 0);
            this.talk_sign_pumpgirl.btns.player1.visible = false;
            this.talk_sign_pumpgirl.btns.player2.visible = false;
            this.talk_sign_pumpgirl.btns.player1.fontSize = 20;
            this.talk_sign_pumpgirl.btns.player2.fontSize = 20;
            this.talk_sign_pumpgirl.btns.player1.fixedToCamera = true;
            this.talk_sign_pumpgirl.btns.player2.fixedToCamera = true;
            this.talk_sign_pumpgirl.btns.player1.inputEnabled = true;
            this.talk_sign_pumpgirl.btns.player1.input.useHandCursor = true;
            this.talk_sign_pumpgirl.btns.player2.inputEnabled = true;
            this.talk_sign_pumpgirl.btns.player2.input.useHandCursor = true;
            this.talk_sign_pumpgirl.events.onInputUp.add(function () {
                _this2.info_back.text.visible = false;
                _this2.talk_sign_pumpgirl.btns.player1.visible = true;
                _this2.talk_sign_pumpgirl.btns.player2.visible = true;
            }, this);

            this.talk_sign_bookgirl = this.add.sprite(851, 745 - 92 + 40, 'talk');
            this.talk_sign_bookgirl.anchor.set(0, 1);
            this.talk_sign_bookgirl.visible = false;
            this.talk_sign_bookgirl.inputEnabled = true;
            this.talk_sign_bookgirl.input.useHandCursor = true;
            this.talk_sign_bookgirl.mask = this.add.graphics(851, 745 - 92);
            this.talk_sign_bookgirl.mask.anchor.set(0, 1);
            this.talk_sign_bookgirl.mask.beginFill(0x000000);
            this.talk_sign_bookgirl.mask.drawRect(0, -33, 45, 33);

            this.sign_input = {
                'name': this.add.bitmapText(928 * 0.4, 90, 'carrier_command', '' + this.game.inputBuffer),
                'isPassword': false
            };
            this.sign_input.name_title = this.add.bitmapText(928 * 0.18, 90, 'carrier_command', 'NAME: ');
            this.sign_input.name_title.fixedToCamera = true;
            this.sign_input.name_title.visible = false;
            this.sign_input.name.fixedToCamera = true;
            this.sign_input.name.visible = false;
            this.talk_sign_save = this.add.sprite(1211, 745 - 132 + 40, 'talk');
            this.talk_sign_save.anchor.set(0, 1);
            this.talk_sign_save.visible = false;
            this.talk_sign_save.inputEnabled = true;
            this.talk_sign_save.input.useHandCursor = true;
            this.talk_sign_save.mask = this.add.graphics(1211, 745 - 132);
            this.talk_sign_save.mask.anchor.set(0, 1);
            this.talk_sign_save.mask.beginFill(0x000000);
            this.talk_sign_save.mask.drawRect(0, -33, 45, 33);
            this.talk_sign_save.events.onInputUp.add(function () {
                _this2.info_back.text.visible = false;
                _this2.sign_input.name.visible = true;
                _this2.sign_input.name_title.visible = true;
            });

            this.talk_sign_exitdoor = this.add.sprite(1501, 745 - 102 + 40, 'talk');
            this.talk_sign_exitdoor.anchor.set(0, 1);
            this.talk_sign_exitdoor.visible = false;
            this.talk_sign_exitdoor.inputEnabled = true;
            this.talk_sign_exitdoor.input.useHandCursor = true;
            this.talk_sign_exitdoor.mask = this.add.graphics(1501, 745 - 102);
            this.talk_sign_exitdoor.mask.anchor.set(0, 1);
            this.talk_sign_exitdoor.mask.beginFill(0x000000);
            this.talk_sign_exitdoor.mask.drawRect(0, -33, 45, 33);
            this.talk_sign_exitdoor.btns = {
                'stage1': this.add.bitmapText(928 * 0.5, 60, 'carrier_command', 'Stage 1 (Beginner)'),
                'stage2': this.add.bitmapText(928 * 0.5, 120, 'carrier_command', 'Stage 2 (Advanced)')
            };
            this.talk_sign_exitdoor.btns.stage1.tint = 0x331111;
            this.talk_sign_exitdoor.btns.stage2.tint = 0x331111;
            this.talk_sign_exitdoor.btns.stage1.anchor.set(0.5, 0);
            this.talk_sign_exitdoor.btns.stage2.anchor.set(0.5, 0);
            this.talk_sign_exitdoor.btns.stage1.visible = false;
            this.talk_sign_exitdoor.btns.stage2.visible = false;
            this.talk_sign_exitdoor.btns.stage1.fontSize = 20;
            this.talk_sign_exitdoor.btns.stage2.fontSize = 20;
            this.talk_sign_exitdoor.btns.stage1.fixedToCamera = true;
            this.talk_sign_exitdoor.btns.stage2.fixedToCamera = true;
            this.talk_sign_exitdoor.btns.stage1.inputEnabled = true;
            this.talk_sign_exitdoor.btns.stage1.input.useHandCursor = true;
            this.talk_sign_exitdoor.btns.stage1.events.onInputUp.add(function () {
                _this2.state.start('Stage1');
            });
            this.talk_sign_exitdoor.btns.stage2.inputEnabled = true;
            this.talk_sign_exitdoor.btns.stage2.input.useHandCursor = true;
            this.talk_sign_exitdoor.btns.stage2.events.onInputUp.add(function () {
                _this2.state.start('Stage2');
            });
            this.talk_sign_exitdoor.events.onInputUp.add(function () {
                _this2.info_back.text.visible = false;
                _this2.talk_sign_exitdoor.btns.stage1.visible = true;
                _this2.talk_sign_exitdoor.btns.stage2.visible = true;
            }, this);

            this.prist = this.add.sprite(312, 745, 'prist');
            this.prist.anchor.set(0, 1);
            this.prist.sign = this.talk_sign_prist;
            this.prist.tween = this.add.tween(this.talk_sign_prist).to({ y: 745 - 112 }, 300);
            this.prist.tween_back = this.add.tween(this.talk_sign_prist).to({ y: 745 - 112 + 40 }, 300);

            this.pumpgirl = this.add.sprite(613, 745, 'pumpgirl');
            this.pumpgirl.anchor.set(0, 1);
            this.pumpgirl.sign = this.talk_sign_pumpgirl;
            this.pumpgirl.animations.add('idle', [0, 1, 2], 5, true);
            this.pumpgirl.animations.play('idle');
            this.pumpgirl.tween = this.add.tween(this.talk_sign_pumpgirl).to({ y: 745 - 92 }, 300);
            this.pumpgirl.tween_back = this.add.tween(this.talk_sign_pumpgirl).to({ y: 745 - 92 + 40 }, 300);

            this.bookgirl = this.add.sprite(851, 745, 'bookgirl');
            this.bookgirl.anchor.set(0, 1);
            this.bookgirl.sign = this.talk_sign_bookgirl;
            this.bookgirl.animations.add('idle', [0, 1, 2, 3, 4, 5], 8, true);
            this.bookgirl.animations.play('idle');
            this.bookgirl.tween = this.add.tween(this.talk_sign_bookgirl).to({ y: 745 - 92 }, 300);
            this.bookgirl.tween_back = this.add.tween(this.talk_sign_bookgirl).to({ y: 745 - 92 + 40 }, 300);

            this.save = this.add.sprite(1211, 745, 'saveboy');
            this.save.anchor.set(0, 1);
            this.save.sign = this.talk_sign_save;
            this.save.animations.add('idle', [0, 1, 2, 3], 8, true);
            this.save.animations.play('idle');
            this.save.tween = this.add.tween(this.talk_sign_save).to({ y: 745 - 132 }, 300);
            this.save.tween_back = this.add.tween(this.talk_sign_save).to({ y: 745 - 132 + 40 }, 300);

            this.exitdoor = this.add.sprite(1501, 745, 'exitdoor');
            this.exitdoor.anchor.set(0, 1);
            this.exitdoor.sign = this.talk_sign_exitdoor;
            this.exitdoor.animations.add('idle', [0, 1, 2, 3], 8, true);
            this.exitdoor.animations.play('idle');
            this.exitdoor.tween = this.add.tween(this.talk_sign_exitdoor).to({ y: 745 - 102 }, 300);
            this.exitdoor.tween_back = this.add.tween(this.talk_sign_exitdoor).to({ y: 745 - 102 + 40 }, 300);

            this.npc_layer.addMultiple([this.prist, this.pumpgirl, this.bookgirl, this.save, this.exitdoor]);

            this.input.keyboard.onPressCallback = this.processKey.bind(this);
        }
    }, {
        key: 'create_main_layer',
        value: function create_main_layer() {
            var _this3 = this;

            this.main_layer = this.add.group();

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
            } else {
                this.player = this.add.sprite(this.game.width * 0.5, 500, 'Player01');
                this.player.animations.add('leftwalk', [1, 2, 3, 4, 5, 6], 8, true);
                this.player.animations.add('rightwalk', [7, 8, 9, 10, 11, 12], 8, true);
                this.player.animations.add('leftjump', [13, 14, 15, 16, 17, 18], 10, true);
                this.player.animations.add('rightjump', [19, 20, 21, 22, 23, 24], 10, true);
                this.player.animations.add('leftrun', [25, 26, 27, 28, 29, 30], 8, true);
                this.player.animations.add('rightrun', [31, 32, 33, 34, 35, 36], 8, true);
            }
            this.physics.arcade.enable(this.player);
            this.player.body.collideWorldBounds = true;
            this.player.is_touching = false;
            this.player.body.bounce.set(0.3);
            this.player.anchor.set(0.5);
            this.player.angle = 0;
            this.player.body.gravity.y = 300;
            this.player.inputEnabled = true;
            this.player.events.onInputDown.add(function (sprite, pointer) {
                if (!_this3.game.mouse.is_down) {
                    _this3.game.mouse.is_down = true;
                    _this3.game.mouse.x = pointer.x;
                    _this3.game.mouse.y = pointer.y;
                    sprite.body.velocity.x = 0;
                    sprite.body.velocity.y = 0;

                    _this3.mouse_drag.alpha = 1;
                    _this3.player.body.gravity.y = _this3.player.body.gravity.y > 0 ? 25 : -25;
                }
            }, this);
            this.player.events.onInputUp.add(function (sprite, pointer) {
                _this3.game.total_life -= 1;
                _this3.game.mouse.is_down = false;
                _this3.game.time_angle = 0;
                _this3.game.last_time = _this3.time.now;
                var dx = _this3.game.mouse.x - pointer.x;
                var dy = _this3.game.mouse.y - pointer.y;
                sprite.body.velocity.x = dx > 0 ? Math.min(1000, dx * 5) : Math.max(-1000, dx * 5);
                sprite.body.velocity.y = dy > 0 ? Math.min(1000, dy * 5) : Math.max(-1000, dy * 5);
                _this3.mouse_drag.animations.play('fire').onComplete.add(function () {
                    _this3.mouse_drag.frame = 0;_this3.mouse_drag.alpha = 0;
                });
                _this3.player.body.gravity.y = _this3.player.body.gravity.y > 0 ? 300 : -300;
            }, this);

            this.talk_sign_pumpgirl.btns.player1.events.onInputUp.add(function () {
                _this3.game.player_choice = 0;
                _this3.player.loadTexture('Player00');
                _this3.player.animations.add('leftwalk', [13, 14, 15, 16, 17, 18], 8, true);
                _this3.player.animations.add('rightwalk', [19, 20, 21, 22, 23, 24], 8, true);
                _this3.player.animations.add('leftjump', [1, 2, 3, 4, 5, 6], 10, true);
                _this3.player.animations.add('rightjump', [7, 8, 9, 10, 11, 12], 10, true);
                _this3.player.animations.add('leftrun', [25, 26, 27, 28, 29, 30], 8, true);
                _this3.player.animations.add('rightrun', [31, 32, 33, 34, 35, 36], 8, true);
            });
            this.talk_sign_pumpgirl.btns.player2.events.onInputUp.add(function () {
                _this3.game.player_choice = 1;
                _this3.player.loadTexture('Player01');
                _this3.player.animations.add('leftwalk', [1, 2, 3, 4, 5, 6], 8, true);
                _this3.player.animations.add('rightwalk', [7, 8, 9, 10, 11, 12], 8, true);
                _this3.player.animations.add('leftjump', [13, 14, 15, 16, 17, 18], 10, true);
                _this3.player.animations.add('rightjump', [19, 20, 21, 22, 23, 24], 10, true);
                _this3.player.animations.add('leftrun', [25, 26, 27, 28, 29, 30], 8, true);
                _this3.player.animations.add('rightrun', [31, 32, 33, 34, 35, 36], 8, true);
            });
            this.talk_sign_pumpgirl.btns.player1.events.onInputOver.add(function () {
                _this3.add.tween(_this3.talk_sign_pumpgirl.btns.player1).to({ fontSize: 22 }, 100).start();
            });
            this.talk_sign_pumpgirl.btns.player2.events.onInputOver.add(function () {
                _this3.add.tween(_this3.talk_sign_pumpgirl.btns.player2).to({ fontSize: 22 }, 100).start();
            });
            this.talk_sign_pumpgirl.btns.player1.events.onInputOut.add(function () {
                _this3.add.tween(_this3.talk_sign_pumpgirl.btns.player1).to({ fontSize: 20 }, 100).start();
            });
            this.talk_sign_pumpgirl.btns.player2.events.onInputOut.add(function () {
                _this3.add.tween(_this3.talk_sign_pumpgirl.btns.player2).to({ fontSize: 20 }, 100).start();
            });
            this.talk_sign_exitdoor.btns.stage1.events.onInputOver.add(function () {
                _this3.add.tween(_this3.talk_sign_exitdoor.btns.stage1).to({ fontSize: 22 }, 100).start();
            });
            this.talk_sign_exitdoor.btns.stage2.events.onInputOver.add(function () {
                _this3.add.tween(_this3.talk_sign_exitdoor.btns.stage2).to({ fontSize: 22 }, 100).start();
            });
            this.talk_sign_exitdoor.btns.stage1.events.onInputOut.add(function () {
                _this3.add.tween(_this3.talk_sign_exitdoor.btns.stage1).to({ fontSize: 20 }, 100).start();
            });
            this.talk_sign_exitdoor.btns.stage2.events.onInputOut.add(function () {
                _this3.add.tween(_this3.talk_sign_exitdoor.btns.stage2).to({ fontSize: 20 }, 100).start();
            });

            this.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

            this.main_layer.addMultiple([this.mouse_drag, this.player]);
        }
    }, {
        key: 'update',
        value: function update() {
            var _this4 = this;

            // Physics Controller
            this.physics.arcade.collide(this.player, this.border_layer);

            // Mouse Effect
            var angle = this.math.angleBetween(this.input.activePointer.x, this.input.activePointer.y, this.player.body.position.x + this.player.offsetX - this.camera.x, this.player.body.position.y + this.player.offsetY - this.camera.y);
            var distance = Math.min(30, this.math.distance(this.input.activePointer.x, this.input.activePointer.y, this.player.body.position.x + this.player.offsetX - this.camera.x, this.player.body.position.y + this.player.offsetY - this.camera.y) * 0.25);
            if (this.game.mouse.is_down && this.input.activePointer.isDown) {
                if (this.game.mouse.x < this.input.activePointer.x) {
                    this.player.animations.play('' + (this.player.body.gravity.y < 0 ? 'rightjump' : 'leftjump'));
                } else {
                    this.player.animations.play('' + (this.player.body.gravity.y < 0 ? 'leftjump' : 'rightjump'));
                }
                this.mouse_drag.x = this.player.body.position.x + this.player.offsetX - Math.cos(angle) * distance * 1.8;
                this.mouse_drag.y = this.player.body.position.y + this.player.offsetY - Math.sin(angle) * distance * 1.8;
                this.mouse_drag.scale.set(0.5 * distance * 0.1, Math.max(0.5 * (distance * 0.05), 0.5));
                this.mouse_drag.rotation = angle;
            }

            // Player velocity force to zero
            if (this.player.body.velocity.x < 8 && this.player.body.velocity.x > -8) {
                this.player.body.velocity.x = 0;
            }

            // Player animations controller
            if (this.player.body.velocity.x < 0) {
                this.player.animations.play('' + (this.player.body.gravity.y < 0 ? 'rightrun' : 'leftrun'));
            } else if (this.player.body.velocity.x > 0) {
                this.player.animations.play('' + (this.player.body.gravity.y < 0 ? 'leftrun' : 'rightrun'));
            } else if (!this.game.mouse.is_down) {
                this.player.frame = 0;
                this.player.animations.stop();
            }

            // NPC effect
            var flag = 0;

            var _loop = function _loop(child) {
                if (_this4.player.x > child.x - 25 && _this4.player.x < child.x + 75) {
                    child.sign.visible = true;
                    child.tween.start();
                } else {
                    ++flag;
                    child.tween_back.start().onComplete.add(function () {
                        child.sign.visible = false;
                    });
                    if (child.key == 'exitdoor') {
                        _this4.talk_sign_exitdoor.btns.stage1.visible = false;
                        _this4.talk_sign_exitdoor.btns.stage2.visible = false;
                    } else if (child.key == 'pumpgirl') {
                        _this4.talk_sign_pumpgirl.btns.player1.visible = false;
                        _this4.talk_sign_pumpgirl.btns.player2.visible = false;
                    } else if (child.key == 'saveboy') {
                        _this4.sign_input.name_title.visible = false;
                        _this4.sign_input.name.visible = false;
                    }
                }
            };

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.npc_layer.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var child = _step.value;

                    _loop(child);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (flag == this.npc_layer.length) {
                this.info_back.text.visible = true;
            }

            // Layer effect
            if (this.player.x > 928 * 0.5 && this.player.x < 1586 - 928 * 0.5) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.layer_1.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var child = _step2.value;

                        child.x -= this.player.body.velocity.x * 0.0025;
                        if (child.x < -1586) {
                            child.x += 1586 * 2;
                        } else if (child.x > 1586) {
                            child.x -= 1586 * 2;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = this.layer_2.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _child = _step3.value;

                        _child.x -= this.player.body.velocity.x * 0.006;
                        if (_child.x < -1586) {
                            _child.x += 1586 * 2;
                        } else if (_child.x > 1586) {
                            _child.x -= 1586 * 2;
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = this.layer_3.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var _child2 = _step4.value;

                        _child2.x -= this.player.body.velocity.x * 0.0095;
                        if (_child2.x < -1586) {
                            _child2.x += 1586 * 2;
                        } else if (_child2.x > 1586) {
                            _child2.x -= 1586 * 2;
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = this.layer_5.children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var _child3 = _step5.value;

                        _child3.x -= this.player.body.velocity.x * 0.015;
                        if (_child3.x < -1586) {
                            _child3.x += 1586 * 2;
                        } else if (_child3.x > 1586) {
                            _child3.x -= 1586 * 2;
                        }
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }
            }
            this.sign_input.name.text = '' + this.game.inputBuffer;
        }
    }, {
        key: 'processKey',
        value: function processKey(key) {
            if (this.game.input.keyboard.lastKey.keyCode == Phaser.Keyboard.ENTER) {
                if (this.game.inputBuffer !== '') {
                    // firebase.database().ref(`m_leaderboard${bgIdx}`).push({
                    //     name: `${this.game.inputBuffer}`,
                    //     score: `${this.global.score}`,
                    // });
                    this.game.inputBuffer = '';
                    this.sign_input.name_title.text = 'PSWD: ';
                    this.sign_input.isPassword = true;
                }
            } else if (this.game.input.keyboard.lastKey.keyCode == Phaser.Keyboard.BACKSPACE) {
                this.game.inputBuffer = this.game.inputBuffer.slice(0, -1);
            } else {
                if (!this.sign_input.isPassword && this.game.inputBuffer.length < 10) {
                    this.game.inputBuffer += String(key);
                } else if (this.sign_input.isPassword && this.game.inputBuffer.length < 4) {
                    this.game.inputBuffer += String(key);
                }
            }
        }
    }]);

    return Menu;
}(Phaser.State);

exports.default = Menu;

/***/ }),

/***/ "./states/Over.js":
/*!************************!*\
  !*** ./states/Over.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Over = function (_Phaser$State) {
    _inherits(Over, _Phaser$State);

    function Over() {
        _classCallCheck(this, Over);

        return _possibleConstructorReturn(this, (Over.__proto__ || Object.getPrototypeOf(Over)).call(this));
    }

    _createClass(Over, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.angle = 0;
            this.Text3D();
            this.start_text = this.add.bitmapText(928 * 0.5, 793 * 0.8, 'carrier_command', 'Click To Menu');
            this.start_text.anchor.set(0.5, 0);
            this.start_text.fontSize = 40;
            this.start_text_tween = this.add.tween(this.start_text).to({ alpha: 0.5 }).yoyo(true).loop().start();
            this.start_text.inputEnabled = true;
            this.start_text.input.useHandCursor = true;
            this.start_text.events.onInputUp.add(function () {
                var elem = document.getElementById('cc');
                elem.parentNode.removeChild(elem);
                _this2.state.start('Menu');
            }, this);
        }
    }, {
        key: 'Text3D',
        value: function Text3D() {
            var width = 928;
            var height = 600;

            var renderer = new THREE.WebGLRenderer();
            renderer.setSize(width, height);
            renderer.domElement.id = 'cc';
            renderer.domElement.style = 'position: absolute; top:8px; left:8px;';
            document.body.appendChild(renderer.domElement);

            var scene = new THREE.Scene();

            var camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
            camera.position.set(+24, 0, +40);

            var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
            scene.add(ambientLight);

            var directionalLight = new THREE.DirectionalLight(0xFFFFFF);
            directionalLight.position.set(1, 1, 1);
            scene.add(directionalLight);

            var text_r = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 2, 0], [4, 3, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0], [4, 0, 0], [3, 1, 0]];
            var text_e = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 2, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [4, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0]];
            var text_o = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [1, 4, 0], [2, 4, 0], [3, 4, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0]];
            var text_v = [[0, 4, 0], [0, 3, 0], [1, 2, 0], [1, 1, 0], [2, 0, 0], [3, 1, 0], [3, 2, 0], [4, 3, 0], [4, 4, 0]];

            var group_o = new THREE.Group();
            for (var i = 0; i < text_o.length; i++) {
                var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
                var cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xf0fff0 });
                var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
                cube.position.x = text_o[i][0] + 12;
                cube.position.y = text_o[i][1];
                cube.position.z = text_o[i][2];
                group_o.add(cube);
            }
            scene.add(group_o);

            var group_v = new THREE.Group();
            for (var _i = 0; _i < text_v.length; _i++) {
                var _cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
                var _cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xf0fff0 });
                var _cube = new THREE.Mesh(_cubeGeometry, _cubeMaterial);
                _cube.position.x = text_v[_i][0] + 18;
                _cube.position.y = text_v[_i][1];
                _cube.position.z = text_v[_i][2];
                group_v.add(_cube);
            }
            scene.add(group_v);

            var group_e = new THREE.Group();
            for (var _i2 = 0; _i2 < text_e.length; _i2++) {
                var _cubeGeometry2 = new THREE.BoxGeometry(1, 1, 1);
                var _cubeMaterial2 = new THREE.MeshStandardMaterial({ color: 0xf0fff0 });
                var _cube2 = new THREE.Mesh(_cubeGeometry2, _cubeMaterial2);
                _cube2.position.x = text_e[_i2][0] + 24;
                _cube2.position.y = text_e[_i2][1];
                _cube2.position.z = text_e[_i2][2];
                group_e.add(_cube2);
            }
            scene.add(group_e);

            var group_r = new THREE.Group();
            for (var _i3 = 0; _i3 < text_r.length; _i3++) {
                var _cubeGeometry3 = new THREE.BoxGeometry(1, 1, 1);
                var _cubeMaterial3 = new THREE.MeshStandardMaterial({ color: 0xf0fff0 });
                var _cube3 = new THREE.Mesh(_cubeGeometry3, _cubeMaterial3);
                _cube3.position.x = text_r[_i3][0] + 30;
                _cube3.position.y = text_r[_i3][1];
                _cube3.position.z = text_r[_i3][2];
                group_r.add(_cube3);
            }
            scene.add(group_r);

            var render = function () {
                var time = new Date();
                requestAnimationFrame(render);
                this.angle += 0.01;

                group_o.rotation.x -= 0.015;
                group_v.rotation.x -= 0.02;
                group_e.rotation.x -= 0.025;
                group_r.rotation.x -= 0.03;

                renderer.render(scene, camera);
                directionalLight.position.set(1, Math.cos(time.getSeconds() / 100), 1);
            }.bind(this);
            render();
        }
    }]);

    return Over;
}(Phaser.State);

exports.default = Over;

/***/ }),

/***/ "./states/Stage1.js":
/*!**************************!*\
  !*** ./states/Stage1.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stage1 = function (_Phaser$State) {
    _inherits(Stage1, _Phaser$State);

    function Stage1() {
        _classCallCheck(this, Stage1);

        return _possibleConstructorReturn(this, (Stage1.__proto__ || Object.getPrototypeOf(Stage1)).call(this));
    }

    _createClass(Stage1, [{
        key: 'create',
        value: function create() {
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
                'melo03': this.add.audio('melo03')
            };
            this.counter = {
                'combo': 0,
                'lastType': ''
            };
            this.tween_down = this.add.tween(this.player).to({ angle: 180 }, 250);
            this.tween_up = this.add.tween(this.player).to({ angle: 0 }, 250);
            this.destroy_emitter = this.add.group();
            this.boss.move_effect = null;
            this.boss.last_time = 0;
            this.is_boss_state = false;
            this.bullets = [];
        }
    }, {
        key: 'create_layers',
        value: function create_layers() {
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
    }, {
        key: 'init_sign_layer',
        value: function init_sign_layer() {
            this.sign_layer_pos = [800, 900];
            this.boss_gate = {
                'back': this.add.sprite(963, 585, 'Boss_Gate03'),
                'down': this.add.sprite(900, 500, 'Boss_Gate02'),
                'up': this.add.sprite(900, 500, 'Boss_Gate01'),
                'door': this.add.sprite(900, 500, 'Boss_Gate00'),
                'front': this.add.sprite(900, 500, 'Boss_Gate04'),
                'valid': false
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

            this.sign_layer.addMultiple([this.boss_gate.back, this.boss_gate.back.mask, this.boss_gate.down, this.boss_gate.down.mask, this.boss_gate.up, this.boss_gate.up.mask, this.boss_gate.door, this.boss_gate.front, this.boss_gate_sign, this.boss_gate_sign00, this.boss_gate_sign_bloom]);
        }
    }, {
        key: 'init_obstacle_layer',
        value: function init_obstacle_layer() {
            this.obstacle_layer_pos = [];
            this.obstacles = [];
            for (var i = 0; i < 20; ++i) {
                var random_decision = Math.random();
                var spawn = this.create_unique_value(10000, this.sign_layer_pos);
                this.obstacle_layer_pos.push(spawn);

                var obstacle = void 0;
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
    }, {
        key: 'init_enemy_layer',
        value: function init_enemy_layer() {
            for (var i = 0; i < 4; ++i) {
                for (var j = 0; j < this.game.total_enemies; ++j) {
                    var spawn = this.create_unique_value(4000, this.sign_layer_pos.concat(this.obstacle_layer_pos));
                    var enemy = this.enemy_layer.create(spawn, i < 2 ? Math.random() * 150 + 500 : 600, 'Enemy0' + i);
                    enemy.anchor.set(0.5);
                    enemy.scale.set(1.2);
                    enemy.angle = Math.random() * 180;
                }
            }
            this.enemy_layer.setAll('body.gravity.y', 300);
        }
    }, {
        key: 'init_front_layer',
        value: function init_front_layer() {
            this.front_layer.create(0, 0, 'Map01_Layer00');
            this.front_layer.create(this.game.width, 0, 'Map01_Layer00');
        }
    }, {
        key: 'init_target_layer',
        value: function init_target_layer() {
            var _this2 = this;

            this.target_large = this.add.sprite(0, 0, 'Target_Large00');
            this.target_large.anchor.set(0.5);
            this.add.tween(this.target_large.scale).to({ x: 0.8, y: 0.8 }, 4000, Phaser.Easing.Linear.None).yoyo(true).loop().start();
            this.add.tween(this.target_large).to({ angle: 360 }, 5000).loop().start();
            this.target_large.inputEnabled = true;
            this.target_large.events.onInputDown.add(function (sprite, pointer) {
                if (!_this2.game.mouse.is_down) {
                    _this2.game.mouse.is_down = true;
                    _this2.game.mouse.x = pointer.x;
                    _this2.game.mouse.y = pointer.y;
                    _this2.player.body.velocity.x = 0;
                    _this2.player.body.velocity.y = 0;

                    _this2.mouse_drag.alpha = 1;
                    _this2.player.body.gravity.y = _this2.player.body.gravity.y > 0 ? 25 : -25;
                }
            }, this);
            this.target_large.events.onInputUp.add(function (sprite, pointer) {
                _this2.game.total_life -= 1;
                _this2.game.mouse.is_down = false;
                _this2.game.time_angle = 0;
                _this2.game.last_time = _this2.time.now;
                var dx = _this2.game.mouse.x - pointer.x;
                var dy = _this2.game.mouse.y - pointer.y;
                _this2.player.body.velocity.x = dx > 0 ? Math.min(1000, dx * 5) : Math.max(-1000, dx * 5);
                _this2.player.body.velocity.y = dy > 0 ? Math.min(1000, dy * 5) : Math.max(-1000, dy * 5);

                _this2.mouse_drag.animations.play('fire').onComplete.add(function () {
                    _this2.mouse_drag.frame = 0;_this2.mouse_drag.alpha = 0;
                });
                _this2.player.body.gravity.y = _this2.player.body.gravity.y > 0 ? 300 : -300;
            }, this);
            this.boss_HP = {
                'front': this.add.sprite(this.game.width * 0.06, this.game.height - 20, 'HP_Front'),
                'back': this.add.sprite(this.game.width * 0.06, this.game.height - 20, 'HP_Back')
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
    }, {
        key: 'init_border_layer',
        value: function init_border_layer() {
            this.border_layer.enableBody = true;
            for (var i = this.game.map1_boundary.left - 400; i < this.game.map1_boundary.right; i += 900) {
                this.border_layer.create(i, this.game.settings.border_bottom_offset_y, 'Map01_Layer01');
                this.border_layer.create(i, this.game.settings.border_top_offset_y, 'Map01_Layer02');
            }
            this.boundary_RH = this.add.sprite(this.game.map1_boundary.right, 458, 'Boundary');
            this.boundary_LH = this.add.sprite(this.game.map1_boundary.left, 458, 'Boundary');
            this.boundary_LH.scale.set(-1, 1);
            this.border_layer.addMultiple([this.boundary_RH, this.boundary_LH]);
            this.border_layer.setAll('body.immovable', true);
        }
    }, {
        key: 'init_main_layer',
        value: function init_main_layer() {
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
            } else {
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
    }, {
        key: 'init_board',
        value: function init_board() {
            this.board = {
                'Enemy00Ratio': {
                    'cover': this.add.sprite(this.game.width * 0.4, this.game.height * 0.075, 'Enemy00'),
                    'text': this.add.text(this.game.width * 0.45, this.game.height * 0.05, '0%'),
                    'bar_back': this.add.sprite(this.game.width * 0.425, this.game.height * 0.075, 'Percentage_Back'),
                    'bar_front': this.add.sprite(this.game.width * 0.425, this.game.height * 0.075, 'Percentage_Front'),
                    'mask': this.add.graphics(this.game.width * 0.425, this.game.height * 0.075),
                    'total_clear': 0
                },
                'Enemy01Ratio': {
                    'cover': this.add.sprite(this.game.width * 0.7, this.game.height * 0.075, 'Enemy01'),
                    'text': this.add.text(this.game.width * 0.75, this.game.height * 0.05, '0%'),
                    'bar_back': this.add.sprite(this.game.width * 0.725, this.game.height * 0.075, 'Percentage_Back'),
                    'bar_front': this.add.sprite(this.game.width * 0.725, this.game.height * 0.075, 'Percentage_Front'),
                    'mask': this.add.graphics(this.game.width * 0.725, this.game.height * 0.075),
                    'total_clear': 0
                },
                'Enemy02Ratio': {
                    'cover': this.add.sprite(this.game.width * 0.45, this.game.height * 0.145, 'Enemy02'),
                    'text': this.add.text(this.game.width * 0.5, this.game.height * 0.12, '0%'),
                    'bar_back': this.add.sprite(this.game.width * 0.475, this.game.height * 0.145, 'Percentage_Back'),
                    'bar_front': this.add.sprite(this.game.width * 0.475, this.game.height * 0.145, 'Percentage_Front'),
                    'mask': this.add.graphics(this.game.width * 0.475, this.game.height * 0.145),
                    'total_clear': 0
                },
                'Enemy03Ratio': {
                    'cover': this.add.sprite(this.game.width * 0.75, this.game.height * 0.145, 'Enemy03'),
                    'text': this.add.text(this.game.width * 0.8, this.game.height * 0.12, '0%'),
                    'bar_back': this.add.sprite(this.game.width * 0.775, this.game.height * 0.145, 'Percentage_Back'),
                    'bar_front': this.add.sprite(this.game.width * 0.775, this.game.height * 0.145, 'Percentage_Front'),
                    'mask': this.add.graphics(this.game.width * 0.775, this.game.height * 0.145),
                    'total_clear': 0
                }
            };
            for (var i = 0; i < this.game.settings.total_enemy_types; ++i) {
                this.board['Enemy0' + i + 'Ratio'].cover.anchor.set(0.5);
                this.board['Enemy0' + i + 'Ratio'].text.anchor.set(0.5);
                this.board['Enemy0' + i + 'Ratio'].text.fontSize = 20;
                this.board['Enemy0' + i + 'Ratio'].text.fill = '#fff';
                this.board['Enemy0' + i + 'Ratio'].bar_back.anchor.set(0, 0.5);
                this.board['Enemy0' + i + 'Ratio'].bar_front.anchor.set(0, 0.5);
                this.board['Enemy0' + i + 'Ratio'].mask.anchor.set(0, 0.5);
                this.board['Enemy0' + i + 'Ratio'].mask.beginFill(0xffffff);
                this.board['Enemy0' + i + 'Ratio'].mask.drawRect(0, -20, 150, 40);
                this.board['Enemy0' + i + 'Ratio'].bar_front.mask = this.board['Enemy0' + i + 'Ratio'].mask;
            }
            this.board['Enemy00Ratio'].cover.animations.add('kill', [1, 2, 3, 4, 5], 8, false);
            this.board['Enemy01Ratio'].cover.animations.add('kill', [0, 1, 2, 3], 8, false);
            this.board['Enemy02Ratio'].cover.animations.add('kill', [0, 1, 2, 3, 4], 8, false);
            this.board['Enemy03Ratio'].cover.animations.add('kill', [0, 1, 2, 3, 4, 5], 8, false);

            this.life_icon = this.add.image(this.game.width * 0.045, this.game.height * 0.035, 'LifeIcon');
            this.life_icon.anchor.set(0.5);
            this.life_text = this.add.bitmapText(this.game.width * 0.15, this.game.height * 0.035, 'carrier_command', 'x' + this.game.total_life);
            this.life_text.anchor.set(0.5);
            this.life_text.scale.set(0.6);
            this.life_text.tint = 0x220000;
        }
    }, {
        key: 'check_duplicate',
        value: function check_duplicate(spawn, arr) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var used = _step.value;

                    if (spawn > used - 100 && spawn < used + 100) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return false;
        }
    }, {
        key: 'create_unique_value',
        value: function create_unique_value(boundary, arr) {
            var spawn = void 0;
            do {
                spawn = (Math.random() - 0.5) * boundary;
            } while (this.check_duplicate(spawn, arr));
            return spawn;
        }
    }, {
        key: 'update',
        value: function update() {
            var _this3 = this;

            var cur_time = this.time.now;

            // Physics Controller
            if (this.is_boss_state) {
                if (this.game.mouse.is_down == false) {
                    this.physics.arcade.collide(this.player, this.bullet_layer, function (player, bullet) {
                        return bullet.hit = true;
                    });
                }
                this.physics.arcade.overlap(this.boss, this.bullet_layer, this.handle_boss_hit.bind(this));
            }
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.enemy_layer.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var child = _step2.value;

                    if (this.board['Enemy' + child.key.substring(5, 7) + 'Ratio'].total_clear >= this.game.total_enemies) {
                        this.physics.arcade.collide(this.player, child, this.handle_obstacle_hit.bind(this));
                    } else {
                        this.physics.arcade.overlap(this.player, child, this.handle_enemy_hit.bind(this));
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.physics.arcade.collide(this.enemy_layer, [this.enemy_layer, this.border_layer, this.obstacle_layer, this.gravity_0, this.gravity_1]);
            this.physics.arcade.collide(this.player, [this.border_layer, this.obstacle_layer, this.main_layer], this.handle_gravity.bind(this));
            this.physics.arcade.collide(this.player, this.boss_gate_sign, this.handle_sign.bind(this));
            this.physics.arcade.overlap(this.player, this.boss_gate.door, this.handle_sign.bind(this));

            // Mouse Effect
            var angle = this.math.angleBetween(this.input.activePointer.x, this.input.activePointer.y, this.player.body.position.x + this.player.offsetX, this.player.body.position.y + this.player.offsetY);
            var distance = Math.min(30, this.math.distance(this.input.activePointer.x, this.input.activePointer.y, this.player.body.position.x + this.player.offsetX, this.player.body.position.y + this.player.offsetY) * 0.25);
            if (this.game.mouse.is_down && this.input.activePointer.isDown) {
                if (this.game.mouse.x < this.input.activePointer.x) {
                    this.player.animations.play('' + (this.player.body.gravity.y < 0 ? 'rightjump' : 'leftjump'));
                } else {
                    this.player.animations.play('' + (this.player.body.gravity.y < 0 ? 'leftjump' : 'rightjump'));
                }
                this.mouse_drag.x = this.player.body.position.x + this.player.offsetX - Math.cos(angle) * distance * 1.8;
                this.mouse_drag.y = this.player.body.position.y + this.player.offsetY - Math.sin(angle) * distance * 1.8;
                this.mouse_drag.scale.set(0.5 * distance * 0.1, Math.max(0.5 * (distance * 0.05), 0.5));
                this.mouse_drag.rotation = angle;
            }

            // Resistance
            if (!this.game.mouse.is_down) {
                this.game.time_angle = this.game.time_angle > 90 ? 90 : this.game.time_angle + (this.game.last_time - cur_time) * 0.00005;
                this.game.last_time = cur_time;
            }

            // Large pointer field
            this.target_large.x = this.player.body.position.x + this.player.offsetX;
            this.target_large.y = this.player.body.position.y + this.player.offsetY;

            // Control layer movement
            if (this.player.body.x > this.game.settings.active_right_bounder && this.boundary_RH.body.x > this.game.width - 50) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = this.back_layer_0.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _child = _step3.value;

                        _child.x -= this.player.body.velocity.x * 0.01;
                        if (_child.x < -this.game.width) {
                            _child.x += this.game.width * 2;
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = this.back_layer_1.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var _child2 = _step4.value;

                        _child2.x -= this.player.body.velocity.x * 0.005;
                        if (_child2.x < -this.game.width) {
                            _child2.x += this.game.width * 2;
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = this.front_layer.children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var _child3 = _step5.value;

                        _child3.x -= this.player.body.velocity.x * 0.02;
                        if (_child3.x < -this.game.width) {
                            _child3.x += this.game.width * 2;
                        }
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }

                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = this.border_layer.children[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var _child4 = _step6.value;

                        _child4.x -= this.player.body.velocity.x * 0.015;
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }

                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = this.obstacle_layer.children[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var _child5 = _step7.value;

                        _child5.x -= this.player.body.velocity.x * 0.01;
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }

                if (!this.is_boss_state) {
                    var _iteratorNormalCompletion8 = true;
                    var _didIteratorError8 = false;
                    var _iteratorError8 = undefined;

                    try {
                        for (var _iterator8 = this.enemy_layer.children[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                            var _child6 = _step8.value;

                            _child6.x -= this.player.body.velocity.x * 0.01;
                        }
                    } catch (err) {
                        _didIteratorError8 = true;
                        _iteratorError8 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                _iterator8.return();
                            }
                        } finally {
                            if (_didIteratorError8) {
                                throw _iteratorError8;
                            }
                        }
                    }

                    var _iteratorNormalCompletion9 = true;
                    var _didIteratorError9 = false;
                    var _iteratorError9 = undefined;

                    try {
                        for (var _iterator9 = this.sign_layer.children[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                            var _child7 = _step9.value;

                            _child7.x -= this.player.body.velocity.x * 0.01;
                        }
                    } catch (err) {
                        _didIteratorError9 = true;
                        _iteratorError9 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion9 && _iterator9.return) {
                                _iterator9.return();
                            }
                        } finally {
                            if (_didIteratorError9) {
                                throw _iteratorError9;
                            }
                        }
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
                        var _iteratorNormalCompletion10 = true;
                        var _didIteratorError10 = false;
                        var _iteratorError10 = undefined;

                        try {
                            for (var _iterator10 = this.bullet_layer.children[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                var _child8 = _step10.value;

                                _child8.x -= this.player.body.velocity.x * 0.01;
                            }
                        } catch (err) {
                            _didIteratorError10 = true;
                            _iteratorError10 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion10 && _iterator10.return) {
                                    _iterator10.return();
                                }
                            } finally {
                                if (_didIteratorError10) {
                                    throw _iteratorError10;
                                }
                            }
                        }
                    }
                }
            } else if (this.player.body.x < this.game.settings.active_left_bounder && this.boundary_LH.body.x < 0 - 100) {
                var _iteratorNormalCompletion11 = true;
                var _didIteratorError11 = false;
                var _iteratorError11 = undefined;

                try {
                    for (var _iterator11 = this.back_layer_0.children[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                        var _child9 = _step11.value;

                        _child9.x -= this.player.body.velocity.x * 0.01;
                        if (_child9.x > this.game.width) {
                            _child9.x += -this.game.width * 2;
                        }
                    }
                } catch (err) {
                    _didIteratorError11 = true;
                    _iteratorError11 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion11 && _iterator11.return) {
                            _iterator11.return();
                        }
                    } finally {
                        if (_didIteratorError11) {
                            throw _iteratorError11;
                        }
                    }
                }

                var _iteratorNormalCompletion12 = true;
                var _didIteratorError12 = false;
                var _iteratorError12 = undefined;

                try {
                    for (var _iterator12 = this.back_layer_1.children[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                        var _child10 = _step12.value;

                        _child10.x -= this.player.body.velocity.x * 0.005;
                        if (_child10.x > this.game.width) {
                            _child10.x += -this.game.width * 2;
                        }
                    }
                } catch (err) {
                    _didIteratorError12 = true;
                    _iteratorError12 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion12 && _iterator12.return) {
                            _iterator12.return();
                        }
                    } finally {
                        if (_didIteratorError12) {
                            throw _iteratorError12;
                        }
                    }
                }

                var _iteratorNormalCompletion13 = true;
                var _didIteratorError13 = false;
                var _iteratorError13 = undefined;

                try {
                    for (var _iterator13 = this.front_layer.children[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                        var _child11 = _step13.value;

                        _child11.x -= this.player.body.velocity.x * 0.02;
                        if (_child11.x > this.game.width) {
                            _child11.x += -this.game.width * 2;
                        }
                    }
                } catch (err) {
                    _didIteratorError13 = true;
                    _iteratorError13 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion13 && _iterator13.return) {
                            _iterator13.return();
                        }
                    } finally {
                        if (_didIteratorError13) {
                            throw _iteratorError13;
                        }
                    }
                }

                var _iteratorNormalCompletion14 = true;
                var _didIteratorError14 = false;
                var _iteratorError14 = undefined;

                try {
                    for (var _iterator14 = this.border_layer.children[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                        var _child12 = _step14.value;

                        _child12.x -= this.player.body.velocity.x * 0.015;
                    }
                } catch (err) {
                    _didIteratorError14 = true;
                    _iteratorError14 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion14 && _iterator14.return) {
                            _iterator14.return();
                        }
                    } finally {
                        if (_didIteratorError14) {
                            throw _iteratorError14;
                        }
                    }
                }

                var _iteratorNormalCompletion15 = true;
                var _didIteratorError15 = false;
                var _iteratorError15 = undefined;

                try {
                    for (var _iterator15 = this.obstacle_layer.children[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                        var _child13 = _step15.value;

                        _child13.x -= this.player.body.velocity.x * 0.01;
                    }
                } catch (err) {
                    _didIteratorError15 = true;
                    _iteratorError15 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion15 && _iterator15.return) {
                            _iterator15.return();
                        }
                    } finally {
                        if (_didIteratorError15) {
                            throw _iteratorError15;
                        }
                    }
                }

                if (!this.is_boss_state) {
                    var _iteratorNormalCompletion16 = true;
                    var _didIteratorError16 = false;
                    var _iteratorError16 = undefined;

                    try {
                        for (var _iterator16 = this.enemy_layer.children[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                            var _child14 = _step16.value;

                            _child14.x -= this.player.body.velocity.x * 0.01;
                        }
                    } catch (err) {
                        _didIteratorError16 = true;
                        _iteratorError16 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion16 && _iterator16.return) {
                                _iterator16.return();
                            }
                        } finally {
                            if (_didIteratorError16) {
                                throw _iteratorError16;
                            }
                        }
                    }

                    var _iteratorNormalCompletion17 = true;
                    var _didIteratorError17 = false;
                    var _iteratorError17 = undefined;

                    try {
                        for (var _iterator17 = this.sign_layer.children[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                            var _child15 = _step17.value;

                            _child15.x -= this.player.body.velocity.x * 0.01;
                        }
                    } catch (err) {
                        _didIteratorError17 = true;
                        _iteratorError17 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion17 && _iterator17.return) {
                                _iterator17.return();
                            }
                        } finally {
                            if (_didIteratorError17) {
                                throw _iteratorError17;
                            }
                        }
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
                        var _iteratorNormalCompletion18 = true;
                        var _didIteratorError18 = false;
                        var _iteratorError18 = undefined;

                        try {
                            for (var _iterator18 = this.bullet_layer.children[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                                var _child16 = _step18.value;

                                _child16.x -= this.player.body.velocity.x * 0.01;
                            }
                        } catch (err) {
                            _didIteratorError18 = true;
                            _iteratorError18 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion18 && _iterator18.return) {
                                    _iterator18.return();
                                }
                            } finally {
                                if (_didIteratorError18) {
                                    throw _iteratorError18;
                                }
                            }
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
                this.player.animations.play('' + (this.player.body.gravity.y < 0 ? 'rightrun' : 'leftrun'));
            } else if (this.player.body.velocity.x > 0) {
                this.player.animations.play('' + (this.player.body.gravity.y < 0 ? 'leftrun' : 'rightrun'));
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
            for (var i = 0; i < this.game.settings.total_enemy_types; ++i) {
                var percent = Math.min(this.board['Enemy0' + i + 'Ratio'].total_clear, this.game.total_enemies) / this.game.total_enemies;
                this.board['Enemy0' + i + 'Ratio'].text.text = Math.round(percent * 100) + '%';
                this.board['Enemy0' + i + 'Ratio'].text.x = this.board['Enemy0' + i + 'Ratio'].cover.x + 32.5 + percent * 150;
                this.board['Enemy0' + i + 'Ratio'].mask.scale.set(percent, 1);
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
                    this.boss.move_effect.onComplete.add(function () {
                        _this3.tweens.remove(_this3.boss.move_effect);
                        // if(Math.random() > 0.2) {
                        _this3.boss.animations.play('attack');
                        setTimeout(function () {
                            _this3.boss.frame = 2;
                        }, 1000);
                        if (_this3.bullets.length == 0) {
                            var _iteratorNormalCompletion19 = true;
                            var _didIteratorError19 = false;
                            var _iteratorError19 = undefined;

                            try {
                                for (var _iterator19 = _this3.bullet_layer.children[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                                    var _child17 = _step19.value;

                                    _child17.destroy();
                                }
                            } catch (err) {
                                _didIteratorError19 = true;
                                _iteratorError19 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion19 && _iterator19.return) {
                                        _iterator19.return();
                                    }
                                } finally {
                                    if (_didIteratorError19) {
                                        throw _iteratorError19;
                                    }
                                }
                            }

                            _this3.bullets.length = 0;
                        }
                        _this3.time.events.repeat(Phaser.Timer.SECOND * 0.75, 3, function () {
                            var bullets = {
                                0: _this3.add.sprite(_this3.boss.x + 136, _this3.boss.y + 52, 'Enemy00'),
                                1: _this3.add.sprite(_this3.boss.x + 136, _this3.boss.y + 52, 'Enemy00'),
                                2: _this3.add.sprite(_this3.boss.x + 136, _this3.boss.y + 52, 'Enemy00')
                            };
                            for (var _i = 0; _i < 3; ++_i) {
                                bullets[_i].scale.set(1.5);
                                _this3.physics.arcade.enable(bullets[_i]);
                                bullets[_i].body.mass = 0.25;
                                bullets[_i].body.bounce.set(1);
                                bullets[_i].body.velocity.y = 200;
                                bullets[_i].hit = false;
                            }
                            bullets[0].body.velocity.x = -50;
                            bullets[1].body.velocity.x = 0;
                            bullets[2].body.velocity.x = 50;
                            // bullet.body.gravity.y = 200;
                            _this3.bullet_layer.addMultiple([bullets[0], bullets[1], bullets[2]]);
                            for (var _i2 = 0; _i2 < 3; ++_i2) {
                                _this3.bullets.push(bullets[_i2]);
                            }
                            bullets = {
                                0: _this3.add.sprite(_this3.boss.x - 145, _this3.boss.y + 52, 'Enemy01'),
                                1: _this3.add.sprite(_this3.boss.x - 145, _this3.boss.y + 52, 'Enemy01'),
                                2: _this3.add.sprite(_this3.boss.x - 145, _this3.boss.y + 52, 'Enemy01')
                            };
                            for (var _i3 = 0; _i3 < 3; ++_i3) {
                                bullets[_i3].scale.set(1.5);
                                _this3.physics.arcade.enable(bullets[_i3]);
                                bullets[_i3].body.mass = 0.25;
                                bullets[_i3].body.bounce.set(1);
                                bullets[_i3].body.velocity.y = 250;
                                bullets[_i3].hit = false;
                            }
                            bullets[0].body.velocity.x = -50;
                            bullets[1].body.velocity.x = 0;
                            bullets[2].body.velocity.x = 50;
                            // bullet.body.gravity.y = 200;
                            _this3.bullet_layer.addMultiple([bullets[0], bullets[1], bullets[2]]);
                            for (var _i4 = 0; _i4 < 3; ++_i4) {
                                _this3.bullets.push(bullets[_i4]);
                            }
                        }, _this3);
                        _this3.world.bringToTop(_this3.bullet_layer);
                        // }
                    });
                }
            }
            // Life window
            this.life_text.text = 'x' + this.game.total_life;
            // debug window
            // this.dbg.text = `FPS: ${this.time.fps}\nCurrent Mouse: (${this.input.activePointer.x}, ${this.input.activePointer.y})\nLast Mouse: (${this.game.mouse.x}, ${this.game.mouse.y})\nCombo: ${this.counter.combo}\n`;

            if (this.player.body.touching.none) {
                this.player.is_touching = false;
            }
            if (this.game.total_life < 0.1) {
                this.state.start('Over');
            }
        }
    }, {
        key: 'handle_gravity',
        value: function handle_gravity(player, gravity) {
            if (gravity.key == 'Gravity00') {
                player.body.gravity.y = 300;
                this.enemy_layer.setAll('body.gravity.y', 300);
            } else if (gravity.key == 'Gravity01') {
                player.body.gravity.y = -300;
                this.enemy_layer.setAll('body.gravity.y', -300);
            }
        }
    }, {
        key: 'handle_enemy_hit',
        value: function handle_enemy_hit(player, enemy) {
            var _this4 = this;

            enemy.body.enable = false;
            this.board[enemy.key + 'Ratio'].cover.animations.play('kill');
            var tween = this.add.tween(enemy.scale).to({ x: 1.75, y: 1.75 }, 175).start();
            tween.onComplete.add(function () {
                if (_this4.counter.lastType == enemy.key) {
                    _this4.counter.combo += 1;
                    _this4.audio['melo0' + _this4.counter.combo % 3].play();
                } else {
                    _this4.counter.combo = 1;
                    _this4.counter.lastType = enemy.key;
                    _this4.audio['melo00'].play();
                }
                _this4.tweens.remove(tween);
                var particle_size = _this4.counter.combo / 5;
                var emitter = _this4.add.emitter(enemy.x, enemy.y, particle_size);
                emitter.gravity = 0;
                emitter.makeParticles('Particle' + enemy.key.substring(5, 7));
                emitter.setXSpeed(-150, 150);
                emitter.setYSpeed(-150, 150);
                emitter.setScale(1, 0.5, 1, 0.5, 800);
                emitter.start(true, 800, null, particle_size);
                _this4.destroy_emitter.add(emitter);
                _this4.enemy_layer.remove(enemy);
                enemy.destroy();
                setTimeout(function () {
                    emitter.forEach(function (particle) {
                        var moveTo = _this4.add.tween(particle).to({ x: _this4.board['Enemy' + enemy.key.substring(5, 7) + 'Ratio'].cover.x, y: _this4.board['Enemy' + enemy.key.substring(5, 7) + 'Ratio'].cover.y }, 400).start();
                        moveTo.onComplete.add(function () {
                            _this4.tweens.remove(moveTo);
                        });
                    });
                }, 200);
                setTimeout(function () {
                    _this4.destroy_emitter.remove(emitter);
                    emitter.destroy();
                }, 600);
            }, this);
            this.board['Enemy' + enemy.key.substring(5, 7) + 'Ratio'].total_clear += 1;
            if (this.board['Enemy' + enemy.key.substring(5, 7) + 'Ratio'].total_clear > this.game.total_enemies - 1) {
                this.enemy_layer.forEach(function (child) {
                    if (child.key === enemy.key) {
                        child.body.immovable = true;
                        child.body.moves = false;
                    }
                });
            }
        }
    }, {
        key: 'handle_obstacle_hit',
        value: function handle_obstacle_hit(player, enemy) {
            if (!player.is_touching) {
                this.game.total_life -= 2;
                player.is_touching = true;
            }
        }
    }, {
        key: 'handle_sign',
        value: function handle_sign(player, sign) {
            var _this5 = this;

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
                this.boss_gate.up_effect.onComplete.add(function () {
                    _this5.boss_gate.valid = true;
                    _this5.boss_gate.up.mask.destroy();
                    _this5.boss_gate.up.destroy();
                    _this5.boss_gate.down.mask.destroy();
                    _this5.boss_gate.down.destroy();
                });
                this.boss_gate.front_effect.start();
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
    }, {
        key: 'handle_boss_hit',
        value: function handle_boss_hit(boss, bullet) {
            if (bullet.hit) {
                boss.hp -= 10;
                bullet.destroy();
            }
        }
    }]);

    return Stage1;
}(Phaser.State);

exports.default = Stage1;
;

/***/ }),

/***/ "./states/Stage2.js":
/*!**************************!*\
  !*** ./states/Stage2.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stage2 = function (_Phaser$State) {
    _inherits(Stage2, _Phaser$State);

    function Stage2() {
        _classCallCheck(this, Stage2);

        return _possibleConstructorReturn(this, (Stage2.__proto__ || Object.getPrototypeOf(Stage2)).call(this));
    }

    _createClass(Stage2, [{
        key: 'create',
        value: function create() {
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
                'melo03': this.add.audio('melo03')
            };
            this.counter = {
                'combo': 0,
                'lastType': ''
            };
            this.tween_down = this.add.tween(this.player).to({ angle: 180 }, 250);
            this.tween_up = this.add.tween(this.player).to({ angle: 0 }, 250);
            this.destroy_emitter = this.add.group();
            this.boss.move_effect = null;
            this.boss.last_time = 0;
            this.is_boss_state = false;
        }
    }, {
        key: 'create_layer_0',
        value: function create_layer_0() {
            this.layer_0 = this.add.image(0, 0, 'Map02_Layer0');
            this.layer_0.fixedToCamera = true;
            this.purple = this.add.graphics(0, 0);
            this.purple.beginFill(0x330033).drawRect(0, 0, 928, 793);
            this.purple.alpha = 0;
            this.purple.fixedToCamera = true;;
        }
    }, {
        key: 'create_layer_1',
        value: function create_layer_1() {
            this.layer_1 = this.add.group();
            this.layer_1.create(-99999, 800, 'Map02_Layer1');
            this.layer_1.create(-99999, 800, 'Map02_Layer1');
            this.layer_1.forEach(function (child) {
                child.animations.add('active', [0, 1], 5, true);
                child.animations.play('active');
            });
            this.layer_1.setAll('scale.x', 2);
            this.layer_1.setAll('scale.y', 2);
            this.layer_1.setAll('alpha', 0.55);
        }
    }, {
        key: 'create_layer_2',
        value: function create_layer_2() {
            this.layer_2 = this.add.group();
            this.layer_2.create(-99999, 800, 'Map02_Layer2');
            this.layer_2.create(-99999, 800, 'Map02_Layer2');
            this.layer_2.forEach(function (child) {
                child.animations.add('active', [0, 1], 5, true);
                child.animations.play('active');
            });
            this.layer_2.setAll('alpha', 0.65);
        }
    }, {
        key: 'create_layer_3',
        value: function create_layer_3() {
            this.layer_3 = this.add.group();
            this.layer_3.create(-99999, 800, 'Map02_Layer3');
            this.layer_3.create(-99999, 800, 'Map02_Layer3');
            this.layer_3.forEach(function (child) {
                child.animations.add('active', [0, 1], 5, true);
                child.animations.play('active');
            });
            this.layer_3.setAll('alpha', 0.75);
        }
    }, {
        key: 'create_sign_layer',
        value: function create_sign_layer() {
            this.sign_layer = this.add.group();

            var x = 4605,
                y = 4325;
            this.boss_gate = {
                'back': this.add.sprite(x + 63, y + 85, 'Boss_Gate03'),
                'down': this.add.sprite(x, y, 'Boss_Gate02'),
                'up': this.add.sprite(x, y, 'Boss_Gate01'),
                'door': this.add.sprite(x, y, 'Boss_Gate00'),
                'front': this.add.sprite(x, y, 'Boss_Gate04'),
                'valid': false
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

            this.sign_layer.addMultiple([this.boss_gate.back, this.boss_gate.back.mask, this.boss_gate.down, this.boss_gate.down.mask, this.boss_gate.up, this.boss_gate.up.mask, this.boss_gate.door, this.boss_gate.front, this.boss_gate_sign, this.boss_gate_sign00, this.boss_gate_sign_bloom]);
        }
    }, {
        key: 'create_main_layer',
        value: function create_main_layer() {
            var _this2 = this;

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

            this.init_pos = [{ x: 22, y: 25 }, { x: 208, y: 12 }, { x: 202, y: 150 }, { x: 26, y: 172 }, { x: 26, y: 172 }];
            var r = Math.floor(Math.random() * 4);

            if (this.game.player_choice == 0) {
                // this.player = this.add.sprite(this.init_pos[r].x * 45, this.init_pos[r].y * 45, 'Player00');
                this.player = this.add.sprite(112 * 45, 84 * 45, 'Player00');
                this.player.animations.add('leftwalk', [13, 14, 15, 16, 17, 18], 8, true);
                this.player.animations.add('rightwalk', [19, 20, 21, 22, 23, 24], 8, true);
                this.player.animations.add('leftjump', [1, 2, 3, 4, 5, 6], 10, true);
                this.player.animations.add('rightjump', [7, 8, 9, 10, 11, 12], 10, true);
                this.player.animations.add('leftrun', [25, 26, 27, 28, 29, 30], 8, true);
                this.player.animations.add('rightrun', [31, 32, 33, 34, 35, 36], 8, true);
            } else {
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
            this.player.events.onInputDown.add(function (sprite, pointer) {
                if (!_this2.game.mouse.is_down) {
                    _this2.game.mouse.is_down = true;
                    _this2.game.mouse.x = pointer.x;
                    _this2.game.mouse.y = pointer.y;
                    sprite.body.velocity.x = 0;
                    sprite.body.velocity.y = 0;

                    _this2.mouse_drag.alpha = 1;
                    _this2.player.body.gravity.y = _this2.player.body.gravity.y > 0 ? 25 : -25;
                }
            }, this);
            this.player.events.onInputUp.add(function (sprite, pointer) {
                _this2.game.total_life -= 1;
                _this2.game.mouse.is_down = false;
                _this2.game.time_angle = 0;
                _this2.game.last_time = _this2.time.now;
                var dx = _this2.game.mouse.x - pointer.x;
                var dy = _this2.game.mouse.y - pointer.y;
                sprite.body.velocity.x = dx > 0 ? Math.min(1000, dx * 5) : Math.max(-1000, dx * 5);
                sprite.body.velocity.y = dy > 0 ? Math.min(1000, dy * 5) : Math.max(-1000, dy * 5);
                _this2.mouse_drag.animations.play('fire').onComplete.add(function () {
                    _this2.mouse_drag.frame = 0;_this2.mouse_drag.alpha = 0;
                });
                _this2.player.body.gravity.y = _this2.player.body.gravity.y > 0 ? 300 : -300;
            }, this);
            this.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

            this.main_layer.addMultiple([this.mouse_drag, this.player, this.gravity_0, this.gravity_1]);
        }
    }, {
        key: 'create_map',
        value: function create_map() {
            this.map = this.add.tilemap('map');
            this.map.addTilesetImage('tileset');
            this.map_layer = this.map.createLayer('Layer 1');
            this.map_layer.resizeWorld();
            this.map.setCollisionByExclusion(Array.from(Array(70 - 58 + 1).keys()).map(function (t) {
                return t + 58;
            }));

            this.hidden_block = this.add.sprite(100 * 45, 87 * 45, 'HiddenBlock');
            this.physics.arcade.enable(this.hidden_block);
        }
    }, {
        key: 'create_layer_4',
        value: function create_layer_4() {
            this.layer_4 = this.add.group();
            this.layer_4.create(-99999, 800, 'Map02_Layer4');
            this.layer_4.create(-99999, 800, 'Map02_Layer4');
            this.layer_4.forEach(function (child) {
                child.animations.add('active', [0, 1], 5, true);
                child.animations.play('active');
            });
            this.layer_4.setAll('alpha', 0.85);
            this.layer_4.setAll('scale.y', -1);
        }
    }, {
        key: 'create_enemy_layer',
        value: function create_enemy_layer() {
            this.enemy_layer = this.add.physicsGroup(Phaser.Physics.ARCADE);
            for (var i = 0; i < 4; ++i) {
                for (var j = 0; j < this.game.total_enemies * 10; ++j) {
                    var enemy = this.enemy_layer.create(Math.random() * 9900, Math.random() * 8100, 'Enemy0' + i);
                    enemy.anchor.set(0.5);
                    enemy.angle = -90 + Math.random() * 180;
                }
            }
            this.enemy_layer.setAll('body.gravity.y', 300);
        }
    }, {
        key: 'create_bullet_layer',
        value: function create_bullet_layer() {
            this.bullet_layer = this.add.group();
        }
    }, {
        key: 'create_boss_layer',
        value: function create_boss_layer() {
            this.boss_HP = {
                'back': this.add.sprite(this.game.width * 0.06, this.game.height - 20, 'HP_Back'),
                'front': this.add.sprite(this.game.width * 0.06, this.game.height - 20, 'HP_Front')
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
            this.boss.animations.add('attack', Array.from(Array(6).keys()).map(function (x) {
                return x + 11;
            }), 8, false);
            this.boss.visible = false;
            this.boss.hp = 100;

            this.boss_HP.front.fixedToCamera = true;
            this.boss_HP.back.fixedToCamera = true;
            this.boss_HP.front.mask.fixedToCamera = true;

            // this.boss_layer = this.add.group();
            // this.boss_layer.addMultiple([this.boss_HP, this.boss]);
        }
    }, {
        key: 'create_minimap_layer',
        value: function create_minimap_layer() {
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
    }, {
        key: 'create_board_layer',
        value: function create_board_layer() {
            this.board_layer = this.add.group();
            this.board = {
                'Enemy00Ratio': {
                    'cover': this.add.sprite(this.game.width * 0.4, this.game.height * 0.075, 'Enemy00'),
                    'text': this.add.text(this.game.width * 0.45, this.game.height * 0.05, '0%'),
                    'bar_back': this.add.sprite(this.game.width * 0.425, this.game.height * 0.075, 'Percentage_Back'),
                    'bar_front': this.add.sprite(this.game.width * 0.425, this.game.height * 0.075, 'Percentage_Front'),
                    'mask': this.add.graphics(this.game.width * 0.425, this.game.height * 0.075),
                    'total_clear': 0
                },
                'Enemy01Ratio': {
                    'cover': this.add.sprite(this.game.width * 0.7, this.game.height * 0.075, 'Enemy01'),
                    'text': this.add.text(this.game.width * 0.75, this.game.height * 0.05, '0%'),
                    'bar_back': this.add.sprite(this.game.width * 0.725, this.game.height * 0.075, 'Percentage_Back'),
                    'bar_front': this.add.sprite(this.game.width * 0.725, this.game.height * 0.075, 'Percentage_Front'),
                    'mask': this.add.graphics(this.game.width * 0.725, this.game.height * 0.075),
                    'total_clear': 0
                },
                'Enemy02Ratio': {
                    'cover': this.add.sprite(this.game.width * 0.45, this.game.height * 0.145, 'Enemy02'),
                    'text': this.add.text(this.game.width * 0.5, this.game.height * 0.12, '0%'),
                    'bar_back': this.add.sprite(this.game.width * 0.475, this.game.height * 0.145, 'Percentage_Back'),
                    'bar_front': this.add.sprite(this.game.width * 0.475, this.game.height * 0.145, 'Percentage_Front'),
                    'mask': this.add.graphics(this.game.width * 0.475, this.game.height * 0.145),
                    'total_clear': 0
                },
                'Enemy03Ratio': {
                    'cover': this.add.sprite(this.game.width * 0.75, this.game.height * 0.145, 'Enemy03'),
                    'text': this.add.text(this.game.width * 0.8, this.game.height * 0.12, '0%'),
                    'bar_back': this.add.sprite(this.game.width * 0.775, this.game.height * 0.145, 'Percentage_Back'),
                    'bar_front': this.add.sprite(this.game.width * 0.775, this.game.height * 0.145, 'Percentage_Front'),
                    'mask': this.add.graphics(this.game.width * 0.775, this.game.height * 0.145),
                    'total_clear': 0
                }
            };
            for (var i = 0; i < this.game.settings.total_enemy_types; ++i) {
                this.board['Enemy0' + i + 'Ratio'].cover.anchor.set(0.5);
                this.board['Enemy0' + i + 'Ratio'].text.anchor.set(0.5);
                this.board['Enemy0' + i + 'Ratio'].text.fontSize = 20;
                this.board['Enemy0' + i + 'Ratio'].text.fill = '#fff';
                this.board['Enemy0' + i + 'Ratio'].bar_back.anchor.set(0, 0.5);
                this.board['Enemy0' + i + 'Ratio'].bar_front.anchor.set(0, 0.5);
                this.board['Enemy0' + i + 'Ratio'].mask.anchor.set(0, 0.5);
                this.board['Enemy0' + i + 'Ratio'].mask.beginFill(0xffffff);
                this.board['Enemy0' + i + 'Ratio'].mask.drawRect(0, -20, 150, 40);
                this.board['Enemy0' + i + 'Ratio'].bar_front.mask = this.board['Enemy0' + i + 'Ratio'].mask;

                this.board_layer.addMultiple([this.board['Enemy0' + i + 'Ratio'].cover, this.board['Enemy0' + i + 'Ratio'].text, this.board['Enemy0' + i + 'Ratio'].bar_back, this.board['Enemy0' + i + 'Ratio'].bar_front, this.board['Enemy0' + i + 'Ratio'].mask]);
            }
            this.board['Enemy00Ratio'].cover.animations.add('kill', [1, 2, 3, 4, 5], 8, false);
            this.board['Enemy01Ratio'].cover.animations.add('kill', [0, 1, 2, 3], 8, false);
            this.board['Enemy02Ratio'].cover.animations.add('kill', [0, 1, 2, 3, 4], 8, false);
            this.board['Enemy03Ratio'].cover.animations.add('kill', [0, 1, 2, 3, 4, 5], 8, false);

            this.life_icon = this.add.image(10, 10, 'LifeIcon');
            this.life_icon.scale.set(0.7);
            this.life_text = this.add.bitmapText(70, 15, 'carrier_command', 'x' + this.game.total_life);
            this.life_text.scale.set(0.6);
            this.life_text.tint = 0x220000;

            this.board_layer.addMultiple([this.life_icon, this.life_text]);

            this.board_layer.setAll('fixedToCamera', true);
        }
    }, {
        key: 'update',
        value: function update() {
            var _this3 = this;

            var cur_time = this.time.now;

            // Physics Controller
            if (this.is_boss_state) {
                if (!this.game.mouse.is_down) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = this.bullet_layer.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var child = _step.value;

                            // if (this.board[`Enemy${child.key.substring(5, 7)}Ratio`].total_clear >= this.game.total_enemies) {
                            this.physics.arcade.overlap(this.player, child, this.handle_player_hit.bind(this));
                            this.physics.arcade.overlap(this.player, child, this.handle_destroy_bullet.bind(this));
                            // } else {
                            //     this.physics.arcade.collide(this.player, child, (player, child) => child.hit = true);
                            // }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                this.physics.arcade.overlap(this.boss, this.bullet_layer, this.handle_boss_hit.bind(this));
            }
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.enemy_layer.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _child = _step2.value;

                    if (this.board['Enemy' + _child.key.substring(5, 7) + 'Ratio'].total_clear >= this.game.total_enemies) {
                        this.physics.arcade.collide(this.player, _child, this.handle_obstacle_hit.bind(this));
                    } else {
                        this.physics.arcade.overlap(this.player, _child, this.handle_enemy_hit.bind(this));
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.physics.arcade.collide(this.player, [this.main_layer, this.map_layer, this.map], this.handle_gravity.bind(this));
            this.physics.arcade.collide(this.enemy_layer, [this.map_layer, this.map]);
            this.physics.arcade.collide(this.enemy_layer);
            this.physics.arcade.collide(this.player, this.boss_gate_sign, this.handle_sign.bind(this));
            this.physics.arcade.overlap(this.player, this.boss_gate.door, this.handle_sign.bind(this));
            this.physics.arcade.overlap(this.player, this.bullet_layer, this.handle_player_hit.bind(this));
            this.physics.arcade.overlap(this.player, this.boss, this.handle_player_hit.bind(this));

            this.physics.arcade.overlap(this.hidden_block, this.player, function (block) {
                _this3.add.tween(_this3.hidden_block).to({ alpha: 0.5 }, 80).start();
                _this3.hidden_block.last_overlapped = _this3.time.now + 80;
            });
            if (this.hidden_block.last_overlapped && this.time.now > this.hidden_block.last_overlapped) {
                this.add.tween(this.hidden_block).to({ alpha: 1 }, 80).start();
            }

            // Mouse Effect
            var angle = this.math.angleBetween(this.input.activePointer.x, this.input.activePointer.y, this.player.body.position.x + this.player.offsetX - this.camera.x, this.player.body.position.y + this.player.offsetY - this.camera.y);
            var distance = Math.min(30, this.math.distance(this.input.activePointer.x, this.input.activePointer.y, this.player.body.position.x + this.player.offsetX - this.camera.x, this.player.body.position.y + this.player.offsetY - this.camera.y) * 0.25);
            if (this.game.mouse.is_down && this.input.activePointer.isDown) {
                if (this.game.mouse.x < this.input.activePointer.x) {
                    this.player.animations.play('' + (this.player.body.gravity.y < 0 ? 'rightjump' : 'leftjump'));
                } else {
                    this.player.animations.play('' + (this.player.body.gravity.y < 0 ? 'leftjump' : 'rightjump'));
                }
                this.mouse_drag.x = this.player.body.position.x + this.player.offsetX - Math.cos(angle) * distance * 1.8;
                this.mouse_drag.y = this.player.body.position.y + this.player.offsetY - Math.sin(angle) * distance * 1.8;
                this.mouse_drag.scale.set(0.5 * distance * 0.1, Math.max(0.5 * (distance * 0.05), 0.5));
                this.mouse_drag.rotation = angle;
            }

            // Resistance
            if (!this.game.mouse.is_down) {
                this.game.time_angle = this.game.time_angle > 90 ? 90 : this.game.time_angle + (this.game.last_time - cur_time) * 0.00005;
                this.game.last_time = cur_time;
            }

            // Player velocity force to zero
            if (this.player.body.velocity.x < 8 && this.player.body.velocity.x > -8) {
                this.player.body.velocity.x = 0;
            }

            // Player animations controller
            if (this.player.body.velocity.x < 0) {
                this.player.animations.play('' + (this.player.body.gravity.y < 0 ? 'rightrun' : 'leftrun'));
                this.player.dot.scale.x = -0.8;
            } else if (this.player.body.velocity.x > 0) {
                this.player.animations.play('' + (this.player.body.gravity.y < 0 ? 'leftrun' : 'rightrun'));
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
            for (var i = 1; i <= 4; ++i) {
                if (this['layer_' + i].getChildAt(0).x === -99999) {
                    this['layer_' + i].getChildAt(0).x = this.camera.x;
                }
            }
            if (this['layer_1'].getChildAt(1).x === -99999) {
                this['layer_1'].getChildAt(1).x = this.camera.x + 950 * 2;
            }
            for (var _i = 2; _i <= 4; ++_i) {
                if (this['layer_' + _i].getChildAt(1).x === -99999) {
                    this['layer_' + _i].getChildAt(1).x = this.camera.x + 950;
                }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.layer_1.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _child2 = _step3.value;

                    _child2.x -= this.player.body.velocity.x * 0.0005;
                    if (_child2.x < this.camera.x - 950 * 2) {
                        _child2.x = this.camera.x + 950 * 2;
                    } else if (_child2.x > this.camera.x + 950 * 2) {
                        _child2.x = this.camera.x - 950 * 2;
                    }
                    _child2.y = this.camera.y - 793;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.layer_2.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _child3 = _step4.value;

                    _child3.x -= this.player.body.velocity.x * 0.001;
                    if (_child3.x < this.camera.x - 950) {
                        _child3.x = this.camera.x + 950;
                    } else if (_child3.x > this.camera.x + 950) {
                        _child3.x = this.camera.x - 950;
                    }
                    _child3.y = this.camera.y;
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this.layer_3.children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _child4 = _step5.value;

                    _child4.x -= this.player.body.velocity.x * 0.005;
                    if (_child4.x < this.camera.x - 950) {
                        _child4.x = this.camera.x + 950;
                    } else if (_child4.x > this.camera.x + 950) {
                        _child4.x = this.camera.x - 950;
                    }
                    _child4.y = this.camera.y + 40;
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.layer_4.children[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var _child5 = _step6.value;

                    _child5.x -= this.player.body.velocity.x * 0.01;
                    if (_child5.x < this.camera.x - 950) {
                        _child5.x = this.camera.x + 950;
                    } else if (_child5.x > this.camera.x + 950) {
                        _child5.x = this.camera.x - 950;
                    }
                    _child5.y = this.camera.y + 770;
                }

                // Update minimap
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            this.minimap_layer.x = this.camera.x + 5;
            this.minimap_layer.y = this.camera.y + 5;

            var tx = -this.player.x / 9900 * 930 + 160;
            var ty = -this.player.y / 9900 * 930 + 160;
            this.minimap.x = tx > 0 ? 0 : tx < -620 ? -620 : tx;
            this.minimap.y = ty > 0 ? 0 : ty < -451 ? -451 : ty;
            this.player.dot.x = tx > 0 ? 160 - tx : tx < -620 ? 160 - 620 - tx : 160;
            this.player.dot.y = ty > 0 ? 160 - ty : ty < -451 ? 160 - 451 - ty : 160;

            // Update board status
            for (var _i2 = 0; _i2 < this.game.settings.total_enemy_types; ++_i2) {
                var percent = Math.min(this.board['Enemy0' + _i2 + 'Ratio'].total_clear, this.game.total_enemies) / this.game.total_enemies;
                this.board['Enemy0' + _i2 + 'Ratio'].text.text = Math.round(percent * 100) + '%';
                this.board['Enemy0' + _i2 + 'Ratio'].text.x = this.board['Enemy0' + _i2 + 'Ratio'].cover.x + 32.5 + percent * 150;
                this.board['Enemy0' + _i2 + 'Ratio'].mask.scale.set(percent, 1);
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
                    this.boss.move_effect.onComplete.add(function () {
                        _this3.tweens.remove(_this3.boss.move_effect);
                        _this3.boss.animations.play('attack');
                        setTimeout(function () {
                            _this3.boss.frame = 2;
                        }, 1000);
                        _this3.time.events.repeat(Phaser.Timer.SECOND * 0.75, 3, function () {
                            for (var _i3 = 0; _i3 < 6; ++_i3) {
                                var bullet = _this3.add.sprite(_this3.boss.x + (_i3 < 3 ? 136 : -145), _this3.boss.y + 52, 'Enemy0' + Math.floor(Math.random() * 3.99), 0, _this3.bullet_layer);
                                bullet.angle = -90 + Math.random() * 180;
                                _this3.physics.arcade.enable(bullet);
                                bullet.body.mass = 0.25;
                                bullet.body.bounce.set(1);
                                bullet.body.velocity.x = (_i3 - (_i3 < 3 ? 1 : 4)) * 80;
                                bullet.body.velocity.y = 200;
                                bullet.hit = false;
                                // if (this.board[`Enemy${bullet.key.substring(5, 7)}Ratio`].total_clear > this.game.total_enemies - 1) {
                                // bullet.body.immovable = true;
                                // bullet.body.moves = false;
                                // }
                            }
                        }, _this3);
                        _this3.world.bringToTop(_this3.bullet_layer);
                    });
                }
                this.bullet_layer.forEach(function (bullet) {
                    if (bullet.x < _this3.camera.x || bullet.x > _this3.camera.x + 928 || bullet.y < _this3.camera.y || bullet.y > _this3.camera.y + 793) {
                        bullet.destroy();
                    }
                });
            }

            // Life window
            this.life_text.text = 'x' + this.game.total_life;

            if (this.player.body.touching.none) {
                this.player.is_touching = false;
            }

            if (this.game.total_life < 0.1) {
                this.state.start('Over');
            }
        }
    }, {
        key: 'handle_gravity',
        value: function handle_gravity(player, gravity) {
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
    }, {
        key: 'handle_enemy_hit',
        value: function handle_enemy_hit(player, enemy) {
            var _this4 = this;

            enemy.body.enable = false;
            this.board[enemy.key + 'Ratio'].cover.animations.play('kill');
            var tween = this.add.tween(enemy.scale).to({ x: 1.75, y: 1.75 }, 175).start();
            tween.onComplete.add(function () {
                if (_this4.counter.lastType == enemy.key) {
                    _this4.counter.combo += 1;
                    _this4.audio['melo0' + _this4.counter.combo % 3].play();
                } else {
                    _this4.counter.combo = 1;
                    _this4.counter.lastType = enemy.key;
                    _this4.audio['melo00'].play();
                }
                _this4.tweens.remove(tween);
                var particle_size = _this4.counter.combo / 5;
                var emitter = _this4.add.emitter(enemy.x, enemy.y, particle_size);
                emitter.gravity = 0;
                emitter.makeParticles('Particle' + enemy.key.substring(5, 7));
                emitter.setXSpeed(-150, 150);
                emitter.setYSpeed(-150, 150);
                emitter.setScale(1, 0.5, 1, 0.5, 800);
                emitter.start(true, 800, null, particle_size);
                _this4.destroy_emitter.add(emitter);
                _this4.enemy_layer.remove(enemy);
                enemy.destroy();
                setTimeout(function () {
                    emitter.forEach(function (particle) {
                        var moveTo = _this4.add.tween(particle).to({ x: _this4.board['Enemy' + enemy.key.substring(5, 7) + 'Ratio'].cover.x, y: _this4.board['Enemy' + enemy.key.substring(5, 7) + 'Ratio'].cover.y }, 400).start();
                        moveTo.onComplete.add(function () {
                            _this4.tweens.remove(moveTo);
                        });
                    });
                }, 200);
                setTimeout(function () {
                    _this4.destroy_emitter.remove(emitter);emitter.destroy();
                }, 600);
            }, this);
            this.board['Enemy' + enemy.key.substring(5, 7) + 'Ratio'].total_clear += 1;
            if (this.board['Enemy' + enemy.key.substring(5, 7) + 'Ratio'].total_clear > this.game.total_enemies - 1) {
                this.enemy_layer.forEach(function (child) {
                    if (child.key === enemy.key) {
                        child.body.immovable = true;
                        child.body.moves = false;
                    }
                });
            }
        }
    }, {
        key: 'handle_obstacle_hit',
        value: function handle_obstacle_hit(player, enemy) {
            if (!player.is_touching) {
                this.game.total_life -= 2;
                player.is_touching = true;
            }
        }
    }, {
        key: 'handle_sign',
        value: function handle_sign(player, sign) {
            var _this5 = this;

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
                this.boss_gate.up_effect.onComplete.add(function () {
                    _this5.boss_gate.valid = true;
                    _this5.boss_gate.up.mask.destroy();
                    _this5.boss_gate.up.destroy();
                    _this5.boss_gate.down.mask.destroy();
                    _this5.boss_gate.down.destroy();
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
    }, {
        key: 'handle_boss_hit',
        value: function handle_boss_hit(boss, bullet, overlap) {
            if (bullet.hit) {
                boss.hp -= 5;
                bullet.destroy();
            }
        }
    }, {
        key: 'handle_player_hit',
        value: function handle_player_hit(player) {
            if (!player.is_touching) {
                this.game.total_life -= 2;
                player.is_touching = true;
            }
        }
    }, {
        key: 'handle_destroy_bullet',
        value: function handle_destroy_bullet(player, bullet) {
            var _this6 = this;

            bullet.body.enable = false;
            this.board[bullet.key + 'Ratio'].cover.animations.play('kill');
            var tween = this.add.tween(bullet.scale).to({ x: 1.75, y: 1.75 }, 175).start();
            tween.onComplete.add(function () {
                if (_this6.counter.lastType == bullet.key) {
                    _this6.counter.combo += 1;
                    _this6.audio['melo0' + _this6.counter.combo % 3].play();
                } else {
                    _this6.counter.combo = 1;
                    _this6.counter.lastType = bullet.key;
                    _this6.audio['melo00'].play();
                }
                _this6.tweens.remove(tween);
                _this6.bullet_layer.remove(bullet);
                bullet.destroy();
            }, this);
        }
    }]);

    return Stage2;
}(Phaser.State);

exports.default = Stage2;

/***/ }),

/***/ "./states/Start.js":
/*!*************************!*\
  !*** ./states/Start.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Start = function (_Phaser$State) {
        _inherits(Start, _Phaser$State);

        function Start() {
                _classCallCheck(this, Start);

                return _possibleConstructorReturn(this, (Start.__proto__ || Object.getPrototypeOf(Start)).call(this));
        }

        _createClass(Start, [{
                key: 'create',
                value: function create() {
                        var _this2 = this;

                        this.Text3D();
                        this.start_text = this.add.bitmapText(928 * 0.5, 793 * 0.8, 'carrier_command', 'Click To Start');
                        this.start_text.anchor.set(0.5, 0);
                        this.start_text_tween = this.add.tween(this.start_text).to({ alpha: 0.5 }).yoyo(true).loop().start();
                        this.start_text.fontSize = 40;
                        this.start_text.inputEnabled = true;
                        this.start_text.input.useHandCursor = true;
                        this.start_text.events.onInputUp.add(function () {
                                var elem = document.getElementById('dd');
                                elem.parentNode.removeChild(elem);
                                _this2.state.start('Menu');
                        }, this);
                }
        }, {
                key: 'Text3D',
                value: function Text3D() {
                        var width = 928;
                        var height = 600;

                        var renderer = new THREE.WebGLRenderer();
                        renderer.setSize(width, height);
                        renderer.domElement.id = 'dd';
                        renderer.domElement.style = 'position: absolute; top:8px; left:8px;';
                        document.body.appendChild(renderer.domElement);

                        var scene = new THREE.Scene();

                        var camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
                        camera.position.set(+24, 0, +40);

                        var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
                        scene.add(ambientLight);

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
                        for (var i = 0; i < text_p.length; i++) {
                                var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
                                var cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
                                var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
                                cube.position.x = text_p[i][0];
                                cube.position.y = text_p[i][1];
                                cube.position.z = text_p[i][2];
                                group_p.add(cube);
                        }
                        scene.add(group_p);

                        var group_r = new THREE.Group();
                        for (var _i = 0; _i < text_r.length; _i++) {
                                var _cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
                                var _cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
                                var _cube = new THREE.Mesh(_cubeGeometry, _cubeMaterial);
                                _cube.position.x = text_r[_i][0] + 6;
                                _cube.position.y = text_r[_i][1];
                                _cube.position.z = text_r[_i][2];
                                group_r.add(_cube);
                        }
                        scene.add(group_r);

                        var group_i = new THREE.Group();
                        for (var _i2 = 0; _i2 < text_i.length; _i2++) {
                                var _cubeGeometry2 = new THREE.BoxGeometry(1, 1, 1);
                                var _cubeMaterial2 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
                                var _cube2 = new THREE.Mesh(_cubeGeometry2, _cubeMaterial2);
                                _cube2.position.x = text_i[_i2][0] + 12;
                                _cube2.position.y = text_i[_i2][1];
                                _cube2.position.z = text_i[_i2][2];
                                group_i.add(_cube2);
                        }
                        scene.add(group_i);

                        var group_n1 = new THREE.Group();
                        for (var _i3 = 0; _i3 < text_n.length; _i3++) {
                                var _cubeGeometry3 = new THREE.BoxGeometry(1, 1, 1);
                                var _cubeMaterial3 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
                                var _cube3 = new THREE.Mesh(_cubeGeometry3, _cubeMaterial3);
                                _cube3.position.x = text_n[_i3][0] + 18;
                                _cube3.position.y = text_n[_i3][1];
                                _cube3.position.z = text_n[_i3][2];
                                group_n1.add(_cube3);
                        }
                        scene.add(group_n1);

                        var group_n2 = new THREE.Group();
                        for (var _i4 = 0; _i4 < text_n.length; _i4++) {
                                var _cubeGeometry4 = new THREE.BoxGeometry(1, 1, 1);
                                var _cubeMaterial4 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
                                var _cube4 = new THREE.Mesh(_cubeGeometry4, _cubeMaterial4);
                                _cube4.position.x = text_n[_i4][0] + 24;
                                _cube4.position.y = text_n[_i4][1];
                                _cube4.position.z = text_n[_i4][2];
                                group_n2.add(_cube4);
                        }
                        scene.add(group_n2);

                        var group_y = new THREE.Group();
                        for (var _i5 = 0; _i5 < text_y.length; _i5++) {
                                var _cubeGeometry5 = new THREE.BoxGeometry(1, 1, 1);
                                var _cubeMaterial5 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
                                var _cube5 = new THREE.Mesh(_cubeGeometry5, _cubeMaterial5);
                                _cube5.position.x = text_y[_i5][0] + 30;
                                _cube5.position.y = text_y[_i5][1];
                                _cube5.position.z = text_y[_i5][2];
                                group_y.add(_cube5);
                        }
                        scene.add(group_y);

                        var group_d = new THREE.Group();
                        for (var _i6 = 0; _i6 < text_d.length; _i6++) {
                                var _cubeGeometry6 = new THREE.BoxGeometry(1, 1, 1);
                                var _cubeMaterial6 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
                                var _cube6 = new THREE.Mesh(_cubeGeometry6, _cubeMaterial6);
                                _cube6.position.x = text_d[_i6][0] + 17;
                                _cube6.position.y = text_d[_i6][1] - 6;
                                _cube6.position.z = text_d[_i6][2];
                                group_d.add(_cube6);
                        }
                        scene.add(group_d);

                        var group_a = new THREE.Group();
                        for (var _i7 = 0; _i7 < text_a.length; _i7++) {
                                var _cubeGeometry7 = new THREE.BoxGeometry(1, 1, 1);
                                var _cubeMaterial7 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
                                var _cube7 = new THREE.Mesh(_cubeGeometry7, _cubeMaterial7);
                                _cube7.position.x = text_a[_i7][0] + 23;
                                _cube7.position.y = text_a[_i7][1] - 6;
                                _cube7.position.z = text_a[_i7][2];
                                group_a.add(_cube7);
                        }
                        scene.add(group_a);

                        var group_s = new THREE.Group();
                        for (var _i8 = 0; _i8 < text_s.length; _i8++) {
                                var _cubeGeometry8 = new THREE.BoxGeometry(1, 1, 1);
                                var _cubeMaterial8 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
                                var _cube8 = new THREE.Mesh(_cubeGeometry8, _cubeMaterial8);
                                _cube8.position.x = text_s[_i8][0] + 29;
                                _cube8.position.y = text_s[_i8][1] - 6;
                                _cube8.position.z = text_s[_i8][2];
                                group_s.add(_cube8);
                        }
                        scene.add(group_s);

                        var group_h = new THREE.Group();
                        for (var _i9 = 0; _i9 < text_h.length; _i9++) {
                                var _cubeGeometry9 = new THREE.BoxGeometry(1, 1, 1);
                                var _cubeMaterial9 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
                                var _cube9 = new THREE.Mesh(_cubeGeometry9, _cubeMaterial9);
                                _cube9.position.x = text_h[_i9][0] + 35;
                                _cube9.position.y = text_h[_i9][1] - 6;
                                _cube9.position.z = text_h[_i9][2];
                                group_h.add(_cube9);
                        }
                        scene.add(group_h);

                        var render = function render() {
                                var time = new Date();
                                requestAnimationFrame(render);

                                group_p.rotation.x -= 0.005;
                                group_r.rotation.x -= 0.01;
                                group_i.rotation.x -= 0.015;
                                group_n1.rotation.x -= 0.02;
                                group_n2.rotation.x -= 0.025;
                                group_y.rotation.x -= 0.03;

                                group_d.rotation.x -= 0.015;
                                group_a.rotation.x -= 0.02;
                                group_s.rotation.x -= 0.025;
                                group_h.rotation.x -= 0.03;

                                renderer.render(scene, camera);
                                directionalLight.position.set(1, Math.cos(time.getSeconds() / 100), 1);
                        };
                        render();
                }
        }]);

        return Start;
}(Phaser.State);

exports.default = Start;

/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi babel-polyfill firebase/database pixi p2 phaser ./index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"../node_modules/babel-polyfill/lib/index.js");
__webpack_require__(/*! firebase/database */"../node_modules/firebase/database/dist/index.esm.js");
__webpack_require__(/*! pixi */"../node_modules/phaser-ce/build/custom/pixi.js-exposed");
__webpack_require__(/*! p2 */"../node_modules/phaser-ce/build/custom/p2.js-exposed");
__webpack_require__(/*! phaser */"../node_modules/phaser-ce/build/custom/phaser-split.js-exposed");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map
>>>>>>> 429ced664ac2c5e375a4ff8ee22d64af1d38eefa
