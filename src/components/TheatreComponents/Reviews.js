import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import UpdateTheatre from './UpdateTheatre.js'

const styles = {
    name:
    {
        color: "Grey",
        textAlign: "center",
        fontWeight: 'bold',
    }
}

const Reviews = (props) =>
{
    const { r } = props
return (
    <div>
          <div className="row" >
              <div className="col" style={styles.rows}>
                  <div id = "name" className="name" style={styles.name}>
                  User : {r[0]}  {r[1]}<br/>
                  Review : {r[2]}<br/>
                  </div>
              </div> 
             
          </div> <hr/>
    </div>

  )
}

export default Reviews