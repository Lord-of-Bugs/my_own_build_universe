class mainScene {

    preload() {
        // load the bird
        this.load.image('player', 'assests/bird.png');
        // load the coin
        this.load.image('coin', 'assets/pngwing.com.png');
    }

    create() {
        this.player = this.physics.add.sprite(500, 500, 'player');
        this.coin = this.physics.add.sprite(800, 300, 'coin');

        this.score = 0;
        let style = { font: '20px Arial', fill: '#fff' };
        this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);
    }

    update() {

    }

}

new Phaser.Game({
    width: 1600, // Width of the game in pixels
    height: 900, // Height of the game in pixels
    backgroundColor: '#D3CEDF', // The background color 
    scene: mainScene, // The name of the scene we created
    physics: { default: 'arcade' }, // The physics engine to use
    parent: 'game', // Create the game inside the <div id="game"> 
  });
