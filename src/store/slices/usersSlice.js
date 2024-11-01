import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../thunks/getUsers";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    usersData: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.usersData = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;
