const styles = {
    title: {
      fontSize: '1.3em',
      fontWeight: 'bold',
    },
    subtitle: {
      color: 'green',
    }
  }
  
  const TheatreReviewList = (props) => {
    const { review } = props
    return (
      <div>
        <div className="row">
          <div className="col">
            <div style={styles.subtitle}>
              {review}
            </div>
          </div>
        </div>
        <br/>
        <hr />
      </div>
    )
  }
  
  export default TheatreReviewList
  