import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [],
};

const slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      let Userdata = JSON.stringify(current(state.users));
      localStorage.setItem("users", Userdata);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => item.id !== action.payload);
      state.users = data;
      localStorage.setItem("users", JSON.stringify(data)); // Update local storage with filtered users
    },
  },
});

export const { addUser, removeUser } = slice.actions;
export default slice.reducer;
