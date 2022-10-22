import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: null,
  isLoading: false,
  isError: null,
  isNewUser: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      return response.data.accessToken;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (
    { name, email, password, confPassword, navigate },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        {
          name,
          email,
          password,
          confPassword,
        },
        {
          withCredentials: true,
        }
      );
      return navigate("/login");
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (navigate, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/token", {
        withCredentials: true,
      });
      return response.data.accessToken;
    } catch (error) {
      // console.log(error);
      // console.log("pindah ke login");
      rejectWithValue(error.response.data);
      return navigate("/login");
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (navigate, { rejectWithValue }) => {
    try {
      const response = await axios.delete("http://localhost:5000/logout", {
        withCredentials: true,
      });
      await navigate("/login");
      return response.data;
    } catch (error) {
      // console.log(error);
      // console.log("pindah ke login");
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setCredentials: (state, action) => {
    //   const { accessToken } = action.payload;
    //   state.token = null;
    // },
    resetError: (state) => {
      state.isError = null;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
      state.isError = null;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },

    // register
    [register.pending]: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
      state.isError = null;
      state.isNewUser = true;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },

    // refresh
    [refresh.pending]: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    [refresh.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
      state.isError = null;
    },
    [refresh.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },

    // logout
    [logout.pending]: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = null;
      state.isError = null;
    },
    [logout.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetError } = authSlice.actions;

export default authSlice.reducer;
