import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk("users/delete", async (id) => {
  const response = await axios.delete(`http://localhost:8001/users/${id}`);

  return response.data;
});
