import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const MbaNavBar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.Link}>Trang chủ</Link><span  > | </span>
      
      <Link to="/list-user" style={styles.Link}>Danh sách User</Link><span> | </span>
      
      <Link to="/create-user" style={styles.Link}>Thêm mới User</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    gap: "20px",
    padding:"10px",
    background: "#f8f9fa",
    borderBottom:"1px solid #ddd",},
    Link: {
      textDecoration: "none",
      color: "#007bff",
      fontweight: "bold",
    },};
export default MbaNavBar;