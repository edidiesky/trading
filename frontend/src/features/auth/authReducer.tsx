import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Registerurl: string = `${import.meta.env.VITE_API_BASE_URLS}/auth/register`;
const Loginurl = `${import.meta.env.VITE_API_BASE_URLS}/auth/login`;

type RegisterData = {
  username?: string;
  email?: string;
  password?: string;
  display_name?: string,
  fullname?: string,
  phone?: string,
  _id?: string
}

type KnownError = {
  errorMessage: string;
}

export const registerUser = createAsyncThunk<{
  rejectValue: KnownError,

}, RegisterData>(
  "registerUser",
  async (registerData, { rejectWithValue }) => {
    try {
      const response = await axios.post(Registerurl, registerData);
      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("Usertoken", response.data.token);
      return response.data.user;
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

export const loginUser = createAsyncThunk<{
  rejectValue: KnownError,
}, RegisterData>(
  "loginUser",
  async (loginData, { rejectWithValue }) => {
    try {

      const response = await axios.post(Loginurl, loginData);
      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("Usertoken", response.data.token);
      return response.data.user;
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);



// update user profile
export const UpdateProfile = createAsyncThunk<{
  rejectValue: KnownError,
}, RegisterData>(
  "UpdateProfile",
  async (profiledata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: Object, token: string } };
      // console.log(auth.token)
      // console.log(profiledata?._id)
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URLS}/user/${profiledata?._id}`,
        profiledata,
        config
      );
      return response.data.updatedUser;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// Getuser profile
export const GetSingleUser = createAsyncThunk<{
  rejectValue: KnownError,
}>(
  "GetSingleUser",
  async (profileData, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };
    
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/user/${auth?.userInfo?._id}`,
        config
      );
      localStorage.setItem("User", JSON.stringify(response.data.user));

      return response.data.user;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

export const GetUserProfile = createAsyncThunk<{
  rejectValue: KnownError,
}, { profileId?: any }>(
  "GetProfile",
  async ({ profileId }, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/user/${profileId}`,
        config
      );
      return response.data.user;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// Getuser profile
export const GetAllUserProfile = createAsyncThunk<{
  rejectValue: KnownError,
}>(
  "getalluserprofile",
  async (_, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/user`,
        config
      );
      return response.data.user;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);





