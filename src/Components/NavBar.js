import React from "react";
import styled from "styled-components";

const NavBarStyled = styled.header`
nav {
  background-color: #ffffff;
}

.nav-text {
  margin-top: 5%;
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
    font-size: 20px;
  }
}


@media (max-width: 320px) {
  .nav-text {
    font-size: 17px;
  }
}

`

export const NavBar = () => (
    <NavBarStyled>
        <nav className="navbar navbar-light">
            <div className="container">
                <p className="navbar-brand mb-0 h1 text-uppercase nav-text">Portfoliové webové stránky</p>
            </div>
        </nav>
    </NavBarStyled>
)
