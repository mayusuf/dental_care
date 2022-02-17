import React, {useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@mui/material/Typography';

import Axios from 'axios'
import {API_URL} from '../config/constants'

import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';

const ProblemsData = () => {

  const [problems, setProblems] = useState([])
  
  useEffect(() => {       
    Axios.get(API_URL+'/problems').then(res=> {
      setProblems(res.data);
    })
  }, [])

  return problems;
}


const  Problems = () => {

  const problems = ProblemsData();
  const [openSuccess, setSuccess] = useState(false);

  const deleteProblem = (id) => {
    
       Axios.delete(`${API_URL}/problem/delete/${id}`).then(res => {
        if (res.data.affectedRows === 1) {
            handleSuccessMessage();               
            
        }
    })
  }

  const handleSuccessMessage = () => {

    setSuccess(!openSuccess);  

    setTimeout(() => {
        setSuccess(openSuccess);  ;
        window.location = "/problems";
    }, 3000);
  }; 

  return (

        <TableContainer component={Paper}>
           <Typography variant="h6" gutterBottom component="div">
                    Problem List
           </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Problem Name</TableCell>
                <TableCell align="center">Action</TableCell>
                
            </TableRow>
            </TableHead>
            <TableBody>
            {problems.map((item,i) => (
                <TableRow
                key={item.problem}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {item.problem}
                </TableCell>
                <TableCell align="left">

                <ListItem  component="a" href={`/updateproblem/${item.id}`}>
                  <ListItemText primary="Edit" />
                </ListItem>

                <ListItem  component="a" href="javascript:" onClick={() => {deleteProblem(`${item.id}`) }}>
                  <ListItemText primary="Delete" />
                </ListItem>

                </TableCell>               
                </TableRow>
            ))}
            <Dialog open={openSuccess} onClose={handleSuccessMessage}>
                    <Alert severity="success">   Problem is Deleted !! </Alert>                
            </Dialog>
            </TableBody>
        </Table>
        </TableContainer> 
    );
}

export default  Problems;
