import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './DeletePhoto.css';

export default function DeletePhoto() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //attach this to event when deleting a photo
  // show button is active for testing purpose only, will be deleted

  return (
    <div className='deletePopUp'>
      <Button className='custom-btn btn-primary' onClick={handleShow}>
        Delete photo
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Body>
          <span className='modal-text'>
            Da li sigurno želite da izbrišete fotografiju?
          </span>
          <br />
          <Button className='custom-btn btn-primary' onClick={handleClose}>
            Izbriši
          </Button>
          <Button className='custom-btn btn-secondary' onClick={handleClose}>
            Otkaži
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
