import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUsers = createAsyncThunk("users/get", async () => {
  const response = await axios.get("http://localhost:8001/users");
  await pauseFor(1000);
  return response.data;
});

function pauseFor(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export { getUsers };
