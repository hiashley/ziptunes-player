import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: "song",
    initialState: {
        currentSongSource: null,
        currentSongTitle: null,
        currentPlaylistDescription: null, 
        currentSongIndex: 0,
        songsArray: [],
        currentSongsArray: [],
        currentSideArt: null,
        currentSideName: null,
        currentSideDescription: null,
        currentSideId: null,
        currentPlaylistArt: null,
        currentPlaylistName: null,
    },
    reducers: {
        setCurrentSongSource: (state, action) => {
            state.currentSongSource = action.payload.source;
            state.currentSongTitle = action.payload.title
        },
        setCurrentSongIndex: (state, action) => {
            state.currentSongIndex = action.payload;
          },
        setSongsArray: (state, action) => {
            state.songsArray = action.payload;
        },
        setCurrentSongsArray: (state, action) => {
            state.currentSongsArray = action.payload.array
            state.currentSideArt = action.payload.art
            state.currentSideName = action.payload.name
            state.currentSideDescription = action.payload.description
            state.currentSideId = action.payload.id
        },
        setCurrentPlaylistDescription: (state, action) => {
            state.currentPlaylistDescription = action.payload.description
            state.currentPlaylistArt = action.payload.art
            state.currentPlaylistName = action.payload.name
        },

    },
})

export const { setCurrentSongSource, setCurrentSongIndex, setSongsArray, setCurrentSongsArray, setCurrentPlaylistDescription } = songSlice.actions;

export default songSlice;