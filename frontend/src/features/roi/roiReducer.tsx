import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const roiurl: string = `${import.meta.env.VITE_API_BASE_URLS}/roi`;
type tweetdatatype = {
  paymentMethod?: any;
  price?: any;
  isPaid?: any;
  plan?: any;
  user?: any;
  proof_of_payment?: any;
  _id?: string;
}

interface RoiPayload {
}

type KnownError = {
  errorMessage: string;
}

export const getAllRoi = createAsyncThunk<string, void, {
  rejectValue: KnownError,

}>(
  "getAllRoi",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(roiurl, config);
      const tweetData = response.data.roi
      // console.log(tweetData)
      return tweetData;
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// Create User tweet
export const CreateRoi = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "CreateRoi",
  async (tweetData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const { data } = await axios.post(roiurl, tweetData, config);
      // console.log(data.user)
      localStorage.setItem("User", JSON.stringify(data.user));
      return data.roi

      // console.log(tweetData)
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// update User tweet
export const UpdateRoi = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "UpdateRoi",
  async (Detailsdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { token: string } };
      // console.log(auth.token)
      // console.log(Detailsdata?._id)
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URLS}/roi/${Detailsdata?._id}`,
        Detailsdata,
        config
      );
      return response.data.roi;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Deelete User tweet
export const DeleteRoi = createAsyncThunk<
  string, // Return type (Detailsdata)
  { Detailsdata: string },
  {
    rejectValue: KnownError;
  }
>(
  "DeleteRoi",
  async ({ Detailsdata }, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      await axios.delete(`${import.meta.env.VITE_API_BASE_URLS}/tweet/${Detailsdata}`, config);
      return Detailsdata; // Return the data
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
      return rejectWithValue(message);
    }
  }
);



// GetTweet Details
export const GetSingleRoi = createAsyncThunk<RoiPayload, { Detailsdata?: string }, {
  rejectValue: KnownError,
}>(
  "GetSingleRoi",
  async ({ Detailsdata }, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/roi/${Detailsdata}`,
        config
      );
      return response.data.roi

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);





export const GetSingleRoiOfAUser = createAsyncThunk<RoiPayload, { Detailsdata?: string }, {
  rejectValue: KnownError,
}>(
  "GetSingleRoiOfAUser",
  async ({ Detailsdata }, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/roi/profile`,
        config
      );
      return response.data.roi

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);










