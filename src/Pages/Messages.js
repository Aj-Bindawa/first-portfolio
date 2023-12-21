import { makeStyles } from '@material-ui/core';
import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { ref, remove } from 'firebase/database';
import { db } from '../Config/FirebaseConfig';

const useStyles = makeStyles({
    messagesPage: {
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
      message: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ddd',
        margin: '5px',
        padding: '5px',
        boxShadow: '2px 3px rgba(27, 240, 204, 0.473)',
        position: 'relative',
      },
      messageName: {
        textTransform: 'uppercase',
        fontSize: '20px',
        fontFamily: 'poppins',
        margin: '20px 0 0 0',
      },
      messageContent: {
        textTransform: 'capitalize',
        fontSize: '15px',
        fontFamily: 'poppins',
        margin: '5px 0',
      },
      messageEmail: {
        fontSize: '15px',
        fontFamily: 'poppins',
        margin: '5px 0 20px 0',
      },
      messageDate: {
        fontSize: '15px',
        fontFamily: 'poppins',
        margin: '15px 5px 0 0',
        position: 'absolute',
        bottom: '0',
        right: '0',
      },
      deleteBtn: {
        position: 'absolute',
        top: '5px',
        right: '5px',
        color: 'red',
        '&:hover': {
            fontSize: '30px',
          },
      },
  })

const Messages = ({messages}) => {
console.log(messages);
const classes = useStyles()

const deleteMessage = ((id) => {
    remove(ref(db,`messages/${id}`))
})

  return (
    <div className={classes.messagesPage}>
        <span className={classes.beforeHeading}></span>
        <h3 className={classes.heading}>MESSAGES</h3>
        <p className={classes.subheading}>What People Says</p>
        <span className={classes.afterHeading}></span>
        <div className={classes.wrapper}>
            {messages.length !== 0 ? messages.map((message) => {
                return (
                    <div className={classes.message} key={message.id}>
                        <DeleteForeverIcon className={classes.deleteBtn} onClick={()=>{deleteMessage(message.id)}}/>
                        <h6 className={classes.messageName}>You Have Message From {message.name}</h6>
                        <p className={classes.messageContent}>{message.message}</p>
                        <h6 className={classes.messageEmail}>EMAIL: {message.email}</h6>
                        <p className={classes.messageDate}>{message.date}</p>
                    </div>
                )
            })
            : <p>You Dont Have Any Message Yet!</p>}
        </div>
    </div>
  )
}

export default Messages