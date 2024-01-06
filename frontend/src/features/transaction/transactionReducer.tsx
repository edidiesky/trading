import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const tweeturl: string = `${import.meta.env.VITE_API_BASE_URLS}/transaction`;
type tweetdatatype = {
  tweet_text?: string;
  tweet_image?: any;
  userIdIncludedInTweetLikesArray?: any;
  tweetDetails?: any;
  tweet?: any;
  _id?: string;
  tweet_user_id?: {
    _id?: string;
    display_name?: string;
    name?: string;
    bio?: string;
    profile_image_url?: string;

  }
}

interface BookMarkATweetPayload {
  userIdIncludedInBookmarksArray: boolean;
  tweetDetails: any;
}

type KnownError = {
  errorMessage: string;
}

export const getAllTransactions = createAsyncThunk<string, void, {
  rejectValue: KnownError,

}>(
  "getAllTweet",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(tweeturl, config);
      const tweetData = response.data.transaction
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
      const response = await axios.post(tweeturl, tweetData, config);
      if (response?.data?.tweet) {
        const response2 = await axios.get(
          `${import.meta.env.VITE_API_BASE_URLS}/tweet`,
          config
        );
        localStorage.setItem("tweet", JSON.stringify(response2.data.tweet));
        return response2.data.tweet;
      }

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










