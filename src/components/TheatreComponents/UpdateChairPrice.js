import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from '../../config'
import ChairPriceList1 from './ChairPriceList1.js'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';

const styles = {
    header:
    {
        color: "Green",
        marginLeft: 10 + 'em'
    },
    middlelinks: {
      width: "800px",
      height: "500px"
}
}


const UpdateChairPrice = () =>
{
    const screenid = sessionStorage['currentscreenid']
    const name = sessionStorage['chairname']
    const [price, setprice] = useState('')

    const updatechairprice = () =>
    {
        if(price.length===0)
            toast.warning("please enter price")
        else
        {
            const body = {
                name,
                price
            }
        
        const url = `${URL}/manager/updatechairprice/${screenid}`
        axios.put(url, body).then((response) => {
            const result = response.data
            console.log(result)
            if (result['status'] === 'success') {
              toast.success('Price Updated')
              ReactDOM.render(
                <BrowserRouter><ChairPriceList1/></BrowserRouter>,
                document.getElementById('middle')
              );
            }
          }).then((err)=>console.log(err));

        }


    }
    

    return (
        <div>
        <div className="row">
            <div className="col">
                <div className="form" style={styles.middlelinks}>
                    <div className="mb-3">
                        <h3 style={styles.header}>Update Price</h3>
                        <label htmlFor="" className="label-control">
                            Chair Name
                        </label>
                        <input readOnly
                        placeholder = {name}
                        className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="label-control">
                            Chair Price
                        </label>
                            <input
                                onChange={(e) => {
                                    setprice(e.target.value)
                                }}
                                type="number"
                                className="form-control"
                                />
                    </div>
                    <div className="row">
                        <div className="col">
                          <button onClick={updatechairprice} className="btn btn-primary">
                            Update
                            </button>
                        
                       </div>
                    </div> 
                </div>
            </div>
        </div>

    </div>       
    )

}  
export default UpdateChairPrice