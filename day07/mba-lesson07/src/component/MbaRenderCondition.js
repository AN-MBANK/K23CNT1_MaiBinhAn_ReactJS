import React, { Component } from 'react';
import MbaLoginControl from './MbaLoginControl';

class MbaRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    mbaHandleLogin = (ev)=>{
        ev.preventDefault();
        this.setState({
            isLoggedIn:true
        })
    }
    // Hàm xử lý sự kiện logout
    mbaHandleLogout = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:false
        })
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <MbaLoginControl isLoggedIn={this.state.isLoggedIn} />

                {
                    this.state.isLoggedIn ? 
                        <button className='btn btn-danger' onClick={this.mbaHandleLogout} >Logout</button> 
                        : <button className='btn btn-primary' onClick={this.mbaHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default MbaRenderCondition;