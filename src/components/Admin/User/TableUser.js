

const TableUser = (props) => {
  const { listUsers } = props;

  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" >STT</th>
            <th scope="col">Name</th>
            <th scope="col" >Email</th>
            <th scope="col">Role</th>
            <th scope="col">Company</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
            return (
              <tr key={`table-user-${index}`}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role ? item.role.name : ""}</td>
                <td>{item.company ? item.company.name : ""}</td>
                <td>{item.createdAt}</td>
                <td>{item.updatedAt}</td>
                <td>
                  <button className="btn btn-warning" >View</button>
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            )
          })}


        </tbody>
      </table>
    </>
  )
}

export default TableUser;