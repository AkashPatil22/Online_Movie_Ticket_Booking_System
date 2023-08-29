import MovieDetailsList from './MovieDetailsList.js'
import ChairPriceList from './ChairPriceList.js'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
 
 const styles = {
    screenname:
    {
        color: "Grey",
        textAlign: "center",
        fontWeight: 'bold',
    },
    buttons:
    {
        width: "90px",
        height: "70px",
        marginLeft: "20px",
    },
    rows:
    {   
        height: "80px",
    }
 }
 
 
 const ScreenList  = (props) =>
 {
    const { sc } = props
    
    const moviedetails = () => 
    {
        sessionStorage['currentscreenid'] = sc[0]
        console.log(sc[0])
        ReactDOM.render(
            <BrowserRouter><MovieDetailsList/></BrowserRouter>,
            document.getElementById('middle')
          );
    }

    const chairprice = () => 
    {
        sessionStorage['currentscreenid'] = sc[0]
        console.log(sc[0])
        ReactDOM.render(
            <BrowserRouter><ChairPriceList/></BrowserRouter>,
            document.getElementById('middle')
          );
    }

  
            return(
 
                <div>
                    <div className="row" >
                        <div className="col" style={styles.rows}>
                            <div id = "screenname" className="screenname" style={styles.screenname}>
                                {sc[1]}<br/>
                                Time Slot : {sc[2]}<br/>
                            </div>
                        </div> 
                        <div className="col">
                            <button type="button" class="btn btn-outline-dark" onClick={moviedetails} style = {styles.buttons}>
                            Movie Details
                            </button> 
                            <button type="button" class="btn btn-outline-dark" onClick={chairprice} style = {styles.buttons}>
                            Chair Price
                            </button>
                        </div>
                    </div>
                </div> 
            )


 }


 export default ScreenList