import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Input } from "reactstrap";

import { FirebaseContext } from "../context/firebase";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderLogo from "../components/HeaderLogo";
import HeaderButton from "../components/HeaderButton";

import "../css/Form.css";

import * as ROUTES from "../constants/routes";

function SignUp(props) {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";

  const handleSignup = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName("");
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
          <h1 className="form__title">Sign Up</h1>

          {error && <div className="form__error">{error}</div>}

          <Form className="form__base" onSubmit={handleSignup} method="POST">
            <Input
              className="form__input"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />

            <Input
              className="form__input"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />

            <Input
              className="form__input"
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <button disabled={isInvalid} className="form__submit">
              Sign Up
            </button>
          </Form>

          <p className="form__text">
            Already a user?{" "}
            <Link to="/signin" className="form__link">
              Sign in now.
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

export default SignUp;
