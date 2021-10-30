import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './SuccessMessage.css';
import check from '../../../assets/check.svg';

export default function SuccessMessage(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        show={show}
        className='success-message'
        data-dismiss='modal'
      >
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title id='contained-modal-title-vcenter'></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={check} alt='check' height='200px' width='200px' />
          <h3>Uspešno!</h3>
          <p>Poruka je uspešno poslata</p>
          <Button className='custom-btn btn-primary' onClick={handleClose}>
            OK
          </Button>
        </Modal.Body>
      </Modal>
      <Button className='custom-btn btn-primary' onClick={handleShow}>
        Open success modal
      </Button>{' '}
    </>
  );
}
