import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from '../../config'
import TheatreList from './TheatreList.js'


const styles = {
    middlelinks: {
      width: "950px",
      height: "500px"
}
}


const ViewTheatre = () =>
{
    const [theatrelist, setTheatreList] = useState([])
    const id = sessionStorage['user_id']
    const callFunction = () => 
    {
        const url = `${URL}/manager/viewregisteredtheatres/${id}`
        console.log(id)
        axios.get(url).then((response) => 
        {
            const result = response.data
            //console.log(result)
            if(result['status'] == 'success')
            {
                toast.success('Theatres list retrieved')
                //console.log(result['data'])
                setTheatreList(result['data'])
                console.log(result['data'])
            }
        }).then((err)=>console.log(err));
    }

    //load data at beignning
    useEffect(() => {
        callFunction()
        console.log(theatrelist)
        console.log('getting called')
    }, [])

    return (
       <div>

          <div className='row' style={styles.middlelinks}>        
          {theatrelist.length ? theatrelist.map((th) => <TheatreList th = {th}> </TheatreList> ) : "Theatre List is empty"}

          </div>

       </div>

    )
}

export default ViewTheatre