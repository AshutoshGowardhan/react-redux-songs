export const selectSong = song => {
    //we are going to return actions
    return {
        type: 'SONG_SELECTED', //This is required
        payload: song,
    };
};

