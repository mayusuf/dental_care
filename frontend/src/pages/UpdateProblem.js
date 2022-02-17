import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from "@material-ui/core/Grid";

import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';

import { useParams,Navigate } from 'react-router-dom';


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

   
const UpdateProblem = () =>{
    
    const { id } = useParams();    

    // const [singleProblem, setSingleProblem] = useState([]);
    const [problem, setProblem] = useState("");
   

    useEffect(() => {
        
        Axios.get(`${API_URL}/problem/update/${id}`).then((response) => {
            setProblem(response.data[0].problem);   
                
        });
      }, []);  

    const classes = useStyles();

    const [openError, setError] = useState(false);
    const [openSuccess, setSuccess] = useState(false);

    const handleErrorMessage = () => {
        setError(!openError);
    };


    const handleSuccessMessage = () => {
        setSuccess(!openSuccess);  

        setTimeout(() => {
            setSuccess(openSuccess);  ;
            window.location = "/";
        }, 3000);
    }; 

    const updateProblem = () => {
        if(!problem){
            handleErrorMessage();
            return;
        }
        Axios.put(`${API_URL}/problem/update/${id}`, {problem: problem}).then(res => {
            if (res.data.affectedRows === 1) {
                handleSuccessMessage();                
                
            }
        })
    }

    return (       
       
        
        <Grid container alignItems="center" justify="center" direction="column">

                <Typography variant="h4" gutterBottom component="div">
                    Edit Problem
                </Typography>
                

                <Box>
                 {/* {singleProblem.map((item,i) => (                     */}
                <TextField                    
                    id="problem"
                    name="problem"
                    type="text"
                    required
                    variant="outlined"
                    value={problem}
                    className={classes.problem}
                    onChange={(e)=>{
                        setProblem(e.target.value)
                        }}
                   
                />
                {/* ))}  */}
                </Box>
                
                 <Dialog open={openError} onClose={handleErrorMessage}>
                    <Alert severity="error">Problem should not empty !!!</Alert>                
                </Dialog>

                <Dialog open={openSuccess} onClose={handleSuccessMessage}>
                    <Alert severity="success">   Problem is Updated !! </Alert>                
                </Dialog>

                <Box className={classes.saveButtonBox}>
                    <Button  className={classes.saveButton} variant="contained" onClick={() => {updateProblem() }} > Update </Button>
                </Box> 
                
         </Grid>
    )
}

export default UpdateProblem;