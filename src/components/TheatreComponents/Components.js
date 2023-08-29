import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import MiddleComponents from './MiddleComponents.js'
import ViewTheatre from './ViewTheatres.js'
import ViewTheatreReview from './ViewTheatreReview.js'
const styles = {
      middlelinks: {
           marginTop: "50px"
      }

}

const Components = () => {

    const viewtheatre = () => {       
      ReactDOM.render(
         <BrowserRouter><ViewTheatre/></BrowserRouter>,
         document.getElementById('middle')
       );
     }

     

    return (
        <div style = {styles.middlelinks}>  
              <div className="row">
                    <div className="col">
                        <div className="btn-group-vertical" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary" onClick={viewtheatre}>
                            <br/>View Registered Theatres<br/><br/>
                              </button>
                        </div>
                    </div>
                    
                    <div className="col"  id = "middle" style={{marginRight: 5 + 'em'}} >      
                        <MiddleComponents/><div className="col">
                    </div></div>
                  
                </div>
        </div>
       
      )
}

export default Components