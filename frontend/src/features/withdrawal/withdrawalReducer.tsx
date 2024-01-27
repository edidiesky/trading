import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const tweeturl: string = `${import.meta.env.VITE_API_BASE_URLS}/withdrawal`;
type tweetdatatype = {
  paymentMethod?: any;
  price?: any;
  isPaid?: any;
  plan?: any;
  user?: any;
  proof_of_payment?: any;
  _id?: string;
}

interface investmentPayload {
}

type KnownError = {
  errorMessage: string;
}

export const getAllWithdrawal = createAsyncThunk<string, void, {
  rejectValue: KnownError,

}>(
  "getAllWithdrawal",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(tweeturl, config);
      const tweetData = response.data.withdrawal
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
export const CreateWithdrawal = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "CreateWithdrawal",
  async (tweetData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const { data } = await axios.post(tweeturl, tweetData, config);
      console.log(data.user)
      localStorage.setItem("User", JSON.stringify(data.user));
      return data.withdrawal

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
export const UpdateWithdrawal = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "UpdateWithdrawal",
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
        `${import.meta.env.VITE_API_BASE_URLS}/withdrawal/${Detailsdata?._id}`,
        Detailsdata,
        config
      );
      return response.data.withdrawal;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Deelete User tweet
export const DeleteWithdrawal = createAsyncThunk<
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
export const GetSingleTransaction = createAsyncThunk<investmentPayload, { Detailsdata?: string }, {
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
        `${import.meta.env.VITE_API_BASE_URLS}/withdrawal/${Detailsdata}`,
        config
      );
      return response.data.withdrawal

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);





export const GetSingleInvestmentOfAUser = createAsyncThunk<investmentPayload, { Detailsdata?: string }, {
  rejectValue: KnownError,
}>(
  "GetSingleInvestmentOfAUser",
  async ({ Detailsdata }, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/withdrawal/profile`,
        config
      );
      return response.data.withdrawal

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);










