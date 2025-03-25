import React, { useEffect, useState } from "react";
import "../styles/Table.css";

const MbaListUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch dữ liệu từ API
  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users || data)) // Cấu trúc API
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Hàm thêm user mới
  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      fullName: "Nguyen Van A",
      email: "nguyenvana@example.com",
      phone: "0123456789",
      active: true,
    };

    setUsers([...users, newUser]); // Chỉ cập nhật local cho demo
  };

  // Hàm toggle trạng thái "Active"
  const toggleActive = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  // Hàm xóa user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id)); // Chỉ cập nhật local cho demo
  };

  return (
    <div className="container">
      {/* Navigation bar */}
      

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
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    className={`toggle-btn ${user.active ? "active" : "inactive"}`}
                    onClick={() => toggleActive(user.id)}
                  >
                    {user.active ? "Hoạt động" : "Khóa"}
                  </button>
                </td>
                <td>
                  <button className="delete-btn" onClick={() => deleteUser(user.id)}>
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
  );
};

export default MbaListUsers;
