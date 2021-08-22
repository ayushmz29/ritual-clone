import React from "react";
import classes from "./ProductIntroduction.module.css";

import traceIng from "../../assets/trace-ingr.png";
import nonGmo from "../../assets/non-gmo.png";
import thirdParty from "../../assets/third-party.jpg";
import vegan from "../../assets/vegan.png";
import noArtficial from "../../assets/no-artf-colors.png";

const ProductIntroduction = () => {
    return (
        <div className={classes["main-container"]}>
            <div className={classes["flex-col"]}>
                <p className={classes["para"]}>
                    Daily essentials with good intentions — for living life or
                    creating it.
                </p>

                <ul className={classes["icon-container"]}>
                    <li>
                        <img src={traceIng} alt="intro-icon" />
                        <p>Traceable Ingredients</p>
                    </li>
                    <li>
                        <img src={nonGmo} alt="intro-icon" />
                        <p>Non-GMO</p>
                    </li>
                    <li>
                        <img src={thirdParty} alt="intro-icon" />
                        <p>Third Party Tested</p>
                    </li>
                    <li>
                        <img src={vegan} alt="intro-icon" />
                        <p>Vegan</p>
                    </li>
                    <li>
                        <img src={noArtficial} alt="intro-icon" />
                        <p>No Artificial Flavors or Synthetic Fillers</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductIntroduction;
