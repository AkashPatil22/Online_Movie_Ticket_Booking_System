import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from '../../config'
import TheatreManagerList from './TheatreManagerList.js'


const styles = {
    middlelinks: {
      width: "900px",
      height: "300px",
      
}
}


const ViewTheatreManager = () =>
{
    const [theatremanagerlist, setTheatreManagerList] = useState([])

    const callFunction = () => 
    {
        const url = `${URL}/admin/viewtmanager`

        axios.get(url).then((response) => 
        {
            const result = response.data
            console.log(result)
            if(result['status'] == 'success')
            {
                toast.success('Theatres Manager List retrieved')
                console.log(result['data'])
                setTheatreManagerList(result['data'])
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
          {theatremanagerlist.length ? theatremanagerlist.map((thm) => <TheatreManagerList thm = {thm}> 
          </TheatreManagerList> ) : "Theatre Manager List is empty"}
          
          </div>

       </div>

    )
}

export default ViewTheatreManager