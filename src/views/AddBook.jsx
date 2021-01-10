import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [err, setErr] = useState("");
  const [loading, setload] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !desc) return;
    try {
      setload(true);
      setErr("");
      const result = await postData("https://bookshopx.herokuapp.com/add", {
        name: title,
        desc,
      });
      if (result.success) {
        setload(false);
        setDesc("");
        setTitle("");
        history.push("/");
      }
    } catch (error) {
      setload(false);
      setErr(err);
      console.log(error.message);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  return (
    <div className="wrapper">
      <h2 className="mainHeading">Add Book</h2>
      {err && (
        <h3 style={{ color: "red", textDecoration: "underline" }}>{err}</h3>
      )}
      <form onSubmit={handleSubmit}>
        {loading && (
          <ReactLoading
            className="loading"
            type="bars"
            color="#5227cc"
            height={"150px"}
            width={"200px"}
          />
        )}
        <input
          className="input"
          value={title}
          onChange={handleTitleChange}
          type="text"
          placeholder="Book Title"
        />
        <input
          className="input"
          value={desc}
          onChange={handleDescChange}
          type="text"
          placeholder="Description"
        />
        <button className="submit" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBook;

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
