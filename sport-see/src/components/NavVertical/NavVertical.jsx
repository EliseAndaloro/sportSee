import React from "react";
import Button from "../Button/Button";
import "./NavVertical.css";
import yoga from "../../assets/images/yoga.png";
import natation from "../../assets/images/natation.png";
import velo from "../../assets/images/velo.png";
import altere from "../../assets/images/alteres.png";
//import copy from "../../../assets/images/copiryght.png";

function NavVertical() {
    return (
        <div className="vertical">
            <section className="navIcone">
                <Button srcImg={yoga} />
                <Button srcImg={natation} />
                <Button srcImg={velo} />
                <Button srcImg={altere} />
            </section>
            <p className="copiryght">Copiryght SportSee 2020</p>
        </div>
    );
}

export default NavVertical;