import React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Banner_img_4() {

  const myStyle = {
    backgroundImage:
      "url('https://groca.myshopify.com/cdn/shop/files/slider-3.jpg?v=1614918563')",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={myStyle} className='banner-img'>
      <div className="info-3">
        <span className="small">Vegetable Store</span>
        <span className="big">Fruit Box And</span>
        <span className="big">Free Shipping</span>
        <Button className= "btn" variant="contained" endIcon={<AddShoppingCartIcon />}>
          SHOP NOW
        </Button>
      </div>
    </div>
  )
}

export default Banner_img_4;
