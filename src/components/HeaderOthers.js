import axios from 'axios'
import { URL } from '../config'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router' 
import Dropdown from './dropdown'
import filmTicket from '../assests/filmTicket.jpg'

const HeaderOthers = () => {

    const navigate=useNavigate()

   
return (
<div className="text-center " >
    <nav class="navbar navbar-dark bg-dark" size="1200px">
        <div className="row">
        <div className="col"> </div>
            <div className="col">     
            <a class="navbar-brand" href="#">
                <img src={filmTicket} width="50px" height="50px" alt="error"/>
            </a>
            </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col" >
                <Dropdown/>
            </div>
        </div>
    </nav>   
</div>

)

}


export default HeaderOthers