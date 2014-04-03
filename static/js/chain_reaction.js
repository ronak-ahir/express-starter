$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var balls = [];

  var b0 = {
    x: 20,
    y: 20,
    r: 20
  };

  var b1 = {
    x: 200,
    y: 200,
    r: 40
  };

  var b2 = {
    x: 150,
    y: 125,
    r: 60
  };

  balls.push(b0);
  balls.push(b1);
  balls.push(b2);

 

  // Run an interation of the game
  var updateGame = function() {

    for (var i = 0; i < balls.length; i++) {
      context.beginPath();
      context.arc(balls[i].x,balls[i].y,balls[i].r,0,2 * Math.PI); 
      context.closePath();
      context.fillStyle = 'red';
      context.fill();
    }


  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});
