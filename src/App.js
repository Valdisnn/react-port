import React from "react";
import {GlobalStyle} from "./Components/GlobalStyle";
import {NavBar} from './Components/NavBar';
import {Description} from "./Components/Description";
import {Footer} from "./Components/Footer";


function App() {
    return (
        <React.Fragment>
            <GlobalStyle/>
            <NavBar/>
            <Description/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
