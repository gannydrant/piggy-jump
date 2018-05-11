// Create our 'main' state that will contain the game
class MainState {
    preload() { 
        game.load.spritesheet('walkingPiggy', 'assets/piggy_sprite_sheet.png', 174, 185);
        game.load.script('states/game_state');

        game.load.bitmapFont('flappyFont', 'assets/font/font.png', 'assets/font/font.fnt');
        game.load.image('desk', 'assets/desk_small.png');

    }

    create() {
        game.state.add('GameState', GameState);

        game.stage.backgroundColor = '#B3DEF4';

        let walkingPiggy = game.add.sprite(game.world.centerX - 90, game.world.centerY - 200, 'walkingPiggy');
        let walk = walkingPiggy.animations.add('walk');

        game.add.bitmapText(game.world.centerX - 100, 300, 'flappyFont', 'Flappy Pig', 80);

        game.add.image(0, 490 - 143, 'desk');

        walkingPiggy.animations.play('walk', 45, true);

        game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.startGame, this);
    }

    startGame() {
        game.state.start('GameState');
    }
}

// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(400, 490);

// Add the 'mainState' and call it 'main'
game.state.add('main', MainState); 

// Start the state to actually start the game
game.state.start('main');