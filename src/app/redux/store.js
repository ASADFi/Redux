const { configureStore } = require("@reduxjs/toolkit");
import UsersReducer from "./slice"
import todosReducer from "./todoslice";

   export const store =configureStore({
    reducer:{
      Userdata:UsersReducer,
      Tododata:todosReducer
    }
   })