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
    r: 20
  };

  //run an iteration of the game
  var updateGame = function() {
    circle.x += 5; 
    circle.y += 5; 
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
