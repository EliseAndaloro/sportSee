import React from "react";

const Button = ({ srcImg, launch }) => {
    return (
        <li
            className="vn-container__bloc-nav__bloc-ul__list"
            style={{ listStyle: "none" }}
        >
            <button
                className="vn-container__bloc-nav__bloc-ul__list__button"
                onClick={launch}
            >
                <img
                    src={srcImg}
                    alt="icon"
                    loading="lazy"
                    className="vn-container__bloc-nav__bloc-ul__list__button__img"
                />
            </button>
        </li>
    );
};

export default Button;