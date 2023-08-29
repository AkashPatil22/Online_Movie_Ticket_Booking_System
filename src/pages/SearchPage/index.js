import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import HeaderOthers from '../../components/HeaderOthers'
import Footer from '../../components/Footer'
import MovieList from '../../components/MovieList'


const styles = {
    
    headerlogo: {
        width: '50px',
        height: '30px',
        margin: '5px'
        }
    
    }

const SearchPage = () => {

  //const city = sessionStorage['city']
  const city = "Mumbai"
  const [byTheatre, setByTheatre] = useState('')
  const [byGenre, setByGenre] = useState('')
  const [byLanguage, setByLanguage] = useState('')
  const [movielist,setMovieList] = useState([])
  const navigate = useNavigate()
//   const [clickStatus,setStatus] = useState(0)

//   const searchpage = () => {
//        if(byGenre != null){
//         searchpagebytheatre()
//        }
//        else if(byTheatre){
//         searchpagebytheatre()
//        }
//        else{
//         searchpagebylanguage()
//        }

       function searchpagebylanguage() 
       {
       const url = `${URL}/user/list/${city}/${byLanguage}`
     
        axios.get(url).then((response) => {
        // get the server result
        const result = response.data
      //  toast.success(byLanguage)
        console.log(result)
        if (result['status'] == 'success') {
         // toast.success('Movie List retrived')
         // navigate("/home")
          // get the data sent by server
          setMovieList(result['data'])
             }
           }).then((err)=>console.log(err));
        }

	    function searchpagebygenre ()
        {
          const url = `${URL}/user/Movielist/${city}/${byGenre}`
     
        // make api call using axios
          axios.get(url).then((response) => {
          // get the server result
          const result = response.data
          console.log(result)
          if (result['status'] == 'success') {
           //toast.success('Movie List retrived')
           //navigate("/home")
           // get the data sent by server
           setMovieList(result['data'])
               }
            }).then((err)=>console.log(err));
         }

    function searchpagebytheatre() {
   
      const url = `${URL}/user/movieslist/${city}/${byTheatre}`
     
      // make api call using axios
      axios.get(url).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          //toast.success('Movie List retrived')
         // navigate("/home")
          // get the data sent by server
          setMovieList(result['data'])
         }
      }).then((err)=>console.log(err));
    }
  
  return (
    <div>
         <div>
           <HeaderOthers/>
         </div>

    <div className="row"></div>
    <hr/>
    <div className="row">
        <div className="col"> 
          <div className="form">
            <div className="mb-3">
            <label htmlFor="" className="label-control">
                Search by Theatre : 
              </label>
              <input
                onChange={(e) => {
                  setByTheatre(e.target.value)
                }}
                type="text"
                className="form-control"
              />
              {/* { byTheatre && searchpagebytheatre() } */}
            </div>
	      </div>
      </div>

      
        <div className="col">
          <div className="form">
            <div className="mb-3">
            <label htmlFor="" className="label-control">
                Search by Language : 
              </label>
              <input
                onChange={(e) => {
                  setByLanguage(e.target.value)
                }}
                type="text"
                className="form-control"
              />
              {/* { byLanguage && searchpagebylanguage() } */}
            </div>
         </div>      
        </div> 
         
        {/* {byGenre && searchpage()} */}
        <div className="col">
               <div className="form">
                  <div className="mb-3">
                  <label htmlFor="" className="label-control">
                Search by Genre : 
              </label>
              <input
                onChange={(e) => {
                  setByGenre(e.target.value)
                }}
                type="text"
                className="form-control"
              />  
             {/* { byGenre && searchpagebygenre() } */}
                 </div>
	        </div>
            <div className='row'>
                <div className='col'></div>
                <div className='col'>
                   <button onClick={byGenre.length >0 ? searchpagebygenre : (byTheatre.length > 0 ? searchpagebytheatre : searchpagebylanguage)} className="btn btn-primary">
                      Search
                   </button> 
                </div>
                <div className='col'></div>
            </div>
        </div>
        <div className='row'>
        {movielist.length > 0 ? movielist.map((movie) => <MovieList movie={movie}> </MovieList>) : "Hit Search  to see Movie List"}
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
        <br/>
    </div>
    <Footer/>
    </div>
  )
}

export default SearchPage
