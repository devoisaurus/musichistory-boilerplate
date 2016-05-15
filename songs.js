"use strict"

$.ajax({
    url: "music.json"
}).done(function(data) {
    buildMusicOne(data);
});

function buildMusicOne(firstSet){
    for (let i = 0; i < firstSet.songs.length; i++) {
        let currentSong = firstSet.songs[i];
        $("#musicOne").append("<div class='newSong'><h4><input type='button'class='deleteButton' value='Remove'> " + "<span class='info'>" + currentSong.name + "</span>" + " <span class='info'>by the artist " + currentSong.artist + "</span>" + " <span class='info'>on the album " + currentSong.album + "</span></h4></div>");
    };
    addDeleteButtons();
};

$.ajax({
    url: "moremusic.json"
}).done(function(data) {
    buildMusicTwo(data);
});

function buildMusicTwo(songs) {
    let more = $("#moreButton");
    more.click(function() {
        loadTwo(songs);
        $("#musicOne").hide();
        $("#musicTwo").show();
        $("moreButton").hide();
    });
};

function loadTwo(secondSet){
    for (let i = 0; i < secondSet.songsTwo.length; i++) {
        let currentSong = secondSet.songsTwo[i];
        $("#musicTwo").append("<div class='newSong'><h4><input type='button'class='deleteButton' value='Remove'> " + "<span class='info'>" + currentSong.name + "</span>" + " <span class='info'>by the artist " + currentSong.artist + "</span>" + " <span class='info'>on the album " + currentSong.album + "</span></h4></div>");
    };
    addDeleteButtons();
};

function addDeleteButtons() {
    $(".deleteButton").click(function() {
        $(this.parentNode.remove(this));
    });
};

