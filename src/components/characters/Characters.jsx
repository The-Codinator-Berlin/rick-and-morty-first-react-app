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
            <div
              key={character.id}
              className="swing rounded-lg divGrid text-center"
            >
              <span>
                <img className="cardImg" src={character.image} alt="" />
              </span>
              <h1 className="nameColor font-mono">{character.name}</h1>
              <p className="species font-mono">{character.species}</p>
              <button
                type="button"
                className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                More
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Characters;
