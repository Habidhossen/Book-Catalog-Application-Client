import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-application-server.onrender.com/api/v1",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book",
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
