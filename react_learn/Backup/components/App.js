import React from 'react'
import Navbar from './components/Navbar'
import Header from "./components/Header"
import Footer from "./components/Footer"
import  Product from "./components/Product"
let App=()=>{
        return (<div>
            <h1>App Component</h1>
               <hr/>
               <Navbar/>
               <hr/>
               <Header/>
                <hr/>
               <Footer/>
               <hr/>
               <Product/>
               </div>
        )
    }

export default App