import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './reducers/gameSlice'

console.log("gameReducer", gameReducer)
export default configureStore({
  reducer: {
    game: gameReducer
  }
})