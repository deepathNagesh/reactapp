import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selRadio } from "../../slice/actor";

export default function RadioButtonsGroup({ list,text }) {


  const dispatch = useDispatch();
  const displayList = useSelector((state) => state.actorAdd.selRadio);
//   const handleClick = (newValue) => {
//     console.log(newValue);
//    // dispatch(selRadio(newValue))
//  };


 const onChan = (event, value) => {
  console.log('event.target.value', value);
  dispatch(selRadio(event.target.value))
 }
  



  return (
    <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        //aria-labelledby="demo-radio-buttons-group-label"
        value={displayList}
        name="radio-buttons-group"
        color="secondary"
        onChange={onChan}
        key={text}
      >
        {list.map((text,index) => (
          
            <FormControlLabel
             disableTypography
            sx={{backgroundColor:"#D7C3F1",
              //padding:"padding: 0px 24px",
              marginLeft: "0px",
              marginRight: "0px",
              marginBottom: "1px",
              marginTop: "1px",
            //  color:"cyan" 
            }} 
              value={text.name}
              control={<Radio />}
              label={text.name}
              key={index}
            />
          
        ))}
      </RadioGroup>
    </FormControl>
  );
}
