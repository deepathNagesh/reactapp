import AssessmentIcon from "@mui/icons-material/Assessment";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import SubMenuList from "./menulist";

function SideBar({ onShow, onClose }) {
  console.log("onShow", onShow);
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuList = [
    {
      key: "Report",
      icon: MapRoundedIcon,
      subMenu: ["OverSpeed", "Idle", "VSR"],
    },
    { key: "Log", icon: AssessmentIcon, subMenu: ["Feed Log", "User Log"] },
    { key: "Map", icon: MapRoundedIcon, subMenu: ["Tracking", "Playback"] },
  ];

  const DrawerList = (
    <Box
      sx={{ width: 200, marginTop: 12 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {menuList.map((text) => (
          <Menus text={text}> </Menus>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        open={onShow}
        onClose={onClose}
        variant="persistent"
        color="primary"
        sx={{ bgcolor: "rgba(0, 0, 0, 0.12)" }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default SideBar;

export const Menus = ({ text }) => {
  const [openCollapse, setOpenCollapse] = React.useState(false);

  const handleClick = () => {
    setOpenCollapse(!openCollapse);
  };

  return (
    <ListItem key={text.key} disablePadding sx={{ display: "block" }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{<text.icon />}</ListItemIcon>
        <ListItemText primary={text.key} />
      </ListItemButton>
      <SubMenuList
        isCollapse={openCollapse}
        listVal={text.subMenu}
      ></SubMenuList>
    </ListItem>
  );
};

