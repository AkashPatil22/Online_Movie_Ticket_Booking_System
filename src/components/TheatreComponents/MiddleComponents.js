import { useNavigate } from 'react-router'


const styles = {
      middlelinks: {
             width: "900px",
             height: "700px"
       },
 
       cardtitle:
       {
          color: "Green",
          fontFamily: "Arial",
          padding: "40px",
          textAlign: "center",
       },
       
       cardtext:
       {
          color: "black",
          fontFamily: "Arial",
          padding: "40px",
          textAlign: "center",
       }
 
 }



const MiddleComponents = () => {
      const { user_id, first_name, last_name, role } = sessionStorage
      const navigate = useNavigate()
  
      return (
          <div>  
               <div className="card" style = {styles.middlelinks}>
                    <div className="card-body">
                    <h1 className="card-title" style = {styles.cardtitle}>
                          Welcome {first_name}</h1>
                    <h2 className="card-text" style = {styles.cardtext}>Click on the left links to perform tasks</h2>
                    
                    </div>
               </div> 
          </div>
        )
  }
  
  export default MiddleComponents