$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;


  //PUT STUFF HERE
  var circle = {
    x: 20,
    y: 20,
    r: 20,
    vx: 5,
    vy: 5
  };

  //run an iteration of the game
  var updateGame = function() {
    circle.x += circle.vx; 
    circle.y += circle.vy; 
    if ((circle.vx > 0 && circle.x + circle.r >= canvas.width)
      || (circle.vx < 0 && circle.x - circle.r <= 0)) {
        circle.vx = -circle.vx; 
      }
    if ((circle.vy > 0 && circle.y + circle.r >= canvas.height)
      || (circle.vy < 0 && circle.y - circle.r <= 0)) {
        circle.vy = -circle.vy; 
      }
    context.fillStyle = 'blue';
    context.fillRect(0,0,800,600);
    context.beginPath();
    context.arc(circle.x,circle.y,circle.r,0,2 * Math.PI); 
    context.closePath();
    context.fillStyle = 'yellow';
    context.fill();
    setTimeout(updateGame,50)

  };

  updateGame();
});
