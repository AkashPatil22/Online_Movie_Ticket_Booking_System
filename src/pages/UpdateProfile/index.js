import { useState } from 'react'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'

const UpdateProfile = () => {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [contact_no, setContactNo] = useState('')
  const [email]=useState('')
  const navigate = useNavigate()

  const updateprofile = () => {
    if (first_name.length == 0) {
      toast.warning('please enter firstname')
    }  else if (last_name.length == 0) {
      toast.warning('please enter lastname')
    } else if (contact_no.length == 0) {
      toast.warning('please enter contact_no')
    }else if (address.length == 0) {
      toast.warning('please enter address')
    }else {
      const body = {
        first_name,
        last_name,
        address,
        contact_no,
        email
      }

      
      const url = `${URL}/admin/updateuser/${sessionStorage['user_id']}`
     
      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Profile Updated')
          navigate("/home")
          // get the data sent by server
          const { first_name, last_name, address, contact_no, email} = result['data']

          // persist the logged in user's information for future use
          sessionStorage['first_name'] = first_name
          sessionStorage['last_name'] = last_name
        }
      }).then((err)=>console.log(err));
    }
  }


  const home = () => {
    navigate("/home")
  }


  return (
    <div>
      <h1>Update Profile</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">

            <label htmlFor="" className="label-control">
                First Name
              </label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value)
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
                Contact Number
              </label>
              <input
                onChange={(e) => {
                  setContactNo(e.target.value)
                }}
                type="number"
                className="form-control"
              />
            </div>

              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input readOnly
                      type="text"
                className="form-control"
                value = {sessionStorage['email']}
              />
            </div>
            <br/>
            <div className="mb-3">
            <div className="row">
            <div className="col">
              <button onClick={updateprofile} className="btn btn-primary">
                Update
              </button>
            </div>
            <div className="col">
              <button onClick={home} className="btn btn-primary">
                Cancel
              </button>
              </div>
            </div>
            </div>
          </div>
        
        <div className="col"></div>
        </div>
      </div>
    
  )
}

export default UpdateProfile
