import {useNavigate } from "react-router";
const styles = {
    title: {
      fontSize: '1.3em',
      fontWeight: 'bold',
    },
    subtitle: {
      color: 'darkgray',
    },
    movie:{
        height:"150px",
        width:"150px"
    }
  }
  
  const UpcomingMovies = (props) => {
    
    const navigate=useNavigate();

    const { movie } = props
    function setMovieId()
    {
        console.log(movie[0])
        sessionStorage['currentMovieid'] = movie[0]
        navigate('/TheatrePage')
    }
    return (
      
       
                      <div className="col">
            <div style={styles.subtitle}>
              <button onClick={
                  setMovieId
               }
              ><img src = {movie[1]} alt="image" style = {styles.movie}/></button>
            </div>
    
     </div>
    )
  }
  
  export default UpcomingMovies
  