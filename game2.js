let circles = [];
let targetCircles = 10; // Number of circles to click
let timer = 30; // Game duration in seconds
let score = 0;
function game2Preload(){
  
}

function game2Setup(){
  background('rgba(0,255,0, 0.25)');
  currentActivity = 2;
  createCanvas(400, 400);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(20);

      // Create random circles
      for (let i = 0; i < targetCircles; i++) {
        let circle = createRandomCircle();
        circles.push(circle);
      }
  
  // Hide the Activity 2 button, show all the other buttons
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
}

function game2Draw(){
 background(220);

      // Display timer
      fill(0);
      text(`Time: ${timer}s`, width / 2, 30);

      // Display score
      text(`Score: ${score}/${targetCircles}`, width / 2, 60);

      // Display circles
      for (let circle of circles) {
        fill(circle.color);
        ellipse(circle.x, circle.y, circle.size, circle.size);
      }

      // Check for mouse clicks on circles
      for (let i = circles.length - 1; i >= 0; i--) {
        let circle = circles[i];
        let d = dist(mouseX, mouseY, circle.x, circle.y);
        if (d < circle.size / 2) {
          // Remove clicked circle
          circles.splice(i, 1);
          score++;
        }
      }

      // Check if the game is over
      if (timer <= 0){
        fill(0);
        textSize(15);
        text('You Lose!', width / 2, height / 2);
        text('You can return to the home page to play again',200,350);
        noLoop();
      }
      if (score >= targetCircles) {
        fill(0);
        textSize(15);
        text('You Win!', width / 2, height / 2);
        text('You can return to the home page to play again',200,350);
        noLoop(); // Stop the draw loop when the game is over
      }else {
        // Update timer
        if (frameCount % 60 == 0 && timer > 0) {
          timer--;
        }
      }
    }

    function mousePressed() {
      // You can add additional logic for mouse click events here
    }

    function createRandomCircle() {
      return {
        x: random(width),
        y: random(height),
        size: random(20, 50),
        color: color(random(255), random(255), random(255))
      };
    

  
  
  
  
  
  
  








}


