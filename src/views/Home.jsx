import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BookCard from "../components/BookCard";
import ReactLoading from "react-loading";

const Home = () => {
  const history = useHistory();
  const [books, setBooks] = useState([]);
  const [loading, setload] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await fetch("https://bookshopx.herokuapp.com/");
      const data = await result.json();
      setload(false);
      console.log(data.books);
      setBooks(data.books);
    })();
  }, []);

  const handleAddBook = () => {
    history.push("/add");
  };
  return (
    <div className="wrapper">
      <div className="mainbar">
        <h2 className="mainHeading">Books</h2>
        <button className="addbookbtn" onClick={handleAddBook}>
          Add Book
        </button>
      </div>
      <div className="book-cards">
        {loading && (
          <ReactLoading
            className="loading"
            type="bars"
            color="#5227cc"
            height={"150px"}
            width={"200px"}
          />
        )}
        {books &&
          books.map((book) => {
            return (
              <BookCard
                key={book.id}
                book={{
                  id: book.id,
                  title: book.book_name,
                  desc: book.book_desc,
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
