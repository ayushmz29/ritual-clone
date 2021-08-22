import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <nav className={classes["nav-bar-container"]}>
            <div className={classes["nav-bar"]}>
                <ul className={classes["nav-item-list"]}>
                    <li className={classes["nav-item-menu"]}>
                        <button>
                            <p>Menu</p>
                        </button>
                        <span
                            className={classes["underscore-hover-element"]}
                        ></span>
                    </li>
                    <li>
                        <a className={classes["nav-item-ritual"]} href="#/">
                            Ritual
                        </a>
                    </li>
                    <li>
                        <a className={classes["nav-item-who-we-are"]} href="#/">
                            Who We Are
                        </a>
                    </li>
                    <svg
                        class="path"
                        width="24"
                        height="24"
                        version="1.1"
                        viewBox="0 0 24 24"
                    >
                        <g
                            fill="none"
                            fill-rule="evenodd"
                            stroke="none"
                            stroke-width="1"
                        >
                            <g>
                                <rect
                                    width="24"
                                    height="24"
                                    x="0"
                                    y="0"
                                    fill="#FFF"
                                    fill-opacity="0"
                                ></rect>
                                <path
                                    stroke="#142B6F"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M20.5,6.5 L20.5,23 L4,23 L4,6.5 L20.5,6.5 Z M12.25,1 C14.5281746,1 16.375,2.84682541 16.375,5.125 C16.375,5.43937389 16.3000569,5.88826911 16.1501708,6.47168566 C11.4355784,6.44324758 8.85377775,6.42767434 8.40476894,6.42496595 L8.33387282,6.42453831 C8.33387282,6.42453831 8.125,5.57904881 8.125,5.125 C8.125,2.84682541 9.97182541,1 12.25,1 Z"
                                ></path>
                            </g>
                        </g>
                    </svg>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
