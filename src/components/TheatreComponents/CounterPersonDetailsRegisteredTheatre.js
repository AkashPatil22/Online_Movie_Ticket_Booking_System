import axios from "axios"
import { useEffect, useState } from "react"
import CPList from './CPList.js'
import { toast } from 'react-toastify'
import { URL } from '../../config'

const styles = {
    middlelinks: {
      width: "900px",
      height: "500px"
    }
    
}


const CounterPersonDetailsRegisteredTheatre = () => 
{
   const selectedTheatreId = sessionStorage['currentTheatreid']
   console.log(selectedTheatreId)
   const [counterpersonlist, setcounterpersonlist] = useState([])
   
   const callCounterPersonFunction = () => 
    {
         const url = `${URL}/manager/viewcounterpersonList/${selectedTheatreId}`
         axios.get(url).then((response) => 
         {
                const result = response.data
                console.log(result)
                if (result['status'] == 'success') 
                {
                    //toast.success('Data Retrieved')
                    setcounterpersonlist(result['data'])
                    console.log(result['data'])
                }
         }).then((err)=>console.log(err));
    }

    //load data at beignning
    useEffect(() => {
        callCounterPersonFunction()
        console.log('getting called')
    }, [])

    
    return(
        <div>
            <div className='row' style={styles.middlelinks}>        
            {counterpersonlist.length ? counterpersonlist.map((cp) => <CPList cp = { cp }> </CPList> ) : "Counter Person List is empty"}         
            </div>
        </div>
    )
}

export default CounterPersonDetailsRegisteredTheatre