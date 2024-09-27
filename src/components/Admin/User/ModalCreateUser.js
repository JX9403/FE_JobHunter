import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCreateUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a new user
      </Button>

      <Modal show={show} onHide={handleClose} size='xl' backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>

          <div className="col-3">
            <label className="form-label">Họ và tên </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-3">
            <label for="age" className="form-label">Tuổi</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-3">
            <label className="form-label">Giới tính</label>
            <select className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div className="col-3">
            <label className="form-label">Vai trò</label>
            <select className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div className="col-6">
            <label className="form-label">Thuộc công ty</label>
            <select className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div className="col-6">
            <label className="form-label">Address 2</label>
            <input type="text" className="form-control" placeholder="Apartment, studio, or floor" />
          </div>


        </form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateUser;