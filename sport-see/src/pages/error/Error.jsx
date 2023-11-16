import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

/**
 * A functional component for displaying an error message.
 * @returns {JSX} The JSX for displaying the error message and a link to the home page.
 */
const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <div className="redirection">
        <Link to="/user/12" className="error-link">
          Retour au profil de Karl
        </Link>
        <Link to="/user/18" className="error-link">
          Retour au profil de Cecilia
        </Link>
      </div>
    </div>
  );
};

export default Error;