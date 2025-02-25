import React, { Component } from 'react';

class MbaEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            mbaStudentName:'Mba',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (tvcStudentName) thay đổi
    mbaHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            mbaStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    mbaHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.mbaStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.mbaHandleSubmit}>
                    <label htmlFor='mbaStudentName'>
                        <input type='text' name='mbaStudentName' id='mbaStudentName' 
                            value={this.state.mbaStudentName}
                            onChange={this.mbaHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default MbaEventForm1;