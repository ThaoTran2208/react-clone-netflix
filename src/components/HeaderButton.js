import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../constants/routes";

function HeaderButton() {
  return (
    <Link to={ROUTES.SIGN_IN} className="header__button">
      Sign In
    </Link>
  );
}

export default HeaderButton;
