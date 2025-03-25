import React from 'react'

export default function MbaListUsers() {
    //state
    const [ MbaListUsers, setmbalistuser] = useState([]);
    const mbaApi = "https://67d981e500348dd3e2ab64f2.mockapi.io/K23CNT1_maibinhan/mba_User"
    //useEffect
    useEffect(() => {
        fetch("http://localhost:3001/api/users")
          .then((response) => response.json())
          .then((data) => setUsers(data.users || data)) // Cấu trúc API
          .catch((error) => console.error("Error fetching data:", error));
      }, []);
    
    return (
    <div>them moi users
    <h2>Danh sách User</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            MbaListUsers.map((mbaUserItem,index) => (
              <tr key={mbaUserItem.id}>
                <td>{MbaListUsers.id}</td>
                <td>{mbaUserItem.name}</td>
                <td>{mbaUserItem.email}</td>
                <td>{mbaUserItem.phone}</td>
                <td>
                  <button
                    className={`toggle-btn ${mbaUserItem.active ? "active" : "inactive"}`}
                    onClick={() => toggleActive(user.id)}
                  >
                    {mbaUserItem.active ? "Hoạt động" : "Khóa"}
                  </button>
                </td>
                <td>
                  <button className="delete-btn" onClick={() => deleteUser(mbaUserItem.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  )
}
