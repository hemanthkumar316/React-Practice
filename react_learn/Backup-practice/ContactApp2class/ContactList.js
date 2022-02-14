import React from'react'
class ContactList extends React.Component{
    getContact=(contact)=>{
        console.log(contact)
        this.props.method1(contact)
    }
    render(){
        return<>
        <h1>ContactList</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    <table className='table table-hover'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.contacts.map((contact)=>{
                                    return<tr key={contact.company.name} onMouseOver={this.getContact.bind(this,contact)}>
                                        <td>{contact.id}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.company.name}</td> 
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