import { createSlice } from '@reduxjs/toolkit';

export const idSlice = createSlice({
  name: 'id',
  initialState: {
   id:"119YCxqxaTcZOA8N3QoB"
   
  },
  reducers: {
  
    insertId: (state, action) => {
      state.id = action.payload;
    },
    removeId: (state, action) => {
      state.id = "119YCxqxaTcZOA8N3QoB";
    },
  },
});

export const { insertId , removeId } = idSlice.actions;


export const selectId = state => state.id.id;

export default idSlice.reducer;
