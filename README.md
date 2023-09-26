# Simple Book Catalog Application

This is a simple and clean book catalog application built using React and Redux. It allows users to explore and manage a collection of books.

### Live site and Server URL:

Website URL: [https://book-catalog-application-14cd8.web.app/](https://book-catalog-application-14cd8.web.app/)

Server URL: [https://book-catalog-application-server.onrender.com/api/v1/book](https://book-catalog-application-server.onrender.com/api/v1/book)

### Landing Page

- Header with navigation links.
- List of the top 10 recently added books.
- Footer with essential information.
- Open routes: "All Books", "My Wishlist", "Login," and "Sign Up."

### Login Page and Registration Page

- Header with navigation links.
- Users can log in using their credentials.
- Users can log in with Google account credentials.
- After a successful login, the login button is replaced with a logout button in the navbar.
- Users can securely log out of the application.

### All Books Page

- Fetches a list of books from an API using RTK Query and displays the list of books.
- Implements a search bar for searching books by title, author, or genre.
- Provides filtering options for narrowing down the book list based on genre & publication year.
- "Add new Book" Button to navigate to the authenticated user to "add-new-book" page.

### Add New Book Page

- Authenticated users can add a new book using a form.
- Notifies users of the success or failure of the operation with a toast or notification.

### Book Details Page

- Displays detailed book information.
- Allows authenticated users to leave reviews for books.
- Provides buttons for editing and deleting books for authenticated and authorized users.

### Edit Books Page

- Authenticated users can edit book information using a form.
- The form pre-fills with current data for editing.
- Notifies users of the success or failure of the edit operation with a toast or notification.

### Bonus Features

- Wishlist feature for users to add books they want to read in the future.

### Technologies:

`React JS`, `Redux`, `Typescript`, `Tailwind CSS`, `React Hook Form`, `React Hot Toast `, `Firebase`, `Node JS`, `Express JS`, `MongoDB`, `Mongoose`.
