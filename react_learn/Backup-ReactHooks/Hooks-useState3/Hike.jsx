import React,{useState} from 'react'

const Hike = () => {
    let[salary,setSalary]=useState({emp_salary:25000})
     let HikeHandler=(Hike)=>{
        setSalary({emp_salary:salary.emp_salary+Hike})
    }
  return (
    <div>
        
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                        <h1>Employee_Salary : {salary.emp_salary}</h1>
                        </div>
                        <div className="card-body">
                            <button className='btn btn-danger ml-4' onClick={HikeHandler.bind(this,10000)}>Hike 10k</button>
                            <button className='btn btn-secondary ml-4' onClick={HikeHandler.bind(this,50000)}>Hike 50k</button>
                            <button className='btn btn-primary ml-4' onClick={HikeHandler.bind(this,70000)}>Hike70k</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hike