import axios from 'axios'
import { URL } from '../config'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router' 
import Dropdown from './dropdown'
import filmTicket from '../assests/filmTicket.jpg';
import { useState } from 'react'


const HeaderUser = () => {
    
    const [city,setCity] = useState('')
    const navigate = useNavigate()
   
    
    function getcities()
    {
        axios.get(`${URL}/user/citylist`).then((response) => {
            const result = response.data
            console.log(result)
            if (result['status'] == 'success') {
               
                setCity(result['data']);
                console.log(city)
            }
            else {
                console.log("Error in chairList");
            }

        }).then((err)=>console.log(err));
    }
   

    function tohome(){
        sessionStorage['city']= city
        navigate('/')
    }

    function toSearchPage(){
        const city=sessionStorage['city']
        if(city == null)
        {
            toast.warn("Please select city first")
        }
        else{
            navigate('/searchpage')
        }
        
    }
return (
<div className="text-center " >
    <nav class="navbar navbar-dark bg-dark" size="1200px">
        <div className="row">
            <div className="col">     
            <a class="navbar-brand" href="#">
                <img src={filmTicket} width="50px" height="50px" alt="error"/>
            </a>
            </div>
            <div className="col">
            <div className="input-group">
            <input type="text" autocomplete="off" 
              placeholder="Search for Movies by language,genre,theatre" 
              value="" size="70" 
              onClick={ toSearchPage} />
            </div>
            </div>

            <div className='col'>
            <div className="input-group mb-3">
               <input type="text" class="form-control" placeholder={city == '' ? "Enter city" : city} required
               onChange={(e) => {
                setCity(e.target.value)
               }} aria-describedby="basic-addon2"/>
               <div class="input-group-append">
               <button class="btn btn-outline-secondary" onClick={ tohome} type="button">Search</button>
              </div>
            </div>
            </div>
              
            <div className="col">
                <Dropdown/>
            </div>
        </div>
    </nav>   
</div>

)

}


export default HeaderUser