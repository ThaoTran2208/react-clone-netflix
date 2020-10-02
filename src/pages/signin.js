import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Input } from "reactstrap";

import { FirebaseContext } from "../context/firebase";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../css/Form.css";

import * as ROUTES from "../constants/routes";
import HeaderLogo from "../components/HeaderLogo";
import HeaderButton from "../components/HeaderButton";

function SignIn(props) {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";

  const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <div>
      <Header>
        <div className="header__nav">
          <HeaderLogo />
          <HeaderButton />
        </div>
        <div className="form">
          <h1 className="form__title">Sign In</h1>
          {error && (
            <div className="form__error" data-testid="error">
              {error}
            </div>
          )}
          <Form className="form__base" onSubmit={handleSignin} method="POST">
            <Input
              className="form__input"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Input
              className="form__input"
              type="password"
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              className="form__submit"
              disabled={isInvalid}
              type="submit"
              data-testid="sign-in"
            >
              Sign In
            </button>
          </Form>
          <p className="form__text">
            New to Netflix?{" "}
            <Link to="/signup" className="form__link">
              Sign up now.
            </Link>
          </p>
          <p className="form__textSmall">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </div>
        <div className="header__border"></div>
      </Header>
      <Footer />
    </div>
  );
}

export default SignIn;
