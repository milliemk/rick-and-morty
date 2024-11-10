import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function MyModal({ character }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        className="learnmore-button orbitron-font small "
        onClick={handleShow}
      >
        LEARN MORE
      </Button>
      <Modal show={show} onHide={handleClose} keyboard={true} className="modal">
        <Modal.Body>
          <h3
            className="orbitron-bold"
            style={{
              textTransform: "uppercase",
              color: "#38a998",
            }}
          >
            {character.name}
          </h3>
          <img
            className="modal-image"
            src={character.image}
            alt={character.name}
          />
          <div style={{ fontStretch: "expanded" }}>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Status: {character.status}</p>
          </div>
          <Button
            className="modal-button orbitron-font"
            variant="secondary"
            onClick={handleClose}
          >
            CLOSE
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;
