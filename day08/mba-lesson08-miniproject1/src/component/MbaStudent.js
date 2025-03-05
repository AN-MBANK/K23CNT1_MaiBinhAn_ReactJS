import React, { Component } from "react";

class MbaStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    mbaHandleView = (mbaStudent)=>{
        // Chuyển lên MbaStudentList
        this.props.onMbaHandleView(mbaStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ MbaStudentList
    let {renderMbaStudent, key} = this.props;
    console.log("Student:",renderMbaStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderMbaStudent.mbaId}</td>
          <td>{renderMbaStudent.mbaStudentName}</td>
          <td>{renderMbaStudent.mbaAge}</td>
          <td>{renderMbaStudent.mbaGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.mbaHandleView(renderMbaStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default MbaStudent;