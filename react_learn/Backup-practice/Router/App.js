 import React from 'react';
import Navbar from './Navbar'
import Contact from'./Testcomp/Contact'
import Services from './Testcomp/Services';
import Sms from'./SmsApp/Sms'
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
 class App extends React.Component {
  render() {
    return <> 
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/Services" component={Services}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Sms" component={Sms}/>
      </Switch  >
      </Router>  
    </>
  }
}
export default App;
 
// import React  from'react'
// import Sms from'./SmsApp/Sms'
// class App extends React.Component{
//   render(){
//     return(
//     <>
//     <Sms/>
//     </>
//     )
// }
//   }
//   export default App
