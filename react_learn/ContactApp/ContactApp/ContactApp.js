import React from 'react'
import Axios from'axios'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
class ContactApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Contacts:[],selectedContact:{}
        }
    }
    getSelectedContact=(contact)=>{
   console.log(contact);
   this.setState({selectedContact:contact})
    }
    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist' )
            .then((response)=>{
            this.setState({Contacts:response.data})
            })
            .catch()
    }
    render(){
        return(
        <>
        <pre>{JSON.stringify(this.state)}</pre>
        <h1>Contact App</h1>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-8'>
                    {this.state.Contacts.length > 0 ?<><ContactList obj={this.state.Contacts}  selContact={this.getSelectedContact}/></>:null}
                    </div>
                <div className='col-md-4'>
                       {
                             Object.keys(this.state.selectedContact).length > 0 ? <> <ContactDetails details={this.state.selectedContact} /></> : null
                            } 
{/*  
                        <ContactDetails/>                  */}
                        </div>
            </div>
        </div>
        </>
        )
    }
}
export default ContactApp