import React from 'react';
import './Donate.css';

function Donate() {
  return (
    <div className="App" style={{backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80')"}}>
      <div className="donate-section">
        <h1>Donate Now</h1>
        <p>Instructions:
Please send us the amount you want to the following XRP address to be part of this project:
rDzTZxa7NwD9vmNf5dvTbW4FQDNSRsfPv6</p>
<p>Please add the following destination tag with your payment: #187</p>

<p>Thank you for your contribution to this campaign!</p>
      </div>
    </div>
  );
}

export default Donate;