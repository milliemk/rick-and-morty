import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import "../styles/main.css";
import MyModal from "./myModal";

function CharacterCard({ character }) {
  return (
    <Card className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card.Body>
            <img
              className="character-image"
              src={character.image}
              alt={character.name}
              style={{ width: "12rem", height: "12rem" }}
            />
          </Card.Body>
        </div>
        <div className="flip-card-back">
          <Card.Body>
            <h3 className="orbitron-bold" style={{ fontStretch: "expanded" }}>
              {" "}
              {character.name}
            </h3>
            <MyModal className="modal" character={character} />
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default CharacterCard;
