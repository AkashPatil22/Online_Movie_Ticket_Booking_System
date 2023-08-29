
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
  
  const CityList = (props) => {
    
    const navigate=useNavigate();

    const { city } = props
    function setCity()
    {
        console.log(city)
        sessionStorage['city'] = city
        navigate('/')
    }
    return (
      <div>
              <button onClick={
                  setCity
               }
              >{city}</button>
      </div>
    )
  }
  
  export default CityList
  