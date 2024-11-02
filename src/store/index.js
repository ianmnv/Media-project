import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});

export * from "./thunks/getUsers";
export * from "./thunks/addUser";
