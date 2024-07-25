import React from 'react';
import { Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import AssessmentIcon from '@mui/icons-material/Assessment';

function SideBar({onShow, onClose}) {
  console.log('onShow',onShow)
    const [open, setOpen] = React.useState(true);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const menuList = ['Report', 'Log', 'Map','Helpdesk'];


    const DrawerList = (
        <Box sx={{ width: 200,marginTop : 12 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {menuList.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    { index%2==0  ? <MapRoundedIcon/> : <AssessmentIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
         
          {
             <Divider />
          /* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  { <h1>yes</h1>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      );

  return (
    <div>
    {/* { <Button onClick={toggleDrawer(true)}>Open drawer</Button> } */}
    <Drawer open={onShow} 
    onClose={onClose}

    variant="persistent"
    
 
    >
      
      {DrawerList}
    </Drawer>
  </div>
  )
}

export default SideBar