import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./successMessage.css";
import check from "../../../assets/check.svg";

export default function SuccessMessage({ title, bodyText, btnText }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        className="success-message"
        data-dismiss="modal"
      >
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={check}
            alt="check"
            height="200px"
            width="200px"
            className="mb-3"
          />
          <h3 className="mt-1 mb-4">{title}</h3>
          <p className="mb-0">{bodyText}</p>
          <Button className="custom-btn btn-primary mt-4" onClick={handleClose}>
            OK
          </Button>
        </Modal.Body>
      </Modal>
      <Button
        className="custom-btn btn-primary mx-auto d-block mt-5"
        onClick={handleShow}
      >
        {btnText}
      </Button>{" "}
    </>
  );
}
