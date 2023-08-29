import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from '../../config'
import TheatreList from './TheatreList.js'


const styles = {
    middlelinks: {
      width: "900px",
      height: "500px"
}
}


const ViewTheatre = () =>
{
    const [theatrelist, setTheatreList] = useState([])

    const callFunction = () => 
    {
        const url = `${URL}/admin/viewtheatres`

        axios.get(url).then((response) => 
        {
            const result = response.data
            console.log(result)
            if(result['status'] == 'success')
            {
                toast.success('Theatres list retrieved')
                console.log(result['data'])
                setTheatreList(result['data'])
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
          {theatrelist.length > 0 ? theatrelist.map((th) => <TheatreList th = {th}> </TheatreList> ) : "Theatre List is empty"}

          </div>

       </div>

    )
}

export default ViewTheatre