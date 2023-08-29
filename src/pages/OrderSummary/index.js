import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

const OrderSummary = () => {
  const loginStatus = sessionStorage['loginStatus']
  if(loginStatus == 0)
  {
    toast.warn("Please login first")
    navigate('/signin')
  }
    const currentmoviename = sessionStorage['currentMovieName']
    const language =sessionStorage['currentlanguage']
    const format = sessionStorage['currentformat']
    const theatrename =sessionStorage['currenttheatrename']
    const timeslot = sessionStorage['currenttimeslot']
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [contact,setContact] = useState('')
    const selectedchairname = sessionStorage['selectedchairname']
    const sumofprice = sessionStorage['sumofprice']

    function saveEmail()
    {
        sessionStorage['customeremail'] = email
        sessionStorage['contact'] = contact
        navigate('/savepayment')
    }
     function backtochairpage(){
      navigate('/chairs')
     }

  return (
    <div>
      <div className="row">
      <div className="row">
        <div className="col">
            <h4>Contact Details</h4>
            <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
              />

            <label htmlFor="" className="label-control">
                Contact
              </label>
              <input
                onChange={(e) => {
                  setContact(e.target.value)
                }}
                type="text"
                className="form-control"
              />
        </div>

        <div className="col">
        <div className="col">  
			         <h2>{currentmoviename}</h2>
                     <div className="row">
                     <div className="col"><h4>{language}</h4></div>
                     <div className="col"><h4>|</h4></div>
                     <div className="col"><h4>{format}</h4></div>
                     </div>
                     <h3>Theatre : {theatrename}</h3>
                     <h3>Show Time : {timeslot}</h3>
                     <h3>{selectedchairname}</h3>
                     <h3>Rs. {sumofprice}</h3>
                     <button onClick={saveEmail}>Continue</button>
                     <button onClick={backtochairpage}>Cancel</button>
                     </div>
        </div>
        </div>
    </div>
    </div>
   )
}

export default OrderSummary