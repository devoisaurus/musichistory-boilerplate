'use strict';


$(document).ready(function() {

  // hides the Add Music View on load
  $('#purple_block').hide();

  // Populates the yellow block with the array of songs
  // $('#yellow_block').html(makeAString(songs));

  // When Add Music button is clicked, that block is shown, others are hidden
  $('#add_music_view').click(function(e) {
    $('#purple_block').show();
    $('#left_bar').hide();
    $('#yellow_block').hide();
  });

  // When List Music button is clicked, those blocks are shown, other is hidden
  $('#list_music_view').click(function(e) {
    $('#purple_block').hide();
    $('#left_bar').show();
    $('#yellow_block').show();
  });

  // Gets info from Add Music Form and puts that into the array
  // $('#add_btn').click(function(e) {
  // 	let newSong = {};
  //   newSong.name = $('#title').val();
  //   newSong.artist = $('#artist').val();
  //   newSong.album = $('#album').val();


  // });



});