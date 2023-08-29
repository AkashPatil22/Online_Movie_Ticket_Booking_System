import { useState } from 'react'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import { useEffect} from 'react'
import MovieReviewList from '../../components/MovieReviewList'

const MovieReview = () => {

  // const currenttheatreid = sessionStorage['currenttheatreid']
  const currentmovieid = sessionStorage['currentMovieid']
 // const currenttheatreid = 1
  const user_id = sessionStorage['user_id']
  //const user_id = 5
  const [list, setList] = useState([])
  const [reviews, setReview] = useState('')
  const [ratings, setRatings] = useState('')
  const navigate = useNavigate()

  const sendReview = () => {
    if (reviews.length == 0) {
      toast.warning('please enter review')
    } else {
      const body = {        
        user_id,
        reviews,
        ratings
      }
    
      const url = `http://localhost:8090/user/${currentmovieid}/addreviewrating`
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
  const viewmoviereviewlist = () => {
   
      const url = `http://localhost:8090/user/1/viewreviewrating`
     
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
    viewmoviereviewlist()
  }, [])
  


  return (
    <div>
      <h1>Movie Review List</h1>
      	<div className="row">
            <div className="col">
              
              {list.map((review) => {
                 return <MovieReviewList review={review} />
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
              <textarea
                onChange={(e) => {
                  setRatings(e.target.value)
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
export default MovieReview
