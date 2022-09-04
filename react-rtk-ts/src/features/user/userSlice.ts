import axios from "axios";
// 3.1. import PayloadAction type for fulfilled reducer
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// 2. type array of users
type User = {
  id: number;
  name: string;
};

// 1. type initialState
type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

// 1.1. createSlice function has red lines, as Reducer is a mandatory property
const userSlice = createSlice({
  name: "user",
  initialState,
  // 1.2. therefore, add {} an empty object to reducers
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      // 3.1. action !!!
      // 3.1 import PayloadAction type for fulfilled reducer
      // 3.1. payload is an array of users
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      // 4.1. `action.error.message` can be undefined
      // 4.2. add a default error message
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default userSlice.reducer;
