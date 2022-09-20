import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./profile.css"

function Basicdetail(){

    return (
        <>
            <div className="details rounded-2 p-5">
            <div className="row">
                <div className="col">
                    <p className="tittle">Brand Name</p>
                    <input type="text" className="form-control" placeholder="Brand Name"/>
                </div>
                <div className="col">
                    <p className="tittle">Contact Name</p>
                    <input type="text" className="form-control" placeholder="Contact Name"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="tittle">Email</p>
                    <input type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="col">
                    <p className="tittle">Phone Number</p>
                    <input type="mobile" className="form-control" placeholder="Mobile Number"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="tittle">Standard Discount(%)</p>
                    <input type="text" className="form-control" placeholder="Discount"/>
                </div>
                
            </div>
            <div className="save">
            <button className="btn-2 rounded-2"> Save</button>  

            </div>
            </div>
        </>
        
    )
}

export default Basicdetail;
