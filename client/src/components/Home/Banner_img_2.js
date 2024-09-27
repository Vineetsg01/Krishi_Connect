import React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Banner_img_2() {

  const myStyle = {
    backgroundImage:
      "url('https://vagen-store-demo.myshopify.com/cdn/shop/files/s3.png?v=1692947743')",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={myStyle} className='banner-img'>
      <div className="info-1">
        <span className="small">Vegetable Store</span>
        <span className="big">Fruit Box And</span>
        <span className="big">Free Shipping</span>
        <Button  className= "btn" variant="contained" endIcon={<AddShoppingCartIcon />}>
          SHOP NOW
        </Button>
      </div>
    </div>
  )
}

export default Banner_img_2;
