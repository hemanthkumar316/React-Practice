import React from'react'
let ContactList=(props)=>{
    let contacts=props.contacts
    return<>
    <h1>Contact List</h1>
    <pre>{JSON.stringify(contacts)}</pre>
    <div className="container mr-2">
        <div className="row">
            <div className="col-md-8">
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contacts) =>{
                            return(
                            <tr keys={contacts.login.uuid} onMouseOver={()=>{props.getSingleContactDetails(contacts)}}>
                                  <td>{contacts.login.uuid.substring(0,4)}</td>
                                    <td>{contacts.name.last}</td>
                                    <td>{contacts.email}</td>
                            </tr>
                            )
                        })
                        
                    }
                </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
}
export default ContactList