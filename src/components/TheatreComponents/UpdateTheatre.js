import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from '../../config'
import ViewTheatre from './ViewTheatres.js'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';

const styles = {
    header:
    {
        color: "Green",
        marginLeft: 10 + 'em'
    },
    middlelinks: {
      width: "800px",
      height: "500px"
}
}

const UpdateTheatre = () => {
  const theatreid = sessionStorage['currentTheatreid']
  const theatrename = sessionStorage['theatrename']
  const address = sessionStorage['theatreaddress']
  const city = sessionStorage['theatrecity']
  const [screencount, setScreenCount] = useState('')
  const [facilities, setFacilities] = useState('')
  const [countersCount, setCounterCount] = useState('')
  const managerid = sessionStorage['theatremanagerid']
  const gstNumber = sessionStorage['theatregst']
  
  

  const updatetheatre = () => {
    if (screencount.length == 0) 
    {
      toast.warning('please enter screencount')
    } else if (facilities.length == 0) {
        toast.warning('please enter facilities')
      }else if (countersCount.length == 0) {
        toast.warning('please enter countersCount')
      }else if (managerid.length == 0) {
        toast.warning('please enter managerid')
      }else if (gstNumber.length == 0) {
        toast.warning('please enter gstNumber')
      }
    else {
      const body = {
        theatrename,
        address,
        city,
        screencount,
        facilities,
        countersCount,
        managerid,
        gstNumber
      } 
      const url = `${URL}/admin/updatetheatre/${theatreid}`
      axios.put(url, body).then((response) => {
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Theatre Updated')
          ReactDOM.render(
            <BrowserRouter>
              <ViewTheatre/>
            </BrowserRouter>,
            document.getElementById('middle')
          );   
        
        }
      }).then((err)=>console.log(err));
    }
  }

  return (
   
    <div> 
      <div className="row">
        <div className="col">
          <div className="form" style={styles.middlelinks}>
              <div className="mb-3">
                <h3 style={styles.header}>Update Theatre</h3>
                <label htmlFor="" className="label-control">
                    Theatre Id
                </label>
                <input readOnly
                  placeholder = {theatreid}
                  className="form-control"
                />
              </div>
         
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                  Theatre Name
                </label>
                <input
                  readOnly
                  placeholder = {theatrename}
                  className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">
                Address
                </label>
                <input
                  readOnly
                  placeholder = {address}
                  className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">
                City
                </label>
                <input
                  readOnly
                  placeholder = {city}
                  className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Screen Count
                </label>
                <input
                  onChange={(e) => {{(e.target.value) <= 2 ? setScreenCount(e.target.value) : toast.warning('screencount must be less than 2')}
                  }}
                  type="number"
                  className="form-control"
                />
            </div>
            
            <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Facilities
                </label>
                <input
                  onChange={(e) => {
                    setFacilities(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">
                Counter Count
                </label>
                <input
                  onChange={(e) => {
                    setCounterCount(e.target.value)
                  }}
                  type="number"
                  className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">
                Manager Id
                </label>
                <input
                  readOnly
                  placeholder = {managerid}
                  type="text"
                  className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">
                Register GST Number
                </label>
                <input
                  readOnly
                  placeholder = {gstNumber}
                  type="text"
                  className="form-control"
                />
            </div>
              
              <div className="row">
                  
                 
                      <button onClick={updatetheatre} className="btn btn-primary">
                      Update
                      </button>
                 
                  <div className="col"></div>
              </div> 
            </div>
          </div>
          </div>
       
          </div> 
     
      
  )
}

export default UpdateTheatre
