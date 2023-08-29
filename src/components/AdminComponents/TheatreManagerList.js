import React from 'react';
import DetailsTheatreManager from "./DetailsTheatreManager.js"
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
const styles = {
    theatremanagername:
    {
        color: "Grey",
        fontWeight: 'bold',
    },
    rows:
    {   
        height: "40px",
    },
    buttons:
    {
        width: "90px",
        height: "70px",
       
    }
}

const TheatreManager = (props) => 
{
    const { thm } = props


    function details()
    {     
        console.log(thm.user_id)
        sessionStorage['currentTheatreManagerId'] = thm[0]
        console.log(thm.first_name)
        console.log(thm.email)
        
        
        ReactDOM.render(
            <BrowserRouter>
              <DetailsTheatreManager/>
            </BrowserRouter>,
            document.getElementById('middle')
          );  
    }
 
    return (
      <div>
            <div className="row"  style={styles.rows}>
                <div className="col">
                    <div id = "theatremanagername" className="theatremanagername" style={styles.theatremanagername}>
                        Name : {thm[1]}{" "}{thm[2]}<br/>
                        Address : {thm[3]}<br/>
                        Contact_no : {thm[4]}<br/>
                        Email : {thm[5]}<br/>
                    </div><br/>
                </div>
                <div className="col"></div>
                <div className="col">
                         <button type="button" class="btn btn-outline-dark" onClick={details} style = {styles.buttons}>
                         Details
                        </button>  
                </div><br/><hr/>  
                </div>           
            </div>
     

    )
}

export default TheatreManager