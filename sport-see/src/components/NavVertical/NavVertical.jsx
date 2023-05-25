import React from "react";
import Button from "../Button/Button";
import "./NavVertical.css";
import yoga from "../../assets/images/yoga.png";
import natation from "../../assets/images/natation.png";
import velo from "../../assets/images/velo.png";
import altere from "../../assets/images/alteres.png";
//import copy from "../../../assets/images/copiryght.png";
import PropTypes from "prop-types";

/**
 * Vertical navigation component
 *
 * @returns {JSX.Element} The vertical navigation component
 */
function NavVertical() {
    return (
        <div className="vertical">
            <section className="navIcone">
                <Button srcImg={yoga} />
                <Button srcImg={natation} />
                <Button srcImg={velo} />
                <Button srcImg={altere} />
            </section>
            <img className="copy"  alt="copiryght SportSee" />
        </div>
    );
}

NavVertical.propTypes = {
    handleGetMeditationData: PropTypes.func,
    handleGetNatationData: PropTypes.func,
    handleGetCyclismeData: PropTypes.func,
    handleGetMusculationData: PropTypes.func,
};
export default NavVertical;