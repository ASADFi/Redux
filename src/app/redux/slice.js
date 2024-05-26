"use client";
import { useEffect, useState } from 'react';
import { createAsyncThunk, createSlice, current, nanoid } from "@reduxjs/toolkit";

const getInitialUsers = () => {
  if (typeof window !== 'undefined') {
    const usersFromLocalStorage = localStorage.getItem("users");
    return usersFromLocalStorage ? JSON.parse(usersFromLocalStorage) : [];
  }
  return [];
};

const initialState = {
  users:getInitialUsers() ,
  FetchAPIuser:[""]
};


export const  FetchAPIuser= createAsyncThunk("FetchAPIuser",async()=>{
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  
  return  result.json();
});

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
      if (typeof window !== 'undefined') {
        let Userdata = JSON.stringify(current(state.users));
        localStorage.setItem("users", Userdata);
      }
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => item.id !== action.payload);
      state.users = data;
      if (typeof window !== 'undefined') {
        localStorage.setItem("users", JSON.stringify(data));
      }
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(FetchAPIuser.fulfilled,(state,action)=>{
      console.log("action",action)
      state.isloading=false
      state.FetchAPIuser=action.payload
    })
  }
});

export const { addUser, removeUser } = slice.actions;
export default slice.reducer;
