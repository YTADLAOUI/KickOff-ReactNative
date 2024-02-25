import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const favoriteSlice = createSlice({ 
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.value = action.payload
    },
    removeFavorite: (state, action) => {
      state.value = action.payload
    },
  },
 })

export const { addFavorite, removeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer