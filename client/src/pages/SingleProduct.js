import React, { useState, useContext, useEffect } from "react";
import "./singleproduct.scss";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Shop2Icon from '@mui/icons-material/Shop2';
import { useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

function SingleProduct() {

    // To get Product Id
    let location = useLocation();
    location = location.pathname;
    const productId = location.split('/')[2];
    // console.log(productId);

    // Context api
    const context = useContext(UserContext);
    const { user, setUser, setProgress } = context;

    // single Product fetched
    const [product, setProduct] = useState({});


    useEffect(() => {
        const fetchSinglePost = async () => {
            setProgress(0);
            const res = await axios.get(`http://localhost:5000/api/products/${productId}`);
            setProgress(30);
            setProduct(res.data);
            console.log(res.data);
            setProgress(100);
        }

        fetchSinglePost();
        // eslint-disable-next-line
    }, [productId]);

    const addToCart = async () => {
        if (user) {
            try {
                const res = await axios.post(`http://localhost:5000/api/products/addcart/${productId}`, {
                    userId: user._id,
                }, {
                    headers: {
                        token: "bearer " + localStorage.getItem('accessToken'),
                    }
                });
                // console.log(res.data);
                // update login user so that its cart get updated
                if (res.data.success) {
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    setUser(res.data.user);

                    // react toastify
                    toast.success('Product added to cart successfully!', {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            } catch (err) {
                console.log(err);

                // react toast
                toast.error('Invalid user!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }
        else {
            // react toastify
            toast.warn('Sign In first to continue!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <div className="single_product">
            {/* alert */}
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                style={{ position: "absolute", top: "60px" }}
            />

            {product ? (
                <>
                    <div className="left">
                        <div id="product_img">
                            <img src={product.imgUrl} alt="product-img" />
                        </div>
                        <div className="left_btn">
                            <Button variant="outlined" startIcon={<AddShoppingCartIcon />} onClick={addToCart}>
                                Add to Cart
                            </Button>
                            <Link className="link" to={'/buynow'}>
                                <Button variant="outlined" startIcon={<Shop2Icon />}>
                                    Buy Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {/* right part */}
                    <div className="right">
                        <h2 id="short_title">
                            <span className="right_data">{product.shortTitle}</span>
                        </h2>
                        <h3 id="long_title">
                            <span className="right_data">{product.longTitle}</span>
                        </h3>
                        <hr />
                        <p id="rating">
                            <span className="right_text">Rating </span> :{" "}
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star-half-full checked"></span>
                        </p>
                        <p id="mrp">
                            <span className="right_text">M.R.P. </span>
                            <span className="right_data"> : {product.price ? product.price.mrp : ""}</span>
                        </p>
                        <p id="cost">
                            <span className="right_text">Cost </span>:
                            <span className="right_data"> {product.price ? product.price.cost : ""}</span>
                        </p>
                        <p id="discount">
                            <span className="right_text">Discount </span>
                            <span className="right_data"> : {product.price ? product.price.discount : ""}</span>
                        </p>
                        <p id="tagline">
                            <span className="right_text">Tagline </span>
                            <span className="right_data"> : {product.tagline}</span>
                        </p>
                        <p id="description">
                            <span className="right_text">Description </span>
                            <span className="right_data">
                                : {product.description}
                            </span>
                        </p>
                    </div>
                </>
            ) : (
                ""
            )}

        </div>
    );
}

export default SingleProduct;