import React from "react";
import { Container } from "reactstrap";

import "../css/Header.css";

function Header({ children, src, bg = true }) {
  return (
    <>
      {bg && (
        <Container
          className="header"
          fluid={true}
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(
          ${src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`}
        )`,
            backgroundPosition: "center center"
          }}
        >
          {children}
        </Container>
      )}

      {!bg && (
        <Container className="header" fluid={true}>
          {children}
        </Container>
      )}
    </>
  );
}

export default Header;
