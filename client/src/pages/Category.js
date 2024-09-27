import React, { useEffect, useState, useContext } from "react";
import "./category.scss";
import img from "../assets/banner2.jpg";
import CategoryCard from "../components/CtegoryCard";
import { useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";

function Category() {
  // To get Category name
  let location = useLocation();
  location = location.pathname;
  const categoryName = location.split('/')[2];
  // console.log(categoryName);


  // category Products fetched
  const [categoryProducts, setCategoryProducts] = useState([]);

  const context = useContext(UserContext);
  const { setProgress } = context;




  useEffect(() => {
    const fetchProducts = async () => {
      setProgress(0);
      const res = await axios.get(`http://localhost:5000/api/products/category/${categoryName}`);
      setProgress(30);
      // console.log(res.data);
      setCategoryProducts(res.data);
      setProgress(100);
      // console.log(categoryProducts);
    }

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="category-page">
      {categoryProducts ? (
        <div  className="product-info">
          {categoryProducts.map((product, i) => (
            <div>
              <CategoryCard product = {product}/>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}



      <div className="category-banner">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Category;