import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import "../css/Header.css";
import logo from "../logo.svg";

function HeaderLogo() {
  return (
    <Link to={ROUTES.HOME}>
      <img className="header__logo" src={logo} alt="Netflix" />
    </Link>
  );
}

export default HeaderLogo;
