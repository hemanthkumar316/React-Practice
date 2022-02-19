import React from'react'
import Navbar from'../../src/Navabar'
import{BrowserRouter as Router,Switch,Route} from'react-router-dom'
import Message from'./Message/Message'
import Product from'./Product/Product'
let App=()=>{
    return<>
    <Router>
        <Navbar/>
        <Switch>
            <Route path='/message' component={Message}/>
            <Route path='/product' component={Product}/>
        </Switch>
    </Router>
    
    </>
}
export default App