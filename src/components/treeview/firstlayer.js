import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SecondLayer from "./secondlayer";

function FirstLayer({ text }) {
  const [show, setShow] = useState(false);
  const handleClick = (newValue) => {
    setShow(!newValue);
  };
  return (
    <div>
      <ListItemButton  divider={true} onClick={() => handleClick(show)} sx={{display:"flex",flexFlow:"column",background:"white"}}>
        <ListItemText  primary={text.name} sx={{px:0}} ></ListItemText>
      </ListItemButton>
     
       
       {show && 
        <SecondLayer ></SecondLayer>
        }
         </div>
        
  );
}

export default FirstLayer;
