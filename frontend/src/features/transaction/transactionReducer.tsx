import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const trannsactionUrl: string = `${import.meta.env.VITE_API_BASE_URLS}/transaction`;
type tweetdatatype = {
  paymentMethod?: any;
  amount?: any;
  isPaid?: any;
  user?: any;
  proof_of_payment?: any;
  _id?: string;
  status?: string;
  plan?: string;
  transaction?: any,
  totalPages?: number,
  page?: number,
}

interface BookMarkATweetPayload {
  userIdIncludedInBookmarksArray: boolean;
  tweetDetails: any;
}

type KnownError = {
  errorMessage: string;
}

export const getAllTransactions = createAsyncThunk < tweetdatatype, tweetdatatype, {
  rejectValue: KnownError,

}>(
  "getAllTweet",
  async ({ page }, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URLS}/transaction/?page=${page}`, config);
      const tweetData = response.data
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
export const CreateTransactions = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "CreateTweet",
  async (tweetData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const { data } = await axios.post(trannsactionUrl, tweetData, config);
      return data.transaction;


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
export const UpdateTransactions = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "UpdateDetails",
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
        `${import.meta.env.VITE_API_BASE_URLS}/transaction/${Detailsdata?._id}`,
        Detailsdata,
        config
      );
      return response.data.transaction;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Deelete User tweet
export const DeleteTransactions = createAsyncThunk<
  string, // Return type (Detailsdata)
  { Detailsdata: string },
  {
    rejectValue: KnownError;
  }
>(
  "deletetweet",
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
export const GetSingleTransaction = createAsyncThunk<BookMarkATweetPayload, { Detailsdata?: string }, {
  rejectValue: KnownError,
}>(
  "GetSingleTransaction",
  async ({ Detailsdata }, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/transaction/${Detailsdata}`,
        config
      );
      return response.data.transaction

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);





export const GetSingleTransactioOfAUser = createAsyncThunk<BookMarkATweetPayload, { Detailsdata?: string }, {
  rejectValue: KnownError,
}>(
  "GetSingleTransactioOfAUser",
  async ({ Detailsdata }, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/transaction/profile`,
        config
      );
      return response.data.transaction

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);










