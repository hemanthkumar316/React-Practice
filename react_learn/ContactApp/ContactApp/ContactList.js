import React from'react'
class ContactList extends React.Component{
    selectedContactHandler=(contact)=>{
        this.props.selContact(contact);
    }
    render(){
        return<>
        <h1>Contact List</h1>
        
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                <pre>{JSON.stringify(this.props.obj)}</pre>
                    <table className='table table-hover'>
                   <thead className='bg-dark text-white'>
                       <tr>
                           <th>Id</th>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Country</th>
                       </tr>
                   </thead>
                   <tbody>
                       
                       {
                        this.props.obj.map((contact)=>{
                            return <tr key={contact.login.uuid} onMouseOver={this.selectedContactHandler.bind(this,contact)}>
                                <td>{contact.login.uuid.substring(32,36)}</td>
                                <td>{contact.name.last}</td>
                                <td>{contact.email}</td>
                                <td>{contact.location.country}</td>
                            </tr>
                        })
                       }
                         </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    }
}
export default ContactList