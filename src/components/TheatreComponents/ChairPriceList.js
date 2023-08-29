import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react"
import ChairPrice from './ChairPrice.js'
import { toast } from 'react-toastify'
import { URL } from '../../config'

const styles = {
    theatrename:
    {
        color: "Grey",
        textAlign: "center",
        fontWeight: 'bold',
    },
    buttons:
    {
        width: "90px",
        height: "70px",
        marginLeft: "20px",
    },
    rows:
    {   
        height: "80px",
    }
}


const ChairPriceList = () => {

    const screenid = sessionStorage['currentscreenid']
    
    const [chairpricelist, setchairpricelist] = useState([])

    const callFunction = () =>
    {
        const url = `${URL}/manager/viewchairprice/${screenid}`
        axios.get(url).then((response) => 
        {
               const result = response.data
               console.log(result)
               if (result['status'] == 'success') 
               {
                   toast.success('chair price details retrieved')
                   setchairpricelist(result['data'])
                   console.log(result['data'])
               }
        }).then((err)=>console.log(err));
    }

    //load data at beignning
    useEffect(() => {
        callFunction()
        console.log(chairpricelist)
        console.log('getting called')
    }, [])


    return(
        <div>
            <div className='row' style={styles.middlelinks}>        
        
            {chairpricelist.length ? chairpricelist.map((cp) => <ChairPrice cp = { cp }> </ChairPrice> ) : "Chair List is empty"} 
                   
            </div>
        </div>
    )

}

export default ChairPriceList