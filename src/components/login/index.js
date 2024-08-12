import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, useNavigate } from "react-router";
import logo from '../../img/got.png'; 
// import Music from '../../music';

export default function SignIn() {

    const defaultTheme = createTheme();

    const navigate = useNavigate();
        const handleSubmit = (event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          if(data.get('email')===''){
           alert("Please Enter Email");
           return null ;
          }if(data.get('password') ===''){
            alert("Please Enter Password");
            return null ;
          }
          console.log(data.get('email'));
             navigate("/admin") ;
           
            
        };
 //navigate("/mapviews") ;
        

  
    return (
      <ThemeProvider theme={defaultTheme}>
 <Container component="main" maxWidth="xs">
 <CssBaseline />
      <Box
          sx={{
            marginTop: 7  ,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor : "#ffffffd6",
            p:2,
            borderRadius: 2,
            borderColor: "#0000000d",
            borderStyle: "solid",
          }}>
<img height={150} width={150} src={logo} alt="Logo" />
{/* <Link to="https://github.com/Joeyryanbridges">
  <Image src="giticon.png" className="githubIcon" />
</Link> */}
          
          {/* <Typography component="h3" variant="h3" >
              Goat Access
            </Typography> */}
           <Typography component="h6" variant="h6">
           Goat Access
           <img height={25} width={25} src={logo} alt="Logo" />
           </Typography>
           <Box component="form" onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
             <TextField
              margin="dense "
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="dense"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,backgroundColor :"#31343dd9", 
                '&:hover': {
      cursor: 'pointer',
      backgroundColor: "#22a248eb",
                }

               }}
            >
              Goat In
            </Button>
            
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Link href="#" variant="body1">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {/* <Music> </Music> */}
          </Box>
        
          </Box>

 </Container>
           </ThemeProvider>
    );


  }