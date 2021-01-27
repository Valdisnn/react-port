import React from "react";
import styled from "styled-components";

const FooterBlock = styled.footer`
nav {
  background-color: #ffffff;
  margin-bottom: 8%;
  margin-top: 5%;
}

.nav-text {
  font-size: 30px;
  color: black;
}

.nav-text:hover {
  color: black;
}

.nav-text:active {
  color: black;
}

@media (max-width: 768px) {
  .nav-text {
    font-size: 20px;
  }
}

@media (max-width: 540px) {
  .nav-text {
    text-align: center;
    font-size: 20px;
  }
}

@media (max-width: 320px) {
  .nav-text {
    font-size: 18px;
  }
}

.footer-angular-text {
  color: #3f2aff;
  text-decoration: none
}

.footer-angular-text:hover {
  color: #3f2aff;
  text-decoration: none
}

.footer-angular-text:active {
  color: #3f2aff;
  text-decoration: none
}

`

export const Footer = () => (
    <FooterBlock>
        <nav className="navbar navbar-light">
            <div className="container">
                <p className="navbar-brand mb-0 h1 text-uppercase nav-text">© Vladislav Zhuravlev, 2021</p>
                <p className="navbar-brand mb-0 h1 text-uppercase nav-text">Powered by :
                    <a className="footer-angular-text" href="https://angular.io/" target="_blank">Angular</a>
                </p>
            </div>
        </nav>
    </FooterBlock>
)
