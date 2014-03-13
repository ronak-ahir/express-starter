$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeStyle = color; 
    context.strokeRect(x,y,sideLen,sideLen); 
  };

  var drawCircle = function(x, y, radius, color) {
    context.strokeStyle = color;
    context.beginPath();
    context.arc(x,y,radius,0,2 * Math.PI); 
    context.closePath();
    context.stroke();
  };

   var drawTriplet = function(x, y, radius, color) {
    context.strokeStyle = color;
    drawCircle(x,y,radius, 0, 2 * Math.PI);
    drawCircle(x + radius,y,radius, 0, 2 * Math.PI);
    drawCircle(x + (radius/2),y - radius,radius, 0, 2 * Math.PI);
  };

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

 $('#p5').click(function() {
    drawSquare(100, 100, 50, 'red');
    drawCircle(125, 125, 25, 'blue');
    drawCircle(125, 150, 25, 'green');
    drawCircle(125, 100, 25, 'green');
    drawCircle(150, 125, 25, 'green');
    drawCircle(100, 125, 25, 'green');
  });

$('#p6').click(function() {
    drawTriplet(100, 100, 25, 'green');
  });

$('#p7').click(function() {
    drawTriplet(275, 200, 25, 'blue');
  });

$('#p8').click(function() {
    drawTriplet(400, 50, 25, 'red');
    drawTriplet(250, 85, 25, 'black');
    drawTriplet(150, 200, 25, 'green');
    drawTriplet(300, 275, 25, 'blue');

  });


});
