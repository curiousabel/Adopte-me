import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import { Router, Link } from "@reach/router";

import SearchParams from "./SearchParams"
import Details from './Details';

const App = () => {

    return (
        <React.StrictMode>
            <div>
                <header>
                <Link to="/" >
                Adopte Me!
                </Link>
          
                </header>
               
 
                <Router>
                    <SearchParams path="/"></SearchParams>
                    <Details path="/details/:id"/> 
                </Router>
            
      
            </div>  
            </React.StrictMode>
    );
}

render(React.createElement(App), document.getElementById("root"));