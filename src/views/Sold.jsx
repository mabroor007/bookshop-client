import React, { useState, useEffect } from "react";
import Customer from "../components/Customer";
import ReactLoading from "react-loading";

const Sold = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setload] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await fetch("https://bookshopx.herokuapp.com/customers");
      const data = await result.json();
      setload(false);
      setCustomers(data.customers);
    })();
  }, []);

  return (
    <div className="wrapper">
      <h2 className="mainHeading">Customers</h2>
      <div className="cstmrs">
        {loading && (
          <ReactLoading
            className="loading"
            type="bars"
            color="#5227cc"
            height={"150px"}
            width={"200px"}
          />
        )}
        {customers &&
          customers.map((cst) => {
            return (
              <Customer
                key={cst.id}
                name={cst.customer_name}
                bookName={cst.book_name}
                phone={cst.phone_no}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Sold;
