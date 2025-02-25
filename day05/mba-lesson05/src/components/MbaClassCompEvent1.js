import React, {Component} from "react";

class MbaClassCompEvent1 extends Component {
    // ham xu ly su kien 
    MbaEventHandleClick1 = () => {
        alert("Button1 clicked");
    }
    MbaEventHandleClick2 = (name) => {
        alert("Button 2 clicked; name="+name);
    }
    render(){
        return (
            <div className="alert alert-danger">
                <button className='btn btn-primary mx-1' onClick={this.MbaEventHandleClick1}>bt1</button>
                <button className='btn btn-success mx-1' onClick={() => this.MbaEventHandleClick2("mba")}>bt2</button>
            </div>
        );
    }
}
export default MbaClassCompEvent1;