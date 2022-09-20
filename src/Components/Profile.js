import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import "./DashboardComponent/body.css"
import Sidebar from './ProfileComponent/sidebar';
import Basicdetail from './ProfileComponent/Basicdetails';
import Wallet from './ProfileComponent/Wallet'
import Transaction from './ProfileComponent/Transactions'
import Bank from './ProfileComponent/Bank'
function Profile(){

    return <>
    <Sidebar></Sidebar>
    <Routes>
        <Route path = "/profile" element= {<Basicdetail/>} />
        <Route path = "/profile/wallet" element= {<Wallet/>} />
        <Route path = "/profile/Thistory" element= {<Transaction/>} />
        <Route path = "/profile/bankDetail" element= {<Bank/>} />
    </Routes>
</>
    
}

export default Profile;
