import React from'react'
let ContactDetails=(props)=>{
    return<>
    <div className="container mt-5">
        <div className="row">
            <div className="col">
                <h1>Contact Details</h1>
                <pre>{JSON.stringify(props)}</pre>
                <div className="card">
                    <div className="card-header">
                        <img src={props.singleContactDetail.picture.large}alt=""/>
                    </div>
                    <div className="card-body">
                        <ul className='list-group'>
                            <li className='list-group-item'>{props.singleContactDetail.name.first}
                            </li>
                            <li className='list-group-item'>{props.singleContactDetail.gender}</li>
                            <li className='list-group-item'>{props.singleContactDetail.dob.age}</li>
                            <li className='list-group-item'>{props.singleContactDetail.email}</li>
                            <li className='list-group-item'>{props.singleContactDetail.location.city}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default ContactDetails