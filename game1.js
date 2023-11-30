var doorOpen = 0;
var ready = -1;
var endMsg = "";
var c;

function game1Preload(){
  
}

function game1Setup(){
  background('#fae');
  currentActivity = 1;
  createCanvas(400, 400);
  
  
  // Hide the Game 1 button, show all the other navigation buttons
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  createCanvas(600, 580);
  background(220);
  c = 'blue'
  
  
}

function game1Draw(){
    var d = 220;
  // Reset background
	if(mouseX > 0 && mouseX < 120 && mouseY > 0 && mouseY < 30) {
    background(220)
  }
  noStroke();
  // Entrance Box
  textSize(20);
  fill('green');
  rect(0,0, 120, 30);
  fill('yellow');
  text("Entrance", 20, 20);
  
  // Exit Box
  fill('red');
  rect(530,0, 70, 30);
  fill(255);
  text("Exit", 550, 20);
  
  // Obstacles and Walls
  fill(0);
  // Big Walls
  rect(120,0, 100, 460);
  rect(220,360, 260, 100);
  rect(340,130, 260, 110);
  rect(430,0, 100, 110);
  // End Maze
	rect(340,30, 60, 100);
  rect(530,100, 50, 10);
  rect(550,70, 50, 10);
  rect(530,40, 50, 10);
  // Bubble Run
  ellipse(60,100, 80);
  ellipse(0,220, 120);
  ellipse(120,320, 120);
  ellipse(0, 420, 120);
  
  
  
  // Hidden door switch
	if(mouseX > 0 && mouseX < 20 && mouseY > 560 && mouseY < 580) {
    d = color('yellow');
    if(mouseIsPressed) {
      doorOpen = 1;
      fill(220);
  		rect(340,0, 10, 30);
    }
  }
  fill(d);
  rect(0,560, 20, 20);
  
  // Play
  if(mouseX > 0 && mouseX < 120 && mouseY > 0 && mouseY < 30) {
    ready = 1;
    endMsg = "";
  }
  if(ready == 1) {
    strokeWeight(2);
    stroke('orange');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  // Win Scenario
  if(ready == 1 && mouseX > 530 && mouseX < 600 && mouseY > 0 && mouseY < 30) {
    // Speed Cheat Check
  	if(dist(pmouseX,pmouseY, mouseX,mouseY) > 20) {
    	ready = 0;
    	endMsg = "Slow Down!";
    	c = 'red';
  	} else {
      endMsg = "You Win!";
    	c = 'blue';
    }
  }
  // Opening message
  if(ready == -1) {
    c = 'green';
    endMsg = "G'Luck!";
  }
  	textSize(100);
    fill(c);
    text(endMsg, width/2-200, height/2);
  
  // Lose Scenarios
	// // Big Walls
	// rect(120,0, 100, 460);
  if(mouseX > 120 && mouseX < 220 && mouseY > 0 && mouseY < 460) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }
 	// rect(220,360, 260, 100);
  if(mouseX > 220 && mouseX < 480 && mouseY > 360 && mouseY < 460) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }
	// rect(340,130, 260, 110);
  if(mouseX > 340 && mouseX < 600 && mouseY > 130 && mouseY < 240) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }
  // rect(430,0, 100, 110);
  if(mouseX > 430 && mouseX < 530 && mouseY > 0 && mouseY < 110) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }
  // // End Maze
	// rect(340,30, 60, 100);
  if(mouseX > 340 && mouseX < 400 && mouseY > 30 && mouseY < 130) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }
  // rect(530,100, 50, 10);
  if(mouseX > 530 && mouseX < 580 && mouseY > 100 && mouseY < 110) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }
  // rect(550,70, 50, 10);
  if(mouseX > 550 && mouseX < 600 && mouseY > 70 && mouseY < 80) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }
  // rect(530,40, 50, 10);
  if(mouseX > 530 && mouseX < 580 && mouseY > 40 && mouseY < 50) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }
  
  // Outside the canvas
  if(mouseX > width || mouseX < 0 || mouseY > height || mouseY < 2) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }
  if(mouseX == 0 && mouseY == 0)
    ready = -1;

 
  // // Bubble Run
	// ellipse(60,100, 80);
  if(dist(60,100, mouseX,mouseY) < 40) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }
 
  // ellipse(0,220, 120);
  if(dist(0,220, mouseX,mouseY) < 60) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }

  // ellipse(120,320, 120);
	if(dist(120,320, mouseX,mouseY) < 60) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }

  // ellipse(0, 420, 120);
  if(dist(0,420, mouseX,mouseY) < 60) {
  	ready = 0;
  	endMsg = "You Lose!";
    c = 'red'
  }
  
}
 
