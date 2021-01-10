import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  const history = useHistory();

  return (
    <div className="topBar">
      <img className="logomain" src="/logomain.png" alt="" />
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="titleHead">Bookshop</div>
      </Link>
      <button
        onClick={(_) => history.push("/sold")}
        style={{
          backgroundColor: "white",
          color: "#333",
          marginLeft: "auto",
          marginRight: "10vw",
        }}
        className="submit"
      >
        Sold
      </button>
    </div>
  );
};

export default Nav;
