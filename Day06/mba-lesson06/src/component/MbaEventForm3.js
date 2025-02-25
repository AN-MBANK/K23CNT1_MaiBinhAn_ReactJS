import React, { Component } from 'react';

class MbaEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            mbaGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    mbaHandleChange = (event)=>{
        this.setState({
            mbaGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    mbaHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.mbaGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='mbaGioiTinh'  id='Nam' className='mx-2'
                            value="Nam" checked={this.state.mbaGioiTinh === 'Nam'} onChange={this.mbaHandleChange}/> 
                            <label htmlFor='mbaNam'>Nam</label>  
                        <input type='radio' name='mbaGioiTinh'  id='mbaNu' className='mx-2'
                            value="Nữ" checked={this.state.mbaGioiTinh === 'Nữ'} onChange={this.mbaHandleChange}/> 
                            <label htmlFor='mbaNu'>Nữ</label>  
                        <input type='radio' name='mbaGioiTinh' id='mbaKhac' className='mx-2'
                            value="Khác" checked={this.state.mbaGioiTinh === 'Khác'} onChange={this.mbaHandleChange}/> 
                            <label htmlFor='mbaKhac'>Khác</label>
                    </div>
                    <button onClick={this.mbaHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default MbaEventForm3;