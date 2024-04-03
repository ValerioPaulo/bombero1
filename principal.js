var juego= new Phaser.Game(640,340,Phaser.CANVAS,'bloque_juego');
var fondoJuego;
var persona;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;

var estadoPrincipal={
	preload:function () {
	
	juego.load.image('fondo','img/bgHouse.jpg');	
	
	juego.load.spritesheet('bomberos','img/bombero.png',64,64);


	},

	create:function(){
		fondoJuego = juego.add.tileSprite(0,0,640,340,'fondo');		
		persona = juego.add.sprite(juego.width/2, juego.height/2,'bomberos');
		persona.anchor.setTo(0.5);		

		//Animacion del personaje
		persona.animations.add('abajo',[0,1,2,3],7,true);
		persona.animations.add('izquierda',[4,5,6,7],7,true);
		persona.animations.add('derecha',[8,9,10,11],7,true);
		persona.animations.add('arriba',[12,13,14,15],7,true);

		//Movimientos de teclado
		teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		teclaArriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		teclaAbajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);

		//Estableciendo limites	del mapa
		juego.physics.startSystem(Phaser.Physics.ARCADE);
		juego.physics.arcade.enable(persona);
		persona.body.collideWorldBounds = true;

	},

	update:function(){
		fondoJuego.tilePosition.x-=1;
		
		if(teclaDerecha.isDown){

			persona.position.x+=2;
			persona.animations.play('derecha');
		}else if(teclaIzquierda.isDown){

			persona.position.x-=2;
			persona.animations.play('izquierda');
		}else if(teclaArriba.isDown){
			
			persona.position.y-=2;
			persona.animations.play('arriba');
		}else if(teclaAbajo.isDown){
			persona.position.y+=2;
			persona.animations.play('abajo');
		}
	}

};

juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');

