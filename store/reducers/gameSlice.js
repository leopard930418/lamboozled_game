import { createSlice } from "@reduxjs/toolkit";
String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};
export const gameSlice = createSlice({
  name: "game",
  initialState: {
    theDay: 1,
    meter: 50,
    markedStickers: "000000000000",
    playStatus: "landing",
    dataForFeedback: {},
    userName: "Unkown"
  },
  reducers: {
    appendMarkedStickers: (state, action) => {
      state.markedStickers = state.markedStickers.replaceAt(action.payload, "1");
    },
    reduceMarkedStickers: (state, action) => {
      state.markedStickers = state.markedStickers.replaceAt(action.payload, "0");
    },
    initMarkedStickers: (state, action) => {
      state.markedStickers = "000000000000";
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
      if (action.payload == "landing") {
        state.meter = 50;
        state.markedStickers = "000000000000";
        state.theDay = 1;
      }
    },
    nextDay: (state) => {
      state.theDay++;
    },
    updateDataForFeedBack: (state, action) => {
      state.dataForFeedback = action.payload;
    },
    updateUserName: (state, action)=>{
      state.userName = action.payload;
    }
  },
});

export const {
  appendMarkedStickers,
  reduceMarkedStickers,
  updateMeterByAmount,
  nextDay,
  initMarkedStickers,
  updatePlayStatus,
  updateDataForFeedBack,
  updateUserName
} = gameSlice.actions;

export default gameSlice.reducer;
