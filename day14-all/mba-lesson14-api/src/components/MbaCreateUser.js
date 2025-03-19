import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MbaAxiosUsers from "../api/Mba_api";

export default function MbaCreateUser() {
  const navigate = useNavigate();
  const [Mba_formData, setMba_formData] = useState({
    mba_name: "",
    mba_email: "",
    mba_phone: "",
    mba_active: true,
  });
  const [Mba_errors, setMba_errors] = useState({});
  const [Mba_alert, setMba_alert] = useState(null);

  const Mba_handleChange = (e) => {
    const { name, value, type } = e.target;
    setMba_formData({
      ...Mba_formData,
      [name]: type === "radio" ? value === "true" : value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!Mba_formData.mba_name.trim())
      errors.mba_name = "Vui lòng nhập họ và tên!";
    if (!Mba_formData.mba_email.trim()) {
      errors.mba_email = "Vui lòng nhập email!";
    } else if (!/\S+@\S+\.\S+/.test(Mba_formData.mba_email)) {
      errors.mba_email = "Email không hợp lệ!";
    }
    if (!Mba_formData.mba_phone.trim()) {
      errors.mba_phone = "Vui lòng nhập số điện thoại!";
    } else if (!/^\d{10,11}$/.test(Mba_formData.mba_phone)) {
      errors.mba_phone = "Số điện thoại không hợp lệ!";
    }
    setMba_errors(errors);
    return Object.keys(errors).length === 0;
  };
  const Mba_handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Mba_formData:", Mba_formData);

    try {
      await MbaAxiosUsers.post("/mba_users", Mba_formData);
      setMba_alert({ type: "success", message: "Thêm user thành công!" });
      setTimeout(() => {
        setMba_alert(null);
        navigate("/list-user");
      }, 1000);
    } catch (error) {
      console.error("Lỗi khi thêm user:", error);
      setMba_alert({ type: "danger", message: "Lỗi khi thêm user!" });
      setTimeout(() => setMba_alert(null), 3000);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Form Thêm Mới User</h2>

      {Mba_alert && (
        <div
          className={`alert alert-${Mba_alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {Mba_alert.message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setMba_alert(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <form onSubmit={Mba_handleSubmit}>
        {/* Họ và Tên */}
        <div className="mb-3">
          <label htmlFor="mba_name" className="form-label">
            Họ và Tên
          </label>
          <input
            type="text"
            className={`form-control ${Mba_errors.mba_name ? "is-invalid" : ""}`}
            id="mba_name"
            name="mba_name"
            value={Mba_formData.mba_name}
            onChange={Mba_handleChange}
            placeholder="Nhập họ và tên"
          />
          {Mba_errors.mba_name && (
            <div className="invalid-feedback">{Mba_errors.mba_name}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="mba_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${Mba_errors.mba_email ? "is-invalid" : ""}`}
            id="mba_email"
            name="mba_email"
            value={Mba_formData.mba_email}
            onChange={Mba_handleChange}
            placeholder="Nhập email"
          />
          {Mba_errors.mba_email && (
            <div className="invalid-feedback">{Mba_errors.mba_email}</div>
          )}
        </div>

        {/* Số điện thoại */}
        <div className="mb-3">
          <label htmlFor="mba_phone" className="form-label">
            Số Điện Thoại
          </label>
          <input
            type="text"
            className={`form-control ${Mba_errors.mba_phone ? "is-invalid" : ""}`}
            id="mba_phone"
            name="mba_phone"
            value={Mba_formData.mba_phone}
            onChange={Mba_handleChange}
            placeholder="Nhập số điện thoại"
          />
          {Mba_errors.mba_phone && (
            <div className="invalid-feedback">{Mba_errors.mba_phone}</div>
          )}
        </div>

        {/* Trạng thái */}
        <div className="mb-3">
          <label className="form-label">Trạng Thái</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="mba_active_true"
              name="mba_active"
              value="true"
              checked={Mba_formData.mba_active === true}
              onChange={Mba_handleChange}
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
              checked={Mba_formData.mba_active === false}
              onChange={Mba_handleChange}
            />
            <label className="form-check-label" htmlFor="mba_active_false">
              Khóa
            </label>
          </div>
        </div>

        {/* Nút Thêm Mới */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Thêm Mới
          </button>
        </div>
      </form>
    </div>
  );
}
