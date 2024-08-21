import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function AccordionExpandIcon() {
 // const [show, setShow] = useState(false);
  const users = [
    { name: "Fred", age: 25 },
    { name: "Kate", age: 22 },
    { name: "Alan", age: 28 },
  ];

  return (
<>
    {users.map((text) => ( 

    <Accordion
    
    sx={{
    //   display: "flex",
    //   flexDirection: "column",
       width: "221px",
       backgroundColor: "#d8460d",
       //height: "auto"
        //    padding: "12px",
        //    borderStyle : "ridge",
        //    borderRadius : "12px"
        
    }}
    
  >


        <AccordionSummary   sx={{ minHeight: "0px", 
        // ".MuiAccordionSummary-content": { margin: 0 },
     }}


               expandIcon={<ArrowDownwardIcon />}
               aria-controls="panel1-content"
               id="panel1-header"
             >
               <Typography>{text.name}</Typography>
             </AccordionSummary >
                    <AccordionDetails>
                    <Typography>
                    {text.name}
                    </Typography>
                    </AccordionDetails>
              
  </Accordion>
  ))}
</>
  );
}
