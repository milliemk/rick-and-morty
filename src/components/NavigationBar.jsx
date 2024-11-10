import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Characters from "../pages/Characters";
import { useState } from "react";

function NavigationBar({ searchInput, handleInputChange }) {
  return (
    <>
      <Navbar>
        <h2 className="orbitron-bold title">Rick and Morty</h2>
        <Container>
          <input
            id="search-input"
            className="search-input orbitron-font"
            type="search"
            placeholder="Search..."
            style={{
              textTransform: "uppercase",
            }}
            value={searchInput}
            onChange={handleInputChange}
          />
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
