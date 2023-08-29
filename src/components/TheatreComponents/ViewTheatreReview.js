import axios from "axios"
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Reviews from './Reviews.js'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { URL } from '../../config'

const styles = {
    middlelinks: {
      width: "950px",
      height: "500px"
}
}

const ViewTheatreReview = () =>
{
    const currentTheatreId = sessionStorage['currentTheatreidforreview']
    const [reviews, setreviews] = useState([])
    const callFunction = () =>
    {
        const url = `${URL}/manager/viewtheatrereview/${currentTheatreId}`
        axios.get(url).then((response) => 
        {
            const result = response.data
            console.log(result['data'])
            if(result['status'] == 'success')
            {
                toast.success('Theatres Reviews retrieved')
                //console.log(result['data'])
                setreviews(result['data'])
                console.log(result['data'])
            }
        }).then((err)=>console.log(err));
    }
    //load data at beignning
    useEffect(() => {
        callFunction()
        console.log('getting called')
    }, [])

    return (
       <div>

          <div className='row' style={styles.middlelinks}>        
          {reviews.length ? reviews.map((r) => <Reviews r = {r}> </Reviews> ) : "Review List is empty"}

          </div>

       </div>

    )
}

export default ViewTheatreReview