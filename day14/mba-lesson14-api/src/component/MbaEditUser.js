import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MbaAxiosUsers from '../api/Mba_api';

export default function MbaEditUser() {
  const { id } = useParams();  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mba_name: '',
    mba_email: '',
    mba_phone: '',
    mba_active: '',
  });
const [errors, setErrors] = useState({});
  
const validateForm = () => {
  const newErrors = {};
  if (!formData.mba_name) newErrors.mba_name = 'Họ và Tên là bắt buộc';
  if (!formData.mba_email) newErrors.mba_email = 'Email là bắt buộc';
  if (!formData.mba_phone) newErrors.mba_phone = 'Số Điện Thoại là bắt buộc';
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}

  const [alert, setAlert] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await MbaAxiosUsers.get(`/mba_users/${id}`);
        setFormData(response.data); 
      } catch (error) {
        console.error('Error fetching user:', error);
        setAlert({ type: 'danger', message: 'Lỗi khi tải thông tin user!' });
        setTimeout(() => setAlert(null), 3000);
      }
    };
    fetchUser();
  }, [id]);


  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? (e.target.value === 'true') : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    
    try {
      await MbaAxiosUsers.put(`/mba_users/${id}`, formData);

      setAlert({ type: 'success', message: 'Cập nhật user thành công!' });
      setTimeout(() => {
        setAlert(null);
        navigate('/list-user');
      }, 1000);
    } catch (error) {
      console.error('Error updating user:', error);
      setAlert({ type: 'danger', message: 'Lỗi khi cập nhật user!' });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Sửa Thông Tin User</h2>
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

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="mba_name" className="form-label">
            Họ và Tên
          </label>
          <input
            type="text"
            className={`form-control ${errors.mba_name ? 'is-invalid' : ''}`}
            id="mba_name"
            name="mba_name"
            value={formData.mba_name}
            onChange={handleChange}
            placeholder="Nhập họ và tên"
          />
          {errors.mba_name && <div className="invalid-feedback">{errors.mba_name}</div>}
          {errors.mba_email && <div className="invalid-feedback">{errors.mba_email}</div>}
          {errors.mba_phone && <div className="invalid-feedback">{errors.mba_phone}</div>}

        </div>

        <div className="mb-3">
          <label htmlFor="mba_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.mba_email ? 'is-invalid' : ''}`}
            id="mba_email"
            name="mba_email"
            value={formData.mba_email}
            onChange={handleChange}
            placeholder="Nhập email"
          />
          {errors.mba_email && <div className="invalid-feedback">{errors.mba_email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="mba_phone" className="form-label">
            Số Điện Thoại
          </label>
          <input
            type="text"
            className={`form-control ${errors.mba_phone ? 'is-invalid' : ''}`}
            id="mba_phone"
            name="mba_phone"
            value={formData.mba_phone}
            onChange={handleChange}
            placeholder="Nhập số điện thoại"
          />
          {errors.mba_phone && <div className="invalid-feedback">{errors.mba_phone}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Trạng Thái</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="mba_active_true"
              name="mba_active"
              value="true"
              checked={formData.mba_active === true}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="mba_active_true">
              Hoạt động
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="mba_active_false"
              name="mba_active"
              value="false"
              checked={formData.mba_active === false}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="mba_active_false">
              Khóa
            </label>
          </div>
        </div>

        <div className="d-flex justify-content-center gap-2">
          <button type="submit" className="btn btn-primary">
            Cập Nhật
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/list-user')}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}
