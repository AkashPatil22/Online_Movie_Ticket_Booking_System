import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'

const UpdatePassword = () => {
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  
  const navigate = useNavigate()

  const updatepassword = () => {
    if (password.length == 0) {
      toast.warning('please enter password')
    }  else if (confirmpassword.length == 0) {
      toast.warning('please enter confirmpassword')
    }else if (password != confirmpassword) {
      toast.warning('Password does not match')
    }else {
      const body = {
        password,
        confirmpassword
      }

      
      const url = `${URL}/user/updatepassword/${sessionStorage['user_id']}`
     
      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Password Updated')
          
          // get the data sent by server
          const { password, confirmpassword} = result['data']
          navigate("/")

        }
      }).then((err)=>console.log(err));
    }
  }


  const home = () => {
    navigate("/")
  }


  return (
    <div>
      <h1>Update Password</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">

            <label htmlFor="" className="label-control"> Password </label>
              <input onChange={(e) => {setPassword(e.target.value) }} type="password" className="form-control"/>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Confirm Password
              </label>
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>
            <div className="row">
            <div className="col">
              <button onClick={updatepassword} className="btn btn-primary">
                Update
              </button></div>
              <div className="col">
              <button onClick={home} className="btn btn-primary">
                Cancel
              </button></div>
              </div>
            </div>
          </div>
        
        <div className="col"></div>
        
      </div>
      </div>
    
  )
}

export default UpdatePassword
