import {
    Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FirstLayer from "./firstlayer";
import AccordionExpandIcon from "./accordian";
import { Margin } from "@mui/icons-material";
import SecondLayer from "./secondlayer";

function Index() {
  const [show, setShow] = useState(false);
  const users = [
    { name: "Fred", age: 25 },
    { name: "Kate", age: 22 },
    { name: "Alan", age: 28 },
  ];

  return (
//<Box sx={{Margin:"16px 8px"}}><AccordionExpandIcon ></AccordionExpandIcon> </Box>
    <>
    <List
    dense
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "221px",
        backgroundColor: "#d8460d",
        padding: "2px",
      }}
    >

      {users.map((text) => (
        <ListItem
        dense 
          key={text.name}
          sx={{
           // height: "32px",
           // width: "203px",
            backgroundColor: "#46d6c0b8",
            borderStyle: "outset",
             display: "flex",
             flexFlow: "column",
             alignItems: "flex-start",
            // overflow:'hidden',
            padding : "1px"
            
          }}
        >
          <FirstLayer show={show} text={text} />
         
        </ListItem>
      ))}
    </List>
  
    </>
  );
}

export default Index;
