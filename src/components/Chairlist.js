import { useState } from "react"
import axios from 'axios'

const styles = {
    title: {
      fontSize: '1.3em',
      fontWeight: 'bold',
    },
    subtitle: {
      color: 'darkgray',
    }
  }
  
  const Chairlist = (props) => {
    const { chair } = props
    const movieid = sessionStorage['currentMovieid']
    const theaterid = sessionStorage['currenttheatreid']
    const userid = sessionStorage['user_id']
    const screenid = sessionStorage['currentscreenid']
    var chairstatusid = []
    var sum= 0
    var firsttime = 0
    var price=chair[2]
    
    function setChairId()
    {
      if(firsttime==0)
      {
        firsttime=1
        var selectedchair = JSON.parse(localStorage.getItem('selectedchair') || "[]")
        var xyz=chair[0]
    
        selectedchair.push(xyz)
        localStorage.setItem('selectedchair',JSON.stringify(selectedchair))
        
        var selectedchairname = JSON.parse(localStorage.getItem('selectedchairname') || "[]")
        var name=chair[4]
        selectedchairname.push(name)
        localStorage.setItem('selectedchairname',JSON.stringify(selectedchairname))
        
        selectedchair = JSON.parse(localStorage.getItem('selectedchair'))
        chairstatusid = JSON.parse(localStorage.getItem('selectedchair'))
        console.log(chairstatusid)
        console.log(selectedchair)
        getPrice()
      }
        else{
          firsttime=0
          removeChairId()
        }
   }

    function removeChairId()
    {
      var selectedchair = JSON.parse(localStorage.getItem('selectedchair')) 
      localStorage.removeItem('selectedchair')
      var selectedchairname = JSON.parse(localStorage.getItem('selectedchairname')) 
      localStorage.removeItem('selectedchairname')
      //getPrice() 
      sessionStorage['sumofprice'] = sum
      console.log(sum)
    }

    function getPrice() {
      
      const body = {
        theaterid,screenid,userid,
        chairstatusid
  
      }
      axios.post(`http://localhost:8090/user/Ticket/${movieid}`, body).then((response) => {
          const result = response.data
          console.log(result)
          if (result['status'] == 'success') {
              sessionStorage['sumofprice'] = result.data
              console.log(result.data)
          }
          else {
              console.log("error in price");
          }
        }).then((err)=>console.log(err));
  }
  

    return (
      
        <div className="row">
          
              <div className="col">
              <div style={styles.subtitle}>
             
               <div class="btn-group-toggle" data-toggle="buttons">
                
                <label class="btn btn-secondary active">
                 {chair[5] == "booked" ? <input type="checkbox" checked disabled /> : <input type="checkbox" id="chairid"
                unchecked autocomplete="off" 
                onClick={
                 setChairId
                 }/> }
                 {chair[4]}
                </label>
                </div>
                   <div className="col">Rs. {chair[2]}</div>
            </div>
          </div>
        </div>
        
    )
  }

export default Chairlist