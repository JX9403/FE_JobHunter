import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableUser from "./TableUser";
import { getAllUser } from "../../../services/apiService";
import { useEffect, useState } from "react";

// image - video 63
const ManageUser = () => {

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  const [listUsers, setListUsers] = useState();

  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUser();
    if (res.data && res.data.result) {
      setListUsers(res.data.result);
    }
  }

  // console.log(listUsers);

  return (
    <>
      <div className="manage-user-container">
        <div className="title mb-3">
          Manage User
        </div>

        <div className="user-content">
          <div>
            <button className="btn btn-success" onClick={() => setShowModalCreateUser(true)}>Add a new user</button>
          </div>
          <div>
            <TableUser listUsers={listUsers} />

          </div>
          <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} fetchListUsers={fetchListUsers} />
        </div>

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}

        />
      </div>
    </>
  )
}

export default ManageUser;