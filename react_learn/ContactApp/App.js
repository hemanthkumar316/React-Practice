import React from'react'
import Navbar from './Navbar/Navbar'
import ContactApp from'./ContactApp/ContactApp'
import {BrowserRouter as Router,Switch,Route} from'react-router-dom'
class App extends React.Component{
    render(){
        return<>
        <Router>
        <Navbar/>
        <Switch>
            <Route path="/Contact" component={ContactApp}/>
            </Switch>
        </Router>
       </>
    }
}
export default App