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
  
  const TheatreList = (props) => {
    const { theatre } = props
    const navigate = useNavigate()
    function setTheatreId()
    {
       // console.log(movie[0])
        sessionStorage['currenttheatreid'] = theatre[0]
        sessionStorage['currenttheatrename'] = theatre[1]
        sessionStorage['currentscreenid'] = theatre[2]
      	sessionStorage['currenttimeslot'] = theatre[3]
        console.log(theatre[0])
        console.log(theatre[1])
        console.log(theatre[2])
        console.log(theatre[3])   
        navigate('/chairs')
    }

    function totheatrereviewList(){
      navigate('/viewtheatrereviewlist')
    }
    return (
      <div>
        <div className="row">
           <div className="col">{theatre[1]}</div>

              <div className="col">
              <button onClick={
                  setTheatreId
               }
              >{theatre[3]}</button>
              </div>
              <div className="col">
                <button onClick={ totheatrereviewList}>View Reviews</button>
              </div>
        </div>
           <br/>
           <hr />
      </div>
    )
  }
  
  export default TheatreList
  