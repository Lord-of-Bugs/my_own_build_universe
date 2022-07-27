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
        this.gameOverText = this.add.text(325, 450, 'You\'ve made it!', {font: '50px Arial', fill: '#fff'});
        this.gameOverText.setOrigin(0.5);
        this.gameOverText.visible = false;

        this.arrow = this.input.keyboard.createCursorKeys();
    }

    update() {

        // check if coin is hit by the player
        if (this.physics.overlap(this.player, this.coin)) {
            // Call the new hit() method
            this.hit();
        }

        // horizontal movement
        if (this.arrow.right.isDown) {
            this.player.x += 3;
        } else if (this.arrow.left.isDown) {
            this.player.x -= 3;
        } 
          
        // vertical movement
        if (this.arrow.down.isDown) {
            this.player.y += 3;
        } else if (this.arrow.up.isDown) {
            this.player.y -= 3;
        } 
    }

    hit() {

        this.score += 10;
        this.scoreText.setText('score: ' + this.score);

        // winning condition
        if (this.score >= 100) {
            this.arrow.enabled = false;
            this.gameOverText.visible = true;
            this.scene.pause();
        }

        // Change the position x and y of the coin randomly
        this.coin.x = Phaser.Math.Between(50, 850);
        this.coin.y = Phaser.Math.Between(50, 600);

        this.tweens.add({
            targets: this.player, // on the player 
            duration: 200, // for 200ms 
            scaleX: 1.2, // that scale vertically by 20% 
            scaleY: 1.2, // and scale horizontally by 20% 
            yoyo: true, // at the end, go back to original scale 
          });
      }
}

new Phaser.Game({
    width: 900, // Width of the game in pixels
    height: 650, // Height of the game in pixels
    backgroundColor: '#D3CEDF', // The background color 
    scene: mainScene, // The name of the scene we created
    physics: { default: 'arcade' }, // The physics engine to use
    parent: 'game', // Create the game inside the <div id="game"> 
  });
