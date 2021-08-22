import React from "react";
import classes from "./Product.module.css";

const Product = ({ img, text }) => {
    return (
        <div className={classes["main-container"]}>
            <img
                src={img}
                alt="product-categories"
                className={classes["image"]}
            />
            <div className={classes["text-container"]}><p>{text}</p></div>
        </div>
    );
};

export default Product;
