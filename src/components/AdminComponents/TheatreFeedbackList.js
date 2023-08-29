import React from 'react';

const styles = {
    email:
    {
        color: "Grey",
        textAlign: "center",
        fontWeight: 'bold',
    },
    rows:
    {   
        height: "50px",
    }
}

const Feedback = (props) => 
{
    const { thf } = props

    function setTheatreId()
    {     
        console.log(thf.email)
        console.log(thf.feedback)
    }

    return (
      <div>
            <div className="row" >
                <div className="col" style={styles.rows}>
                    <div id = "email" className="email" style={styles.email}>User : { thf.email }<br/>Feedback : { thf.feedback }</div>
                </div> 
            </div> <hr/>
      </div>

    )
}

export default Feedback