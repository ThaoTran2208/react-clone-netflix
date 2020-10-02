import React, { useContext, useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import SelectProfile from "./Profiles";
import Loading from "./Loading";
import Header from "./Header";
import HeaderLogo from "./HeaderLogo";
import Footer from "./Footer";

import "../css/SlideRow.css";
import SlideRow from "./SlideRow";

function BrowseContainer({ slides }) {
  const [loading, setLoading] = useState(true);
  const [show, handleShow] = useState(false);
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [profile, setProfile] = useState({});
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else handleShow(false);
      });
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayname]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading && <Loading src={user.photoURL} />}
      <Header src="joker1">
        <div
          className={`header__navFixed ${show && "header__navFixed--black"}`}
        >
          <div className="header__group">
            <HeaderLogo />
            <p
              className={
                category === "series"
                  ? "header__textLink--active"
                  : "header__textLink"
              }
              onClick={() => setCategory("series")}
            >
              Series
            </p>
            <p
              className={
                category === "films"
                  ? "header__textLink--active"
                  : "header__textLink"
              }
              active={category === "films" ? true : false}
              onClick={() => setCategory("films")}
            >
              Films
            </p>
          </div>

          <div className="header__group">
            <div className="header__search">
              <button
                className="search__icon"
                onClick={() => setSearchActive((searchActive) => !searchActive)}
                data-testid="search-click"
              >
                <img
                  className="search__icon--img"
                  src="/images/icons/search.png"
                  alt="Search"
                />
              </button>
              <input
                className={
                  searchActive
                    ? "search__input search__input--active"
                    : "search__input"
                }
                type="text"
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                data-testid="search-input"
              />
            </div>

            <div className="header__profile">
              <img
                src={`/images/users/${user.photoURL}.png`}
                alt="profileImg"
                className="header__picture"
              />
              <div className="header__dropdown">
                <div className="header__group dropdown__item">
                  <img
                    src={`/images/users/${user.photoURL}.png`}
                    alt="profileImg"
                    className="header__picture"
                  />
                  <div className="dropdown__textLink">{user.displayName}</div>
                </div>
                <Link
                  to={ROUTES.SIGN_IN}
                  className="dropdown__textLink dropdown__item"
                  onClick={() => firebase.auth().signOut()}
                >
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Col xs="12" sm="8" xl="6" className="header__feature">
          <h2 className="header__featureCallOut">Watch Joker Now</h2>
          <p className="header__text">
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </p>
          <button className="header__playButton">Play</button>
        </Col>
        <div className="header--fadeBottom" />
      </Header>

      <div className="slideRows">
        {slideRows.map((slideRow) => (
          <SlideRow category={category} slideRow={slideRow} />
        ))}
      </div>

      <Footer />
    </>
  ) : (
    <SelectProfile user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;
