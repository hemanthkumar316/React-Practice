import React from 'react'

class ContactDetails extends  React.Component {
    render() {
        return(
            <div>  
                  <div className="container mt-5">
                      <pre>{JSON.stringify(this.props.details)}</pre>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    {/* <h4>Contact Details</h4> */}
                                   <img src={this.props.details.picture.large} /> 
                                </div>
                                <div className="card-body">
                                    <ul className='list-group'>
                                        <li className='list-group-item'>{this.props.details.name.first}</li>
                                        <li className='list-group-item'>{this.props.details.gender}</li>
                                        <li className='list-group-item'>{this.props.details.dob.age}</li>
                                        <li className='list-group-item'>{this.props.details.email}</li>
                                        <li className='list-group-item'>{this.props.details.location.city}</li>
                                    </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactDetails