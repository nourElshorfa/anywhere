import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  getData: any[];
  counter: number;
}

const initialState: CounterState = {
  getData: [],
  counter: 0,
};

const CounterSlice = createSlice({
  name: "CounterState",
  initialState,
  reducers: {
    inc : ( state , action )=> {state.counter += action.payload}, 
    dec : ( state , action )=> {state.counter -= action.payload},
  },
});


export const {inc , dec} =  CounterSlice.actions
export default CounterSlice.reducer;