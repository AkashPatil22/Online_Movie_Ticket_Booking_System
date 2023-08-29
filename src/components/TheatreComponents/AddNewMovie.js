import { useState, useEffect } from "react"
import axios from "axios"
import { URL } from "../../config"
import { toast } from "react-toastify"
import ViewTheatre from './ViewTheatres.js'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
const styles = {
    header:
    {
        color: "Green",
        marginLeft: 10 + 'em'
    },
    middlelinks: {
      width: "800px",
      height: "500px"
}
}


const AddNewMovie = () =>
{
    const screenid = sessionStorage['currentscreenid']
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [certification, setcertification] = useState('')
    const [releasedate, setreleasedate] = useState('')
    const [status, setstatus] = useState('')
    const [language, setlanguage] = useState('')
    const [genre, setgenre] = useState('')
    const [format, setformat] = useState('')
    const [banner, setbanner] = useState('')
    
    const addnewmovie = () =>
    {
       if(name.length == 0)
            toast.warning("enter name")
        else if(description.length == 0)
            toast.warning("enter description")
        else if(certification.length == 0)
            toast.warning("enter certification")
        else if(releasedate.length == 0)
            toast.warning("enter releasedate")
        else if(status.length == 0)
            toast.warning("enter status")
        else if(language.length == 0)
            toast.warning("enter language")
        else if(genre.length == 0)
            toast.warning("enter genre")
        else if(format.length == 0)
            toast.warning("enter format")
        else if(banner.length == 0)
            toast.warning("enter banner")
        else{
            const body = {
                name,
                description,
                certification,
                releasedate,
                status,
                language,
                genre,
                format,
                banner
            }
        
        const url = `${URL}/manager/addnewmoviedetails/${screenid}`
        axios.post(url, body).then((response) => {
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('New Movie Added')
          ReactDOM.render(
            <BrowserRouter>
              <ViewTheatre/>
            </BrowserRouter>,
            document.getElementById('middle')
          ); 

        }
      }).then((err)=>console.log(err));

    }
    }



    return(

    <div> 
        <div className="row">
          <div className="col">
            <div className="form" style={styles.middlelinks}>
                <div className="mb-3">
                  <h3 style={styles.header}>Add New Movie</h3>
                  <label htmlFor="" className="label-control">
                      Movie Name
                  </label>
                  <input
                   onChange={(e) => {
                      setname(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>
           
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                    Description
                  </label>
                  <input
                   onChange={(e) => {
                    setdescription(e.target.value)
                  }}
                  type="text"
                    className="form-control"
                  />
              </div>
  
              <div className="mb-3">
                  <label htmlFor="" className="label-control">
                  Certification
                  </label>
                  <input
                    onChange={(e) => {
                        setcertification(e.target.value)
                      }}
                      type="text"
                    className="form-control"
                  />
              </div>
  
              <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    ReleaseDate
                  </label>
                  <input
                    onChange={(e) => {
                        setreleasedate(e.target.value)
                      }}
                      type="text"
                    className="form-control"
                  />
              </div>
  
              <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Status
                  </label>
                  <input
                    onChange={(e) => {
                        setstatus(e.target.value)
                      }}
                    type="text"
                    className="form-control"
                  />
              </div>
              
              <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Language
                  </label>
                  <input
                    onChange={(e) => {
                      setlanguage(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                  />
              </div>
  
              <div className="mb-3">
                  <label htmlFor="" className="label-control">
                  Genre
                  </label>
                  <input
                    onChange={(e) => {
                      setgenre(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                  />
              </div>
  
              <div className="mb-3">
                  <label htmlFor="" className="label-control">
                  Format
                  </label>
                  <input
                    onChange={(e) => {
                      setformat(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                  />
              </div>
  
              <div className="mb-3">
                  <label htmlFor="" className="label-control">
                 Banner URL
                  </label>
                  <input
                    onChange={(e) => {
                      setbanner(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                  />
              </div>
                
                <div className="row">
                        <button onClick={addnewmovie} className="btn btn-primary">
                       Add Movie
                        </button>
                   
                    <div className="col"></div>
                </div> 
              </div>
            </div>
            </div>
         
            </div> 




    )

}

export default AddNewMovie