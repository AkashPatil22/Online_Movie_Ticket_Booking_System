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


const ChairPriceList1 = () => {

    const screenid1 = sessionStorage['currentscreenid']
    
    const [chairpricelist1, setchairpricelist1] = useState([])

    const callFunction1 = () =>
    {
        const url = `${URL}/manager/viewchairprice/${screenid1}`
        axios.get(url).then((response) => 
        {
               const result = response.data
               console.log(result)
               if (result['status'] == 'success') 
               {
                   toast.success('chair price details retrieved')
                   setchairpricelist1(result['data'])
                   console.log(result['data'])
               }
        }).then((err)=>console.log(err));
    }

    //load data at beignning
    useEffect(() => {
        callFunction1()
        console.log(chairpricelist1)
        console.log('getting called')
    }, [])


    return(
        <div>
            <div className='row' style={styles.middlelinks}>        
        
            {chairpricelist1.length ? chairpricelist1.map((cp) => <ChairPrice cp = { cp }> </ChairPrice> ) : "Chair List is empty"} 
                   
            </div>
        </div>
    )

}

export default ChairPriceList1