// assign an object to playlist and initialize the object with an 'artist name : song title' pair
var playlist = { artistName: 'songTitle'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
