import { Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Report from '../report/index';


function MainPage() {
  return (
    <Box sx={{marginLeft:"200px",    flex: "auto",
        }}>
        <Toolbar/>
        <Box 
        // sx={{bgcolor:"blue"}}
        >
        <Typography fontWeight={550} sx={{ marginleft: "26px !important",color:"#161838"}}>Vehicle Data</Typography>
        <Report> </Report>
        </Box>
        
       
    </Box>
    
  )
}

export default MainPage
