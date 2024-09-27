import React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Banner_img_1() {

  const myStyle = {
    backgroundImage:
      "url('https://vagen-store-demo.myshopify.com/cdn/shop/files/s2.png?v=1692947743')",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={myStyle} className='banner-img'>
      <div className="info-1">
        <span className="small">Vegetable You Should Eat</span>
        <span className="big">The Fresh Organic</span>
        <span className="big">Vegetables</span>
        <Button className="btn" variant="contained" endIcon={<AddShoppingCartIcon />}>
          SHOP NOW
        </Button>
      </div>
    </div>
  )
}

export default Banner_img_1;
