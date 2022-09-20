import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Dashboard from './Components/Dashboard.jsx';
import Profile from './Components/Profile'
import Contactus from './Components/Contactus'

function App(){
    return (
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path ="/" element = {<Dashboard/>}/>
                <Route path ="/profile" element = {<Profile/>}/>
                <Route path ="/contact" element = {<Contactus/>}/>
            </Routes>
            
            {/* <Route exact path = "./Profile" component = {ProductList}></Route> */}
            

        </div>
        
    )
}

export default App;