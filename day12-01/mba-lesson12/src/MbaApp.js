import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';

// Các component tương ứng với từng trang
const MbaHome = () => <h2>Trang chủ</h2>;
const MbaGioiThieu = () => <h2>Giới thiệu</h2>;
const MbaSanPham = () => <h2>Sản phẩm</h2>;
const MbaTinTuc = () => <h2>Tin tức</h2>;
const MbaLienHe = () => <h2>Liên hệ</h2>;

 function MbaApp() {
  return (
    <Router>
      <div className=" container border my-3">
        <nav className=" alert alert-dark">
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
            <li><Link to="/san-pham">Sản phẩm</Link></li>
            <li><Link to="/tin-tuc">Tin tức</Link></li>
            <li><Link to="/lien-he">Liên hệ</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MbaHome />} />
          <Route path="/gioi-thieu" element={<MbaGioiThieu />} />
          <Route path="/san-pham" element={<MbaSanPham />} />
          <Route path="/tin-tuc" element={<MbaTinTuc />} />
          <Route path="/lien-he" element={<MbaLienHe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MbaApp;