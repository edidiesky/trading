import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ${import.meta.env.VITE_API_BASE_URLS}
// https://traders-expert-api.vercel.app/api/v1
const Registerurl: string = `https://traders-expert-api.vercel.app/api/v1/auth/register`;
const Loginurl = `https://traders-expert-api.vercel.app/api/v1/auth/login`;

type RegisterData = {
  username?: string;
  email?: any;
  user?: any;
  token?: any;
  password?: string;
  display_name?: string,
  fullname?: string,
  phone?: string,
  _id?: string,
  page?: number,
  totalPages?: number,
}

type KnownError = {
  errorMessage: string;
}

export const registerUser = createAsyncThunk<RegisterData, RegisterData, {
  rejectValue: KnownError,

}>(
  "registerUser",
  async (registerData, { rejectWithValue }) => {
    try {
      const response = await axios.post(Registerurl, registerData);
      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("Usertoken", response.data.token);
      return {
        token: response.data.token,
        user: response.data.user
      }
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

export const loginUser = createAsyncThunk<RegisterData, RegisterData, {
  rejectValue: KnownError,
}>(
  "loginUser",
  async (loginData, { rejectWithValue }) => {
    try {

      const response = await axios.post(Loginurl, loginData);
      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("Usertoken", response.data.token);
      return {
        token: response.data.token,
        user: response.data.user
      }
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
        `https://traders-expert-api.vercel.app/api/v1/user/${profiledata?._id}`,
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
        `https://traders-expert-api.vercel.app/api/v1/user/${auth?.userInfo?._id}`,
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
        `https://traders-expert-api.vercel.app/api/v1/user/${profileId}`,
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
export const GetAllUserProfile = createAsyncThunk<RegisterData, RegisterData, {
  rejectValue: KnownError,
}>(
  "getalluserprofile",
  async ({ page }, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `https://traders-expert-api.vercel.app/api/v1/user/?page=${page}`,
        config
      );
      return response.data;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);





