var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


var printPlaylists = function (IdFromPlayList) {
  var playlistsMod = library.playlists; 
  for (var list in playlistsMod){
      let id = playlistsMod[list].id;
      let name = playlistsMod[list].name;
      let tracksNum = playlistsMod[list].tracks.length;
      console.log(id + ": " + name + " - " + tracksNum + " tracks");
    }
}
printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (tracksFromPlayList) {
  var tracksMod = library.tracks;
  if (!tracksFromPlayList){
    for (var track in tracksMod){
      let id = tracksMod[track].id;
      let name = tracksMod[track].name;
      let artist = tracksMod[track].artist
      let album = tracksMod[track].album;
      console.log(id + ": " + name + " by " + artist + " (" + album + ")");
    } 
  } else {
    for (var i=0;i<tracksFromPlayList.length;i++){
      console.log(tracksMod[tracksFromPlayList[i]].id + "; " + tracksMod[tracksFromPlayList[i]].name + " by " + tracksMod[tracksFromPlayList[i]].artist + " (" + tracksMod[tracksFromPlayList[i]].album + ")");
    }
  }
}

printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlistsMod = library.playlists; 
  if (playlistsMod[playlistId] === undefined){
    console.log("invalid playlist!"); 
  } else {
    console.log(playlistsMod[playlistId].id + ": " + playlistsMod[playlistId].name + " - " + playlistsMod[playlistId].tracks.length + " tracks");
    printTracks(playlistsMod[playlistId].tracks);
  }
}

printPlaylist('p01');



// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var playlistsMod = library.playlists; 
  for (var list in playlistsMod){
    if (playlistId == list){
    playlistsMod[list].tracks.push(trackId);
    console.log(playlistsMod[list]);
  }

}
}

addTrackToPlaylist("t03", "p01");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}



// adds a track to the library

var addTrack = function (name, artist, album) {
  var tracksMod = library.tracks;
  var trackId = {id:uid(), name:name, artist:artist, album:album};
  tracksMod[trackId.id] = trackId;
  console.log(tracksMod);
}

//addTrack("banana","minions","minions vol 2");

// adds a playlist to the library

var addPlaylist = function (name) {
  var playlistsMod = library.playlists;
  let playlistId = {id:uid(), name:name};
  playlistsMod[playlistId.id] = playlistId;
  console.log(playlistsMod);
}

addPlaylist("banana");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}