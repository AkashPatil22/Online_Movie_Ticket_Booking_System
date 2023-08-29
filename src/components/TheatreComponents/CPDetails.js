
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import axios from "axios"
import { useEffect, useState } from "react"
import UpdateCounterPerson from './UpdateCounterPerson.js'
import { toast } from 'react-toastify'
import { URL } from '../../config'



const CPDetails = () =>
{
    const cp_userid = sessionStorage['currentcp_userid']
    const fname = sessionStorage['currentcpfirstname'] 
    const sname = sessionStorage['currentcpsecondname']
    const address = sessionStorage['currentcpaddress']
    const contact = sessionStorage['currentcpcontact']
    const email = sessionStorage['currentcpemail']
    const theatreid = sessionStorage['currentTheatreid']
    const [countername, setcountername] = useState('')


    const styles = {
        middlelinks: {
          width: "900px",
          height: "500px"
        }
        
    } 

    const counternamefunc = () =>
    {
        const url = `${URL}/manager/viewcounterperson/${cp_userid}`
        axios.get(url).then((response) =>
        {
            const result = response.data
            console.log(result)
                if (result['status'] == 'success') 
                {
                    //toast.success('Data Retrieved')
                    setcountername(result.data)
                    console.log(result.data)
                }
         }).then((err)=>console.log(err));
    }


    const updatecp = () =>
    {
        sessionStorage['countername'] = countername
        ReactDOM.render(
            <BrowserRouter>
              <UpdateCounterPerson/>
            </BrowserRouter>,
            document.getElementById('middle')
          );  
    }

    //load data at beignning
    useEffect(() => {
        counternamefunc()
        console.log('getting called')
    }, [])

    return (
    <div> 
      <div className="row">
        <div className="col">
          <div className="form" style={styles.middlelinks}>
              <div className="mb-3">
                <h3 style={styles.header}>Update Theatre</h3>
                <label htmlFor="" className="label-control">
                   First Name
                </label>
                <input readOnly
                  placeholder = {fname}
                  className="form-control"
                />
              </div>
         
            <div className="mb-3">
              <label htmlFor="" className="label-control">
              Second Name
                </label>
                <input
                  readOnly
                  placeholder = {sname}
                  className="form-control"
                />
            </div>


            <div className="mb-3">
                <label htmlFor="" className="label-control">
               Address
                </label>
                <input
                  readOnly
                  placeholder = {address}
                  className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">
                Contact_No
                </label>
                <input
                  readOnly
                  placeholder = {contact}
                  className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">
               Email
                </label>
                <input
                  readOnly
                  placeholder = {email}
                  className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">
                 TheatreId
                </label>
                <input
                  readOnly
                  placeholder = {theatreid}
                  className="form-control"
                />
            </div>
            
            <div className="mb-3">
                <label htmlFor="" className="label-control">
                Counter Name
                </label>
                <input
                  readOnly
                  placeholder = {countername[0]}
                  className="form-control"
                />
                    <br/> <br/>
              <div className="row">
                      <button onClick={updatecp} className="btn btn-primary">
                      Update Counter Person
                      </button>
               <div className="col"></div>
              </div> 
            </div>
          </div>
          </div>
       
          </div>  </div> 
     

    )
}

export default CPDetails