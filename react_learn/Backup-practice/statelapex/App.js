import React from 'react';
import Laptop from './Laptop';
import Navbar from'./Navbar'
class App extends React.Component {
  render() {
    return( <div>
       <Navbar/>
        <Laptop/>
       
        </div>
    )
  }
}
export default App;
