/****
 * FSE100: examples for how to link multiple exercises together
 *****/

let currentActivity = 0;
let menuButton, game1Button, game2Button, game3Button, game4Button;

/*****
 * If you want to load images or sounds into your application,
 * try using preload()
 * https://p5js.org/reference/#/p5/preload
 *****/
function preload() {
  game1Preload();
  game2Preload();
  game3Preload();
}

function switchToMM() {
  background(220);
  currentActivity = 0;

  // Hide the home page button, show the activity buttons
  menuButton.hide();
  game1Button.show();
  game2Button.show();
  game3Button.show();
}

function setup() {
  createCanvas(400, 400);
  background(220);

  menuButton = createButton("Home Page");
  menuButton.position(0, 0);
  menuButton.mousePressed(switchToMM);
  menuButton.hide();

  let col = color(0, 100, 2);
  game1Button = createButton("Lets solve a maze!");
  game1Button.position(82, 150);
  game1Button.mousePressed(game1Setup);
  game1Button.show();
  game1Button.style("background-color", col);
  game1Button.style("font-size", "25px");

  let lol = color(100, 0, 100);
  game2Button = createButton("Tap the Circles!");
  game2Button.position(95, 200);
  game2Button.mousePressed(game2Setup);
  game2Button.show();
  game2Button.style("background-color", lol);
  game2Button.style("font-size", "25px");

  let dol = color(80, 80, 0);
  game3Button = createButton("Help feed the snake!");
  game3Button.position(78, 250);
  game3Button.mousePressed(game3Setup);
  game3Button.show();
  game3Button.style("background-color", dol);
  game3Button.style("font-size", "25px");
}

function draw() {
  switch (currentActivity) {
    case 0:
      mainMenu();
      break;
    case 1:
      game1Draw();
      break;
    case 2:
      game2Draw();
      break;
    case 3:
      game3Draw();
      break;
    case 4:
      game4Draw();
      break;
  }
}

function mainMenu() {
  background("blue");

  textSize(26);
  fill("white");
  text("Choose a game and have fun!", 30, 50);
}

/*****
 * mousePressed() is a reserved function that is called whenever
 * the user presses the mouse button in the application.
 *****/
function mousePressed() {
  // Only game 4 uses the mousePressed function, but the switch statement
  // makes it easy to add the mousePressed functionality for other games.
  switch (currentActivity) {
    case 2:
      break;
    case 4:
      game4MousePressed();
      break;
  }
}
