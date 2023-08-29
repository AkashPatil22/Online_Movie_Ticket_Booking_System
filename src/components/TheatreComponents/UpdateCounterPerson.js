import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from '../../config'
import ViewTheatres from './ViewTheatres.js'
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

const UpdateCounterPerson = () => 
{
   const cp_userid = sessionStorage['currentcp_userid']
   const [firstname, setfirstname] = useState('')
   const [lastname, setlastname] = useState('')
   const [address, setaddress] = useState('')
   const [mobile, setmobile] = useState('')
   const [email, setemail] = useState('')
  

  const updatecp1 = () => 
  {
    if (firstname.length == 0) 
    {
      toast.warning('please enter first name')
    } else if (lastname.length == 0) {
        toast.warning('please enter last name')
      }else if (address.length == 0) {
        toast.warning('please enter address')
      }else if (mobile.length == 0) {
        toast.warning('please enter contact')
      }else if (email.length == 0) {
        toast.warning('please enter email')
      }
    else {
      const body = {
        firstname,
        lastname,
        address,
        mobile,
        email
      } 
      const url = `${URL}/manager/updatecounter/${cp_userid}`
      axios.put(url, body).then((response) => 
      {
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') 
        {
          toast.success('Counter Person Updated')
          ReactDOM.render(
            <BrowserRouter>
              <ViewTheatres/>
            </BrowserRouter>,
            document.getElementById('middle')
          );  
        }
      }).then((err)=>console.log(err));
    }
}


//    //load data at beignning
//    useEffect(() => {
//     updatecp1()
//     console.log('getting called')
// }, [])


  return (
   
    <div> 
      <div className="row">
        <div className="col">
          <div className="form" style={styles.middlelinks}>
             <h3 style={styles.header}>Update Counter Person</h3>
              <div className="mb-3">
                
                <label htmlFor="" className="label-control">
                    First Name
                </label>
                <input
                  onChange={(e) => {
                    setfirstname(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
         
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                  Last Name
                </label>
               <input
                  onChange={(e) => {
                    setlastname(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">
                Address
                </label>
                <input
                  onChange={(e) => {
                    setaddress(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">
                Contact
                </label>
                <input
                  onChange={(e) => {
                    setmobile(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setemail(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
            </div>

            <button onClick={updatecp1} className="btn btn-primary">
            Update
            </button>
                 
                  <div className="col"></div>
              </div> 
            </div>
          </div>
          </div>   
      
  )
}

export default UpdateCounterPerson
