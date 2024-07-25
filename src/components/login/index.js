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
            marginTop: 9,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
           // margin : 8,
           // marginLeft : 1
          }}>

        <Typography component="h2" variant="h2">
            Sign in
           </Typography>
           <Typography component="h6" variant="h6">
           Access to portal
           </Typography>
           <Box component="form" onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
             <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
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
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
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
          </Box>
        
          </Box>

 </Container>
           </ThemeProvider>
    );


  }