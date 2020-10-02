import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import '../css/Footer.css';

function Footer(props) {
    return (
        <Container className="Footer" fluid={true}>
            <Container className="footer__top">
                <Row>
                    <Col xs="12" className="footer__title">
                        <p>Questions? Contact us.</p>
                    </Col>

                    <Col xs="6" lg="3" className="footer__column">
                        <a href="/" className="footer__link">FAQ</a>
                        <a href="/" className="footer__link">Investor Relations</a>
                        <a href="/" className="footer__link">Ways to Watch</a>
                        <a href="/" className="footer__link">Corporate Information</a>
                        <a href="/" className="footer__link">Netflix Originals</a>
                    </Col>

                    <Col xs="6" lg="3" className="footer__column">
                        <a href="/" className="footer__link">Help Centre</a>
                        <a href="/" className="footer__link">Jobs</a>
                        <a href="/" className="footer__link">Terms of Use</a>
                        <a href="/" className="footer__link">Contact Us</a>
                    </Col>

                    <Col xs="6" lg="3" className="footer__column">
                        <a href="/" className="footer__link">Account</a>
                        <a href="/" className="footer__link">Redeem gift cards</a>
                        <a href="/" className="footer__link">Privacy</a>
                        <a href="/" className="footer__link">Speed Test</a>
                    </Col>

                    <Col xs="6" lg="3" className="footer__column">
                        <a href="/" className="footer__link">Media Centre</a>
                        <a href="/" className="footer__link">Buy gift cards</a>
                        <a href="/" className="footer__link">Cookie Preferences</a>
                        <a href="/" className="footer__link">Legal Notices</a>
                    </Col>

                    <Col xs="12" className="footer__text">
                        <p>Netflix Vietnam</p>
                    </Col>
                    <Col xs="12" className="footer__bottom">
                        <p className="footer__text">&#169;2020 Netflix Cloned By Thao Tran </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;