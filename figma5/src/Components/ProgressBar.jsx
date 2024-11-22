import {PropTypes} from 'prop-types'

const ProgressBar = ({ bgcolor= '#000', completed =0 }) => {
  const containerStyles = {
    height: 4,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    position: 'relative',
  };

  const progressBall ={
    width:10,
    height:10,
    borderRadius:'50%',
    backgroundColor: '#084482',
    position: 'absolute',
    right: -1,
    top: 0,
  }


  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}><span style={progressBall}></span></span>
      </div>
    </div>
  );
};


  ProgressBar.propTypes = {
    bgcolor: PropTypes.string.isRequired,
    completed: PropTypes.number.isRequired,
  };
  


export default ProgressBar;



