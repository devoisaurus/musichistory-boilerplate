"use strict"

$.ajax({
    url: "https://ad-musichistory.firebaseio.com/songs/.json",
}).done(function(data) {
    buildMusicOne(data);
});

function buildMusicOne(firstSet){
    for (var key in firstSet) {
        let currentSong = firstSet[key];
        $("#musicOne").append("<div class='newSong'><h4><input type='button'class='deleteButton' value='Remove'> " + "<span class='info'>" + currentSong.name + "</span>" + " <span class='info'>by the artist " + currentSong.artist + "</span>" + " <span class='info'>on the album " + currentSong.album + "</span></h4></div>");
    };
    addDeleteButtons();
};

  $('#add_btn').click(function(e) {
    let newSong = {};
    newSong.name = $('#title').val();
    newSong.artist = $('#artist').val();
    newSong.album = $('#album').val();
    $.ajax({
      url: "https://ad-musichistory.firebaseio.com/songs/.json",
      method: "POST",
      data: JSON.stringify(newSong)
    })
    .done(function(response){
        console.log("response from firebase", response);
    })
  });


function addDeleteButtons() {
    $(".deleteButton").click(function() {
        $(this.parentNode.remove(this));
    });
};

