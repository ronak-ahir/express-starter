$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var numBalls = 10;

  var reactions = [];

  var colors = ['red', 'green', 'blue'];

  var balls = [];
  for (var i = 0; i < numBalls; i++) {
    var b = {x: canvas.width * Math.random(), y: canvas.height * Math.random(), r: 20, vx: 25 * Math.random() , vy: 25 * Math.random()};
    balls.push(b);
  }

console.log(balls);

 

  // Run an interation of the game
  var updateGame = function() {
    context.fillStyle = 'white';
    context.fillRect(0,0,800,600);

for (var i = 0; i < balls.length; i++) {
  for (var j = 0; j < reactions.length; j++) {
    var xdiff = (balls[i].x - reactions[j].x);
    var ydiff = (balls[i].y - reactions[j].y);
    var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
      if (dist < (balls[i].r + reactions[j].r)) {
        alert('BOOM');
      }
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
        if (reactions[i].r < 30) {
          reactions[i].r++; 
    } 
  }

    requestAnimationFrame(updateGame,50);

  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
   
    var c = {x: x, y: y, r: 1};
    reactions.push(c);

  });

  updateGame();
});
