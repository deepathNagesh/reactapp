import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RadioButtonsGroup from "../radioButton/radioButton";

function SecondLayer({text}) {
  //  const [show, setShow] = useState(false);
  //  const handleClick = (newValue) => {
  //    setShow(!newValue);
  //  };

   const users = [
    { name: "Goat", age: 25 },
    { name: "Lion", age: 22 },
    { name: "Zebra", age: 28 },
  ];  
  return (
    <List
    dense
     sx={{
    //   display: "flex",
    //   flexDirection: "column",
    //   width: "221px",
       backgroundColor: "#ff890069",
       padding: "1px",
    // height :"auto"
     }}
  >
    <RadioButtonsGroup list={users} key={text}/>
    {/* {users.map((text) => (
      <ListItem
        key={text.name}
         sx={{
        //   height: "32px",
        //   width: "203px",
           backgroundColor: "#orange",
        //   borderStyle: "outset",
         }}
      >
        <Typography>Hi</Typography>
  
      </ListItem>
    ))} */}
  </List>
    
  );
}

export default SecondLayer
