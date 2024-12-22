import React from 'react';


const ExclusiveDeals = () => {
  return (
    <div className="deals-container">
      <h1 className="deals-heading">Our Exclusive Deals</h1>
      <button className="view-menu-btn">View All Menu</button>

      <div className="deals">
        {/* First Deal */}
        <div className="deal-item">
          <div className="deal-image">
            <img src="https://images.unsplash.com/photo-1515467529252-d8f02a46e731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFppbmdlcnMlMjB3aXRoJTIwRnJpZXMlMjAlMjYlMjBEcmlua3N8ZW58MHx8MHx8fDA%3D" alt="2 Zingers with Fries & Drinks" />
          </div>
          <h2>2 Zingers with Fries & Drinks</h2>
          <p className="price">Rs 1149</p>
          <button className="order-btn">Order Now</button>
        </div>

        {/* Second Deal */}
        <div className="deal-item">
          <div className="deal-image">
            <img src="https://plus.unsplash.com/premium_photo-1680626371689-0f4efbbaf5e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fDMlMjBaaW5nZXJzJTIwd2l0aCUyMEZyaWVzJTIwJTI2JTIwRHJpbmtzfGVufDB8fDB8fHww" alt="3 Zingers Fries & Drink" />
          </div>
          <h2>3 Zingers Fries & Drink</h2>
          <p className="price">Rs 1599</p>
          <button className="order-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default ExclusiveDeals;
