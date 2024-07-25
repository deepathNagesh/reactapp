import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import SideBar from './sidebar';

export default function Header ({hideDrawer}) {


    return (
        <Box 
        // sx={{ flexGrow: 1 }}
        >
       <AppBar position="fixed"   sx={{zIndex:1300, bgcolor:"rgb(40, 40, 43)"}}>
       <Toolbar>
       <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}
             onClick={hideDrawer(true)}
          >
            <MenuIcon />
            {/* <SideBar onShow={show}>  </SideBar> */}
          </IconButton>

</Toolbar>
    </AppBar>
    </Box>
       
    );

}