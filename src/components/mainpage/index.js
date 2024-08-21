import { Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Report from '../report/index';
import TreeView from '../treeview/index';
import DisplayPic from '../displaypic/index'

function MainPage() {
  return (
    <Box sx={{marginLeft:"200px",    flex: "auto",
        }}>
        <Toolbar/>
        <Box 
        // sx={{bgcolor:"blue"}}
        // sx={{display:"flex"}}
        >
        <Typography fontWeight={550} sx={{ marginleft: "26px !important",color:"#161838",p:12,padding: "12px",
    backgroundColor: "white",borderStyle:"solid",borderColor:"white"}}>Vehicle Data</Typography>
        {/* <Report> </Report> */}
        <Box  sx={{display:"flex"}}>
        <TreeView></TreeView>
        <DisplayPic
        // displayImg={'Goat'}
        ></DisplayPic>
        </Box>
        </Box>
        
       
    </Box>
    
  )
}

export default MainPage
