import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from '../../config'
import TheatreFeedbackList from './TheatreFeedbackList.js'


const styles = {
    middlelinks: {
      width: "900px",
      height: "500px"
}
}


const ViewFeedback = () =>
{
    const [theatrefeedbacklist, setTheatreFeedbackList] = useState([])

    const callFunction = () => 
    {
        const url = `${URL}/admin/viewfeedback`

        axios.get(url).then((response) => 
        {
            const result = response.data
            console.log(result)
            if(result['status'] == 'success')
            {
                toast.success('Theatres Feedback retrieved')
                console.log(result['data'])
                setTheatreFeedbackList(result['data'])
            }
        })
    }

    //load data at beignning
    useEffect(() => {
        callFunction()
        console.log('getting called')
    }, [])

    return (
       <div>

          <div className='row' style={styles.middlelinks}>        
          {theatrefeedbacklist.length ? theatrefeedbacklist.map((thf) => <TheatreFeedbackList thf = {thf}> 
          </TheatreFeedbackList> ) : "NO Feedback"}

          </div>

       </div>

    )
}

export default ViewFeedback