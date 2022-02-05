import React from'react'
import Axios from 'axios'
class User extends React.Component{ 
   state={
       user:[]
   }
     getdatahandler=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
             .then((response)=>
             { this.setState({user:response.data})

             })
             .catch((error)=>{})
             }
    render (){
           return<React.Fragment>
            <h1>User Data</h1>
            <pre>{JSON.stringify(this.state.user)}</pre>
            <button className='btn btn-primary' onClick={this.getdatahandler}>Get Data</button>
            <div className="container mt-5 ">
    <div className="row">
        <div className="  md-6">
            <table className='table table-hover'>
                <thead className='bg-dark text-warning'>
                               <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                </tr>
                </thead>
                <tbody>
                    {
                        this.state.user.map((singleuser)=>{
                            return<tr>
                                <td>{singleuser.id}</td>
                                <td>{singleuser.name}</td>
                                <td>{singleuser.email}</td>
                                 <td>{singleuser.phone}</td> 
                                 <td>{singleuser.website}</td> 
                            </tr>
                        })
                    }

                    </tbody>
            </table>
        </div>
    </div>
</div>
        </React.Fragment>
           
    }
}
export default User
