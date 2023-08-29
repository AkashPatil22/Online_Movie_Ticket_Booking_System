import { Link } from 'react-router-dom'
import React from 'react'



const Dropdown=()=>{

 
    const loginStatus =sessionStorage['loginStatus'];
    //const { first_name }=sessionStorage['first_name'];
     // const role    =sessionStorage['role'] 
    //  const last_name= sessionStorage['last_name']

    return(<>
        <div className="row1">
        <div className="float-end">
        <div className="btn-group " role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Welcome  
          </button>
          <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li>
            <Link to="/" className="dropdown-item">Home</Link>
            </li>
            <li>
            <Link to="/signin" className="dropdown-item">{loginStatus?"Logout":"Login"}</Link>
            </li>

            <li>
            <Link to="/updateprofile" className="dropdown-item">{loginStatus?"Update Profile":null}</Link>
            </li>

            <li>
            <Link to="/signUp" className="dropdown-item">{loginStatus?"Booking History":"SignUp"}</Link>
            </li>
           
            <li>
            <Link to="/changePassword" className="dropdown-item">{loginStatus?"Change Password":null}</Link>
            </li>
            
          </ul>
        </div>
      </div>
      </div>
              </>
    )
}
export default Dropdown