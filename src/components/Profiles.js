import React from "react";

import "../css/Profiles.css";
import Header from "./Header";
import HeaderLogo from "./HeaderLogo";

function SelectProfile({ user, setProfile }) {
  return (
    <div>
      <Header bg={false}>
        <div className="header__nav">
          <HeaderLogo />
        </div>

        <div className="profiles">
          <h1 className="profiles__title">Who's watching?</h1>

          <ul className="profiles__list">
            <li
              className="profiles__item"
              onClick={() =>
                setProfile({
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                })
              }
              data-testid="user-profile"
            >
              <img
                src={
                  user.photoURL
                    ? `/images/users/${user.photoURL}.png`
                    : "/images/misc/loading.gif"
                }
                alt="profileImg"
                className="profiles__picture"
              />
              <p className="profiles__name">{user.displayName}</p>
            </li>
          </ul>
        </div>
      </Header>
    </div>
  );
}

export default SelectProfile;
