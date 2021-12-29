import { configureStore } from '@reduxjs/toolkit'
import  PlayerSlice  from './Player'

export const store = configureStore({
  reducer: {
      player:PlayerSlice
  },
})