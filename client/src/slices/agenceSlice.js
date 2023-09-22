import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAgences = createAsyncThunk(
  "agences/getAgences",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("api/v1/agences");
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

export const addAgence = createAsyncThunk(
  "agences/addAgence",
  async ({ onSuccess, onError, ...data }, { rejectWithValue, dispatch }) => {
    try {
      const form = new FormData();
      form.append("agenceImg", data.file);
      form.append("agenceName", data.agenceName);
      form.append("desc", data.desc);
      await axios.post("/api/v1/agences/addagence", form, {
        headers: { token: localStorage.getItem("token") },
      });

      onSuccess?.();

      return dispatch(getAgences());
    } catch (error) {
      onError?.();
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

  export const updateAgenceAction = createAsyncThunk(
    "agences/updateAgenceAction",
    async (agenceInfo , { rejectWithValue, dispatch }) => {
      try {
        const token = localStorage.getItem("token");

      const  res=await axios.put(`/api/v1/agences/${agenceInfo.id}`, agenceInfo, {
          headers: { token },
        });
        return dispatch(getAgences());
        } catch (error) {
        return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

    export const updateAgenceImage = createAsyncThunk(
      "agences/updateAgenceImage",
      async (agenceInfo , { rejectWithValue, dispatch }) => {
        try { 
          const form = new FormData();
          form.append("agenceImg", agenceInfo.file);
          const token = localStorage.getItem("token");

          await axios.put(`/api/v1/agences/image/${agenceInfo.id}`, form, {
            headers: { token },
          });
          return dispatch(getAgences());
        } catch (error) {
          return rejectWithValue(
            error.response && error.response.data.msg
              ? error.response.data.msg
              : error.message
          );
        }
      }
    );

export const deleteAgenceAction = createAsyncThunk(
  "products/deleteProducts",
  async (agenceId, { rejectWithValue, dispatch }) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`/api/v1/agences/${agenceId}`, {
        headers: { token },
      });
      return dispatch(getAgences());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

const agenceSlice = createSlice({
  name: "agences",
  initialState: {
    agenceList: [],
    errors: null,
    loading: false,
  },
  extraReducers: {
    [getAgences.pending]: (state) => {
      state.loading = true;
    },
    [getAgences.fulfilled]: (state, { payload: agences }) => {
      state.loading = false;
      state.agenceList = agences;
      state.error = null;
    },
    [getAgences.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
        [deleteAgenceAction.fulfilled]: (state, { payload: agenceId }) => {
          state.loading = false;
          state.agenceList = state.agenceList.filter((p) => p._id !== agenceId);
        },
        [deleteAgenceAction.rejected]: (state, { payload: error }) => {
          state.error = error || "Error while deleteing agence";
          state.loading = false;
        },
        [deleteAgenceAction.pending]: (state) => {
          state.loading = true;
        },
  },
});
export default agenceSlice.reducer;
