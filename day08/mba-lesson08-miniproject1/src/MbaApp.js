import React, { Component } from "react";
import MbaControl from "./component/MbaControl";
import MbaStudentList from "./component/MbaStudentList";
import MbaForm from "./component/MbaForm";

class MbaApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      tvcStudents:[
        {mbaId:"SV001",mbaStudentName:"Trịnh Văn Chung",mbaAge:20,mbaGender:"Nam",mbaBirthday:"00/00/0000",mbaBirthPlace:"HN", mbaAddress:"Tòa ca, hn-hp"},
        {mbaId:"SV002",mbaStudentName:"Chu Nguyên Chương",mbaAge:188,mbaGender:"Nữ",mbaBirthday:"25/05/1179",mbaBirthPlace:"HP", mbaAddress:"Trung quốc"},
        {mbaId:"SV003",mbaStudentName:"Tần Thủy Hoàng",mbaAge:55,mbaGender:"Nam",mbaBirthday:"25/05/1079",mbaBirthPlace:"TpHCM", mbaAddress:"Trung Quốc"},
        {mbaId:"SV004",mbaStudentName:"Hoàng Thùy Linh",mbaAge:55,mbaGender:"Nam",mbaBirthday:"25/05/1079",mbaBirthPlace:"TpHCM", mbaAddress:"Hồ chí minh"},
      ],
      mbaStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  mbaHandleView = (mbaStudent)=>{
    this.setState({
      mbaStudent:mbaStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.mbaStudent);
    
    return (
      <div>
        <h1 className="text-center">
          MBA - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <MbaControl  />
                {/* danh sách sinh vien  */}
                <MbaStudentList  renderMbaStudents={this.state.mbaStudents} onMbaHandleView={this.mbaHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <MbaForm  renderMbaStudent = {this.state.mbaStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MbaApp;