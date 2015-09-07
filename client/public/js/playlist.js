//could this be refactored onto server side??


var Playlist = function(creator, title, picture, mood, description){
  this.creator = creator;
  this.title = title;
  this.picture = picture || null;
  this.mood = mood;
  this.description = description;
  this.songs = [];
};

Playlist.prototype.addSong= function(song){
  this.songs.push(song);
};

Playlist.prototype.appendTemp = function(DOMelement){
  DOMelement.append('<div class = \'col-xs-4 temp-show\'>' +
                      '<h2>' + this.title + '</h2>' + '</div>');
};

Playlist.prototype.appendTitle = function(DOMelement, array, index){
  DOMelement.append('<div class = \'playlist notClicked col-xs-4\'>' +
                    '<h2>' + array[index].title +
                    '</h2>' + '<p>' + array[index].mood +
                    '</p>' + '</div>');
                    };

Playlist.prototype.appendDescriptionText = function(DOMelement, array, index){
  DOMelement.html('<h4>'+array[index].description+'</h4>');
};

Playlist.prototype.reAppendTitle = function(DOMelement, array, index){
  DOMelement.html('<h2>' + array[index].title +
                    '</h2>' + '<p>' + array[index].mood +
                    '</p>');
};


function Song(artist, title, genre, link){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.link = link || 'https://www.youtube.com/watch?v=U_xoICJChu8';
}

Song.prototype.appendToTemp = function(DOMelement){
  DOMelement.append('<div class = \'col-xs-2 temp-show\'>' +
                    '<p><em>Artist : </em><br>' +
                    this.artist +
                    '<br><em>Song Title :</em><br> ' +
                    this.title + '<p></div>');
};

Song.prototype.appendToSongList = function(DOMelement){
  DOMelement.append('<div class = \'song songList col-xs-2\'>' +
                    '<p><em>Artist :</em><br>' +
                    this.artist +
                    '<br><em>Song Title :</em><br> ' +
                    this.title +
                    '<br><em>Genre :</em><br>' +
                    this.genre +
                    '<br><em>Link :</em><br>' +
                    '<div class = \'col-xs-12 songLink\'>LISTEN NOW' +
                    '</div>'+
                    '<div class = \'remove-song col-xs-12\'>DELETE SONG</div></div>');
};

Song.prototype.showAfterPlaylist = function(DOMelement, playlistIndex){
  DOMelement.after('<div class = \'song showAfter' + playlistIndex +
                    ' col-xs-2\'>' +
                    '<p><em>Artist :</em><br>' +
                    this.artist +
                    '<br><em>Song Title :</em><br> ' +
                    this.title +
                    '<br><em>Genre :</em><br>' +
                    this.genre +
                    '<div class = \'col-xs-12 songLinkShowAfter\'>LISTEN NOW' +
                    '</div>'+
                    '<div class = \'remove-songShowAfter col-xs-12\'>DELETE SONG</div></div>');
};
