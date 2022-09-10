import React from 'react'
import Navbar from './Navbar'
import Home from'./Home'
import About from'./About'
import Dashboard from'./Dashboard'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
     <Route path='/Home'component={Home}/>
     <Route path='/About' component={About}/>
     <Route path='/Dashboard' component={Dashboard}/>
    </Switch>
    </Router>
    
    </>
  )
}

export default App
