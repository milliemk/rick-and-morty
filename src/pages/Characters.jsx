import React, { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import NavigationBar from "../components/NavigationBar";
import { Button } from "react-bootstrap";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getCharacters = async (page = 1, searchInput = "") => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchInput}`
      );
      if (!response.ok) {
        setError(true);
        throw new Error("something happened");
      }
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        setCharacters(data.results);
        setTotalPages(data.info.pages);
        setError(false);
      }
    } catch (error) {
      setError(true);
    }
  };

  // trigger getCharacters function when dependencies change
  useEffect(() => {
    getCharacters(currentPage, searchInput);
  }, [currentPage, searchInput]);

  // updating state based on user input
  const handleInputChange = (e) => {
    const searchInput = e.target.value;
    console.log("searchTerm :>> ", searchInput);
    setSearchInput(searchInput);
    setCurrentPage(1);
  };

  // pagination
  const previousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const nextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  return (
    <div>
      <div>
        <NavigationBar
          searchInput={searchInput}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="card-container">
        <div className="character-cards">
          {!error &&
            characters &&
            characters.map((character) => {
              return <CharacterCard key={character.id} character={character} />;
            })}
        </div>
      </div>
      <div className="pagination-container">
        <Button
          onClick={previousPage}
          disabled={currentPage === 1}
          className="material-icons arrow-button"
        >
          arrow_back_ios
        </Button>
        <Button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="material-icons arrow-button"
        >
          arrow_forward_ios
        </Button>
      </div>
    </div>
  );
}

export default Characters;
