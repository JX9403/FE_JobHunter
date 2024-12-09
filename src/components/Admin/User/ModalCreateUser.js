import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postCreateNewUser } from '../../../services/apiService';


const ModalCreateUser = (props) => {
  const { show, setShow, fetchListUsers } = props;

  const handleClose = () => {
    setName("");
    setEmail("");
    setPassword("");
    setGender("MALE");
    setAddress("");
    setAge("");
    setRole("USER");
    setCompany("");

    setShow(false);
  }

  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("MALE");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("USER");

  // const [image, setImage] = useState("");
  // const [previewImage, setPreviewImage] = useState("");

  // const handleUploadImage = (e) => {
  //   if (e.target && e.target.files && e.target.files[0]) {
  //     setPreviewImage(URL.createObjectURL(e.target.files[0]));
  //     setImage(e.target.files[0]);
  //   } else {

  //   }
  // }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePassword = (password) => {
    return String(password)
      .toLowerCase()
      .match(
        "^.{6,}$"
      );
  };


  const handleSubmitCreateUser = async () => {
    // 
    //validate 
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error('Email không hợp lệ!');
      return;
    }

    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      toast.error('Password tối thiểu 6 ký tự!');
      return;
    }

    //call api
    let roleFake = {
      id: 3
    }
    let companyFake = {
      id: 3
    }

    let res = await postCreateNewUser(name, email, password, gender, address, age, roleFake, companyFake);
    console.log(res)
    if (res.data != null) {
      toast.success("Thêm mới người dùng thành công!");
      handleClose();
      await fetchListUsers();
    } else {
      toast.error(res.message);
    }
    // console.log("check res ", res);

  }

  return (
    <>


      <Modal show={show} onHide={handleClose} size='xl' backdrop='static' className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Add a new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3" >
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input required type="email" className="form-control " value={email} onChange={(e) => { setEmail(e.target.value) }} />
              {/* <div class="invalid-feedback">
                Email không được để trống!
              </div> */}
            </div>

            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
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
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateUser;