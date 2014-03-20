$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE
  var x = 20;

  //run an iteration of the game
  var updateGame = function() {
    x += 5; 
    context.fillStyle = 'blue';
    context.fillRect(0,0,800,600);
    context.beginPath();
    context.arc(x,20,20,0,2 * Math.PI); 
    context.closePath();
    context.fillStyle = 'yellow';
    context.fill();
    setTimeout(updateGame,50)

  };

  updateGame();
});
