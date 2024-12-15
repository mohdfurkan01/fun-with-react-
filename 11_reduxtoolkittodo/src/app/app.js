//step1: configure store
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

//always expect an obj inside configureStore
export const store = configureStore({
  reducer: todoReducer,
  //reducer: otherone
});
