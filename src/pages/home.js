import React, { useEffect, useState } from "react";

import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Faqs from "../components/Faqs";
import Header from "../components/Header";
import OptForm from "../components/OptForm";
import HeaderLogo from "../components/HeaderLogo";
import HeaderButton from "../components/HeaderButton";

function Home() {
  const [show, handleShow] = useState(false);
  
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

  return (
    <div>
      <Header>
        <div className={`header__navFixed ${show && "header__navFixed--black"}`}>
          <HeaderLogo />
          <HeaderButton />
        </div>

        <div className="header__content">
          <h1 className="header__title">
            Unlimited movies, TV shows, and more.
          </h1>

          <h2 className="header__subTitle">Watch anywhere. Cancel anytime.</h2>

          <OptForm />
        </div>

        <div className="header__border"></div>
      </Header>
      <Jumbotron />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;
