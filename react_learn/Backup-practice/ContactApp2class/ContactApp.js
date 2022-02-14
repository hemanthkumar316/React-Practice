import React  from "react";
import Axios from'axios'
import ContactList from "./ContactList"
import ContactDetails from'./ContactDetails'
class ContactApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
             contacts:[],SelectedContact:{}          
        }
   }
   getSelectedContact=(contact)=>{
     this.setState({SelectedContact:contact})  
   }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
             .then((response)=>{
                 this.setState({contacts:response.data})

             })
             .catch((error)=>{
                 console.log(error)

             })
          }
    render(){
        return<>
        <h1>ContactApp</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                {     this.state.contacts.length>0?<><ContactList contacts={this.state.contacts}method1={this.getSelectedContact}/></>:null}
                </div>
                <div className="col-md-4">
               {Object.keys(this.state.SelectedContact).length>0?<><ContactDetails contact={this.state.SelectedContact}/></>:null}
               
                </div>
            </div>
        </div>
        </>
    }
}
export default ContactApp