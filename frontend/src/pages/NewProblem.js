import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from "@material-ui/core/Grid";

import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';

import Axios from 'axios'
import {API_URL} from '../config/constants'

const useStyles = makeStyles(theme => ({
    box: {
        width: 400,
        height: 300,
      },
    problem: {
      width: 300,      
    },
    saveButtonBox:{
        margin:20
    },
    saveButton:{
        minWidth:70
    },

}));

const NewProblem = () =>{

const [Problem,setProblem] = useState("");
const classes = useStyles();

const [openError, setError] = useState(false);
const [openSuccess, setSuccess] = useState(false);

const handleErrorMessage = () => {
    setError(!openError);
  };

const handleSuccessMessage = () => {
    setSuccess(!openSuccess);
  };


const saveProblem = () => {
    if(!Problem){
        handleErrorMessage();
        return;
    }
    Axios.post(API_URL+'/problem/create', {problem: Problem}).then(res => {
        if (res.data.affectedRows === 1) {
            handleSuccessMessage();    
            setProblem("");
        }
    })
}

    return (       

        // <Box component="div" className={classes.box} noValidate autoComplete="off">  
        <Grid container alignItems="center" justify="center" direction="column">

                <Typography variant="h4" gutterBottom component="div">
                    Create New Problem
                </Typography>

                <Box>
                <TextField                    
                    id="problem"
                    name="Problem"
                    label="Write Problem Here"
                    type="text"
                    required="true"
                    variant="outlined"
                    value={Problem}
                    className={classes.problem}
                    onChange={(e)=>{
                        setProblem(e.target.value)
                        }}
                />
                </Box>
                
                <Dialog open={openError} onClose={handleErrorMessage}>
                    <Alert severity="error">Problem should not empty !!!</Alert>                
                </Dialog>

                <Dialog open={openSuccess} onClose={handleSuccessMessage}>
                    <Alert severity="success">   Problem is saved !! </Alert>                
                </Dialog>

                <Box className={classes.saveButtonBox}>
                    <Button  className={classes.saveButton} variant="contained" onClick={() => {saveProblem() }} > Save </Button>
                </Box>
                
        </Grid>
    )}

export default NewProblem;