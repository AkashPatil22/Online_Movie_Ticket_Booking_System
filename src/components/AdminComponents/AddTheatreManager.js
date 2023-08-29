import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from '../../config'


const styles = {
    header:
    {
        color: "Green",
        marginLeft: 4 + 'em'
    }
}
const AddTheatreManager = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const addtheatremanager = () => {
    if (firstname.length == 0) {
        toast.warning('Please enter first name')
      } else if (lastname.length == 0) {
        toast.warning('Please enter last name')
      } else if (email.length == 0) {
        toast.warning('Please enter email')
      } else if (password.length == 0) {
        toast.warning('Please enter password')
      } 
       else {
        const body = {
          firstname,
          lastname,
          address,
          mobile,
          email,
          password   
        }


      const url = `${URL}/admin/addmanager`
      axios.post(url, body).then((response) => {
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Theatre Manager Added')
        
        }
      })
    }
  }

  return (
   
    <div> 
      <div className="row">
        <div className="col">
          <div className="form">
            <div className="mb-3">
            <h4 style={styles.header}>Add Theatre Manager</h4>
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
                  setMobile(e.target.value)
                }}
                type="number"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email Address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="email"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

              <div className="row">
              <div className="col"></div>
              <div className="col">
              <button onClick={addtheatremanager} className="btn btn-primary">
               Add
              </button></div>
              <div className="col">
              <div className="col"></div>
              </div> </div>
            </div>
          </div>
       
          </div> </div> 
     
      
  )
}

export default AddTheatreManager
