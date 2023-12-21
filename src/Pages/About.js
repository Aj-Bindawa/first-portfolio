import { makeStyles } from '@material-ui/core'
import { LocationOn, WorkRounded } from '@material-ui/icons'
import React from 'react'
import me from '../Assets/Images/me.jpg'

const useStyles = makeStyles({
  aboutPage: {
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

aboutWrapper: {
  width: '100%',
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  '@media (min-width: 700px)' : {
    flexDirection: 'row'
},
},
aboutContent: {
  width: '95%',
  margin: '20px',
  '@media (min-width: 700px)' : {
   width: '50%',
},
'@media (min-width: 1400px)' : {
  width: '60%',
},
},
aboutName: {
  margin: '2px',
},
aboutLocation: {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
},
locationName: {
  margin: '2px',
},
aboutIcon: {
  color: 'rgba(103, 111, 230, 0.973)',
},
aboutText: {
  margin: '10px 5px',
},
aboutImageCont: {
  width: '100%',
  //height: '400px',
  backgroundColor: '#ddd',
  '@media (min-width: 700px)' : {
   width: '35%',
   margin: '20px',
   height: '300px',
},
'@media (min-width: 1400px)' : {
  width: '25%',
},
},
aboutImage: {
  width: '100%',
  height: '100%',
},

details: {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  '@media (min-width: 700px)' : {
    flexDirection: 'row',
 },
},
detail: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '5px',
},
workDescription: {
  marginLeft: '5px',
},
h3: {
  margin: '0',
  fontSize: '15px',
},
p: {
  margin: '0',
  fontSize: '12px',
},
detailIconCont: {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(27, 240, 204, 0.973)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
},
detailIcon: {
  color: '#fff',
},
})

const About = () => {
  const classes = useStyles()
  return (
    <div className={classes.aboutPage}>
      <span className={classes.beforeHeading}></span>
      <h3 className={classes.heading}>About Me</h3>
      <span className={classes.afterHeading}></span>
      <div className={classes.aboutWrapper}>
        <div className={classes.aboutContent}>
        <h3 className={classes.aboutName}>Auwal Jabir (Aj Bindawa)</h3>
        <span className={classes.aboutLocation}>
            <LocationOn className={classes.aboutIcon}/> <p className={classes.locationName}>Bindawa, Katsina State, Nigeria</p>
        </span>
        <p className={classes.aboutText}>
        I am Auwal Jabir (Aj Bindawa), a fullstack web developer. I specialized in making responsive UI designs, functional websites, and also graphic designs. I lives in Bindawa, Bindawa Local Government, Katsina State, Nigeria.
        </p>
        <div className={classes.details}>
          <div className={classes.detail}>
            <div className={classes.detailIconCont}>
              <WorkRounded className={classes.detailIcon} />
            </div>
            <div className={classes.workDescription}>
              <h3 className={classes.h3}>4+ Years Job</h3>
              <p className={classes.p}>Experience</p>
            </div>
          </div>
          <div className={classes.detail}>
            <div className={classes.detailIconCont}>
              <WorkRounded className={classes.detailIcon} />
            </div>
            <div className={classes.workDescription}>
              <h3 className={classes.h3}>25+ Projects</h3>
              <p className={classes.p}>Completed</p>
            </div>
          </div>
          <div className={classes.detail}>
            <div className={classes.detailIconCont}>
              <WorkRounded className={classes.detailIcon} />
            </div>
            <div className={classes.workDescription}>
              <h3 className={classes.h3}>34+ meetings</h3>
              <p className={classes.p}>Successful</p>
            </div>
          </div>
        </div>
        </div>
        <div className={classes.aboutImageCont}>
          <img src={me} alt='Aj Bindawa' className={classes.aboutImage}/>
        </div>
      </div>
    </div>
  )
}

export default About