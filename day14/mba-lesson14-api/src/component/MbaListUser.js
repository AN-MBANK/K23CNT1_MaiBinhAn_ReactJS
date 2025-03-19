import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MbaAxiosUsers from '../api/Mba_api';

export default function MbaListUsers() {
  const navigate = useNavigate();
  const [mbaListUser, setMbaListUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const mbaGetAllUser = async () => {
    setIsLoading(true);
    try {
      const mbaResp = await MbaAxiosUsers.get('/mba_users');
      setMbaListUser(mbaResp.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    mbaGetAllUser();
  }, []);

  const mbaHandleUpdate = (mbaId) => {
    console.log('id:', mbaId);
    navigate(`/edit-user/${mbaId}`);
    setAlert({ type: 'success', message: 'Đã chuyển đến trang cập nhật!' });
    setTimeout(() => setAlert(null), 3000);
  };

  const mbaHandleDelete = async (mbaId) => {
    if (window.confirm('Bạn có chắc muốn xóa user này không?')) {
      try {
        await MbaAxiosUsers.delete(`/mba_users/${mbaId}`);
        setMbaListUser(mbaListUser.filter((x) => x.id !== mbaId));
        setAlert({ type: 'danger', message: 'Đã xóa user thành công!' });
        setTimeout(() => setAlert(null), 3000);
      } catch (error) {
        console.error('Error deleting user:', error);
        setAlert({ type: 'danger', message: 'Lỗi khi xóa user!' });
        setTimeout(() => setAlert(null), 3000);
      }
    }
  };

  const mbaElementUser = mbaListUser.map((mbaUser) => (
    <tr key={mbaUser.id}>
      <td>{mbaUser.id}</td>
      <td>{mbaUser.mba_name}</td>
      <td>{mbaUser.mba_email}</td>
      <td>{mbaUser.mba_phone}</td>
      <td>
        <span
          className={`badge ${
            mbaUser.mba_active ? 'bg-success' : 'bg-danger'
          }`}
        >
          {mbaUser.mba_active ? 'Hoạt động' : 'Khóa'}
        </span>
      </td>
      <td>
        <div className="btn-group" role="group">
          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => mbaHandleUpdate(mbaUser.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => mbaHandleDelete(mbaUser.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Danh sách User</h2>

      {/* Custom Alert */}
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          {alert.message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setAlert(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Đang tải...</span>
          </div>
          <p>Đang tải...</p>
        </div>
      ) : mbaListUser.length === 0 ? (
        <p className="text-center text-muted fst-italic">Không có dữ liệu để hiển thị.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-light">
              <tr>
                <th>User ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{mbaElementUser}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}
