import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons//Home';
import AddIcon from '@material-ui/icons//Add';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({ 
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `linear-gradient(#cfd9df,#e2ebf0)`,
    color: 'grey',
  },
  bigAvatar: {
    margin: 30,
    width: 100,
    height: 100,
  },
}));

const LeftSideBar = () => {

  const classes = useStyles();

  return (

    <Drawer
      open={true}
      variant='permanent'
      anchor='left'
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid container justify='center' alignItems='center'>
        <Avatar src= "images/yusuf.jpg" className={classes.bigAvatar} />
      </Grid>

      <List>
         <ListItem button component="a" href="/">
            <ListItemIcon>
              {<HomeIcon />}
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button component="a" href="newpatient">
            <ListItemIcon>
              {<AddIcon />}
            </ListItemIcon>
            <ListItemText primary="New Patient" />
          </ListItem>

          <ListItem button  component="a" href="problems">
            <ListItemIcon>
              {<ListIcon />}
            </ListItemIcon>
            <ListItemText primary="Problems" />
          </ListItem>

          <ListItem button  component="a" href="advices">
            <ListItemIcon>
              {<ListIcon />}
            </ListItemIcon>
            <ListItemText primary="Advices" />
          </ListItem>

          <ListItem button key="Profile">
            <ListItemIcon>
              {<AccountCircle />}
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>

          <ListItem button key="Sign Out">
            <ListItemIcon>
              {<ExitToApp />}
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>

      </List>
    </Drawer>
  );
}

export default LeftSideBar;