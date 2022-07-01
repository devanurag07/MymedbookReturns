import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.user.token;
    headers.set("Access-Control-Allow-Origin", "*");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatu == 401) {
    api.dispatch(logout());
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryReAuth,
  endpoints: (builder) => ({}),
});
