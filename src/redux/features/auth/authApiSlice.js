import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/verify-login-otp-mobile/",
        method: "POST",
        body: { ...credentials },
      }),
    }),

    signup: builder.mutation({
      query: (credentials) => ({
        url: "/user-register/",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

console.log(authApiSlice);

export const { useLoginMutation, useSignupMutation } = authApiSlice;
