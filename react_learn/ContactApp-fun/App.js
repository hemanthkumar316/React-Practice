import React from'react'
import Navbar from'./Navbar/Navbar'
import ContactApp from './ContactApp/ContactApp'
import{BrowserRouter as Router,Switch,Route} from'react-router-dom'
let App=()=>{
return<>
<Router>
<Navbar/>
<Switch>
<Route path="/contact" component={ContactApp}/>
</Switch>
</Router>

</>
}
export default App
