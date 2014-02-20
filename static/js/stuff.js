alert('Welcome to my stuff page!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('Hello world!')
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
   $('#houdini_text').hide();
});

$('#reappear').click(function() {
   $('#houdini_text').show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#pink').click(function() {
   $('#tickled_text').css('color','pink');
});


// Problem 4 (Greet Me) -----------------------------------------------------
$('#greet').click(function() {
   $('#my_name').val();
   alert('Hello ' + $('#my_name').val())
});


