import React from 'react'
import Navbar from './Navbar'
import Header from "./Header"
import Footer from "./Footer"
import  Product from "./Product"
let App=()=>{
        return (<div>
            <h1>App Component</h1>
               <hr/>
               <Navbar/>
               <Navbar/>
               <Navbar/>
               <Navbar/>
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