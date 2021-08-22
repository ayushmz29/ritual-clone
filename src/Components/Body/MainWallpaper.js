import React from "react";
import mainWallpaper from "../../assets/Home-Hero-Desktop.jpeg";
import classes from "./MainWallpaper.module.css";

const MainWallpaper = () => {
    return (
        <div className={classes["main-wallpaper-wrapper"]}>
            <img
                src={mainWallpaper}
                className={classes["main-wallpaper"]}
                alt="main-wallpaper"
            />
            <h1>
                <div>The future </div> of health
                <div>
                    <em> — is clear.</em>
                </div>
                <div className={classes["button-wrapper"]}>
                    <a href="https://ritual.com/shop-all">Shop All</a>
                </div>
            </h1>
        </div>
    );
};

export default MainWallpaper;
