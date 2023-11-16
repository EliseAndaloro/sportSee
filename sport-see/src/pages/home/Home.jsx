import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    return (
        <div className="home">
          <h1>Page d'accueil</h1>
          <div className="redirection">
            <Link to="/user/12" className="profil-button">
              Profil de Karl
            </Link>
            <Link to="/user/18" className="profil-button">
              Profil de Cecilia
            </Link>
          </div>
        </div>
      );
};

export default Home;