import React from 'react';
import { render } from 'react-dom';
import Pet  from './Pet';

const App = () => {
    // return React.createElement("div", { id: "something-important" }, [
    //     React.createElement("h1", {}, "Adopte Me!"),
    //     React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese" }),
    //     React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel" }),
    //     React.createElement(Pet,{name:"Doink" , animal: "Cat", breed: "Mixed"},)
    // ])

    return (
        <div>
            <h1 id="">Adopte Me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
            <Pet name="Pepper" animal="Bird" breed="Cockatiel"></Pet>
            <Pet name="Doink" animal="Cat" breed="Mixed"></Pet>
      </div>  
    );
}

render(React.createElement(App), document.getElementById("root"));