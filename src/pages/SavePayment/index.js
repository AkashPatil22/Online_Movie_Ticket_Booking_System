import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"
import { toast } from "react-toastify"
import HeaderOthers from '../../components/HeaderOthers'

const SavePayment = () => {
    const navigate = useNavigate()
    const [paymentMode,setMode] = useState('')
    const theaterid = sessionStorage['currenttheatreid']
    const screenid = sessionStorage['currentscreenid']
    const userid = sessionStorage['user_id']
    const chairstatusid = localStorage.getItem('selectedchair')
    const email = sessionStorage['customeremail']
    const contactNo = sessionStorage['contact']
    const movieid = sessionStorage['currentMovieid']
    const price = sessionStorage['sumofprice']

    function bookticket(){
        if (paymentMode== null) {
            toast.warning('please select payment mode')
          }  else {
            sessionStorage['paymentMode']=paymentMode
            const body = {
                "theaterid" : theaterid,
                "screenid" : screenid,
                "userid" : userid,
                "chairstatusid" : chairstatusid,
                "price" : price,
                "email" : email,
                "contactNo" : contactNo,
                "paymentMode" : paymentMode
            }

            console.log(theaterid)
            console.log(screenid)
            console.log(userid)
            console.log(chairstatusid)
            console.log(price)
            console.log(email)
            console.log(contactNo)
            console.log(paymentMode)

            try{
              navigate('/successpage')
            const url = `http://localhost:8090/user/Payment/${movieid}`
            axios.post(url, body).then((response) => {
             
              const result = response.data
              console.log(result)
              console.log(paymentMode)
              if (result['status'] == 'success') {
                toast.success('Payment Done')
              } else {
                toast.error('Payment not Done')
              }
                          })
          }catch(error)
          {
            console.log("Hello")
            console.log(error)
          }
          }
        }
        
        function toChairsPage()
        {
          navigate('/chairs')
        }

    return (
        <div>
          <div><HeaderOthers/></div>
      <h1>Payment Mode</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form-check">
            <div className="mb-3">
              <label htmlFor="" className="label-control" for="radio1">
              Credit/Debit
              </label>
              <input  type="radio" name="radiobtn" id="radio1"
                onClick={(e) => {
                  setMode("debit card")
                }}
                className="form-check-input"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control" for="radio2">
               Paytm
              </label>
              <input
                onClick={(e) => {
                  setMode("paytm")
                }}
                type="radio" name="radiobtn" id="radio2"
                className="form-check-input"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control" for="radio3">
                UPI
              </label>
              <input
                onClick={(e) => {
                  setMode("UPI")
                }}
                type="radio" name="radiobtn" id="radio3"
                className="form-check-input"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control" for="radio4">
                Net Banking
              </label>
              <input
                onClick={(e) => {
                  setMode("internet banking")
                }}
                type="radio" name="radiobtn" id="radio4"
                className="form-check-input"
              />
            </div>
                <div className="row">
                <div className="col">
            <div className="mb-3">
              <button onClick={bookticket} className="btn btn-primary">
                Submit
              </button>
              </div>
              </div>
              <div className="col">
              <div className="mb-3">
              <button onClick={toChairsPage} className="btn btn-primary">
                Cancel
              </button>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>

    )
}

export default SavePayment