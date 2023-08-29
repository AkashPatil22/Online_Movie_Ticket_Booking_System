import { useNavigate } from 'react-router'
import Dropdown from '../../components/dropdown'
import HeaderUser from '../../components/HeaderUser'
import Image2 from '../../assests/Image2.jpg';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import axios from 'axios'
import UpcomingMovies from '../../components/UpcomingMovies.js'
import { useState } from 'react'
// import Modals from '../../components/Modals';

const Home = () => {
  // get the logged in user's information
  const [trendingmovie,setTrendingmovie] = useState([])
    const [upcomingmovie,setUpcomingmovie] = useState([])
  const navigate = useNavigate()
   const city = sessionStorage['city'] 
  function tohome(){
    
    
    axios.get(`http://localhost:8090/user/bannertrending/${city}`).then((response) => {
        const result = response.data
        console.log(result)
        if (result['status'] === 'success') {
           
            setTrendingmovie(result['data']);
            console.log(trendingmovie)
        }
        else {
            console.log("Error in chairList");
        }

    }).then((err)=>console.log(err));
    axios.get(`http://localhost:8090/user/bannerupcoming/${city}`).then((response) => {
        const result = response.data
        console.log(result)
        if (result['status'] === 'success') {
           
            setUpcomingmovie(result['data']);
            console.log(upcomingmovie)
        }
        else {
            console.log("Error in chairList");
        }
      }).then((err)=>console.log(err));
    }

    useEffect(() => {
      tohome()
    }, [])
    
return (
    
<div className='container-fluid'>
      <div className="row">
        
        <HeaderUser/>
      </div>
      <div className='row'>
      <div className="col-12"><img src={Image2} alt="error1" height="300px" width={'100%'}/></div>
      </div>
      
      <div className='row'>
           {upcomingmovie.length > 0 ? upcomingmovie.map((movie) => <UpcomingMovies movie = {movie}></UpcomingMovies>)
                              : "Search for city or movies "}
                     
                         
               </div>
               <div className='row'>
               {trendingmovie.length > 0 ? trendingmovie.map((movie) =><UpcomingMovies movie = {movie}></UpcomingMovies>)
                             : " "}
                     
                         
               </div>
     
     <br/>
     <br/>
     <div>
       <Footer/>
     </div>


    </div>
  )
}

export default Home
