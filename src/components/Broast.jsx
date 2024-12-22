import React from 'react';


const BestBroast = () => {
  return (
    <div className="broast-container">
      <div className="broast-text">
        <h1>Best Broast in Islamabad</h1>
        <p>Cooked to order, always served hot!</p>
        <p>Now place your order online & get it delivered to your doorstep.</p>
        <button className="order-button">ORDER ONLINE</button>
      </div>
      <div className="broast-image">
        <img
          src="https://cdn.pixabay.com/photo/2022/05/17/05/15/chiken-bucket-7201681_1280.jpg"
          alt="Best Broast"
          className="broast-img" // Ensures the image has the correct CSS class for styling
        />
      </div>
    </div>
  );
}

export default BestBroast;
