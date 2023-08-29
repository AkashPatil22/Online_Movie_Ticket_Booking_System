import { useState } from 'react'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'

const AddTheatreReview = () => {

  const user_id = sessionStorage['user_id']
  const [review, setReview] = useState('')
  const currentthetre_id = sessionStorage['currentthetre_id ']

  const navigate = useNavigate()

  const addtheatrereview = () => {
    if (review.length == 0) {
      toast.warning('please enter review')
    }else {
      const body = {
        user_id,
        review
      }

      
      const url = `${URL}/user/${currentthetre_id}/addnewtheatrereview`
     
      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Review Submitted')
          navigate("/home")
          // get the data sent by server
          //const { email, feedback} = result['data']

        }
      }).then((err)=>console.log(err));
    }
  }


  return (
    <div>
      <h1>Theatre Review</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">

            <label htmlFor="" className="label-control">
                Add Review : 
              </label>
              <input
                onChange={(e) => {
                  setReview(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

                   
            <div className="mb-3">
              <button onClick={addtheatrereview} className="btn btn-primary">
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

export default AddTheatreReview
