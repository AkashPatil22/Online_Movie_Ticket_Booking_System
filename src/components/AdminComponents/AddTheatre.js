import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from '../../config'


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
const AddTheatre = () => {
  const [theatername, setTheatreName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [screencount, setScreenCount] = useState('')
  const [facilities, setFacilities] = useState('')
  const [countersCount, setCounterCount] = useState('')
  const [managerid, setManagerId] = useState('')
  const [gstNumber, setGstNumber] = useState('')
  

  const addtheatre = () => {
    if (theatername.length == 0) {
      toast.warning('please enter theatername')
    }  else if (address.length == 0) {
      toast.warning('please enter address')
    } else if (city.length == 0) {
      toast.warning('please enter city')
    }else if (screencount.length == 0) {
      toast.warning('please enter screencount')
    }else if (facilities.length == 0) {
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
        theatername,
        address,
        city,
        screencount,
        facilities,
        countersCount,
        managerid,
        gstNumber
      } 
      const url = `${URL}/admin/addtheatre`
      axios.post(url, body).then((response) => {
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Theatre Added')
        
        }
      })
    }
  }

  return (
   
    <div> 
      <div className="row">
       
          <div className="form" style={styles.middlelinks}>
            <div className="mb-3">
            <h3 style={styles.header}>Add Theatre</h3>
            <label htmlFor="" className="label-control">
                Theatre Name
              </label>
              <input
                onChange={(e) => {
                  setTheatreName(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
               Address
              </label>
              <input
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                City
              </label>
              <input
                onChange={(e) => {
                  setCity(e.target.value)
                }}
                type="text"
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
                onChange={(e) => {
                  setManagerId(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
               Register GST Number
              </label>
              <input
                onChange={(e) => {
                  setGstNumber(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
              
              <div className="row">
             
              <button onClick={addtheatre} className="btn btn-primary" style={{height: "40px"}}>
                Add
              </button></div>  
             
              </div> </div>
            </div>     
  )
}

export default AddTheatre
