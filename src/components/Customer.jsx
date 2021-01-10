import React from "react";

const Customer = ({ name, bookName, phone }) => {
  return (
    <div className="customerCard">
      <h4 className="cname">Name : {name}</h4>
      <div className="bname">Book : {bookName}</div>
      <div className="phone">Phone : {phone}</div>
    </div>
  );
};

export default Customer;
