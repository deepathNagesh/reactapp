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

function SubMenuList({ isCollapse, listVal }) {
  return (
    <Box role="presentation">
      <Collapse in={isCollapse}>
        <List>
          {listVal &&
            listVal.map((text, index) => (
              <ListItem key={text}>
                <ListItemButton>
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
