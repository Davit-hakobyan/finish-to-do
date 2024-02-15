import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";



// const initialState = [
//   {
//     id: Math.random(),
//     text: "learn JS",
//     isCompleted: false,
//   },
//   {
//     id: Math.random(),
//     text: "learn REact",
//     isCompleted: false,
//   },
//   { 
//     id: Math.random(),
//     text: "learn Node",
//     isCompleted: false,
//   },
// ];
if(localStorage.getItem('counter')==null){
  localStorage.setItem('counter',JSON.stringify([]))
}
const initialState = JSON.parse(localStorage.getItem('counter'))
console.log(initialState)


export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    add: (state, { payload }) => {
    if(payload.length>0){
      state.push({
        id: new Date().toISOString(),
        text: payload,
        isCompleted: false,
      });
      localStorage.setItem('counter',JSON.stringify(state))

    }
      
    },
    deletTodo: (state, { payload }) => {
     state = state.filter((todo) => todo.id != payload);
     localStorage.setItem('counter',JSON.stringify(state))
     return state
    },
    checkbox: (state, { payload }) => {
      state.map((e) => {
        if (e.id === payload) {
          e.isCompleted = !e.isCompleted;
        }
      });
      localStorage.setItem('counter',JSON.stringify(state))
    },
    checkboxdelet: (state) => {
    state =  state.filter((todo) => todo.isCompleted != true);
    localStorage.setItem('counter',JSON.stringify(state))
      return state
    },
    addpoxel: (state, action) => {
      state.map((todo) => {
        
        if (todo.id === action.payload.id) {
          
          todo.text = action.payload.text;
        }
      });
      localStorage.setItem('counter',JSON.stringify(state))
    },
  },

  
});

export const { add, deletTodo, checkbox, checkboxdelet, addpoxel } =
  counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default counterSlice.reducer;
