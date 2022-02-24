import React,{useState,useEffect} from 'react'

const Digitalfun = () => {
    const [currentTime,setCurrentTime]=useState(new Date().toLocaleTimeString())
    useEffect(() => {
        let timer=setInterval(()=>{
            setCurrentTime(new Date().toLocaleTimeString())
        },1000)
        return () => {
            clearInterval(timer)
            console.log('componentWillunmount-execute after moving to another component');
        };
    },[])
  return (
    <div>
        <h1>Digital Clock Using function Life cycle Method</h1>
        <div className="container mt-5">
            <div className="row">
                <div className="col md-5">
                    <div className="card">
                        <div className="card-header">
                            <h4>{currentTime}</h4>
                        </div>
                            <div className="card-body">

                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Digitalfun