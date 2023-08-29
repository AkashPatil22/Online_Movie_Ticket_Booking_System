import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import AddNewMovie from './AddNewMovie.js'
import { URL } from '../../config'

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

 const MovieDetailsList = () =>
 {
     const screenid = sessionStorage['currentscreenid']
     const [movielist, setmovielist] = useState([])
     
     const moviedetailslist = () => 
     {
        const url = `${URL}/manager/viewmoviedetails/${screenid}`
        axios.get(url).then((response) => 
                {
                        const result = response.data
                        //console.log(result)
                        if (result['status'] == 'success') 
                        {
                            //toast.success('movie details retrieved')
                            setmovielist(result['data'])
                            //console.log(movielist)
                            //console.log(result['data'])
                        }
                }).then((err)=>console.log(err));
     }


     useEffect(() => {
        moviedetailslist()
        console.log(movielist)
        console.log('getting called')
    }, [])


    const addnewmovie = () => {
        ReactDOM.render(
            <BrowserRouter><AddNewMovie/></BrowserRouter>,
            document.getElementById('middle')
          );
    }




    return (
        <div>
            <div className="row" >
                
                    {/* <div id = "name" className="name" style={styles.name}>
                        Movie : {movielist[0][0]}<br/><br/>
                        Description : {movielist[1]}<br/><br/>
                        Certification : {movielist[2]}<br/><br/>
                        ReleaseDate :{movielist[3]}<br/><br/>
                        Status : {movielist[4]}<br/><br/>
                        Language : {movielist[5]}<br/><br/>
                        Genre : {movielist[6]}<br/><br/>
                        Format : {movielist[7]}<br/><br/>
                        Banner URL: {movielist[8]}<br/><br/>
                    </div> */}
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
                        Banner URL: {movielist[0][8]}<br/><br/>
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
                        Banner URL: {movielist[8]}<br/><br/>
                        </div>)}

                    </div>
               
        
            </div> <hr/>
            <button type="button" class="btn btn-outline-dark" onClick={addnewmovie} style = {styles.buttons}>
                    Add New Movie 
                </button> 
        </div>

   







        )


















}

export default MovieDetailsList