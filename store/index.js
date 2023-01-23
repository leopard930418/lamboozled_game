import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './reducers/gameSlice'

export default configureStore({
  reducer: {
    game: gameReducer
  }
})