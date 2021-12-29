import { createSlice } from '@reduxjs/toolkit'



export const PlayerSlice = createSlice({
  name: 'player',
  initialState:{
    current:false,
    playing:false,
    controls:false,
    sidebar:false
  },
  reducers: {
    setCurrent:(state,action)=>{
        state.current=action.payload
    },
    setPlaying:(state,action)=>{
        state.playing=action.payload
    },
    setControls:(state,action)=>{
        state.controls=action.payload
    },
    setSidebar:(state,action)=>{
        state.sidebar=action.payload
    },
  },
})
export const { setCurrent,setPlaying,setControls,setSidebar } = PlayerSlice.actions

export default PlayerSlice.reducer