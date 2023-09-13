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
    getOneBook: builder.query({
      query: (bookId) => `/book/${bookId}`,
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
    }),
    updateBook: builder.mutation({
      query: ({ bookId, data }) => ({
        url: `/book/${bookId}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetOneBookQuery,
  usePostBookMutation,
  useUpdateBookMutation,
} = bookApi;
