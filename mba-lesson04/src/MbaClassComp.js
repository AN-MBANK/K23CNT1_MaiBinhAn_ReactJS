import React,{Component} from "react";

class MbaClassComp extends Component{
    constructor(props){
        super(props);
        //run state
        this.state = {
            fullname:" an an",
            age: 25,
            phone:"01010108120"
        }
    }
    //ham xli su kien
    changeinfo = (ev)=>{
        // state upd
        this.setState({
            fullname:"Mai Hu"
    });}
    render() { 
        let users = this.props.renderUsers;
        console.log('===============================');
        console.log(users);
        console.log('===============================');
        return(
            <div className='alert alert-success'>
                <h2>trinh bay du lieu tu state</h2>
                <p>info state (fullname): {this.state.fullname}</p>
                <p>info state (age): {this.state.age}</p>
                <p>info state (phone): {this.state.phone}</p>

                <hr/>
                <button className='btn btn-primary' onClick={this.changeInfo}>change info</button>
                <hr/>
                <h3>lay du lieu tu props</h3>
                <p>Name: {this.props.rendername}</p>
                <p>fullName: {this.props.renderUsers ?this.props.renderUsers.fullname:''}</p>
                <p>age: {this.props.renderUsers ?this.props.renderUsers.age:''}</p>
                <p>phone: {this.props.renderUsers ?this.props.renderUsers.phone:''}</p>            </div>
        );
    }
}
export default MbaClassComp;