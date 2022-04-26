import React from 'react'
import Navbar from './Navbar'
import Home from'./Home'
import About from'./About'
import Services from './Services'
import Contact from './Contact'
import Login from './Login'
import Register from './Register'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header'

const App = () => {
  return (
    <div>
    <Router>
     <Navbar/>
     <Header/>
     <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/services' component={Services}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/register'component={Register}/>
       <Route path='/Login'   component={Login}/>
     </Switch>
    </Router>
   
    </div>
  )
}

export default App