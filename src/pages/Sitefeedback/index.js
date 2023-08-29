import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'

const SiteFeedback = () => {
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  
  const navigate = useNavigate()

  const sitefeedback = () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    }  else if (feedback.length == 0) {
      toast.warning('please enter feedback')
    }else {
      const body = {
        email,
        feedback
      }

      
      const url = `${URL}/user/feedback`
     
      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Feedback Submitted')
          navigate("/home")
          // get the data sent by server
          const { email, feedback} = result['data']

        }
      }).then((err)=>console.log(err));
    }
  }


  return (
    <div>
      <h1>Site Feedback</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">

            <label htmlFor="" className="label-control">
                Email
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
                Feedback
              </label>
              <input
                onChange={(e) => {
                  setFeedback(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

        
            <div className="mb-3">
              <button onClick={sitefeedback} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      </div>
    
  )
}

export default SiteFeedback
