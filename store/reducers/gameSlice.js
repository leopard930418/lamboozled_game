import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 1,
// };
export const gameSlice = createSlice({
  name: "game",
  initialState: {
    value: 2,
    theDay: 1,
    meter: 50,
    markedStickers: [],
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
      if (state.meter + action.payload <= 100 && state.meter + action.payload > 0) {
        state.meter += action.payload;
      }
        // state.meter += action.payload;

    },
    nextDay:(state) => {
      state.theDay ++;
    },

    // reduceMarkedStickers,
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    // reset: (state) => {
    //   state = {
    //     products: [],
    //     quantity: 0,
    //     total: 0,
    //   };
    // },
  },
});

export const {
  appendMarkedStickers,
  reduceMarkedStickers,
  updateMeterByAmount,
  nextDay,
  initMarkedStickers
} = gameSlice.actions;

export default gameSlice.reducer;
