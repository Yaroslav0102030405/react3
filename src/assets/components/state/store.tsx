import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// export type RootState = ReturnType<typeof store.getState>
// Виводимо тип всього кореневого стану з вашого store
export type RootState = ReturnType<typeof store.getState>

// Виводимо тип функції dispatch
export type AppDispatch = typeof store.dispatch
