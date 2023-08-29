import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import TheatreList from './TheatreList.js'
const styles = {
    middlelinks: {
      width: "900px",
      height: "500px"
}
}

const DetailsTheatreManager = () => {
  const id = sessionStorage['currentTheatreManagerId']
  //console.log(id)
  const [detailsTheatreManager , setDetailsTheatreManager] = useState([])
  const [details , setDetails] = useState([])
  const callFunction = () => {
     
      const url = `${URL}/admin/viewmanagerdetails/${id}`
      axios.get(url).then((response) => {
        const result = response.data
        console.log(result['data'])
        if (result['status'] == 'success') {
          toast.success('Theatre Manager Details Retrieved')

         console.log(result['data'])
         setDetails(result['data'])
         //setDetailsTheatreManager(result['data'])
         console.log(result['data'])
         console.log(details) 
        }
      })
   
  }

  useEffect(() => {
    callFunction()
    console.log('getting called')
}, [])

  return (
   
   <div>
      <div className='row' style={styles.middlelinks}>        
          {details.length > 0 ? details.map((th) => <TheatreList th = { th }> 
          </TheatreList> ) : "No Details"}

          </div>

   </div>
     
      
  )
}

export default DetailsTheatreManager
