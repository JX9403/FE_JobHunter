import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postCreateNewUser, putUpdateUser } from '../../../services/apiService';
import _ from 'lodash';


const ModalUpdateUser = (props) => {
  const { show, setShow, dataUpdate, fetchListUsers, setDataUpdate } = props;

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("MALE");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("USER");


  const handleClose = () => {
    setId(0);
    setName("");
    setEmail("");
    setPassword("");
    setGender("MALE");
    setAddress("");
    setAge("");
    setRole("USER");
    setCompany("");

    setDataUpdate({});
    setShow(false);
  }
  // console.log("check data update: ", dataUpdate)

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setId(dataUpdate.id);
      setEmail(dataUpdate.email);
      setName(dataUpdate.name);
      setGender(dataUpdate.gender);
      setAddress(dataUpdate.address);
      setAge(dataUpdate.age);
      setRole(dataUpdate.role);
      setCompany(dataUpdate.company);
    }
  }, [dataUpdate]);


  const handleSubmitUpdateUser = async () => {

    let roleFake = {
      id: 3
    }
    let companyFake = {
      id: 3
    }

    let res = await putUpdateUser(id, name, gender, address, age, roleFake, companyFake);

    // console.log("check res update", res);

    if (res.data != null) {
      toast.success("Cập nhật người dùng thành công!");
      handleClose();
      await fetchListUsers();
    } else {
      toast.error(res.message);
    }

  }

  return (
    <>


      <Modal show={show} onHide={handleClose} size='xl' backdrop='static' className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Add a new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3" >
            <div className="col-md-6 d-none" >
              <label className="form-label">ID</label>
              <input type="text" className="form-control " defaultValue={id} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input disabled type="email" className="form-control " defaultValue={email} />

            </div>

            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input disabled type="password" className="form-control" defaultValue={password} />
            </div>

            <div className="col-3">
              <label className="form-label">Họ và tên </label>
              <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>

            <div className="col-3">
              <label className="form-label">Tuổi</label>
              <input type="number" className="form-control" value={age} onChange={(e) => { setAge(e.target.value) }} />
            </div>

            <div className="col-3">
              <label className="form-label">Giới tính</label>
              <select className="form-select" value={gender}
                onChange={(e) => { setGender(e.target.value) }}>
                <option value="MALE">Nam</option>
                <option value="FEMALE">Nữ</option>
              </select>
            </div>

            <div className="col-3">
              <label className="form-label">Vai trò</label>
              <select className="form-select" value={role}
                onChange={(e) => { setRole(e.target.value) }}>
                <option value="USER" >USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>

            <div className="col-6">
              <label className="form-label">Thuộc công ty</label>
              <select className="form-select" value={company}
                onChange={(e) => { setCompany(e.target.value) }}>
                <option >Choose...</option>
                <option>...</option>
              </select>
            </div>

            <div className="col-6">
              <label className="form-label">Địa chỉ</label>
              <input type="text" className="form-control" placeholder="Apartment, studio, or floor" value={address}
                onChange={(e) => { setAddress(e.target.value) }} />
            </div>

            {/* <div className="col-12">
            <label className="form-label label-upload" htmlFor='labelUpload'> <FcPlus />Avatar</label>
            <input
              type="file"
              hidden id='labelUpload'
              onChange={(e) => handleUploadImage(e)} />
          </div>

          <div className="col-md-12 img-preview">
            {previewImage ? <img src="https://thanhnien.mediacdn.vn/Uploaded/nhutnq/2022_10_02/220928180903-03-dall-e-ai-2189.jpg" alt="" /> : <span>Preview image</span>}


          </div> */}

          </form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateUser;