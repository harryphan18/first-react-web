import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useCallback } from 'react';

const ConfirmRemovePopup = (props) => {
    const { show, message, handleClose } = props;

    const close = useCallback(() => {
        handleClose(false);
    })
    
    return(
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Remvove</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>{message}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="mr-2" onClick={close}>No</Button>
                <Button variant="primary" onClick={close}>Yes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmRemovePopup;