import axios from 'axios'
//import { URL } from '../config'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router' 
import HeaderOthers from '../../components/HeaderOthers'
import Footer from '../../components/Footer'

const SuccessPage = () => {
    const navigate = useNavigate()
function toticketpage(){
    navigate('/ticketpage')
}

    return (
        <div>
            <div className='row'>
             <HeaderOthers/>
            </div>
            <div className='row'>
            <div className="col"> </div>
               <div className="square rounded p-5">
                   <h3>Congratulations !! Your Tickets Have been Booked successfully</h3>
               </div>
               <div className="col"> </div>
            </div>
            
            <div className='row'>
                {/* <div className='col'></div> */}
                <div className="col"> </div>
            <div className="col"> </div>
            
              {/*  <div className='col'>
                <button className="btn btn-primary">Download Your Ticket</button>
                </div>
                <div className="col"> </div>*/}
           
                <div className='col'>
                <button className="btn btn-primary" onClick={toticketpage}>View Your Ticket</button>
                </div>
                <div className="col"> </div>
            <div className="col"> </div>
            
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <Footer/>
            </div>

        </div>
    )
}


export default SuccessPage