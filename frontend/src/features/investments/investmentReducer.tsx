import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const tweeturl: string = `https://traders-expert-api.vercel.app/api/v1/investment`;
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

export const getAllInvestments = createAsyncThunk<string, void, {
  rejectValue: KnownError,

}>(
  "getAllInvestments",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(tweeturl, config);
      const tweetData = response.data.investment
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
export const CreateInvestments = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "CreateInvestments",
  async (tweetData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const { data } = await axios.post(tweeturl, tweetData, config);
      // console.log(data.user)
      localStorage.setItem("User", JSON.stringify(data.user));
      return data.investment

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
export const UpdateInvestments = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "UpdateInvestments",
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
        `https://traders-expert-api.vercel.app/api/v1/investment/${Detailsdata?._id}`,
        Detailsdata,
        config
      );
      return response.data.investment;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Deelete User tweet
export const DeleteInvestments = createAsyncThunk<
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
      await axios.delete(`https://traders-expert-api.vercel.app/api/v1/tweet/${Detailsdata}`, config);
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
        `https://traders-expert-api.vercel.app/api/v1/investment/${Detailsdata}`,
        config
      );
      return response.data.investment

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
        `https://traders-expert-api.vercel.app/api/v1/investment/profile`,
        config
      );
      return response.data.investment

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);










