import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Header ({hideDrawer}) {

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('userData');
    navigate("/");
  }
  const userData = localStorage.getItem('userData');


useEffect (() => {
  if(undefined===userData || null===userData){
    // handleLogOut();
     navigate("/");
   }
},[userData]) ;
 
    return (
        <Box 
        // sx={{ flexGrow: 1 }}
        >
       <AppBar position="fixed"   sx={{zIndex:1300, bgcolor:"#F6E96B"}}>
       <Toolbar sx={{display:"flex"}} >
       <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{mr: 2 , color:"black"}}
             onClick={hideDrawer(true)}
          >
            <MenuIcon />
            {/* <SideBar onShow={show}>  </SideBar> */}
          </IconButton>

<Typography sx={{color:"black"}}>Welcome {'  '+userData} </Typography>

<Box sx={{flex:1}}/>
          <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}
             onClick={handleLogOut}
          >
            <LogoutTwoToneIcon color="primary"/>
            <Typography sx={{color:"black"}}> Log Out</Typography>
            {/* <SideBar onShow={show}>  </SideBar> */}
          </IconButton>

</Toolbar>
    </AppBar>
      </Box>
      
    );

}