$(document).ready( function() {

  $('body').keydown(function(event){
    var note = event.key;
    console.log("You clicked on " + note);
    playNote(note);
  });


  $('.instrument').on('click', 'button', function(event){
    var note = $(this).html();
    console.log("You clicked on " + note);
    playNote(note);
  });
});


var playNote = function(note) {
  var keyPlay = $('#' + note + "Audio");

  console.log(keyPlay);
  $(keyPlay).trigger('play');

};
