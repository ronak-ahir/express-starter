$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var numBalls = 10;

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



    requestAnimationFrame(updateGame,50);

  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
   
    var b = {x: x, y: y, r: 20, vx: 25 * Math.random() , vy: 25 * Math.random()};
    balls.push(b);
  
  });

  updateGame();
});
