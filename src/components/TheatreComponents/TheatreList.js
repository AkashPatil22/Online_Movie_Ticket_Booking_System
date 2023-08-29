import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import UpdateTheatre from './UpdateTheatre.js'
import ScreenDetailsRegisteredTheatre from './ScreenDetailsRegisteredTheatre.js'
import CounterPersonDetailsRegisteredTheatre from './CounterPersonDetailsRegisteredTheatre.js'
import ViewTheatreReview from './ViewTheatreReview.js';

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
        height: "90px",
        marginLeft: "20px",
    },
    rows:
    {   
        height: "80px",
    }
}

const Theatre = (props) => 
{
    const { th } = props
    function setTheatreId()
    {     
        console.log(th[1])
        console.log(th[2])
        console.log(th[3])
        console.log(th[4])
        sessionStorage['currentTheatreid'] = th[0]
        sessionStorage['theatrename'] = th[1]
        sessionStorage['theatreaddress'] = th[2]
        sessionStorage['theatrecity'] = th[3]
        sessionStorage['theatremanagerid'] = th[7]
        sessionStorage['theatregst'] = th[8]
        

        ReactDOM.render(
            <BrowserRouter>
              <UpdateTheatre/>
            </BrowserRouter>,
            document.getElementById('middle')
          );   
    }

    function screendetails()
    {     
        console.log(th[1])
        console.log(th[2])
        console.log(th[3])
        console.log(th[4])
        sessionStorage['currentTheatreid'] = th[0]
        

        ReactDOM.render(
            <BrowserRouter>
              <ScreenDetailsRegisteredTheatre/>
            </BrowserRouter>,
            document.getElementById('middle')
          );   
    }


    function counterdetails()
    {     
        console.log(th[1])
        console.log(th[2])
        console.log(th[3])
        console.log(th[4])
        sessionStorage['currentTheatreid'] = th[0]
        

        ReactDOM.render(
            <BrowserRouter>
              <CounterPersonDetailsRegisteredTheatre/>
            </BrowserRouter>,
            document.getElementById('middle')
          );   
    }

    function theatrereview()
    {     
        console.log(th[0])
        console.log(th[1])
        console.log(th[2])
        console.log(th[3])       
        sessionStorage['currentTheatreidforreview'] = th[0]
        ReactDOM.render(
            <BrowserRouter>
              <ViewTheatreReview/>
            </BrowserRouter>,
            document.getElementById('middle')
          );   
    }


    return (
      <div>
            <div className="row" >
                <div className="col" style={styles.rows}>
                    <div id = "theatrename" className="theatrename" style={styles.theatrename}>
                    {th[1]}<br/>
                    {th[2]}, {th[3]}<br/>
                  
                    </div>
                </div> 
                <div className="col">
                   
                     <button type="button" class="btn btn-outline-dark" onClick={screendetails} style = {styles.buttons}>
                       Sreen Details
                     </button> 
                   
                     <button type="button" class="btn btn-outline-dark" onClick={counterdetails} style = {styles.buttons}>
                      Counter Details
                     </button> 

                    <button type="button" class="btn btn-outline-dark" onClick={setTheatreId} style = {styles.buttons}>
                    Update
                    </button>

                    <button type="button" class="btn btn-outline-dark" onClick={theatrereview} style = {styles.buttons}>
                    Theatre Reviews
                    </button>
                  
                </div>   
            </div> <hr/>
      </div>

    )
}

export default Theatre