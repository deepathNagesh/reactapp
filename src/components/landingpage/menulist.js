import React from "react";
import Collapse from "@mui/material/Collapse";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router";

function SubMenuList({ isCollapse, listVal }) {

  const navigate = useNavigate();
  const handleClickSubMenu = (text) => {
     navigate(text);
     };
  return (
    <Box role="presentation">
      <Collapse in={isCollapse}>
        <List>
          {listVal &&
            listVal.map((text, index) => (
              <ListItem key={text}>
                <ListItemButton
                  onClick={ ()=> handleClickSubMenu(text)}
                 >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </Collapse>
    </Box>
  );
}

export default SubMenuList;
