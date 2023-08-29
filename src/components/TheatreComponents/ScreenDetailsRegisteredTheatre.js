import axios from "axios"
import { useEffect, useState } from "react"
import ScreenList from './ScreenList.js'
import { toast } from 'react-toastify'
import { URL } from '../../config'

const styles = {
    middlelinks: {
      width: "900px",
      height: "500px"
    }
    
}


const ScreenDetailsRegisteredTheatre = () => 
{
   const selectedTheatreId = sessionStorage['currentTheatreid']
   console.log(selectedTheatreId)
   const [screenlist, setscreenlist] = useState([])
   
   const callScreenFunction = () => 
    {
         const url = `${URL}/manager/viewscreens/${selectedTheatreId}`
         axios.get(url).then((response) => 
         {
                const result = response.data
                console.log(result)
                if (result['status'] == 'success') 
                {
                    toast.success('screen details retrieved')
                    setscreenlist(result['data'])
                    console.log(result['data'])
                }
         }).then((err)=>console.log(err));
    }

    //load data at beignning
    useEffect(() => {
        callScreenFunction()
        console.log(screenlist)
        console.log('getting called')
    }, [])

    
    return(
        <div>
            <div className='row' style={styles.middlelinks}>        
            {screenlist.length ? screenlist.map((sc) => <ScreenList sc = { sc }> </ScreenList> ) : "Screen List is empty"}         
            </div>
        </div>
    )
}

export default ScreenDetailsRegisteredTheatre