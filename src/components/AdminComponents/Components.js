import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router'
import AddTheatre from '../../components/AdminComponents/AddTheatre'
import ViewTheatre from '../../components/AdminComponents/ViewTheatre'
import ViewFeedback from '../../components/AdminComponents/ViewFeedback'
import ViewTheatreManager from '../../components/AdminComponents/ViewTheatreManager'
import MiddleComponents from '../../components/AdminComponents/MiddleComponents'


const styles = {
      middlelinks: {
            width: "100px",
            height: "100px"
      }

}

const Components = () => {
    const { user_id, first_name, last_name, role } = sessionStorage
    const navigate = useNavigate()

    const addtheatre = () => {
         // navigate("/addtheatre")
         ReactDOM.render(
            <BrowserRouter><AddTheatre/></BrowserRouter>,
            document.getElementById('middle')
          );
    }
    const viewtheatre = () => {
      //navigate("/viewtheatre")
      ReactDOM.render(
        <BrowserRouter><ViewTheatre/></BrowserRouter>,
        document.getElementById('middle')
      );
}
const viewfeedback = () => {
      //navigate("/viewfeedback")
      ReactDOM.render(
        <BrowserRouter><ViewFeedback/></BrowserRouter>,
        document.getElementById('middle')
      );
}
const viewtheatremanager = () => {
      //navigate("/viewtheatremanager")
      ReactDOM.render(
        <BrowserRouter><ViewTheatreManager/></BrowserRouter>,
        document.getElementById('middle')
      );
}


    return (
        <div>  
              <div className="row">
                    <div className="col">
                        <div className="btn-group-vertical" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary" onClick={addtheatre}>
                            <br/>Add New Theatre<br/><br/>
                            </button>
                            <br/>
                            <button type="button" className="btn btn-secondary" onClick={viewtheatre}>
                            <br/> View All Theatres <br/><br/> 
                            </button>
                            <br/>
                            <button type="button" className="btn btn-secondary" onClick={viewtheatremanager}>
                            <br/> View Theatre Managers<br/><br/>
                            </button>
                            <br/>
                            <button type="button" className="btn btn-secondary" onClick={viewfeedback}>
                            <br/> View All Feebacks <br/><br/>
                            </button>
                            <br/>
                        </div>
                    </div>
                    
                    <div className="col"  id = "middle" style={{marginRight: 10 + 'em'}} >      
                        <MiddleComponents/><div className="col">
                    </div></div>
                  
                </div>
              </div>
       
      )
}

export default Components