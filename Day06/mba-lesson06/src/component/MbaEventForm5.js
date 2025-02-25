import React, { Component } from 'react';

class MbaEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            mbaName:'An',
            mbaAge:20,
            mbaGender:'male',
            mbaCourse:'Mbank001'
        }
    }

    // Hàm xử lý sự kiện change
    mbaHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    mbaHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.mbaName + "\n" + this.state.mbaAge);

        // Chuyển dữ liệu trên form lên App component (TvcApp);
        this.props.onmbaHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='mbaName'>Student Name:</label>
                        <input type='text' name='mbaName' id='mbaName' 
                            value={this.state.mbaName}
                            onChange={this.mbaHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='mbaAge'>Student Age:</label>
                        <input type='text' name='mbaAge' id='mbaAge' 
                            value={this.state.mbaAge}
                            onChange={this.mbaHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='mbaGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='mbaGender' id='mbaMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.mbaGender === 'Male'}
                                onChange={this.mbaHandleChange} />
                            <label htmlFor='mbaMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='mbaGender' id='mbaFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.mbaGender === 'Female'}
                                onChange={this.mbaHandleChange} />
                            <label htmlFor='mbaFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='mbaGender' id='mbaNone' className='mx-2'
                                value={'None'}
                                checked={this.state.tvcGender === 'None'}
                                onChange={this.mbaHandleChange} />
                            <label htmlFor='mbaNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='tvcCourse'>
                            <select name='tvcCourse' id='tvcCourse' 
                                    value={this.state.tvcCourse}
                                    onChange={this.tvcHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.mbaHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default MbaEventForm5;