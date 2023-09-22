import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("api/v1/products");
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

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async ({ onSuccess, onError, ...data }, { rejectWithValue, dispatch }) => {
    try {
      const form = new FormData();
      form.append("productImg", data.file);
      form.append("title", data.title);
      form.append("desc", data.desc);
      form.append("agence", data.agence);
      await axios.post("/api/v1/products/addproduct", form, {
        headers: { token: localStorage.getItem("token") },
      });

      onSuccess?.();

      return dispatch(getProducts());
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

export const updateProductAction = createAsyncThunk(
  "products/updateProductAction",
  async ( productInfo, { rejectWithValue, dispatch }) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(`/api/v1/products/${productInfo.id}`, productInfo, {
        headers: { token },
      });
      return dispatch(getProducts());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

export const updateProductImage = createAsyncThunk(
  "products/updateProductImage",
  async ( productInfo , { rejectWithValue, dispatch }) => {
    try {
      const form = new FormData();
      form.append("productImg", productInfo.file);
      const token = localStorage.getItem("token");

      await axios.put(`/api/v1/products/image/${productInfo.id}`, form, {
        headers: { token },
      });
      return dispatch(getProducts());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

export const deleteProductAction = createAsyncThunk(
  "products/deleteProducts",
  async (productId, { rejectWithValue, dispatch }) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`/api/v1/products/${productId}`, {
        headers: { token },
      });
      return dispatch(getProducts());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    errors: null,
    loading: false,
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload: products }) => {
      state.loading = false;
      state.productList = products;
      state.error = null;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [deleteProductAction.fulfilled]: (state, { payload: productId }) => {
      state.loading = false;
      state.productList = state.productList.filter((p) => p._id !== productId);
    },
    [deleteProductAction.rejected]: (state, { payload: error }) => {
      state.error = error || "Error while deleteing product";
      state.loading = false;
    },
    [deleteProductAction.pending]: (state) => {
      state.loading = true;
    },
  },
});
export default productSlice.reducer;
