import axios from "axios"
import { URL } from "../../config";
import {useNavigate } from "react-router";
import TheatreList from "../../components/TheatreList";
import { useEffect } from "react";
import { useState } from "react";
import Image2 from '../../assests/Image2.jpg';
import Footer from "../../components/Footer";
import HeaderUser from "../../components/HeaderUser";
const styles = {
    middlelinks: {
      width: "900px",
      height: "500px"
    },
    name:
    {
        color: "Grey",
        fontWeight:"bold",
        width: "890px"
    },
    buttons:
    {
        width: "90px",
        height: "90px",
       
    },
}
const ViewTheatres = () => {
    

    const currentMovieid = sessionStorage['currentMovieid']
    const city =sessionStorage['city']
    const navigate=useNavigate();
    const [theatreList,settheatreList]=useState([]);
    const [movielist,setMovielist]=useState([]);
    //
    console.log("mov id="+currentMovieid)
    //
    function theatres() {
        axios.get(`${URL}/user/Theaterlist/${city}/${currentMovieid}`).then((response) => {
            const result = response.data
            
            if (result['status'] == 'success') {
               
                settheatreList(result.data);
                console.log(theatreList)
            }
            else {
                console.log("Error in theatreList");
            }

        }).then((err)=>console.log(err));
    }

  function moviedetails() {
	axios.get(`${URL}/manager/viewmoviedetails/${currentMovieid}`).then((response) => {
            const result = response.data
            
            if (result['status'] == 'success') {
               
                setMovielist(result.data);
                console.log(movielist)
            }
            else {
                console.log("Error in mdetailsList");
            }

        }).then((err)=>console.log(err));
	}
 	useEffect(() => {
        		moviedetails()
                theatres()
   			 }, [])
    
    return (

        <div>
            <div>
                <HeaderUser/>
            </div>
            <br/>

            <div className="row">  
				{/* <div className="col"><img src={Image2} alt="error1"/></div> */}
      		   {/* <div className="col"> <img src={movielist[8]} alt="error"/> </div>*/}
		           <div className="col">  
                   <div className="name" style={styles.name}>
                        {movielist.length > 0 ? 
                        (<div id = "name" className="name" style={styles.name}>
                        Movie : {movielist[0][0]}<br/><br/>
                        Description : {movielist[0][1]}<br/><br/>
                        Certification : {movielist[0][2]}<br/><br/>
                        ReleaseDate :{movielist[0][3]}<br/><br/>
                        Status : {movielist[0][4]}<br/><br/>
                        Language : {movielist[0][5]}<br/><br/>
                        Genre : {movielist[0][6]}<br/><br/>
                        Format : {movielist[0][7]}<br/><br/>
                        <img src={movielist[0][8]} alt="error" height="300px" width="800px" /> <br/><br/>
                        </div>)
                        :
                        (<div className="name" style={styles.name}>
                        Movie : {movielist[0]}<br/><br/>
                        Description : {movielist[1]}<br/><br/>
                        Certification : {movielist[2]}<br/><br/>
                        ReleaseDate :{movielist[3]}<br/><br/>
                        Status : {movielist[4]}<br/><br/>
                        Language : {movielist[5]}<br/><br/>
                        Genre : {movielist[6]}<br/><br/>
                        Format : {movielist[7]}<br/><br/>
                        <img src={movielist[8]} alt="error" height="300px" width="800px"/> <br/><br/>
                        </div>)}

                    </div> 
	            	</div>
		         <div className="col">  </div>
             </div>
                {/* <div className=" text-center onee"><h2>Theatres</h2></div> */}
                <div className="row">
                    <div className="col"><h4>Theatres</h4></div>
                    <div className="col"><h4>TimeSlot</h4></div>
                    <div className="col"><h4>Reviews</h4></div>
                </div>
                {theatreList.length > 0 ? theatreList.map((theatre) => <TheatreList theatre={theatre}> </TheatreList>) : "No Theatres "}
            <br/>
            <div>
                <Footer/>
            </div>

        </div>
        )
}
export default ViewTheatres 