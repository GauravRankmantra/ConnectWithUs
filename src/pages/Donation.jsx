import React, { useState } from "react";
import axios from "axios";

const Donation =()=> {
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/v1/donate/get-donation-token", { amount });
    if (res.data.success) {
      setToken(res.data.token);
    } else {
      alert("Error generating token");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Donate via Authorize.Net</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter donation amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Donate</button>
      </form>

      {token && (
        <div style={{ marginTop: "2rem" }}>
          <iframe
            title="Payment"
            src={`https://accept.authorize.net/payment/payment.aspx?token=${token}`}
            width="100%"
            height="600px"
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Donation;
