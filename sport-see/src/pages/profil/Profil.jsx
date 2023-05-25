import React from "react";
import { Link } from "react-router-dom";
import karl from "../../assets/images/karl.png";
import cecilia from "../../assets/images/cecilia.png";
import NavVertical from "../../components/NavVertical/NavVertical";

const Profil = () => {
    return (

        <main className="reglage_img">
            <div>
                <NavVertical />
            </div>
            <Link to="/user/12" style={{ marginRight: "20px" }}>
                <img src={karl} alt="Profil de Karl" />
            </Link>
            <Link to="/user/18">
                <img src={cecilia} alt="Profil de Cécilia" />
            </Link>
        </main>
    );
};

export default Profil;