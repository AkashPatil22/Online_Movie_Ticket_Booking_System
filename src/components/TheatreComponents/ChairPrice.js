import UpdateChairPrice from './UpdateChairPrice.js'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';

 const styles = {
    chairname:
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
 

const ChairPrice = (props) =>
{
    const { cp } = props

    const updateprice = () =>
    {
    
        sessionStorage['chairname'] = cp[0]
        ReactDOM.render(
            <BrowserRouter><UpdateChairPrice/></BrowserRouter>,
            document.getElementById('middle')
          );

    }

    

    return(
                <div>
                    <div className="row" >
                        <div className="col" style={styles.rows}>
                            <div id = "chairname" className="chairname" style={styles.chairname}>
                                {cp[0]}<br/>
                                Price : {cp[1]}<br/>
                            </div>
                        </div>                     
                        <div className="col"></div>
                        <div className="col">
                            <button type="button" class="btn btn-outline-dark" onClick={updateprice} style = {styles.buttons}>
                            Update Price </button>  
                        </div>
                       
                    </div>
                    <hr/>
                </div> 


    )

}

export default ChairPrice