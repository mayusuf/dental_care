import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import RoutePath from '../config/routes';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

const Content = () => {

  const classes = useStyles();

  return (
        <main className={classes.fullWidth}>
            <div className={classes.toolbar} />
            <div className={classes.title}>
                <Typography variant='h6'>Blog</Typography>
            </div>
            <div className={classes.content}>
                    <RoutePath />
            </div>
        </main>
    );
}

export default Content;