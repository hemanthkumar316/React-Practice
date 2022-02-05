import React from "react";
import One from'./state1/One'
import Counter from './state2/Counter'
import Navbar  from'../../src/Navbar'
let App=()=>{
    return ( <div>
        <Navbar/>
        <hr/>
        <One/>
        <hr/>
        <Counter/>
        <hr/>
        </div>)
}
export default App