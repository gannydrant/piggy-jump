// Create our 'main' state that will contain the game
class MainState {
    preload() { 
        game.load.spritesheet('walkingPiggy', 'assets/piggy_sprite_sheet.png', 174, 185);
        game.load.script('states/game_state');
    }

    create() {
        game.state.add('GameState', GameState);

        game.stage.backgroundColor = '#B3DEF4';

        let walkingPiggy = game.add.sprite(game.world.centerX - 90, game.world.centerY - 200, 'walkingPiggy');
        let walk = walkingPiggy.animations.add('walk');

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