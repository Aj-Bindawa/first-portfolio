import { Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles/'
import { ContactMail } from '@material-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CompBg from '../Assets/Images/CompBg.png'

const useStyles = makeStyles ({
  homepage: {
    width: '100%',
    height: '80vh',
    marginTop: '10vh',
    backgroundImage: `url(${CompBg})`,
    backgroundPosition: 'start',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text1: {
    margin: '0',
    fontSize: '35px',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'poppins',
  },

  text2: {
    margin: '0',
    fontSize: '35px',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'poppins',
  },

  button: {
    margin: '10px',
    padding: '10px',
    backgroundColor: 'rgba(27, 240, 204, 0.973)',
    color: '#fff',
    outline: 'none',
    border: 'none',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#ddd',
      color: 'rgba(27, 240, 204, 0.973)',
  },
  },

  icon: {
    margin: '2px 10px',
  }
})

const Home = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const contactButton = (() => {
    navigate('/contact-Aj')
  })
  return (
    <div className={classes.homepage}>
      <h4 className={classes.text1}>Hello, I'am Auwal Jabir (Aj Bindawa)</h4>
      <h4 className={classes.text2}>I am working as a Web Developer</h4>
      <Button variant='outlined' onClick={contactButton} className={classes.button}><ContactMail className={classes.icon}/> Contact Me </Button>
    </div>
  )
}

export default Home