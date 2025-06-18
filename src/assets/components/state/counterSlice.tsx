import { createSlice } from '@reduxjs/toolkit'


interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
}

const counterSlise = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state: CounterState) => {
        state.count += 1
    },
    decrement: (state: CounterState) => {
        state.count -= 1
    },
    incrementAmout: (state: CounterState, action) => {
        state.count += action.payload
    },
    decrementAmout: (state: CounterState, action) => {
        state.count -= action.payload
    },
    }
}
)

export const counterReducer = counterSlise.reducer;
export const { increment, decrement, incrementAmout, decrementAmout } = counterSlise.actions;