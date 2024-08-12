import { CheckBox } from '@mui/icons-material'
import { Box, Button, Container, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addActor as AddActor } from "../../slice/actor";


function CreateActor() {

    const [firstName,setFirstName] = useState("");
    const [secondName,setSecondName] = useState("");
    const [age,setAge] = useState("");
    const dispatch = useDispatch();


    const submitButton = () => {
      const myObject = {"firstName":firstName,"lastName":secondName,"age":age,"id":10};
        console.log(myObject);
        dispatch(AddActor(myObject))
    }

    const handleChange = (e,newage) => {
      console.log(e);
      console.log(e.target.value);
      setAge(e.target.value);
    }

  return (
 <Box 
  sx={{ width: '95%'  ,  border:"0.5px solid grey",borderRadius: "10px",p:2 
        }}>
 <Grid container
   rowSpacing={1} 
  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//   sx ={{  
//     marginTop: "19px",
//     marginLeft: "12px !important"}}
 >
   <Grid item xs={2}>
   <TextField label='First name' autoFocus  size="small"   onChange={(event) => {setFirstName(event.target.value)} } />
   </Grid>
   <Grid item xs={2}>
   <TextField label='Last name'  size="small"  onChange={ (event) => {setSecondName(event.target.value)} } > </TextField>
   </Grid>
   <Grid item xs={2}>
   <TextField label='Age'  size="small"    onChange={ handleChange }> </TextField>
   </Grid>
   <Grid item xs={2}>
   <CheckBox label="IsChecked"> </CheckBox>
   </Grid>
   <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
   <Button label="Save" variant="contained" onClick={ submitButton} >Save</Button>
   </Grid>
    </Grid>
 

</Box>
  )


}


export default CreateActor

