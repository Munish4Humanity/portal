import React from 'react';
import { useState } from 'react';
import ReactDom from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
const SingleTile = ({ item }) => (
  <div className="box">
    <img
      className="center"
      src={`https://assets.ff-24.net/${item.image}`}
    ></img>
    <span className="wtitle">{item.name}</span>
    <div className="pricered">
      20$
      <div className="readmore">
        <Example />
      </div>
    </div>
  </div>
);
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        more..
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SingleTile;
