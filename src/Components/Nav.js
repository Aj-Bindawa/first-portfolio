import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import { NavLink, useNavigate } from 'react-router-dom';
import me from '../Assets/Images/me.jpg';
import { ContactMail, InfoOutlined, LocalActivityOutlined, WorkOutlined } from '@material-ui/icons';

const useStyles = makeStyles({ // Styles
    navpage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '10vh',
        backgroundColor: 'rgba(27, 240, 204, 0.973)',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1000',
    },
    getapp: {
      width: '100%',
      borderBottom: '1px solid #ffffff'
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'rgba(27, 240, 204, 0.973)',
      marginTop: '0',
      '@media (min-width: 500px)' : {
        marginTop: '20px',
  },
    },
    list: {
      width: 200,
    },
    link: {
      display: 'flex',
      textDecoration: 'none',
      style: 'none',
      color: '#ffffff',
    },
    fullList: {
      width: 'auto',
    },
    DrawerBackground: {
      height: '105vh',
      backgroundColor: 'rgba(27, 240, 204, 0.973)',
    },
    hausa: {
      color: '#fff',
      fontSize: '2rem',
      letterSpacing: '3px',
      fontFamily: 'Helvetica Neue',
    },
    flix: {
        color: 'green',
    },
    icon: {
      fontSize: '2rem',
      color: '#ffffff',
    },
    menuIcon: {
      fontSize: '3rem',
      color: '#ffffff',
    },
    notificationIcon: {
      fontSize: '2rem',
      color: '#ffffff',
      '@media (min-width: 500px)' : {
        fontSize: '3rem',
      },
    },
    forUser: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
    },

    myImage: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
    },
  });

const Nav = () => {
    const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
    className={clsx(classes.list, classes.DrawerBackground, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className={classes.forUser}>
          <img src={me} alt='Aj' className={classes.myImage} />
          <h3>Aj Bindawa</h3>
        </div>
      </List>
      <Divider />
      <List>
        {['Home', 'About'].map((text, index) => (
          <ListItem button key={text}>
            {index === 0 ? <NavLink to = '/' className={classes.link}>
              <ListItemIcon><Home className={classes.icon}/></ListItemIcon>
              <ListItemText primary='Home'/>
              </NavLink>
              :
              <NavLink to = '/about' className={classes.link}>
              <ListItemIcon><InfoOutlined className={classes.icon}/></ListItemIcon>
              <ListItemText primary='About'/>
              </NavLink>
              }
          </ListItem>
        ))}
        {['Services', 'Resume'].map((text, index) => (
          <ListItem button key={text}>
            {index === 0 ? <NavLink to = '/services' className={classes.link}>
              <ListItemIcon><LocalActivityOutlined className={classes.icon} /></ListItemIcon>
              <ListItemText primary='Services'/>
              </NavLink>
              :
              <NavLink to = '/resume' className={classes.link}>
              <ListItemIcon><WorkOutlined className={classes.icon}/></ListItemIcon>
              <ListItemText primary='Resume'/>
              </NavLink>
              }
          </ListItem>
        ))}
        <ListItem button key='portfolio'>
              <NavLink to = '/portfolio' className={classes.link}>
              <ListItemIcon><WorkOutlined className={classes.icon}/></ListItemIcon>
              <ListItemText primary='Portfolio'/>
              </NavLink>
          </ListItem>
        <ListItem button key='contact'>
              <NavLink to = '/contact-Aj' className={classes.link}>
              <ListItemIcon><ContactMail className={classes.icon}/></ListItemIcon>
              <ListItemText primary='Contact Me'/>
              </NavLink>
          </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.navpage}>
        <div className={classes.nav}>
          {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}> <MenuIcon className={classes.menuIcon}/></Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
          ))}
          <Typography className = {classes.hausa}>Aj<span className = {classes.flix}>Bindawa</span></Typography>
        </div>
    </div>
  )
}

export default Nav