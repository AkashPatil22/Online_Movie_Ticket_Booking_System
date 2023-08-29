import { useState } from 'react'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import { useEffect} from 'react'
import TheatreReviewList from '../../components/TheatreReviewList'

const ViewTheatreReviewList = () => {

  const currenttheatreid = sessionStorage['currentMovieid']
  //const currenttheatreid = 1
  const user_id = sessionStorage['user_id']
  //const user_id = 5
  const [list, setList] = useState([])
  const [review, setReview] = useState('')
  const navigate = useNavigate()

  const sendReview = () => {
    if (review.length == 0) {
      toast.warning('please enter review')
    } else {
      const body = {        
        user_id,
        review
      }
    
      const url = `${URL}/user/${currenttheatreid}/addnewtheatrereview`
      axios.post(url, body).then((response) => {
       
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Review submitted')
        }
      }).then((err)=>console.log(err));
      navigate('/theatrepage')
  }
}
  const viewtheatrereviewlist = () => {
   
      const url = `${URL}/manager/viewtheatrereview/${currenttheatreid}`
     
      // make api call using axios
      axios.get(url).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Review List retrived')
         // navigate("/home")
          // get the data sent by server
          setList(result['data'])

        }
      }).then((err)=>console.log(err));
    
  }
	useEffect(() => {
    viewtheatrereviewlist()
  }, [])
  


  return (
    <div>
      <h1>Theatre Review List</h1>
      	<div className="row">
            <div className="col">
              
              {list.map((review) => {
                 return <TheatreReviewList review={review} />
              })} 
            </div>
          </div>
          <div>
          <div className="row">
            <div className="col">
              <textarea
                onChange={(e) => {
                  setReview(e.target.value)
                }}
                rows="2"
                className="form-control"
                placeholder="your comment here"
              ></textarea>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <button
                onClick={sendReview}
                style={{ marginTop: '10px' }}
                className="btn btn-success"
              >
                Send
              </button>
            </div>
          </div>
        
    </div>
    </div>
    
  )
  
}
export default ViewTheatreReviewList
