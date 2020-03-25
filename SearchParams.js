import React, { useState, useEffect } from "react";
import pet ,{ ANIMALS } from "@frontendmasters/pet"
import useDropdown from './useDropdwon'
import Pet from "./Pet";
import Results from "./Results"
const SearchParams = () => {
  const [location, setLocation] =  useState( "Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdwon] = useDropdown("Animal", "Dog", ANIMALS);
  const [breed, BreedDropdown , setBreed] = useDropdown("Breed", "", breeds);

    const [pets, setPets] = useState([]);
    
    async function requestPets() {
        const { animals } = await pet.animals({
          location,
          breed,
          type: animal
        });
    
        console.log("animals", animals);
    
        setPets(animals || []);
      }
    
    useEffect( () => {
    
        setBreeds([]);

        setBreed("");

        pet.breeds(animal).then(({ breeds }) => {

    const breedString = breeds.map(({ name }) => name);
    
        setBreeds(breedString);
    }, console.error);
        
 },[animal,setBreeds,setBreed]);

    return (
    <div className="search-params">
            <form   onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
                  Location
          <input id="location"
             onChange={e => setLocation(e.target.value)}
            value={location}
          placeholder="Location" />
                </label>
                <AnimalDropdwon />
                <BreedDropdown/>
        <button>Submit</button>
            </form>
            <Results pets={pets}/>
    </div>
  );
};

export default SearchParams;