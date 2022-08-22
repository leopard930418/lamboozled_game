import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 1,
// };
export const gameSlice = createSlice({
  name: "game",
  initialState: {
    theDay: 1,
    meter: 50,
    markedStickers: [],
    playStatus: "landing",
  },
  reducers: {
    appendMarkedStickers: (state, action) => {
      state.markedStickers = [...state.markedStickers, action.payload];
    },
    reduceMarkedStickers: (state, action) => {
      const index = state.markedStickers.indexOf(action.payload);
      state.markedStickers.splice(index, 1);
    },
    initMarkedStickers: (state, action) => {
      state.markedStickers = [];
    },
    updateMeterByAmount: (state, action) => {
      if (
        state.meter + action.payload <= 100 &&
        state.meter + action.payload > 0
      ) {
        state.meter += action.payload;
      }
    },
    updatePlayStatus: (state, action) => {
      state.playStatus = action.payload;
      if(action.payload == "landing") {
        state.meter = 50;
        state.markedStickers = [];
        state.theDay = 1;
      }
    },
    nextDay: (state) => {
      state.theDay++;
    },
  },
});

export const {
  appendMarkedStickers,
  reduceMarkedStickers,
  updateMeterByAmount,
  nextDay,
  initMarkedStickers,
  updatePlayStatus,
} = gameSlice.actions;

export default gameSlice.reducer;
