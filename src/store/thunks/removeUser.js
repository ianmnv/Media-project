import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk("users/delete", async (user) => {
  await axios.delete(`http://localhost:8001/users/${user.id}`);

  return user;
});
