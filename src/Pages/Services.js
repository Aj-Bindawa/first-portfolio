import { makeStyles } from '@material-ui/core'
import { Computer, PhotoLibrary } from '@material-ui/icons'
import React from 'react'
import Footer from '../Components/Footer'

const useStyles = makeStyles({
  servicesPage: {
    marginTop: '10vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '80vh',
  },

  beforeHeading: {
    width: '60px',
    height: '15px',
    borderStyle: 'solid',
    borderWidth: '5px 5px 0 5px',
    borderColor: 'rgba(27, 240, 204, 0.973)',
    margin: '20px auto 0 auto',
  },
  
  heading: {
  textTransform: 'uppercase',
  fontSize: '30px',
  fontFamily: 'poppins',
  margin: '10px',
  },
  
  afterHeading: {
  width: '60px',
  height: '15px',
  borderStyle: 'solid',
  borderWidth: '5px 0 0 0',
  borderColor: 'rgba(27, 240, 204, 0.973)',
  margin: '0',
  marginTop: '10px',
  },
  servicesWrapper: {
    width: '90%',
    backgroundColor: 'rgba(241, 243, 243, 1)',
    position : 'relative',
  },
  beforeServices: {
    padding: '0 70px 20px 0',
    borderStyle: 'solid',
    borderWidth: '2px 0 0 2px',
    borderColor: 'rgba(27, 240, 204, 0.973)',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  afterServices: {
    padding: '0 70px 20px 0',
    borderStyle: 'solid',
    borderWidth: '0 2px 2px 0',
    borderColor: 'rgba(27, 240, 204, 0.973)',
    position: 'absolute',
    bottom: '0',
    right: '0',
  },
  text1: {
    margin: '2px auto 5px 15px',
    color: 'rgba(129, 134, 134, 0.983)',
    textTransform: 'capitalize',
    letterSpacing: '2px',
    fontSize: '25px',
  },
  text2: {
    margin: '2px auto 2px 15px',
    letterSpacing: '2px',
    fontSize: '20px',
    color: 'rgba(42, 44, 44, 0.873)',
  },
  smallBorder: {
    borderStyle: 'solid',
    borderWidth: '0 0 0 2px',
    borderColor: 'rgba(27, 240, 204, 0.973)',
    marginRight: '10px',
  },
  services: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    '@media (min-width: 700px)' : {
      flexFlow: 'wrap',
   },
  },
  service: {
    width: '95%',
    margin: '10px 10px 10px 20px',
    '@media (min-width: 700px)' : {
      width: '45%',
   },
  },
  serviceIcon: {
    color: 'rgba(27, 240, 204, 0.573)',
    fontSize : '50px',
    marginBottom: '0',
  },
  serviceTitle: {
    margin: '0 2px 2px 2px',
  },
  serviceDesc: {
    marginTop: '2px',
  },
  dumb: {
    width: '100%',
    height: '100px',
  }
})

const Services = () => {
  const classes = useStyles()
  return (
    <div className={classes.servicesPage}>
      <span className={classes.beforeHeading}></span>
      <h3 className={classes.heading}>Services</h3>
      <span className={classes.afterHeading}></span>
      <div className={classes.servicesWrapper}>
        <span className={classes.beforeServices}></span>
        <h3 className={classes.text1}>What Actually I Do</h3>
        <h3 className={classes.text2}><span className={classes.smallBorder}></span>My Services</h3>
        <div className={classes.services}>
          <div className={classes.service}>
            <Computer className={classes.serviceIcon}/>
            <h3 className={classes.serviceTitle}>Web Development</h3>
            <p className={classes.serviceDesc}> I specialized in making responsive and functional websites that suites your desire.</p>
          </div>
          <div className={classes.service}>
            <PhotoLibrary className={classes.serviceIcon}/>
            <h3 className={classes.serviceTitle}>Graphics Design</h3>
            <p className={classes.serviceDesc}> I specialized in making high quality and proper resolution graphic designs.</p>
          </div>
        </div>
        <span className={classes.afterServices}></span>
      </div>
    </div>
  )
}

export default Services