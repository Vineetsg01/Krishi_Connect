import React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Banner_img_3() {

  const myStyle = {
    backgroundImage:
      "url('https://groca.myshopify.com/cdn/shop/files/slider-1.jpg?v=1614918563')",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={myStyle} className='banner-img'>
      <div className="info-3">
        <span className="small-1">Natural Healthcare Ingredients</span>
        <span className="big-1">Grocery Shopping</span>
        <span className="big-2">Save upto 30% off</span>
        <Button  className= "btn btn-4" variant="contained" endIcon={<AddShoppingCartIcon />}>
          SHOP NOW
        </Button>
      </div>
    </div>
  )
}

export default Banner_img_3;
