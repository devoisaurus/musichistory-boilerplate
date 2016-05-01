var songs = [];

	songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
	songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
	songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
	songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
	songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


	songs.push("Rollerskate Skinny > by Old 97's on the album Satellite Rides");
	songs.unshift("Don't Let Us Get Sick > by Warren Zevon on the album Life'll Kill Ya");

	for (i=0; i < songs.length; i++) {
		songs[i]=songs[i].replace("*","");
		songs[i]=songs[i].replace("@", "");
		songs[i]=songs[i].replace("(", "");
		songs[i]=songs[i].replace("!", "");
		songs[i]=songs[i].replace(">", "-");
	};



	for (var songLoop = 0; songLoop < songs.length; songLoop += 1) {
		var currentSong = songs[songLoop]
		var musicElement = document.getElementById("music");
		var listTheMusic = "";
		listTheMusic = "<h3>" + currentSong + "</h3>";
		console.log("listTheMusic", listTheMusic);
		musicElement.innerHTML += listTheMusic;
	};

