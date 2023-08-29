import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
//import { URL } from '../../config'
import { URL } from "../../config.js"

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 // const { loginStatus }=sessionStorage;
  const navigate = useNavigate()

  const logoutUser = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem('user_id')
    sessionStorage.removeItem('first_name')
    sessionStorage.removeItem('last_name')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('currentformat')
    sessionStorage.removeItem('currentscreenid')
    sessionStorage.removeItem('currentMovieid')
    sessionStorage.removeItem('sumofprice')
    sessionStorage.removeItem('currentlanguage')
    sessionStorage.removeItem('currentMovieName')
    sessionStorage.removeItem('contact')
    sessionStorage.removeItem('currenttheatrename')
    sessionStorage.removeItem('currenttheatreid')
    sessionStorage.removeItem('currenttimeslot')
    sessionStorage.removeItem('customeremail')
    localStorage.removeItem('selectedchair')
    localStorage.removeItem('selectedchairname')
    sessionStorage['loginStatus'] = 0
    // navigate to sign in component
    navigate('/')
  }
  const signinUser = () => {
    logoutUser();
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const body = {
        email,
        password,
      }

      const url = `${URL}/user/login`
      axios.post(url, body).then((response) => {
       
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Welcome to the application')

          const { user_id, first_name, last_name, role } = result['data']
          
          sessionStorage['user_id'] = user_id
          sessionStorage['first_name'] = first_name
          sessionStorage['last_name'] = last_name
          sessionStorage['role'] = role
          sessionStorage['loginStatus'] = 1
         // sessionStorage['currenttheatreid']= 1

          // navigate to respective components
          if(role === 'user'){
            console.log('home')
            navigate('/')
          }else if(role === 'admin'){
            navigate('/admin')
          }
          else if(role === 'theatre_manager'){
            navigate('/manager')
          }

        } else {
          toast.error('Invalid user name or password')
        }
      }).then((err)=>console.log(err));
    }
  }

  return (
    <div>
      <h1>Signin</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
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

            <div className="mb-3">
              <div>
                No account yet? <Link to="/signup">Signup here</Link>
              </div>
              <button onClick={signinUser} className="btn btn-primary">
                Signin
              </button>
              <button onClick={logoutUser} className="btn btn-primary">
                Back to Home
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default Signin
