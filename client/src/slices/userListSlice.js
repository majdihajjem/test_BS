import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListUsers = createAsyncThunk(
  "userList/getListUsers",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`/api/v1/users/userList`, {
        headers: { token },
      });
      return res.data;
      // return axios.get("/api/v1/users/userList").then(({ data }) => data);
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

export const deleteUser = createAsyncThunk(
  "/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/api/v1/users/${userId}`, {
        headers: { token },
      });
      return userId;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

const userListSlice = createSlice({
  name: "userList",
  initialState: {
    listUsers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    // getListUsers
    [getListUsers.fulfilled]: (state, { payload: listUsers }) => {
      state.loading = false;
      state.listUsers = listUsers;
    },
    [getListUsers.rejected]: (state, { payload: error }) => {
      state.error = error || "Error while getting users";
      state.loading = false;
    },
    [getListUsers.pending]: (state) => {
      state.loading = true;
    },

    // deleteUser
    [deleteUser.fulfilled]: (state, { payload: userId }) => {
      state.loading = false;
      state.listUsers = state.listUsers.filter((user) => user._id !== userId);
    },
    [deleteUser.rejected]: (state, { payload: error }) => {
      state.error = error || "Error while getting users";
      state.loading = false;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
  },
});

export default userListSlice.reducer;
export const actions = userListSlice.actions;
