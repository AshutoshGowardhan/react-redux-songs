export const selectSongs = () => {
    //we are going to return actions
    return {
        type: 'SONG_SELECTED', //This is required
        payload: song
    };
};

