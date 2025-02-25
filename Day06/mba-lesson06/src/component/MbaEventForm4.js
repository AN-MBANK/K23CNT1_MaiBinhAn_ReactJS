import React, { Component } from "react";

class MbaEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            mbaSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    tvcHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.mbaSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            mbaSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    mbaHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.mbaSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.mbaSelectCheckBox.includes("Apple")}
              onChange={this.mbaHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.mbaSelectCheckBox.includes("Banana")}
              onChange={this.mbaHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.mbaSelectCheckBox.includes("Orange")}
              onChange={this.mbaHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.mbaHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default MbaEventForm4;