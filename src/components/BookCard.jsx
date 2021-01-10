import React from "react";
import { useHistory } from "react-router-dom";

const BookCard = ({ book }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/sell", { id: book.id, name: book.title });
  };

  return (
    <div className="book-card">
      <div className="card-pic">
        <img className="c-img" src="/card-book.png" alt="" />
      </div>
      <div>
        <h3 className="card-title">{book.title}</h3>
        <p className="card-desc">
          {book.desc}
          <span className="overlay"></span>
        </p>
      </div>
      <button onClick={handleClick} className="sell-btn">
        Sell
      </button>
    </div>
  );
};

export default BookCard;
