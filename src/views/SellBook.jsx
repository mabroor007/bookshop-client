import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ReactLoading from "react-loading";

const SellBook = () => {
  const location = useLocation();
  const { name, id } = location.state;
  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();
  const [err, setErr] = useState("");
  const [loading, setload] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setload(true);
      setErr("");
      const res = await postData("https://bookshopx.herokuapp.com/sell", {
        customer_name: customer,
        book_name: name,
        book_id: id,
        phone: phone,
      });
      if (res.success) {
        setload(false);
        history.push("/");
      }
    } catch (error) {
      setErr(error.message);
      console.log(error.message);
    }
  };

  const handleCustomerChange = (e) => {
    setCustomer(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="wrapper">
      <h2 className="mainHeading">Sell Book</h2>
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
          onChange={(_) => {}}
          value={name}
          type="text"
        />
        <input
          className="input"
          value={customer}
          onChange={handleCustomerChange}
          type="text"
          placeholder="Customer Name"
        />
        <input
          className="input"
          value={phone}
          onChange={handlePhoneChange}
          type="number"
          placeholder="phone"
        />
        <button className="submit" type="submit">
          Sell
        </button>
      </form>
    </div>
  );
};

export default SellBook;

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
