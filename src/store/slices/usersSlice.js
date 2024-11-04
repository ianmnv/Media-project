import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../thunks/getUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    usersData: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    // getUsers
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
    // addUser
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.usersData.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // remove user
    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;
      // Fix later
    });

    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;
