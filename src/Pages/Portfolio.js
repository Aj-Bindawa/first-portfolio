import { makeStyles } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import flix from '../Assets/Images/flix.png'
import retexter from '../Assets/Images/retexter.png'
import Footer from '../Components/Footer'

const useStyles = makeStyles({
    portfolioPage: {
        marginTop: '10vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight:'80vh',
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
      works: {
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '30px auto',
        '@media (min-width: 700px)' : {
            flexFlow: 'wrap',
         },
      },
      work: {
        width: '95%',
        height: '300px',
        backgroundImage: `url(${flix})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        border: '1px solid #ddd',
        '@media (min-width: 700px)' : {
            width: '47%',
         },
      },
      work2: {
        width: '95%',
        height: '300px',
        backgroundImage: `url(${retexter})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        border: '1px solid #ddd',
        '@media (min-width: 700px)' : {
            width: '47%',
         },
      },
      workContent: {
        width: '90%',
        marginBottom: '20px',
        backgroundColor: '#fff',
        position: 'relative',
        '&:hover': {
            height: '80%',
            backgroundColor: 'rgba(27, 240, 204, 0.193)',
        },
      },
      workTitle: {
        margin: '10px auto 0 30px',
        color: 'rgba(27, 240, 204, 0.993)',
        fontSize: '20px',
      },
      workCateg: {
        margin: '5px auto 100px 30px',
        color: 'rgba(42, 44, 44, 0.973)',
        fontSize: '15px',
      },
      onHover: {
        margin: '5px auto 10px 30px',
        position: 'absolute',
        bottom: '5px',
      },
      published: {
        margin: '5px',
      },
      visit: {
        margin: '5px',
      },
      link: {
        color: '#000',
      },
})

const Portfolio = () => {
    const classes = useStyles()
  return (
    <div className={classes.portfolioPage}>
        <span className={classes.beforeHeading}></span>
        <h3 className={classes.heading}>PORTFOLIO</h3>
        <p className={classes.subheading}>SOME OF MY WORK SAMPLES</p>
        <span className={classes.afterHeading}></span>
        <div className={classes.works}>
            <div className={classes.work}>
                <div className={classes.workContent}>
                    <h4 className={classes.workTitle}>HausaFlix Tv</h4>
                    <h5 className={classes.workCateg}>Web Development</h5>
                    <div className={classes.onHover}>
                        <p className={classes.published}>Published: January, 2023</p>
                        <p className={classes.visit}>Demo: <a href='https://hausaflix.tv' target="_blank"  rel="noopener noreferrer"
                        className={classes.link}>hausaflix.tv</a></p>
                    </div>
                </div>
            </div>
            <div className={classes.work2}>
                <div className={classes.workContent}>
                    <h4 className={classes.workTitle}>Retexter Ai</h4>
                    <h5 className={classes.workCateg}>Web Development</h5>
                    <div className={classes.onHover}>
                        <p className={classes.published}>Published: June, 2023</p>
                        <p className={classes.visit}>Demo: <a href='https://retexter.ai' target="_blank"  rel="noopener noreferrer"
                        className={classes.link}>retexter.ai</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio