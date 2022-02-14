import React from "react"
class ContactDetails extends React.Component{
    render(){
        return<>
        <pre>{JSON.stringify(this.props)}</pre>
        <h1>ContactDetails</h1>
    <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                             <li className="list-group-item">{this.props.contact.name}</li>
                             <li className="list-group-item">{this.props.contact.email}</li>
                             <li className="list-group-item">{this.props.contact.address.city}</li>
                             <li className="list-group-itemm">{this.props.contact.phone}</li>
                            </ul>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}
export default ContactDetails