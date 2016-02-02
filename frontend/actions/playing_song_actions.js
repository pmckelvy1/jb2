var PlayingSongConstants = require('../constants/playing_song_constants');
var Dispatcher = require('../dispatcher/dispatcher');

var PlayingSongActions = {
  playSong: function () {
    Dispatcher.dispatch({
      actionType: PlayingSongConstants.PLAY_SONG
    });
  },

  pauseSong: function () {
    Dispatcher.dispatch({
      actionType: PlayingSongConstants.PAUSE_SONG
    });
  },

  playPause: function () {
    Dispatcher.dispatch({
      actionType: PlayingSongConstants.PLAY_PAUSE
    });
  },

  nextSong: function () {
    Dispatcher.dispatch({
      actionType: PlayingSongConstants.NEXT_SONG
    });
  },

  lastSong: function () {
    Dispatcher.dispatch({
      actionType: PlayingSongConstants.LAST_SONG
    });
  },

  receiveWavesurfer: function (wavesurfer) {
    Dispatcher.dispatch({
      actionType: PlayingSongConstants.NEW_SONG,
      wavesurfer: wavesurfer
    });
  }
};

module.exports = PlayingSongActions;
