import HeaderOthers from "../../components/HeaderOthers";

const TicketPage = () => {
    
    var date = new Date();
    var currentdate = date.getDay + "-" + date.getMonth + "-" + date.getFullYear ;
    const selectedchairname = localStorage.getItem('selectedchairname')
    const sumofprice= sessionStorage['sumofprice']   
    const movieid = sessionStorage['currentMovieid']
    const theatreid = sessionStorage['currenttheatreid']
    const currentscreenid = sessionStorage['currentscreenid']
    const currentmoviename = sessionStorage['currentMovieName']
    const language =sessionStorage['currentlanguage']
    const format = sessionStorage['currentformat']
    const theatrename =sessionStorage['currenttheatrename']
    const timeslot = sessionStorage['currenttimeslot']
    const paymentMode=sessionStorage['paymentMode']
    const firstname=sessionStorage['first_name']
    const lastname=sessionStorage['last_name']
  return(
      <div>
          <div>
          <HeaderOthers></HeaderOthers>
          </div>
          <div>
          <div className="row">
              <div className="col"></div>
              <div className="col">
                  <table border="1">
                  <tr><td><h3>User Name : {firstname}  {lastname}</h3></td></tr>
                      <tr><td><h3>Movie Name : {currentmoviename}</h3></td></tr>
                      <tr><td> <h3>Language : {language}</h3></td></tr>
                      <tr><td> <h3>Format : {format}</h3></td></tr>
                      <tr><td><h3>Theatre : {theatrename}</h3></td></tr>
                      {/* <tr><td><h3>Date : {currentdate}</h3></td></tr> */}
                      <tr><td> <h3>Show Time : {timeslot}</h3></td></tr>
                      <tr><td>  <h3>Seats : {selectedchairname}</h3> </td></tr>
                      <tr><td>  <h3>Price : Rs. {sumofprice}</h3>  </td></tr>
                      <tr><td>   <h3> Payment Mode : {paymentMode}</h3></td></tr>
                   
                      
                    
                     </table>
                     </div>
              <div className="col"></div>
          </div>
      </div>
      </div>
  )


}
export default TicketPage