import { Button, makeStyles } from '@material-ui/core'
import { CloudDownload } from '@material-ui/icons'
import React from 'react'
import chrome from '../Assets/Images/chrome.png'
import uduslogo from '../Assets/Images/uduslogo.jpg'
import ksteblogo from '../Assets/Images/ksteblogo.jpg'

const useStyles = makeStyles({
  resumePage: {
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
  margin: '0',
  },
  subheading: {
    textTransform: 'uppercase',
    fontSize: '15px',
    fontFamily: 'poppins',
    margin: '2px 0 0 0',
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
  text1: {
    margin: '2px auto 5px 15px',
    color: 'rgba(129, 134, 134, 0.983)',
    textTransform: 'capitalize',
    letterSpacing: '2px',
    fontSize: '25px',
  },
  text2: {
    margin: '2px auto 2px 5px',
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
  workHistory: {
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: '20px',
  },
  button: {
    margin: '20px',
    backgroundColor: 'rgba(27, 240, 204, 0.973)',
    borderRadius: '15px',
    border: 'none',
    color: '#fff',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#ddd',
      color: 'rgba(27, 240, 204, 0.973)',
  },
  '&:active': {
    backgroundColor: '#ddd',
    color: 'rgba(27, 240, 204, 0.973)',
},
  },
  downloadBtn: {
    margin: '0 5px 0 0',
  },
  histories: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    '@media (min-width: 700px)' : {
      flexFlow: 'wrap',
   },
  },
  history: {
    width: '97%',
    display: 'flex',
    margin: '20px 5px',
    '@media (min-width: 700px)' : {
      width: '46%',
   },
  },
  historyImg: {
    width: '20%',
  },
  img: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
  historyContent: {
    width: '75%',
  },
  historyDate: {
    margin: '5px',
    fontSize: '15px',
  },
  historyTitle: {
    margin: '5px',
    fontSize: '22px',
    color: 'rgba(129, 134, 134, 0.993)',
  },
  historyDesc: {
    margin: '2px',
    fontSize: '16px',
  },

  skillsWrapper: {
    width: '90%',
    backgroundColor: 'rgba(241, 243, 243, 1)',
    position : 'relative',
    marginTop: '30px',
  },
  beforeSkills: {
    padding: '0 70px 20px 0',
    borderStyle: 'solid',
    borderWidth: '2px 0 0 2px',
    borderColor: 'rgba(27, 240, 204, 0.973)',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  afterSkills: {
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
  skills: {
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  skill: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '10px 10px 10px 20px',
  },
  skillDetails: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  skillName: {
    margin: '0',
    fontSize: '13px',
  },
  skillrate: {
    margin: '0',
  },
  rateCont: {
    width: '100%',
    height: '20px',
    border: '2px solid #ddd',
    borderRadius: '10px',
  },
  rate: {
    width: '95%',
    height: '100%',
    backgroundColor: 'rgba(27, 240, 204, 0.973)',
    borderRadius: '10px 0 0 10px',
  },
  rate2: {
    width: '95%',
    height: '100%',
    backgroundColor: 'rgba(27, 240, 204, 0.973)',
    borderRadius: '10px 0 0 10px',
  },
  rate3: {
    width: '90%',
    height: '100%',
    backgroundColor: 'rgba(27, 240, 204, 0.973)',
    borderRadius: '10px 0 0 10px',
  },
  rate4: {
    width: '65%',
    height: '100%',
    backgroundColor: 'rgba(27, 240, 204, 0.973)',
    borderRadius: '10px 0 0 10px',
  },
  rate5: {
    width: '40%',
    height: '100%',
    backgroundColor: 'rgba(27, 240, 204, 0.973)',
    borderRadius: '10px 0 0 10px',
  },
  progressBar: {
    width: '100%',
    padding: '20px',
  },
  dumb: {
    width: '100%',
    height: '100px',
  },
})

const Resume = () => {
  const classes = useStyles()
  return (
    <div className={classes.resumePage}>
      <span className={classes.beforeHeading}></span>
      <h3 className={classes.heading}>Resume</h3>
      <p className={classes.subheading}>MY PROFESSIONAL RESUME</p>
      <span className={classes.afterHeading}></span>
      <div className={classes.workHistory}>
        <h3 className={classes.text1}>My Professional</h3>
        <h3 className={classes.text2}><span className={classes.smallBorder}></span>Work History</h3>
        <Button variant='outlined' className={classes.button}><CloudDownload className={classes.downloadBtn}/> Download Resume</Button>
        <div className={classes.histories}>
          <div className={classes.history}>
            <div className={classes.historyImg}>
              <img src={chrome} alt='Img' className={classes.img}/>
            </div>
            <div className={classes.historyContent}>
              <p className={classes.historyDate}>July 16, 2019 - Nov 24, 2020</p>
              <h5 className={classes.historyTitle}>Frontend Developer</h5>
              <p className={classes.historyDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.</p>
            </div>
          </div>
          <div className={classes.history}>
            <div className={classes.historyImg}>
              <img src={chrome} alt='Img' className={classes.img}/>
            </div>
            <div className={classes.historyContent}>
              <p className={classes.historyDate}>December 22, 2020 - May 4, 2021</p>
              <h5 className={classes.historyTitle}>Web Designer</h5>
              <p className={classes.historyDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.</p>
            </div>
          </div>
          <div className={classes.history}>
            <div className={classes.historyImg}>
              <img src={chrome} alt='Img' className={classes.img}/>
            </div>
            <div className={classes.historyContent}>
              <p className={classes.historyDate}>June 19, 2021 - To Date</p>
              <h5 className={classes.historyTitle}>Web Developer</h5>
              <p className={classes.historyDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.skillsWrapper}>
        <span className={classes.beforeSkills}></span>
        <h3 className={classes.text1}>My Professional</h3>
        <h3 className={classes.text2}><span className={classes.smallBorder}></span>Work Skills</h3>
        <div className={classes.skills}>
          <div className={classes.skill}>
            <div className={classes.skillDetails}>
              <h5 className={classes.skillName}>Html & Css</h5>
              <h4 className={classes.skillrate}>95%</h4>
            </div>
            <div className={classes.rateCont}>
              <div className={classes.rate}></div>
            </div>
          </div>
          <div className={classes.skill}>
            <div className={classes.skillDetails}>
              <h5 className={classes.skillName}>Javascript</h5>
              <h4 className={classes.skillrate}>95%</h4>
            </div>
            <div className={classes.rateCont}>
              <div className={classes.rate2}></div>
            </div>
          </div>
          <div className={classes.skill}>
            <div className={classes.skillDetails}>
              <h5 className={classes.skillName}>ReactJs</h5>
              <h4 className={classes.skillrate}>90%</h4>
            </div>
            <div className={classes.rateCont}>
              <div className={classes.rate3}></div>
            </div>
          </div>
          <div className={classes.skill}>
            <div className={classes.skillDetails}>
              <h5 className={classes.skillName}>NodeJs</h5>
              <h4 className={classes.skillrate}>65%</h4>
            </div>
            <div className={classes.rateCont}>
              <div className={classes.rate4}></div>
            </div>
          </div>
          <div className={classes.skill}>
            <div className={classes.skillDetails}>
              <h5 className={classes.skillName}>Python (DJANGO)</h5>
              <h4 className={classes.skillrate}>40%</h4>
            </div>
            <div className={classes.rateCont}>
              <div className={classes.rate5}></div>
            </div>
          </div>
        </div>
        <span className={classes.afterSkills}></span>
      </div>
      <div className={classes.workHistory}>
        <h3 className={classes.text1}>My Education</h3>
        <h3 className={classes.text2}><span className={classes.smallBorder}></span>Background History</h3>
        <div className={classes.histories}>
          <div className={classes.history}>
            <div className={classes.historyImg}>
              <img src={ksteblogo} alt='Img' className={classes.img}/>
            </div>
            <div className={classes.historyContent}>
              <p className={classes.historyDate}>November 2011 -  July 2017</p>
              <h5 className={classes.historyTitle}>GOVERNMENT SCIENCE SECONDARY SCHOOL BINDAWA</h5>
              <p className={classes.historyDesc}>Start and Complete Secondary School at Government Science Secondary School Bindawa, Bindawa Local Government, Katsina State, Nigeria.</p>
              <p className={classes.historyDesc}>G.S.S.S BINDAWA, is among the secondary schools under Katsina State Science and Technical Education Board</p>
            </div>
          </div>
          <div className={classes.history}>
            <div className={classes.historyImg}>
              <img src={uduslogo} alt='Img' className={classes.img}/>
            </div>
            <div className={classes.historyContent}>
              <p className={classes.historyDate}>January 30, 2018 - February 18, 2023</p>
              <h5 className={classes.historyTitle}>USMANU DANFIDIYO UNIVERSITY SOKOTO</h5>
              <p className={classes.historyDesc}>Obtained B.Ed Primary Education from the Department of Adult Education and Extension Services, Faculty of Education and Extension Services, Usmanu Danfodio University Sokoto, Sokoto State, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume