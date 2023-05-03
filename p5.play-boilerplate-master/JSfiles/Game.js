class Game {
    constructor () {

    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }

      start() {
        player = new Player();
        playerCount = player.getCount();
    
        form = new Form();
        form.display();
    
        dog1 = createSprite(50, 50, 200, 200);
        dog2 = createSprite(50, 50, 300, 200);
    
        dogs = [dog1, dog2];
    
        fuels = new Group();
        obstacles = new Group();
    
        var obstaclesPositions = [];
  
        this.addSprites(fuels, 0, fuelImage, 0);
        
        this.addSprites(
          obstacles,
          obstaclesPositions.length,
          obstacle1Image,
          0,
          obstaclesPositions
        );
      }

}

