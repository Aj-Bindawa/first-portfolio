import { Button, makeStyles, TextField } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { ref, set } from 'firebase/database'
import React, { useState } from 'react'
import { db } from '../Config/FirebaseConfig'
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles({
  contactPage: {
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
    textTransform: 'capitalize',
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
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contactForm: {
    width: '70%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    margin: '5px',
  },
  messageInput: {
    width: '100%',
    padding: '60px 0 0 10px',
    margin: '5px',
  },
  btn: {
    width: '90%',
    backgroundColor: 'rgba(27, 240, 204, 0.973)',
    border: 'none',
    outline: 'none',
    borderRadius: '20px',
    margin: '20px auto',
    '&:hover': {
      backgroundColor: 'rgba(27, 240, 204, 0.773)',
    },
    '&:focus': {
      backgroundColor: 'rgba(27, 240, 204, 0.673)',
    },
  },
  btn2: {
    width: '90%',
    backgroundColor: 'rgba(27, 240, 204, 0.973)',
    border: 'none',
    outline: 'none',
    borderRadius: '20px',
    margin: '20px auto',
    pointerEvents: 'none',
    '&:hover': {
      backgroundColor: 'rgba(27, 240, 204, 0.773)',
    },
    '&:focus': {
      backgroundColor: 'rgba(27, 240, 204, 0.673)',
    },
  },
})

const Contact = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  //const success = 'Aj Recieved Your Message'
  const [disable, setDisable] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  var dt = new Date()
  const msgTime = dt.getTime()

  const randomNumber = Math.random() * 100;

  const sendMessage = ((e) => {
    e.preventDefault()
    setLoading(true)
    if(name === '' || email === '' || message === '') {
      setError('All fields Must Not Be Empty')
      setLoading(false)
    } else {
      const messageId = uuid();
      const messageTime = (new Intl.DateTimeFormat('en-GB', { 
        month: 'long', 
        day: '2-digit',
        year: 'numeric',
    }).format(new Date(msgTime)));
      setError('')
      set(ref(db, `messages/${messageId}`), { // firebase function to add the user to the database
        name: name,
        email: email,
        message: message,
        id: messageId,
        date: messageTime,
      })
      .then (() => {
        setLoading(false)
        setSuccess('Aj Recieved Your Message')
        alert('Aj Recieved Your Message')
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch (err => {
        setError(err.message)
      })
    }
  })

   const Error = (() => {
    if(error !== '') {
      return(
        <Alert severity="error">{error}</Alert>
      )
    }
   })

   const Success = (() => {
    if(success !== '') {
      return(
        <Alert severity="success">{success}</Alert>
      )
    }
   })

  return (
    <div className={classes.contactPage}>
      <span className={classes.beforeHeading}></span>
      <h3 className={classes.heading}>CONTACT</h3>
      <p className={classes.subheading}>Need Some Help?</p>
      <span className={classes.afterHeading}></span>
      <div className={classes.wrapper}>
        <div className={classes.contactForm}>
          <Error />
          <TextField className={classes.input} id="name" label="Name:" 
          onChange={(e) => setName(e.target.value)} value={name} required />
          <TextField className={classes.input} id="email" label="E-mail:" 
          onChange={(e) => setEmail(e.target.value)} value={email} required />
          <TextField className={classes.messageInput} id="message" label="Message:" 
          onChange={(e) => setMessage(e.target.value)} value={message} required multiline/>
         {loading ?  <Button variant='contained' className={classes.btn2}>SENDING...</Button> 
         : <Button variant='contained' className={classes.btn} onClick={sendMessage}>SEND</Button>}
        </div>
      </div>
    </div>
  )
}

export default Contact