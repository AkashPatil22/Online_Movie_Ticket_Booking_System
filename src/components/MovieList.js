import {useNavigate } from "react-router";
const styles = {
    title: {
      fontSize: '1.3em',
      fontWeight: 'bold',
    },
    subtitle: {
      color: 'darkgray',
    }
  }
  
  const MovieList = (props) => {
    
    const navigate=useNavigate();

    const { movie } = props
    function setMovieId()
    {
        console.log(movie[0])
        sessionStorage['currentMovieName'] = movie[1]
        sessionStorage['currentMovieid'] = movie[0]
        sessionStorage['currentlanguage'] = movie[6]
        sessionStorage['currentformat'] = movie[8]
        navigate('/TheatrePage')
    }

    function toMovieReviewList()
    {
      navigate('/moviereview')
    }
    return (
      <div>
        <div className="row">
          <div className="col">
               <div style={styles.subtitle}>
                 <button onClick={
                  setMovieId
                  }
                 >{movie[1]}</button>
               </div>
               </div>
               <div className="col">
               <div style={styles.subtitle}>
                <button onClick={
                  toMovieReviewList
                 }
                >Movie Reviews</button>
               </div>
               </div>
         
        </div>
        <br/>
        <hr />
      </div>
    )
  }
  
  export default MovieList
  