import React,{useState,useEffect} from'react'
import Axios from'axios'
import ContactList from'./ContactList'
import ContactDetails from'./ContactDetails'
let ContactApp=()=>{
    let[contacts,setContacts]=useState([]);
    let[singleContactDetail,setSingleContactDetail]=useState({})
    let getSingleContactDetails=(contact)=>{
        setSingleContactDetail(contact)
    }
    useEffect(()=>{
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
        .then((response)=>{
            setContacts(response.data)
        })
        .catch()
    },[])
    return<>
    <h1>Contact App</h1>
    <div className='container mt-5'>
        <div className='row'>
    <div className='col-md-8'>
    {
        contacts.length>0?<><ContactList contacts={contacts} getSingleContactDetails={getSingleContactDetails}/></>:null
    }
    </div>
    <div className='col-md-4'>
        {Object.keys(singleContactDetail).length>0?<><ContactDetails singleContactDetail={singleContactDetail}/></>:null}
      
    </div>
    </div>
    </div>
    </>
}
export default ContactApp