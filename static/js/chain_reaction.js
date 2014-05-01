$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var numBalls = 10;

  var reactions = [];

  var reacting = false; 

  var numReacted = 0; 

  var gameState = "Menu";

  var menuText = "Click to play!"

  var balls = [];
  

console.log(balls);

 

  // Run an interation of the game
  var updateGame = function() {
    context.fillStyle = 'white';
    context.fillRect(0,0,800,600);

  if (gameState === "Menu") {
    context.fillStyle = 'green';
    
    if (menuText.length < 15) {
      context.font = '100px Arial';
    } else { 
      context.font = '20px Arial';
    }
    context.fillText(menuText, 100, 200);

  } else if (gameState === "playing") {
    if (reacting === true && reactions.length === 0) {
      menuText = "Game Over! You reacted " + numReacted + " balls.";
      context.fillStyle = 'green';
      gameState = "Menu";


    } 
 

  for (var i = 0; i < balls.length; i++) {
  var collided = false;
  for (var j = 0; j < reactions.length; j++) { 
    var xdiff = (balls[i].x - reactions[j].x);
    var ydiff = (balls[i].y - reactions[j].y);
    var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
      if (dist < (balls[i].r + reactions[j].r)) {
        collided = true;
      }
    }
    if (collided === true) {
          var c = {x: balls[i].x, y: balls[i].y, r: 1, timer: 0};
          reactions.push(c);
          balls.splice(i, 1);
          numReacted++;
          i--;
    }
  }


  for (var i = 0; i < balls.length; i++) {
    balls[i].x += balls[i].vx; 
    balls[i].y += balls[i].vy; 

    if ((balls[i].vx > 0 && balls[i].x + balls[i].r >= canvas.width)
      || (balls[i].vx < 0 && balls[i].x - balls[i].r <= 0)) {
        balls[i].vx = -balls[i].vx; 
      }
    if ((balls[i].vy > 0 && balls[i].y + balls[i].r >= canvas.height)
      || (balls[i].vy < 0 && balls[i].y - balls[i].r <= 0)) {
        balls[i].vy = -balls[i].vy; 
      }
  }
  for (var i = 0; i < balls.length; i++) {
      context.beginPath();
      context.arc(balls[i].x,balls[i].y,balls[i].r,0,2 * Math.PI); 
      context.closePath();
      context.fillStyle = 'red';
      context.fill();
    }

  for (var i = 0; i < reactions.length; i++) {
      context.beginPath();
      context.arc(reactions[i].x,reactions[i].y,reactions[i].r,0,2 * Math.PI); 
      context.closePath();
      context.fillStyle = 'blue';
      context.fill();
    }

  for (var i = 0; i < reactions.length; i++) {
        reactions[i].timer ++; 
        if (reactions[i].timer > 200) {
          reactions[i].r--; 
        } else if (reactions[i].r < 30) { 
          reactions[i].r++; 
    } 
        if (reactions[i].r === 0) {
          reactions.splice(i, 1);
          i--;
        }
  }

  context.fillStyle = 'green';
  context.font = '20px Arial';
  context.fillText("Reactions:" + numReacted, 10, 20);

  }

    requestAnimationFrame(updateGame,50);


  };


  
  $('#game_canvas').click(function(e) {
    if (gameState === "Menu") {
      gameState = "playing";
      reacting = false;
      numReacted = 0;
      balls = [];
      for (var i = 0; i < numBalls; i++) {
      var b = {x: canvas.width * Math.random(), y: canvas.height * Math.random(), r: 20, vx: 25 * Math.random() , vy: 25 * Math.random()};
      balls.push(b);
  } 

    } else if (reacting === false && gameState === "playing") {
    reacting = true;
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    
   
    var c = {x: x, y: y, r: 1, timer: 0};
    reactions.push(c);

  }
  });



  updateGame();
});
