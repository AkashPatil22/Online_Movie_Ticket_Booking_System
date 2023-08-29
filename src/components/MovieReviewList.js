const styles = {
    title: {
      fontSize: '1.3em',
      fontWeight: 'bold',
    },
    subtitle: {
      color: 'green',
    }
  }
  
  const MovieReviewList = (props) => {
    const { review } = props
    return (
      <div>
        <div className="row">
          <div className="col">
            <div style={styles.subtitle}>
              {review[0]}
            </div>
          </div>

          <div className="col">
            <div style={styles.subtitle}>
              {review[1]}
            </div>
          </div>
          
          <div className="col">
            <div style={styles.subtitle}>
              {review[2]}
            </div>
          </div>

        </div>
        <br/>
        <hr />
      </div>
    )
  }
  
  export default MovieReviewList
  