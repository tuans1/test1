import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalComp({ handleDelete, deleteItem, show, handleShow, title }) {
    const submit = () => {
        handleDelete();
    }
    return (
        <div>
            <Modal show={show} onHide={handleShow} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body> Are you Confirm to delete <b>{deleteItem.code} - {deleteItem.name}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={submit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
