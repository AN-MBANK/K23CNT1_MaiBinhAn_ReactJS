import React, { Component } from 'react';

class MbaEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            mbaCourse: 'MBank001',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    mbaHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            mbaCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    mbaHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.mbaCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='mbaCourse' id='mbaCourse' 
                            value={this.state.mbaCourse}
                            onChange={this.mbaHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.mbaHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default MbaEventForm2;