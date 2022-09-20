import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'

function Wallet(){

    return (
    <>
        <div className="details rounded-2 p-5 d-flex">
            <div className="balance rounded-2">
                <p1 className="wbalance">Wallet Balance</p1>
                <h2 className="sbalance"> &#8377; 500.00</h2>
            </div>

            <div className="dwallet rounded-2">
                <div className="wsection d-flex p-3">
                    <p1 className="nav-link m-2">Deposit</p1>
                    <p1 className="nav-link m-2">Withdraw</p1>
                </div>
            </div>
        </div>
    </>
    )
    
}

export default Wallet;
