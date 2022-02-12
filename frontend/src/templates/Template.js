import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../templates/partials/Header';
import LeftSideBar from '../templates/partials/LeftSideBar';
import Footer from '../templates/partials/Footer';
import Content from '../pages/Content';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const Template = () =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <LeftSideBar />
      <Content />
      <Footer />
    </div>
  );
}

export default Template;