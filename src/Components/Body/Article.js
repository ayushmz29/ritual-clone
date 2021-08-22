import React from "react";
import classes from "./Article.module.css";
import dyson from "../../assets/home-feat-dyson.jpg";
const Article = () => {
    return (
        <div className={classes["main-container"]}>
            <div className={classes["left-circle"]}></div>
            <img src={dyson} alt="dyson" />
            <div className={classes["text-container"]}>
                <h2>We're not about pseudoscience and half-truths</h2>
                <p>
                    From Omega-3 DHA from microalgae to regeneratively-farmed
                    pea protein, our scientists studied diets and genetics to
                    make daily essentials based on what we need.
                </p>
                <a href="https://ritual.com/approach">Who We Are</a>
            </div>
        </div>
    );
};

export default Article;
