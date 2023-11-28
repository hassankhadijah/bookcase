import React, { useState } from "react";
import data from "./models/books.json";
import { BookList } from "./component/book_list/BookList";
import Header from "./component/header/Header";

function App() {
  const [books,setBooks] = useState(data.books);
  
  const addBook = (title) =>{
    
    
    console.log(title);
   }

  return (
    <React.Fragment>
      <Header />
      <BookList books={books} />
      <footer>
        <p>&copyright, 2023</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
