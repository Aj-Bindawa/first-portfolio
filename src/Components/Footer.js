import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import { Navigate, NavLink } from 'react-router-dom'

const TikTokIcon = ({ color = "#ffffff" }) => {
    return (
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="1.5em"
        height="1.5em"
      >
        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
      </svg>
    );
  };

const useStyles = makeStyles({
    footer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(27, 240, 204, 0.973)',
      height: '10vh',
    },
    mediaicons: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        marginTop: '5px',
    },
    mediaicon: {
        marginRight: '10px',
    },
    textcont: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footertext: {
        fontFamily: 'poppins',
        fontSize: '1rem',
        color: '#ffffff',
        margin: '2px',
        '@media (max-width: 250px)': {
            fontSize: '.7rem'
          },
    },
    link: {
        style: 'none',
        color: '#fff',
    },
})

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
          <div className={classes.mediaicons}>
            <a href='https://web.facebook.com/auwal.jabeer.5' target="_blank"  rel="noopener noreferrer"
            className={classes.link}><Facebook className={classes.mediaicon}/></a> 
            <a href='https://www.instagram.com/aj_bindawa/' target="_blank"  rel="noopener noreferrer"
            className={classes.link}><Instagram className={classes.mediaicon}/></a>
            <a href='https://www.youtube.com/channel/UCmdTj9uveDJ0nYXkIgUX3Dw' target="_blank"  rel="noopener noreferrer"
            className={classes.link}><YouTube className={classes.mediaicon}/></a>
            <a href='https://tiktok.com/@hausaflix.tv' target="_blank"  rel="noopener noreferrer"
            className={classes.link}><TikTokIcon className={classes.mediaicon}/></a>
          </div>
          <div className={classes.textcont}>
            <Typography className={classes.footertext}>Copyright © 2023 Aj Bindawa</Typography>
          </div>
        </div>
    )
}

export default Footer
