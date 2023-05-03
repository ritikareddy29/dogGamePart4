class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter Player name");
      this.playButton = createButton();
      this.titleImg = createImg();
      this.greeting = createElement("h2")
    }
  
    // add position values inside the parentheses//
    setElementsPosition() {
      this.titleImg.position();
      this.input.position();
      this.playButton.position();
      this.greeting.position();
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting");
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
    }
  
    handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.playButton.hide();
        var message = `
        Hello ${this.input.value()}
        </br> Please wait for another player to join`;
        this.greeting.html(message);
        playerCount += 1;
        player.name = this.input.value();
        player.index = playerCount;
        player.addPlayer();
        player.updateCount(playerCount);
        player.getDistance();
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
    }
  }
  