import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-application-server.onrender.com/api/v1",
  }),
  endpoints: (builder) => ({
    // get all books
    getBooks: builder.query({
      query: () => "/book",
    }),
    // get one book
    getOneBook: builder.query({
      query: (bookId) => `/book/${bookId}`,
    }),
    // post a new book
    postBook: builder.mutation({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
    }),
    // update a book
    updateBook: builder.mutation({
      query: ({ bookId, data }) => ({
        url: `/book/${bookId}`,
        method: "PATCH",
        body: data,
      }),
    }),
    // delete a book
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/book/${bookId}`,
        method: "DELETE",
      }),
    }),
    // get all book reviews
    getBookReviews: builder.query({
      query: () => "/review",
    }),
    // post a book review
    postBookReview: builder.mutation({
      query: (data) => ({
        url: "/review",
        method: "POST",
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
  useDeleteBookMutation,
} = bookApi;
