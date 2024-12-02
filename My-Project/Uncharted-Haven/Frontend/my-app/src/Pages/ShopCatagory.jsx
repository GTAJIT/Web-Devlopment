import React from 'react';

const ShopCatagory = ({ category }) => {
  return (
    <div>
      {/* Category-specific content */}
      <h1>{category}</h1>
    </div>
  );
};

export default ShopCatagory;  // Ensure the default export here