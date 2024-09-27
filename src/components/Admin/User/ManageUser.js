import ModalCreateUser from "./ModalCreateUser";



const ManageUser = () => {
  return (
    <>
      <div className="manage-user-container">
        <div className="title">
          Manage User
        </div>

        <div className="user-content">
          <div>
            <button>Add a new user</button>
          </div>
          <div>
            table user
            <ModalCreateUser />
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageUser;