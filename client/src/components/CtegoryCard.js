import React from "react";
import "./categoryCard.scss";
import { CardActionArea } from '@mui/material';
import {Link} from "react-router-dom";



function CategoryCard(props) {
    return (
        <div className="category-container">
            <Link className="link" to={`/getproduct/${props.product._id}`}>
            <CardActionArea >
                <div className="category">
                    {/* left part */}
                    <div className="left">
                        <div id="product_img">
                            <img
                                src={props.product.imgUrl}
                                alt="Image"
                            />
                        </div>
                    </div>
                    {/* right part */}
                    <div className="right">
                        <h2 id="short_title">
                            <span className="right_data">{props.product.shortTitle} - </span>
                            <span>{props.product.longTitle.substr(0, 40)}</span>
                        </h2>
                        <hr />

                        <p className="category-info">
                            <span className="right_text">M.R.P. </span>
                            <span className="right_data"> : {props.product.price.mrp}</span>

                            <span className="right_text">Cost </span>:
                            <span className="right_data"> {props.product.price.cost}</span>

                            <span className="right_text">Discount : </span>
                            <span className="right_data" id="discount">{props.product.price.discount}</span>
                        </p>

                        <p id="tagline">
                            <span className="right_text">Tagline </span>
                            <span className="right_data"> : Fresh and Healthy</span>
                        </p>
                    </div>
                </div>
            </CardActionArea>
            </Link>
        </div>
    );
}

export default CategoryCard;