import React from "react";
import classes from "./ProductCategory.module.css";
import multivitaminPic from "../../assets/Category-Multivitamin.jpg";
import proteinPic from "../../assets/Category-Protein.jpeg";
import pregnancyPic from "../../assets/Category-Pregnancy.jpeg";
import bundlesPic from "../../assets/Category-Bundles.jpeg";
import Product from "./Product";

const ProductCategories = () => {
    return (
        <ul className={classes["main-container"]}>
            <li>
                <Product img={multivitaminPic} text={"Shop Vitamins"} />
            </li>
            <li>
                <Product img={proteinPic} text={"Shop Protein"} />
            </li>
            <li>
                <Product img={pregnancyPic} text={"Shop Pregnancy"} />
            </li>
            <li>
                <Product img={bundlesPic} text={"Shop Bundles"} />
            </li>
        </ul>
    );
};

export default ProductCategories;
