import CPDetails from './CPDetails.js'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
 
 const styles = {
    name:
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
        height: "100px",
    }
 }
 
 
 const CPList  = (props) =>
 {
    const { cp } = props
    
    const details = () => 
    {
        sessionStorage['currentcp_userid'] = cp[0]
        sessionStorage['currentcpfirstname'] = cp[1]
        sessionStorage['currentcpsecondname'] = cp[2]
        sessionStorage['currentcpaddress'] = cp[3]
        sessionStorage['currentcpcontact'] = cp[4]
        sessionStorage['currentcpemail'] = cp[5]
        console.log(cp[0])
        ReactDOM.render(
            <BrowserRouter><CPDetails/></BrowserRouter>,
            document.getElementById('middle')
          );
    }

  
            return(
 
                <div>
                    <div className="row" >
                        <div className="col" style={styles.rows}>
                            <div id = "name" className="name" style={styles.name}>
                                Name : {cp[1]} {cp[2]}<br/>
                            </div>
                        </div> 
                        <div className="col">
                            <button type="button" class="btn btn-outline-dark" onClick={details} style = {styles.buttons}>
                            View Details
                            </button> 

                            {/* <button type="button" class="btn btn-outline-dark" onClick={chairprice} style = {styles.buttons}>
                            Chair Price
                            </button> */}
                        </div>
                    </div><hr/>
                </div> 
            )


 }


 export default CPList