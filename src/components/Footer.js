import { Link } from "react-router-dom"
const styles = {
    button: {
      width:120,
      height:70,
    },
  }
const Footer = () => {

    return (
        <div className="text-center " >
            <nav class="navbar navbar-dark bg-dark"  >
              
               <div className="row" >
                 <div className="col"></div>
                 <div className="col"></div>
                 <div className="col"></div>
                 <div className="col"></div>
                 <div className="col"> </div>
                 <div className="col"> </div>
                 <div className="col"> </div>
                 <div className="col"> </div>
                 <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
            <div className="col"> </div>
                 <div className="col">
                 <a href="/contactus" style={styles.button} class="btn btn-outline-info" role="button">Customer Care</a>
                 </div>

                 <div className="col"></div>
                 <div className="col"></div>
                 <div className="col">
                 <a href="/sitefeedback" style={styles.button} class="btn btn-outline-info" role="button">FeedBack</a>
                 </div>
                 
                 <div className="col"></div>
                 <div className="col"></div>
                 <div className="col">
                 <a href="/contactus" style={styles.button} class="btn btn-outline-info" role="button">About Us</a>
                 </div>

               </div>
            </nav>
         </div>
    )
}

export default Footer