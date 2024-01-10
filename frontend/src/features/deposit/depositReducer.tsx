import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const tweeturl: string = `${import.meta.env.VITE_API_BASE_URLS}/deposit`;
type tweetdatatype = {
  paymentMethod?: any;
  amount?: any;
  user?: any;
  status?: any;
   proof_of_payment?: any;
  _id?: string;
  plan?: string;
}

interface BookMarkATweetPayload {
  userIdIncludedInBookmarksArray: boolean;
  tweetDetails: any;
}

type KnownError = {
  errorMessage: string;
}

export const getAllDeposit = createAsyncThunk<string, void, {
  rejectValue: KnownError,

}>(
  "getAllDeposit",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(tweeturl, config);
      const tweetData = response.data.deposit
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
export const CreateDeposit = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "CreateDeposit",
  async (tweetData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      console.log(auth.token)
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const {data} = await axios.post(tweeturl, tweetData, config);
    return data.deposit
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
export const UpdateDeposit = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "UpdateDeposit",
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
        `${import.meta.env.VITE_API_BASE_URLS}/deposit/${Detailsdata?._id}`,
        Detailsdata,
        config
      );
      return response.data.deposit;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Deelete User tweet
export const DeleteDeposit = createAsyncThunk<
  string, // Return type (Detailsdata)
  { Detailsdata: string },
  {
    rejectValue: KnownError;
  }
>(
  "DeleteDeposit",
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
export const GetSingleDeposit = createAsyncThunk<BookMarkATweetPayload, { Detailsdata?: string }, {
  rejectValue: KnownError,
}>(
  "GetSingleDeposit",
  async ({ Detailsdata }, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/deposit/${Detailsdata}`,
        config
      );
      return response.data.deposit

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);





export const GetSingleDepsoitOfAUser = createAsyncThunk<BookMarkATweetPayload, { Detailsdata?: string }, {
  rejectValue: KnownError,
}>(
  "GetSingleDepsoitOfAUser",
  async ({ Detailsdata }, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/deposit/profile`,
        config
      );
      return response.data.deposit

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);










