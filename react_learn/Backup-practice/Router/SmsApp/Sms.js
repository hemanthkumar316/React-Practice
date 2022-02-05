import React from "react"
class Sms extends React.Component{
    state={
        count:100
    }
    updateCountHandler=(event)=>{
      this.setState({count:event.target.maxLength-event.target.value.length
      })
    }
    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-success">
                                <h2>Sms Applications</h2>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                   <textarea cols="30" row="3" onChange={this.updateCountHandler} className="form-control" minLength='0.1' maxLength='100'></textarea>
                                    </div>
                                    <h6>Remaining chars:{this.state.count}</h6>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Sms