import React, { Component } from 'react';
 class Contact extends Component {
  render() {
    return (
    <div className="container mt-5">
    <div className="row">
        <div className="col md-6">
            <form className="">
                <div className="form-group">
            <input type="text" className='form-control' placeholder='Please enter your Email'/>
                </div>
                <div className="form-group">
                    <input type='text' className="form-control" placeholder='please enter password'/>
                </div>
                <button className='btn btn-success' >Login</button>
                <button className='btn btn-warning'>Reset</button>
            </form>
        </div>
    </div>
</div>
    )
  }
}
export default Contact
