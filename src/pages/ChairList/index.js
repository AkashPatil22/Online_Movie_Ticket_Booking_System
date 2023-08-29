import axios from "axios"
import { URL } from "../../config";
import {useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import HeaderUser from "../../components/HeaderUser";
import Chairlist from "../../components/Chairlist"
import { toast } from "react-toastify";

const ChairList = () => {
    
    const navigate = useNavigate()
    const selectedchairname = sessionStorage['selectedchairname']
    const sumofprice= sessionStorage['sumofprice']
    const screenid = sessionStorage['screenid']
    const movieid = sessionStorage['currentMovieid']
    const theatreid = sessionStorage['currenttheatreid']
    const userid = sessionStorage['user_id']
    const currentscreenid = sessionStorage['currentscreenid']
    const currentmoviename = sessionStorage['currentMovieName']
    const language =sessionStorage['currentlanguage']
    const format = sessionStorage['currentformat']
    const theatrename =sessionStorage['currenttheatrename']
    const timeslot = sessionStorage['currenttimeslot']
    //const navigate=useNavigate();
    const chairstatusid = localStorage.getItem('selectedchair') || '[]'
    const [chairList,setChairList]=useState([]);

    function chairs() {
        axios.get(`${URL}/user/Seatslist/${currentscreenid}`).then((response) => {
            const result = response.data
            console.log(result)
            if (result['status'] == 'success') {
               
                setChairList(result['data']);
                console.log(chairList)
            }
            else {
                console.log("Error in chairList");
            }

        }).then((err)=>console.log(err));
    }

    function toOrdersummaryPage()
    {
        const loginStatus = sessionStorage['loginStatus']
        if(loginStatus == 0)
        {
            toast.warn("Please login to go forward");
        }
        navigate('/ordersummary')
    }

    function toSearchPage(){
        navigate('/searchpage')
    }
    useEffect(() => {
        chairs()

      //  console.log(currentscreenid)
        }, [])

    return (

        <div>
            <div><HeaderUser/></div>
            <br/>

             <div className="row">  
      		    <div className="col">  </div>
		           <div className="col">  
                   <div className=" text-center onee"><h2>Chair List</h2></div>
                {chairList.length > 0 ? chairList.map((chair) => <Chairlist chair={chair}> </Chairlist>) : "No Chairs "}
	            	</div>
                    
                    <div className="col">  </div>

                    <div className="col">  
			         <h2>{currentmoviename}</h2>
                     <div className="row">
                     <div className="col"><h3>{language}</h3></div>
                     <div className="col"><h3>|</h3></div>
                     <div className="col"><h3>{format}</h3></div>
                     </div>
                     <h3>Theatre : {theatrename}</h3>
                     <h3>Show Time : {timeslot}</h3>
                     {/* <h3>{selectedchairname}</h3> */}
                     {/* <h3>Rs. {sumofprice}</h3> */}
                     <button onClick={toOrdersummaryPage}>Continue</button> 
                     <button onClick={toSearchPage}>Cancel</button>
                     </div>
		         <div className="col">  </div>
             </div>
                
        </div>
        )
}
export default ChairList
