import React, { useState, useEffect } from "react";
import "../characters/CardGrid.css";
import Header from "../header/Header";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const getInputText = (text) => {
    console.log("text :>> ", text);
  };

  const getCharacters = async () => {
    let url = "https://rickandmortyapi.com/api/character/?page=1";

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setCharacters(data.results);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <Header getInputText={getInputText} />
      <div className="grid grid-cols-5 gap-4 pt-1 m-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {characters.map((character) => {
          return (
            <div key={character.id} className="rounded-lg divGrid text-center">
              <span>
                <img className="cardImg" src={character.image} alt="" />
              </span>

              <h1 className="font-mono">{character.name}</h1>
              <p className="font-mono">{character.species}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Characters;
