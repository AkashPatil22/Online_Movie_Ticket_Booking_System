import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import UpdateTheatre from '../../components/AdminComponents/UpdateTheatre'
const styles = {
    theatrename:
    {
        color: "Grey",
        textAlign: "center",
        fontWeight: 'bold',
    },
    buttons:
    {
        width: "90px",
        height: "70px",
       
    },
    rows:
    {   
        height: "60px",
    }
}

const Theatre = (props) => 
{
    const { th } = props
    function setTheatreId()
    {     
       
        console.log(th[0])
        sessionStorage['currentTheatreid'] = th[0]
        sessionStorage['name'] = th[1]
        sessionStorage['address'] = th[2]
        sessionStorage['city'] = th[3]
       

        ReactDOM.render(
            <BrowserRouter>
              <UpdateTheatre/>
            </BrowserRouter>,
            document.getElementById('middle')
          );   
    }

    return (
      <div>
            <div className="row" >
                <div className="col" style={styles.rows}>
                    <div id = "theatrename" className="theatrename" style={styles.theatrename}>{th[1]}<br/>{th[2]}, {th[3]}</div>
                </div> 
                
                <div className="col"></div>
                <button type="button" class="btn btn-outline-dark" onClick={setTheatreId} style = {styles.buttons}>
                    Update
                    </button>
                
            </div> <hr/>
      </div>

    )
}

export default Theatre