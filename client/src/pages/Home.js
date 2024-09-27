import React from 'react';
import Banner from '../components/Home/Banner';
import './home.scss';
import BigCard from '../components/Home/BigCard';
import HomeProduct from '../components/Home/HomeProduct';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';

function Home() {

  useEffect(() => {
    const fetchProducts = async () => {
      setProgress(10);
      const res = await axios.get("http://localhost:5000/api/products");
      // console.log(res);

      // group products based on category
      const products =  Object.groupBy(res.data, ({ category
      }) => category
      );
      // console.log(products);
      setProgress(50);
      setProducts(products);
      setProgress(100);
    }

    fetchProducts();
    //eslint-disable-next-line
  }, []);

  // loading bar
  const context = useContext(UserContext);
  const {setProgress,setProducts} = context;

  return (
    <div className='home'>
      <Banner />

      {/* big cards */}
      <div className="big-cards">
        <BigCard imgUrl = {"https://vagen-store-demo.myshopify.com/cdn/shop/files/ba2.png?v=1692937507"} big ={"Cherry Tomato"}/>
        <BigCard imgUrl ={"https://vagen-store-demo.myshopify.com/cdn/shop/files/ba4.png?v=1692937507"} big ={"Fresh Carrots"} />
        <BigCard imgUrl = {"https://vagen-store-demo.myshopify.com/cdn/shop/files/ba3.png?v=1692937507"} big ={"Cucumber"} />
      </div>


      {/* Home products */}
      <HomeProduct />
      
    </div>
  )
}

export default Home
